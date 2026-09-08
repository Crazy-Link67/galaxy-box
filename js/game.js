// ==========================================
// GALAXYBOX - Main Game Loop & Input Dispatcher
// Pairs all simulation engines with input events
// ==========================================

class Game {
    constructor() {
        this.canvas = document.getElementById('game-canvas');
        this.canvas3D = document.getElementById('game-canvas-3d');
        this.minimapCanvas = document.getElementById('minimap-canvas');

        // Core systems
        this.audio = new SoundManager();
        this.particleSystem = new ParticleSystem(7000);
        this.world = new World(640, 360, Math.floor(Math.random() * 999999));
        this.entityManager = new EntityManager();
        this.disasterManager = new DisasterManager();
        this.renderer = new Renderer(this.canvas, this.minimapCanvas);
        this.renderer.camera.x = 320;
        this.renderer.camera.y = 180;
        this.renderer.camera.zoom = 2.0;

        // 3D Perspective WebGL 2.0 Renderer Engine
        this.renderer3D = (typeof Renderer3D !== 'undefined' && this.canvas3D) ? new Renderer3D(this.canvas3D) : null;
        this.is3DMode = false;
        this.isFirstPerson = false;

        this.ui = new UIManager(this);
        window.game = this;

        // Creature Possession / Direct Control
        this.controlledEntity = null;

        // Screen Shake System
        this.shakeIntensity = 0;
        this.shakeDuration = 0;

        // Simulation Loop
        this.timeScale = 1.0;
        this.isPaused = false;
        this.lastTime = performance.now();
        this.fps = 60;
        this.frameCount = 0;
        this.fpsTimer = 0;

        // Mouse & Input State
        this.mouse = {
            screenX: 0,
            screenY: 0,
            worldX: 0,
            worldY: 0,
            isDown: false,
            button: 0,
            isPanning: false,
            isOrbiting3D: false,
            isPanning3D: false,
            lastX: 0,
            lastY: 0,
            panStartX: 0,
            panStartY: 0,
            camStartX: 0,
            camStartY: 0
        };

        // Key states
        this.keys = {};
        this.virtualKeys = { up: false, down: false, left: false, right: false };
        this.touchPinchDist = null;
        this.touchMidX = 0;
        this.touchMidY = 0;
        this.camStartTouchX = 0;
        this.camStartTouchY = 0;
        this.camStartTouchZoom = 1;
        this.chronoFreezeTimer = 0;
        this.settings = null;

        // Generate initial world
        this.generateWorld('continents');

        // Setup input handlers
        this.setupInputs();

        // Handle resize
        window.addEventListener('resize', () => {
            this.renderer.resize();
            if (this.renderer3D) this.renderer3D.resize();
        });
        this.renderer.resize();
        if (this.renderer3D) this.renderer3D.resize();

        // Start Loop
        requestAnimationFrame((t) => this.loop(t));
    }

    possess(entity) {
        if (!entity || !entity.active) return;
        if (this.controlledEntity) {
            this.controlledEntity.isControlled = false;
        }
        this.controlledEntity = entity;
        entity.isControlled = true;
        this.ui.showControlHUD(entity);
        if (this.audio) this.audio.playMagic();
    }

    unpossess() {
        if (this.isFirstPerson) {
            this.toggleFirstPerson(false);
        }
        if (this.controlledEntity) {
            this.controlledEntity.isControlled = false;
            this.controlledEntity = null;
        }
        this.ui.hideControlHUD();
    }

    toggle3D(forceState = null) {
        if (!this.renderer3D || !this.renderer3D.gl) {
            if (this.ui && typeof this.ui.showNotification === 'function') {
                this.ui.showNotification("⚠️ WebGL 2.0 not available on this browser/device", "error");
            }
            return;
        }

        this.is3DMode = forceState !== null ? forceState : !this.is3DMode;

        if (this.is3DMode) {
            // Sync 3D camera target to 2D camera focus
            this.renderer3D.setTarget(this.renderer.camera.x, this.renderer.camera.y);
            this.canvas.style.display = 'none';
            this.canvas3D.style.display = 'block';
            this.renderer3D.resize();
        } else {
            // If leaving 3D mode, also exit First Person
            if (this.isFirstPerson) {
                this.toggleFirstPerson(false);
            }
            // Sync 2D camera focus to 3D target
            this.renderer.camera.x = this.renderer3D.camera.target[0];
            this.renderer.camera.y = this.renderer3D.camera.target[1];
            this.canvas3D.style.display = 'none';
            this.canvas.style.display = 'block';
            this.renderer.resize();
        }

        if (this.ui && typeof this.ui.update3DButtonState === 'function') {
            this.ui.update3DButtonState(this.is3DMode);
        }

        if (this.audio) this.audio.playMagic();

        if (this.ui && typeof this.ui.showNotification === 'function') {
            this.ui.showNotification(
                this.is3DMode
                    ? "🌐 3D Perspective Mode Activated! (Right-Drag: Orbit, Wheel: Zoom, WASD: Pan, F: First-Person)"
                    : "🗺️ 2D Tactical View Activated!",
                "info"
            );
        }
    }

    toggleFirstPerson(forceState = null) {
        if (!this.renderer3D || !this.renderer3D.gl) {
            if (this.ui && typeof this.ui.showNotification === 'function') {
                this.ui.showNotification("⚠️ WebGL 2.0 required for First-Person View", "error");
            }
            return;
        }

        const nextState = forceState !== null ? forceState : !this.isFirstPerson;

        // If turning on and not yet in 3D mode, activate 3D mode first
        if (nextState && !this.is3DMode) {
            this.toggle3D(true);
        }

        this.isFirstPerson = nextState;
        this.renderer3D.isFirstPerson = this.isFirstPerson;

        // If entering FPV without a controlled entity, auto-possess nearest creature or first creature
        if (this.isFirstPerson && (!this.controlledEntity || !this.controlledEntity.active)) {
            let candidate = this.entityManager.findNearestEntity({ id: -1, x: this.mouse.worldX || this.world.width / 2, y: this.mouse.worldY || this.world.height / 2 });
            if (!candidate && this.entityManager.entities.length > 0) {
                candidate = this.entityManager.entities[0];
            }
            if (!candidate) {
                // If world has no creatures, spawn a hero knight to possess!
                candidate = this.entityManager.spawn('phoenix_knight', this.world.width / 2, this.world.height / 2);
            }
            if (candidate) {
                this.possess(candidate);
            }
        }

        const fpvOverlay = document.getElementById('fpv-overlay');
        if (fpvOverlay) {
            fpvOverlay.style.display = this.isFirstPerson ? 'flex' : 'none';
        }

        const btnFpv = document.getElementById('btn-toggle-fpv');
        if (btnFpv) {
            btnFpv.classList.toggle('active', this.isFirstPerson);
        }

        if (this.audio) this.audio.playMagic();

        if (this.ui && typeof this.ui.showNotification === 'function') {
            this.ui.showNotification(
                this.isFirstPerson
                    ? "👁️ First-Person Mode Activated! (WASD: Move, Mouse/Drag: Look, Left-Click/Space: Attack, Q/E: Special, F: Exit)"
                    : "🌐 Exited First-Person Mode",
                "info"
            );
        }
    }

    shakeCamera(intensity = 10, duration = 20) {
        if (this.settings && this.settings.shake === false) return;
        this.shakeIntensity = Math.max(this.shakeIntensity, intensity);
        this.shakeDuration = Math.max(this.shakeDuration, duration);
    }

    generateWorld(preset = 'continents', seed = null) {
        this.unpossess();
        this.world.generate(preset, seed);
        this.entityManager.clear();
        this.disasterManager.clear();
        this.particleSystem.clear();

        // Spawn starter life if not blank
        if (preset !== 'flat' && preset !== 'ocean') {
            this.seedStarterCivilizations();
        }

        if (this.renderer3D) {
            this.renderer3D.setTarget(this.world.width / 2, this.world.height / 2, 2.5);
        }
    }

    setWorldSize(width, height) {
        this.unpossess();
        this.world.resize(width, height);
        this.entityManager.clear();
        this.disasterManager.clear();
        this.particleSystem.clear();
        this.world.generate('continents');
        this.seedStarterCivilizations();
        this.renderer.camera.x = width / 2;
        this.renderer.camera.y = height / 2;
        this.renderer.camera.zoom = width >= 800 ? 1.4 : (width >= 600 ? 1.8 : 2.2);
        if (this.renderer3D) {
            this.renderer3D.setTarget(width / 2, height / 2, 2.5);
        }
    }

