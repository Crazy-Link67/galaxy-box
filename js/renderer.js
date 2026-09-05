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
            x: 128,
            y: 72,
            zoom: 3.5,
            minZoom: 1.0,
            maxZoom: 16.0
        };

        // Offscreen buffer for world tile rendering
        this.tileBuffer = document.createElement('canvas');
        this.tileCtx = this.tileBuffer.getContext('2d');
        this.tileImageData = null;

        // Animation counters
        this.animTime = 0;
        this.showGrid = false;
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx.imageSmoothingEnabled = false;
    }

    screenToWorld(screenX, screenY) {
        const x = (screenX - this.canvas.width / 2) / this.camera.zoom + this.camera.x;
        const y = (screenY - this.canvas.height / 2) / this.camera.zoom + this.camera.y;
        return { x, y };
    }

    worldToScreen(worldX, worldY) {
        const x = (worldX - this.camera.x) * this.camera.zoom + this.canvas.width / 2;
        const y = (worldY - this.camera.y) * this.camera.zoom + this.canvas.height / 2;
        return { x, y };
    }

    render(world, entityManager, disasterManager, particleSystem, activeTool, brushSize, mouseWorldPos) {
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
        ctx.translate(-cam.x, -cam.y);

        // 3. Render World Tiles
        this.renderWorldTiles(world);

        // 4. Render Buildings
        this.renderBuildings(entityManager.buildings);

        // 5. Render Disasters
        for (let i = 0; i < disasterManager.blackHoles.length; i++) {
            disasterManager.blackHoles[i].render(ctx);
        }
        for (let i = 0; i < disasterManager.meteors.length; i++) {
            disasterManager.meteors[i].render(ctx);
        }
        for (let i = 0; i < disasterManager.ufos.length; i++) {
            disasterManager.ufos[i].render(ctx);
        }

        // 6. Render Entities
        this.renderEntities(entityManager.entities, entityManager.kingdoms);

        // 7. Render Projectiles
        this.renderProjectiles(entityManager.projectiles);

        // 8. Render Particles
        particleSystem.render(ctx);

        // 9. Render Brush Cursor Indicator
        if (mouseWorldPos && activeTool) {
            this.renderBrushCursor(mouseWorldPos.x, mouseWorldPos.y, brushSize, activeTool);
        }

        ctx.restore();

        // 10. Render Minimap
        this.renderMinimap(world, entityManager);
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
                        case TILES.DEEP_WATER:
                            r = 14 + waterWave * 0.3; g = 44 + waterWave * 0.5; b = 105 + waterWave;
                            break;
                        case TILES.WATER:
                            r = 28 + waterWave * 0.5; g = 100 + waterWave * 0.8; b = 180 + waterWave;
                            break;
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
                        case TILES.LAVA:
                            r = 255; g = 69 + lavaWave; b = 0;
                            break;
                        case TILES.ACID:
                            r = 74; g = 222 + waterWave * 0.8; b = 128;
                            break;
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
                        default:
                            r = 0; g = 0; b = 0;
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

    renderBuildings(buildings) {
        const ctx = this.ctx;
        for (let i = 0; i < buildings.length; i++) {
            const b = buildings[i];
            ctx.fillStyle = b.color;
            ctx.fillRect(b.x - b.width * 0.5, b.y - b.height * 0.5, b.width, b.height);

            // Roof / details
            if (b.type === 'house' || b.type === 'hut') {
                ctx.fillStyle = '#b45309';
                ctx.beginPath();
                ctx.moveTo(b.x - b.width * 0.6, b.y - b.height * 0.5);
                ctx.lineTo(b.x, b.y - b.height * 0.9);
                ctx.lineTo(b.x + b.width * 0.6, b.y - b.height * 0.5);
                ctx.fill();
            } else if (b.type === 'campfire') {
                ctx.fillStyle = Math.random() < 0.5 ? '#f59e0b' : '#ef4444';
                ctx.fillRect(b.x - 0.5, b.y - 1, 1, 1);
            }
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

            // Status Auras
            if (ent.blessed) {
                ctx.strokeStyle = '#facc15';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(px, py, size + 1.5, 0, Math.PI * 2);
                ctx.stroke();
            }
            if (ent.cursed) {
                ctx.strokeStyle = '#7e22ce';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(px, py, size + 1.5, 0, Math.PI * 2);
                ctx.stroke();
            }
            if (ent.frozen > 0) {
                ctx.fillStyle = 'rgba(165, 243, 252, 0.6)';
                ctx.fillRect(px - size - 0.5, py - size - 0.5, size * 2 + 1, size * 2 + 1);
            }

            // Dragon rendering
            if (ent.type === 'dragon') {
                ctx.fillStyle = ent.color;
                const wingSpread = Math.sin(this.animTime * 3) * 3;
                ctx.beginPath();
                ctx.moveTo(px, py - 4);
                ctx.lineTo(px - 7, py + wingSpread);
                ctx.lineTo(px + 7, py + wingSpread);
                ctx.closePath();
                ctx.fill();
                ctx.fillStyle = '#991b1b';
                ctx.fillRect(px - 2, py - 3, 4, 6);
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

                // Main Shell / Carapace
                ctx.fillStyle = '#ea580c';
                ctx.beginPath();
                ctx.ellipse(px, py, s * 1.2, s * 0.9, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = '#9a3412';
                ctx.lineWidth = 1.5;
                ctx.stroke();

                // Huge Pincers / Claws
                const clawSnap = Math.abs(Math.sin(this.animTime * 3)) * 3;
                // Left Pincer
                ctx.fillStyle = '#c2410c';
                ctx.beginPath();
                ctx.arc(px - s * 1.4, py - s * 0.6, s * 0.5, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillRect(px - s * 1.6, py - s * 0.9 - clawSnap, 3, 5);
                // Right Pincer
                ctx.beginPath();
                ctx.arc(px + s * 1.4, py - s * 0.6, s * 0.5, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillRect(px + s * 1.4, py - s * 0.9 - clawSnap, 3, 5);

                // Twin Glowing Laser Eye Stalks
                ctx.fillStyle = '#22c55e';
                ctx.fillRect(px - 4, py - s * 0.9, 2.5, 3);
                ctx.fillRect(px + 2, py - s * 0.9, 2.5, 3);
            }
            // Kaiju Godzilla rendering
            else if (ent.type === 'kaiju') {
                const s = size * 0.7;
                // Reptilian Body
                ctx.fillStyle = '#0f172a';
                ctx.beginPath();
                ctx.ellipse(px, py, s * 0.9, s * 1.2, 0, 0, Math.PI * 2);
                ctx.fill();

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
            // Standard / Custom Creature Body
            else {
                let bodyColor = ent.color;
                if (ent.isCiv && ent.kingdomId && kingdoms.has(ent.kingdomId)) {
                    bodyColor = kingdoms.get(ent.kingdomId).color;
                }
                ctx.fillStyle = bodyColor;
                ctx.fillRect(Math.floor(px - size * 0.5), Math.floor(py - size * 0.5), Math.ceil(size), Math.ceil(size));
            }

            // Crown for King
            if (ent.isKing) {
                ctx.fillStyle = '#facc15';
                ctx.fillRect(px - 1.5, py - size - 1.5, 3, 1.2);
            }

            // Player Controlled Marker / Halo
            if (ent.isControlled) {
                // Golden glowing ground reticle
                ctx.strokeStyle = '#facc15';
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.arc(px, py + size * 0.4, size + 2, 0, Math.PI * 2);
                ctx.stroke();

                // Bouncing pointer arrow above head
                const bounce = Math.sin(this.animTime * 5) * 2;
                ctx.fillStyle = '#facc15';
                ctx.beginPath();
                ctx.moveTo(px - 3, py - size - 7 + bounce);
                ctx.lineTo(px + 3, py - size - 7 + bounce);
                ctx.lineTo(px, py - size - 3 + bounce);
                ctx.closePath();
                ctx.fill();
            }

            // Health Bar (if injured or boss)
            if (ent.hp < ent.maxHp || ent.isBoss) {
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
                ctx.fillStyle = '#ff5722';
                ctx.beginPath();
                ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                ctx.fill();
            } else if (p.type === 'laser') {
                ctx.fillStyle = '#00e5ff';
                ctx.fillRect(p.x - 1, p.y - 1, 2, 2);
            }
        }
    }

    renderBrushCursor(wx, wy, radius, activeTool) {
        const ctx = this.ctx;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(wx, wy, radius, 0, Math.PI * 2);
        ctx.stroke();
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

