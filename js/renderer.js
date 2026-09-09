// ==========================================
// GALAXYBOX - 2D Canvas Pixel Renderer & Camera
// Crisp Retro Pixel Art, Dynamic Shading & Minimap
// ==========================================

class Renderer {
    constructor(canvas, minimapCanvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d', { alpha: false });
        this.minimapCanvas = minimapCanvas;
        this.miniCtx = minimapCanvas ? minimapCanvas.getContext('2d') : null;

        // Pixel-perfect crisp scaling
        this.ctx.imageSmoothingEnabled = false;

        // Camera
        this.camera = {
            x: 320,
            y: 180,
            zoom: 2.2,
            minZoom: 0.25,
            maxZoom: 16.0
        };

        // Offscreen buffer for world tile rendering
        this.tileBuffer = document.createElement('canvas');
        this.tileCtx = this.tileBuffer.getContext('2d');
        this.tileImageData = null;

        // Offscreen lighting canvas for Day/Night cycle
        this.lightingCanvas = document.createElement('canvas');
        this.lightingCtx = this.lightingCanvas.getContext('2d');

        // Animation counters
        this.animTime = 0;
        this.showGrid = false;

        // High-Fidelity Graphics: Offscreen Bloom Buffer & Cinematic Vignette
        this.bloomBuffer = document.createElement('canvas');
        this.bloomCtx = this.bloomBuffer.getContext('2d');
        this.vignetteCanvas = document.createElement('canvas');
        this.vignetteCtx = this.vignetteCanvas.getContext('2d');
        this.stardust = [];
        for (let i = 0; i < 40; i++) {
            this.stardust.push({
                x: Math.random() * (window.innerWidth || 1280),
                y: Math.random() * (window.innerHeight || 720),
                vx: (Math.random() - 0.5) * 0.35,
                vy: -0.15 - Math.random() * 0.35,
                size: Math.random() * 2 + 1,
                alpha: Math.random() * 0.6 + 0.3,
                color: Math.random() > 0.4 ? '#38bdf8' : '#facc15'
            });
        }
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx.imageSmoothingEnabled = false;

        if (this.bloomBuffer) {
            this.bloomBuffer.width = Math.max(64, Math.floor(window.innerWidth / 3));
            this.bloomBuffer.height = Math.max(64, Math.floor(window.innerHeight / 3));
        }
        if (this.vignetteCanvas) {
            this.vignetteCanvas.width = window.innerWidth;
            this.vignetteCanvas.height = window.innerHeight;
            this.updateVignette();
        }
    }