    seedStarterCivilizations() {
        const w = this.world.width;
        const h = this.world.height;

        // Scale kingdoms with world scale: 3 on retro, 5-6 on huge, 8-10 on colossal
        const targetSettlements = Math.max(3, Math.min(10, Math.floor(w / 110)));
        let settlementsPlaced = 0;
        for (let attempts = 0; attempts < 600 && settlementsPlaced < targetSettlements; attempts++) {
            const rx = Math.floor(20 + Math.random() * (w - 40));
            const ry = Math.floor(20 + Math.random() * (h - 40));

            if (this.world.getTile(rx, ry) === TILES.GRASS) {
                // Spawn founder human settlement
                for (let p = 0; p < 4; p++) {
                    this.entityManager.spawn('human', rx + (Math.random() - 0.5) * 4, ry + (Math.random() - 0.5) * 4);
                }
                // Spawn starter livestock
                for (let s = 0; s < 3; s++) {
                    this.entityManager.spawn(Math.random() < 0.6 ? 'sheep' : 'cow', rx + (Math.random() - 0.5) * 8, ry + (Math.random() - 0.5) * 8);
                }
                settlementsPlaced++;
            }
        }

        // Spawn wild creatures distributed across continents
        const wildCount = Math.max(8, Math.floor((w * h) / 16000));
        for (let i = 0; i < wildCount; i++) {
            const rx = Math.floor(Math.random() * w);
            const ry = Math.floor(Math.random() * h);
            const tile = this.world.getTile(rx, ry);
            if (tile === TILES.FOREST) {
                this.entityManager.spawn(Math.random() < 0.7 ? 'wolf' : 'bear', rx, ry);
            } else if (tile === TILES.WATER) {
                if (Math.random() < 0.4) this.entityManager.spawn('duck', rx, ry);
            }
        }
    }

