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

        // 7. Render Entities
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
                        default:
                            r = 0; g = 0; b = 0;
                    }
                }

                // Micro-pixel Edge Shading & Coastal Foam
                if (fire === 0 && y > 0) {
                    const topTile = world.tiles[i - world.width];
                    // Shoreline wave foam
                    if ((t === TILES.WATER || t === TILES.DEEP_WATER) && 
                        (topTile === TILES.SAND || topTile === TILES.GRASS || topTile === TILES.SOIL || topTile === TILES.STONE)) {
                        const waveFoam = Math.sin(this.animTime * 4 + x * 0.6);
                        if (waveFoam > 0.1) {
                            r += 65; g += 75; b += 95;
                        }
                    } 
                    // Top edge directional sunlight highlight for terrain
                    else if ((t === TILES.STONE || t === TILES.HIGH_MOUNTAIN || t === TILES.SOIL || t === TILES.OBSIDIAN) && topTile !== t) {
                        r += 18; g += 18; b += 22;
                    }
                }

                // Star glints in cosmic tiles
                if ((t === TILES.NEBULA || t === TILES.STARDUST || t === TILES.CRYSTAL) && fire === 0) {
                    if (((x * 31 + y * 17 + Math.floor(this.animTime * 5)) % 47) === 0) {
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
                ctx.beginPath();
                ctx.arc(b.x, b.y, r, 0, Math.PI * 2);
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
                // Ring of river rocks
                ctx.fillStyle = '#64748b';
                ctx.beginPath();
                ctx.arc(bx, by, 2.5, 0, Math.PI * 2);
                ctx.stroke();
                // Animated dancing flame
                const fCol = Math.random() < 0.5 ? '#f59e0b' : '#ef4444';
                ctx.fillStyle = fCol;
                ctx.fillRect(bx - 1, by - 1.5, 2, 2.5);
                ctx.fillStyle = '#fef08a';
                ctx.fillRect(bx - 0.5, by - 1, 1, 1.5);
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

                // Scaled Torso
                ctx.fillStyle = '#b91c1c';
                ctx.beginPath();
                ctx.ellipse(0, 0, s * 0.6, s * 0.85, 0, 0, Math.PI * 2);
                ctx.fill();

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
            // Galaxy Guardian rendering
            else if (ent.type === 'galaxy_guardian') {
                const s = size * 0.7;
                // Orbiting planetary cosmic rings
                ctx.strokeStyle = '#c084fc';
                ctx.lineWidth = 1.6;
                ctx.beginPath();
                ctx.ellipse(px, py, s * 1.5, s * 0.55, Math.PI / 6 + Math.sin(this.animTime) * 0.1, 0, Math.PI * 2);
                ctx.stroke();

                ctx.strokeStyle = '#38bdf8';
                ctx.lineWidth = 1.2;
                ctx.beginPath();
                ctx.ellipse(px, py, s * 1.5, s * 0.55, -Math.PI / 6, 0, Math.PI * 2);
                ctx.stroke();

                // Orbiting celestial stardust satellites
                for (let k = 0; k < 3; k++) {
                    const ang = this.animTime * 2.5 + k * (Math.PI * 2 / 3);
                    const ox = px + Math.cos(ang) * s * 1.4;
                    const oy = py + Math.sin(ang) * s * 0.55;
                    ctx.fillStyle = '#facc15';
                    ctx.fillRect(ox - 1, oy - 1, 2.5, 2.5);
                }

                // Celestial Core
                ctx.fillStyle = '#9333ea';
                ctx.beginPath();
                ctx.arc(px, py, s * 0.8, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = '#f0abfc';
                ctx.beginPath();
                ctx.arc(px, py, s * 0.45, 0, Math.PI * 2);
                ctx.fill();

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
                // Turret
                ctx.fillStyle = '#2d3b27';
                ctx.beginPath();
                ctx.arc(px, py, s * 0.4, 0, Math.PI * 2);
                ctx.fill();
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
                // Dual gun turrets
                ctx.fillStyle = '#475569';
                ctx.beginPath(); ctx.arc(s * 0.6, 0, s * 0.2, 0, Math.PI * 2); ctx.fill();
                ctx.fillRect(s * 0.6, -1, s * 0.5, 1);
                ctx.fillRect(s * 0.6, 0.5, s * 0.5, 1);
                ctx.beginPath(); ctx.arc(-s * 0.7, 0, s * 0.2, 0, Math.PI * 2); ctx.fill();
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
                // Fuselage
                ctx.fillStyle = '#15803d';
                ctx.beginPath(); ctx.ellipse(0, 0, s * 0.7, s * 0.38, 0, 0, Math.PI * 2); ctx.fill();
                // Cockpit Glass
                ctx.fillStyle = '#38bdf8';
                ctx.beginPath(); ctx.ellipse(s * 0.4, 0, s * 0.25, s * 0.2, 0, 0, Math.PI * 2); ctx.fill();
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
                ctx.fillStyle = '#0f172a'; ctx.beginPath(); ctx.arc(0, 0, 1.8, 0, Math.PI * 2); ctx.fill();
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
                // Mantle
                ctx.fillStyle = '#0d9488';
                ctx.beginPath(); ctx.ellipse(px, py - 2, s * 0.8, s * 1.1, 0, 0, Math.PI * 2); ctx.fill();
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
                // Main Serpent Body
                ctx.fillStyle = '#15803d';
                ctx.beginPath(); ctx.ellipse(px, py + 2, s * 0.9, s * 0.6, 0, 0, Math.PI * 2); ctx.fill();
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
                ctx.beginPath();
                ctx.arc(s * 0.6 + 0.6, -s * 1.3, 2, 0, Math.PI * 2);
                ctx.fill();
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
            // Standard / Custom Creature Body Fallback
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
                ctx.arc(0, 0, size * 0.8, -Math.PI * 0.4, Math.PI * 0.4);
                ctx.stroke();
                ctx.strokeStyle = '#f8fafc';
                ctx.lineWidth = 0.8;
                ctx.beginPath();
                ctx.moveTo(Math.cos(-Math.PI * 0.4) * size * 0.8, Math.sin(-Math.PI * 0.4) * size * 0.8);
                ctx.lineTo(Math.cos(Math.PI * 0.4) * size * 0.8, Math.sin(Math.PI * 0.4) * size * 0.8);
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
                ctx.beginPath();
                ctx.arc(0, -size * 1.5, 1.8, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(-0.5, -size * 1.5 - 0.5, 1, 1);
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

            // Player Controlled Marker / Halo
            if (ent.isControlled) {
                ctx.strokeStyle = '#facc15';
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.arc(px, py + size * 0.4, size + 2, 0, Math.PI * 2);
                ctx.stroke();

                const bounce = Math.sin(this.animTime * 5) * 2;
                ctx.fillStyle = '#facc15';
                ctx.beginPath();
                ctx.moveTo(px - 3, py - size - 7 + bounce);
                ctx.lineTo(px + 3, py - size - 7 + bounce);
                ctx.lineTo(px, py - size - 3 + bounce);
                ctx.closePath();
                ctx.fill();

                // Direct Control HUD Key Banner
                ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
                const tagText = ent.type === 'dragon' ? 'DRAGON [WASD / SPACE / Q]' : (ent.type === 'mech' ? 'MECH [WASD / SPACE / Q]' : 'HERO [WASD / SPACE]');
                ctx.font = 'bold 3px monospace';
                const textWidth = ctx.measureText(tagText).width;
                ctx.fillRect(px - textWidth / 2 - 1, py - size - 12, textWidth + 2, 4.2);
                ctx.fillStyle = '#facc15';
                ctx.fillText(tagText, px - textWidth / 2, py - size - 8.8);
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
            } else if (p.type === 'frost') {
                ctx.fillStyle = '#a5f3fc';
                ctx.beginPath();
                ctx.arc(p.x, p.y, 2.2, 0, Math.PI * 2);
                ctx.fill();
            } else if (p.type === 'acid') {
                ctx.fillStyle = '#84cc16';
                ctx.beginPath();
                ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                ctx.fill();
            } else if (p.type === 'blaster') {
                ctx.fillStyle = '#22d3ee';
                ctx.fillRect(p.x - 1.5, p.y - 1, 3, 2);
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(p.x - 0.5, p.y - 0.5, 1, 1);
            } else if (p.type === 'magic_missile') {
                ctx.fillStyle = '#c084fc';
                ctx.beginPath();
                ctx.arc(p.x, p.y, 2.2, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(p.x - 0.5, p.y - 0.5, 1, 1);
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