    updateVignette() {
        if (!this.vignetteCanvas) return;
        const ctx = this.vignetteCtx;
        const w = this.vignetteCanvas.width;
        const h = this.vignetteCanvas.height;
        ctx.clearRect(0, 0, w, h);
        const r0 = Math.min(w, h) * 0.42;
        const r1 = Math.hypot(w, h) * 0.65;
        const grad = ctx.createRadialGradient(w / 2, h / 2, r0, w / 2, h / 2, r1);
        grad.addColorStop(0, 'rgba(0, 0, 0, 0)');
        grad.addColorStop(0.75, 'rgba(0, 5, 15, 0.2)');
        grad.addColorStop(1, 'rgba(0, 2, 8, 0.6)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
    }

    screenToWorld(screenX, screenY) {
        const rect = this.canvas.getBoundingClientRect();
        const scaleX = rect.width > 0 ? (this.canvas.width / rect.width) : 1;
        const scaleY = rect.height > 0 ? (this.canvas.height / rect.height) : 1;
        const canvasX = (screenX - rect.left) * scaleX;
        const canvasY = (screenY - rect.top) * scaleY;
        const x = (canvasX - this.canvas.width / 2) / this.camera.zoom + this.camera.x;
        const y = (canvasY - this.canvas.height / 2) / this.camera.zoom + this.camera.y;
        return { x, y };
    }

    worldToScreen(worldX, worldY) {
        const rect = this.canvas.getBoundingClientRect();
        const canvasX = (worldX - this.camera.x) * this.camera.zoom + this.canvas.width / 2;
        const canvasY = (worldY - this.camera.y) * this.camera.zoom + this.canvas.height / 2;
        const scaleX = this.canvas.width > 0 ? (rect.width / this.canvas.width) : 1;
        const scaleY = this.canvas.height > 0 ? (rect.height / this.canvas.height) : 1;
        const screenX = rect.left + canvasX * scaleX;
        const screenY = rect.top + canvasY * scaleY;
        return { x: screenX, y: screenY };
    }

    render(world, entityManager, disasterManager, particleSystem, activeTool, brushSize, mouseWorldPos, timeOfDay = 12.0) {
        this.animTime += 0.05;
        const ctx = this.ctx;
        const w = this.canvas.width;
        const h = this.canvas.height;
        const cam = this.camera;

        // 1. Clear Screen
        ctx.fillStyle = '#0a0a14';
        ctx.fillRect(0, 0, w, h);

        // 2. Setup Camera Transform
        ctx.save();
        ctx.translate(w / 2, h / 2);
        ctx.scale(cam.zoom, cam.zoom);
        const shakeX = this.shakeX || 0;
        const shakeY = this.shakeY || 0;
        ctx.translate(-cam.x + shakeX, -cam.y + shakeY);

        // 3. Render World Tiles
        this.renderWorldTiles(world);

        // 4. Render Kingdom Borders
        this.renderKingdomBorders(world, entityManager.kingdoms);

        // 5. Render Buildings
        this.renderBuildings(entityManager.buildings);

        // 6. Render Disasters
        for (let i = 0; i < disasterManager.blackHoles.length; i++) {
            disasterManager.blackHoles[i].render(ctx);
        }
        for (let i = 0; i < disasterManager.tornadoes.length; i++) {
            disasterManager.tornadoes[i].render(ctx, this.animTime);
        }
        for (let i = 0; i < disasterManager.meteors.length; i++) {
            disasterManager.meteors[i].render(ctx);
        }
        for (let i = 0; i < disasterManager.ufos.length; i++) {
            disasterManager.ufos[i].render(ctx);
        }
        for (let i = 0; i < disasterManager.forcefields.length; i++) {
            disasterManager.forcefields[i].render(ctx, this.animTime);
        }
        for (let i = 0; i < disasterManager.rifts.length; i++) {
            disasterManager.rifts[i].render(ctx, this.animTime);
        }
        for (let i = 0; i < disasterManager.ionCannons.length; i++) {
            disasterManager.ionCannons[i].render(ctx, this.animTime);
        }
        for (let i = 0; i < disasterManager.nukeMissiles.length; i++) {
            disasterManager.nukeMissiles[i].render(ctx);
        }
        if (disasterManager.duckBarrages) {
            for (let i = 0; i < disasterManager.duckBarrages.length; i++) {
                disasterManager.duckBarrages[i].render(ctx);
            }
        }
        if (disasterManager.antimatterMissiles) {
            for (let i = 0; i < disasterManager.antimatterMissiles.length; i++) {
                disasterManager.antimatterMissiles[i].render(ctx);
            }
        }
        if (disasterManager.orbitalBeams) {
            for (let i = 0; i < disasterManager.orbitalBeams.length; i++) {
                disasterManager.orbitalBeams[i].render(ctx);
            }
        }
        if (disasterManager.whirlpools) {
            for (let i = 0; i < disasterManager.whirlpools.length; i++) {
                disasterManager.whirlpools[i].render(ctx);
            }
        }
        if (disasterManager.toxicClouds) {
            for (let i = 0; i < disasterManager.toxicClouds.length; i++) {
                disasterManager.toxicClouds[i].render(ctx);
            }
        }

        // 6.5. Render Corpses & Remains
        const showCorpses = !(typeof window !== 'undefined' && window.game && window.game.settings && window.game.settings.corpses === false);
        if (showCorpses && entityManager.corpses) {
            this.renderCorpses(entityManager.corpses);
        }

        // 6.8. Render Explosive Eggs
        if (entityManager.explosiveEggs) {
            this.renderExplosiveEggs(entityManager.explosiveEggs);
        }

        // 7. Render Entities
        this.renderEntities(entityManager.entities, entityManager.kingdoms);

        // 7. Render Projectiles
        this.renderProjectiles(entityManager.projectiles);

        // 8. Render Particles
        particleSystem.render(ctx);

        // 8.5. Render Floating Combat Damage Numbers
        const showDamage = !(typeof window !== 'undefined' && window.game && window.game.settings && window.game.settings.damageText === false);
        if (showDamage && entityManager.floatingTexts) {
            this.renderFloatingTexts(entityManager.floatingTexts);
        }

        // 8.8. Day/Night Atmospheric Lighting Overlay
        this.renderDayNightAtmosphere(ctx, world, entityManager, timeOfDay);

        // 8.9. Dynamic Luminous Bloom Overlay for Fire, Lava, Lasers & Explosions
        this.renderDynamicBloom(ctx, world, entityManager, disasterManager, particleSystem);

        // 9. Render Brush Cursor Indicator
        if (mouseWorldPos && activeTool) {
            this.renderBrushCursor(mouseWorldPos.x, mouseWorldPos.y, brushSize, activeTool);
        }

        ctx.restore();

        // 9.3. Drifting Atmospheric Stardust & Ambient Moters
        this.renderAtmosphericStardust(ctx, timeOfDay);

        // 9.4. Cinematic Viewport Vignette
        if (this.vignetteCanvas) {
            ctx.drawImage(this.vignetteCanvas, 0, 0, w, h);
        }

        // 9.5. Full-Screen Apocalyptic Nuclear Blast Flash Overlay
        if (disasterManager && disasterManager.nuclearFlashTimer > 0) {
            const alpha = Math.min(1.0, disasterManager.nuclearFlashTimer / 25);
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.95})`;
            ctx.fillRect(0, 0, w, h);
            if (disasterManager.nuclearFlashTimer > 30) {
                const fireAlpha = (disasterManager.nuclearFlashTimer - 30) / 35;
                ctx.fillStyle = `rgba(249, 115, 22, ${fireAlpha * 0.5})`;
                ctx.fillRect(0, 0, w, h);
            }
        }

        // 10. Render Minimap
        this.renderMinimap(world, entityManager);
    }

    renderDynamicBloom(ctx, world, entityManager, disasterManager, particleSystem) {
        if (!this.bloomBuffer || this.bloomBuffer.width <= 0) return;
        const bCtx = this.bloomCtx;
        const bw = this.bloomBuffer.width;
        const bh = this.bloomBuffer.height;
        const cam = this.camera;

        bCtx.clearRect(0, 0, bw, bh);

        bCtx.save();
        const scaleX = bw / this.canvas.width;
        const scaleY = bh / this.canvas.height;
        bCtx.scale(scaleX, scaleY);
        bCtx.translate(this.canvas.width / 2, this.canvas.height / 2);
        bCtx.scale(cam.zoom, cam.zoom);
        bCtx.translate(-cam.x, -cam.y);

        // Fire & Lava Bloom
        if (world && world.fire) {
            const minX = Math.max(0, Math.floor(cam.x - this.canvas.width / (cam.zoom * 2)));
            const maxX = Math.min(world.width - 1, Math.ceil(cam.x + this.canvas.width / (cam.zoom * 2)));
            const minY = Math.max(0, Math.floor(cam.y - this.canvas.height / (cam.zoom * 2)));
            const maxY = Math.min(world.height - 1, Math.ceil(cam.y + this.canvas.height / (cam.zoom * 2)));

            bCtx.fillStyle = 'rgba(255, 140, 30, 0.75)';
            for (let y = minY; y <= maxY; y += 3) {
                for (let x = minX; x <= maxX; x += 3) {
                    const idx = world.idx(x, y);
                    if (world.fire[idx] > 0 || world.tiles[idx] === TILES.LAVA || world.tiles[idx] === 60) {
                        bCtx.fillRect(x, y, 3, 3);
                    }
                }
            }
        }

        // Projectiles Bloom
        if (entityManager && entityManager.projectiles) {
            bCtx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            for (let i = 0; i < entityManager.projectiles.length; i++) {
                const p = entityManager.projectiles[i];
                if (p.active) {
                    bCtx.beginPath();
                    bCtx.arc(p.x, p.y, Math.max(2, p.size * 1.6), 0, Math.PI * 2);
                    bCtx.fill();
                }
            }
        }

        // Disasters Bloom
        if (disasterManager) {
            if (disasterManager.rifts) {
                bCtx.fillStyle = 'rgba(168, 85, 247, 0.85)';
                for (let r of disasterManager.rifts) {
                    bCtx.beginPath();
                    bCtx.arc(r.x, r.y, 25, 0, Math.PI * 2);
                    bCtx.fill();
                }
            }
            if (disasterManager.ionCannons) {
                bCtx.fillStyle = 'rgba(56, 189, 248, 0.9)';
                for (let ic of disasterManager.ionCannons) {
                    bCtx.fillRect(ic.x - 8, 0, 16, ic.y);
                }
            }
        }

        bCtx.restore();

        // Screen blend back to main canvas
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        ctx.globalAlpha = 0.45;
        ctx.drawImage(this.bloomBuffer, 0, 0, this.canvas.width, this.canvas.height);
        ctx.restore();
    }

    renderAtmosphericStardust(ctx, timeOfDay) {
        if (!this.stardust) return;
        const w = this.canvas.width;
        const h = this.canvas.height;
        const isNight = timeOfDay >= 19 || timeOfDay < 6;

        ctx.save();
        for (let i = 0; i < this.stardust.length; i++) {
            const s = this.stardust[i];
            s.x += s.vx + Math.sin(this.animTime + i) * 0.25;
            s.y += s.vy;
            if (s.x < 0) s.x = w;
            if (s.x > w) s.x = 0;
            if (s.y < 0) s.y = h;
            if (s.y > h) s.y = 0;

            const pulse = (Math.sin(this.animTime * 2 + i * 1.5) * 0.35 + 0.65) * s.alpha;
            ctx.globalAlpha = pulse * (isNight ? 0.75 : 0.4);
            ctx.fillStyle = s.color;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }

    renderWorldTiles(world) {
        if (this.tileBuffer.width !== world.width || this.tileBuffer.height !== world.height) {
            this.tileBuffer.width = world.width;
            this.tileBuffer.height = world.height;
            this.tileImageData = this.tileCtx.createImageData(world.width, world.height);
        }

        const data = this.tileImageData.data;
        const waterWave = Math.sin(this.animTime) * 10;
        const lavaWave = Math.sin(this.animTime * 1.5) * 15;

        for (let y = 0; y < world.height; y++) {
            for (let x = 0; x < world.width; x++) {
                const i = world.idx(x, y);
                const pIdx = i * 4;
                const t = world.tiles[i];
                const fire = world.fire[i];
                const varOffset = world.variation[i] * 3;

                let r = 0, g = 0, b = 0;

                if (fire > 0) {
                    // Burning fire tile
                    r = 255;
                    g = 120 + Math.floor(Math.random() * 80);
                    b = 20;
                } else {
                    switch (t) {
                        case TILES.VOID:
                            r = 10; g = 10; b = 20;
                            break;
                        case TILES.DEEP_WATER: {
                            const shimmer = Math.sin(x * 0.22 + this.animTime * 2.0) * Math.cos(y * 0.22 + this.animTime * 1.6);
                            const spark = shimmer > 0.62 ? 35 : 0;
                            r = Math.min(255, 14 + spark);
                            g = Math.min(255, 44 + spark * 1.2);
                            b = Math.min(255, 105 + waterWave + spark * 1.5);
                            break;
                        }
                        case TILES.WATER: {
                            const shimmer = Math.sin(x * 0.2 + this.animTime * 2.2) * Math.cos(y * 0.2 + this.animTime * 1.8);
                            const spark = shimmer > 0.58 ? 42 : 0;
                            r = Math.min(255, 28 + spark * 0.8);
                            g = Math.min(255, 100 + waterWave * 0.8 + spark);
                            b = Math.min(255, 180 + waterWave + spark * 1.4);
                            break;
                        }
                        case TILES.SAND:
                            r = 222 - varOffset; g = 193 - varOffset; b = 122 - varOffset;
                            break;
                        case TILES.SOIL:
                            r = 84 - varOffset; g = 55 - varOffset; b = 28 - varOffset;
                            break;
                        case TILES.GRASS:
                            r = 72 - varOffset; g = 158 - varOffset; b = 56 - varOffset;
                            break;
                        case TILES.FOREST:
                            r = 37 - varOffset; g = 102 - varOffset; b = 29 - varOffset;
                            break;
                        case TILES.STONE:
                            r = 107 - varOffset; g = 114 - varOffset; b = 128 - varOffset;
                            break;
                        case TILES.HIGH_MOUNTAIN:
                            r = 156 - varOffset; g = 163 - varOffset; b = 175 - varOffset;
                            break;
                        case TILES.SNOW:
                            r = 230 - varOffset; g = 235 - varOffset; b = 245;
                            break;
                        case TILES.ICE:
                            r = 165; g = 243; b = 252;
                            break;
                        case TILES.LAVA: {
                            const shimmer = Math.sin(x * 0.28 + y * 0.28 + this.animTime * 3.0);
                            const spark = shimmer > 0.4 ? 45 : 0;
                            r = 255;
                            g = Math.min(255, 69 + lavaWave + spark * 2);
                            b = spark;
                            break;
                        }
                        case TILES.ACID: {
                            const bubble = Math.sin(x * 0.35 + y * 0.35 + this.animTime * 3.5);
                            r = bubble > 0.5 ? 85 : 74;
                            g = bubble > 0.5 ? 248 : 222 + waterWave * 0.8;
                            b = bubble > 0.5 ? 140 : 128;
                            break;
                        }
                        case TILES.BEDROCK:
                            r = 31; g = 41; b = 55;
                            break;
                        case TILES.FALLOUT:
                            r = 101 - varOffset; g = 163; b = 13;
                            break;
                        case TILES.ASH:
                            r = 55 - varOffset; g = 65 - varOffset; b = 81 - varOffset;
                            break;
                        case TILES.CORRUPTED:
                            r = 126 - varOffset; g = 34 - varOffset; b = 206 - varOffset;
                            break;
                        case TILES.SWAMP:
                            r = 54 - varOffset; g = 83 - varOffset; b = 20 - varOffset;
                            break;
                        case TILES.ROAD:
                            r = 148 - varOffset; g = 163 - varOffset; b = 184 - varOffset;
                            break;
                        case TILES.NEBULA:
                            // Deep cosmic magenta/purple interstellar gas
                            r = 175 + Math.sin(this.animTime * 2 + x * 0.15) * 25;
                            g = 30 + Math.cos(this.animTime * 1.8 + y * 0.15) * 20;
                            b = 205 + Math.sin(this.animTime * 2.5) * 30;
                            break;
                        case TILES.STARDUST:
                            // Bright cyan & sparkling starlight powder
                            r = 50 + Math.sin(this.animTime * 4 + (x + y) * 0.3) * 30;
                            g = 190 + Math.cos(this.animTime * 3 + x * 0.2) * 25;
                            b = 250;
                            break;
                        case TILES.OBSIDIAN:
                            // Deep dark volcanic purple-black glossy stone
                            r = 28 - varOffset;
                            g = 20 - varOffset;
                            b = 40 - varOffset;
                            if ((x * 3 + y * 7) % 11 === 0) { r += 25; g += 20; b += 40; } // Mineral sheen
                            break;
                        case TILES.CRYSTAL:
                            // Prismatic iridescent crystal with cyan-violet refraction
                            r = 155 + Math.sin(this.animTime * 3 + x * 0.3) * 45;
                            g = 220 + Math.cos(this.animTime * 2.5 + y * 0.3) * 30;
                            b = 255;
                            break;
                        case TILES.MAGMA_ROCK:
                            // Dark basalt with glowing red-orange magma veins
                            r = 75 - varOffset; g = 25 - varOffset; b = 25 - varOffset;
                            if ((x * 5 + y * 7 + Math.floor(this.animTime * 2)) % 7 === 0) {
                                r = 245; g = 80 + Math.sin(this.animTime * 3) * 30; b = 15;
                            }
                            break;
                        case TILES.BIOLUMINESCENT_MOSS:
                            // Glowing electric teal-emerald alien moss
                            r = 15;
                            g = 180 - varOffset + Math.sin(this.animTime * 2 + (x + y) * 0.2) * 35;
                            b = 160 + Math.cos(this.animTime * 2.5 + x * 0.2) * 45;
                            break;
                        case TILES.QUICKSAND:
                            // Shifting dark amber quicksand
                            r = 185 - varOffset + Math.sin(this.animTime * 1.5 + y * 0.4) * 8;
                            g = 145 - varOffset;
                            b = 85 - varOffset;
                            break;
                        case TILES.MUSHROOM_SPORE:
                            r = 168 - varOffset + Math.sin(this.animTime * 2 + (x + y) * 0.2) * 20;
                            g = 85 - varOffset;
                            b = 247 - varOffset;
                            break;
                        case TILES.HONEY_COMB:
                            r = 245 - varOffset;
                            g = 158 - varOffset;
                            b = 11;
                            break;
                        case TILES.GOLD_ORE:
                            r = 234 - varOffset;
                            g = 179 - varOffset;
                            b = 8;
                            if ((x * 13 + y * 7) % 5 === 0) { r = 255; g = 240; b = 150; }
                            break;
                        case TILES.POISON_SWAMP:
                            r = 139 + Math.sin(this.animTime * 3 + x * 0.2) * 25;
                            g = 92 + waterWave * 0.5;
                            b = 246;
                            break;
                        case TILES.HOLY_GROUND:
                            r = 254;
                            g = 240 - varOffset;
                            b = 138 - varOffset + Math.sin(this.animTime * 4 + (x + y) * 0.3) * 25;
                            break;
                        case TILES.BLOOD_RIVER:
                            r = 170 + waterWave;
                            g = 20;
                            b = 20;
                            break;
                        case TILES.PLASMA_FIELD:
                            r = 6;
                            g = 182 + Math.sin(this.animTime * 5 + (x + y) * 0.4) * 35;
                            b = 212;
                            break;
                        case TILES.LIVING_BRAMBLE:
                            r = 21;
                            g = 128 - varOffset;
                            b = 61 - varOffset;
                            if ((x * 17 + y * 11) % 7 === 0) { r = 34; g = 197; b = 94; }
                            break;
                        case TILES.AETHER_FLUID:
                            r = 129 + Math.sin(this.animTime * 3 + x * 0.25) * 30;
                            g = 140 + waterWave * 0.4;
                            b = 248;
                            break;
                        case TILES.METEORITE_ORE:
                            r = 249 - varOffset;
                            g = 115 - varOffset;
                            b = 22;
                            if ((x * 19 + y * 23 + Math.floor(this.animTime * 4)) % 19 === 0) {
                                r = 255; g = 240; b = 180;
                            }
                            break;
                        case TILES.CORAL_REEF:
                            // Vibrant Marine Coral Reef
                            r = 244 - varOffset;
                            g = 63 + Math.sin(this.animTime * 3.5 + x * 0.3) * 25;
                            b = 94 + waterWave * 0.5;
                            if ((x * 7 + y * 13) % 4 === 0) { r += 20; g += 80; b += 90; } // Bioluminescent polyp
                            break;
                        case TILES.TAR_PIT:
                            // Viscous Bubbling Black Tar Pit
                            r = 24 - varOffset * 0.5;
                            g = 24 - varOffset * 0.5;
                            b = 27 - varOffset * 0.5;
                            if ((x * 11 + y * 17 + Math.floor(this.animTime * 2)) % 23 === 0) {
                                r = 60; g = 45; b = 20; // Tar bubble pop
                            }
                            break;
                        case TILES.GLOWCAP_MUSHROOM:
                            // Radiant Cyan/Emerald Bioluminescent Fungal Spores
                            r = 6;
                            g = 182 - varOffset + Math.sin(this.animTime * 3 + (x + y) * 0.25) * 35;
                            b = 212 + Math.cos(this.animTime * 2.5 + x * 0.2) * 40;
                            if ((x * 9 + y * 5) % 6 === 0) { r = 220; g = 255; b = 255; }
                            break;
                        case TILES.AETHER_CRYSTAL:
                            // Floating Iridescent Celestial Prisms
                            r = 56 + Math.sin(this.animTime * 4 + x * 0.3) * 50;
                            g = 189 + Math.cos(this.animTime * 3.5 + y * 0.3) * 45;
                            b = 248;
                            if ((x * 13 + y * 19 + Math.floor(this.animTime * 6)) % 17 === 0) {
                                r = 255; g = 255; b = 255;
                            }
                            break;
                        case TILES.VOLCANIC_CALDERA:
                            // Basalt Ring with Glowing Magma Fractures
                            r = 69 - varOffset;
                            g = 10 - varOffset * 0.5;
                            b = 10 - varOffset * 0.5;
                            if ((x * 3 + y * 5 + Math.floor(this.animTime * 3)) % 5 === 0) {
                                r = 255; g = 100 + Math.sin(this.animTime * 4) * 40; b = 0; // Magma fracture
                            }
                            break;
                        case TILES.ENCHANTED_GROVE:
                            // Mystic Pink Cherry Blossom & Twilight Starlight Woodland
                            r = 244 - varOffset;
                            g = 114 - varOffset;
                            b = 182 + Math.sin(this.animTime * 2.5 + (x + y) * 0.15) * 25;
                            if ((x * 11 + y * 7 + Math.floor(this.animTime * 3)) % 11 === 0) {
                                r = 255; g = 220; b = 245; // Drifting petal glint
                            }
                            break;
                        case TILES.ASH_WASTELAND:
                            r = 71 - varOffset; g = 85 - varOffset; b = 105 - varOffset;
                            break;
                        case TILES.CURSED_MARSH:
                            r = 88 - varOffset; g = 28 - varOffset; b = 135 - varOffset;
                            if ((x * 7 + y * 13 + Math.floor(this.animTime * 2)) % 19 === 0) { r = 168; g = 85; b = 247; }
                            break;
                        case TILES.BIOLUMINESCENT_CORAL:
                            r = 6; g = 182 - varOffset; b = 212 + Math.sin(this.animTime * 3 + x) * 25;
                            break;
                        case TILES.PETRIFIED_WOOD:
                            r = 120 - varOffset; g = 113 - varOffset; b = 108 - varOffset;
                            break;
                        case TILES.GOLDEN_SAND:
                            r = 251 - varOffset; g = 191 - varOffset; b = 36 - varOffset;
                            if ((x * 13 + y * 9) % 7 === 0) { r = 255; g = 245; b = 150; }
                            break;
                        case TILES.OBSIDIAN_SPIRE:
                            r = 15 - varOffset * 0.5; g = 23 - varOffset * 0.5; b = 42 - varOffset * 0.5;
                            break;
                        case TILES.GLACIAL_PERMAFROST:
                            r = 207 - varOffset; g = 250 - varOffset; b = 254;
                            break;
                        case TILES.RADIOACTIVE_WASTE:
                            r = 132; g = 204 + Math.sin(this.animTime * 3.5 + x * 0.2) * 30; b = 22;
                            break;
                        case TILES.AETHER_SOIL:
                            r = 129 - varOffset; g = 140 - varOffset; b = 248 - varOffset;
                            if ((x * 5 + y * 11) % 8 === 0) { r = 192; g = 132; b = 252; }
                            break;
                        case TILES.DEEP_TRENCH:
                            r = 3; g = 7 + waterWave * 0.2; b = 18 + waterWave * 0.3;
                            break;
                        case TILES.BASALT_MESA:
                            r = 51 - varOffset; g = 65 - varOffset; b = 85 - varOffset;
                            break;
                        case TILES.SACRED_SOIL:
                            r = 254; g = 240 - varOffset; b = 138;
                            if ((x * 9 + y * 7 + Math.floor(this.animTime * 4)) % 13 === 0) { r = 255; g = 255; b = 255; }
                            break;
                        case TILES.CRYSTAL_GEODE:
                            r = 192 - varOffset; g = 132 - varOffset; b = 252 - varOffset;
                            if ((x * 11 + y * 5) % 6 === 0) { r = 245; g = 208; b = 254; }
                            break;
                        case TILES.SUNBAKED_CLAY:
                            r = 234 - varOffset; g = 88 - varOffset; b = 12 - varOffset;
                            break;
                        case TILES.TOXIC_SLIME:
                            r = 34; g = 197 + Math.sin(this.animTime * 3.2 + y * 0.2) * 35; b = 94;
                            break;
                        case TILES.LIVING_VINES:
                            r = 22 - varOffset; g = 101 - varOffset; b = 52 - varOffset;
                            if ((x * 7 + y * 3) % 5 === 0) { r = 74; g = 222; b = 128; }
                            break;
                        case TILES.STAR_METAL_ORE:
                            r = 99 - varOffset * 0.5; g = 102 - varOffset * 0.5; b = 241;
                            if ((x * 13 + y * 11) % 9 === 0) { r = 224; g = 231; b = 255; }
                            break;
                        case TILES.FLOATING_ROCK:
                            r = 100 - varOffset; g = 116 - varOffset; b = 139 - varOffset;
                            break;
                        case TILES.MAGMA_FISSURE:
                            r = 220; g = 38 + Math.sin(this.animTime * 4 + x * 0.3) * 30; b = 38;
                            break;
                        case TILES.LUSH_MEADOW:
                            r = 163 - varOffset; g = 230 - varOffset; b = 53 - varOffset;
                            if ((x * 7 + y * 11) % 9 === 0) { r = 244; g = 114; b = 182; } // Wildflower pink
                            else if ((x * 13 + y * 5) % 11 === 0) { r = 250; g = 204; b = 21; } // Wildflower yellow
                            break;
                        case TILES.OBSIDIAN_BLOCK:
                            r = 22 - varOffset; g = 19 - varOffset; b = 36 - varOffset;
                            break;
                        case TILES.BASALT:
                            r = 41 - varOffset; g = 37 - varOffset; b = 36 - varOffset;
                            break;
                        case TILES.GLACIAL_ICE:
                            r = 103 - varOffset; g = 232 - varOffset; b = 249 - varOffset;
                            break;
                        case TILES.CRYSTAL_ORE:
                            r = 192 - varOffset; g = 132 - varOffset; b = 252 - varOffset;
                            break;
                        case TILES.GOLD_VEIN:
                            r = 234 - varOffset; g = 179 - varOffset; b = 8 - varOffset;
                            break;
                        case TILES.AETHER_ROCK:
                            r = 129 - varOffset; g = 140 - varOffset; b = 248 - varOffset;
                            break;
                        case TILES.MUD:
                            r = 69 - varOffset; g = 26 - varOffset; b = 3 - varOffset;
                            break;
                        case TILES.PEAT:
                            r = 63 - varOffset; g = 46 - varOffset; b = 24 - varOffset;
                            break;
                        case TILES.MYCELIUM:
                            r = 147 - varOffset; g = 51 - varOffset; b = 234 - varOffset;
                            break;
                        case TILES.CORAL_BARRIER:
                            r = 251 - varOffset; g = 113 - varOffset; b = 133 - varOffset;
                            break;
                        case TILES.DUNE_QUICKSAND:
                            r = 217 - varOffset; g = 119 - varOffset; b = 6 - varOffset;
                            break;
                        case TILES.VOLCANIC_CINDER:
                            r = 87 - varOffset; g = 83 - varOffset; b = 78 - varOffset;
                            break;
                        case TILES.SULFUR_STONE:
                            r = 250 - varOffset; g = 204 - varOffset; b = 21 - varOffset;
                            break;
                        case TILES.CHLOROPHYLL_MOSS:
                            r = 22 - varOffset; g = 163 - varOffset; b = 74 - varOffset;
                            break;
                        case TILES.STARFALL_DUST:
                            r = 56 - varOffset; g = 189 - varOffset; b = 248 - varOffset;
                            break;
                        case TILES.VOID_STONE:
                            r = 15 - varOffset; g = 10 - varOffset; b = 28 - varOffset;
                            break;
                        case TILES.ANCIENT_BRICK:
                            r = 120 - varOffset; g = 113 - varOffset; b = 108 - varOffset;
                            break;
                        case TILES.MARBLE_ROAD:
                            r = 241 - varOffset; g = 245 - varOffset; b = 249 - varOffset;
                            break;
                        case TILES.RUNIC_SLATE:
                            r = 71 - varOffset; g = 85 - varOffset; b = 105 - varOffset;
                            break;
                        case TILES.CRIMSON_RED_SAND:
                            r = 185 - varOffset; g = 28 - varOffset; b = 28 - varOffset;
                            break;
                        case TILES.BAMBOO_THICKET:
                            r = 21 - varOffset; g = 128 - varOffset; b = 61 - varOffset;
                            break;
                        case TILES.TUNDRA_PERMAFROST:
                            r = 148 - varOffset; g = 163 - varOffset; b = 184 - varOffset;
                            break;
                        case TILES.PETRIFIED_GROVE:
                            r = 82 - varOffset; g = 82 - varOffset; b = 91 - varOffset;
                            break;
                        case TILES.LUMINESCENT_LICHEN:
                            r = 6 - varOffset; g = 182 - varOffset; b = 212 - varOffset;
                            break;
                        case TILES.SILVER_ORE:
                            r = 203 - varOffset; g = 213 - varOffset; b = 225 - varOffset;
                            break;
                        case TILES.METEORITE_CORE:
                            r = 249 - varOffset; g = 115 - varOffset; b = 22 - varOffset;
                            break;
                        case TILES.PRISMATIC_CRYSTAL:
                            r = 236 - varOffset; g = 72 - varOffset; b = 153 - varOffset;
                            break;
                        case TILES.DEEP_EARTH_MANTLE:
                            r = 127 - varOffset; g = 29 - varOffset; b = 29 - varOffset;
                            break;
                        case TILES.DIVINE_SOIL:
                            r = 254 - varOffset; g = 240 - varOffset; b = 138 - varOffset;
                            break;
                        case TILES.ABYSSAL_CHASM:
                            r = 2 - varOffset; g = 6 - varOffset; b = 23 - varOffset;
                            break;
                        default:
                            r = 0; g = 0; b = 0;
                    }
                }

                // --- High-Definition Multi-Directional Edge Shading & Coastal Surf ---
                if (fire === 0) {
                    const curElev = world.elevation ? world.elevation[i] : (TILE_BASE_ELEVATION[t] || 2.0);
                    const topIdx = (y > 0) ? i - world.width : i;
                    const leftIdx = (x > 0) ? i - 1 : i;
                    const botIdx = (y < world.height - 1) ? i + world.width : i;
                    const rightIdx = (x < world.width - 1) ? i + 1 : i;

                    const topElev = world.elevation ? world.elevation[topIdx] : curElev;
                    const leftElev = world.elevation ? world.elevation[leftIdx] : curElev;
                    const botElev = world.elevation ? world.elevation[botIdx] : curElev;
                    const rightElev = world.elevation ? world.elevation[rightIdx] : curElev;

                    const topTile = world.tiles[topIdx];
                    const leftTile = world.tiles[leftIdx];
                    const botTile = world.tiles[botIdx];
                    const rightTile = world.tiles[rightIdx];

                    // 1. Rolling Shoreline Wave Foam on Water & Coasts
                    if (t === TILES.WATER || t === TILES.DEEP_WATER || t === TILES.CORAL_REEF) {
                        const isCoast = (topElev > 1.8 || leftElev > 1.8 || botElev > 1.8 || rightElev > 1.8 ||
                                         topTile === TILES.SAND || leftTile === TILES.SAND || botTile === TILES.SAND || rightTile === TILES.SAND ||
                                         topTile === TILES.GRASS || leftTile === TILES.GRASS || botTile === TILES.GRASS || rightTile === TILES.GRASS);
                        if (isCoast) {
                            const surf = Math.sin(this.animTime * 4.2 + x * 0.45) * 0.5 + Math.cos(this.animTime * 3.4 + y * 0.45) * 0.5;
                            if (surf > 0.15) {
                                r += 75; g += 90; b += 115;
                            }
                        }
                    }

                    // 2. Directional Sunlit Cliff Highlight (Top & Left Edges)
                    const elevDeltaTop = curElev - topElev;
                    const elevDeltaLeft = curElev - leftElev;
                    if (elevDeltaTop > 0.4 || elevDeltaLeft > 0.4) {
                        const sunHighlight = Math.min(45, (Math.max(elevDeltaTop, elevDeltaLeft) * 16));
                        r += sunHighlight;
                        g += sunHighlight;
                        b += sunHighlight * 1.15;
                    }

                    // 3. Drop Shadow on Lower Adjacent Terrain (Cast to South & East)
                    const shadowFromTop = topElev - curElev;
                    const shadowFromLeft = leftElev - curElev;
                    if (shadowFromTop > 0.5 || shadowFromLeft > 0.5) {
                        const shadowDepth = Math.min(50, Math.max(shadowFromTop, shadowFromLeft) * 18);
                        r -= shadowDepth;
                        g -= shadowDepth;
                        b -= shadowDepth * 0.85;
                    }
                }

                // Star glints in cosmic & prismatic tiles
                if ((t === TILES.NEBULA || t === TILES.STARDUST || t === TILES.CRYSTAL || t === TILES.PLASMA_FIELD || t === TILES.AETHER_FLUID || t === TILES.AETHER_CRYSTAL) && fire === 0) {
                    if (((x * 31 + y * 17 + Math.floor(this.animTime * 5)) % 43) === 0) {
                        r = 255; g = 255; b = 255;
                    }
                }

                data[pIdx] = Math.max(0, Math.min(255, r));
                data[pIdx + 1] = Math.max(0, Math.min(255, g));
                data[pIdx + 2] = Math.max(0, Math.min(255, b));
                data[pIdx + 3] = 255;
            }
        }

        this.tileCtx.putImageData(this.tileImageData, 0, 0);
        this.ctx.drawImage(this.tileBuffer, 0, 0);
    }

    renderKingdomBorders(world, kingdoms) {
        if (!kingdoms || kingdoms.size === 0) return;
        const ctx = this.ctx;
        ctx.save();
        for (const [id, k] of kingdoms.entries()) {
            if (!k.buildings || k.buildings.length === 0) continue;
            ctx.fillStyle = k.color + '1c';
            ctx.strokeStyle = k.color + 'aa';
            ctx.lineWidth = 1.2;
            ctx.setLineDash([3, 2]);

            for (let i = 0; i < k.buildings.length; i++) {
                const b = k.buildings[i];
                const r = b.type === 'townhall' ? 26 : (b.type === 'tower' ? 20 : 15);
                const step = Math.floor(r * 0.4);
                ctx.beginPath();
                ctx.moveTo(b.x - r + step, b.y - r);
                ctx.lineTo(b.x + r - step, b.y - r);
                ctx.lineTo(b.x + r, b.y - r + step);
                ctx.lineTo(b.x + r, b.y + r - step);
                ctx.lineTo(b.x + r - step, b.y + r);
                ctx.lineTo(b.x - r + step, b.y + r);
                ctx.lineTo(b.x - r, b.y + r - step);
                ctx.lineTo(b.x - r, b.y - r + step);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
        }
        ctx.restore();
    }

    renderBuildings(buildings) {
        const ctx = this.ctx;
        for (let i = 0; i < buildings.length; i++) {
            const b = buildings[i];
            const bx = Math.floor(b.x);
            const by = Math.floor(b.y);
            const hw = Math.floor(b.width * 0.5);
            const hh = Math.floor(b.height * 0.5);

            ctx.save();

            if (b.type === 'hut') {
                // Circular clay/timber hut
                ctx.fillStyle = '#78350f';
                ctx.fillRect(bx - hw, by - hh, b.width, b.height);
                // Thatched conical straw roof
                ctx.fillStyle = '#d97706';
                ctx.beginPath();
                ctx.moveTo(bx - hw - 1.5, by - hh);
                ctx.lineTo(bx, by - hh - 3.5);
                ctx.lineTo(bx + hw + 1.5, by - hh);
                ctx.closePath();
                ctx.fill();
                // Little dark door
                ctx.fillStyle = '#451a03';
                ctx.fillRect(bx - 1, by + hh - 2, 2, 2);
            } else if (b.type === 'house') {
                // Stone foundation
                ctx.fillStyle = '#475569';
                ctx.fillRect(bx - hw, by + hh - 2, b.width, 2);
                // Timber walls
                ctx.fillStyle = '#92400e';
                ctx.fillRect(bx - hw, by - hh, b.width, b.height - 2);
                // Terracotta gabled roof
                ctx.fillStyle = '#b91c1c';
                ctx.beginPath();
                ctx.moveTo(bx - hw - 2, by - hh);
                ctx.lineTo(bx, by - hh - 5);
                ctx.lineTo(bx + hw + 2, by - hh);
                ctx.closePath();
                ctx.fill();
                // Roof ridge highlight
                ctx.strokeStyle = '#ef4444';
                ctx.lineWidth = 0.8;
                ctx.beginPath();
                ctx.moveTo(bx - hw - 2, by - hh);
                ctx.lineTo(bx, by - hh - 5);
                ctx.lineTo(bx + hw + 2, by - hh);
                ctx.stroke();
                // Warm glowing candle window
                ctx.fillStyle = '#fef08a';
                ctx.fillRect(bx - hw + 1.5, by - 1, 2, 2);
                // Chimney
                ctx.fillStyle = '#64748b';
                ctx.fillRect(bx + hw - 2, by - hh - 4, 1.8, 3);
            } else if (b.type === 'townhall') {
                // Grand multi-story Stone Citadel
                ctx.fillStyle = '#64748b';
                ctx.fillRect(bx - hw, by - hh, b.width, b.height);
                // Quoin / Corner stones
                ctx.fillStyle = '#334155';
                ctx.fillRect(bx - hw, by - hh, 2, b.height);
                ctx.fillRect(bx + hw - 2, by - hh, 2, b.height);
                // Grand Blue / Slate Roof
                ctx.fillStyle = '#1e3a8a';
                ctx.beginPath();
                ctx.moveTo(bx - hw - 2, by - hh);
                ctx.lineTo(bx, by - hh - 6);
                ctx.lineTo(bx + hw + 2, by - hh);
                ctx.closePath();
                ctx.fill();
                // Clock / Bell tower spire
                ctx.fillStyle = '#3b82f6';
                ctx.fillRect(bx - 1.5, by - hh - 8, 3, 3);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(bx - 0.5, by - hh - 10, 1, 2);
                // Arched double oak entrance
                ctx.fillStyle = '#3f1d0b';
                ctx.fillRect(bx - 2, by + hh - 4, 4, 4);
                // Kingdom Banners
                ctx.fillStyle = b.color || '#ef4444';
                ctx.fillRect(bx - hw - 1, by - hh + 1, 1.5, 4);
                ctx.fillRect(bx + hw - 0.5, by - hh + 1, 1.5, 4);
            } else if (b.type === 'tower') {
                // Tall defensive watchtower
                ctx.fillStyle = '#475569';
                ctx.fillRect(bx - hw, by - hh - 3, b.width, b.height + 3);
                // Crenelated battlements on roof
                ctx.fillStyle = '#334155';
                ctx.fillRect(bx - hw, by - hh - 5, 2, 2);
                ctx.fillRect(bx + hw - 2, by - hh - 5, 2, 2);
                ctx.fillRect(bx - 1, by - hh - 5, 2, 2);
                // Arrow slits
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(bx - 0.5, by - 1, 1, 3);
                ctx.fillRect(bx - 0.5, by - hh + 1, 1, 2);
                // Kingdom pennant fluttering
                ctx.fillStyle = b.color || '#3b82f6';
                const wave = Math.sin(this.animTime * 6) * 1.5;
                ctx.beginPath();
                ctx.moveTo(bx, by - hh - 5);
                ctx.lineTo(bx + 4 + wave, by - hh - 6);
                ctx.lineTo(bx, by - hh - 7);
                ctx.closePath();
                ctx.fill();
            } else if (b.type === 'farm') {
                // Soil plot furrows
                ctx.fillStyle = '#553c1e';
                ctx.fillRect(bx - hw, by - hh, b.width, b.height);
                // Golden wheat crop rows
                ctx.fillStyle = '#eab308';
                for (let fy = by - hh + 1; fy < by + hh; fy += 2) {
                    for (let fx = bx - hw + 1; fx < bx + hw; fx += 2) {
                        ctx.fillRect(fx, fy, 1.2, 1.2);
                    }
                }
                // Wooden fence corners
                ctx.fillStyle = '#b45309';
                ctx.fillRect(bx - hw, by - hh, 1, 1);
                ctx.fillRect(bx + hw - 1, by - hh, 1, 1);
                ctx.fillRect(bx - hw, by + hh - 1, 1, 1);
                ctx.fillRect(bx + hw - 1, by + hh - 1, 1, 1);
            } else if (b.type === 'campfire') {
                // Stepped square ring of river rocks
                ctx.fillStyle = '#64748b';
                ctx.fillRect(bx - 3, by - 1, 1, 2);
                ctx.fillRect(bx + 2, by - 1, 1, 2);
                ctx.fillRect(bx - 1, by - 3, 2, 1);
                ctx.fillRect(bx - 1, by + 2, 2, 1);
                // Animated dancing flame
                const fCol = Math.random() < 0.5 ? '#f59e0b' : '#ef4444';
                ctx.fillStyle = fCol;
                ctx.fillRect(bx - 1, by - 1.5, 2, 2.5);
                ctx.fillStyle = '#fef08a';
                ctx.fillRect(bx - 0.5, by - 1, 1, 1.5);
            } else if (b.type === 'cottage') {
                // Bronze/Iron Age Thatched Stone Cottage
                ctx.fillStyle = '#71717a';
                ctx.fillRect(bx - hw, by - hh, b.width, b.height);
                ctx.fillStyle = '#ca8a04';
                ctx.beginPath();
                ctx.moveTo(bx - hw - 1, by - hh);
                ctx.lineTo(bx, by - hh - 4);
                ctx.lineTo(bx + hw + 1, by - hh);
                ctx.closePath();
                ctx.fill();
                ctx.fillStyle = '#451a03';
                ctx.fillRect(bx - 1, by + hh - 2, 2, 2);
            } else if (b.type === 'blacksmith') {
                // Blacksmith forge & chimney
                ctx.fillStyle = '#3f3f46';
                ctx.fillRect(bx - hw, by - hh, b.width, b.height);
                // Glowing orange forge hearth
                ctx.fillStyle = Math.random() < 0.5 ? '#ea580c' : '#f59e0b';
                ctx.fillRect(bx - 1.5, by - 1, 3, 2.5);
                // Chimney with smoke puff
                ctx.fillStyle = '#18181b';
                ctx.fillRect(bx + hw - 2, by - hh - 4, 2, 4);
                // Anvil
                ctx.fillStyle = '#a1a1aa';
                ctx.fillRect(bx - hw + 1, by + hh - 2, 2, 1.5);
            } else if (b.type === 'fortress') {
                // Medieval Twin-Tower Citadel Keep
                ctx.fillStyle = '#475569';
                ctx.fillRect(bx - hw, by - hh, b.width, b.height);
                // Twin Bastion Towers
                ctx.fillStyle = '#334155';
                ctx.fillRect(bx - hw - 1, by - hh - 3, 2.5, b.height + 3);
                ctx.fillRect(bx + hw - 1.5, by - hh - 3, 2.5, b.height + 3);
                // Rooftop Battlements
                ctx.fillStyle = '#1e293b';
                ctx.fillRect(bx - hw - 1, by - hh - 4, 1, 1);
                ctx.fillRect(bx + hw, by - hh - 4, 1, 1);
                // Portcullis gate
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(bx - 1.5, by + hh - 3, 3, 3);
                // Royal Banner
                ctx.fillStyle = b.color || '#ef4444';
                ctx.fillRect(bx - 0.5, by - hh - 5, 1, 3);
            } else if (b.type === 'watchtower') {
                // Tall Arrow Tower
                ctx.fillStyle = '#64748b';
                ctx.fillRect(bx - hw, by - hh - 4, b.width, b.height + 4);
                ctx.fillStyle = '#1e293b';
                ctx.fillRect(bx - hw, by - hh - 6, b.width, 2);
                ctx.fillStyle = '#fde047';
                ctx.fillRect(bx - 0.5, by - hh - 1, 1, 2);
            } else if (b.type === 'factory') {
                // Industrial Age Brick Factory with Twin Smokestacks
                ctx.fillStyle = '#991b1b';
                ctx.fillRect(bx - hw, by - hh, b.width, b.height);
                // Dual Brick Smokestacks
                ctx.fillStyle = '#450a0a';
                ctx.fillRect(bx - hw + 1, by - hh - 6, 2, 6);
                ctx.fillRect(bx + hw - 3, by - hh - 6, 2, 6);
                // Factory Gear Windows
                ctx.fillStyle = '#fef08a';
                ctx.fillRect(bx - 2, by - 1, 2, 2);
                ctx.fillRect(bx + 1, by - 1, 2, 2);
                // Metal door
                ctx.fillStyle = '#1e293b';
                ctx.fillRect(bx - 1, by + hh - 3, 2, 3);
            } else if (b.type === 'plasma_pylon') {
                // Cosmic Age Neon Obelisk
                ctx.fillStyle = '#0284c7';
                ctx.fillRect(bx - hw, by - hh - 4, b.width, b.height + 4);
                // Glowing cyan core line
                ctx.fillStyle = '#38bdf8';
                ctx.fillRect(bx - 0.5, by - hh - 3, 1, b.height + 2);
                // Pulsing peak energy orb
                const pulse = Math.sin(this.animTime * 8) * 0.5 + 0.5;
                ctx.fillStyle = `rgba(250, 204, 21, ${0.7 + pulse * 0.3})`;
                ctx.beginPath();
                ctx.arc(bx, by - hh - 6, 2 + pulse, 0, Math.PI * 2);
                ctx.fill();
            } else if (b.type === 'shield_generator') {
                // Cosmic Age Dome Forcefield Generator
                ctx.fillStyle = '#475569';
                ctx.fillRect(bx - hw, by - hh + 1, b.width, b.height - 1);
                // Translucent energy dome
                const domePulse = Math.sin(this.animTime * 5) * 0.2 + 0.8;
                ctx.fillStyle = `rgba(168, 85, 247, ${0.4 * domePulse})`;
                ctx.beginPath();
                ctx.arc(bx, by - hh + 1, hw + 1, Math.PI, 0);
                ctx.fill();
                ctx.strokeStyle = '#c084fc';
                ctx.lineWidth = 1;
                ctx.stroke();
            } else {
                ctx.fillStyle = b.color;
                ctx.fillRect(bx - hw, by - hh, b.width, b.height);
            }

            ctx.restore();
        }
    }

    renderEntities(entities, kingdoms) {
        const ctx = this.ctx;
        for (let i = 0; i < entities.length; i++) {
            const ent = entities[i];
            if (!ent.active) continue;

            const size = ent.size * ent.scale;
            const px = ent.x;
            const py = ent.y;

            ctx.save();

            // Soft Ground Contact Drop Shadow
            const isFlying = ent.isFlying || (ent.species && (ent.species.includes('dragon') || ent.species.includes('falcon') || ent.species.includes('griffin') || ent.species.includes('angel') || ent.species.includes('bird')));
            const shadowW = Math.max(2, size * (isFlying ? 0.75 : 0.95));
            const shadowH = Math.max(1, size * (isFlying ? 0.35 : 0.45));
            const shadowY = py + (isFlying ? size * 0.75 : size * 0.42);
            ctx.fillStyle = isFlying ? 'rgba(0, 0, 0, 0.22)' : 'rgba(0, 0, 0, 0.38)';
            ctx.beginPath();
            ctx.ellipse(px, shadowY, shadowW, shadowH, 0, 0, Math.PI * 2);
            ctx.fill();

            // Hit Flash: White-hot brightness when struck
            if (ent.hitFlash > 0) {
                ctx.filter = 'brightness(3) contrast(1.5)';
            }

            // Dying Animation: Progressive toppling tilt, flicker & fade
            if (ent.isDying) {
                const prog = 1 - (ent.deathTimer / Math.max(1, ent.maxDeathTimer));
                const tiltSign = ent.facingLeft ? -1 : 1;
                const tiltAngle = tiltSign * prog * (Math.PI / 2);
                ctx.translate(px, py + prog * size * 0.4);
                ctx.rotate(tiltAngle);
                ctx.translate(-px, -(py + prog * size * 0.4));

                if (Math.floor(ent.deathTimer / 3) % 2 === 0) {
                    ctx.filter = 'brightness(2.2)';
                }
                ctx.globalAlpha *= Math.max(0.15, 1 - prog * 0.75);
            } else if (ent.hp > 0 && ent.hp < ent.maxHp * 0.25) {
                // Low health tremble
                const tremble = Math.sin(Date.now() * 0.02 + ent.id) * 0.5;
                ctx.translate(tremble, 0);
            }

            // Status Auras (Stepped retro pixel halos)
            if (ent.blessed) {
                ctx.strokeStyle = '#facc15';
                ctx.lineWidth = 1;
                const r = Math.floor(size + 2);
                ctx.strokeRect(Math.floor(px - r), Math.floor(py - r), r * 2, r * 2);
            }
            if (ent.cursed) {
                ctx.strokeStyle = '#7e22ce';
                ctx.lineWidth = 1;
                const r = Math.floor(size + 2);
                ctx.strokeRect(Math.floor(px - r), Math.floor(py - r), r * 2, r * 2);
            }
            if (ent.frozen > 0) {
                ctx.fillStyle = 'rgba(165, 243, 252, 0.6)';
                ctx.fillRect(px - size - 0.5, py - size - 0.5, size * 2 + 1, size * 2 + 1);
            }

            // Invisibility Trait (Ghostly cloaked transparency)
            if (ent.hasTrait('invisibility')) {
                ctx.globalAlpha = 0.35;
            }

            // Thorny Trait (Spiked perimeter pixels)
            if (ent.hasTrait('thorny')) {
                ctx.fillStyle = '#15803d';
                const r = Math.floor(size + 2);
                ctx.fillRect(px - r, py, 1.5, 1.5);
                ctx.fillRect(px + r - 1, py, 1.5, 1.5);
                ctx.fillRect(px, py - r, 1.5, 1.5);
                ctx.fillRect(px, py + r - 1, 1.5, 1.5);
            }

            // Cryomancer Trait (Glacial frost diamond aura)
            if (ent.hasTrait('cryomancer')) {
                ctx.strokeStyle = '#a5f3fc';
                ctx.lineWidth = 1;
                const r = Math.floor(size + 2);
                ctx.strokeRect(px - r, py - r, r * 2, r * 2);
            }

            // Starlight Aura Trait (Twinkling cyan stardust halo)
            if (ent.hasTrait('starlight_aura')) {
                ctx.strokeStyle = '#38bdf8';
                ctx.lineWidth = 1;
                const r = Math.floor(size + 3);
                ctx.strokeRect(px - r, py - r, r * 2, r * 2);
            }

            // Dragon rendering (Detailed winged fire drake)
            if (ent.type === 'dragon') {
                const s = size;
                const fAng = (Math.hypot(ent.vx, ent.vy) > 0.05) ? Math.atan2(ent.vy, ent.vx) : -Math.PI / 2;
                ctx.save();
                ctx.translate(px, py);
                ctx.rotate(fAng + Math.PI / 2);

                const wingFlap = Math.sin(this.animTime * 8) * 5;

                // Sweeping draconic wings
                ctx.fillStyle = '#7f1d1d';
                // Left Wing
                ctx.beginPath();
                ctx.moveTo(-1, -1);
                ctx.lineTo(-s * 1.8, -s * 0.8 + wingFlap);
                ctx.lineTo(-s * 2.2, s * 0.4 + wingFlap * 0.8);
                ctx.lineTo(-s * 1.2, s * 0.6);
                ctx.lineTo(-1, 2);
                ctx.closePath();
                ctx.fill();
                ctx.strokeStyle = '#dc2626';
                ctx.lineWidth = 1;
                ctx.stroke();

                // Right Wing
                ctx.beginPath();
                ctx.moveTo(1, -1);
                ctx.lineTo(s * 1.8, -s * 0.8 + wingFlap);
                ctx.lineTo(s * 2.2, s * 0.4 + wingFlap * 0.8);
                ctx.lineTo(s * 1.2, s * 0.6);
                ctx.lineTo(1, 2);
                ctx.closePath();
                ctx.fill();
                ctx.strokeStyle = '#dc2626';
                ctx.lineWidth = 1;
                ctx.stroke();

                // Spined Tail
                const tailWag = Math.sin(this.animTime * 5) * 3;
                ctx.strokeStyle = '#991b1b';
                ctx.lineWidth = 2.2;
                ctx.beginPath();
                ctx.moveTo(0, s * 0.6);
                ctx.quadraticCurveTo(tailWag * 0.5, s * 1.3, tailWag, s * 2.0);
                ctx.stroke();
                // Tail spade
                ctx.fillStyle = '#ef4444';
                ctx.beginPath();
                ctx.moveTo(tailWag, s * 2.0);
                ctx.lineTo(tailWag - 2, s * 2.3);
                ctx.lineTo(tailWag + 2, s * 2.3);
                ctx.closePath();
                ctx.fill();

                // Scaled Torso (Stepped pixel torso)
                ctx.fillStyle = '#b91c1c';
                ctx.fillRect(-s * 0.5, -s * 0.7, s, s * 1.4);
                ctx.fillRect(-s * 0.6, -s * 0.4, s * 1.2, s * 0.8);

                // Ventral chest scales (golden/amber underside)
                ctx.fillStyle = '#f59e0b';
                ctx.fillRect(-1.5, -s * 0.5, 3, s * 0.9);

                // Horned Dragon Head
                ctx.fillStyle = '#991b1b';
                ctx.beginPath();
                ctx.moveTo(-2.5, -s * 0.6);
                ctx.lineTo(0, -s * 1.4);
                ctx.lineTo(2.5, -s * 0.6);
                ctx.closePath();
                ctx.fill();

                // Sharp Obsidian Horns
                ctx.fillStyle = '#1e1b4b';
                ctx.beginPath();
                ctx.moveTo(-2, -s * 0.8);
                ctx.lineTo(-4.5, -s * 1.5);
                ctx.lineTo(-1, -s * 1.0);
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(2, -s * 0.8);
                ctx.lineTo(4.5, -s * 1.5);
                ctx.lineTo(1, -s * 1.0);
                ctx.fill();

                // Glowing Reptilian Eyes
                ctx.fillStyle = '#fef08a';
                ctx.fillRect(-1.8, -s * 1.0, 1.2, 1.2);
                ctx.fillRect(0.6, -s * 1.0, 1.2, 1.2);

                // Fiery snarl particles if breathing fire or attacking
                if (ent.attackCooldown > 15 || ent.isControlled) {
                    ctx.fillStyle = '#f97316';
                    ctx.fillRect(-1, -s * 1.5, 2, 2.5);
                }

                ctx.restore();
            } 
            // Crabzilla rendering
            else if (ent.type === 'crabzilla') {
                const s = size * 0.6;
                // Crab Legs
                ctx.strokeStyle = '#c2410c';
                ctx.lineWidth = 2;
                for (let leg = -3; leg <= 3; leg += 2) {
                    const legWave = Math.sin(this.animTime * 4 + leg) * 2;
                    // Left leg
                    ctx.beginPath();
                    ctx.moveTo(px - s, py + leg * 2);
                    ctx.lineTo(px - s - 6, py + leg * 2 + legWave);
                    ctx.stroke();
                    // Right leg
                    ctx.beginPath();
                    ctx.moveTo(px + s, py + leg * 2);
                    ctx.lineTo(px + s + 6, py + leg * 2 + legWave);
                    ctx.stroke();
                }

                // Main Shell / Carapace (Stepped pixel carapace)
                ctx.fillStyle = '#ea580c';
                ctx.fillRect(px - s * 1.2, py - s * 0.7, s * 2.4, s * 1.4);
                ctx.fillRect(px - s * 0.9, py - s * 0.9, s * 1.8, s * 1.8);
                ctx.strokeStyle = '#9a3412';
                ctx.lineWidth = 1.5;
                ctx.strokeRect(px - s * 1.2, py - s * 0.7, s * 2.4, s * 1.4);

                // Huge Pincers / Claws (Pixel block pincers)
                const clawSnap = Math.abs(Math.sin(this.animTime * 3)) * 3;
                // Left Pincer
                ctx.fillStyle = '#c2410c';
                ctx.fillRect(px - s * 1.7, py - s * 0.9, s * 0.8, s * 0.8);
                ctx.fillRect(px - s * 1.9, py - s * 1.1 - clawSnap, 3, 5);
                // Right Pincer
                ctx.fillRect(px + s * 0.9, py - s * 0.9, s * 0.8, s * 0.8);
                ctx.fillRect(px + s * 1.6, py - s * 1.1 - clawSnap, 3, 5);

                // Twin Glowing Laser Eye Stalks
                ctx.fillStyle = '#22c55e';
                ctx.fillRect(px - 4, py - s * 0.9, 2.5, 3);
                ctx.fillRect(px + 2, py - s * 0.9, 2.5, 3);
            }
            // Kaiju Godzilla rendering
            else if (ent.type === 'kaiju') {
                const s = size * 0.7;
                // Stepped pixel reptilian body
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(px - s * 0.8, py - s * 1.1, s * 1.6, s * 2.2);
                ctx.fillRect(px - s * 0.95, py - s * 0.7, s * 1.9, s * 1.4);

                // Glowing Atomic Spines
                const pulse = Math.sin(this.animTime * 5) > 0 ? '#38bdf8' : '#0284c7';
                ctx.fillStyle = pulse;
                for (let spi = -s; spi <= s; spi += 3) {
                    ctx.beginPath();
                    ctx.moveTo(px - 1.5, py + spi);
                    ctx.lineTo(px, py + spi - 3);
                    ctx.lineTo(px + 1.5, py + spi);
                    ctx.fill();
                }

                // Head & Snout
                ctx.fillStyle = '#1e293b';
                ctx.fillRect(px - s * 0.5, py - s * 1.3, s, s * 0.6);
                ctx.fillStyle = '#38bdf8';
                ctx.fillRect(px - 2, py - s * 1.2, 1.5, 1.5);
                ctx.fillRect(px + 1, py - s * 1.2, 1.5, 1.5);
            }
            // Phoenix rendering
            else if (ent.type === 'phoenix') {
                const s = size;
                const wingFlap = Math.sin(this.animTime * 6) * 4;
                // Fiery Wings
                ctx.fillStyle = '#f59e0b';
                ctx.beginPath();
                ctx.moveTo(px, py - 2);
                ctx.lineTo(px - s * 1.2, py + wingFlap);
                ctx.lineTo(px + s * 1.2, py + wingFlap);
                ctx.closePath();
                ctx.fill();
                // Core
                ctx.fillStyle = '#ef4444';
                ctx.fillRect(px - 2, py - 3, 4, 6);
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(px - 1, py - 2, 2, 2);
            }
            // Frost Titan rendering
            else if (ent.type === 'frost_titan') {
                const s = size * 0.8;
                // Icy crystalline body
                ctx.fillStyle = '#0284c7';
                ctx.fillRect(px - s * 0.7, py - s * 0.9, s * 1.4, s * 1.8);
                // Shoulder ice spikes
                ctx.fillStyle = '#a5f3fc';
                ctx.beginPath();
                ctx.moveTo(px - s * 0.7, py - s * 0.5);
                ctx.lineTo(px - s * 1.2, py - s * 1.1);
                ctx.lineTo(px - s * 0.3, py - s * 0.8);
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(px + s * 0.7, py - s * 0.5);
                ctx.lineTo(px + s * 1.2, py - s * 1.1);
                ctx.lineTo(px + s * 0.3, py - s * 0.8);
                ctx.fill();
                // Glowing eyes
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(px - 2, py - s * 0.6, 1.5, 1.5);
                ctx.fillRect(px + 1, py - s * 0.6, 1.5, 1.5);
            }
            // Galaxy Guardian rendering
            else if (ent.type === 'galaxy_guardian') {
                const s = size * 0.7;
                // Orbiting planetary cosmic pixel rings
                ctx.strokeStyle = '#c084fc';
                ctx.lineWidth = 1.5;
                ctx.strokeRect(px - s * 1.3, py - s * 0.45, s * 2.6, s * 0.9);

                ctx.strokeStyle = '#38bdf8';
                ctx.lineWidth = 1.2;
                ctx.strokeRect(px - s * 0.9, py - s * 0.65, s * 1.8, s * 1.3);

                // Orbiting celestial stardust satellites
                for (let k = 0; k < 3; k++) {
                    const ang = this.animTime * 2.5 + k * (Math.PI * 2 / 3);
                    const ox = px + Math.cos(ang) * s * 1.4;
                    const oy = py + Math.sin(ang) * s * 0.55;
                    ctx.fillStyle = '#facc15';
                    ctx.fillRect(ox - 1, oy - 1, 2.5, 2.5);
                }

                // Celestial Core (Stepped pixel celestial core)
                ctx.fillStyle = '#9333ea';
                ctx.fillRect(px - s * 0.7, py - s * 0.4, s * 1.4, s * 0.8);
                ctx.fillRect(px - s * 0.4, py - s * 0.7, s * 0.8, s * 1.4);

                ctx.fillStyle = '#f0abfc';
                ctx.fillRect(px - s * 0.4, py - s * 0.25, s * 0.8, s * 0.5);
                ctx.fillRect(px - s * 0.25, py - s * 0.4, s * 0.5, s * 0.8);

                ctx.fillStyle = '#ffffff';
                ctx.fillRect(px - 1.5, py - 1.5, 3, 3);

                // Crown of stellar rays
                ctx.fillStyle = '#38bdf8';
                for (let ray = -2; ray <= 2; ray++) {
                    ctx.fillRect(px + ray * 3 - 0.5, py - s * 0.8 - Math.abs(ray) * 1.5 - 2, 1.5, 3);
                }

                // Twin starlight eyes
                ctx.fillStyle = '#38bdf8';
                ctx.fillRect(px - 2.5, py - 1, 2, 2);
                ctx.fillRect(px + 1, py - 1, 2, 2);
            }
            // Battle Tank rendering
            else if (ent.type === 'tank') {
                const s = size;
                // Tracks / Treads
                ctx.fillStyle = '#1e293b';
                ctx.fillRect(px - s, py - s * 0.75, s * 2, s * 0.35);
                ctx.fillRect(px - s, py + s * 0.4, s * 2, s * 0.35);
                ctx.fillStyle = '#0f172a';
                for (let tx = -s + 1; tx < s; tx += 2.5) {
                    ctx.fillRect(px + tx, py - s * 0.75, 1, s * 0.35);
                    ctx.fillRect(px + tx, py + s * 0.4, 1, s * 0.35);
                }
                // Armored Chassis
                ctx.fillStyle = '#3f4f38';
                ctx.fillRect(px - s * 0.8, py - s * 0.45, s * 1.6, s * 0.9);
                // Turret (Pixel block turret)
                ctx.fillStyle = '#2d3b27';
                ctx.fillRect(px - s * 0.4, py - s * 0.4, s * 0.8, s * 0.8);
                // Cannon Barrel
                const fAng = (Math.hypot(ent.vx, ent.vy) > 0.05) ? Math.atan2(ent.vy, ent.vx) : 0;
                ctx.strokeStyle = '#1a2217';
                ctx.lineWidth = 2.2;
                ctx.beginPath();
                ctx.moveTo(px, py);
                ctx.lineTo(px + Math.cos(fAng) * s * 1.4, py + Math.sin(fAng) * s * 1.4);
                ctx.stroke();
                // Hatch
                ctx.fillStyle = '#111827';
                ctx.fillRect(px - 1, py - 1, 2, 2);
            }
            // Battleship / Warship rendering
            else if (ent.type === 'warship') {
                const s = size;
                const fAng = (Math.hypot(ent.vx, ent.vy) > 0.05) ? Math.atan2(ent.vy, ent.vx) : 0;
                ctx.save();
                ctx.translate(px, py);
                ctx.rotate(fAng);
                // Naval Hull
                ctx.fillStyle = '#334155';
                ctx.beginPath();
                ctx.moveTo(s * 1.3, 0);
                ctx.lineTo(s * 0.4, -s * 0.45);
                ctx.lineTo(-s * 1.1, -s * 0.4);
                ctx.lineTo(-s * 1.1, s * 0.4);
                ctx.lineTo(s * 0.4, s * 0.45);
                ctx.closePath();
                ctx.fill();
                ctx.strokeStyle = '#1e293b';
                ctx.lineWidth = 1;
                ctx.stroke();
                // Wake foam
                ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
                ctx.fillRect(-s * 1.3, -s * 0.25, s * 0.3, s * 0.5);
                // Deck superstructure
                ctx.fillStyle = '#64748b';
                ctx.fillRect(-s * 0.3, -s * 0.2, s * 0.7, s * 0.4);
                // Dual gun turrets (Pixel block turrets)
                ctx.fillStyle = '#475569';
                ctx.fillRect(s * 0.45, -s * 0.2, s * 0.35, s * 0.4);
                ctx.fillRect(s * 0.6, -1, s * 0.5, 1);
                ctx.fillRect(s * 0.6, 0.5, s * 0.5, 1);
                ctx.fillRect(-s * 0.8, -s * 0.2, s * 0.35, s * 0.4);
                ctx.fillRect(-s * 1.1, -0.7, s * 0.5, 1.4);
                ctx.restore();
            }
            // Attack Helicopter rendering
            else if (ent.type === 'helicopter') {
                const s = size;
                const fAng = (Math.hypot(ent.vx, ent.vy) > 0.05) ? Math.atan2(ent.vy, ent.vx) : 0;
                ctx.save();
                ctx.translate(px, py);
                ctx.rotate(fAng);
                // Landing skids
                ctx.strokeStyle = '#374151';
                ctx.lineWidth = 1;
                ctx.beginPath(); ctx.moveTo(-s * 0.6, -s * 0.5); ctx.lineTo(s * 0.6, -s * 0.5); ctx.stroke();
                ctx.beginPath(); ctx.moveTo(-s * 0.6, s * 0.5); ctx.lineTo(s * 0.6, s * 0.5); ctx.stroke();
                // Fuselage (Stepped pixel cabin)
                ctx.fillStyle = '#15803d';
                ctx.fillRect(-s * 0.6, -s * 0.35, s * 1.2, s * 0.7);
                ctx.fillRect(-s * 0.7, -s * 0.2, s * 1.4, s * 0.4);
                // Cockpit Glass
                ctx.fillStyle = '#38bdf8';
                ctx.fillRect(s * 0.2, -s * 0.2, s * 0.35, s * 0.4);
                // Tail boom & Tail rotor
                ctx.strokeStyle = '#166534'; ctx.lineWidth = 2;
                ctx.beginPath(); ctx.moveTo(-s * 0.6, 0); ctx.lineTo(-s * 1.4, 0); ctx.stroke();
                ctx.fillStyle = '#1e293b';
                ctx.fillRect(-s * 1.45, -s * 0.3, 1.5, s * 0.6);
                // Spinning Main Rotor
                const bladeAng = this.animTime * 28;
                ctx.strokeStyle = 'rgba(240, 240, 240, 0.85)'; ctx.lineWidth = 1.8;
                ctx.beginPath();
                ctx.moveTo(Math.cos(bladeAng) * s * 1.3, Math.sin(bladeAng) * s * 1.3);
                ctx.lineTo(-Math.cos(bladeAng) * s * 1.3, -Math.sin(bladeAng) * s * 1.3);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(Math.cos(bladeAng + Math.PI/2) * s * 1.3, Math.sin(bladeAng + Math.PI/2) * s * 1.3);
                ctx.lineTo(-Math.cos(bladeAng + Math.PI/2) * s * 1.3, -Math.sin(bladeAng + Math.PI/2) * s * 1.3);
                ctx.stroke();
                // Rotor mast
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(-1.5, -1.5, 3, 3);
                ctx.restore();
            }
            // Cosmic Starfighter rendering
            else if (ent.type === 'starfighter') {
                const s = size;
                const fAng = (Math.hypot(ent.vx, ent.vy) > 0.05) ? Math.atan2(ent.vy, ent.vx) : 0;
                ctx.save();
                ctx.translate(px, py);
                ctx.rotate(fAng);
                // Plasma Thruster Flame
                const thrustLen = 4 + Math.random() * 4;
                ctx.fillStyle = '#00e5ff';
                ctx.beginPath(); ctx.moveTo(-s * 0.8, -2); ctx.lineTo(-s * 0.8 - thrustLen, 0); ctx.lineTo(-s * 0.8, 2); ctx.fill();
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(-s * 0.8 - thrustLen * 0.5, -0.8, thrustLen * 0.5, 1.6);
                // Sleek Delta Wing
                ctx.fillStyle = '#0284c7';
                ctx.beginPath();
                ctx.moveTo(s * 1.2, 0);
                ctx.lineTo(-s * 0.8, -s * 0.9);
                ctx.lineTo(-s * 0.5, 0);
                ctx.lineTo(-s * 0.8, s * 0.9);
                ctx.closePath();
                ctx.fill();
                ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 1; ctx.stroke();
                // Cockpit Canopy
                ctx.fillStyle = '#e0f2fe';
                ctx.fillRect(0, -1, s * 0.5, 2);
                ctx.restore();
            }
            // Kraken rendering
            else if (ent.type === 'kraken') {
                const s = size * 0.7;
                // Mantle (Stepped pixel dome)
                ctx.fillStyle = '#0d9488';
                ctx.fillRect(px - s * 0.6, py - 2 - s * 0.9, s * 1.2, s * 1.8);
                ctx.fillRect(px - s * 0.8, py - 2 - s * 0.5, s * 1.6, s * 1.0);
                // Tentacles
                ctx.strokeStyle = '#14b8a6'; ctx.lineWidth = 1.8;
                for (let t = -3; t <= 3; t += 2) {
                    const wave = Math.sin(this.animTime * 4 + t) * 3;
                    ctx.beginPath();
                    ctx.moveTo(px + t * 2, py + 2);
                    ctx.quadraticCurveTo(px + t * 3 + wave, py + s * 0.8, px + t * 4 + wave * 1.5, py + s * 1.3);
                    ctx.stroke();
                }
                // Giant Eye
                ctx.fillStyle = '#facc15'; ctx.fillRect(px - 2, py - 3, 4, 3);
                ctx.fillStyle = '#000000'; ctx.fillRect(px - 0.5, py - 2, 1, 2);
            }
            // Hydra rendering
            else if (ent.type === 'hydra') {
                const s = size * 0.7;
                // Main Serpent Body (Stepped pixel coil)
                ctx.fillStyle = '#15803d';
                ctx.fillRect(px - s * 0.8, py + 2 - s * 0.4, s * 1.6, s * 0.8);
                ctx.fillRect(px - s * 0.5, py + 2 - s * 0.6, s * 1.0, s * 1.2);
                // 3 Serpent Heads
                for (let h = -1; h <= 1; h++) {
                    const hWave = Math.sin(this.animTime * 3 + h * 2) * 2.5;
                    const hx = px + h * 5 + hWave;
                    const hy = py - s * 0.9 + Math.abs(h) * 2;
                    // Neck
                    ctx.strokeStyle = '#16a34a'; ctx.lineWidth = 1.8;
                    ctx.beginPath(); ctx.moveTo(px + h * 3, py); ctx.lineTo(hx, hy); ctx.stroke();
                    // Head
                    ctx.fillStyle = '#22c55e'; ctx.fillRect(hx - 2, hy - 2, 4, 3);
                    ctx.fillStyle = '#ef4444'; ctx.fillRect(hx - 1, hy - 1, 1, 1);
                }
            }
            // Steampunk War Mech rendering
            else if (ent.type === 'mech') {
                const s = size * 0.9;
                ctx.save();
                ctx.translate(px, py);
                const legSwing = Math.sin(this.animTime * 6) * 2;
                ctx.fillStyle = '#475569';
                ctx.fillRect(-s * 0.7, s * 0.3 + legSwing, 2, s * 0.7);
                ctx.fillRect(s * 0.4, s * 0.3 - legSwing, 2, s * 0.7);
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(-s * 0.8, s - 1 + legSwing, 3, 1.5);
                ctx.fillRect(s * 0.3, s - 1 - legSwing, 3, 1.5);
                ctx.fillStyle = '#78716c';
                ctx.fillRect(-s * 0.8, -s * 0.7, s * 1.6, s * 1.1);
                ctx.fillStyle = '#d97706';
                ctx.fillRect(-s * 0.7, -s * 0.6, s * 1.4, 2);
                ctx.fillStyle = '#22c55e';
                ctx.fillRect(-1.5, -s * 0.3, 3, 2);
                ctx.fillStyle = '#334155';
                ctx.fillRect(-s * 0.8, -s * 1.1, 2, s * 0.4);
                ctx.fillStyle = '#1e293b';
                ctx.fillRect(s * 0.6, -s * 0.2, s * 0.9, 2.5);
                ctx.restore();
            }
            // Arcane Wizard rendering
            else if (ent.type === 'wizard') {
                const s = size * 0.8;
                ctx.save();
                ctx.translate(px, py);
                ctx.fillStyle = '#4c1d95';
                ctx.beginPath();
                ctx.moveTo(0, -s * 0.6);
                ctx.lineTo(-s * 0.8, s);
                ctx.lineTo(s * 0.8, s);
                ctx.closePath();
                ctx.fill();
                ctx.fillStyle = '#facc15';
                ctx.fillRect(-s * 0.8, s - 1, s * 1.6, 1);
                ctx.fillStyle = '#fde047';
                ctx.fillRect(-1.5, -s * 0.6, 3, 2);
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(-1.5, -s * 0.3, 3, 3);
                ctx.fillStyle = '#6d28d9';
                ctx.beginPath();
                ctx.moveTo(-s * 0.9, -s * 0.6);
                ctx.lineTo(0, -s * 1.6);
                ctx.lineTo(s * 0.9, -s * 0.6);
                ctx.closePath();
                ctx.fill();
                ctx.fillStyle = '#facc15';
                ctx.fillRect(-1, -s * 0.7, 2, 1.2);
                ctx.fillStyle = '#78350f';
                ctx.fillRect(s * 0.6, -s * 1.2, 1.2, s * 2.2);
                ctx.fillStyle = '#38bdf8';
                ctx.fillRect(s * 0.6 - 1, -s * 1.3 - 2, 3, 3);
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(s * 0.6, -s * 1.3 - 1, 1, 1);
                ctx.restore();
            }
            // Colossus Mech Walker Titan
            else if (ent.type === 'colossus_mech') {
                const s = size * 1.1;
                ctx.save();
                ctx.translate(px, py);
                const legSwing = Math.sin(this.animTime * 5) * 3;
                ctx.fillStyle = '#1e293b';
                ctx.fillRect(-s * 0.8, s * 0.2 + legSwing, 3, s * 0.9);
                ctx.fillRect(s * 0.5, s * 0.2 - legSwing, 3, s * 0.9);
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(-s * 0.9, s * 1.0 + legSwing, 5, 2.5);
                ctx.fillRect(s * 0.4, s * 1.0 - legSwing, 5, 2.5);
                ctx.fillStyle = '#475569';
                ctx.fillRect(-s * 0.9, -s * 0.8, s * 1.8, s * 1.2);
                ctx.fillStyle = '#e11d48';
                ctx.fillRect(-s * 0.8, -s * 0.7, s * 1.6, 2);
                ctx.fillStyle = '#38bdf8';
                ctx.fillRect(-2, -s * 0.3, 4, 2);
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(-s * 1.1, -s * 1.2, 4, s * 0.6);
                ctx.fillRect(s * 0.8, -s * 1.2, 4, s * 0.6);
                ctx.fillStyle = '#f59e0b';
                ctx.fillRect(-s * 1.0, -s * 1.1, 2, 2);
                ctx.fillRect(s * 0.9, -s * 1.1, 2, 2);
                ctx.fillStyle = '#334155';
                ctx.fillRect(-s * 1.2, -s * 0.2, 3, s * 0.8);
                ctx.fillRect(s * 0.9, -s * 0.2, s * 0.8, 3.5);
                ctx.restore();
            }
            // Seraph Angel Celestial
            else if (ent.type === 'seraph_angel') {
                const s = size * 0.8;
                ctx.save();
                ctx.translate(px, py);
                const wingFlap = Math.sin(this.animTime * 7) * 3;
                ctx.fillStyle = '#fef08a';
                for (let w = -1; w <= 1; w += 2) {
                    ctx.fillRect(w * 2, -s * 1.1 + wingFlap * w, w * s * 1.4, 2);
                    ctx.fillRect(w * 4, -s * 1.3 + wingFlap * w, w * s * 1.0, 2);
                    ctx.fillRect(w * 2, -s * 0.5, w * s * 1.6, 2.2);
                    ctx.fillRect(w * 5, -s * 0.6, w * s * 0.9, 1.8);
                    ctx.fillRect(w * 2, s * 0.2 - wingFlap * w, w * s * 1.2, 2);
                }
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(-s * 0.6, -s * 0.4, s * 1.2, s * 1.3);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(-s * 0.4, -s * 0.3, s * 0.8, 2);
                ctx.fillStyle = '#fed7aa';
                ctx.fillRect(-2, -s * 0.9, 4, 3);
                ctx.strokeStyle = '#facc15';
                ctx.lineWidth = 1.2;
                ctx.strokeRect(-3, -s * 1.4, 6, 2);
                ctx.fillStyle = '#38bdf8';
                ctx.fillRect(-1.5, -s * 0.8, 1, 1);
                ctx.fillRect(0.5, -s * 0.8, 1, 1);
                ctx.restore();
            }
            // Dune Leviathan Sandworm
            else if (ent.type === 'dune_leviathan') {
                const s = size * 0.8;
                for (let seg = 4; seg >= 0; seg--) {
                    const wave = Math.sin(this.animTime * 4 + seg * 0.8) * 4;
                    const segX = px - seg * 3.5 + wave * 0.4;
                    const segY = py + wave;
                    const segScale = 1 - seg * 0.12;
                    ctx.fillStyle = seg % 2 === 0 ? '#b45309' : '#d97706';
                    ctx.fillRect(segX - s * segScale, segY - s * segScale * 0.7, s * 2 * segScale, s * 1.4 * segScale);
                    ctx.fillStyle = '#78350f';
                    ctx.fillRect(segX - 1, segY - s * segScale * 0.9, 2, 2);
                }
                ctx.fillStyle = '#fef3c7';
                ctx.fillRect(px + s * 0.8, py - 3, 3, 2);
                ctx.fillRect(px + s * 0.8, py + 1, 3, 2);
                ctx.fillStyle = '#ef4444';
                ctx.fillRect(px + s * 0.5, py - 2, 1.5, 1.5);
                ctx.fillRect(px + s * 0.5, py + 0.5, 1.5, 1.5);
            }
            // Vampire Lord
            else if (ent.type === 'vampire_lord') {
                const s = size * 0.8;
                ctx.save();
                ctx.translate(px, py);
                const capeWave = Math.sin(this.animTime * 5) * 2;
                ctx.fillStyle = '#7f1d1d';
                ctx.fillRect(-s * 1.0, -s * 0.4, s * 2.0, s * 1.2 + capeWave);
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(-s * 0.9, -s * 0.3, s * 1.8, s * 1.1 + capeWave);
                ctx.fillStyle = '#1e1b4b';
                ctx.fillRect(-s * 0.5, -s * 0.4, s * 1.0, s * 1.0);
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(-1.5, -s * 0.3, 3, 3);
                ctx.fillStyle = '#f1f5f9';
                ctx.fillRect(-2, -s * 0.9, 4, 3.5);
                ctx.fillStyle = '#09090b';
                ctx.fillRect(-2.5, -s * 1.1, 5, 2);
                ctx.fillRect(-0.5, -s * 0.9, 1, 1);
                ctx.fillStyle = '#ef4444';
                ctx.fillRect(-1.5, -s * 0.7, 1, 1);
                ctx.fillRect(0.5, -s * 0.7, 1, 1);
                ctx.fillStyle = '#e2e8f0';
                ctx.fillRect(-0.5, -s * 0.1, 1, 1);
                ctx.restore();
            }
            // Cosmic Void Titan (Secret Apocalypse Boss)
            else if (ent.type === 'void_titan') {
                const s = size * 0.9;
                ctx.save();
                ctx.translate(px, py);
                ctx.fillStyle = '#030712';
                ctx.fillRect(-s * 0.9, -s * 0.9, s * 1.8, s * 1.8);
                ctx.fillStyle = '#581c87';
                ctx.fillRect(-s * 0.7, -s * 0.7, s * 1.4, s * 1.4);
                const rot = this.animTime * 4;
                ctx.fillStyle = '#c084fc';
                for (let spk = 0; spk < 4; spk++) {
                    const ang = rot + spk * (Math.PI / 2);
                    ctx.fillRect(Math.cos(ang) * s * 1.2 - 1, Math.sin(ang) * s * 1.2 - 1, 2.5, 2.5);
                }
                ctx.fillStyle = '#a855f7';
                ctx.fillRect(-s * 1.0, -s * 1.4, 3, s * 0.7);
                ctx.fillRect(s * 0.7, -s * 1.4, 3, s * 0.7);
                ctx.fillRect(-s * 1.2, -s * 1.6, 2, s * 0.4);
                ctx.fillRect(s * 1.0, -s * 1.6, 2, s * 0.4);
                ctx.fillStyle = '#f472b6';
                ctx.fillRect(-3, -s * 0.4, 2, 2);
                ctx.fillRect(1, -s * 0.4, 2, 2);
                ctx.fillStyle = '#7e22ce';
                ctx.fillRect(-s * 1.4, -s * 0.2, s * 0.6, 4);
                ctx.fillRect(s * 0.8, -s * 0.2, s * 0.6, 4);
                ctx.restore();
            }
            // Evermean Treant (Walking living sentient tree)
            else if (ent.type === 'evermean') {
                const s = size * 0.9;
                ctx.save();
                ctx.translate(px, py);

                // Headslam attack animation tilt & plunge
                const isHeadslamming = ent.abilityCooldown > 4;
                if (isHeadslamming) {
                    ctx.rotate(Math.sin(this.animTime * 14) * 0.3);
                    ctx.translate(0, 3);
                }

                const legStep = Math.sin(this.animTime * 5) * 2.5;

                // Root Legs / Moving Feet
                ctx.fillStyle = '#451a03';
                // Pointy Sharp Root Legs (Tapered wooden needle stilts)
                ctx.fillStyle = '#451a03';
                // Left sharp pointy root leg
                ctx.beginPath();
                ctx.moveTo(-s * 0.7, s * 0.3);
                ctx.lineTo(-s * 1.1, s * 0.8 + legStep);
                ctx.lineTo(-s * 0.9, s * 1.4 + legStep); // needle sharp point
                ctx.lineTo(-s * 0.4, s * 0.5);
                ctx.closePath();
                ctx.fill();
                // Right sharp pointy root leg
                ctx.beginPath();
                ctx.moveTo(s * 0.7, s * 0.3);
                ctx.lineTo(s * 1.1, s * 0.8 - legStep);
                ctx.lineTo(s * 0.9, s * 1.4 - legStep); // needle sharp point
                ctx.lineTo(s * 0.4, s * 0.5);
                ctx.closePath();
                ctx.fill();
                // Center sharp pointed stabilizing root
                ctx.fillStyle = '#270e02';
                ctx.beginPath();
                ctx.moveTo(-1.2, s * 0.35);
                ctx.lineTo(0, s * 1.25);
                ctx.lineTo(1.2, s * 0.35);
                ctx.closePath();
                ctx.fill();

                // Gnarled Wooden Trunk
                ctx.fillStyle = '#451a03';
                ctx.fillRect(-s * 0.6, -s * 0.6, s * 1.2, s * 1.2);
                ctx.fillStyle = '#78350f';
                ctx.fillRect(-s * 0.5, -s * 0.55, s * 1.0, s * 1.1);
                ctx.fillStyle = '#92400e';
                ctx.fillRect(-s * 0.4, -s * 0.4, 2, s * 0.8);
                ctx.fillRect(s * 0.2, -s * 0.3, 2, s * 0.7);

                // Eyeless Menacing Bark Fissure (Hollow dark wooden void - NO EYES)
                ctx.fillStyle = '#0a0502';
                ctx.fillRect(-2.5, -s * 0.35, 5, 3.8);
                ctx.fillRect(-1.5, -s * 0.45, 3, 1.2);
                ctx.fillRect(-1, -s * 0.1, 2, 2.5);
                // Dark knotted wood fissures
                ctx.fillStyle = '#1c0a00';
                ctx.fillRect(-3.2, -s * 0.25, 1, 2);
                ctx.fillRect(2.2, -s * 0.25, 1, 2);

                // Leafy Foliage Canopy (Crown of Living Oak)
                ctx.fillStyle = '#14532d';
                ctx.fillRect(-s * 1.2, -s * 1.2, s * 2.4, s * 0.8);
                ctx.fillRect(-s * 0.9, -s * 1.5, s * 1.8, s * 0.6);
                ctx.fillRect(-s * 0.6, -s * 1.7, s * 1.2, s * 0.4);

                ctx.fillStyle = '#15803d';
                ctx.fillRect(-s * 1.0, -s * 1.1, s * 2.0, s * 0.6);
                ctx.fillRect(-s * 0.7, -s * 1.4, s * 1.4, s * 0.5);

                ctx.fillStyle = '#22c55e';
                ctx.fillRect(-s * 0.6, -s * 1.0, 3, 3);
                ctx.fillRect(s * 0.2, -s * 1.2, 3, 3);
                ctx.fillRect(-2, -s * 1.5, 3, 2.5);

                // Headslam dust & wood debris
                if (isHeadslamming) {
                    ctx.fillStyle = '#f59e0b';
                    ctx.fillRect(-s * 0.8, s * 0.9, 3, 2);
                    ctx.fillRect(s * 0.5, s * 0.9, 3, 2);
                    ctx.fillStyle = '#86efac';
                    ctx.fillRect(-2, s * 0.8, 2, 2);
                }

                ctx.restore();
            }
            // Human race rendering
            else if (ent.type === 'human') {
                const legBob = Math.sin(this.animTime * 8 + ent.id) * 0.8;
                let civColor = ent.color;
                if (ent.kingdomId && kingdoms.has(ent.kingdomId)) {
                    civColor = kingdoms.get(ent.kingdomId).color;
                }
                ctx.fillStyle = '#1e293b';
                ctx.fillRect(px - 1.5, py + 1 + legBob, 1.2, 2.5);
                ctx.fillRect(px + 0.5, py + 1 - legBob, 1.2, 2.5);
                ctx.fillStyle = civColor;
                ctx.fillRect(px - 2, py - 2, 4, 3.5);
                ctx.fillStyle = '#78350f';
                ctx.fillRect(px - 2, py + 0.5, 4, 0.8);
                ctx.fillStyle = '#fcd34d';
                ctx.fillRect(px - 1.5, py - 4.5, 3, 2.5);
                ctx.fillStyle = '#78350f';
                ctx.fillRect(px - 1.5, py - 5.5, 3, 1.2);
            }
            // Elf race rendering
            else if (ent.type === 'elf') {
                let civColor = ent.color;
                if (ent.kingdomId && kingdoms.has(ent.kingdomId)) {
                    civColor = kingdoms.get(ent.kingdomId).color;
                }
                ctx.fillStyle = '#065f46';
                ctx.fillRect(px - 1.2, py + 1, 1, 3);
                ctx.fillRect(px + 0.4, py + 1, 1, 3);
                ctx.fillStyle = civColor;
                ctx.fillRect(px - 1.8, py - 2.5, 3.6, 4);
                ctx.fillStyle = '#fef3c7';
                ctx.fillRect(px - 1.5, py - 5, 3, 2.5);
                ctx.fillStyle = '#fef08a';
                ctx.fillRect(px - 1.8, py - 6, 3.6, 1.5);
                ctx.fillRect(px - 2.2, py - 5, 0.8, 3.5);
                ctx.fillRect(px + 1.4, py - 5, 0.8, 3.5);
                ctx.fillStyle = '#fde68a';
                ctx.fillRect(px - 2.5, py - 4.5, 1, 1);
                ctx.fillRect(px + 1.5, py - 4.5, 1, 1);
            }
            // Orc race rendering
            else if (ent.type === 'orc') {
                let civColor = ent.color;
                if (ent.kingdomId && kingdoms.has(ent.kingdomId)) {
                    civColor = kingdoms.get(ent.kingdomId).color;
                }
                ctx.fillStyle = '#292524';
                ctx.fillRect(px - 2.2, py + 1.5, 1.8, 2.5);
                ctx.fillRect(px + 0.4, py + 1.5, 1.8, 2.5);
                ctx.fillStyle = civColor;
                ctx.fillRect(px - 2.5, py - 2.5, 5, 4);
                ctx.fillStyle = '#44403c';
                ctx.fillRect(px - 3.2, py - 3, 1.5, 1.8);
                ctx.fillRect(px + 1.7, py - 3, 1.5, 1.8);
                ctx.fillStyle = '#4d7c0f';
                ctx.fillRect(px - 2, py - 5.5, 4, 3);
                ctx.fillStyle = '#ef4444';
                ctx.fillRect(px - 1.2, py - 4.5, 1, 1);
                ctx.fillRect(px + 0.4, py - 4.5, 1, 1);
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(px - 1.8, py - 3.2, 0.9, 1.5);
                ctx.fillRect(px + 0.9, py - 3.2, 0.9, 1.5);
            }
            // Dwarf race rendering
            else if (ent.type === 'dwarf') {
                let civColor = ent.color;
                if (ent.kingdomId && kingdoms.has(ent.kingdomId)) {
                    civColor = kingdoms.get(ent.kingdomId).color;
                }
                ctx.fillStyle = '#1c1917';
                ctx.fillRect(px - 2.5, py + 1, 2, 2);
                ctx.fillRect(px + 0.5, py + 1, 2, 2);
                ctx.fillStyle = civColor;
                ctx.fillRect(px - 3, py - 2, 6, 3.5);
                ctx.fillStyle = '#64748b';
                ctx.fillRect(px - 2.8, py - 5.5, 5.6, 2.2);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(px - 0.5, py - 5.5, 1, 2.2);
                ctx.fillStyle = '#fed7aa';
                ctx.fillRect(px - 2, py - 3.5, 4, 1.5);
                ctx.fillStyle = '#c2410c';
                ctx.fillRect(px - 2.5, py - 2.2, 5, 3.2);
                ctx.fillRect(px - 1.5, py + 1, 3, 1.5);
            }
            // Demon rendering
            else if (ent.type === 'demon') {
                ctx.fillStyle = '#7f1d1d';
                ctx.fillRect(px - 5, py - 3, 3, 2);
                ctx.fillRect(px + 2, py - 3, 3, 2);
                ctx.fillStyle = '#dc2626';
                ctx.fillRect(px - 2, py - 2, 4, 4);
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(px - 2.5, py - 5, 1, 2);
                ctx.fillRect(px + 1.5, py - 5, 1, 2);
                ctx.fillStyle = '#fef08a';
                ctx.fillRect(px - 1, py - 3, 1, 1);
                ctx.fillRect(px + 0.5, py - 3, 1, 1);
            }
            // Skeleton rendering
            else if (ent.type === 'skeleton') {
                ctx.fillStyle = '#f1f5f9';
                ctx.fillRect(px - 1.5, py - 4.5, 3, 2.5);
                ctx.fillRect(px - 1.8, py - 1.8, 3.6, 2.5);
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(px - 1, py - 3.8, 0.8, 0.8);
                ctx.fillRect(px + 0.4, py - 3.8, 0.8, 0.8);
                ctx.fillStyle = '#e2e8f0';
                ctx.fillRect(px - 1.2, py + 1, 0.8, 2.5);
                ctx.fillRect(px + 0.4, py + 1, 0.8, 2.5);
            }
            // Zombie rendering
            else if (ent.type === 'zombie') {
                ctx.fillStyle = '#4ade80';
                ctx.fillRect(px - 1.5, py - 4, 3, 2.5);
                ctx.fillStyle = '#374151';
                ctx.fillRect(px - 2, py - 1.5, 4, 3.5);
                ctx.fillStyle = '#4ade80';
                ctx.fillRect(px + 1.5, py - 1.5, 2.5, 1.2);
            }
            // Sheep / Animal quadrupeds
            else if (ent.type === 'sheep') {
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(px - 2.5, py - 2, 5, 3.5);
                ctx.fillStyle = '#1e293b';
                ctx.fillRect(px + 1.5, py - 2.5, 2, 2);
                ctx.fillRect(px - 2, py + 1.5, 1, 1.5);
                ctx.fillRect(px + 1, py + 1.5, 1, 1.5);
            }
            else if (ent.type === 'wolf') {
                ctx.fillStyle = '#64748b';
                ctx.fillRect(px - 3, py - 1.5, 6, 2.8);
                ctx.fillStyle = '#475569';
                ctx.fillRect(px + 2, py - 2.5, 2.5, 2);
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(px + 3.5, py - 0.8, 1, 1);
            }
            else if (ent.type === 'duck') {
                this.renderDuck(ctx, ent, px, py, size);
            }
            else if (ent.type === 'crystal_golem') {
                this.renderCrystalGolem(ctx, ent, px, py, size);
            }
            else if (ent.type === 'shadow_assassin') {
                this.renderShadowAssassin(ctx, ent, px, py, size);
            }
            else if (ent.type === 'frog') {
                this.renderFrog(ctx, ent, px, py, size);
            }
            else if (ent.type === 'cyber_ninja') {
                this.renderCyberNinja(ctx, ent, px, py, size);
            }
            else if (ent.type === 'laser_shark') {
                this.renderLaserShark(ctx, ent, px, py, size);
            }
            else if (ent.type === 'frost_wolf') {
                this.renderFrostWolf(ctx, ent, px, py, size);
            }
            else if (ent.type === 'sand_scorpion') {
                this.renderSandScorpion(ctx, ent, px, py, size);
            }
            else if (ent.type === 'necromancer') {
                this.renderNecromancer(ctx, ent, px, py, size);
            }
            else if (ent.type === 'valkyrie') {
                this.renderValkyrie(ctx, ent, px, py, size);
            }
            else if (ent.type === 'gargoyle') {
                this.renderGargoyle(ctx, ent, px, py, size);
            }
            else if (ent.type === 'mecha_rex') {
                this.renderMechaRex(ctx, ent, px, py, size);
            }
            else if (ent.type === 'golden_dragon') {
                this.renderGoldenDragon(ctx, ent, px, py, size);
            }
            else if (ent.type === 'space_worm') {
                this.renderSpaceWorm(ctx, ent, px, py, size);
            }
            else if (ent.type === 'goblin') {
                this.renderGoblin(ctx, ent, px, py, size);
            }
            else if (ent.type === 'pirate_ship') {
                this.renderPirateShip(ctx, ent, px, py, size);
            }
            else if (ent.type === 'trex') {
                this.renderTRex(ctx, ent, px, py, size);
            }
            else if (ent.type === 'triceratops') {
                this.renderTriceratops(ctx, ent, px, py, size);
            }
            else if (ent.type === 'velociraptor') {
                this.renderVelociraptor(ctx, ent, px, py, size);
            }
            else if (ent.type === 'pterodactyl') {
                this.renderPterodactyl(ctx, ent, px, py, size);
            }
            else if (ent.type === 'brachiosaurus') {
                this.renderBrachiosaurus(ctx, ent, px, py, size);
            }
            else if (ent.type === 'frost_dragon') {
                this.renderFrostDragon(ctx, ent, px, py, size);
            }
            else if (ent.type === 'shadow_dragon') {
                this.renderShadowDragon(ctx, ent, px, py, size);
            }
            else if (ent.type === 'storm_dragon') {
                this.renderStormDragon(ctx, ent, px, py, size);
            }
            else if (ent.type === 'dark_matter_colossus') {
                this.renderDarkMatterColossus(ctx, ent, px, py, size);
            }
            else if (ent.type === 'phoenix_knight') {
                this.renderPhoenixKnight(ctx, ent, px, py, size);
            }
            else if (ent.type === 'thunder_bird') {
                this.renderThunderBird(ctx, ent, px, py, size);
            }
            else if (ent.type === 'cyber_dragon') {
                this.renderCyberDragon(ctx, ent, px, py, size);
            }
            else if (ent.type === 'swamp_behemoth') {
                this.renderSwampBehemoth(ctx, ent, px, py, size);
            }
            else if (ent.type === 'mammoth') {
                this.renderMammoth(ctx, ent, px, py, size);
            }
            else if (ent.bodyParts || (ent.customData && ent.customData.bodyParts)) {
                this.renderCustomModularCreature(ctx, ent, px, py, size);
            }
            // Standard / Custom Creature Body Shaded Pixel-Art Renderer
            else {
                let bodyColor = ent.color;
                if (ent.isCiv && ent.kingdomId && kingdoms.has(ent.kingdomId)) {
                    bodyColor = kingdoms.get(ent.kingdomId).color;
                }
                const s = Math.max(2, size);
                const halfS = s * 0.5;
                const isWalking = (Math.abs(ent.vx) > 0.02 || Math.abs(ent.vy) > 0.02);
                const legSwing = isWalking ? Math.sin(this.animTime * 12 + ent.id) * (s * 0.25) : 0;
                const breathe = Math.sin(this.animTime * 3 + ent.id) * (s * 0.06);

                // Dark Outline
                ctx.fillStyle = 'rgba(15, 23, 42, 0.75)';
                ctx.fillRect(Math.floor(px - halfS - 1), Math.floor(py - halfS - 1), Math.ceil(s + 2), Math.ceil(s + 2));

                // Torso & Body Base
                ctx.fillStyle = bodyColor;
                ctx.fillRect(Math.floor(px - halfS), Math.floor(py - halfS + breathe), Math.ceil(s), Math.ceil(s));

                // Multi-Tier Highlight & Shading
                ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
                ctx.fillRect(Math.floor(px - halfS + 1), Math.floor(py - halfS + 1 + breathe), Math.max(1, Math.floor(s * 0.45)), Math.max(1, Math.floor(s * 0.35)));

                ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
                ctx.fillRect(Math.floor(px - halfS), Math.floor(py + halfS * 0.4 + breathe), Math.ceil(s), Math.max(1, Math.ceil(s * 0.35)));

                // Walking Legs
                ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
                ctx.fillRect(Math.floor(px - halfS * 0.7), Math.floor(py + halfS * 0.6 + legSwing), Math.max(1, Math.floor(s * 0.3)), Math.max(1, Math.floor(s * 0.35)));
                ctx.fillRect(Math.floor(px + halfS * 0.4), Math.floor(py + halfS * 0.6 - legSwing), Math.max(1, Math.floor(s * 0.3)), Math.max(1, Math.floor(s * 0.35)));

                // Glowing Eyes
                const eyeCol = (ent.isBoss || (ent.species && ent.species.includes('dragon'))) ? '#facc15' : '#ffffff';
                const pupilCol = '#0f172a';
                const eyeY = Math.floor(py - halfS * 0.3 + breathe);
                const eyeW = Math.max(1, Math.floor(s * 0.22));
                const eyeH = Math.max(1, Math.floor(s * 0.22));
                ctx.fillStyle = eyeCol;
                ctx.fillRect(Math.floor(px - halfS * 0.45), eyeY, eyeW, eyeH);
                ctx.fillRect(Math.floor(px + halfS * 0.25), eyeY, eyeW, eyeH);
                ctx.fillStyle = pupilCol;
                ctx.fillRect(Math.floor(px - halfS * 0.3), eyeY + 0.5, Math.max(1, eyeW * 0.5), Math.max(1, eyeH * 0.5));
                ctx.fillRect(Math.floor(px + halfS * 0.4), eyeY + 0.5, Math.max(1, eyeW * 0.5), Math.max(1, eyeH * 0.5));
            }

            // Crown for King
            if (ent.isKing) {
                ctx.fillStyle = '#facc15';
                ctx.fillRect(px - 1.5, py - size - 2.5, 3, 1.5);
            }

            // Equipped Weapons Rendering
            if (ent.weapon === 'sword') {
                ctx.save();
                ctx.translate(px + (ent.vx < 0 ? -size * 0.7 : size * 0.7), py);
                const slash = ent.attackCooldown > 12 ? Math.sin(this.animTime * 20) * 0.8 : 0.3;
                ctx.rotate(slash * (ent.vx < 0 ? -1 : 1));
                ctx.fillStyle = '#e2e8f0';
                ctx.fillRect(-0.8, -size * 1.2, 1.6, size * 1.2);
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(-0.3, -size * 1.2, 0.6, size * 1.2);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(-2, 0, 4, 1.2);
                ctx.fillStyle = '#78350f';
                ctx.fillRect(-0.6, 1.2, 1.2, 2);
                ctx.restore();
            } else if (ent.weapon === 'bow') {
                ctx.save();
                ctx.translate(px + (ent.vx < 0 ? -size * 0.6 : size * 0.6), py);
                ctx.strokeStyle = '#b45309';
                ctx.lineWidth = 1.2;
                ctx.beginPath();
                ctx.moveTo(0, -size * 0.8);
                ctx.lineTo(size * 0.5, -size * 0.4);
                ctx.lineTo(size * 0.5, size * 0.4);
                ctx.lineTo(0, size * 0.8);
                ctx.stroke();
                ctx.strokeStyle = '#f8fafc';
                ctx.lineWidth = 0.8;
                ctx.beginPath();
                ctx.moveTo(0, -size * 0.8);
                ctx.lineTo(0, size * 0.8);
                ctx.stroke();
                ctx.restore();
            } else if (ent.weapon === 'blaster') {
                ctx.save();
                ctx.translate(px + (ent.vx < 0 ? -size * 0.6 : size * 0.6), py);
                ctx.fillStyle = '#1e293b';
                ctx.fillRect(ent.vx < 0 ? -4 : 0, -1, 4, 2);
                ctx.fillStyle = '#06b6d4';
                ctx.fillRect(ent.vx < 0 ? -5.5 : 4, -0.6, 1.8, 1.2);
                ctx.restore();
            } else if (ent.weapon === 'staff') {
                ctx.save();
                ctx.translate(px + (ent.vx < 0 ? -size * 0.6 : size * 0.6), py);
                ctx.fillStyle = '#78350f';
                ctx.fillRect(-0.6, -size * 1.4, 1.2, size * 1.8);
                ctx.fillStyle = '#c084fc';
                ctx.fillRect(-1.5, -size * 1.5 - 1.5, 3, 3);
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(-0.5, -size * 1.5 - 0.5, 1, 1);
                ctx.restore();
            } else if (ent.weapon === 'void_scythe') {
                ctx.save();
                ctx.translate(px + (ent.vx < 0 ? -size * 0.7 : size * 0.7), py);
                const slash = ent.attackCooldown > 12 ? Math.sin(this.animTime * 20) * 0.8 : 0.3;
                ctx.rotate(slash * (ent.vx < 0 ? -1 : 1));
                ctx.fillStyle = '#1e1b4b';
                ctx.fillRect(-0.8, -size * 1.6, 1.6, size * 2.0);
                ctx.fillStyle = '#9333ea';
                ctx.fillRect(-size * 1.2, -size * 1.6, size * 1.4, 1.8);
                ctx.fillRect(-size * 1.5, -size * 1.4, size * 0.6, 1.8);
                ctx.fillStyle = '#c084fc';
                ctx.fillRect(-size * 1.1, -size * 1.5, size * 1.0, 1.0);
                ctx.restore();
            } else if (ent.weapon === 'laser_cannon') {
                ctx.save();
                ctx.translate(px + (ent.vx < 0 ? -size * 0.7 : size * 0.7), py);
                ctx.fillStyle = '#334155';
                ctx.fillRect(ent.vx < 0 ? -6 : 0, -2, 6, 4);
                ctx.fillStyle = '#06b6d4';
                ctx.fillRect(ent.vx < 0 ? -7 : 5, -1.5, 2, 1.2);
                ctx.fillRect(ent.vx < 0 ? -7 : 5, 0.3, 2, 1.2);
                ctx.fillStyle = '#38bdf8';
                ctx.fillRect(ent.vx < 0 ? -3 : 2, -0.5, 2, 1);
                ctx.restore();
            } else if (ent.weapon === 'galaxy_blade') {
                ctx.save();
                ctx.translate(px + (ent.vx < 0 ? -size * 0.7 : size * 0.7), py);
                const slash = ent.attackCooldown > 12 ? Math.sin(this.animTime * 22) * 0.9 : 0.35;
                ctx.rotate(slash * (ent.vx < 0 ? -1 : 1));
                ctx.fillStyle = '#facc15';
                ctx.fillRect(-2, 0, 4, 1.5);
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(-0.7, 1.5, 1.4, 2.5);
                ctx.fillStyle = '#f472b6';
                ctx.fillRect(-1.0, -size * 1.6, 2.0, size * 1.6);
                ctx.fillStyle = '#67e8f9';
                ctx.fillRect(-0.5, -size * 1.7, 1.0, size * 1.7);
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(-0.3, -size * 1.5, 0.6, size * 1.2);
                ctx.restore();
            } else if (ent.weapon === 'thunder_hammer') {
                ctx.save();
                ctx.translate(px + (ent.vx < 0 ? -size * 0.7 : size * 0.7), py);
                const slam = ent.attackCooldown > 10 ? Math.sin(this.animTime * 20) * 0.8 : 0.2;
                ctx.rotate(slam * (ent.vx < 0 ? -1 : 1));
                ctx.fillStyle = '#78350f';
                ctx.fillRect(-0.7, -size * 0.2, 1.4, size * 1.5);
                ctx.fillStyle = '#64748b';
                ctx.fillRect(-3, -size * 0.7, 6, 3.5);
                ctx.fillStyle = '#38bdf8';
                ctx.fillRect(-1.5, -size * 0.6, 3, 1.5);
                ctx.restore();
            } else if (ent.weapon === 'flamethrower') {
                ctx.save();
                ctx.translate(px + (ent.vx < 0 ? -size * 0.7 : size * 0.7), py);
                ctx.fillStyle = '#b45309';
                ctx.fillRect(ent.vx < 0 ? -5 : 0, -2, 5, 4);
                ctx.fillStyle = '#d97706';
                ctx.fillRect(ent.vx < 0 ? -7 : 5, -1, 3, 2);
                ctx.fillStyle = Math.random() < 0.5 ? '#f97316' : '#facc15';
                ctx.fillRect(ent.vx < 0 ? -9 : 8, -0.6, 2, 1.2);
                ctx.restore();
            } else if (ent.weapon === 'frost_wand') {
                ctx.save();
                ctx.translate(px + (ent.vx < 0 ? -size * 0.7 : size * 0.7), py);
                ctx.fillStyle = '#e0f2fe';
                ctx.fillRect(-0.6, -size * 1.3, 1.2, size * 1.8);
                ctx.fillStyle = '#38bdf8';
                ctx.fillRect(-1.5, -size * 1.5 - 2, 3, 3);
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(-0.5, -size * 1.5 - 1, 1, 1);
                ctx.restore();
            } else if (ent.weapon === 'chaos_mace') {
                ctx.save();
                ctx.translate(px + (ent.vx < 0 ? -size * 0.7 : size * 0.7), py);
                const swing = Math.sin(this.animTime * 12) * 0.5;
                ctx.rotate(swing * (ent.vx < 0 ? -1 : 1));
                ctx.fillStyle = '#334155';
                ctx.fillRect(-0.6, -size * 0.2, 1.2, size * 1.4);
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(-2.5, -size * 0.8, 5, 5);
                ctx.fillStyle = '#ef4444';
                ctx.fillRect(-1.2, -size * 0.7, 2.4, 2.4);
                ctx.restore();
            } else if (ent.weapon === 'shuriken') {
                ctx.save();
                ctx.translate(px + (ent.vx < 0 ? -size * 0.6 : size * 0.6), py);
                ctx.rotate(this.animTime * 15);
                ctx.fillStyle = '#94a3b8';
                ctx.fillRect(-2.5, -0.6, 5, 1.2);
                ctx.fillRect(-0.6, -2.5, 1.2, 5);
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(-0.5, -0.5, 1, 1);
                ctx.restore();
            } else if (ent.weapon === 'plasma_rifle') {
                ctx.save();
                ctx.translate(px + (ent.vx < 0 ? -size * 0.7 : size * 0.7), py);
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(ent.vx < 0 ? -6 : 0, -2, 6, 3.5);
                ctx.fillStyle = '#06b6d4';
                ctx.fillRect(ent.vx < 0 ? -8 : 6, -1.5, 2.5, 1.5);
                ctx.fillStyle = '#38bdf8';
                ctx.fillRect(ent.vx < 0 ? -4 : 2, -1, 3, 1);
                ctx.restore();
            } else if (ent.weapon === 'energy_shield') {
                ctx.save();
                ctx.translate(px + (ent.vx < 0 ? -size * 0.6 : size * 0.6), py);
                ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
                ctx.fillRect(-2, -size * 0.8, 4, size * 1.6);
                ctx.strokeStyle = '#38bdf8';
                ctx.lineWidth = 1;
                ctx.strokeRect(-2, -size * 0.8, 4, size * 1.6);
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(-0.5, -1, 1, 2);
                ctx.restore();
            } else if (ent.weapon === 'poison_dagger') {
                ctx.save();
                ctx.translate(px + (ent.vx < 0 ? -size * 0.6 : size * 0.6), py);
                const slash = Math.sin(this.animTime * 15) * 0.4;
                ctx.rotate(slash * (ent.vx < 0 ? -1 : 1));
                ctx.fillStyle = '#14532d';
                ctx.fillRect(-0.6, -size * 0.8, 1.2, size * 0.9);
                ctx.fillStyle = '#84cc16';
                ctx.fillRect(-0.4, -size * 0.9, 0.8, size * 0.5);
                ctx.fillStyle = '#4ade80';
                ctx.fillRect(-1, 0, 2, 1);
                ctx.restore();
            } else if (ent.weapon === 'gravity_hammer') {
                ctx.save();
                ctx.translate(px + (ent.vx < 0 ? -size * 0.7 : size * 0.7), py);
                const slam = ent.attackCooldown > 10 ? Math.sin(this.animTime * 18) * 0.8 : 0.2;
                ctx.rotate(slam * (ent.vx < 0 ? -1 : 1));
                ctx.fillStyle = '#312e81';
                ctx.fillRect(-0.8, -size * 0.3, 1.6, size * 1.6);
                ctx.fillStyle = '#4c1d95';
                ctx.fillRect(-3.5, -size * 0.8, 7, 4);
                ctx.fillStyle = '#a855f7';
                ctx.fillRect(-2, -size * 0.7, 4, 2);
                ctx.restore();
            } else if (ent.weapon === 'storm_staff') {
                ctx.save();
                ctx.translate(px + (ent.vx < 0 ? -size * 0.6 : size * 0.6), py);
                ctx.fillStyle = '#1e293b';
                ctx.fillRect(-0.6, -size * 1.2, 1.2, size * 1.8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(-1.5, -size * 1.4, 3, 3);
                ctx.fillStyle = '#38bdf8';
                ctx.fillRect(-0.8, -size * 1.3, 1.6, 1.6);
                ctx.restore();
            } else if (ent.weapon === 'grenade_launcher') {
                ctx.save();
                ctx.translate(px + (ent.vx < 0 ? -size * 0.7 : size * 0.7), py);
                ctx.fillStyle = '#334155';
                ctx.fillRect(ent.vx < 0 ? -6 : 0, -2.5, 6, 4.5);
                ctx.fillStyle = '#475569';
                ctx.fillRect(ent.vx < 0 ? -8 : 6, -2, 2.5, 3.5);
                ctx.fillStyle = '#f97316';
                ctx.fillRect(ent.vx < 0 ? -3 : 2, -1, 2, 2);
                ctx.restore();
            } else if (ent.weapon === 'void_halberd') {
                ctx.save();
                ctx.translate(px + (ent.vx < 0 ? -size * 0.7 : size * 0.7), py);
                const slash = ent.attackCooldown > 10 ? Math.sin(this.animTime * 20) * 0.8 : 0.3;
                ctx.rotate(slash * (ent.vx < 0 ? -1 : 1));
                ctx.fillStyle = '#1e1b4b';
                ctx.fillRect(-0.8, -size * 1.8, 1.6, size * 2.2);
                ctx.fillStyle = '#6366f1';
                ctx.fillRect(-size * 0.8, -size * 1.8, size * 1.2, 2);
                ctx.fillStyle = '#a855f7';
                ctx.fillRect(-size * 1.0, -size * 1.6, size * 0.5, 3);
                ctx.restore();
            } else if (ent.weapon === 'frost_scythe') {
                ctx.save();
                ctx.translate(px + (ent.vx < 0 ? -size * 0.7 : size * 0.7), py);
                const slash = ent.attackCooldown > 10 ? Math.sin(this.animTime * 20) * 0.8 : 0.3;
                ctx.rotate(slash * (ent.vx < 0 ? -1 : 1));
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(-0.7, -size * 1.6, 1.4, size * 2.0);
                ctx.fillStyle = '#a5f3fc';
                ctx.fillRect(-size * 1.2, -size * 1.6, size * 1.4, 2);
                ctx.fillStyle = '#38bdf8';
                ctx.fillRect(-size * 1.4, -size * 1.4, size * 0.4, 2);
                ctx.restore();
            } else if (ent.weapon === 'plasma_cannon') {
                ctx.save();
                ctx.translate(px + (ent.vx < 0 ? -size * 0.8 : size * 0.8), py);
                ctx.fillStyle = '#1e293b';
                ctx.fillRect(ent.vx < 0 ? -8 : 0, -3, 8, 5);
                ctx.fillStyle = '#00e5ff';
                ctx.fillRect(ent.vx < 0 ? -9 : 7, -2, 2.5, 3);
                ctx.fillStyle = '#38bdf8';
                ctx.fillRect(ent.vx < 0 ? -5 : 2, -1, 3, 2);
                ctx.restore();
            } else if (ent.weapon === 'arcane_crossbow') {
                ctx.save();
                ctx.translate(px + (ent.vx < 0 ? -size * 0.6 : size * 0.6), py);
                ctx.fillStyle = '#581c87';
                ctx.fillRect(ent.vx < 0 ? -5 : 0, -1, 5, 2);
                ctx.fillStyle = '#c084fc';
                ctx.fillRect(ent.vx < 0 ? -3 : 2, -3, 1.5, 6);
                ctx.restore();
            } else if (ent.weapon === 'chaos_flail') {
                ctx.save();
                ctx.translate(px + (ent.vx < 0 ? -size * 0.7 : size * 0.7), py);
                const swing = Math.sin(this.animTime * 15) * 0.8;
                ctx.rotate(swing * (ent.vx < 0 ? -1 : 1));
                ctx.fillStyle = '#78350f';
                ctx.fillRect(-0.6, 0, 1.2, size * 0.8);
                ctx.strokeStyle = '#94a3b8';
                ctx.lineWidth = 1;
                ctx.strokeRect(-1, -size * 0.5, 2, size * 0.5);
                ctx.fillStyle = '#ef4444';
                ctx.fillRect(-2.5, -size * 0.9, 5, 5);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(-1, -size * 0.9 + 1.5, 2, 2);
                ctx.restore();
            } else if (ent.weapon === 'sun_spear') {
                ctx.save();
                ctx.translate(px + (ent.vx < 0 ? -size * 0.7 : size * 0.7), py);
                const thrust = ent.attackCooldown > 10 ? Math.sin(this.animTime * 20) * 0.6 : 0.2;
                ctx.rotate(thrust * (ent.vx < 0 ? -1 : 1));
                ctx.fillStyle = '#ca8a04';
                ctx.fillRect(-0.7, -size * 1.8, 1.4, size * 2.2);
                ctx.fillStyle = '#fbbf24';
                ctx.fillRect(-1.8, -size * 1.9, 3.6, 3.5);
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(-0.6, -size * 2.0, 1.2, 1.8);
                ctx.restore();
            }

            // Overclock Electric Energy Aura
            if (ent.overclockTimer > 0) {
                ctx.strokeStyle = '#facc15';
                ctx.lineWidth = 1.2;
                const zap = Math.random() * Math.PI * 2;
                ctx.beginPath();
                ctx.moveTo(px + Math.cos(zap) * (size + 1), py + Math.sin(zap) * (size + 1));
                ctx.lineTo(px + Math.cos(zap + 1.2) * (size + 4), py + Math.sin(zap + 1.2) * (size + 4));
                ctx.stroke();
            }

            // Player Controlled Marker / Retro Reticle
            if (ent.isControlled) {
                ctx.strokeStyle = '#facc15';
                ctx.lineWidth = 1.2;
                const br = size + 3;
                const cl = 3;
                ctx.beginPath();
                ctx.moveTo(px - br, py - br + cl); ctx.lineTo(px - br, py - br); ctx.lineTo(px - br + cl, py - br);
                ctx.moveTo(px + br - cl, py - br); ctx.lineTo(px + br, py - br); ctx.lineTo(px + br, py - br + cl);
                ctx.moveTo(px + br, py + br - cl); ctx.lineTo(px + br, py + br); ctx.lineTo(px + br - cl, py + br);
                ctx.moveTo(px - br + cl, py + br); ctx.lineTo(px - br, py + br); ctx.lineTo(px - br, py + br - cl);
                ctx.stroke();

                const bounce = Math.sin(this.animTime * 5) * 2;
                ctx.fillStyle = '#facc15';
                ctx.beginPath();
                ctx.moveTo(px - 3, py - size - 7 + bounce);
                ctx.lineTo(px + 3, py - size - 7 + bounce);
                ctx.lineTo(px, py - size - 3 + bounce);
                ctx.closePath();
                ctx.fill();

                const tagNames = {
                    dragon: 'DRAGON', evermean: 'EVERMEAN', mech: 'MECH', colossus_mech: 'COLOSSUS',
                    seraph_angel: 'SERAPH', dune_leviathan: 'LEVIATHAN', vampire_lord: 'VAMPIRE',
                    void_titan: 'VOID TITAN', duck: 'EXPLODING DUCK', crystal_golem: 'CRYSTAL GOLEM',
                    shadow_assassin: 'ASSASSIN', frog: 'FROG', cyber_ninja: 'CYBER NINJA',
                    laser_shark: 'LASER SHARK', frost_wolf: 'FROST WOLF', sand_scorpion: 'SCORPION',
                    necromancer: 'NECROMANCER', valkyrie: 'VALKYRIE', gargoyle: 'GARGOYLE',
                    mecha_rex: 'MECHA-REX', golden_dragon: 'GOLD DRAGON', space_worm: 'VOID WORM',
                    goblin: 'GOBLIN', pirate_ship: 'GALLEON', crabzilla: 'CRABZILLA', kaiju: 'KAIJU',
                    tank: 'TANK', warship: 'WARSHIP', helicopter: 'CHOPPER', starfighter: 'STARFIGHTER',
                    trex: 'T-REX', triceratops: 'TRICERATOPS', velociraptor: 'RAPTOR',
                    pterodactyl: 'PTERODACTYL', brachiosaurus: 'BRACHIOSAURUS',
                    frost_dragon: 'FROST DRAGON', shadow_dragon: 'SHADOW DRAGON', storm_dragon: 'STORM DRAGON',
                    dark_matter_colossus: 'DARK COLOSSUS', phoenix_knight: 'PHOENIX KNIGHT',
                    thunder_bird: 'THUNDERBIRD', cyber_dragon: 'CYBER DRAGON',
                    swamp_behemoth: 'BEHEMOTH', mammoth: 'MAMMOTH'
                };
                const tagPrefix = tagNames[ent.type] || 'HERO';
                const tagText = `${tagPrefix} [WASD / SPACE / Q / F: 1st-Person]`;
                ctx.font = 'bold 3px monospace';
                const textWidth = ctx.measureText(tagText).width;
                ctx.fillRect(px - textWidth / 2 - 1, py - size - 12, textWidth + 2, 4.2);
                ctx.fillStyle = '#facc15';
                ctx.fillText(tagText, px - textWidth / 2, py - size - 8.8);
            }

            // Health Bar (if injured or boss and not dying)
            if (!ent.isDying && (ent.hp < ent.maxHp || ent.isBoss)) {
                const barWidth = Math.max(6, size * 1.6);
                const pct = Math.max(0, ent.hp / ent.maxHp);
                ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
                ctx.fillRect(px - barWidth * 0.5, py - size - 4, barWidth, 1.5);
                ctx.fillStyle = pct > 0.5 ? '#22c55e' : (pct > 0.25 ? '#eab308' : '#ef4444');
                ctx.fillRect(px - barWidth * 0.5, py - size - 4, barWidth * pct, 1.5);
            }

            ctx.restore();
        }
    }

    renderCorpses(corpses) {
        const ctx = this.ctx;
        for (let i = 0; i < corpses.length; i++) {
            const c = corpses[i];
            const px = c.x;
            const py = c.y;
            const s = c.scale || 1.0;
            const alpha = Math.max(0.1, Math.min(1.0, c.timer / 60));

            ctx.save();
            ctx.globalAlpha = alpha;

            if (c.type === 'stump') {
                // Fallen Evermean Treant trunk stump & moss
                ctx.fillStyle = '#78350f';
                ctx.fillRect(px - 3 * s, py - 1 * s, 6 * s, 3 * s);
                ctx.fillStyle = '#b45309';
                ctx.fillRect(px - 2 * s, py - 2 * s, 4 * s, 1.5 * s);
                ctx.fillStyle = '#15803d';
                ctx.fillRect(px - 1 * s, py - 2.5 * s, 2 * s, 1 * s);
            } else if (c.type === 'mech_scrap') {
                // Smoldering robotic scrap chassis
                ctx.fillStyle = '#334155';
                ctx.fillRect(px - 3.5 * s, py - 1.5 * s, 7 * s, 3 * s);
                ctx.fillStyle = '#64748b';
                ctx.fillRect(px - 2 * s, py - 2.5 * s, 4 * s, 1.5 * s);
                ctx.fillStyle = '#06b6d4';
                ctx.fillRect(px + 1 * s, py - 1 * s, 1 * s, 1 * s);
            } else if (c.type === 'dragon_skull') {
                // Massive horned dragon skull
                ctx.fillStyle = '#f1f5f9';
                ctx.fillRect(px - 4 * s, py - 2 * s, 8 * s, 3.5 * s);
                ctx.fillStyle = '#cbd5e1';
                ctx.fillRect(px - 5 * s, py - 3.5 * s, 2 * s, 2 * s);
                ctx.fillRect(px + 3 * s, py - 3.5 * s, 2 * s, 2 * s);
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(px - 2 * s, py - 1 * s, 1.5 * s, 1.5 * s);
                ctx.fillRect(px + 0.5 * s, py - 1 * s, 1.5 * s, 1.5 * s);
            } else if (c.type === 'leviathan_ribs') {
                // Arc of colossal bone ribs
                ctx.fillStyle = '#e2e8f0';
                for (let r = -3; r <= 3; r += 2) {
                    ctx.fillRect(px + r * 1.5 * s, py - 3 * s, 1 * s, 4 * s);
                }
            } else if (c.type === 'angel_halo') {
                // Shattered celestial halo
                ctx.strokeStyle = '#facc15';
                ctx.lineWidth = 1;
                ctx.strokeRect(px - 2.5 * s, py - 1.5 * s, 5 * s, 3 * s);
            } else {
                // Standard bones & skull remains (Humanoids, beasts, orcs, elves, dwarves)
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(px - 2 * s, py - 1.5 * s, 3 * s, 2.5 * s);
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(px - 1 * s, py - 1 * s, 1 * s, 1 * s);
                ctx.fillStyle = '#cbd5e1';
                ctx.fillRect(px + 1 * s, py - 0.5 * s, 3 * s, 1.5 * s);
                ctx.fillRect(px - 2.5 * s, py + 1 * s, 4 * s, 1 * s);
            }

            ctx.restore();
        }
    }

    renderFloatingTexts(floatingTexts) {
        const ctx = this.ctx;
        ctx.save();
        for (let i = 0; i < floatingTexts.length; i++) {
            const ft = floatingTexts[i];
            const alpha = Math.max(0, Math.min(1.0, ft.life / 10));
            ctx.globalAlpha = alpha;
            ctx.font = ft.isCrit ? 'bold 4.5px monospace' : 'bold 3.5px monospace';

            // Retro dark outline
            ctx.fillStyle = '#000000';
            ctx.fillText(ft.text, ft.x - 0.4, ft.y);
            ctx.fillText(ft.text, ft.x + 0.4, ft.y);
            ctx.fillText(ft.text, ft.x, ft.y - 0.4);
            ctx.fillText(ft.text, ft.x, ft.y + 0.4);

            // Primary text fill
            ctx.fillStyle = ft.color;
            ctx.fillText(ft.text, ft.x, ft.y);
        }
        ctx.restore();
    }

    renderProjectiles(projectiles) {
        const ctx = this.ctx;
        for (let i = 0; i < projectiles.length; i++) {
            const p = projectiles[i];
            if (p.type === 'arrow') {
                ctx.strokeStyle = '#cbd5e1';
                ctx.lineWidth = 1.2;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x - p.vx * 1.5, p.y - p.vy * 1.5);
                ctx.stroke();
            } else if (p.type === 'fireball') {
                ctx.fillStyle = '#ea580c';
                ctx.fillRect(p.x - 1.5, p.y - 1.5, 3, 3);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(p.x - 0.7, p.y - 0.7, 1.4, 1.4);
            } else if (p.type === 'laser') {
                ctx.fillStyle = '#00e5ff';
                ctx.fillRect(p.x - 1, p.y - 1, 2, 2);
            } else if (p.type === 'frost') {
                ctx.fillStyle = '#a5f3fc';
                ctx.fillRect(p.x - 1.5, p.y - 0.5, 3, 1);
                ctx.fillRect(p.x - 0.5, p.y - 1.5, 1, 3);
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(p.x - 0.5, p.y - 0.5, 1, 1);
            } else if (p.type === 'acid') {
                ctx.fillStyle = '#84cc16';
                ctx.fillRect(p.x - 1.5, p.y - 1, 3, 2);
                ctx.fillRect(p.x - 1, p.y - 1.5, 2, 3);
            } else if (p.type === 'blaster') {
                ctx.fillStyle = '#22d3ee';
                ctx.fillRect(p.x - 1.5, p.y - 1, 3, 2);
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(p.x - 0.5, p.y - 0.5, 1, 1);
            } else if (p.type === 'magic_missile') {
                ctx.fillStyle = '#c084fc';
                ctx.fillRect(p.x - 1.5, p.y - 1, 3, 2);
                ctx.fillRect(p.x - 1, p.y - 1.5, 2, 3);
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(p.x - 0.5, p.y - 0.5, 1, 1);
            }
        }
    }

    renderBrushCursor(wx, wy, radius, activeTool) {
        const ctx = this.ctx;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.75)';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        const cx = Math.floor(wx);
        const cy = Math.floor(wy);
        const r = Math.max(1, Math.floor(radius));

        if (r <= 2) {
            ctx.strokeRect(cx - r, cy - r, r * 2 + 1, r * 2 + 1);
            ctx.fillRect(cx - r, cy - r, r * 2 + 1, r * 2 + 1);
            return;
        }

        // Stepped discrete pixel perimeter
        ctx.save();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        let x = r;
        let y = 0;
        let err = 0;
        while (x >= y) {
            ctx.fillRect(cx + x, cy + y, 1, 1);
            ctx.fillRect(cx + y, cy + x, 1, 1);
            ctx.fillRect(cx - y, cy + x, 1, 1);
            ctx.fillRect(cx - x, cy + y, 1, 1);
            ctx.fillRect(cx - x, cy - y, 1, 1);
            ctx.fillRect(cx - y, cy - x, 1, 1);
            ctx.fillRect(cx + y, cy - x, 1, 1);
            ctx.fillRect(cx + x, cy - y, 1, 1);
            if (err <= 0) {
                y += 1;
                err += 2 * y + 1;
            }
            if (err > 0) {
                x -= 1;
                err -= 2 * x + 1;
            }
        }
        ctx.restore();
    }

    renderDuck(ctx, ent, px, py, size) {
        ctx.save();
        ctx.translate(px, py);
        if (ent.facingLeft) ctx.scale(-1, 1);

        const waddle = Math.sin(this.animTime * 14) * 0.8;
        const s = size;

        // Orange Webbed Feet
        ctx.fillStyle = '#ea580c';
        ctx.fillRect(-2, 1.5 + waddle, 2.2, 1.2);
        ctx.fillRect(0.8, 1.5 - waddle, 2.2, 1.2);

        // Plump Yellow Body
        ctx.fillStyle = '#facc15';
        ctx.fillRect(-3, -2, 6, 4);
        ctx.fillRect(-2, -3, 4, 1);

        // Little Wing Flap
        ctx.fillStyle = '#eab308';
        const wingOffset = Math.sin(this.animTime * 12) * 0.5;
        ctx.fillRect(-1.5, -1.8 + wingOffset, 3, 2.5);

        // Duck Head
        ctx.fillStyle = '#facc15';
        ctx.fillRect(1.5, -4.5, 3.5, 3.5);

        // Cute Black Bead Eye
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(3.5, -3.8, 1, 1);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(3.8, -3.8, 0.5, 0.5);

        // Bright Orange Beak
        ctx.fillStyle = '#f97316';
        ctx.fillRect(5, -3.2, 2.5, 1.5);
        ctx.fillStyle = '#ea580c';
        ctx.fillRect(5, -2.2, 2.5, 0.6);

        // Cartoon Bomb Fuse on Head
        ctx.fillStyle = '#78350f';
        ctx.fillRect(2.5, -5.8, 1, 1.5);
        ctx.fillRect(3.2, -6.5, 1.2, 0.8);

        // Sparking Fuse Tip
        const sparkColors = ['#ff4500', '#facc15', '#ffffff', '#fbbf24'];
        ctx.fillStyle = sparkColors[Math.floor(Math.random() * sparkColors.length)];
        ctx.fillRect(3.8, -7.2, 1.4, 1.4);

        ctx.restore();
    }

    renderCrystalGolem(ctx, ent, px, py, size) {
        ctx.save();
        ctx.translate(px, py);
        if (ent.facingLeft) ctx.scale(-1, 1);
        const s = size * 0.8;
        const step = Math.sin(this.animTime * 6) * 1.5;

        // Crystal Legs
        ctx.fillStyle = '#be185d';
        ctx.fillRect(-s * 0.6, s * 0.2 + step, s * 0.4, s * 0.8);
        ctx.fillRect(s * 0.2, s * 0.2 - step, s * 0.4, s * 0.8);

        // Crystal Torso Facets
        ctx.fillStyle = '#ec4899';
        ctx.fillRect(-s * 0.7, -s * 0.6, s * 1.4, s * 0.9);
        ctx.fillStyle = '#f472b6';
        ctx.fillRect(-s * 0.5, -s * 0.5, s * 1.0, s * 0.7);

        // Glowing Core
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(-1.5, -s * 0.3, 3, 3);
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(-0.8, -s * 0.3 + 0.7, 1.6, 1.6);

        // Spiky Crystal Shoulders
        ctx.fillStyle = '#db2777';
        ctx.fillRect(-s * 0.9, -s * 0.8, s * 0.3, s * 0.5);
        ctx.fillRect(s * 0.6, -s * 0.8, s * 0.3, s * 0.5);

        // Faceted Head
        ctx.fillStyle = '#be185d';
        ctx.fillRect(-s * 0.35, -s * 1.1, s * 0.7, s * 0.5);
        ctx.fillStyle = '#67e8f9';
        ctx.fillRect(-s * 0.2, -s * 0.95, s * 0.4, 1.2);

        ctx.restore();
    }

    renderShadowAssassin(ctx, ent, px, py, size) {
        ctx.save();
        ctx.translate(px, py);
        if (ent.facingLeft) ctx.scale(-1, 1);
        const bob = Math.sin(this.animTime * 10) * 0.6;

        // Shadow Cloak / Shroud
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(-2, -2 + bob, 4, 5);
        ctx.fillStyle = '#1e1b4b';
        ctx.fillRect(-1.5, -1 + bob, 3, 3);

        // Ninja Hood & Piercing Cyan Eyes
        ctx.fillStyle = '#09090b';
        ctx.fillRect(-1.8, -4.5 + bob, 3.6, 3);
        ctx.fillStyle = '#06b6d4';
        ctx.fillRect(-1, -3.5 + bob, 0.8, 0.8);
        ctx.fillRect(0.3, -3.5 + bob, 0.8, 0.8);

        // Dual Stealth Daggers
        ctx.fillStyle = '#cbd5e1';
        ctx.fillRect(2.2, -1 + bob, 1.2, 3.5);
        ctx.fillRect(-3.4, -1 + bob, 1.2, 3.5);
        ctx.fillStyle = '#475569';
        ctx.fillRect(2.2, 2.5 + bob, 1.2, 1);
        ctx.fillRect(-3.4, 2.5 + bob, 1.2, 1);

        ctx.restore();
    }

    renderFrog(ctx, ent, px, py, size) {
        ctx.save();
        ctx.translate(px, py);
        if (ent.facingLeft) ctx.scale(-1, 1);
        const hop = Math.abs(Math.sin(this.animTime * 8)) * 1.5;

        // Folded hind legs
        ctx.fillStyle = '#15803d';
        ctx.fillRect(-3, 0.5 - hop, 1.5, 2.5);
        ctx.fillRect(1.5, 0.5 - hop, 1.5, 2.5);
        ctx.fillStyle = '#16a34a';
        ctx.fillRect(-3.5, 2 - hop, 2.5, 1);
        ctx.fillRect(1, 2 - hop, 2.5, 1);

        // Chubby green body
        ctx.fillStyle = '#22c55e';
        ctx.fillRect(-2.5, -2 - hop, 5, 3.5);
        ctx.fillStyle = '#86efac';
        ctx.fillRect(-1.5, -1 - hop, 3, 2);

        // Big bulgy frog eyes
        ctx.fillStyle = '#16a34a';
        ctx.fillRect(-2.5, -3.5 - hop, 2, 2);
        ctx.fillRect(0.5, -3.5 - hop, 2, 2);
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(-2, -3 - hop, 1.2, 1.2);
        ctx.fillRect(1, -3 - hop, 1.2, 1.2);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(-1.8, -3.2 - hop, 0.6, 0.6);
        ctx.fillRect(1.2, -3.2 - hop, 0.6, 0.6);

        // Tongue snap
        if (ent.abilityCooldown > 8) {
            ctx.fillStyle = '#f43f5e';
            ctx.fillRect(2.5, -1 - hop, 6, 1.2);
            ctx.fillRect(7.5, -1.5 - hop, 2, 2);
        }

        ctx.restore();
    }

    renderCyberNinja(ctx, ent, px, py, size) {
        ctx.save();
        ctx.translate(px, py);
        if (ent.facingLeft) ctx.scale(-1, 1);
        const step = Math.sin(this.animTime * 12) * 0.8;

        // Dark tech boots
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(-1.8, 1.5 + step, 1.4, 2);
        ctx.fillRect(0.4, 1.5 - step, 1.4, 2);

        // Cyber suit torso
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(-2, -2, 4, 3.8);
        ctx.fillStyle = '#0891b2';
        ctx.fillRect(-1, -1.5, 2, 3);

        // Ninja cowl & neon cyan visor
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(-1.8, -4.5, 3.6, 2.8);
        ctx.fillStyle = '#22d3ee';
        ctx.fillRect(-1.2, -3.5, 2.4, 1);

        // Energy Katana blade on back
        ctx.fillStyle = '#00e5ff';
        ctx.fillRect(1.8, -5, 1, 6);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(2, -4.5, 0.6, 4);

        ctx.restore();
    }

    renderLaserShark(ctx, ent, px, py, size) {
        const s = size * 0.8;
        const fAng = (Math.hypot(ent.vx, ent.vy) > 0.05) ? Math.atan2(ent.vy, ent.vx) : 0;
        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(fAng);

        // Tail fin
        const tailWag = Math.sin(this.animTime * 10) * 2;
        ctx.fillStyle = '#0369a1';
        ctx.beginPath();
        ctx.moveTo(-s * 1.3, tailWag);
        ctx.lineTo(-s * 1.8, tailWag - 3);
        ctx.lineTo(-s * 1.8, tailWag + 3);
        ctx.closePath();
        ctx.fill();

        // Sleek torpedo shark body
        ctx.fillStyle = '#0284c7';
        ctx.fillRect(-s * 1.1, -s * 0.4, s * 2.2, s * 0.8);
        ctx.fillRect(-s * 0.8, -s * 0.55, s * 1.6, s * 1.1);

        // White underbelly
        ctx.fillStyle = '#f0f9ff';
        ctx.fillRect(-s * 0.8, 0, s * 1.6, s * 0.4);

        // Head & Snout with White Razor Teeth
        ctx.fillStyle = '#0369a1';
        ctx.fillRect(s * 0.8, -s * 0.35, s * 0.5, s * 0.7);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(s * 0.7, 0, 3, 1.5);
        ctx.fillRect(s * 0.9, 0, 3, 1.5);

        // Cold black eye
        ctx.fillStyle = '#000000';
        ctx.fillRect(s * 0.6, -s * 0.3, 1.5, 1.5);

        // Head-Mounted Cyber Laser Cannon
        ctx.fillStyle = '#334155';
        ctx.fillRect(s * 0.2, -s * 0.85, s * 0.8, 2.5);
        ctx.fillStyle = '#00e5ff';
        ctx.fillRect(s * 0.8, -s * 0.8, 3, 1.5);

        ctx.restore();
    }

    renderFrostWolf(ctx, ent, px, py, size) {
        ctx.save();
        ctx.translate(px, py);
        if (ent.facingLeft) ctx.scale(-1, 1);
        const step = Math.sin(this.animTime * 10) * 1.2;

        // Paws
        ctx.fillStyle = '#0284c7';
        ctx.fillRect(-3, 2 + step, 1.8, 2);
        ctx.fillRect(1.5, 2 - step, 1.8, 2);

        // Fur Body
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(-3.5, -1.5, 7, 3.8);
        ctx.fillStyle = '#e0f2fe';
        ctx.fillRect(-2.5, -0.5, 5, 2);

        // Crystalline Spine Frills
        ctx.fillStyle = '#a5f3fc';
        ctx.fillRect(-2, -3, 1.5, 2);
        ctx.fillRect(0, -3.2, 1.5, 2);

        // Wolf Snout & Ears
        ctx.fillStyle = '#0284c7';
        ctx.fillRect(2.5, -2.5, 3.5, 2.5);
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(5.5, -1.5, 1, 1);
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(2.5, -4, 1.2, 2);

        // Glowing blue eyes
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(3.2, -2.2, 1, 1);

        // Tail
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(-5, -2, 2, 2);
        ctx.fillRect(-6, -3, 1.5, 2);

        ctx.restore();
    }

    renderSandScorpion(ctx, ent, px, py, size) {
        ctx.save();
        ctx.translate(px, py);
        if (ent.facingLeft) ctx.scale(-1, 1);

        // Multi-legs
        ctx.fillStyle = '#b45309';
        for (let l = -2; l <= 2; l += 2) {
            const legW = Math.sin(this.animTime * 8 + l) * 1;
            ctx.fillRect(l - 0.5, 1.5 + legW, 1, 2.5);
        }

        // Chitinous Body
        ctx.fillStyle = '#d97706';
        ctx.fillRect(-3, -1.5, 6, 3);
        ctx.fillStyle = '#92400e';
        ctx.fillRect(-2, -1, 4, 2);

        // Front Pincers
        ctx.fillStyle = '#b45309';
        ctx.fillRect(2.5, -2.5, 3, 2);
        ctx.fillRect(4.5, -3.5, 1.5, 3);
        ctx.fillRect(2.5, 1, 3, 2);
        ctx.fillRect(4.5, 1, 1.5, 3);

        // Curling Segmented Tail & Venom Stinger
        const tailBob = Math.sin(this.animTime * 5) * 1.5;
        ctx.fillStyle = '#d97706';
        ctx.fillRect(-4.5, -2.5, 2, 2);
        ctx.fillRect(-5.5, -4.5 + tailBob * 0.5, 2, 2.5);
        ctx.fillRect(-4.5, -6 + tailBob, 2, 2);
        // Toxic Stinger Tip
        ctx.fillStyle = '#84cc16';
        ctx.fillRect(-2.5, -6.5 + tailBob, 2.5, 1.5);
        ctx.fillStyle = '#a3e635';
        ctx.fillRect(-0.5, -6 + tailBob, 1.5, 1);

        ctx.restore();
    }

    renderNecromancer(ctx, ent, px, py, size) {
        ctx.save();
        ctx.translate(px, py);
        if (ent.facingLeft) ctx.scale(-1, 1);
        const float = Math.sin(this.animTime * 5) * 0.8;

        // Dark tattered robes
        ctx.fillStyle = '#2e1065';
        ctx.fillRect(-2.2, -1.5 + float, 4.4, 5);
        ctx.fillStyle = '#4c1d95';
        ctx.fillRect(-1.5, -1 + float, 3, 4);

        // Hood & Skeletal Face
        ctx.fillStyle = '#1e1b4b';
        ctx.fillRect(-2, -4.5 + float, 4, 3.2);
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(-1.2, -3.8 + float, 2.4, 2.2);

        // Glowing Emerald Eyes
        ctx.fillStyle = '#4ade80';
        ctx.fillRect(-0.8, -3.2 + float, 0.8, 0.8);
        ctx.fillRect(0.2, -3.2 + float, 0.8, 0.8);

        // Skull Staff
        ctx.fillStyle = '#451a03';
        ctx.fillRect(2.5, -6 + float, 1, 9);
        ctx.fillStyle = '#cbd5e1';
        ctx.fillRect(1.8, -7.5 + float, 2.4, 2);
        ctx.fillStyle = '#a855f7';
        ctx.fillRect(2.2, -9 + float, 1.6, 1.6);

        ctx.restore();
    }

    renderValkyrie(ctx, ent, px, py, size) {
        ctx.save();
        ctx.translate(px, py);
        if (ent.facingLeft) ctx.scale(-1, 1);
        const wingFlap = Math.sin(this.animTime * 8) * 3;

        // Golden/White Wings
        ctx.fillStyle = '#fef08a';
        ctx.fillRect(-6, -5 + wingFlap, 4, 3);
        ctx.fillRect(-7, -3 + wingFlap * 0.8, 3, 4);
        ctx.fillRect(2, -5 + wingFlap, 4, 3);
        ctx.fillRect(4, -3 + wingFlap * 0.8, 3, 4);

        // Silver Breastplate & Tunic
        ctx.fillStyle = '#cbd5e1';
        ctx.fillRect(-2, -2, 4, 4);
        ctx.fillStyle = '#facc15';
        ctx.fillRect(-1.5, -1, 3, 2);

        // Winged Silver Helmet
        ctx.fillStyle = '#e2e8f0';
        ctx.fillRect(-1.8, -4.8, 3.6, 3);
        ctx.fillStyle = '#fef08a';
        ctx.fillRect(-3, -5.5, 1.5, 2.5);
        ctx.fillRect(1.5, -5.5, 1.5, 2.5);

        // Face & Eyes
        ctx.fillStyle = '#fef3c7';
        ctx.fillRect(-1.2, -3.8, 2.4, 1.8);
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(-0.8, -3.4, 0.8, 0.8);
        ctx.fillRect(0.2, -3.4, 0.8, 0.8);

        // Radiant Holy Spear
        ctx.fillStyle = '#facc15';
        ctx.fillRect(2.8, -7, 1, 10);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(2.3, -9, 2, 2.5);

        ctx.restore();
    }

    renderGargoyle(ctx, ent, px, py, size) {
        ctx.save();
        ctx.translate(px, py);
        if (ent.facingLeft) ctx.scale(-1, 1);
        const flap = Math.sin(this.animTime * 7) * 2.5;

        // Stone Bat Wings
        ctx.fillStyle = '#475569';
        ctx.fillRect(-5, -4 + flap, 3, 4);
        ctx.fillRect(-7, -2 + flap * 0.8, 3, 3);
        ctx.fillRect(2, -4 + flap, 3, 4);
        ctx.fillRect(4, -2 + flap * 0.8, 3, 3);

        // Muscular Stone Torso
        ctx.fillStyle = '#64748b';
        ctx.fillRect(-2.2, -2, 4.4, 4);
        ctx.fillStyle = '#475569';
        ctx.fillRect(-1.5, -1, 3, 2.5);

        // Horned Gargoyle Head
        ctx.fillStyle = '#64748b';
        ctx.fillRect(-2, -4.5, 4, 3);
        ctx.fillStyle = '#334155';
        ctx.fillRect(-2.5, -6, 1.2, 2);
        ctx.fillRect(1.3, -6, 1.2, 2);

        // Piercing Amber Eyes
        ctx.fillStyle = '#f59e0b';
        ctx.fillRect(-1.2, -3.8, 1, 1);
        ctx.fillRect(0.4, -3.8, 1, 1);

        // Stone Claws
        ctx.fillStyle = '#334155';
        ctx.fillRect(-2.5, 2, 2, 2);
        ctx.fillRect(0.5, 2, 2, 2);

        ctx.restore();
    }

    renderMechaRex(ctx, ent, px, py, size) {
        ctx.save();
        ctx.translate(px, py);
        if (ent.facingLeft) ctx.scale(-1, 1);
        const s = size * 0.8;
        const step = Math.sin(this.animTime * 6) * 2;

        // Massive Hydraulic Bipedal Legs
        ctx.fillStyle = '#334155';
        ctx.fillRect(-s * 0.6, s * 0.1 + step, s * 0.4, s * 0.8);
        ctx.fillRect(s * 0.2, s * 0.1 - step, s * 0.4, s * 0.8);
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(-s * 0.7, s * 0.8 + step, s * 0.5, 2);
        ctx.fillRect(s * 0.1, s * 0.8 - step, s * 0.5, 2);

        // Armored Mecha Hull
        ctx.fillStyle = '#475569';
        ctx.fillRect(-s * 0.8, -s * 0.6, s * 1.6, s * 1.1);
        ctx.fillStyle = '#64748b';
        ctx.fillRect(-s * 0.6, -s * 0.5, s * 1.2, s * 0.8);

        // Dorsal Micro-Missile Pod
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(-s * 0.4, -s * 0.9, s * 0.8, s * 0.35);
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(-s * 0.3, -s * 0.85, 2, 2);
        ctx.fillRect(0, -s * 0.85, 2, 2);

        // Mechanical T-Rex Head with Jaws
        ctx.fillStyle = '#334155';
        ctx.fillRect(s * 0.6, -s * 0.7, s * 0.7, s * 0.6);
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(s * 0.7, -s * 0.35, s * 0.6, s * 0.3);

        // Glowing Red Cyber Visor Eye
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(s * 0.8, -s * 0.6, s * 0.4, 1.5);

        // Stepped Steel Tail
        ctx.fillStyle = '#475569';
        ctx.fillRect(-s * 1.3, -s * 0.3, s * 0.6, s * 0.4);
        ctx.fillRect(-s * 1.8, -s * 0.2, s * 0.6, s * 0.3);

        ctx.restore();
    }

    renderGoldenDragon(ctx, ent, px, py, size) {
        ctx.save();
        ctx.translate(px, py);
        if (ent.facingLeft) ctx.scale(-1, 1);
        const s = size * 0.9;
        const wingFlap = Math.sin(this.animTime * 7) * 4;

        // Radiant Gold Wings
        ctx.fillStyle = '#facc15';
        ctx.fillRect(-s * 1.5, -s * 0.9 + wingFlap, s * 1.4, s * 0.7);
        ctx.fillRect(s * 0.3, -s * 0.9 + wingFlap, s * 1.4, s * 0.7);
        ctx.fillStyle = '#fef08a';
        ctx.fillRect(-s * 1.3, -s * 0.7 + wingFlap, s * 1.0, s * 0.4);
        ctx.fillRect(s * 0.5, -s * 0.7 + wingFlap, s * 1.0, s * 0.4);

        // Golden Torso
        ctx.fillStyle = '#eab308';
        ctx.fillRect(-s * 0.5, -s * 0.6, s * 1.0, s * 1.2);
        ctx.fillStyle = '#fde047';
        ctx.fillRect(-s * 0.3, -s * 0.4, s * 0.6, s * 0.8);

        // Dragon Head & Golden Horns
        ctx.fillStyle = '#ca8a04';
        ctx.fillRect(s * 0.4, -s * 0.9, s * 0.6, s * 0.6);
        ctx.fillStyle = '#facc15';
        ctx.fillRect(s * 0.3, -s * 1.3, 2, s * 0.5);
        ctx.fillRect(s * 0.6, -s * 1.4, 2, s * 0.6);

        // Starlight Radiant Eye
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(s * 0.6, -s * 0.8, 2, 2);
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(s * 0.7, -s * 0.7, 1, 1);

        // Golden Tail
        ctx.fillStyle = '#eab308';
        ctx.fillRect(-s * 0.9, s * 0.2, s * 0.5, 3);
        ctx.fillRect(-s * 1.3, s * 0.4, s * 0.5, 2.5);

        ctx.restore();
    }

    renderSpaceWorm(ctx, ent, px, py, size) {
        ctx.save();
        ctx.translate(px, py);
        const s = size * 0.7;

        // Undulating Void Segments
        for (let seg = 4; seg >= 0; seg--) {
            const segOffset = Math.sin(this.animTime * 6 + seg * 0.8) * 3;
            const segX = -seg * 4;
            const segY = segOffset;
            const segR = Math.max(2, s - seg * 0.8);

            ctx.fillStyle = seg === 0 ? '#6d28d9' : (seg % 2 === 0 ? '#7c3aed' : '#8b5cf6');
            ctx.fillRect(segX - segR, segY - segR, segR * 2, segR * 2);

            // Void Star Sparkle
            if (seg % 2 === 0) {
                ctx.fillStyle = '#c084fc';
                ctx.fillRect(segX - 1, segY - 1, 2, 2);
            }
        }

        // Maw / Head
        ctx.fillStyle = '#4c1d95';
        ctx.fillRect(s * 0.2 - 2, -2, 4, 4);
        ctx.fillStyle = '#000000';
        ctx.fillRect(s * 0.2, -1, 2, 2);
        ctx.fillStyle = '#a855f7';
        ctx.fillRect(s * 0.2 + 1, -0.5, 1, 1);

        ctx.restore();
    }

    renderGoblin(ctx, ent, px, py, size) {
        ctx.save();
        ctx.translate(px, py);
        if (ent.facingLeft) ctx.scale(-1, 1);
        const step = Math.sin(this.animTime * 14) * 0.7;

        // Scrawny Legs
        ctx.fillStyle = '#4d7c0f';
        ctx.fillRect(-1.5, 1 + step, 1, 2);
        ctx.fillRect(0.5, 1 - step, 1, 2);

        // Ragged Tunic
        ctx.fillStyle = '#78350f';
        ctx.fillRect(-1.8, -1.5, 3.6, 3);
        ctx.fillStyle = '#84cc16';
        ctx.fillRect(-1.2, -0.5, 2.4, 1.5);

        // Green Goblin Head with Floppy Ears
        ctx.fillStyle = '#65a30d';
        ctx.fillRect(-1.8, -4, 3.6, 2.8);
        ctx.fillStyle = '#84cc16';
        ctx.fillRect(-3.2, -3.5, 1.5, 1.5);
        ctx.fillRect(1.7, -3.5, 1.5, 1.5);

        // Mischievous Red Eyes
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(-1, -3.2, 0.8, 0.8);
        ctx.fillRect(0.3, -3.2, 0.8, 0.8);

        // Sharp Teeth Grin
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(-0.8, -2, 1.6, 0.6);

        ctx.restore();
    }

    renderPirateShip(ctx, ent, px, py, size) {
        const s = size * 0.8;
        const fAng = (Math.hypot(ent.vx, ent.vy) > 0.05) ? Math.atan2(ent.vy, ent.vx) : 0;
        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(fAng);

        const rock = Math.sin(this.animTime * 4) * 0.08;
        ctx.rotate(rock);

        // Oak Galleon Hull
        ctx.fillStyle = '#78350f';
        ctx.beginPath();
        ctx.moveTo(s * 1.3, 0);
        ctx.lineTo(s * 0.5, -s * 0.5);
        ctx.lineTo(-s * 1.1, -s * 0.45);
        ctx.lineTo(-s * 1.1, s * 0.45);
        ctx.lineTo(s * 0.5, s * 0.5);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#451a03';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Cannon Ports
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(-s * 0.5, -s * 0.45, 2, 1);
        ctx.fillRect(0, -s * 0.45, 2, 1);
        ctx.fillRect(-s * 0.5, s * 0.4, 2, 1);
        ctx.fillRect(0, s * 0.4, 2, 1);

        // Wooden Mast
        ctx.fillStyle = '#451a03';
        ctx.fillRect(-1, -s * 1.2, 2, s * 1.3);

        // Black Pirate Sail / Jolly Roger
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(-s * 0.6, -s * 1.1, s * 1.2, s * 0.6);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(-1, -s * 0.9, 2, 1.5);

        ctx.restore();
    }

    renderTRex(ctx, ent, px, py, size) {
        ctx.save();
        ctx.translate(px, py);
        if (ent.facingLeft) ctx.scale(-1, 1);
        const s = size * 0.9;
        const step = Math.sin(this.animTime * 7) * 2;

        // Muscular Bipedal Legs & Clawed Feet
        ctx.fillStyle = '#1e3a1e';
        ctx.fillRect(-s * 0.5, s * 0.1 + step, s * 0.35, s * 0.7);
        ctx.fillRect(s * 0.1, s * 0.1 - step, s * 0.35, s * 0.7);
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(-s * 0.6, s * 0.75 + step, s * 0.45, 2);
        ctx.fillRect(0, s * 0.75 - step, s * 0.45, 2);

        // Heavy Theropod Torso
        ctx.fillStyle = '#2d5a27';
        ctx.fillRect(-s * 0.7, -s * 0.5, s * 1.3, s * 0.9);
        // Lighter Ochre Underbelly
        ctx.fillStyle = '#65a30d';
        ctx.fillRect(-s * 0.4, -s * 0.1, s * 0.8, s * 0.45);

        // Armored Dorsal Ridge Scales
        ctx.fillStyle = '#14532d';
        ctx.fillRect(-s * 0.6, -s * 0.65, 2.5, 2);
        ctx.fillRect(-s * 0.3, -s * 0.65, 2.5, 2);
        ctx.fillRect(0, -s * 0.65, 2.5, 2);

        // Counterbalance Muscular Tail
        ctx.fillStyle = '#2d5a27';
        ctx.fillRect(-s * 1.1, -s * 0.3, s * 0.5, s * 0.4);
        ctx.fillRect(-s * 1.6, -s * 0.15, s * 0.6, s * 0.3);
        ctx.fillRect(-s * 2.0, 0, s * 0.5, 2);

        // Two-Clawed Vestigial Arms
        ctx.fillStyle = '#1e3a1e';
        ctx.fillRect(s * 0.4, -s * 0.1, s * 0.25, 2);
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(s * 0.6, -s * 0.1, 1.5, 1.5);

        // Colossal Apex Theropod Head & Massive Jaws
        ctx.fillStyle = '#2d5a27';
        ctx.fillRect(s * 0.5, -s * 0.7, s * 0.85, s * 0.55);
        ctx.fillStyle = '#14532d';
        ctx.fillRect(s * 0.5, -s * 0.8, s * 0.6, 2);

        // Lower Jaw & Teeth
        ctx.fillStyle = '#1e3a1e';
        ctx.fillRect(s * 0.6, -s * 0.25, s * 0.75, s * 0.25);
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(s * 0.65, -s * 0.35, 1.5, 2);
        ctx.fillRect(s * 0.85, -s * 0.35, 1.5, 2);
        ctx.fillRect(s * 1.05, -s * 0.35, 1.5, 2);

        // Amber Predatory Eye with Slit Pupil
        ctx.fillStyle = '#facc15';
        ctx.fillRect(s * 0.75, -s * 0.65, 3, 3);
        ctx.fillStyle = '#000000';
        ctx.fillRect(s * 0.78, -s * 0.65, 1.5, 3);

        ctx.restore();
    }

    renderTriceratops(ctx, ent, px, py, size) {
        ctx.save();
        ctx.translate(px, py);
        if (ent.facingLeft) ctx.scale(-1, 1);
        const s = size * 0.9;
        const step = Math.sin(this.animTime * 6) * 1.5;

        // Quadruped Pillar Legs
        ctx.fillStyle = '#78350f';
        ctx.fillRect(-s * 0.8, s * 0.2 + step, s * 0.3, s * 0.55);
        ctx.fillRect(-s * 0.3, s * 0.2 - step, s * 0.3, s * 0.55);
        ctx.fillRect(s * 0.2, s * 0.2 + step, s * 0.3, s * 0.55);
        ctx.fillRect(s * 0.6, s * 0.2 - step, s * 0.3, s * 0.55);

        // Robust Heavy Barrel Torso
        ctx.fillStyle = '#b45309';
        ctx.fillRect(-s * 0.8, -s * 0.45, s * 1.5, s * 0.8);
        ctx.fillStyle = '#d97706';
        ctx.fillRect(-s * 0.6, -s * 0.35, s * 1.1, s * 0.5);

        // Dermal Scutes along back
        ctx.fillStyle = '#fef08a';
        ctx.fillRect(-s * 0.6, -s * 0.55, 2, 2);
        ctx.fillRect(-s * 0.2, -s * 0.55, 2, 2);
        ctx.fillRect(s * 0.2, -s * 0.55, 2, 2);

        // Sturdy Pointed Tail
        ctx.fillStyle = '#78350f';
        ctx.fillRect(-s * 1.2, -s * 0.2, s * 0.5, s * 0.35);
        ctx.fillRect(-s * 1.6, -s * 0.1, s * 0.5, 2);

        // Signature Massive Neck Frill with Spiked Rim
        ctx.fillStyle = '#92400e';
        ctx.fillRect(s * 0.4, -s * 0.95, s * 0.4, s * 0.9);
        ctx.fillStyle = '#fef08a';
        ctx.fillRect(s * 0.35, -s * 1.05, 2, 2);
        ctx.fillRect(s * 0.55, -s * 1.05, 2, 2);
        ctx.fillRect(s * 0.75, -s * 0.95, 2, 2);

        // Snout & Beak
        ctx.fillStyle = '#b45309';
        ctx.fillRect(s * 0.7, -s * 0.4, s * 0.65, s * 0.5);
        ctx.fillStyle = '#451a03';
        ctx.fillRect(s * 1.2, -s * 0.2, 2.5, 3);

        // Two Prominent Long Brow Horns
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(s * 0.85, -s * 0.8, s * 0.6, 2.5);
        ctx.fillRect(s * 0.9, -s * 0.65, s * 0.6, 2.5);
        // Snout Horn
        ctx.fillRect(s * 1.15, -s * 0.5, 2.5, 3.5);

        // Eye
        ctx.fillStyle = '#000000';
        ctx.fillRect(s * 0.85, -s * 0.35, 2, 2);

        ctx.restore();
    }

    renderVelociraptor(ctx, ent, px, py, size) {
        ctx.save();
        ctx.translate(px, py);
        if (ent.facingLeft) ctx.scale(-1, 1);
        const s = size * 0.8;
        const step = Math.sin(this.animTime * 9) * 2;

        // Digitigrade Runner Legs
        ctx.fillStyle = '#991b1b';
        ctx.fillRect(-s * 0.4, s * 0.15 + step, s * 0.25, s * 0.65);
        ctx.fillRect(s * 0.1, s * 0.15 - step, s * 0.25, s * 0.65);

        // Iconic Raised Sickle Claws
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(-s * 0.55, s * 0.65 + step, 2, -3);
        ctx.fillRect(-s * 0.4, s * 0.75 + step, 3, 2);
        ctx.fillRect(-s * 0.05, s * 0.65 - step, 2, -3);
        ctx.fillRect(s * 0.1, s * 0.75 - step, 3, 2);

        // Sleek Aerodynamic Feathered Torso
        ctx.fillStyle = '#dc2626';
        ctx.fillRect(-s * 0.6, -s * 0.4, s * 1.1, s * 0.65);
        ctx.fillStyle = '#f97316';
        ctx.fillRect(-s * 0.4, -s * 0.3, s * 0.7, s * 0.4);

        // Stiff Balance Tail with Feather Fan
        ctx.fillStyle = '#991b1b';
        ctx.fillRect(-s * 1.2, -s * 0.25, s * 0.7, s * 0.25);
        ctx.fillRect(-s * 1.8, -s * 0.2, s * 0.7, 2);
        ctx.fillStyle = '#facc15';
        ctx.fillRect(-s * 2.0, -s * 0.25, 4, 3);

        // Forward Grasping Arms with Sharp Talons
        ctx.fillStyle = '#dc2626';
        ctx.fillRect(s * 0.3, -s * 0.15, s * 0.45, 2);
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(s * 0.7, -s * 0.1, 2, 2.5);

        // Agile Snout & Head Crest
        ctx.fillStyle = '#b91c1c';
        ctx.fillRect(s * 0.4, -s * 0.6, s * 0.75, s * 0.45);
        ctx.fillStyle = '#facc15';
        ctx.fillRect(s * 0.3, -s * 0.75, s * 0.4, 2);

        // Piercing Predator Eye
        ctx.fillStyle = '#fef08a';
        ctx.fillRect(s * 0.65, -s * 0.55, 2.5, 2.5);
        ctx.fillStyle = '#000000';
        ctx.fillRect(s * 0.68, -s * 0.55, 1, 2.5);

        // Lower Jaw & Teeth
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(s * 0.8, -s * 0.3, 1.5, 1.5);
        ctx.fillRect(s * 0.95, -s * 0.3, 1.5, 1.5);

        ctx.restore();
    }

    renderPterodactyl(ctx, ent, px, py, size) {
        ctx.save();
        ctx.translate(px, py);
        if (ent.facingLeft) ctx.scale(-1, 1);
        const s = size * 0.9;
        const flap = Math.sin(this.animTime * 8) * 4;

        // Wide Leather-Membrane Wings
        ctx.fillStyle = '#0284c7';
        ctx.fillRect(-s * 1.5, -s * 0.8 + flap, s * 1.4, s * 0.5);
        ctx.fillRect(s * 0.3, -s * 0.8 + flap, s * 1.4, s * 0.5);
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(-s * 1.7, -s * 0.6 + flap, s * 1.3, s * 0.35);
        ctx.fillRect(s * 0.5, -s * 0.6 + flap, s * 1.3, s * 0.35);

        // Wing Strut Bones
        ctx.fillStyle = '#bae6fd';
        ctx.fillRect(-s * 1.6, -s * 0.85 + flap, s * 1.5, 1.5);
        ctx.fillRect(s * 0.3, -s * 0.85 + flap, s * 1.5, 1.5);

        // Aerodynamic Torso
        ctx.fillStyle = '#0369a1';
        ctx.fillRect(-s * 0.4, -s * 0.5, s * 0.8, s * 0.8);
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(-s * 0.25, -s * 0.4, s * 0.5, s * 0.5);

        // Aerial Talons
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(-s * 0.2, s * 0.25, 2, 3);
        ctx.fillRect(s * 0.1, s * 0.25, 2, 3);

        // Elongated Backward Cranial Crest
        ctx.fillStyle = '#0284c7';
        ctx.fillRect(-s * 0.8, -s * 0.9, s * 0.7, 2.5);
        ctx.fillStyle = '#0369a1';
        ctx.fillRect(0, -s * 0.75, s * 0.5, s * 0.4);

        // Long Fishing Beak
        ctx.fillStyle = '#f59e0b';
        ctx.fillRect(s * 0.4, -s * 0.7, s * 0.8, 2.5);
        ctx.fillRect(s * 0.4, -s * 0.55, s * 0.7, 2);

        // Raptor Eye
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(s * 0.2, -s * 0.7, 2, 2);
        ctx.fillStyle = '#000000';
        ctx.fillRect(s * 0.25, -s * 0.7, 1, 2);

        ctx.restore();
    }

    renderBrachiosaurus(ctx, ent, px, py, size) {
        ctx.save();
        ctx.translate(px, py);
        if (ent.facingLeft) ctx.scale(-1, 1);
        const s = size * 1.15;
        const step = Math.sin(this.animTime * 4) * 1.5;

        // Colossal Pillar Stomp Legs
        ctx.fillStyle = '#14532d';
        ctx.fillRect(-s * 0.7, s * 0.2 + step, s * 0.35, s * 0.65);
        ctx.fillRect(-s * 0.2, s * 0.2 - step, s * 0.35, s * 0.65);
        ctx.fillRect(s * 0.2, s * 0.2 + step, s * 0.35, s * 0.65);
        ctx.fillRect(s * 0.6, s * 0.2 - step, s * 0.35, s * 0.65);
        ctx.fillStyle = '#052e16';
        ctx.fillRect(-s * 0.75, s * 0.8 + step, s * 0.45, 2);
        ctx.fillRect(-s * 0.25, s * 0.8 - step, s * 0.45, 2);
        ctx.fillRect(s * 0.15, s * 0.8 + step, s * 0.45, 2);
        ctx.fillRect(s * 0.55, s * 0.8 - step, s * 0.45, 2);

        // Massive Domed Bulk Torso
        ctx.fillStyle = '#166534';
        ctx.fillRect(-s * 0.8, -s * 0.4, s * 1.6, s * 0.85);
        ctx.fillStyle = '#22c55e';
        ctx.fillRect(-s * 0.6, -s * 0.3, s * 1.2, s * 0.5);

        // Pebble/Scute scale spots
        ctx.fillStyle = '#475569';
        ctx.fillRect(-s * 0.5, -s * 0.2, 2.5, 2.5);
        ctx.fillRect(0, -s * 0.2, 2.5, 2.5);
        ctx.fillRect(s * 0.4, -s * 0.2, 2.5, 2.5);

        // Trailing Heavy Whip Tail
        ctx.fillStyle = '#14532d';
        ctx.fillRect(-s * 1.3, -s * 0.15, s * 0.6, s * 0.4);
        ctx.fillRect(-s * 1.8, 0, s * 0.6, s * 0.25);
        ctx.fillRect(-s * 2.3, s * 0.1, s * 0.6, 2);

        // Towering Soaring Neck
        ctx.fillStyle = '#166534';
        ctx.fillRect(s * 0.6, -s * 0.8, s * 0.35, s * 0.6);
        ctx.fillRect(s * 0.7, -s * 1.3, s * 0.3, s * 0.6);
        ctx.fillRect(s * 0.8, -s * 1.8, s * 0.25, s * 0.6);

        // Crown Head & Nasal Crest
        ctx.fillStyle = '#14532d';
        ctx.fillRect(s * 0.8, -s * 2.0, s * 0.45, s * 0.3);
        ctx.fillStyle = '#22c55e';
        ctx.fillRect(s * 0.9, -s * 2.1, 2, 2);

        // Eye
        ctx.fillStyle = '#000000';
        ctx.fillRect(s * 0.95, -s * 1.95, 1.5, 1.5);

        ctx.restore();
    }

    renderFrostDragon(ctx, ent, px, py, size) {
        ctx.save();
        ctx.translate(px, py);
        if (ent.facingLeft) ctx.scale(-1, 1);
        const s = size * 0.95;
        const flap = Math.sin(this.animTime * 7) * 4;

        // Glacial Crystalline Wings
        ctx.fillStyle = '#0284c7';
        ctx.fillRect(-s * 1.5, -s * 0.9 + flap, s * 1.4, s * 0.7);
        ctx.fillRect(s * 0.3, -s * 0.9 + flap, s * 1.4, s * 0.7);
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(-s * 1.4, -s * 0.7 + flap, s * 1.1, s * 0.4);
        ctx.fillRect(s * 0.5, -s * 0.7 + flap, s * 1.1, s * 0.4);
        ctx.fillStyle = '#a5f3fc';
        ctx.fillRect(-s * 1.6, -s * 0.95 + flap, s * 1.5, 1.5);
        ctx.fillRect(s * 0.3, -s * 0.95 + flap, s * 1.5, 1.5);

        // Dragon Body & Frost Plating
        ctx.fillStyle = '#0369a1';
        ctx.fillRect(-s * 0.6, -s * 0.5, s * 1.1, s * 0.9);
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(-s * 0.4, -s * 0.35, s * 0.7, s * 0.6);

        // Ice Crystal Spine Spikes
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(-s * 0.5, -s * 0.7, 2, 3);
        ctx.fillRect(-s * 0.2, -s * 0.7, 2, 3);
        ctx.fillRect(s * 0.1, -s * 0.7, 2, 3);

        // Serpentine Tail with Ice Trident
        ctx.fillStyle = '#0284c7';
        ctx.fillRect(-s * 1.1, -s * 0.2, s * 0.6, s * 0.35);
        ctx.fillRect(-s * 1.6, -s * 0.1, s * 0.6, 2.5);
        ctx.fillStyle = '#a5f3fc';
        ctx.fillRect(-s * 1.9, -s * 0.25, 4, 6);
        ctx.fillRect(-s * 2.1, -s * 0.15, 3, 3);

        // Dragon Head & Ice Crystal Horns
        ctx.fillStyle = '#0369a1';
        ctx.fillRect(s * 0.45, -s * 0.65, s * 0.7, s * 0.5);
        ctx.fillStyle = '#a5f3fc';
        ctx.fillRect(s * 0.4, -s * 0.9, 2.5, 4);
        ctx.fillRect(s * 0.6, -s * 0.9, 2.5, 4);

        // Glowing Freezing-Cyan Eye
        ctx.fillStyle = '#00ffff';
        ctx.fillRect(s * 0.75, -s * 0.55, 3, 2.5);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(s * 0.8, -s * 0.55, 1, 1);

        ctx.restore();
    }

    renderShadowDragon(ctx, ent, px, py, size) {
        ctx.save();
        ctx.translate(px, py);
        if (ent.facingLeft) ctx.scale(-1, 1);
        const s = size * 0.95;
        const flap = Math.sin(this.animTime * 7) * 4;

        // Netherflame Void Wings
        ctx.fillStyle = '#1e1b4b';
        ctx.fillRect(-s * 1.5, -s * 0.9 + flap, s * 1.4, s * 0.7);
        ctx.fillRect(s * 0.3, -s * 0.9 + flap, s * 1.4, s * 0.7);
        ctx.fillStyle = '#581c87';
        ctx.fillRect(-s * 1.4, -s * 0.7 + flap, s * 1.1, s * 0.4);
        ctx.fillRect(s * 0.5, -s * 0.7 + flap, s * 1.1, s * 0.4);
        ctx.fillStyle = '#a855f7';
        ctx.fillRect(-s * 1.7, -s * 0.85 + flap, 3, 3);
        ctx.fillRect(s * 1.5, -s * 0.85 + flap, 3, 3);

        // Abyssal Scaled Torso
        ctx.fillStyle = '#0f051d';
        ctx.fillRect(-s * 0.6, -s * 0.5, s * 1.1, s * 0.9);
        ctx.fillStyle = '#3b0764';
        ctx.fillRect(-s * 0.4, -s * 0.35, s * 0.7, s * 0.6);

        // Twilight Dorsal Spikes
        ctx.fillStyle = '#7e22ce';
        ctx.fillRect(-s * 0.5, -s * 0.7, 2, 3);
        ctx.fillRect(-s * 0.2, -s * 0.7, 2, 3);
        ctx.fillRect(s * 0.1, -s * 0.7, 2, 3);

        // Spiked Shadow Tail
        ctx.fillStyle = '#0f051d';
        ctx.fillRect(-s * 1.1, -s * 0.2, s * 0.6, s * 0.35);
        ctx.fillRect(-s * 1.6, -s * 0.1, s * 0.6, 2.5);
        ctx.fillStyle = '#7e22ce';
        ctx.fillRect(-s * 1.8, -s * 0.2, 3, 4);

        // Skull & Void Horns
        ctx.fillStyle = '#0f051d';
        ctx.fillRect(s * 0.45, -s * 0.65, s * 0.7, s * 0.5);
        ctx.fillStyle = '#581c87';
        ctx.fillRect(s * 0.35, -s * 0.95, 2.5, 5);
        ctx.fillRect(s * 0.55, -s * 0.95, 2.5, 5);

        // Piercing Void Magenta Eyes
        ctx.fillStyle = '#f43f5e';
        ctx.fillRect(s * 0.75, -s * 0.55, 3, 2.5);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(s * 0.8, -s * 0.55, 1, 1);

        ctx.restore();
    }

    renderStormDragon(ctx, ent, px, py, size) {
        ctx.save();
        ctx.translate(px, py);
        if (ent.facingLeft) ctx.scale(-1, 1);
        const s = size * 0.95;
        const flap = Math.sin(this.animTime * 8) * 4;

        // Lightning-Bolt Shaped Wings
        ctx.fillStyle = '#0e7490';
        ctx.fillRect(-s * 1.5, -s * 0.9 + flap, s * 1.4, s * 0.7);
        ctx.fillRect(s * 0.3, -s * 0.9 + flap, s * 1.4, s * 0.7);
        ctx.fillStyle = '#06b6d4';
        ctx.fillRect(-s * 1.3, -s * 0.7 + flap, s * 1.0, s * 0.4);
        ctx.fillRect(s * 0.5, -s * 0.7 + flap, s * 1.0, s * 0.4);
        ctx.fillStyle = '#facc15';
        ctx.fillRect(-s * 1.6, -s * 0.95 + flap, 3, 3);
        ctx.fillRect(s * 1.5, -s * 0.95 + flap, 3, 3);

        // Electrified Scale Torso
        ctx.fillStyle = '#155e75';
        ctx.fillRect(-s * 0.6, -s * 0.5, s * 1.1, s * 0.9);
        ctx.fillStyle = '#06b6d4';
        ctx.fillRect(-s * 0.4, -s * 0.35, s * 0.7, s * 0.6);

        // Electric Spine Conductors
        ctx.fillStyle = '#facc15';
        ctx.fillRect(-s * 0.5, -s * 0.7, 2, 3);
        ctx.fillRect(-s * 0.2, -s * 0.7, 2, 3);
        ctx.fillRect(s * 0.1, -s * 0.7, 2, 3);

        // Forked Thunder Tail
        ctx.fillStyle = '#155e75';
        ctx.fillRect(-s * 1.1, -s * 0.2, s * 0.6, s * 0.35);
        ctx.fillRect(-s * 1.6, -s * 0.1, s * 0.6, 2.5);
        ctx.fillStyle = '#facc15';
        ctx.fillRect(-s * 1.9, -s * 0.25, 4, 2);
        ctx.fillRect(-s * 1.9, 0, 4, 2);

        // Storm Dragon Head & Lightning Horns
        ctx.fillStyle = '#155e75';
        ctx.fillRect(s * 0.45, -s * 0.65, s * 0.7, s * 0.5);
        ctx.fillStyle = '#facc15';
        ctx.fillRect(s * 0.4, -s * 0.95, 2.5, 5);
        ctx.fillRect(s * 0.6, -s * 0.95, 2.5, 5);

        // Electric Gold High-Voltage Eyes
        ctx.fillStyle = '#fef08a';
        ctx.fillRect(s * 0.75, -s * 0.55, 3, 2.5);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(s * 0.8, -s * 0.55, 1, 1);

        ctx.restore();
    }

    renderDarkMatterColossus(ctx, ent, px, py, size) {
        ctx.save();
        ctx.translate(px, py);
        if (ent.facingLeft) ctx.scale(-1, 1);
        const s = size * 0.9;
        const walkBob = Math.sin(this.animTime * 4) * 1.5;

        // Dark Cosmic Pillar Legs
        ctx.fillStyle = '#1e1b4b';
        ctx.fillRect(-s * 0.55, s * 0.2 + walkBob, s * 0.45, s * 0.8);
        ctx.fillRect(s * 0.1, s * 0.2 - walkBob, s * 0.45, s * 0.8);
        ctx.fillStyle = '#312e81';
        ctx.fillRect(-s * 0.6, s * 0.85 + walkBob, s * 0.55, 2.5);
        ctx.fillRect(s * 0.05, s * 0.85 - walkBob, s * 0.55, 2.5);

        // Heavy Void Torso
        ctx.fillStyle = '#312e81';
        ctx.fillRect(-s * 0.7, -s * 0.6, s * 1.4, s * 0.95);
        ctx.fillStyle = '#4338ca';
        ctx.fillRect(-s * 0.55, -s * 0.5, s * 1.1, s * 0.75);

        // Event Horizon Core in Chest (Pulsing Singularity)
        const pulse = Math.sin(this.animTime * 6) * 1.5;
        ctx.fillStyle = '#000000';
        ctx.fillRect(-s * 0.3, -s * 0.35, s * 0.6, s * 0.5);
        ctx.fillStyle = '#818cf8';
        ctx.fillRect(-s * 0.2, -s * 0.25, s * 0.4, 1.5);
        ctx.fillStyle = '#ec4899';
        ctx.fillRect(-s * 0.15, -s * 0.15 + pulse * 0.2, s * 0.3, 1.5);

        // Huge Monolith Shoulders & Crushing Fists
        ctx.fillStyle = '#4338ca';
        ctx.fillRect(-s * 0.95, -s * 0.65, s * 0.4, s * 0.5);
        ctx.fillRect(s * 0.55, -s * 0.65, s * 0.4, s * 0.5);
        ctx.fillStyle = '#1e1b4b';
        ctx.fillRect(-s * 0.9, -s * 0.15 + walkBob, s * 0.35, s * 0.45);
        ctx.fillRect(s * 0.55, -s * 0.15 - walkBob, s * 0.35, s * 0.45);

        // Void Horned Brow & Celestial Gaze
        ctx.fillStyle = '#312e81';
        ctx.fillRect(-s * 0.35, -s * 0.95, s * 0.7, s * 0.4);
        ctx.fillStyle = '#6366f1';
        ctx.fillRect(-s * 0.45, -s * 1.15, 2, s * 0.3);
        ctx.fillRect(s * 0.35, -s * 1.15, 2, s * 0.3);

        // Glowing Magenta Void Eyes
        ctx.fillStyle = '#ec4899';
        ctx.fillRect(-s * 0.2, -s * 0.85, 2, 2);
        ctx.fillRect(s * 0.1, -s * 0.85, 2, 2);

        ctx.restore();
    }

    renderPhoenixKnight(ctx, ent, px, py, size) {
        ctx.save();
        ctx.translate(px, py);
        if (ent.facingLeft) ctx.scale(-1, 1);
        const s = size * 0.9;
        const flap = Math.sin(this.animTime * 7) * 3;

        // Flaming Feathered Wings
        ctx.fillStyle = '#ea580c';
        ctx.fillRect(-s * 1.2, -s * 0.8 + flap, s * 0.9, s * 0.5);
        ctx.fillRect(s * 0.3, -s * 0.8 + flap, s * 0.9, s * 0.5);
        ctx.fillStyle = '#facc15';
        ctx.fillRect(-s * 1.0, -s * 0.6 + flap, s * 0.6, s * 0.3);
        ctx.fillRect(s * 0.4, -s * 0.6 + flap, s * 0.6, s * 0.3);

        // Golden Armored Greaves
        ctx.fillStyle = '#b45309';
        ctx.fillRect(-s * 0.35, s * 0.2, 2.5, s * 0.6);
        ctx.fillRect(s * 0.1, s * 0.2, 2.5, s * 0.6);

        // Solar Cuirass & Tabard
        ctx.fillStyle = '#f97316';
        ctx.fillRect(-s * 0.4, -s * 0.4, s * 0.8, s * 0.7);
        ctx.fillStyle = '#fbbf24';
        ctx.fillRect(-s * 0.25, -s * 0.3, s * 0.5, s * 0.5);

        // Knight Greathelm & Fiery Crest
        ctx.fillStyle = '#f59e0b';
        ctx.fillRect(-s * 0.3, -s * 0.8, s * 0.6, s * 0.45);
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(-s * 0.1, -s * 1.15, 2, s * 0.4);
        ctx.fillRect(0, -s * 1.25, 2, s * 0.4);

        // Visor Glow
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(-s * 0.15, -s * 0.65, s * 0.35, 1.5);

        // Radiant Solar Blade
        ctx.fillStyle = '#fbbf24';
        ctx.fillRect(s * 0.45, -s * 0.9, 1.8, s * 1.1);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(s * 0.5, -s * 1.05, 1, s * 0.3);

        ctx.restore();
    }

    renderThunderBird(ctx, ent, px, py, size) {
        ctx.save();
        ctx.translate(px, py);
        if (ent.facingLeft) ctx.scale(-1, 1);
        const s = size * 0.85;
        const wingFlap = Math.sin(this.animTime * 9) * 4;

        // Wide Storm Wings with Electric Tips
        ctx.fillStyle = '#0369a1';
        ctx.fillRect(-s * 1.4, -s * 0.6 + wingFlap, s * 1.3, s * 0.5);
        ctx.fillRect(s * 0.1, -s * 0.6 + wingFlap, s * 1.3, s * 0.5);
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(-s * 1.2, -s * 0.4 + wingFlap, s * 0.9, s * 0.3);
        ctx.fillRect(s * 0.3, -s * 0.4 + wingFlap, s * 0.9, s * 0.3);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(-s * 1.5, -s * 0.65 + wingFlap, 2, 2);
        ctx.fillRect(s * 1.3, -s * 0.65 + wingFlap, 2, 2);

        // Aerodynamic Falcon Body
        ctx.fillStyle = '#0284c7';
        ctx.fillRect(-s * 0.4, -s * 0.4, s * 0.8, s * 0.9);
        ctx.fillStyle = '#e0f2fe';
        ctx.fillRect(-s * 0.25, -s * 0.2, s * 0.5, s * 0.6);

        // Raptor Head & Hooked Gold Beak
        ctx.fillStyle = '#0369a1';
        ctx.fillRect(s * 0.2, -s * 0.7, s * 0.55, s * 0.45);
        ctx.fillStyle = '#facc15';
        ctx.fillRect(s * 0.65, -s * 0.55, s * 0.35, 2.5);
        ctx.fillRect(s * 0.8, -s * 0.45, 2, 2);

        // Lightning Feather Crest
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(-s * 0.1, -s * 0.95, 2, 4);
        ctx.fillRect(s * 0.1, -s * 1.05, 2, 4);

        // Electric Gold Eye
        ctx.fillStyle = '#fef08a';
        ctx.fillRect(s * 0.35, -s * 0.65, 2, 2);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(s * 0.4, -s * 0.65, 1, 1);

        // Tail Plumage
        ctx.fillStyle = '#0369a1';
        ctx.fillRect(-s * 0.9, s * 0.1, s * 0.55, 3);
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(-s * 1.1, s * 0.15, s * 0.3, 2);

        ctx.restore();
    }

    renderCyberDragon(ctx, ent, px, py, size) {
        ctx.save();
        ctx.translate(px, py);
        if (ent.facingLeft) ctx.scale(-1, 1);
        const s = size * 0.85;
        const wingFlap = Math.sin(this.animTime * 8) * 3.5;

        // High-Tech Cyber Wings with Neon Thrusters
        ctx.fillStyle = '#334155';
        ctx.fillRect(-s * 1.4, -s * 0.8 + wingFlap, s * 1.3, s * 0.6);
        ctx.fillRect(s * 0.2, -s * 0.8 + wingFlap, s * 1.3, s * 0.6);
        ctx.fillStyle = '#06b6d4';
        ctx.fillRect(-s * 1.3, -s * 0.6 + wingFlap, s * 1.0, 2);
        ctx.fillRect(s * 0.3, -s * 0.6 + wingFlap, s * 1.0, 2);
        ctx.fillStyle = '#00e5ff';
        ctx.fillRect(-s * 1.5, -s * 0.8 + wingFlap, 2, 2);
        ctx.fillRect(s * 1.4, -s * 0.8 + wingFlap, 2, 2);

        // Plated Titanium Mecha Torso
        ctx.fillStyle = '#475569';
        ctx.fillRect(-s * 0.7, -s * 0.5, s * 1.4, s * 0.9);
        ctx.fillStyle = '#64748b';
        ctx.fillRect(-s * 0.5, -s * 0.4, s * 1.0, s * 0.7);

        // Neon Energy Heat Sink Ribs
        ctx.fillStyle = '#06b6d4';
        ctx.fillRect(-s * 0.3, -s * 0.3, 2, s * 0.5);
        ctx.fillRect(0, -s * 0.3, 2, s * 0.5);
        ctx.fillRect(s * 0.3, -s * 0.3, 2, s * 0.5);

        // Mechanical Dragon Skull & Twin Laser Pods
        ctx.fillStyle = '#334155';
        ctx.fillRect(s * 0.5, -s * 0.7, s * 0.7, s * 0.5);
        ctx.fillStyle = '#06b6d4';
        ctx.fillRect(s * 0.6, -s * 0.95, 2, 4);
        ctx.fillRect(s * 0.8, -s * 0.95, 2, 4);

        // Cyan Laser Visor Eye
        ctx.fillStyle = '#00e5ff';
        ctx.fillRect(s * 0.75, -s * 0.6, 3, 1.5);

        // Segmented Cyber Tail with Stabilizers
        ctx.fillStyle = '#475569';
        ctx.fillRect(-s * 1.1, -s * 0.1, s * 0.5, s * 0.3);
        ctx.fillRect(-s * 1.6, 0, s * 0.6, 2.5);
        ctx.fillStyle = '#06b6d4';
        ctx.fillRect(-s * 1.8, -2, 3, 5);

        ctx.restore();
    }

    renderSwampBehemoth(ctx, ent, px, py, size) {
        ctx.save();
        ctx.translate(px, py);
        if (ent.facingLeft) ctx.scale(-1, 1);
        const s = size * 0.85;
        const step = Math.sin(this.animTime * 5) * 1.5;

        // Heavy Swamp Pillar Legs
        ctx.fillStyle = '#14532d';
        ctx.fillRect(-s * 0.6, s * 0.2 + step, s * 0.35, s * 0.6);
        ctx.fillRect(-s * 0.1, s * 0.2 - step, s * 0.35, s * 0.6);
        ctx.fillRect(s * 0.4, s * 0.2 + step, s * 0.35, s * 0.6);

        // Massive Primordial Beast Body
        ctx.fillStyle = '#166534';
        ctx.fillRect(-s * 0.8, -s * 0.5, s * 1.6, s * 0.9);
        ctx.fillStyle = '#14532d';
        ctx.fillRect(-s * 0.7, -s * 0.4, s * 1.4, s * 0.7);

        // Toxic Acid Pustules on Back
        ctx.fillStyle = '#84cc16';
        ctx.fillRect(-s * 0.5, -s * 0.75, 3, 3);
        ctx.fillRect(-s * 0.1, -s * 0.8, 4, 3.5);
        ctx.fillRect(s * 0.3, -s * 0.75, 3, 3);
        ctx.fillStyle = '#4ade80';
        ctx.fillRect(-s * 0.05, -s * 0.75, 2, 2);

        // Massive Gaping Sludge Jaws
        ctx.fillStyle = '#14532d';
        ctx.fillRect(s * 0.6, -s * 0.4, s * 0.6, s * 0.6);
        ctx.fillStyle = '#166534';
        ctx.fillRect(s * 0.7, -s * 0.6, s * 0.5, s * 0.3);

        // Dripping Acid Venom Fangs
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(s * 0.8, -s * 0.3, 1.5, 2.5);
        ctx.fillStyle = '#84cc16';
        ctx.fillRect(s * 0.8, s * 0.05, 1.5, 2);

        // Murky Amber Eyes
        ctx.fillStyle = '#eab308';
        ctx.fillRect(s * 0.75, -s * 0.5, 2, 2);

        ctx.restore();
    }

    renderMammoth(ctx, ent, px, py, size) {
        ctx.save();
        ctx.translate(px, py);
        if (ent.facingLeft) ctx.scale(-1, 1);
        const s = size * 0.85;
        const walk = Math.sin(this.animTime * 5) * 1.5;

        // Heavy Sturdy Pillar Legs
        ctx.fillStyle = '#54371c';
        ctx.fillRect(-s * 0.6, s * 0.2 + walk, s * 0.35, s * 0.7);
        ctx.fillRect(s * 0.25, s * 0.2 - walk, s * 0.35, s * 0.7);
        ctx.fillStyle = '#78350f';
        ctx.fillRect(-s * 0.3, s * 0.2 - walk, s * 0.3, s * 0.7);
        ctx.fillRect(s * 0.0, s * 0.2 + walk, s * 0.3, s * 0.7);

        // Dense Shaggy Woolly Body & Hump
        ctx.fillStyle = '#78350f';
        ctx.fillRect(-s * 0.8, -s * 0.5, s * 1.6, s * 0.9);
        ctx.fillStyle = '#92400e';
        ctx.fillRect(-s * 0.6, -s * 0.8, s * 0.9, s * 0.4);
        ctx.fillStyle = '#54371c';
        ctx.fillRect(-s * 0.7, -s * 0.3, s * 1.4, s * 0.6);

        // Massive Domed Head
        ctx.fillStyle = '#78350f';
        ctx.fillRect(s * 0.4, -s * 0.7, s * 0.6, s * 0.65);
        ctx.fillStyle = '#92400e';
        ctx.fillRect(s * 0.45, -s * 0.85, s * 0.4, s * 0.25);

        // Swaying Trunk
        const trunkSway = Math.sin(this.animTime * 4) * 2;
        ctx.fillStyle = '#54371c';
        ctx.fillRect(s * 0.85, -s * 0.3, 2.5, s * 0.5);
        ctx.fillRect(s * 0.95 + trunkSway * 0.5, s * 0.15, 2.5, s * 0.4);

        // Huge Curving Ivory Tusks
        ctx.fillStyle = '#fef3c7';
        ctx.fillRect(s * 0.7, -s * 0.2, s * 0.5, 2.5);
        ctx.fillRect(s * 1.1, -s * 0.35, 2.5, s * 0.4);
        ctx.fillRect(s * 1.15, -s * 0.55, 2, 2.5);

        // Kind Brown Eye
        ctx.fillStyle = '#000000';
        ctx.fillRect(s * 0.6, -s * 0.55, 2, 2);

        // Tail
        ctx.fillStyle = '#54371c';
        ctx.fillRect(-s * 0.95, -s * 0.2, 2, s * 0.45);

        ctx.restore();
    }

    renderCustomModularCreature(ctx, ent, px, py, size) {
        ctx.save();
        ctx.translate(px, py);
        if (ent.facingLeft) ctx.scale(-1, 1);

        const bp = (ent.customData && ent.customData.bodyParts) || ent.bodyParts || {
            head: 'humanoid', body: 'standard', arms: 'bipedal_arms', legs: 'bipedal_legs', back: 'none'
        };
        const col = (ent.customData && ent.customData.colors) || ent.colors || {
            primary: ent.color || '#facc15',
            secondary: '#3b82f6',
            glow: '#00ffff'
        };

        const primaryCol = col.primary || ent.color || '#facc15';
        const secCol = col.secondary || '#3b82f6';
        const glowCol = col.glow || '#00ffff';

        const s = size * 0.8;
        const walkBob = Math.sin(this.animTime * 9) * 0.8;
        const legStep = Math.sin(this.animTime * 8) * 1.5;

        // 1. Back Accessories
        if (bp.back === 'demon_wings') {
            ctx.fillStyle = secCol;
            ctx.fillRect(-s * 1.5, -s * 0.9, s * 0.9, 1.5);
            ctx.fillRect(-s * 1.7, -s * 0.5, s * 1.1, 1.5);
            ctx.fillRect(s * 0.6, -s * 0.9, s * 0.9, 1.5);
            ctx.fillRect(s * 0.6, -s * 0.5, s * 1.1, 1.5);
        } else if (bp.back === 'angel_wings') {
            ctx.fillStyle = '#ffffff';
            const flap = Math.sin(this.animTime * 10) * 1.5;
            ctx.fillRect(-s * 1.4, -s * 0.8 + flap, s * 0.8, 2);
            ctx.fillRect(s * 0.6, -s * 0.8 - flap, s * 0.8, 2);
        } else if (bp.back === 'spiky_carapace') {
            ctx.fillStyle = secCol;
            ctx.fillRect(-s * 0.8, -s * 0.6, 2, 2);
            ctx.fillRect(s * 0.6, -s * 0.6, 2, 2);
            ctx.fillRect(-1, -s * 0.8, 2, 2);
        } else if (bp.back === 'energy_exhaust') {
            ctx.fillStyle = '#475569';
            ctx.fillRect(-s * 0.7, -s * 0.8, 2, 3);
            ctx.fillRect(s * 0.5, -s * 0.8, 2, 3);
            ctx.fillStyle = glowCol;
            ctx.fillRect(-s * 0.7, -s * 1.0, 2, 1.5);
            ctx.fillRect(s * 0.5, -s * 1.0, 2, 1.5);
        } else if (bp.back === 'starlight_halo') {
            ctx.strokeStyle = glowCol;
            ctx.lineWidth = 1;
            ctx.strokeRect(-s * 0.6, -s * 1.4, s * 1.2, 2);
        } else if (bp.back === 'dragon_wings') {
            ctx.fillStyle = secCol;
            const flap = Math.sin(this.animTime * 8) * 3;
            ctx.fillRect(-s * 1.6, -s * 0.9 + flap, s * 1.0, s * 0.5);
            ctx.fillRect(s * 0.6, -s * 0.9 + flap, s * 1.0, s * 0.5);
            ctx.fillStyle = glowCol;
            ctx.fillRect(-s * 1.7, -s * 0.95 + flap, 2, 2);
            ctx.fillRect(s * 1.5, -s * 0.95 + flap, 2, 2);
        } else if (bp.back === 'stegosaurus_plates') {
            ctx.fillStyle = secCol;
            ctx.fillRect(-s * 0.8, -s * 0.7, 3, 3);
            ctx.fillRect(-s * 0.3, -s * 0.8, 3.5, 3.5);
            ctx.fillRect(s * 0.2, -s * 0.7, 3, 3);
            ctx.fillStyle = glowCol;
            ctx.fillRect(-s * 0.25, -s * 0.75, 2, 2);
        } else if (bp.back === 'dino_spikes') {
            ctx.fillStyle = secCol;
            for (let k = -3; k <= 2; k += 2) {
                ctx.fillRect(k * 2, -s * 0.7, 1.5, 2.5);
            }
        }

        // 2. Legs / Movement Base
        if (bp.legs === 'bipedal_legs') {
            ctx.fillStyle = secCol;
            ctx.fillRect(-s * 0.4, s * 0.2 + legStep, 1.8, s * 0.7);
            ctx.fillRect(s * 0.2, s * 0.2 - legStep, 1.8, s * 0.7);
        } else if (bp.legs === 'theropod_legs') {
            ctx.fillStyle = secCol;
            ctx.fillRect(-s * 0.5, s * 0.2 + legStep, s * 0.3, s * 0.65);
            ctx.fillRect(s * 0.2, s * 0.2 - legStep, s * 0.3, s * 0.65);
            ctx.fillStyle = '#000000';
            ctx.fillRect(-s * 0.6, s * 0.8 + legStep, s * 0.4, 2);
            ctx.fillRect(s * 0.1, s * 0.8 - legStep, s * 0.4, 2);
        } else if (bp.legs === 'sauropod_pillars') {
            ctx.fillStyle = secCol;
            ctx.fillRect(-s * 0.7, s * 0.2 + legStep, s * 0.35, s * 0.6);
            ctx.fillRect(-s * 0.2, s * 0.2 - legStep, s * 0.35, s * 0.6);
            ctx.fillRect(s * 0.2, s * 0.2 + legStep, s * 0.35, s * 0.6);
            ctx.fillRect(s * 0.55, s * 0.2 - legStep, s * 0.35, s * 0.6);
        } else if (bp.legs === 'quadruped_paws') {
            ctx.fillStyle = secCol;
            ctx.fillRect(-s * 0.7, s * 0.2 + legStep, 2, s * 0.6);
            ctx.fillRect(s * 0.4, s * 0.2 - legStep, 2, s * 0.6);
            ctx.fillRect(-s * 0.3, s * 0.2 - legStep, 1.5, s * 0.6);
            ctx.fillRect(s * 0.1, s * 0.2 + legStep, 1.5, s * 0.6);
        } else if (bp.legs === 'arachnid_legs') {
            ctx.strokeStyle = secCol;
            ctx.lineWidth = 1.2;
            for (let l = -2; l <= 2; l += 2) {
                const w = Math.sin(this.animTime * 8 + l) * 1.5;
                ctx.beginPath();
                ctx.moveTo(-s * 0.4, s * 0.1);
                ctx.lineTo(-s * 0.9, s * 0.5 + w);
                ctx.lineTo(-s * 1.2, s * 0.9);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(s * 0.4, s * 0.1);
                ctx.lineTo(s * 0.9, s * 0.5 - w);
                ctx.lineTo(s * 1.2, s * 0.9);
                ctx.stroke();
            }
        } else if (bp.legs === 'treads') {
            ctx.fillStyle = '#334155';
            ctx.fillRect(-s * 0.7, s * 0.3, s * 1.4, s * 0.5);
            ctx.fillStyle = '#0f172a';
            ctx.fillRect(-s * 0.6, s * 0.4, s * 1.2, 1.5);
        } else if (bp.legs === 'ethereal_wisp') {
            ctx.fillStyle = glowCol;
            const wave = Math.sin(this.animTime * 7) * 1.5;
            ctx.fillRect(-s * 0.4 + wave * 0.5, s * 0.2, s * 0.8, s * 0.6);
            ctx.fillRect(-s * 0.2 - wave * 0.5, s * 0.6, s * 0.4, s * 0.4);
        } else if (bp.legs === 'duck_webbed') {
            ctx.fillStyle = '#f97316';
            ctx.fillRect(-s * 0.5, s * 0.4 + legStep, 2.5, 1.5);
            ctx.fillRect(s * 0.2, s * 0.4 - legStep, 2.5, 1.5);
        }

        // 3. Torso / Body
        ctx.fillStyle = primaryCol;
        ctx.fillRect(-s * 0.5, -s * 0.4 + walkBob, s, s * 0.8);

        if (bp.body === 'armored') {
            ctx.fillStyle = secCol;
            ctx.fillRect(-s * 0.4, -s * 0.35 + walkBob, s * 0.8, s * 0.4);
            ctx.fillStyle = glowCol;
            ctx.fillRect(-1, -s * 0.2 + walkBob, 2, 2);
        } else if (bp.body === 'sauropod_bulk') {
            ctx.fillStyle = primaryCol;
            ctx.fillRect(-s * 0.8, -s * 0.4 + walkBob, s * 1.5, s * 0.85);
            ctx.fillStyle = secCol;
            ctx.fillRect(-s * 0.6, -s * 0.3 + walkBob, s * 1.1, s * 0.5);
        } else if (bp.body === 'dino_armored') {
            ctx.fillStyle = secCol;
            ctx.fillRect(-s * 0.5, -s * 0.4 + walkBob, s, 2);
            ctx.fillRect(-s * 0.4, -s * 0.2 + walkBob, s * 0.8, 2);
            ctx.fillStyle = glowCol;
            ctx.fillRect(-1, -s * 0.1 + walkBob, 2, 2);
        } else if (bp.body === 'dragon_scales') {
            ctx.fillStyle = secCol;
            ctx.fillRect(-s * 0.4, -s * 0.35 + walkBob, s * 0.8, s * 0.7);
            ctx.fillStyle = glowCol;
            ctx.fillRect(-s * 0.2, -s * 0.2 + walkBob, s * 0.4, 3);
        } else if (bp.body === 'muscular') {
            ctx.fillStyle = secCol;
            ctx.fillRect(-s * 0.3, -s * 0.3 + walkBob, 2, s * 0.5);
            ctx.fillRect(s * 0.1, -s * 0.3 + walkBob, 2, s * 0.5);
        } else if (bp.body === 'treant_bark') {
            ctx.fillStyle = '#451a03';
            ctx.fillRect(-s * 0.4, -s * 0.3 + walkBob, 1.5, s * 0.5);
            ctx.fillRect(s * 0.1, -s * 0.2 + walkBob, 1.5, s * 0.4);
        } else if (bp.body === 'chassis') {
            ctx.fillStyle = '#1e293b';
            ctx.fillRect(-s * 0.4, -s * 0.3 + walkBob, s * 0.8, 1.5);
            ctx.fillStyle = glowCol;
            ctx.fillRect(-s * 0.3, -s * 0.1 + walkBob, s * 0.6, 1.5);
        } else if (bp.body === 'crystalline') {
            ctx.fillStyle = glowCol;
            ctx.fillRect(-1.5, -s * 0.25 + walkBob, 3, 3);
        }

        // 4. Arms / Weapons
        if (bp.arms === 'bipedal_arms') {
            ctx.fillStyle = secCol;
            ctx.fillRect(-s * 0.7, -s * 0.3 + walkBob, 1.5, s * 0.6);
            ctx.fillRect(s * 0.5, -s * 0.3 + walkBob, 1.5, s * 0.6);
        } else if (bp.arms === 'raptor_claws') {
            ctx.fillStyle = primaryCol;
            ctx.fillRect(s * 0.3, -s * 0.2 + walkBob, s * 0.4, 2);
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(s * 0.65, -s * 0.15 + walkBob, 2, 2.5);
        } else if (bp.arms === 'pterodactyl_wings') {
            ctx.fillStyle = secCol;
            const wFlap = Math.sin(this.animTime * 8) * 3;
            ctx.fillRect(-s * 1.2, -s * 0.4 + walkBob + wFlap, s * 0.8, s * 0.4);
            ctx.fillRect(s * 0.5, -s * 0.4 + walkBob + wFlap, s * 0.8, s * 0.4);
        } else if (bp.arms === 'dragon_wings') {
            ctx.fillStyle = secCol;
            const wFlap = Math.sin(this.animTime * 8) * 3;
            ctx.fillRect(-s * 1.3, -s * 0.5 + walkBob + wFlap, s * 0.9, s * 0.5);
            ctx.fillRect(s * 0.5, -s * 0.5 + walkBob + wFlap, s * 0.9, s * 0.5);
            ctx.fillStyle = glowCol;
            ctx.fillRect(-s * 1.3, -s * 0.55 + walkBob + wFlap, 2, 2);
            ctx.fillRect(s * 1.3, -s * 0.55 + walkBob + wFlap, 2, 2);
        } else if (bp.arms === 'blade_arms') {
            ctx.fillStyle = '#cbd5e1';
            ctx.fillRect(-s * 0.9, -s * 0.4 + walkBob, 2, s * 0.9);
            ctx.fillRect(s * 0.7, -s * 0.4 + walkBob, 2, s * 0.9);
        } else if (bp.arms === 'blaster_arms') {
            ctx.fillStyle = '#334155';
            ctx.fillRect(s * 0.5, -s * 0.2 + walkBob, s * 0.5, 2.5);
            ctx.fillStyle = glowCol;
            ctx.fillRect(s * 0.9, -s * 0.2 + walkBob, 1.5, 1.5);
        } else if (bp.arms === 'tentacles') {
            ctx.strokeStyle = secCol;
            ctx.lineWidth = 1.2;
            const tw = Math.sin(this.animTime * 8) * 1.5;
            ctx.beginPath();
            ctx.moveTo(-s * 0.5, -s * 0.1 + walkBob);
            ctx.lineTo(-s * 0.9, s * 0.3 + tw);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(s * 0.5, -s * 0.1 + walkBob);
            ctx.lineTo(s * 0.9, s * 0.3 - tw);
            ctx.stroke();
        } else if (bp.arms === 'wood_branches') {
            ctx.fillStyle = '#78350f';
            ctx.fillRect(-s * 0.8, -s * 0.4 + walkBob, s * 0.4, 2);
            ctx.fillRect(s * 0.5, -s * 0.4 + walkBob, s * 0.4, 2);
            ctx.fillStyle = '#15803d';
            ctx.fillRect(-s * 0.9, -s * 0.5 + walkBob, 2, 2);
            ctx.fillRect(s * 0.8, -s * 0.5 + walkBob, 2, 2);
        } else if (bp.arms === 'feather_wings') {
            ctx.fillStyle = primaryCol;
            ctx.fillRect(-s * 0.9, -s * 0.3 + walkBob, 3, s * 0.6);
            ctx.fillRect(s * 0.6, -s * 0.3 + walkBob, 3, s * 0.6);
        }

        // 5. Head
        ctx.fillStyle = primaryCol;
        ctx.fillRect(-s * 0.35, -s * 0.85 + walkBob, s * 0.7, s * 0.5);

        if (bp.head === 'horned') {
            ctx.fillStyle = secCol;
            ctx.fillRect(-s * 0.5, -s * 1.1 + walkBob, 1.5, 2.5);
            ctx.fillRect(s * 0.35, -s * 1.1 + walkBob, 1.5, 2.5);
        } else if (bp.head === 'trex_head') {
            ctx.fillStyle = primaryCol;
            ctx.fillRect(s * 0.3, -s * 0.85 + walkBob, s * 0.7, s * 0.45);
            ctx.fillStyle = '#0f172a';
            ctx.fillRect(s * 0.4, -s * 0.5 + walkBob, s * 0.6, 2);
            ctx.fillStyle = '#f8fafc';
            ctx.fillRect(s * 0.5, -s * 0.55 + walkBob, 1.5, 1.5);
            ctx.fillRect(s * 0.7, -s * 0.55 + walkBob, 1.5, 1.5);
        } else if (bp.head === 'dragon_snout') {
            ctx.fillStyle = primaryCol;
            ctx.fillRect(s * 0.3, -s * 0.8 + walkBob, s * 0.6, s * 0.4);
            ctx.fillStyle = secCol;
            ctx.fillRect(s * 0.1, -s * 1.05 + walkBob, 2, 4);
            ctx.fillRect(s * 0.3, -s * 1.05 + walkBob, 2, 4);
        } else if (bp.head === 'triceratops_horns') {
            ctx.fillStyle = secCol;
            ctx.fillRect(-s * 0.1, -s * 1.1 + walkBob, s * 0.4, s * 0.8);
            ctx.fillStyle = '#f8fafc';
            ctx.fillRect(s * 0.3, -s * 1.0 + walkBob, s * 0.5, 2);
            ctx.fillRect(s * 0.5, -s * 0.7 + walkBob, 2, 2.5);
        } else if (bp.head === 'pterosaur_beak') {
            ctx.fillStyle = secCol;
            ctx.fillRect(-s * 0.6, -s * 0.95 + walkBob, s * 0.6, 2);
            ctx.fillStyle = '#f59e0b';
            ctx.fillRect(s * 0.3, -s * 0.75 + walkBob, s * 0.7, 2);
        } else if (bp.head === 'draconic') {
            ctx.fillStyle = primaryCol;
            ctx.fillRect(s * 0.3, -s * 0.75 + walkBob, 2.5, 2);
        } else if (bp.head === 'cyclops') {
            ctx.fillStyle = primaryCol;
            ctx.fillRect(s * 0.3, -s * 0.75 + walkBob, 2.5, 2);
        } else if (bp.head === 'cyclops') {
            ctx.fillStyle = glowCol;
            ctx.fillRect(-1, -s * 0.75 + walkBob, 2, 2);
        } else if (bp.head === 'treant') {
            ctx.fillStyle = '#15803d';
            ctx.fillRect(-s * 0.5, -s * 1.1 + walkBob, s * 1.0, 2);
        } else if (bp.head === 'robotic') {
            ctx.fillStyle = '#475569';
            ctx.fillRect(-s * 0.4, -s * 0.9 + walkBob, s * 0.8, 1.5);
            ctx.fillStyle = glowCol;
            ctx.fillRect(-s * 0.25, -s * 0.75 + walkBob, s * 0.5, 1.2);
        } else if (bp.head === 'skull') {
            ctx.fillStyle = '#f8fafc';
            ctx.fillRect(-s * 0.3, -s * 0.85 + walkBob, s * 0.6, s * 0.45);
            ctx.fillStyle = '#0f172a';
            ctx.fillRect(-1.5, -s * 0.75 + walkBob, 1, 1);
            ctx.fillRect(0.5, -s * 0.75 + walkBob, 1, 1);
        } else if (bp.head === 'duck') {
            ctx.fillStyle = '#f97316';
            ctx.fillRect(s * 0.3, -s * 0.7 + walkBob, 2.5, 1.5);
        }

        // Eyes (if not cyclops/robotic/skull)
        if (bp.head !== 'cyclops' && bp.head !== 'robotic' && bp.head !== 'skull') {
            ctx.fillStyle = glowCol;
            ctx.fillRect(-1.5, -s * 0.7 + walkBob, 1, 1);
            ctx.fillRect(0.5, -s * 0.7 + walkBob, 1, 1);
        }

        ctx.restore();
    }

    renderExplosiveEggs(eggs) {
        const ctx = this.ctx;
        for (let i = 0; i < eggs.length; i++) {
            const egg = eggs[i];
            if (!egg.active) continue;
            ctx.save();
            ctx.fillStyle = '#fef08a';
            ctx.fillRect(egg.x - 2, egg.y - 3, 4, 5);
            ctx.fillRect(egg.x - 2.5, egg.y - 2, 5, 3);
            ctx.fillStyle = '#ea580c';
            ctx.fillRect(egg.x - 1, egg.y - 1, 1, 1);
            ctx.fillRect(egg.x + 1, egg.y - 2, 1, 1);
            ctx.fillStyle = '#78350f';
            ctx.fillRect(egg.x - 0.5, egg.y - 4, 1, 1.5);
            if (egg.timer % 20 < 10) {
                ctx.fillStyle = '#ef4444';
                ctx.fillRect(egg.x - 0.5, egg.y - 5.5, 1.5, 1.5);
            }
            ctx.restore();
        }
    }

    renderDayNightAtmosphere(ctx, world, entityManager, timeOfDay) {
        if (timeOfDay === undefined || timeOfDay === null) return;
        const t = ((timeOfDay % 24) + 24) % 24;

        let darkness = 0;
        let rTint = 0, gTint = 0, bTint = 0;

        if (t >= 7.5 && t <= 17.0) {
            darkness = 0;
        } else if (t > 17.0 && t < 20.5) {
            const p = (t - 17.0) / 3.5;
            darkness = p * 0.76;
            rTint = Math.floor((1 - Math.abs(p - 0.5) * 2) * 85);
            gTint = Math.floor((1 - Math.abs(p - 0.5) * 2) * 35);
            bTint = Math.floor(p * 50);
        } else if (t >= 20.5 || t < 5.0) {
            darkness = 0.78;
            rTint = 6;
            gTint = 8;
            bTint = 28;
        } else {
            const p = (t - 5.0) / 2.5;
            darkness = (1.0 - p) * 0.76;
            rTint = Math.floor((1 - p) * 80);
            gTint = Math.floor((1 - p) * 45);
            bTint = Math.floor((1 - p) * 15);
        }

        if (darkness <= 0.02 && rTint === 0 && gTint === 0 && bTint === 0) return;

        if (!this.lightingCanvas) {
            this.lightingCanvas = document.createElement('canvas');
            this.lightingCtx = this.lightingCanvas.getContext('2d');
        }
        if (this.lightingCanvas.width !== world.width || this.lightingCanvas.height !== world.height) {
            this.lightingCanvas.width = world.width;
            this.lightingCanvas.height = world.height;
        }

        const lCtx = this.lightingCtx;
        lCtx.clearRect(0, 0, world.width, world.height);

        lCtx.globalCompositeOperation = 'source-over';
        lCtx.fillStyle = `rgba(${rTint || 8}, ${gTint || 10}, ${bTint || 32}, ${darkness})`;
        lCtx.fillRect(0, 0, world.width, world.height);

        lCtx.globalCompositeOperation = 'destination-out';

        const drawLightHole = (lx, ly, radius, intensity = 1.0) => {
            if (lx < -radius || lx > world.width + radius || ly < -radius || ly > world.height + radius) return;
            const grad = lCtx.createRadialGradient(lx, ly, 0, lx, ly, radius);
            grad.addColorStop(0, `rgba(0, 0, 0, ${intensity})`);
            grad.addColorStop(0.5, `rgba(0, 0, 0, ${intensity * 0.6})`);
            grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
            lCtx.fillStyle = grad;
            lCtx.beginPath();
            lCtx.arc(lx, ly, radius, 0, Math.PI * 2);
            lCtx.fill();
        };

        if (entityManager && entityManager.buildings) {
            for (let i = 0; i < entityManager.buildings.length; i++) {
                const b = entityManager.buildings[i];
                if (b.type === 'campfire') {
                    drawLightHole(b.x, b.y, 35, 0.95);
                } else if (b.type === 'plasma_pylon') {
                    drawLightHole(b.x, b.y, 45, 0.98);
                } else if (b.type === 'townhall' || b.type === 'fortress') {
                    drawLightHole(b.x, b.y, 32, 0.85);
                } else if (b.type === 'house' || b.type === 'cottage' || b.type === 'watchtower' || b.type === 'blacksmith') {
                    drawLightHole(b.x, b.y, 22, 0.75);
                }
            }
        }

        if (entityManager && entityManager.entities) {
            for (let i = 0; i < entityManager.entities.length; i++) {
                const ent = entityManager.entities[i];
                if (!ent.active) continue;
                if (ent.isControlled) {
                    drawLightHole(ent.x, ent.y, 42, 0.92);
                } else if (ent.type === 'seraph_angel' || ent.type === 'golden_dragon' || ent.type === 'phoenix') {
                    drawLightHole(ent.x, ent.y, 38, 0.85);
                } else if (ent.type === 'wizard' || ent.type === 'colossus_mech' || ent.type === 'cyber_dragon') {
                    drawLightHole(ent.x, ent.y, 28, 0.75);
                } else if (ent.fire > 0) {
                    drawLightHole(ent.x, ent.y, 24, 0.8);
                }
            }
        }

        if (window.game && window.game.disasterManager) {
            const dm = window.game.disasterManager;
            if (dm.meteors) {
                for (let i = 0; i < dm.meteors.length; i++) {
                    const m = dm.meteors[i];
                    if (m.active) drawLightHole(m.x, m.y, 45, 0.95);
                }
            }
            if (dm.rifts) {
                for (let i = 0; i < dm.rifts.length; i++) {
                    const r = dm.rifts[i];
                    drawLightHole(r.x, r.y, 50, 0.95);
                }
            }
        }

        ctx.drawImage(this.lightingCanvas, 0, 0);

        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        if (entityManager && entityManager.buildings) {
            for (let i = 0; i < entityManager.buildings.length; i++) {
                const b = entityManager.buildings[i];
                if (b.type === 'campfire' || b.type === 'blacksmith') {
                    const rad = 28;
                    const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, rad);
                    grad.addColorStop(0, 'rgba(245, 158, 11, 0.35)');
                    grad.addColorStop(1, 'rgba(245, 158, 11, 0)');
                    ctx.fillStyle = grad;
                    ctx.beginPath(); ctx.arc(b.x, b.y, rad, 0, Math.PI * 2); ctx.fill();
                } else if (b.type === 'plasma_pylon') {
                    const rad = 35;
                    const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, rad);
                    grad.addColorStop(0, 'rgba(56, 189, 248, 0.45)');
                    grad.addColorStop(1, 'rgba(56, 189, 248, 0)');
                    ctx.fillStyle = grad;
                    ctx.beginPath(); ctx.arc(b.x, b.y, rad, 0, Math.PI * 2); ctx.fill();
                }
            }
        }
        ctx.restore();
    }

    renderMinimap(world, entityManager) {
        if (!this.miniCtx) return;
        const mCtx = this.miniCtx;
        const mw = this.minimapCanvas.width;
        const mh = this.minimapCanvas.height;

        mCtx.drawImage(this.tileBuffer, 0, 0, mw, mh);

        // Draw camera viewport rectangle on minimap
        const cam = this.camera;
        const screenWorldW = this.canvas.width / cam.zoom;
        const screenWorldH = this.canvas.height / cam.zoom;
        const vx = ((cam.x - screenWorldW / 2) / world.width) * mw;
        const vy = ((cam.y - screenWorldH / 2) / world.height) * mh;
        const vw = (screenWorldW / world.width) * mw;
        const vh = (screenWorldH / world.height) * mh;

        mCtx.strokeStyle = '#ffffff';
        mCtx.lineWidth = 1.5;
        mCtx.strokeRect(vx, vy, vw, vh);
    }
}

window.Renderer = Renderer;