    setupInputs() {
        const container = document.getElementById('canvas-container') || this.canvas;

        // Pointer down
        container.addEventListener('mousedown', (e) => this.handleMouseDown(e));
        window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        window.addEventListener('mouseup', (e) => this.handleMouseUp(e));
        container.addEventListener('contextmenu', (e) => e.preventDefault());

        // Wheel zoom
        container.addEventListener('wheel', (e) => this.handleWheel(e), { passive: false });

        // Touch support (1-finger tool / attack, 2-finger pinch-to-zoom & camera pan)
        container.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: false });
        container.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: false });
        container.addEventListener('touchend', (e) => this.handleTouchEnd(e));
        container.addEventListener('touchcancel', (e) => this.handleTouchEnd(e));

        // Mobile Web Audio Unlock (User gesture requirement)
        const unlockAudio = () => {
            this.audio.ensureContext();
            if (this.audio.ctx && this.audio.ctx.state === 'suspended') {
                this.audio.ctx.resume();
            }
        };
        window.addEventListener('touchstart', unlockAudio, { passive: true });
        window.addEventListener('pointerdown', unlockAudio, { passive: true });

        // Keyboard shortcuts
        window.addEventListener('keydown', (e) => this.handleKeyDown(e));
        window.addEventListener('keyup', (e) => this.handleKeyUp(e));

        // Clear keys on window blur or cancel to prevent sticking
        const clearKeys = () => {
            this.keys = {};
            this.virtualKeys = { up: false, down: false, left: false, right: false };
        };
        window.addEventListener('blur', clearKeys);
        window.addEventListener('pointercancel', clearKeys);
    }

    handleMouseDown(e) {
        this.audio.ensureContext();
        this.mouse.button = e.button;

        if (this.controlledEntity && this.controlledEntity.active) {
            if (e.button === 0) {
                // Primary attack towards mouse cursor
                this.controlledEntity.usePrimaryAbility(this.mouse.worldX, this.mouse.worldY, this.world, this.entityManager, this.particleSystem, this.audio);
                return;
            } else if (e.button === 2) {
                // Special ability
                this.controlledEntity.useSpecialAbility(this.world, this.entityManager, this.disasterManager, this.particleSystem, this.audio);
                return;
            }
        }

        // Camera Orbiting / Panning
        if (this.is3DMode && this.renderer3D) {
            if (e.button === 2 || (e.button === 0 && e.altKey)) {
                // 3D Camera Orbit
                this.mouse.isOrbiting3D = true;
                this.mouse.lastX = e.clientX;
                this.mouse.lastY = e.clientY;
                return;
            } else if (e.button === 1 || (e.button === 0 && e.shiftKey)) {
                // 3D Camera Pan
                this.mouse.isPanning3D = true;
                this.mouse.lastX = e.clientX;
                this.mouse.lastY = e.clientY;
                return;
            }
        } else {
            if (e.button === 1 || e.button === 2 || (e.button === 0 && e.shiftKey)) {
                // 2D Pan camera
                this.mouse.isPanning = true;
                this.mouse.panStartX = e.clientX;
                this.mouse.panStartY = e.clientY;
                this.mouse.camStartX = this.renderer.camera.x;
                this.mouse.camStartY = this.renderer.camera.y;
                return;
            }
        }

        if (e.button === 0) {
            this.mouse.isDown = true;
            this.applyTool(this.mouse.worldX, this.mouse.worldY, true);
        }
    }

    handleMouseMove(e) {
        this.mouse.screenX = e.clientX;
        this.mouse.screenY = e.clientY;

        const wPos = (this.is3DMode && this.renderer3D)
            ? this.renderer3D.screenToWorld(e.clientX, e.clientY, this.world)
            : this.renderer.screenToWorld(e.clientX, e.clientY);
        this.mouse.worldX = wPos.x;
        this.mouse.worldY = wPos.y;

        if (this.is3DMode && this.renderer3D) {
            const dx = (e.movementX !== undefined && document.pointerLockElement) ? e.movementX : (e.clientX - this.mouse.lastX);
            const dy = (e.movementY !== undefined && document.pointerLockElement) ? e.movementY : (e.clientY - this.mouse.lastY);
            this.mouse.lastX = e.clientX;
            this.mouse.lastY = e.clientY;

            if (this.isFirstPerson) {
                // First-person mouse look with pointer lock, mouse drag, or right button
                if (document.pointerLockElement || this.mouse.isOrbiting3D || this.mouse.button === 2 || this.mouse.isDown || (e.buttons && e.buttons > 0)) {
                    this.renderer3D.rotateCamera(dx * 0.75, dy * 0.75);
                }
                return;
            }

            if (this.mouse.isOrbiting3D) {
                this.renderer3D.orbit(dx, dy);
                return;
            }
            if (this.mouse.isPanning3D) {
                this.renderer3D.pan(dx, dy);
                return;
            }
        } else {
            if (this.mouse.isPanning) {
                const dx = (e.clientX - this.mouse.panStartX) / this.renderer.camera.zoom;
                const dy = (e.clientY - this.mouse.panStartY) / this.renderer.camera.zoom;
                this.renderer.camera.x = this.mouse.camStartX - dx;
                this.renderer.camera.y = this.mouse.camStartY - dy;
                return;
            }
        }

        if (this.mouse.isDown && !this.controlledEntity) {
            this.applyTool(this.mouse.worldX, this.mouse.worldY, false);
        }
    }

    handleMouseUp(e) {
        if (this.mouse.isOrbiting3D) this.mouse.isOrbiting3D = false;
        if (this.mouse.isPanning3D) this.mouse.isPanning3D = false;
        if (this.mouse.isPanning) this.mouse.isPanning = false;

        if (this.mouse.isDown) {
            this.mouse.isDown = false;
            // If dragging an entity with God's Hand, fling it!
            if (this.disasterManager.grabbedEntity) {
                const ent = this.disasterManager.grabbedEntity;
                ent.grabbed = false;
                ent.x = this.mouse.worldX;
                ent.y = this.mouse.worldY;
                ent.vx = (this.mouse.worldX - this.disasterManager.grabStartX) * 0.4;
                ent.vy = (this.mouse.worldY - this.disasterManager.grabStartY) * 0.4;
                this.disasterManager.grabbedEntity = null;
                this.particleSystem.burst(ent.x, ent.y, 8, ['#ffffff', '#38bdf8'], 1, 3, 1, 2);
            }
        }
    }

    handleWheel(e) {
        e.preventDefault();
        if (this.is3DMode && this.renderer3D) {
            this.renderer3D.zoom(e.deltaY);
            return;
        }

        const zoomFactor = e.deltaY < 0 ? 1.15 : 0.87;
        const cam = this.renderer.camera;

        // Zoom centered on cursor
        const beforeZoom = this.renderer.screenToWorld(e.clientX, e.clientY);
        cam.zoom = Math.max(cam.minZoom, Math.min(cam.maxZoom, cam.zoom * zoomFactor));
        const afterZoom = this.renderer.screenToWorld(e.clientX, e.clientY);

        cam.x += (beforeZoom.x - afterZoom.x);
        cam.y += (beforeZoom.y - afterZoom.y);
    }

    handleTouchStart(e) {
        if (e.target !== this.canvas) return;
        this.audio.ensureContext();

        if (e.touches.length === 1) {
            const touch = e.touches[0];
            const wPos = this.renderer.screenToWorld(touch.clientX, touch.clientY);
            this.mouse.screenX = touch.clientX;
            this.mouse.screenY = touch.clientY;
            this.mouse.worldX = wPos.x;
            this.mouse.worldY = wPos.y;

            if (this.controlledEntity && this.controlledEntity.active) {
                this.controlledEntity.usePrimaryAbility(wPos.x, wPos.y, this.world, this.entityManager, this.particleSystem, this.audio);
                return;
            }

            this.mouse.isDown = true;
            this.applyTool(wPos.x, wPos.y, true);
        } else if (e.touches.length === 2) {
            e.preventDefault();
            this.mouse.isDown = false;
            const t1 = e.touches[0];
            const t2 = e.touches[1];
            this.touchPinchDist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
            this.touchMidX = (t1.clientX + t2.clientX) / 2;
            this.touchMidY = (t1.clientY + t2.clientY) / 2;
            this.camStartTouchX = this.renderer.camera.x;
            this.camStartTouchY = this.renderer.camera.y;
            this.camStartTouchZoom = this.renderer.camera.zoom;
        }
    }

    handleTouchMove(e) {
        if (e.target !== this.canvas) return;
        e.preventDefault();

        if (e.touches.length === 1 && this.mouse.isDown && !this.controlledEntity) {
            const touch = e.touches[0];
            const wPos = this.renderer.screenToWorld(touch.clientX, touch.clientY);
            this.mouse.screenX = touch.clientX;
            this.mouse.screenY = touch.clientY;
            this.mouse.worldX = wPos.x;
            this.mouse.worldY = wPos.y;
            this.applyTool(wPos.x, wPos.y, false);
        } else if (e.touches.length === 2 && this.touchPinchDist) {
            const t1 = e.touches[0];
            const t2 = e.touches[1];
            const newDist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
            const scale = newDist / Math.max(1, this.touchPinchDist);
            const cam = this.renderer.camera;

            cam.zoom = Math.max(cam.minZoom, Math.min(cam.maxZoom, this.camStartTouchZoom * scale));

            const curMidX = (t1.clientX + t2.clientX) / 2;
            const curMidY = (t1.clientY + t2.clientY) / 2;
            const dx = (curMidX - this.touchMidX) / cam.zoom;
            const dy = (curMidY - this.touchMidY) / cam.zoom;
            cam.x = this.camStartTouchX - dx;
            cam.y = this.camStartTouchY - dy;
        }
    }

    handleTouchEnd(e) {
        if (e.touches.length < 2) {
            this.touchPinchDist = null;
        }
        if (e.touches.length === 0) {
            this.mouse.isDown = false;
        }
    }

    handleKeyDown(e) {
        this.keys[e.key.toLowerCase()] = true;

        // Ctrl+S / Cmd+S: Open Save Menu
        if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
            e.preventDefault();
            this.ui.showModal('modal-save');
            this.ui.refreshSaveSlots();
            if (this.ui && typeof this.ui.showNotification === 'function') {
                this.ui.showNotification("💾 World Save & Load Menu", "info");
            }
            return;
        }

        // Escape to Unpossess / Exit Control
        if (e.key === 'Escape') {
            this.unpossess();
            return;
        }

        // V key: Toggle 2D / 3D Perspective Mode
        if (e.key === 'v' || e.key === 'V') {
            this.toggle3D();
            return;
        }

        // F key: Toggle First-Person Control Mode
        if (e.key === 'f' || e.key === 'F') {
            this.toggleFirstPerson();
            return;
        }

        // Q or E: Special Ability when controlled
        if ((e.key === 'q' || e.key === 'e') && this.controlledEntity && this.controlledEntity.active) {
            this.controlledEntity.useSpecialAbility(this.world, this.entityManager, this.disasterManager, this.particleSystem, this.audio);
            return;
        }

        // C key: Quick possess creature under cursor
        if (e.key === 'c') {
            if (this.controlledEntity) {
                this.unpossess();
            } else {
                const nearest = this.entityManager.findNearestEntity({ id: -1, x: this.mouse.worldX, y: this.mouse.worldY });
                if (nearest && Math.hypot(nearest.x - this.mouse.worldX, nearest.y - this.mouse.worldY) < 16) {
                    this.possess(nearest);
                }
            }
            return;
        }

        // Categories 1 to 6
        if (['1', '2', '3', '4', '5', '6'].includes(e.key)) {
            const cat = CATEGORIES[parseInt(e.key) - 1];
            if (cat) this.ui.switchCategory(cat.id);
        }

        // Space: Attack if controlled, else toggle Pause
        if (e.code === 'Space') {
            e.preventDefault();
            if (this.controlledEntity && this.controlledEntity.active) {
                this.controlledEntity.usePrimaryAbility(this.mouse.worldX, this.mouse.worldY, this.world, this.entityManager, this.particleSystem, this.audio);
                return;
            }
            this.timeScale = this.timeScale === 0 ? 1 : 0;
            document.querySelectorAll('.time-btn').forEach(b => {
                b.classList.toggle('active', parseFloat(b.dataset.speed) === this.timeScale);
            });
            return;
        }

        // H key: Toggle Cinematic Mode (HUD visibility)
        if (e.key === 'h' || e.key === 'H') {
            document.body.classList.toggle('cinematic');
            return;
        }

        // Brush resize [ and ]
        if (e.key === '[') this.ui.setBrushSize(this.ui.brushSize - 2);
        if (e.key === ']') this.ui.setBrushSize(this.ui.brushSize + 2);
    }

    handleKeyUp(e) {
        this.keys[e.key.toLowerCase()] = false;
    }

    // ==========================================
    // TOOL APPLICATION DISPATCHER
    // ==========================================
    applyTool(wx, wy, isFirstClick = false) {
        const tool = this.ui.activeTool;
        const bSize = this.ui.brushSize;
        const tx = Math.floor(wx);
        const ty = Math.floor(wy);

        // 1. DESTRUCTION & CHAOS
        if (tool === 'nuke') {
            if (isFirstClick) this.disasterManager.triggerNuke(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'duck_barrage') {
            if (isFirstClick) this.disasterManager.triggerDuckBarrage(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'plasma_barrage') {
            if (isFirstClick) this.disasterManager.triggerPlasmaBarrage(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'gamma_ray') {
            this.disasterManager.triggerGammaRay(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'antimatter') {
            if (isFirstClick) this.disasterManager.triggerAntimatter(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'blackhole') {
            if (isFirstClick) this.disasterManager.spawnBlackHole(wx, wy, this.audio);
        } else if (tool === 'laser') {
            this.disasterManager.triggerOrbitalLaser(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'meteor') {
            if (isFirstClick) this.disasterManager.spawnMeteor(wx, wy);
        } else if (tool === 'cluster') {
            if (isFirstClick) this.disasterManager.triggerClusterBomb(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'disintegrator') {
            this.disasterManager.triggerDisintegrator(wx, wy, this.world, this.entityManager, this.particleSystem);
        } else if (tool === 'tnt') {
            if (isFirstClick) this.disasterManager.triggerExplosion(wx, wy, 12, 1.2, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'supernova') {
            if (isFirstClick) this.disasterManager.triggerSupernova(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'corrosion') {
            if (isFirstClick) this.disasterManager.triggerCorrosionBomb(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'nuke_missile') {
            if (isFirstClick) this.disasterManager.triggerNukeMissile(wx, wy, this.audio);
        } else if (tool === 'ion_cannon') {
            if (isFirstClick) this.disasterManager.triggerIonCannon(wx, wy);
        } else if (tool === 'rift') {
            if (isFirstClick) this.disasterManager.triggerDimensionRift(wx, wy);
        } else if (tool === 'napalm_strike') {
            if (isFirstClick) this.disasterManager.triggerNapalmStrike(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'kinetic_strike') {
            if (isFirstClick) this.disasterManager.triggerKineticStrike(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'void_implosion') {
            if (isFirstClick) this.disasterManager.triggerVoidImplosion(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'supernova_implosion') {
            if (isFirstClick) this.disasterManager.triggerSupernovaCollapse(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'antimatter_missile') {
            if (isFirstClick) this.disasterManager.triggerAntimatterMissile(wx, wy, this.audio);
        } else if (tool === 'orbital_strike') {
            if (isFirstClick) this.disasterManager.triggerOrbitalStrike(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'emp_blast') {
            if (isFirstClick) this.disasterManager.triggerEmpBlast(wx, wy, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'hellfire_missile') {
            if (isFirstClick) this.disasterManager.triggerHellfireMissile(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'tsar_bomba') {
            if (isFirstClick) this.disasterManager.triggerTsarBomba(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'toxic_cloud') {
            if (isFirstClick) this.disasterManager.triggerToxicCloud(wx, wy, this.audio);
        } else if (tool === 'acid_missile') {
            if (isFirstClick) this.disasterManager.triggerAcidMissile(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'ion_storm_barrage') {
            if (isFirstClick) this.disasterManager.triggerIonStormBarrage(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'chronos_rift') {
            if (isFirstClick) this.disasterManager.triggerChronosRift(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'cryo_bomb') {
            if (isFirstClick) this.disasterManager.triggerCryoBomb(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'orbital_death_ray') {
            if (isFirstClick) this.disasterManager.triggerOrbitalDeathRay(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'plague_comet') {
            if (isFirstClick) this.disasterManager.triggerPlagueComet(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'tectonic_rupture') {
            if (isFirstClick) this.disasterManager.triggerTectonicRupture(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'nanite_swarm') {
            if (isFirstClick) this.disasterManager.triggerNaniteSwarm(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        }

        // 2. NATURE & DISASTERS
        else if (tool === 'volcano') {
            if (isFirstClick) {
                this.disasterManager.spawnVolcano(wx, wy, this.world);
                if (this.audio) this.audio.playExplosion(1.5);
            }
        } else if (tool === 'supervolcano') {
            if (isFirstClick) this.disasterManager.spawnSupervolcano(wx, wy, this.world, this.audio);
        } else if (tool === 'solar_flare') {
            if (isFirstClick) this.disasterManager.triggerSolarFlare(this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'frost_tempest') {
            if (isFirstClick) this.disasterManager.triggerFrostTempest(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'crystal_spire') {
            if (isFirstClick) this.disasterManager.triggerCrystalSpire(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'aurora_borealis') {
            if (isFirstClick) this.disasterManager.triggerAuroraBorealis(this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'tornado') {
            if (isFirstClick) {
                this.disasterManager.spawnTornado(wx, wy);
                if (this.audio) this.audio.playThunder();
            }
        } else if (tool === 'fire_tornado') {
            if (isFirstClick) this.disasterManager.spawnFireTornado(wx, wy, this.audio);
        } else if (tool === 'meteor_shower') {
            if (isFirstClick) this.disasterManager.triggerMeteorShower(wx, wy, this.audio);
        } else if (tool === 'meteor_rain') {
            if (isFirstClick) this.disasterManager.triggerMeteorRain(wx, wy, this.audio);
        } else if (tool === 'lightning_storm') {
            if (isFirstClick) this.disasterManager.triggerLightningStorm(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'blizzard_vortex') {
            if (isFirstClick) this.disasterManager.triggerBlizzardVortex(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'sand_typhoon') {
            if (isFirstClick) this.disasterManager.triggerSandTyphoon(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'magma_surge') {
            if (isFirstClick) this.disasterManager.triggerMagmaSurge(wx, wy, this.world, this.particleSystem, this.audio);
        } else if (tool === 'spore_bloom') {
            if (isFirstClick) this.disasterManager.triggerSporeBloom(wx, wy, this.world, this.particleSystem, this.audio);
        } else if (tool === 'whirlpool') {
            if (isFirstClick) this.disasterManager.spawnWhirlpool(wx, wy, this.audio);
        } else if (tool === 'earthquake') {
            if (isFirstClick) this.disasterManager.triggerEarthquake(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'lightning') {
            if (isFirstClick) this.disasterManager.triggerLightning(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'tsunami') {
            if (isFirstClick) this.disasterManager.triggerTsunami(wx, wy, this.world, this.particleSystem, this.audio);
        } else if (tool === 'rain') {
            this.disasterManager.startStorm('rain', 800);
        } else if (tool === 'snowfall' || (tool === 'snow' && this.ui.activeCategory === 'nature')) {
            this.disasterManager.startStorm('snow', 800);
        } else if (tool === 'acidrain') {
            this.disasterManager.startStorm('acid', 800);
        } else if (tool === 'sandstorm') {
            this.disasterManager.startStorm('sandstorm', 800);
        } else if (tool === 'clone_rain') {
            this.disasterManager.triggerCloneRain(800);
        } else if (tool === 'geyser') {
            if (isFirstClick) this.disasterManager.triggerGeyser(wx, wy, this.world, this.particleSystem, this.audio);
        } else if (tool === 'wildfire') {
            this.world.ignite(tx, ty, 80);
        } else if (tool === 'gravity_inversion') {
            if (isFirstClick) this.disasterManager.triggerGravityInversion(wx, wy, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'monsoon') {
            if (isFirstClick) this.disasterManager.triggerMonsoon(this.world, this.disasterManager, this.particleSystem, this.audio);
        } else if (tool === 'solar_eclipse') {
            if (isFirstClick) this.disasterManager.triggerSolarEclipse(this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'ash_storm') {
            this.disasterManager.startStorm('ash', 800);
        }

        // 3. LANDSCAPING
        else if (tool === 'deep_water') this.world.applyBrush(wx, wy, bSize, TILES.DEEP_WATER);
        else if (tool === 'water') this.world.applyBrush(wx, wy, bSize, TILES.WATER);
        else if (tool === 'sand') this.world.applyBrush(wx, wy, bSize, TILES.SAND);
        else if (tool === 'soil') this.world.applyBrush(wx, wy, bSize, TILES.SOIL);
        else if (tool === 'grass') this.world.applyBrush(wx, wy, bSize, TILES.GRASS);
        else if (tool === 'forest') this.world.applyBrush(wx, wy, bSize, TILES.FOREST);
        else if (tool === 'stone') this.world.applyBrush(wx, wy, bSize, TILES.STONE);
        else if (tool === 'mountain') this.world.applyBrush(wx, wy, bSize, TILES.HIGH_MOUNTAIN);
        else if (tool === 'snow') this.world.applyBrush(wx, wy, bSize, TILES.SNOW);
        else if (tool === 'ice') this.world.applyBrush(wx, wy, bSize, TILES.ICE);
        else if (tool === 'lava') this.world.applyBrush(wx, wy, bSize, TILES.LAVA);
        else if (tool === 'acid') this.world.applyBrush(wx, wy, bSize, TILES.ACID);
        else if (tool === 'bedrock') this.world.applyBrush(wx, wy, bSize, TILES.BEDROCK);
        else if (tool === 'obsidian') this.world.applyBrush(wx, wy, bSize, TILES.OBSIDIAN);
        else if (tool === 'crystal') this.world.applyBrush(wx, wy, bSize, TILES.CRYSTAL);
        else if (tool === 'nebula') this.world.applyBrush(wx, wy, bSize, TILES.NEBULA);
        else if (tool === 'stardust') this.world.applyBrush(wx, wy, bSize, TILES.STARDUST);
        else if (tool === 'magma_rock') this.world.applyBrush(wx, wy, bSize, TILES.MAGMA_ROCK);
        else if (tool === 'bioluminescent_moss') this.world.applyBrush(wx, wy, bSize, TILES.BIOLUMINESCENT_MOSS);
        else if (tool === 'gold_ore') this.world.applyBrush(wx, wy, bSize, TILES.GOLD_ORE);
        else if (tool === 'mushroom_spore') this.world.applyBrush(wx, wy, bSize, TILES.MUSHROOM_SPORE);
        else if (tool === 'honey_comb') this.world.applyBrush(wx, wy, bSize, TILES.HONEY_COMB);
        else if (tool === 'holy_ground') this.world.applyBrush(wx, wy, bSize, TILES.HOLY_GROUND);
        else if (tool === 'blood_river') this.world.applyBrush(wx, wy, bSize, TILES.BLOOD_RIVER);
        else if (tool === 'poison_swamp') this.world.applyBrush(wx, wy, bSize, TILES.POISON_SWAMP);
        else if (tool === 'plasma_field') this.world.applyBrush(wx, wy, bSize, TILES.PLASMA_FIELD);
        else if (tool === 'living_bramble') this.world.applyBrush(wx, wy, bSize, TILES.LIVING_BRAMBLE);
        else if (tool === 'aether_fluid') this.world.applyBrush(wx, wy, bSize, TILES.AETHER_FLUID);
        else if (tool === 'meteorite_ore') this.world.applyBrush(wx, wy, bSize, TILES.METEORITE_ORE);
        else if (tool === 'biome_savanna') this.world.applyBrush(wx, wy, bSize, 'biome_savanna');
        else if (tool === 'biome_tundra') this.world.applyBrush(wx, wy, bSize, 'biome_tundra');
        else if (tool === 'biome_jungle') this.world.applyBrush(wx, wy, bSize, 'biome_jungle');
        else if (tool === 'deforest') this.world.applyBrush(wx, wy, bSize, 'deforest');
        else if (tool === 'quicksand') this.world.applyBrush(wx, wy, bSize, TILES.QUICKSAND);
        else if (tool === 'level_terrain') {
            const centerTile = this.world.getTile(tx, ty);
            this.world.applyBrush(wx, wy, bSize, centerTile);
        }
        else if (tool === 'raise') this.world.applyBrush(wx, wy, bSize, 'raise');
        else if (tool === 'lower') this.world.applyBrush(wx, wy, bSize, 'lower');
        else if (tool === 'sponge') this.world.applyBrush(wx, wy, bSize, 'sponge');
        else if (tool === 'fertilizer') this.world.applyBrush(wx, wy, bSize, 'fertilizer');
        else if (tool === 'coral_reef') this.world.applyBrush(wx, wy, bSize, TILES.CORAL_REEF);
        else if (tool === 'tar_pit') this.world.applyBrush(wx, wy, bSize, TILES.TAR_PIT);
        else if (tool === 'glowcap_mushroom') this.world.applyBrush(wx, wy, bSize, TILES.GLOWCAP_MUSHROOM);
        else if (tool === 'aether_crystal') this.world.applyBrush(wx, wy, bSize, TILES.AETHER_CRYSTAL);
        else if (tool === 'volcanic_caldera') this.world.applyBrush(wx, wy, bSize, TILES.VOLCANIC_CALDERA);
        else if (tool === 'enchanted_grove') this.world.applyBrush(wx, wy, bSize, TILES.ENCHANTED_GROVE);
        else if (tool === 'sculpt_peak') {
            for (let dy = -bSize * 2; dy <= bSize * 2; dy++) {
                for (let dx = -bSize * 2; dx <= bSize * 2; dx++) {
                    const distSq = dx * dx + dy * dy;
                    if (distSq <= bSize * bSize * 4) {
                        const px = Math.floor(wx + dx), py = Math.floor(wy + dy);
                        if (this.world.inBounds(px, py)) {
                            const d = Math.sqrt(distSq) / (bSize * 2);
                            const t = d < 0.35 ? TILES.HIGH_MOUNTAIN : (d < 0.7 ? TILES.STONE : TILES.SOIL);
                            this.world.setTile(px, py, t);
                        }
                    }
                }
            }
            this.particleSystem.burst(wx, wy, 15, ['#94a3b8', '#64748b', '#ffffff'], 1.5, 4, 1, 2);
        }
        else if (tool === 'carve_canyon') {
            for (let dy = -bSize; dy <= bSize; dy++) {
                for (let dx = -bSize; dx <= bSize; dx++) {
                    if (dx * dx + dy * dy <= bSize * bSize) {
                        const px = Math.floor(wx + dx), py = Math.floor(wy + dy);
                        if (this.world.inBounds(px, py)) {
                            this.world.setTile(px, py, TILES.DEEP_WATER);
                        }
                    }
                }
            }
            this.particleSystem.burst(wx, wy, 12, ['#0284c7', '#0369a1'], 1.5, 3, 1, 2);
        }

        // 4. VARIOUS POWERS & MIRACLES
        else if (tool === 'hand') {
            if (isFirstClick) {
                const nearest = this.entityManager.findNearestEntity({ id: -1, x: wx, y: wy });
                if (nearest && Math.hypot(nearest.x - wx, nearest.y - wy) < 12) {
                    this.disasterManager.grabbedEntity = nearest;
                    this.disasterManager.grabStartX = wx;
                    this.disasterManager.grabStartY = wy;
                    nearest.grabbed = true;
                }
            } else if (this.disasterManager.grabbedEntity) {
                this.disasterManager.grabbedEntity.x = wx;
                this.disasterManager.grabbedEntity.y = wy;
            }
        } else if (tool === 'heatray') {
            this.disasterManager.triggerHeatRay(wx, wy, this.world, this.particleSystem);
        } else if (tool === 'freezeray') {
            this.disasterManager.triggerFreezeRay(wx, wy, this.world, this.entityManager, this.particleSystem);
        } else if (tool === 'shield') {
            if (isFirstClick) this.disasterManager.triggerForcefield(wx, wy);
        } else if (tool === 'mind_control') {
            if (isFirstClick) this.disasterManager.triggerMindControl(wx, wy, this.entityManager, this.particleSystem);
        } else if (tool === 'overclock') {
            if (isFirstClick) this.disasterManager.triggerOverclock(wx, wy, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'necromancy') {
            if (isFirstClick) this.disasterManager.triggerNecromancy(wx, wy, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'chrono_freeze') {
            if (isFirstClick) this.disasterManager.triggerChronoFreeze(this, this.audio);
        } else if (tool === 'genesis_wave') {
            if (isFirstClick) this.disasterManager.triggerGenesisWave(this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'duck_stampede') {
            if (isFirstClick) this.disasterManager.triggerDuckStampede(wx, wy, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'sanctuary_beacon') {
            if (isFirstClick) this.disasterManager.triggerSanctuaryBeacon(wx, wy, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'war_drum') {
            if (isFirstClick) this.disasterManager.triggerWarHorn(this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'bounty_blessing') {
            if (isFirstClick) this.disasterManager.triggerBountyBlessing(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'resurrection_ray') {
            if (isFirstClick) this.entityManager.resurrectCorpses(wx, wy, bSize * 6 + 20, this.particleSystem, this.audio);
        } else if (tool === 'invisibility') {
            if (isFirstClick) {
                for (const ent of this.entityManager.entities) {
                    if (Math.hypot(ent.x - wx, ent.y - wy) < bSize * 6 + 15) {
                        ent.invisibleTimer = 900;
                        this.particleSystem.burst(ent.x, ent.y, 8, ['#94a3b8', '#ffffff'], 0.8, 2, 1, 2);
                    }
                }
                if (this.audio) this.audio.playMagic();
            }
        } else if (tool === 'divine_smite') {
            if (isFirstClick) {
                const ent = this.entityManager.findNearestEntity({ id: -1, x: wx, y: wy });
                if (ent && Math.hypot(ent.x - wx, ent.y - wy) < 20) {
                    ent.takeDamage(9999, 'divine', this.particleSystem, this.audio);
                    this.particleSystem.burst(wx, wy, 20, ['#fef08a', '#eab308', '#ffffff'], 2, 5, 2, 4);
                    if (this.audio) this.audio.playHammerOfDawn();
                }
            }
        } else if (tool === 'curse_frog') {
            if (isFirstClick) {
                const ent = this.entityManager.findNearestEntity({ id: -1, x: wx, y: wy });
                if (ent && Math.hypot(ent.x - wx, ent.y - wy) < 20) {
                    this.entityManager.polymorph(ent, 'frog', this.particleSystem, this.audio);
                }
            }
        } else if (tool === 'speed_boost') {
            if (isFirstClick) {
                for (const ent of this.entityManager.entities) {
                    if (Math.hypot(ent.x - wx, ent.y - wy) < bSize * 6 + 15) {
                        ent.speedMultiplier = 3.0;
                        ent.overclocked = 600;
                        this.particleSystem.burst(ent.x, ent.y, 10, ['#38bdf8', '#00f0ff'], 1.5, 4, 1, 2);
                    }
                }
                if (this.audio) this.audio.playMagic();
            }
        } else if (tool === 'giant_growth') {
            if (isFirstClick) {
                const ent = this.entityManager.findNearestEntity({ id: -1, x: wx, y: wy });
                if (ent && Math.hypot(ent.x - wx, ent.y - wy) < 20) {
                    ent.scale = Math.min(6.0, ent.scale * 2.2);
                    ent.maxHp *= 3;
                    ent.hp = ent.maxHp;
                    ent.attack *= 2;
                    this.particleSystem.burst(ent.x, ent.y, 25, ['#22c55e', '#eab308'], 2, 5, 2, 4);
                    if (this.audio) this.audio.playRoar();
                }
            }
        } else if (tool === 'equip_plasma_rifle') {
            if (isFirstClick) {
                const ent = this.entityManager.equipNearest(wx, wy, 'plasma_rifle');
                if (ent) this.particleSystem.burst(ent.x, ent.y, 14, ['#00e5ff', '#38bdf8'], 1.2, 3.5, 1, 2);
            }
        } else if (tool === 'equip_energy_shield') {
            if (isFirstClick) {
                const ent = this.entityManager.equipNearest(wx, wy, 'energy_shield');
                if (ent) this.particleSystem.burst(ent.x, ent.y, 14, ['#38bdf8', '#818cf8'], 1.2, 3.5, 1, 2);
            }
        } else if (tool === 'equip_poison_dagger') {
            if (isFirstClick) {
                const ent = this.entityManager.equipNearest(wx, wy, 'poison_dagger');
                if (ent) this.particleSystem.burst(ent.x, ent.y, 14, ['#22c55e', '#a3e635'], 1.2, 3.5, 1, 2);
            }
        } else if (tool === 'equip_gravity_hammer') {
            if (isFirstClick) {
                const ent = this.entityManager.equipNearest(wx, wy, 'gravity_hammer');
                if (ent) this.particleSystem.burst(ent.x, ent.y, 16, ['#8b5cf6', '#c084fc'], 1.5, 4, 1.5, 3);
            }
        } else if (tool === 'equip_storm_staff') {
            if (isFirstClick) {
                const ent = this.entityManager.equipNearest(wx, wy, 'storm_staff');
                if (ent) this.particleSystem.burst(ent.x, ent.y, 14, ['#38bdf8', '#facc15'], 1.2, 3.5, 1, 2);
            }
        } else if (tool === 'equip_grenade_launcher') {
            if (isFirstClick) {
                const ent = this.entityManager.equipNearest(wx, wy, 'grenade_launcher');
                if (ent) this.particleSystem.burst(ent.x, ent.y, 14, ['#f97316', '#ef4444'], 1.2, 3.5, 1, 2);
            }
        } else if (tool === 'equip_thunder_hammer') {
            if (isFirstClick) {
                const ent = this.entityManager.equipNearest(wx, wy, 'thunder_hammer');
                if (ent) this.particleSystem.burst(ent.x, ent.y, 16, ['#38bdf8', '#facc15'], 1.5, 4, 1.5, 3);
            }
        } else if (tool === 'equip_flamethrower') {
            if (isFirstClick) {
                const ent = this.entityManager.equipNearest(wx, wy, 'flamethrower');
                if (ent) this.particleSystem.burst(ent.x, ent.y, 16, ['#f97316', '#ef4444'], 1.5, 4, 1.5, 3);
            }
        } else if (tool === 'equip_frost_wand') {
            if (isFirstClick) {
                const ent = this.entityManager.equipNearest(wx, wy, 'frost_wand');
                if (ent) this.particleSystem.burst(ent.x, ent.y, 16, ['#a5f3fc', '#38bdf8'], 1.5, 4, 1.5, 3);
            }
        } else if (tool === 'equip_chaos_mace') {
            if (isFirstClick) {
                const ent = this.entityManager.equipNearest(wx, wy, 'chaos_mace');
                if (ent) this.particleSystem.burst(ent.x, ent.y, 16, ['#ef4444', '#78350f'], 1.5, 4, 1.5, 3);
            }
        } else if (tool === 'equip_shuriken') {
            if (isFirstClick) {
                const ent = this.entityManager.equipNearest(wx, wy, 'shuriken');
                if (ent) this.particleSystem.burst(ent.x, ent.y, 14, ['#cbd5e1', '#ffffff'], 1.2, 3.5, 1, 2);
            }
        } else if (tool === 'equip_sword') {
            if (isFirstClick) {
                const ent = this.entityManager.equipNearest(wx, wy, 'sword');
                if (ent) this.particleSystem.burst(ent.x, ent.y, 12, ['#e2e8f0', '#facc15'], 1, 3, 1, 2);
            }
        } else if (tool === 'equip_bow') {
            if (isFirstClick) {
                const ent = this.entityManager.equipNearest(wx, wy, 'bow');
                if (ent) this.particleSystem.burst(ent.x, ent.y, 12, ['#b45309', '#cbd5e1'], 1, 3, 1, 2);
            }
        } else if (tool === 'equip_blaster') {
            if (isFirstClick) {
                const ent = this.entityManager.equipNearest(wx, wy, 'blaster');
                if (ent) this.particleSystem.burst(ent.x, ent.y, 12, ['#06b6d4', '#38bdf8'], 1, 3, 1, 2);
            }
        } else if (tool === 'equip_staff') {
            if (isFirstClick) {
                const ent = this.entityManager.equipNearest(wx, wy, 'staff');
                if (ent) this.particleSystem.burst(ent.x, ent.y, 12, ['#a855f7', '#c084fc'], 1, 3, 1, 2);
            }
        } else if (tool === 'equip_void_scythe') {
            if (isFirstClick) {
                const ent = this.entityManager.equipNearest(wx, wy, 'void_scythe');
                if (ent) this.particleSystem.burst(ent.x, ent.y, 14, ['#9333ea', '#c084fc', '#0f172a'], 1.2, 3.5, 1, 2);
            }
        } else if (tool === 'equip_laser_cannon') {
            if (isFirstClick) {
                const ent = this.entityManager.equipNearest(wx, wy, 'laser_cannon');
                if (ent) this.particleSystem.burst(ent.x, ent.y, 14, ['#00e5ff', '#38bdf8', '#ffffff'], 1.2, 3.5, 1, 2);
            }
        } else if (tool === 'equip_galaxy_blade') {
            if (isFirstClick) {
                const ent = this.entityManager.equipNearest(wx, wy, 'galaxy_blade');
                if (ent) this.particleSystem.burst(ent.x, ent.y, 18, ['#f472b6', '#67e8f9', '#facc15', '#ffffff'], 1.5, 4, 1.5, 3);
            }
        } else if (tool === 'equip_laser_shotgun') {
            if (isFirstClick) {
                const ent = this.entityManager.equipNearest(wx, wy, 'laser_shotgun');
                if (ent) this.particleSystem.burst(ent.x, ent.y, 14, ['#ef4444', '#f97316', '#ffffff'], 1.2, 3.5, 1, 2);
            }
        } else if (tool === 'equip_chain_lightning_staff') {
            if (isFirstClick) {
                const ent = this.entityManager.equipNearest(wx, wy, 'chain_lightning_staff');
                if (ent) this.particleSystem.burst(ent.x, ent.y, 14, ['#38bdf8', '#818cf8', '#ffffff'], 1.2, 3.5, 1, 2);
            }
        } else if (tool === 'equip_death_scythe') {
            if (isFirstClick) {
                const ent = this.entityManager.equipNearest(wx, wy, 'death_scythe');
                if (ent) this.particleSystem.burst(ent.x, ent.y, 16, ['#a855f7', '#22c55e', '#111827'], 1.5, 4, 1.5, 3);
            }
        } else if (tool === 'equip_frost_bow') {
            if (isFirstClick) {
                const ent = this.entityManager.equipNearest(wx, wy, 'frost_bow');
                if (ent) this.particleSystem.burst(ent.x, ent.y, 16, ['#38bdf8', '#bae6fd', '#ffffff'], 1.5, 4, 1.5, 3);
            }
        } else if (tool === 'first_person') {
            if (isFirstClick) {
                const ent = this.entityManager.findNearestEntity({ id: -1, x: wx, y: wy });
                if (ent && Math.hypot(ent.x - wx, ent.y - wy) < 20) {
                    this.possess(ent);
                }
                this.toggleFirstPerson();
            }
        } else if (tool === 'chronos_stasis') {
            if (isFirstClick) {
                for (const ent of this.entityManager.entities) {
                    if (Math.hypot(ent.x - wx, ent.y - wy) < bSize * 6 + 15) {
                        ent.frozen = 300;
                        this.particleSystem.spawn(ent.x, ent.y, 0, 0, 3, '#a5f3fc', 30, 'spark');
                    }
                }
                if (this.audio) this.audio.playMagic();
            }
        } else if (tool === 'teleport') {
            if (isFirstClick) {
                const target = this.controlledEntity || this.entityManager.findNearestEntity({ id: -1, x: wx, y: wy });
                if (target) {
                    this.particleSystem.burst(target.x, target.y, 12, ['#a855f7', '#c084fc'], 1, 3, 1, 2);
                    target.x = wx;
                    target.y = wy;
                    this.particleSystem.burst(wx, wy, 16, ['#38bdf8', '#ffffff'], 1.5, 4, 1, 2.5);
                    if (this.audio) this.audio.playMagic();
                }
            }
        } else if (tool === 'cosmic_oblivion') {
            this.disasterManager.triggerAntimatter(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
            this.particleSystem.burst(wx, wy, 25, ['#f472b6', '#c084fc', '#38bdf8', '#ffffff'], 2, 6, 2, 4);
        } else if (tool === 'galaxy_sacrifice') {
            if (isFirstClick) {
                this.disasterManager.triggerGreatGalaxySacrifice(this.world, this.entityManager, this.particleSystem, this.audio);
            }
        } else if (tool === 'blessing') {
            if (isFirstClick) this.disasterManager.triggerBlessing(wx, wy, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'curse') {
            if (isFirstClick) this.disasterManager.triggerCurse(wx, wy, this.entityManager, this.particleSystem);
        } else if (tool === 'plague') {
            if (isFirstClick) this.disasterManager.triggerPlague(wx, wy, this.entityManager, this.particleSystem);
        } else if (tool === 'snap') {
            if (isFirstClick) this.disasterManager.triggerCoinOfFate(this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'heal') {
            if (isFirstClick) this.disasterManager.triggerHealing(wx, wy, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'frenzy') {
            if (isFirstClick) this.disasterManager.triggerFrenzy(wx, wy, this.entityManager, this.particleSystem);
        } else if (tool === 'growth') {
            if (isFirstClick) this.disasterManager.triggerGrowth(wx, wy, this.entityManager, this.particleSystem);
        } else if (tool === 'shrink') {
            if (isFirstClick) this.disasterManager.triggerShrink(wx, wy, this.entityManager, this.particleSystem);
        } else if (tool === 'ufo') {
            if (isFirstClick) this.disasterManager.spawnUFO(wx, wy);
        } else if (tool === 'inspect') {
            if (isFirstClick) {
                const nearest = this.entityManager.findNearestEntity({ id: -1, x: wx, y: wy });
                if (nearest && Math.hypot(nearest.x - wx, nearest.y - wy) < 10) {
                    this.ui.showInspector(nearest, null, tx, ty);
                } else {
                    this.ui.showInspector(null, this.world.getTile(tx, ty), tx, ty);
                }
            }
        }

        // 5. CREATURES & CIVILIZATIONS
        else if (isFirstClick) {
            if (tool === 'control') {
                const nearest = this.entityManager.findNearestEntity({ id: -1, x: wx, y: wy });
                if (nearest && Math.hypot(nearest.x - wx, nearest.y - wy) < (nearest.size * nearest.scale + 16)) {
                    this.possess(nearest);
                }
                return;
            } else if (tool === 'creator') {
                this.ui.showModal('modal-creator');
                return;
            }

            const validCreatures = [
                'human', 'elf', 'orc', 'dwarf', 'sheep', 'cow', 'wolf', 'bear', 
                'dragon', 'golem', 'zombie', 'skeleton', 'demon', 'alien',
                'mech', 'wizard',
                'crabzilla', 'kaiju', 'phoenix', 'kraken', 'hydra', 'frost_titan',
                'galaxy_guardian', 'tank', 'warship', 'helicopter', 'starfighter',
                'colossus_mech', 'seraph_angel', 'dune_leviathan', 'vampire_lord', 'void_titan', 'evermean',
                'duck', 'crystal_golem', 'shadow_assassin',
                'frog', 'cyber_ninja', 'laser_shark', 'frost_wolf', 'sand_scorpion', 'necromancer',
                'valkyrie', 'gargoyle', 'mecha_rex', 'golden_dragon', 'space_worm', 'goblin', 'pirate_ship',
                'trex', 'triceratops', 'velociraptor', 'pterodactyl', 'brachiosaurus',
                'frost_dragon', 'shadow_dragon', 'storm_dragon',
                'dark_matter_colossus', 'phoenix_knight', 'thunder_bird', 'cyber_dragon', 'swamp_behemoth', 'mammoth',
                'astral_phoenix', 'frost_giant', 'dread_reaper', 'dune_scorpion_king', 'titan_golem', 'pegasus'
            ];
            if (validCreatures.includes(tool)) {
                const ent = this.entityManager.spawn(tool, wx, wy);
                this.particleSystem.burst(wx, wy, 12, ['#ffffff', '#a855f7', '#38bdf8'], 1.5, 4, 1.5, 3);
                if (this.audio) this.audio.playCreatureSound(tool);

                // Auto possess colossal bosses, dragons, mechs, titans, beasts & vehicles for instant direct control action!
                // Note: 'duck' and 'frog' are excluded from autoPossess to allow flock spawning without camera seizure.
                const autoPossessList = [
                    'crabzilla', 'kaiju', 'dragon', 'mech', 'tank', 'warship', 'helicopter', 'starfighter', 
                    'colossus_mech', 'void_titan', 'dune_leviathan', 'evermean', 'crystal_golem', 
                    'shadow_assassin', 'cyber_ninja', 'laser_shark', 'mecha_rex', 'golden_dragon', 'space_worm', 
                    'pirate_ship', 'valkyrie', 'gargoyle', 'necromancer', 'frost_wolf', 'sand_scorpion',
                    'trex', 'triceratops', 'velociraptor', 'pterodactyl', 'brachiosaurus',
                    'frost_dragon', 'shadow_dragon', 'storm_dragon',
                    'dark_matter_colossus', 'phoenix_knight', 'thunder_bird', 'cyber_dragon', 'swamp_behemoth', 'mammoth',
                    'astral_phoenix', 'frost_giant', 'dread_reaper', 'dune_scorpion_king', 'titan_golem', 'pegasus'
                ];
                if (autoPossessList.includes(tool)) {
                    this.possess(ent);
                }
            }
        }
    }

    unlockCosmicSacrificeSecrets() {
        localStorage.setItem('galaxybox_secrets_unlocked', 'true');
        localStorage.setItem('galaxybox_galaxy_unlocked', 'true');
        this.shakeCamera(32, 45);
        this.ui.showGalaxyUnlockModal();
    }

    unlockGalaxyTemplate() {
        this.unlockCosmicSacrificeSecrets();
    }

    // ==========================================
    // SAVE & LOAD SYSTEM
    // ==========================================
    saveGame(slot = 1) {
        const saveObj = {
            version: 2,
            name: `World ${slot}`,
            date: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
            timestamp: Date.now(),
            world: this.world.serialize(),
            entities: this.entityManager.serialize(),
            weather: {
                current: this.disasterManager.weather,
                timer: this.disasterManager.weatherTimer
            }
        };

        const key = `galaxybox_save_${slot}`;
        try {
            localStorage.setItem(key, JSON.stringify(saveObj));
            return { success: true, slot, date: saveObj.date };
        } catch (err) {
            console.error("LocalStorage save failed:", err);
            return { success: false, error: err.message, data: saveObj };
        }
    }

    loadGame(slot = 1) {
        const key = `galaxybox_save_${slot}`;
        try {
            const raw = localStorage.getItem(key);
            if (!raw) return { success: false, error: "Save slot is empty." };
            const data = JSON.parse(raw);
            return this.applySaveData(data);
        } catch (err) {
            console.error("Load failed:", err);
            return { success: false, error: err.message };
        }
    }

    applySaveData(data) {
        if (!data) return { success: false, error: "Invalid save data." };

        // Support both Format v2 (bundled) and Format v1 (world only)
        if (data.world) {
            this.world.deserialize(data.world);
            if (data.entities) {
                this.entityManager.deserialize(data.entities);
            } else {
                this.entityManager.clear();
            }
            if (data.weather) {
                this.disasterManager.weather = data.weather.current || 'clear';
                this.disasterManager.weatherTimer = data.weather.timer || 0;
            }
        } else if (data.tiles || data.tilesRLE) {
            this.world.deserialize(data);
            this.entityManager.clear();
            this.disasterManager.clear();
        }

        this.particleSystem.clear();
        this.unpossess();
        this.renderer.camera.x = this.world.width / 2;
        this.renderer.camera.y = this.world.height / 2;
        return { success: true, date: data.date || "Unknown" };
    }

    // Camera Navigation & Controlled Entity Movement
    updateCameraKeys() {
        if (this.controlledEntity && this.controlledEntity.active) {
            const ent = this.controlledEntity;
            if (this.isFirstPerson && this.renderer3D) {
                const yaw = this.renderer3D.camera.yaw;
                const fx = -Math.sin(yaw);
                const fy = Math.cos(yaw);
                const rx = Math.cos(yaw);
                const ry = Math.sin(yaw);

                let moveFwd = 0, moveRight = 0;
                if (this.keys['w'] || this.keys['arrowup'] || (this.virtualKeys && this.virtualKeys.up)) moveFwd += 1;
                if (this.keys['s'] || this.keys['arrowdown'] || (this.virtualKeys && this.virtualKeys.down)) moveFwd -= 1;
                if (this.keys['a'] || this.keys['arrowleft'] || (this.virtualKeys && this.virtualKeys.left)) moveRight -= 1;
                if (this.keys['d'] || this.keys['arrowright'] || (this.virtualKeys && this.virtualKeys.right)) moveRight += 1;

                if (!ent.isDying && (moveFwd !== 0 || moveRight !== 0)) {
                    const vx = fx * moveFwd + rx * moveRight;
                    const vy = fy * moveFwd + ry * moveRight;
                    const len = Math.hypot(vx, vy) || 1;
                    const spd = ent.speed * 1.8;
                    ent.x += (vx / len) * spd;
                    ent.y += (vy / len) * spd;
                    ent.x = Math.max(2, Math.min(this.world.width - 2, ent.x));
                    ent.y = Math.max(2, Math.min(this.world.height - 2, ent.y));
                    if (vx < 0) ent.facingLeft = true;
                    else if (vx > 0) ent.facingLeft = false;

                    if (ent.hasTrait('super_speed') && Math.random() < 0.4) {
                        this.particleSystem.spawn(ent.x, ent.y, 0, 0, ent.size, ent.color, 10, 'spark');
                    }
                }
            } else {
                let mx = 0, my = 0;
                if (this.keys['w'] || this.keys['arrowup'] || (this.virtualKeys && this.virtualKeys.up)) my -= 1;
                if (this.keys['s'] || this.keys['arrowdown'] || (this.virtualKeys && this.virtualKeys.down)) my += 1;
                if (this.keys['a'] || this.keys['arrowleft'] || (this.virtualKeys && this.virtualKeys.left)) mx -= 1;
                if (this.keys['d'] || this.keys['arrowright'] || (this.virtualKeys && this.virtualKeys.right)) mx += 1;

                if (!ent.isDying && (mx !== 0 || my !== 0)) {
                    if (mx < 0) ent.facingLeft = true;
                    else if (mx > 0) ent.facingLeft = false;
                    const len = Math.hypot(mx, my);
                    const spd = ent.speed * 1.8;
                    ent.x += (mx / len) * spd;
                    ent.y += (my / len) * spd;
                    ent.x = Math.max(2, Math.min(this.world.width - 2, ent.x));
                    ent.y = Math.max(2, Math.min(this.world.height - 2, ent.y));

                    if (ent.hasTrait('super_speed') && Math.random() < 0.4) {
                        this.particleSystem.spawn(ent.x, ent.y, 0, 0, ent.size, ent.color, 10, 'spark');
                    }
                }
            }

            // Smooth camera tracking
            if (this.is3DMode && this.renderer3D) {
                const entZ = (this.world.getElevation ? this.world.getElevation(ent.x, ent.y) : 2.0) + 1.5;
                this.renderer3D.camera.target[0] += (ent.x - this.renderer3D.camera.target[0]) * 0.15;
                this.renderer3D.camera.target[1] += (ent.y - this.renderer3D.camera.target[1]) * 0.15;
                this.renderer3D.camera.target[2] += (entZ - this.renderer3D.camera.target[2]) * 0.15;
            } else {
                this.renderer.camera.x += (ent.x - this.renderer.camera.x) * 0.15;
                this.renderer.camera.y += (ent.y - this.renderer.camera.y) * 0.15;
            }
            return;
        }

        if (this.is3DMode && this.renderer3D) {
            const panSpeed = 2.0;
            const yaw = this.renderer3D.camera.yaw;
            const sinY = Math.sin(yaw);
            const cosY = Math.cos(yaw);
            let fwd = 0, right = 0;
            if (this.keys['w'] || this.keys['arrowup'] || (this.virtualKeys && this.virtualKeys.up)) fwd += 1;
            if (this.keys['s'] || this.keys['arrowdown'] || (this.virtualKeys && this.virtualKeys.down)) fwd -= 1;
            if (this.keys['a'] || this.keys['arrowleft'] || (this.virtualKeys && this.virtualKeys.left)) right -= 1;
            if (this.keys['d'] || this.keys['arrowright'] || (this.virtualKeys && this.virtualKeys.right)) right += 1;

            if (fwd !== 0 || right !== 0) {
                const fx = -sinY;
                const fy = cosY;
                const rx = cosY;
                const ry = sinY;
                this.renderer3D.camera.target[0] += (fx * fwd + rx * right) * panSpeed;
                this.renderer3D.camera.target[1] += (fy * fwd + ry * right) * panSpeed;
            }
            return;
        }

        const cam = this.renderer.camera;
        const panMult = (this.settings && this.settings.panSpeed) ? this.settings.panSpeed : 1.0;
        const panSpeed = (6 / cam.zoom) * panMult;

        if (this.keys['w'] || this.keys['arrowup'] || (this.virtualKeys && this.virtualKeys.up)) cam.y -= panSpeed;
        if (this.keys['s'] || this.keys['arrowdown'] || (this.virtualKeys && this.virtualKeys.down)) cam.y += panSpeed;
        if (this.keys['a'] || this.keys['arrowleft'] || (this.virtualKeys && this.virtualKeys.left)) cam.x -= panSpeed;
        if (this.keys['d'] || this.keys['arrowright'] || (this.virtualKeys && this.virtualKeys.right)) cam.x += panSpeed;
    }

    // ==========================================
    // MAIN LOOP
    // ==========================================
    loop(currentTime) {
        requestAnimationFrame((t) => this.loop(t));

        const dt = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;

        // FPS Calculation
        this.frameCount++;
        this.fpsTimer += dt;
        if (this.fpsTimer >= 0.5) {
            this.fps = Math.round(this.frameCount / this.fpsTimer);
            this.frameCount = 0;
            this.fpsTimer = 0;
            this.updateStatsHUD();
        }

        // Camera / Controlled entity movement
        this.updateCameraKeys();

        // Check controlled entity status
        if (this.controlledEntity) {
            if (!this.controlledEntity.active) {
                this.unpossess();
                if (this.ui && typeof this.ui.showNotification === 'function') {
                    this.ui.showNotification("Possessed creature perished!");
                }
            } else {
                this.ui.updateControlHUD(this.controlledEntity);
            }
        }

        // Step simulation if not paused
        if (this.timeScale > 0) {
            if (this.chronoFreezeTimer > 0) {
                this.chronoFreezeTimer -= dt;
                this.particleSystem.update(1);
                if (this.controlledEntity && this.controlledEntity.active) {
                    this.controlledEntity.update(this.world, this.entityManager, this.particleSystem, this.audio, this.disasterManager);
                }
            } else {
                const steps = this.timeScale;
                for (let s = 0; s < steps; s++) {
                    this.world.update(this.particleSystem);
                    this.entityManager.update(this.world, this.particleSystem, this.audio, this.disasterManager);
                    this.disasterManager.update(this.world, this.entityManager, this.particleSystem, this.audio);
                    this.particleSystem.update(1);
                }
            }
        }

        // Screen Shake calculation
        let shakeOffsetX = 0;
        let shakeOffsetY = 0;
        if (this.shakeDuration > 0) {
            shakeOffsetX = (Math.random() - 0.5) * this.shakeIntensity;
            shakeOffsetY = (Math.random() - 0.5) * this.shakeIntensity;
            this.shakeDuration--;
            this.shakeIntensity *= 0.92;
        }
        this.renderer.shakeX = shakeOffsetX;
        this.renderer.shakeY = shakeOffsetY;

        // Render Frame
        const mouseWorld = { x: this.mouse.worldX, y: this.mouse.worldY };
        if (this.is3DMode && this.renderer3D) {
            this.renderer3D.render(
                this.world,
                this.entityManager,
                this.disasterManager,
                this.particleSystem,
                this.ui.activeTool,
                this.ui.brushSize,
                mouseWorld
            );
            this.renderer.renderMinimap(this.world, this.entityManager);
        } else {
            this.renderer.render(
                this.world,
                this.entityManager,
                this.disasterManager,
                this.particleSystem,
                this.ui.activeTool,
                this.ui.brushSize,
                mouseWorld
            );
        }
    }

    updateStatsHUD() {
        const fpsEl = document.getElementById('stat-fps');
        const popEl = document.getElementById('stat-pop');
        const kdEl = document.getElementById('stat-kingdoms');
        if (fpsEl) fpsEl.textContent = `${this.fps} FPS`;
        if (popEl) popEl.textContent = `${this.entityManager.entities.length} Creatures`;
        if (kdEl) kdEl.textContent = `${this.entityManager.kingdoms.size} Kingdoms`;
    }
}

// Start on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
    window.game = new Game();
});

