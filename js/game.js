// ==========================================
// GALAXYBOX - Main Game Loop & Input Dispatcher
// Pairs all simulation engines with input events
// ==========================================

class Game {
    constructor() {
        this.canvas = document.getElementById('game-canvas');
        this.minimapCanvas = document.getElementById('minimap-canvas');

        // Core systems
        this.audio = new SoundManager();
        this.particleSystem = new ParticleSystem(7000);
        this.world = new World(384, 216, Math.floor(Math.random() * 999999));
        this.entityManager = new EntityManager();
        this.disasterManager = new DisasterManager();
        this.renderer = new Renderer(this.canvas, this.minimapCanvas);
        this.renderer.camera.x = 192;
        this.renderer.camera.y = 108;
        this.ui = new UIManager(this);

        // Creature Possession / Direct Control
        this.controlledEntity = null;

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
            panStartX: 0,
            panStartY: 0,
            camStartX: 0,
            camStartY: 0
        };

        // Key states
        this.keys = {};

        // Generate initial world
        this.generateWorld('continents');

        // Setup input handlers
        this.setupInputs();

        // Handle resize
        window.addEventListener('resize', () => this.renderer.resize());
        this.renderer.resize();

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
        if (this.controlledEntity) {
            this.controlledEntity.isControlled = false;
            this.controlledEntity = null;
        }
        this.ui.hideControlHUD();
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
    }

    seedStarterCivilizations() {
        const w = this.world.width;
        const h = this.world.height;

        // Spawn 3-4 initial human settlements on green grass
        let settlementsPlaced = 0;
        for (let attempts = 0; attempts < 400 && settlementsPlaced < 3; attempts++) {
            const rx = Math.floor(20 + Math.random() * (w - 40));
            const ry = Math.floor(20 + Math.random() * (h - 40));

            if (this.world.getTile(rx, ry) === TILES.GRASS) {
                // Spawn founder human
                for (let p = 0; p < 4; p++) {
                    this.entityManager.spawn('human', rx + (Math.random() - 0.5) * 4, ry + (Math.random() - 0.5) * 4);
                }
                // Spawn starter sheep
                for (let s = 0; s < 3; s++) {
                    this.entityManager.spawn('sheep', rx + (Math.random() - 0.5) * 8, ry + (Math.random() - 0.5) * 8);
                }
                settlementsPlaced++;
            }
        }

        // Spawn some wild creatures
        for (let i = 0; i < 6; i++) {
            const rx = Math.floor(Math.random() * w);
            const ry = Math.floor(Math.random() * h);
            if (this.world.getTile(rx, ry) === TILES.FOREST) {
                this.entityManager.spawn('wolf', rx, ry);
            }
        }
    }

    setupInputs() {
        // Pointer down
        this.canvas.addEventListener('mousedown', (e) => this.handleMouseDown(e));
        window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        window.addEventListener('mouseup', (e) => this.handleMouseUp(e));
        this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());

        // Wheel zoom
        this.canvas.addEventListener('wheel', (e) => this.handleWheel(e), { passive: false });

        // Touch support
        this.canvas.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: false });
        this.canvas.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: false });
        this.canvas.addEventListener('touchend', (e) => this.handleTouchEnd(e));

        // Keyboard shortcuts
        window.addEventListener('keydown', (e) => this.handleKeyDown(e));
        window.addEventListener('keyup', (e) => this.handleKeyUp(e));
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

        if (e.button === 1 || e.button === 2 || (e.button === 0 && e.shiftKey)) {
            // Pan camera
            this.mouse.isPanning = true;
            this.mouse.panStartX = e.clientX;
            this.mouse.panStartY = e.clientY;
            this.mouse.camStartX = this.renderer.camera.x;
            this.mouse.camStartY = this.renderer.camera.y;
            return;
        }

        if (e.button === 0) {
            this.mouse.isDown = true;
            this.applyTool(this.mouse.worldX, this.mouse.worldY, true);
        }
    }

    handleMouseMove(e) {
        this.mouse.screenX = e.clientX;
        this.mouse.screenY = e.clientY;

        const wPos = this.renderer.screenToWorld(e.clientX, e.clientY);
        this.mouse.worldX = wPos.x;
        this.mouse.worldY = wPos.y;

        if (this.mouse.isPanning) {
            const dx = (e.clientX - this.mouse.panStartX) / this.renderer.camera.zoom;
            const dy = (e.clientY - this.mouse.panStartY) / this.renderer.camera.zoom;
            this.renderer.camera.x = this.mouse.camStartX - dx;
            this.renderer.camera.y = this.mouse.camStartY - dy;
            return;
        }

        if (this.mouse.isDown && !this.controlledEntity) {
            this.applyTool(this.mouse.worldX, this.mouse.worldY, false);
        }
    }

    handleMouseUp(e) {
        if (this.mouse.isPanning) {
            this.mouse.isPanning = false;
        }
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
        if (e.touches.length === 1) {
            const touch = e.touches[0];
            const wPos = this.renderer.screenToWorld(touch.clientX, touch.clientY);
            this.mouse.worldX = wPos.x;
            this.mouse.worldY = wPos.y;
            this.mouse.isDown = true;
            this.applyTool(wPos.x, wPos.y, true);
        }
    }

    handleTouchMove(e) {
        if (e.touches.length === 1 && this.mouse.isDown && !this.controlledEntity) {
            const touch = e.touches[0];
            const wPos = this.renderer.screenToWorld(touch.clientX, touch.clientY);
            this.mouse.worldX = wPos.x;
            this.mouse.worldY = wPos.y;
            this.applyTool(wPos.x, wPos.y, false);
        }
    }

    handleTouchEnd(e) {
        this.mouse.isDown = false;
    }

    handleKeyDown(e) {
        this.keys[e.key.toLowerCase()] = true;

        // Escape to Unpossess / Exit Control
        if (e.key === 'Escape') {
            this.unpossess();
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
            if (isFirstClick) this.disasterManager.triggerNukeMissile(wx, wy);
        } else if (tool === 'ion_cannon') {
            if (isFirstClick) this.disasterManager.triggerIonCannon(wx, wy);
        } else if (tool === 'rift') {
            if (isFirstClick) this.disasterManager.triggerDimensionRift(wx, wy);
        }

        // 2. NATURE & DISASTERS
        else if (tool === 'volcano') {
            if (isFirstClick) {
                this.disasterManager.spawnVolcano(wx, wy, this.world);
                if (this.audio) this.audio.playExplosion(1.5);
            }
        } else if (tool === 'tornado') {
            if (isFirstClick) {
                this.disasterManager.spawnTornado(wx, wy);
                if (this.audio) this.audio.playThunder();
            }
        } else if (tool === 'earthquake') {
            if (isFirstClick) this.disasterManager.triggerEarthquake(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'lightning') {
            if (isFirstClick) this.disasterManager.triggerLightning(wx, wy, this.world, this.entityManager, this.particleSystem, this.audio);
        } else if (tool === 'tsunami') {
            if (isFirstClick) this.disasterManager.triggerTsunami(wx, wy, this.world, this.particleSystem, this.audio);
        } else if (tool === 'rain') {
            this.disasterManager.startStorm('rain', 800);
        } else if (tool === 'snow') {
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
        else if (tool === 'raise') this.world.applyBrush(wx, wy, bSize, 'raise');
        else if (tool === 'lower') this.world.applyBrush(wx, wy, bSize, 'lower');
        else if (tool === 'sponge') this.world.applyBrush(wx, wy, bSize, 'sponge');
        else if (tool === 'fertilizer') this.world.applyBrush(wx, wy, bSize, 'fertilizer');

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
                'galaxy_guardian', 'tank', 'warship', 'helicopter', 'starfighter'
            ];
            if (validCreatures.includes(tool)) {
                const ent = this.entityManager.spawn(tool, wx, wy);
                this.particleSystem.burst(wx, wy, 12, ['#ffffff', '#a855f7', '#38bdf8'], 1.5, 4, 1.5, 3);
                if (this.audio) this.audio.playCreatureSound(tool);

                // Auto possess colossal bosses, dragons, mechs & vehicles for instant direct control action!
                if (['crabzilla', 'kaiju', 'dragon', 'mech', 'tank', 'warship', 'helicopter', 'starfighter'].includes(tool)) {
                    this.possess(ent);
                }
            }
        }
    }

    unlockGalaxyTemplate() {
        localStorage.setItem('galaxybox_galaxy_unlocked', 'true');
        this.ui.showGalaxyUnlockModal();
    }

    // Camera Navigation & Controlled Entity Movement
    updateCameraKeys() {
        if (this.controlledEntity && this.controlledEntity.active) {
            const ent = this.controlledEntity;
            let mx = 0, my = 0;
            if (this.keys['w'] || this.keys['arrowup']) my -= 1;
            if (this.keys['s'] || this.keys['arrowdown']) my += 1;
            if (this.keys['a'] || this.keys['arrowleft']) mx -= 1;
            if (this.keys['d'] || this.keys['arrowright']) mx += 1;

            if (mx !== 0 || my !== 0) {
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

            // Smooth camera tracking
            this.renderer.camera.x += (ent.x - this.renderer.camera.x) * 0.15;
            this.renderer.camera.y += (ent.y - this.renderer.camera.y) * 0.15;
            return;
        }

        const cam = this.renderer.camera;
        const panSpeed = 6 / cam.zoom;

        if (this.keys['w'] || this.keys['arrowup']) cam.y -= panSpeed;
        if (this.keys['s'] || this.keys['arrowdown']) cam.y += panSpeed;
        if (this.keys['a'] || this.keys['arrowleft']) cam.x -= panSpeed;
        if (this.keys['d'] || this.keys['arrowright']) cam.x += panSpeed;
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
            } else {
                this.ui.updateControlHUD(this.controlledEntity);
            }
        }

        // Step simulation if not paused
        if (this.timeScale > 0) {
            const steps = this.timeScale;
            for (let s = 0; s < steps; s++) {
                this.world.update(this.particleSystem);
                this.entityManager.update(this.world, this.particleSystem, this.audio, this.disasterManager);
                this.disasterManager.update(this.world, this.entityManager, this.particleSystem, this.audio);
                this.particleSystem.update(1);
            }
        }

        // Render Frame
        const mouseWorld = { x: this.mouse.worldX, y: this.mouse.worldY };
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

