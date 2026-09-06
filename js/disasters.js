// ==========================================
// GALAXYBOX - Disasters, Powers & Miracles
// Destruction, Nature & Miscellaneous Systems
// ==========================================

class BlackHole {
    constructor(x, y, duration = 400) {
        this.x = x;
        this.y = y;
        this.life = duration;
        this.maxLife = duration;
        this.radius = 28;
        this.active = true;
    }

    update(world, entityManager, particleSystem) {
        this.life--;
        if (this.life <= 0) {
            this.active = false;
            return;
        }

        // Singularity swirl particles
        if (particleSystem) {
            for (let i = 0; i < 4; i++) {
                const angle = Math.random() * Math.PI * 2;
                const dist = 5 + Math.random() * this.radius;
                const px = this.x + Math.cos(angle) * dist;
                const py = this.y + Math.sin(angle) * dist;
                // Tangential and inward velocity
                const vx = -Math.sin(angle) * 2 - Math.cos(angle) * 1.5;
                const vy = Math.cos(angle) * 2 - Math.sin(angle) * 1.5;
                particleSystem.spawn(px, py, vx, vy, 1.5, '#c084fc', 15, 'stardust');
            }
        }

        // Pull and consume tiles
        const rad = Math.floor(this.radius);
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                const dist2 = dx * dx + dy * dy;
                if (dist2 > rad * rad) continue;

                const tx = Math.floor(this.x + dx);
                const ty = Math.floor(this.y + dy);
                if (!world.inBounds(tx, ty)) continue;

                const t = world.getTile(tx, ty);
                if (t !== TILES.BEDROCK && t !== TILES.VOID) {
                    if (dist2 < 36) {
                        // Event horizon deletion
                        world.setTile(tx, ty, TILES.VOID);
                    } else if (Math.random() < 0.04) {
                        world.setTile(tx, ty, TILES.VOID);
                    }
                }
            }
        }

        // Pull and crush entities
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (!ent.active) continue;
            const edx = this.x - ent.x;
            const edy = this.y - ent.y;
            const dist = Math.hypot(edx, edy);

            if (dist < this.radius) {
                const force = (1.0 - dist / this.radius) * 2.2;
                ent.x += (edx / (dist + 0.1)) * force;
                ent.y += (edy / (dist + 0.1)) * force;

                if (dist < 4) {
                    ent.takeDamage(20);
                    if (particleSystem) particleSystem.burst(ent.x, ent.y, 4, ['#a855f7', '#000000'], 1, 2, 1, 2);
                }
            }
        }
    }

    render(ctx) {
        ctx.save();
        const cx = Math.floor(this.x);
        const cy = Math.floor(this.y);

        // Orbiting retro pixel accretion ring
        ctx.fillStyle = '#c084fc';
        for (let a = 0; a < 8; a++) {
            const ang = Date.now() * 0.005 + a * (Math.PI / 4);
            const r = 8 + (a % 2) * 2;
            ctx.fillRect(Math.floor(cx + Math.cos(ang) * r), Math.floor(cy + Math.sin(ang) * r * 0.6), 2, 2);
        }

        // Stepped pixel singularity core (retro stepped 9x9 disc)
        ctx.fillStyle = '#05050b';
        ctx.fillRect(cx - 3, cy - 4, 6, 8);
        ctx.fillRect(cx - 4, cy - 3, 8, 6);
        ctx.fillRect(cx - 2, cy - 5, 4, 10);
        ctx.fillRect(cx - 5, cy - 2, 10, 4);

        // Event horizon photon ring outline
        ctx.fillStyle = '#a855f7';
        ctx.fillRect(cx - 2, cy - 6, 4, 1);
        ctx.fillRect(cx - 2, cy + 5, 4, 1);
        ctx.fillRect(cx - 6, cy - 2, 1, 4);
        ctx.fillRect(cx + 5, cy - 2, 1, 4);

        ctx.restore();
    }
}

class Tornado {
    constructor(x, y, isFire = false) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = isFire ? 20 : 16;
        this.life = 700;
        this.active = true;
        this.isFire = isFire;
    }

    update(world, entityManager, particleSystem) {
        this.life--;
        if (this.life <= 0) {
            this.active = false;
            return;
        }

        // Wander smoothly
        this.vx += (Math.random() - 0.5) * 0.15;
        this.vy += (Math.random() - 0.5) * 0.15;
        this.vx = Math.max(-1.4, Math.min(1.4, this.vx));
        this.vy = Math.max(-1.4, Math.min(1.4, this.vy));
        this.x += this.vx;
        this.y += this.vy;

        // Keep in bounds
        if (this.x < 10) this.vx = 0.5;
        if (this.x > world.width - 10) this.vx = -0.5;
        if (this.y < 10) this.vy = 0.5;
        if (this.y > world.height - 10) this.vy = -0.5;

        // Funnel cloud particles
        if (particleSystem) {
            const pColor = this.isFire ? (Math.random() < 0.6 ? '#f97316' : '#ef4444') : '#94a3b8';
            const pType = this.isFire ? 'fire' : 'smoke';
            for (let i = 0; i < (this.isFire ? 8 : 6); i++) {
                const angle = Math.random() * Math.PI * 2;
                const dist = Math.random() * this.radius;
                const px = this.x + Math.cos(angle) * dist;
                const py = this.y + Math.sin(angle) * (dist * 0.6);
                const spd = 1.5 + Math.random() * 2;
                particleSystem.spawn(px, py, -Math.sin(angle) * spd, -1.2, 2.5, pColor, 20, pType);
            }
        }

        // Tear up land, ignite or uproot trees
        const tx = Math.floor(this.x);
        const ty = Math.floor(this.y);
        for (let dy = -3; dy <= 3; dy++) {
            for (let dx = -3; dx <= 3; dx++) {
                const ptx = tx + dx;
                const pty = ty + dy;
                if (!world.inBounds(ptx, pty)) continue;
                const t = world.getTile(ptx, pty);
                if (this.isFire) {
                    if (t === TILES.FOREST || t === TILES.GRASS) {
                        world.ignite(ptx, pty, 120);
                    }
                } else {
                    if (t === TILES.FOREST) {
                        world.setTile(ptx, pty, TILES.SOIL);
                    } else if (t === TILES.GRASS && Math.random() < 0.2) {
                        world.setTile(ptx, pty, TILES.SOIL);
                    }
                }
            }
        }

        // Fling entities
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (!ent.active) continue;
            const dist = Math.hypot(this.x - ent.x, this.y - ent.y);
            if (dist < this.radius) {
                const angle = Math.atan2(ent.y - this.y, ent.x - this.x) + 1.2;
                ent.x += Math.cos(angle) * 3.5;
                ent.y += Math.sin(angle) * 3.5;
                ent.takeDamage(this.isFire ? 4.5 : 2.0);
            }
        }
    }

    render(ctx, animTime = 0) {
        ctx.save();
        ctx.fillStyle = this.isFire ? 'rgba(249, 115, 22, 0.45)' : 'rgba(148, 163, 184, 0.35)';
        for (let yOff = 0; yOff < 34; yOff += 3) {
            const width = Math.max(3, Math.floor(yOff * 0.75));
            const wobble = Math.round(Math.sin(animTime * 10 + yOff * 0.4) * 3);
            ctx.fillRect(Math.floor(this.x + wobble - width * 0.5), Math.floor(this.y - yOff), width, 2);
        }
        ctx.restore();
    }
}

class Volcano {
    constructor(x, y) {
        this.x = Math.floor(x);
        this.y = Math.floor(y);
        this.life = 1200;
        this.active = true;
    }

    update(world, particleSystem) {
        this.life--;
        if (this.life <= 0) {
            this.active = false;
            return;
        }

        // Spew lava, ash, smoke
        if (Math.random() < 0.4) {
            const ox = (Math.random() - 0.5) * 4;
            const oy = (Math.random() - 0.5) * 4;
            const tx = Math.floor(this.x + ox);
            const ty = Math.floor(this.y + oy);
            if (world.inBounds(tx, ty)) {
                world.setTile(tx, ty, TILES.LAVA);
            }
        }

        if (particleSystem) {
            // Ash plume
            particleSystem.spawn(this.x, this.y, (Math.random() - 0.5) * 1.5, -1.8 - Math.random() * 1.5, 3.5, '#374151', 60, 'smoke');
            // Blazing lava bomb
            if (Math.random() < 0.3) {
                const angle = -Math.PI * 0.5 + (Math.random() - 0.5) * 1.2;
                const spd = 2.5 + Math.random() * 3;
                particleSystem.spawn(this.x, this.y, Math.cos(angle) * spd, Math.sin(angle) * spd, 2.5, '#ff4500', 40, 'fire', 0.08);
            }
        }
    }
}

class Meteor {
    constructor(startX, startY, targetX, targetY) {
        this.x = startX;
        this.y = startY;
        this.targetX = targetX;
        this.targetY = targetY;
        const dx = targetX - startX;
        const dy = targetY - startY;
        const dist = Math.hypot(dx, dy);
        this.speed = 6.5;
        this.vx = (dx / dist) * this.speed;
        this.vy = (dy / dist) * this.speed;
        this.active = true;
        this.size = 4;
    }

    update(world, entityManager, disasterManager, particleSystem, audio) {
        this.x += this.vx;
        this.y += this.vy;

        // Trail
        if (particleSystem) {
            particleSystem.spawn(this.x, this.y, -this.vx * 0.2 + (Math.random() - 0.5), -this.vy * 0.2, 3, '#ff7043', 25, 'fire');
            particleSystem.spawn(this.x, this.y, -this.vx * 0.1, -this.vy * 0.1, 4, '#424242', 35, 'smoke');
        }

        // Check if reached destination
        if (this.y >= this.targetY || Math.hypot(this.targetX - this.x, this.targetY - this.y) < 6) {
            this.active = false;
            disasterManager.triggerExplosion(this.targetX, this.targetY, 36, 2.5, world, entityManager, particleSystem, audio);
        }
    }

    render(ctx) {
        ctx.save();
        const mx = Math.floor(this.x);
        const my = Math.floor(this.y);
        const s = Math.max(2, Math.floor(this.size));
        // Outer burning crust
        ctx.fillStyle = '#ea580c';
        ctx.fillRect(mx - s, my - s + 1, s * 2, s * 2 - 2);
        ctx.fillRect(mx - s + 1, my - s, s * 2 - 2, s * 2);
        // Molten core
        ctx.fillStyle = '#facc15';
        ctx.fillRect(mx - s + 1, my - s + 1, s * 2 - 2, s * 2 - 2);
        // Dark volcanic mineral facets
        ctx.fillStyle = '#78350f';
        ctx.fillRect(mx - s + 2, my - s + 1, 2, 2);
        ctx.fillRect(mx, my + 1, 2, 2);
        ctx.restore();
    }
}

class UFO {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.targetX = x;
        this.targetY = y;
        this.timer = 0;
        this.abducting = null;
        this.active = true;
        this.life = 1000;
    }

    update(world, entityManager, particleSystem, audio) {
        this.life--;
        if (this.life <= 0) {
            this.active = false;
            return;
        }

        this.timer++;
        if (this.timer % 60 === 0) {
            this.targetX = 20 + Math.random() * (world.width - 40);
            this.targetY = 15 + Math.random() * (world.height * 0.4);
        }

        // Hover smoothly
        this.x += (this.targetX - this.x) * 0.03;
        this.y += (this.targetY - this.y) * 0.03;

        // Beam up cow or human below
        if (!this.abducting) {
            for (let i = 0; i < entityManager.entities.length; i++) {
                const ent = entityManager.entities[i];
                if (!ent.active) continue;
                if (Math.abs(ent.x - this.x) < 12 && ent.y > this.y && ent.y < this.y + 40) {
                    this.abducting = ent;
                    break;
                }
            }
        } else {
            // Pull upward in tractor beam
            if (this.abducting.active) {
                this.abducting.x += (this.x - this.abducting.x) * 0.1;
                this.abducting.y -= 0.6;
                if (particleSystem && Math.random() < 0.4) {
                    particleSystem.spawn(this.x + (Math.random() - 0.5) * 8, this.abducting.y, 0, -1, 1.5, '#38bdf8', 20, 'stardust');
                }
                if (this.abducting.y <= this.y + 3) {
                    // Abducted completely!
                    this.abducting.active = false;
                    this.abducting = null;
                    if (audio) audio.playMagic();
                }
            } else {
                this.abducting = null;
            }
        }
    }

    render(ctx) {
        ctx.save();
        // Tractor beam cone (dithered pixel columns)
        ctx.fillStyle = 'rgba(56, 189, 248, 0.22)';
        for (let by = 4; by < 45; by += 2) {
            const spread = Math.floor(by * 0.32);
            ctx.fillRect(Math.floor(this.x - spread), Math.floor(this.y + by), spread * 2, 1.5);
        }

        // Saucer dome (stepped pixel glass canopy)
        ctx.fillStyle = '#67e8f9';
        ctx.fillRect(Math.floor(this.x - 2), Math.floor(this.y - 4), 4, 1);
        ctx.fillRect(Math.floor(this.x - 3), Math.floor(this.y - 3), 6, 1);
        ctx.fillRect(Math.floor(this.x - 4), Math.floor(this.y - 2), 8, 2);
        // Highlight
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(Math.floor(this.x - 2), Math.floor(this.y - 3), 2, 1);

        // Saucer hull (stepped metallic pixel rim)
        ctx.fillStyle = '#94a3b8';
        ctx.fillRect(Math.floor(this.x - 8), Math.floor(this.y), 16, 2);
        ctx.fillRect(Math.floor(this.x - 6), Math.floor(this.y + 2), 12, 1);
        ctx.fillRect(Math.floor(this.x - 3), Math.floor(this.y + 3), 6, 1);
        ctx.fillStyle = '#64748b';
        ctx.fillRect(Math.floor(this.x - 7), Math.floor(this.y + 1), 14, 1);

        // Flashing lights
        const colors = ['#f43f5e', '#fbbf24', '#34d399'];
        for (let i = -2; i <= 2; i++) {
            ctx.fillStyle = colors[(Math.floor(Date.now() / 150) + Math.abs(i)) % colors.length];
            ctx.fillRect(this.x + i * 3 - 0.5, this.y + 1, 1.5, 1.5);
        }
        ctx.restore();
    }
}

class Forcefield {
    constructor(x, y, radius = 24, duration = 1200) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.life = duration;
        this.maxLife = duration;
        this.active = true;
        this.energy = 600;
        this.maxEnergy = 600;
    }

    contains(px, py) {
        return Math.hypot(px - this.x, py - this.y) <= this.radius;
    }

    absorb(dmg, particleSystem = null) {
        this.energy -= dmg;
        if (particleSystem) {
            particleSystem.burst(this.x, this.y, 8, ['#38bdf8', '#67e8f9', '#ffffff'], 2, 4, 1.5, 3);
        }
        if (this.energy <= 0) {
            this.active = false;
        }
    }

    update(particleSystem) {
        this.life--;
        if (this.life <= 0 || this.energy <= 0) {
            this.active = false;
            return;
        }
        if (particleSystem && Math.random() < 0.1) {
            const a = Math.random() * Math.PI * 2;
            const px = this.x + Math.cos(a) * this.radius;
            const py = this.y + Math.sin(a) * this.radius;
            particleSystem.spawn(px, py, 0, -0.2, 1.2, '#38bdf8', 15, 'stardust');
        }
    }

    render(ctx, animTime = 0) {
        ctx.save();
        const pulse = Math.sin(animTime * 4) * 0.08 + 0.95;
        const r = Math.floor(this.radius * pulse);
        const cx = Math.floor(this.x);
        const cy = Math.floor(this.y);

        // Dithered pixel scanlines inside shield
        ctx.fillStyle = 'rgba(56, 189, 248, 0.16)';
        for (let dy = -r + 1; dy < r; dy += 2) {
            const span = Math.floor(Math.sqrt(Math.max(0, r * r - dy * dy)));
            ctx.fillRect(cx - span, cy + dy, span * 2, 1);
        }

        // Stepped retro pixel boundary ring (Bresenham)
        ctx.fillStyle = '#38bdf8';
        let x = r;
        let y = 0;
        let err = 0;
        while (x >= y) {
            ctx.fillRect(cx + x - 1, cy + y, 2, 1);
            ctx.fillRect(cx + y, cy + x - 1, 1, 2);
            ctx.fillRect(cx - x, cy + y, 2, 1);
            ctx.fillRect(cx - y, cy + x - 1, 1, 2);
            ctx.fillRect(cx - x, cy - y, 2, 1);
            ctx.fillRect(cx - y, cy - x, 1, 2);
            ctx.fillRect(cx + x - 1, cy - y, 2, 1);
            ctx.fillRect(cx + y, cy - x, 1, 2);

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
}

class DimensionRift {
    constructor(x, y, duration = 700) {
        this.x = x;
        this.y = y;
        this.life = duration;
        this.maxLife = duration;
        this.radius = 20;
        this.active = true;
        this.spawnTimer = 0;
    }

    update(world, entityManager, particleSystem, audio) {
        this.life--;
        if (this.life <= 0) {
            this.active = false;
            return;
        }

        if (particleSystem) {
            particleSystem.spawn(this.x + (Math.random() - 0.5) * 6, this.y + (Math.random() - 0.5) * 16, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, 2.5, '#a855f7', 20, 'stardust');
            particleSystem.spawn(this.x + (Math.random() - 0.5) * 4, this.y + (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 1.5, (Math.random() - 0.5) * 1.5, 2, '#06b6d4', 20, 'stardust');
        }

        // Pull and consume land
        const tx = Math.floor(this.x + (Math.random() - 0.5) * 14);
        const ty = Math.floor(this.y + (Math.random() - 0.5) * 14);
        if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
            if (Math.random() < 0.25) world.setTile(tx, ty, TILES.CORRUPTED);
            else if (Math.random() < 0.08) world.setTile(tx, ty, TILES.VOID);
        }

        // Pull nearby entities and damage
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (!ent.active) continue;
            const dist = Math.hypot(this.x - ent.x, this.y - ent.y);
            if (dist < 28) {
                const angle = Math.atan2(this.y - ent.y, this.x - ent.x);
                ent.x += Math.cos(angle) * 1.2;
                ent.y += Math.sin(angle) * 1.2;
                ent.takeDamage(2.5);
            }
        }

        // Spawn Nether Demons or Skeletons
        this.spawnTimer++;
        if (this.spawnTimer >= 120 && entityManager.entities.length < 250) {
            this.spawnTimer = 0;
            const spawnType = Math.random() < 0.6 ? 'demon' : (Math.random() < 0.5 ? 'alien' : 'skeleton');
            entityManager.spawn(spawnType, this.x + (Math.random() - 0.5) * 10, this.y + (Math.random() - 0.5) * 10);
            if (audio) audio.playMagic();
        }
    }

    render(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle = '#0f051d';
        ctx.fillRect(-2, -14, 4, 28);

        // Jagged cosmic energy crack
        ctx.strokeStyle = '#c026d3';
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(0, -16);
        ctx.lineTo(-4, -7);
        ctx.lineTo(4, 2);
        ctx.lineTo(-3, 10);
        ctx.lineTo(0, 16);
        ctx.stroke();

        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(0, -14);
        ctx.lineTo(-2, -6);
        ctx.lineTo(2, 3);
        ctx.lineTo(-1, 9);
        ctx.lineTo(0, 14);
        ctx.stroke();
        ctx.restore();
    }
}

class IonCannon {
    constructor(x, y) {
        this.x = Math.floor(x);
        this.y = Math.floor(y);
        this.timer = 85;
        this.active = true;
    }

    update(world, entityManager, disasterManager, particleSystem, audio) {
        this.timer--;

        if (this.timer === 30) {
            if (audio) audio.playLaser();
            if (window.game) window.game.shakeCamera(16, 28);
        }

        if (this.timer <= 30 && this.timer > 0) {
            if (particleSystem) {
                for (let ly = -50; ly < this.y; ly += 6) {
                    particleSystem.spawn(this.x + (Math.random() - 0.5) * 12, ly, 0, 5, 2.5, '#38bdf8', 12, 'spark');
                    particleSystem.spawn(this.x + (Math.random() - 0.5) * 6, ly, 0, 6, 2, '#ffffff', 10, 'spark');
                }
                for (let i = 0; i < 6; i++) {
                    const bx = this.x + (Math.random() - 0.5) * 26;
                    particleSystem.spawn(bx, this.y, (Math.random() - 0.5) * 4, -Math.random() * 5, 2.5, '#38bdf8', 25, 'spark');
                }
            }

            const rad = 20;
            for (let dy = -rad; dy <= rad; dy++) {
                for (let dx = -rad; dx <= rad; dx++) {
                    if (dx * dx + dy * dy <= rad * rad) {
                        const tx = Math.floor(this.x + dx);
                        const ty = Math.floor(this.y + dy);
                        if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                            world.setTile(tx, ty, Math.random() < 0.3 ? TILES.VOID : TILES.FALLOUT);
                        }
                    }
                }
            }

            for (let i = 0; i < entityManager.entities.length; i++) {
                const ent = entityManager.entities[i];
                if (ent.active && Math.hypot(ent.x - this.x, ent.y - this.y) < 24) {
                    ent.takeDamage(200);
                }
            }
        }

        if (this.timer <= 0) {
            this.active = false;
            disasterManager.triggerExplosion(this.x, this.y, 42, 3.5, world, entityManager, particleSystem, audio);
        }
    }

    render(ctx, animTime = 0) {
        ctx.save();
        const cx = Math.floor(this.x);
        const cy = Math.floor(this.y);

        if (this.timer > 30) {
            const progress = (this.timer - 30) / 55;
            const pr = Math.floor(10 + progress * 26);

            // Tactical pixel crosshairs with corner brackets
            ctx.fillStyle = '#ef4444';
            ctx.fillRect(cx - pr, cy - pr, 7, 2);
            ctx.fillRect(cx - pr, cy - pr, 2, 7);
            ctx.fillRect(cx + pr - 7, cy - pr, 7, 2);
            ctx.fillRect(cx + pr - 2, cy - pr, 2, 7);
            ctx.fillRect(cx - pr, cy + pr - 2, 7, 2);
            ctx.fillRect(cx - pr, cy + pr - 7, 2, 7);
            ctx.fillRect(cx + pr - 7, cy + pr - 2, 7, 2);
            ctx.fillRect(cx + pr - 2, cy + pr - 7, 2, 7);

            // Crosshair reticle lines
            ctx.fillRect(cx - pr - 4, cy, 6, 1);
            ctx.fillRect(cx + pr - 2, cy, 6, 1);
            ctx.fillRect(cx, cy - pr - 4, 1, 6);
            ctx.fillRect(cx, cy + pr - 2, 1, 6);
        } else if (this.timer > 0) {
            // Ion Cannon orbital blue plasma beam
            ctx.fillStyle = 'rgba(56, 189, 248, 0.85)';
            ctx.fillRect(cx - 10, -500, 20, cy + 500);

            ctx.fillStyle = '#ffffff';
            ctx.fillRect(cx - 4, -500, 8, cy + 500);

            // Stepped pixel beam impact flare
            const ir = Math.floor(18 + Math.random() * 6);
            ctx.fillStyle = '#67e8f9';
            ctx.fillRect(cx - ir, cy - 4, ir * 2, 8);
            ctx.fillRect(cx - 4, cy - ir, 8, ir * 2);
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(cx - Math.floor(ir * 0.5), cy - 2, ir, 4);
        }
        ctx.restore();
    }
}

class NukeMissile {
    constructor(targetX, targetY) {
        this.targetX = targetX;
        this.targetY = targetY;
        this.x = targetX + (Math.random() - 0.5) * 60;
        this.y = -100;
        this.speed = 4.2;
        this.active = true;
        this.angle = Math.atan2(this.targetY - this.y, this.targetX - this.x);
    }

    update(world, entityManager, disasterManager, particleSystem, audio) {
        const dx = this.targetX - this.x;
        const dy = this.targetY - this.y;
        const dist = Math.hypot(dx, dy);

        this.angle = Math.atan2(dy, dx);
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.speed = Math.min(9.5, this.speed + 0.18);

        if (particleSystem) {
            const exX = this.x - Math.cos(this.angle) * 8;
            const exY = this.y - Math.sin(this.angle) * 8;
            particleSystem.spawn(exX, exY, -Math.cos(this.angle) * 2 + (Math.random() - 0.5), -Math.sin(this.angle) * 2 + (Math.random() - 0.5), 2.2, '#f97316', 20, 'fire');
            particleSystem.spawn(exX, exY, (Math.random() - 0.5) * 1.5, (Math.random() - 0.5) * 1.5, 3.2, '#64748b', 30, 'smoke');
        }

        const reachedTarget = dist <= Math.max(10, this.speed * 1.5) || (this.y >= this.targetY && Math.abs(dx) <= 16);

        if (reachedTarget) {
            this.active = false;
            disasterManager.triggerNuke(this.targetX, this.targetY, world, entityManager, particleSystem, audio);
        }
    }

    render(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle + Math.PI / 2);

        // Missile body
        ctx.fillStyle = '#e2e8f0';
        ctx.fillRect(-2.5, -8, 5, 16);

        // Warhead (conical red tip)
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.moveTo(-2.5, -8);
        ctx.lineTo(0, -14);
        ctx.lineTo(2.5, -8);
        ctx.closePath();
        ctx.fill();

        // Nuclear hazard stripes
        ctx.fillStyle = '#eab308';
        ctx.fillRect(-2.5, -3, 5, 3);
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(-2.5, 0, 5, 2);

        // Fins
        ctx.fillStyle = '#475569';
        ctx.beginPath();
        ctx.moveTo(-2.5, 4); ctx.lineTo(-6, 8); ctx.lineTo(-2.5, 8);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(2.5, 4); ctx.lineTo(6, 8); ctx.lineTo(2.5, 8);
        ctx.fill();

        // Thruster flame
        ctx.fillStyle = '#f97316';
        ctx.beginPath();
        ctx.moveTo(-2, 8);
        ctx.lineTo(0, 14 + Math.random() * 4);
        ctx.lineTo(2, 8);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
    }
}

class DisasterManager {
    constructor() {
        this.blackHoles = [];
        this.tornadoes = [];
        this.volcanoes = [];
        this.meteors = [];
        this.ufos = [];
        this.forcefields = [];
        this.rifts = [];
        this.ionCannons = [];
        this.nukeMissiles = [];
        this.activeStorm = null; // rain, snow, acid, sandstorm, clone_rain
        this.stormTimer = 0;

        // God's hand state
        this.grabbedEntity = null;
        this.grabStartX = 0;
        this.grabStartY = 0;
    }

    isShielded(x, y) {
        for (let i = 0; i < this.forcefields.length; i++) {
            const ff = this.forcefields[i];
            if (ff.active && ff.contains(x, y)) return ff;
        }
        return null;
    }

    update(world, entityManager, particleSystem, audio) {
        // Update Nuke Missiles
        for (let i = this.nukeMissiles.length - 1; i >= 0; i--) {
            const nm = this.nukeMissiles[i];
            nm.update(world, entityManager, this, particleSystem, audio);
            if (!nm.active) this.nukeMissiles.splice(i, 1);
        }

        // Update Forcefields
        for (let i = this.forcefields.length - 1; i >= 0; i--) {
            const f = this.forcefields[i];
            f.update(particleSystem);
            if (!f.active) this.forcefields.splice(i, 1);
        }

        // Update Dimension Rifts
        for (let i = this.rifts.length - 1; i >= 0; i--) {
            const r = this.rifts[i];
            r.update(world, entityManager, particleSystem);
            if (!r.active) this.rifts.splice(i, 1);
        }

        // Update Ion Cannons
        for (let i = this.ionCannons.length - 1; i >= 0; i--) {
            const ic = this.ionCannons[i];
            ic.update(world, entityManager, this, particleSystem, audio);
            if (!ic.active) this.ionCannons.splice(i, 1);
        }

        // Update Black Holes
        for (let i = this.blackHoles.length - 1; i >= 0; i--) {
            const bh = this.blackHoles[i];
            bh.update(world, entityManager, particleSystem);
            if (!bh.active) this.blackHoles.splice(i, 1);
        }

        // Update Tornadoes
        for (let i = this.tornadoes.length - 1; i >= 0; i--) {
            const t = this.tornadoes[i];
            t.update(world, entityManager, particleSystem);
            if (!t.active) this.tornadoes.splice(i, 1);
        }

        // Update Volcanoes
        for (let i = this.volcanoes.length - 1; i >= 0; i--) {
            const v = this.volcanoes[i];
            v.update(world, particleSystem);
            if (!v.active) this.volcanoes.splice(i, 1);
        }

        // Update Meteors
        for (let i = this.meteors.length - 1; i >= 0; i--) {
            const m = this.meteors[i];
            m.update(world, entityManager, this, particleSystem, audio);
            if (!m.active) this.meteors.splice(i, 1);
        }

        // Update UFOs
        for (let i = this.ufos.length - 1; i >= 0; i--) {
            const u = this.ufos[i];
            u.update(world, entityManager, particleSystem, audio);
            if (!u.active) this.ufos.splice(i, 1);
        }

        // Weather Storms
        if (this.activeStorm) {
            this.stormTimer--;
            if (this.stormTimer <= 0) {
                this.activeStorm = null;
            } else {
                this.simulateWeather(world, entityManager, particleSystem);
            }
        }
    }

    simulateWeather(world, entityManager, particleSystem) {
        const drops = Math.floor(world.width * 0.15);
        for (let i = 0; i < drops; i++) {
            const rx = Math.floor(Math.random() * world.width);
            const ry = Math.floor(Math.random() * world.height);

            if (this.activeStorm === 'rain') {
                if (particleSystem && Math.random() < 0.2) {
                    particleSystem.spawn(rx, ry - 15, (Math.random() - 0.5) * 0.2, 4, 1, '#60a5fa', 12, 'water');
                }
                const t = world.getTile(rx, ry);
                if (world.fire[world.idx(rx, ry)] > 0) {
                    world.fire[world.idx(rx, ry)] = 0; // extinguish fire
                } else if (t === TILES.SOIL && Math.random() < 0.05) {
                    world.setTile(rx, ry, TILES.GRASS);
                }
            } else if (this.activeStorm === 'snow') {
                if (particleSystem && Math.random() < 0.25) {
                    particleSystem.spawn(rx, ry - 20, (Math.random() - 0.5) * 0.5, 1.2, 1.5, '#ffffff', 25, 'spark');
                }
                const t = world.getTile(rx, ry);
                if (t === TILES.WATER && Math.random() < 0.03) {
                    world.setTile(rx, ry, TILES.ICE);
                } else if (t === TILES.GRASS && Math.random() < 0.03) {
                    world.setTile(rx, ry, TILES.SNOW);
                }
            } else if (this.activeStorm === 'acid') {
                if (particleSystem && Math.random() < 0.3) {
                    particleSystem.spawn(rx, ry - 15, 0, 3.5, 1.5, '#84cc16', 15, 'acid');
                }
                const t = world.getTile(rx, ry);
                if (t === TILES.FOREST || t === TILES.GRASS) {
                    if (Math.random() < 0.08) world.setTile(rx, ry, TILES.ASH);
                }
            } else if (this.activeStorm === 'sandstorm') {
                if (particleSystem && Math.random() < 0.3) {
                    particleSystem.spawn(rx - 10, ry, 3.5 + Math.random() * 2, (Math.random() - 0.5) * 0.8, 1.5, '#dec17a', 15, 'stardust');
                }
                const t = world.getTile(rx, ry);
                if (t === TILES.GRASS || t === TILES.SOIL) {
                    if (Math.random() < 0.05) world.setTile(rx, ry, TILES.SAND);
                } else if (t === TILES.STONE && Math.random() < 0.02) {
                    world.setTile(rx, ry, TILES.SAND);
                }
            } else if (this.activeStorm === 'clone_rain') {
                if (particleSystem && Math.random() < 0.35) {
                    particleSystem.spawn(rx, ry - 25, 0, 4, 1.8, '#c084fc', 20, 'stardust');
                }
                if (Math.random() < 0.07 && entityManager.entities.length > 0 && entityManager.entities.length < 350) {
                    const candidate = entityManager.entities[Math.floor(Math.random() * entityManager.entities.length)];
                    if (candidate && candidate.active) {
                        entityManager.clone(candidate);
                        if (particleSystem) {
                            particleSystem.burst(rx, ry, 12, ['#c084fc', '#e879f9', '#ffffff'], 1, 3, 1.5, 3, 'stardust');
                        }
                    }
                }
            }
        }
    }

    // ==========================================
    // 1. DESTRUCTION & CHAOS POWERS
    // ==========================================

    // Atomic Nuke (Mega-Destruction Overhaul)
    triggerNuke(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio) audio.playNuke();
        if (particleSystem) particleSystem.nukeMushroom(cx, cy, 2.0);
        if (window.game) window.game.shakeCamera(22, 45);

        const radius = 65;
        const rad2 = radius * radius;

        // Obliterate terrain & create massive layered crater
        for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
                const dist2 = dx * dx + dy * dy;
                if (dist2 > rad2) continue;

                const tx = Math.floor(cx + dx);
                const ty = Math.floor(cy + dy);
                if (!world.inBounds(tx, ty)) continue;
                if (world.getTile(tx, ty) === TILES.BEDROCK) continue;

                if (dist2 < rad2 * 0.18) {
                    world.setTile(tx, ty, TILES.VOID);
                } else if (dist2 < rad2 * 0.45) {
                    world.setTile(tx, ty, TILES.FALLOUT);
                } else if (dist2 < rad2 * 0.75) {
                    world.setTile(tx, ty, Math.random() < 0.25 ? TILES.MAGMA_ROCK : TILES.ASH);
                } else {
                    world.ignite(tx, ty, 160);
                }
            }
        }

        // Blast and vaporize entities & buildings
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (!ent.active) continue;
            const dist = Math.hypot(ent.x - cx, ent.y - cy);
            if (dist < radius * 1.5) {
                // Check for The Great Galaxy Sacrifice!
                if (ent.type === 'galaxy_guardian' || ent.isCelestial) {
                    this.triggerGreatGalaxySacrifice(ent.x, ent.y, world, entityManager, particleSystem, audio);
                }

                ent.takeDamage(1500);
                // Push back violently at supersonic speed
                const angle = Math.atan2(ent.y - cy, ent.x - cx);
                ent.x += Math.cos(angle) * (radius * 1.5 - dist) * 1.2;
                ent.y += Math.sin(angle) * (radius * 1.5 - dist) * 1.2;
            }
        }

        // Destroy all buildings in blast zone
        for (let i = entityManager.buildings.length - 1; i >= 0; i--) {
            const b = entityManager.buildings[i];
            if (Math.hypot(b.x - cx, b.y - cy) < radius * 1.2) {
                entityManager.buildings.splice(i, 1);
            }
        }
    }

    triggerGreatGalaxySacrifice(gx, gy, world, entityManager, particleSystem, audio) {
        if (audio) {
            audio.playNuke();
            audio.playMagic();
            audio.playSingularity();
        }

        if (window.game) {
            window.game.shakeCamera(32, 60);
            window.game.unlockCosmicSacrificeSecrets();
        }

        if (particleSystem) {
            // Massive expanding celestial stardust supernova
            particleSystem.burst(gx, gy, 650, ['#a855f7', '#c026d3', '#38bdf8', '#facc15', '#ffffff'], 4, 18, 2, 8, 'stardust');
            for (let r = 0; r < 5; r++) {
                const sw = particleSystem.spawn(gx, gy, 0, 0, 10 + r * 8, '#38bdf8', 70 + r * 15, 'shockwave', 0, 1);
                sw.extra = 120;
            }
        }

        // Convert ground in wide radius to cosmic STARDUST, NEBULA & CRYSTAL
        const rad = 45;
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                if (dx * dx + dy * dy <= rad * rad) {
                    const tx = Math.floor(gx + dx);
                    const ty = Math.floor(gy + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        const rnd = Math.random();
                        world.setTile(tx, ty, rnd < 0.45 ? TILES.STARDUST : (rnd < 0.8 ? TILES.NEBULA : TILES.CRYSTAL));
                    }
                }
            }
        }
    }

    // Standard / Generic Explosion (Buffed)
    triggerExplosion(cx, cy, radius = 24, intensity = 1.5, world = null, entityManager = null, particleSystem = null, audio = null) {
        if (particleSystem) particleSystem.explosion(cx, cy, radius, intensity);
        if (audio) audio.playExplosion(intensity);
        if (window.game) window.game.shakeCamera(Math.min(20, 8 * intensity), 16);

        if (!world) return;
        const r2 = radius * radius;
        for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
                const dist2 = dx * dx + dy * dy;
                if (dist2 > r2) continue;
                const tx = Math.floor(cx + dx);
                const ty = Math.floor(cy + dy);
                if (!world.inBounds(tx, ty)) continue;
                if (world.getTile(tx, ty) === TILES.BEDROCK) continue;

                if (dist2 < r2 * 0.35) {
                    world.setTile(tx, ty, TILES.VOID);
                } else if (dist2 < r2 * 0.75) {
                    world.setTile(tx, ty, TILES.ASH);
                } else {
                    world.ignite(tx, ty, 80);
                }
            }
        }

        if (entityManager) {
            for (let i = 0; i < entityManager.entities.length; i++) {
                const ent = entityManager.entities[i];
                if (!ent.active) continue;
                const dist = Math.hypot(ent.x - cx, ent.y - cy);
                if (dist < radius * 1.3) {
                    ent.takeDamage(120 * intensity);
                    const angle = Math.atan2(ent.y - cy, ent.x - cx);
                    ent.x += Math.cos(angle) * (radius * 1.3 - dist) * 0.4;
                    ent.y += Math.sin(angle) * (radius * 1.3 - dist) * 0.4;
                }
            }
        }
    }

    // Antimatter / Void Bomb (Buffed to Colossal Annihilation)
    triggerAntimatter(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio) audio.playSingularity();
        if (window.game) window.game.shakeCamera(22, 45);

        const radius = 52;
        if (particleSystem) {
            particleSystem.burst(cx, cy, 260, ['#a855f7', '#000000', '#3b82f6', '#ffffff'], 3, 10, 2, 6, 'stardust');
            for (let r = 0; r < 3; r++) {
                const sw = particleSystem.spawn(cx, cy, 0, 0, 8 + r * 6, '#a855f7', 50 + r * 10, 'shockwave', 0, 1);
                sw.extra = 90;
            }
        }

        for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
                if (dx * dx + dy * dy <= radius * radius) {
                    const tx = Math.floor(cx + dx);
                    const ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        world.setTile(tx, ty, TILES.VOID);
                    }
                }
            }
        }

        // Delete entities instantly
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (ent.active && Math.hypot(ent.x - cx, ent.y - cy) <= radius * 1.2) {
                ent.takeDamage(9999);
            }
        }
    }

    // Black Hole Singularity
    spawnBlackHole(x, y, audio = null) {
        if (audio) audio.playSingularity();
        const bh = new BlackHole(x, y);
        this.blackHoles.push(bh);
        return bh;
    }

    // Orbital Laser / Divine Ray
    triggerOrbitalLaser(x, y, world, entityManager, particleSystem, audio) {
        if (audio && Math.random() < 0.2) audio.playLaser();
        const radius = 4;

        if (particleSystem) {
            // Bright laser beam line downwards
            for (let ly = 0; ly < y; ly += 6) {
                particleSystem.spawn(x + (Math.random() - 0.5) * 2, ly, 0, 0, 2, '#67e8f9', 5, 'spark');
            }
            particleSystem.burst(x, y, 10, ['#ffffff', '#00e5ff', '#ff007f'], 1, 4, 1.5, 3);
        }

        // Melt terrain into lava
        for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
                if (dx * dx + dy * dy <= radius * radius) {
                    const tx = Math.floor(x + dx);
                    const ty = Math.floor(y + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        world.setTile(tx, ty, TILES.LAVA);
                    }
                }
            }
        }

        // Burn entities
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (ent.active && Math.hypot(ent.x - x, ent.y - y) <= radius + 2) {
                ent.takeDamage(25);
            }
        }
    }

    // Meteor Strike
    spawnMeteor(tx, ty) {
        const startX = tx - 80 + (Math.random() - 0.5) * 40;
        const startY = -30;
        this.meteors.push(new Meteor(startX, startY, tx, ty));
    }

    // Cluster Missiles (Buffed to 18 High-Yield Warheads)
    triggerClusterBomb(cx, cy, world, entityManager, particleSystem, audio) {
        for (let i = 0; i < 18; i++) {
            const ox = (Math.random() - 0.5) * 60;
            const oy = (Math.random() - 0.5) * 60;
            setTimeout(() => {
                this.triggerExplosion(cx + ox, cy + oy, 14, 1.4, world, entityManager, particleSystem, audio);
            }, i * 65);
        }
    }

    // Tsar Finger Disintegrator (Buffed)
    triggerDisintegrator(x, y, world, entityManager, particleSystem) {
        const radius = 10;
        if (particleSystem) {
            particleSystem.burst(x, y, 35, ['#f43f5e', '#cbd5e1', '#ffffff'], 1.5, 4, 1.5, 3);
        }
        for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
                if (dx * dx + dy * dy <= radius * radius) {
                    const tx = Math.floor(x + dx);
                    const ty = Math.floor(y + dy);
                    if (world.inBounds(tx, ty)) {
                        world.setTile(tx, ty, TILES.VOID);
                    }
                }
            }
        }
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (ent.active && Math.hypot(ent.x - x, ent.y - y) <= radius * 1.2) {
                ent.takeDamage(9999);
            }
        }
    }

    // Supernova Bomb (Massive Galactic Explosion)
    triggerSupernova(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio) audio.playNuke();
        if (window.game) window.game.shakeCamera(32, 55);
        if (particleSystem) {
            particleSystem.burst(cx, cy, 450, ['#ffffff', '#f43f5e', '#a855f7', '#38bdf8', '#facc15'], 3, 16, 2, 7, 'stardust');
            for (let r = 0; r < 4; r++) {
                const sw = particleSystem.spawn(cx, cy, 0, 0, 10 + r * 8, '#facc15', 60 + r * 15, 'shockwave', 0, 1);
                sw.extra = 110;
            }
        }
        this.triggerExplosion(cx, cy, 85, 4.0, world, entityManager, particleSystem, audio);

        // Convert central area to cosmic nebula & stardust
        const rad = 30;
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                if (dx * dx + dy * dy <= rad * rad) {
                    const tx = Math.floor(cx + dx);
                    const ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        world.setTile(tx, ty, Math.random() < 0.5 ? TILES.STARDUST : TILES.NEBULA);
                    }
                }
            }
        }
    }

    // Corrosion Bomb
    triggerCorrosionBomb(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio) audio.playSplash();
        const radius = 18;
        if (particleSystem) {
            particleSystem.burst(cx, cy, 110, ['#84cc16', '#4ade80', '#15803d'], 1.5, 5, 1.5, 4, 'acid');
        }
        for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
                if (dx * dx + dy * dy <= radius * radius) {
                    const tx = Math.floor(cx + dx);
                    const ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        world.setTile(tx, ty, TILES.ACID);
                    }
                }
            }
        }
    }

    // NEW: Napalm Carpet Bombing Strike
    triggerNapalmStrike(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio) audio.playExplosion(1.5);
        if (window.game) window.game.shakeCamera(16, 35);
        for (let step = -7; step <= 7; step++) {
            const bx = cx + step * 7;
            const by = cy + (Math.random() - 0.5) * 12;
            setTimeout(() => {
                this.triggerExplosion(bx, by, 16, 1.2, world, entityManager, particleSystem, audio);
                // Shower area in raging fire and magma
                for (let fy = -8; fy <= 8; fy++) {
                    for (let fx = -8; fx <= 8; fx++) {
                        const tx = Math.floor(bx + fx);
                        const ty = Math.floor(by + fy);
                        if (world.inBounds(tx, ty)) {
                            world.ignite(tx, ty, 180);
                            if (Math.random() < 0.25 && world.getTile(tx, ty) !== TILES.BEDROCK) {
                                world.setTile(tx, ty, TILES.MAGMA_ROCK);
                            }
                        }
                    }
                }
            }, (step + 7) * 55);
        }
    }

    // NEW: Kinetic Orbital Penetrator ("Rods from God")
    triggerKineticStrike(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio) {
            audio.playThunder();
            audio.playExplosion(2.5);
        }
        if (window.game) window.game.shakeCamera(28, 50);

        // Penetration shockwave column
        if (particleSystem) {
            for (let y = -200; y < cy; y += 8) {
                particleSystem.spawn(cx + (Math.random() - 0.5) * 4, y, 0, 12, 3, '#f1f5f9', 15, 'fire');
                particleSystem.spawn(cx + (Math.random() - 0.5) * 8, y, 0, 10, 3, '#64748b', 20, 'smoke');
            }
            particleSystem.burst(cx, cy, 300, ['#ffffff', '#f97316', '#475569', '#334155'], 4, 18, 3, 7);
            for (let r = 0; r < 4; r++) {
                const sw = particleSystem.spawn(cx, cy, 0, 0, 10 + r * 8, '#f1f5f9', 60 + r * 15, 'shockwave', 0, 1);
                sw.extra = 110;
            }
        }

        // Deep crater drilled into the crust
        const radius = 38;
        const rad2 = radius * radius;
        for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
                const dist2 = dx * dx + dy * dy;
                if (dist2 > rad2) continue;
                const tx = Math.floor(cx + dx);
                const ty = Math.floor(cy + dy);
                if (!world.inBounds(tx, ty)) continue;

                if (dist2 < rad2 * 0.45) {
                    world.setTile(tx, ty, TILES.VOID);
                } else if (dist2 < rad2 * 0.8) {
                    world.setTile(tx, ty, TILES.MAGMA_ROCK);
                } else {
                    world.setTile(tx, ty, TILES.STONE);
                }
            }
        }

        // Seismic shockwave wiping entities
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (!ent.active) continue;
            const dist = Math.hypot(ent.x - cx, ent.y - cy);
            if (dist < radius * 1.5) {
                ent.takeDamage(1200);
                const angle = Math.atan2(ent.y - cy, ent.x - cx);
                ent.x += Math.cos(angle) * (radius * 1.5 - dist) * 1.2;
                ent.y += Math.sin(angle) * (radius * 1.5 - dist) * 1.2;
            }
        }
    }

    // NEW: Void Implosion
    triggerVoidImplosion(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio) audio.playSingularity();
        if (window.game) window.game.shakeCamera(18, 35);
        const radius = 35;

        // Pull tiles and entities inward
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (!ent.active) continue;
            const dist = Math.hypot(ent.x - cx, ent.y - cy);
            if (dist < radius * 1.3) {
                const angle = Math.atan2(cy - ent.y, cx - ent.x);
                ent.x += Math.cos(angle) * 12;
                ent.y += Math.sin(angle) * 12;
                ent.takeDamage(300);
            }
        }

        if (particleSystem) {
            particleSystem.burst(cx, cy, 200, ['#a855f7', '#38bdf8', '#000000', '#ffffff'], 3, 10, 2, 5, 'stardust');
        }

        setTimeout(() => {
            this.triggerExplosion(cx, cy, 40, 2.5, world, entityManager, particleSystem, audio);
        }, 300);
    }

    // ==========================================
    // 2. NATURE & NATURAL DISASTERS
    // ==========================================

    spawnVolcano(x, y, world) {
        // Sculpt volcanic mountain base
        const radius = 8;
        for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
                const dist2 = dx * dx + dy * dy;
                if (dist2 <= radius * radius) {
                    const tx = Math.floor(x + dx);
                    const ty = Math.floor(y + dy);
                    if (world.inBounds(tx, ty)) {
                        if (dist2 < 4) world.setTile(tx, ty, TILES.LAVA);
                        else if (dist2 < 16) world.setTile(tx, ty, TILES.STONE);
                        else world.setTile(tx, ty, TILES.HIGH_MOUNTAIN);
                    }
                }
            }
        }
        this.volcanoes.push(new Volcano(x, y));
    }

    // NEW: Supervolcano (Mega Caldera)
    spawnSupervolcano(x, y, world) {
        const radius = 22;
        for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
                const dist2 = dx * dx + dy * dy;
                if (dist2 <= radius * radius) {
                    const tx = Math.floor(x + dx);
                    const ty = Math.floor(y + dy);
                    if (world.inBounds(tx, ty)) {
                        if (dist2 < 25) world.setTile(tx, ty, TILES.LAVA);
                        else if (dist2 < 90) world.setTile(tx, ty, TILES.MAGMA_ROCK);
                        else if (dist2 < 220) world.setTile(tx, ty, TILES.OBSIDIAN);
                        else world.setTile(tx, ty, TILES.HIGH_MOUNTAIN);
                    }
                }
            }
        }
        this.volcanoes.push(new Volcano(x, y));
        this.volcanoes.push(new Volcano(x - 5, y - 4));
        this.volcanoes.push(new Volcano(x + 5, y + 4));
        if (window.game) window.game.shakeCamera(16, 30);
    }

    spawnTornado(x, y) {
        this.tornadoes.push(new Tornado(x, y, false));
    }

    // NEW: Fire Tornado
    spawnFireTornado(x, y) {
        this.tornadoes.push(new Tornado(x, y, true));
    }

    // NEW: Meteor Shower Barrage
    triggerMeteorShower(cx, cy) {
        for (let i = 0; i < 16; i++) {
            setTimeout(() => {
                const ox = (Math.random() - 0.5) * 80;
                const oy = (Math.random() - 0.5) * 60;
                this.spawnMeteor(cx + ox, cy + oy);
            }, i * 90);
        }
    }

    // Secret Apocalypse: Cosmic Supernova Collapse (Unlocked via Galaxy Sacrifice)
    triggerSupernovaCollapse(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio) {
            audio.playSingularity();
            audio.playNuke();
        }
        if (window.game) window.game.shakeCamera(35, 70);

        if (particleSystem) {
            particleSystem.burst(cx, cy, 800, ['#ffffff', '#a855f7', '#38bdf8', '#facc15', '#ec4899'], 5, 20, 3, 9, 'stardust');
            for (let r = 0; r < 6; r++) {
                const sw = particleSystem.spawn(cx, cy, 0, 0, 12 + r * 10, '#38bdf8', 80 + r * 15, 'shockwave', 0, 1);
                sw.extra = 140;
            }
        }

        // Obliterate terrain in massive 95-tile radius into stardust and deep void
        const radius = 95;
        const rad2 = radius * radius;
        for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
                const dist2 = dx * dx + dy * dy;
                if (dist2 > rad2) continue;
                const tx = Math.floor(cx + dx);
                const ty = Math.floor(cy + dy);
                if (!world.inBounds(tx, ty) || world.getTile(tx, ty) === TILES.BEDROCK) continue;

                if (dist2 < rad2 * 0.2) {
                    world.setTile(tx, ty, TILES.VOID);
                } else if (dist2 < rad2 * 0.6) {
                    world.setTile(tx, ty, Math.random() < 0.6 ? TILES.STARDUST : TILES.NEBULA);
                } else {
                    world.setTile(tx, ty, Math.random() < 0.3 ? TILES.CRYSTAL : TILES.CORRUPTED);
                }
            }
        }

        // Annihilate all entities
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (ent.active && Math.hypot(ent.x - cx, ent.y - cy) < radius * 1.2) {
                ent.takeDamage(9999);
            }
        }
    }

    triggerEarthquake(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio) audio.playThunder();
        if (window.game) window.game.shakeCamera(18, 40);
        // Create jagged fault line chasm
        let curX = cx - 50;
        let curY = cy + (Math.random() - 0.5) * 15;
        const targetX = cx + 50;

        while (curX < targetX) {
            curX += 1 + Math.random() * 2;
            curY += (Math.random() - 0.5) * 4;

            for (let w = -2; w <= 2; w++) {
                const tx = Math.floor(curX);
                const ty = Math.floor(curY + w);
                if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                    if (Math.abs(w) <= 1) {
                        world.setTile(tx, ty, Math.random() < 0.2 ? TILES.MAGMA_ROCK : TILES.VOID);
                    } else if (Math.random() < 0.4) {
                        world.setTile(tx, ty, TILES.STONE);
                    }
                    if (particleSystem && Math.random() < 0.3) {
                        particleSystem.spawn(tx, ty, (Math.random() - 0.5) * 2, -1.5, 2.5, '#4b5563', 30, 'smoke');
                    }
                }
            }
        }

        // Damage entities nearby
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (!ent.active) continue;
            const dist = Math.hypot(ent.x - cx, ent.y - cy);
            if (dist < 55) {
                ent.takeDamage(120);
                ent.y += (Math.random() - 0.5) * 4;
            }
        }
    }

    triggerLightning(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio) audio.playThunder();

        // Draw branching jagged lightning particles from sky
        if (particleSystem) {
            let lx = cx + (Math.random() - 0.5) * 20;
            for (let ly = 0; ly < cy; ly += 4) {
                lx += (Math.random() - 0.5) * 6;
                particleSystem.spawn(lx, ly, 0, 0, 2, '#ffffff', 8, 'spark');
                particleSystem.spawn(lx, ly, 0, 0, 3, '#60a5fa', 6, 'spark');
            }
            particleSystem.burst(cx, cy, 25, ['#ffffff', '#93c5fd', '#3b82f6'], 2, 5, 1.5, 3);
        }

        // Ignite ground or electrify
        world.ignite(Math.floor(cx), Math.floor(cy), 120);

        // Strike entities
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (ent.active && Math.hypot(ent.x - cx, ent.y - cy) < 8) {
                // If strikes human, chance to turn into supercharged or skeleton
                if (Math.random() < 0.4) {
                    ent.applyBlessing();
                } else {
                    ent.takeDamage(120);
                }
            }
        }
    }

    startStorm(type, duration = 600) {
        this.activeStorm = type; // rain, snow, acid
        this.stormTimer = duration;
    }

    triggerTsunami(cx, cy, world, particleSystem, audio) {
        if (audio) audio.playSplash();
        const width = 25;
        for (let dy = -15; dy <= 15; dy++) {
            for (let dx = -width; dx <= width; dx++) {
                const tx = Math.floor(cx + dx);
                const ty = Math.floor(cy + dy);
                if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                    world.setTile(tx, ty, TILES.WATER);
                }
            }
        }
        if (particleSystem) {
            particleSystem.burst(cx, cy, 80, ['#60a5fa', '#93c5fd', '#ffffff'], 2, 6, 2, 4, 'water');
        }
    }

    // ==========================================
    // 3. MISCELLANEOUS POWERS & MIRACLES
    // ==========================================

    // Heat Ray
    triggerHeatRay(x, y, world, particleSystem) {
        const radius = 6;
        if (particleSystem) {
            particleSystem.burst(x, y, 8, ['#ff4500', '#f59e0b'], 1, 3, 1.5, 3, 'fire');
        }
        for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
                if (dx * dx + dy * dy <= radius * radius) {
                    const tx = Math.floor(x + dx);
                    const ty = Math.floor(y + dy);
                    if (world.inBounds(tx, ty)) {
                        const t = world.getTile(tx, ty);
                        if (t === TILES.ICE) world.setTile(tx, ty, TILES.WATER);
                        else if (t === TILES.SNOW) world.setTile(tx, ty, TILES.GRASS);
                        else world.ignite(tx, ty, 80);
                    }
                }
            }
        }
    }

    // Freeze Ray
    triggerFreezeRay(x, y, world, entityManager, particleSystem) {
        const radius = 7;
        if (particleSystem) {
            particleSystem.burst(x, y, 10, ['#a5f3fc', '#ffffff'], 1, 3, 1.5, 3, 'spark');
        }
        for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
                if (dx * dx + dy * dy <= radius * radius) {
                    const tx = Math.floor(x + dx);
                    const ty = Math.floor(y + dy);
                    if (world.inBounds(tx, ty)) {
                        const t = world.getTile(tx, ty);
                        if (t === TILES.WATER || t === TILES.DEEP_WATER) world.setTile(tx, ty, TILES.ICE);
                        else if (t === TILES.LAVA) world.setTile(tx, ty, TILES.STONE);
                        else if (t === TILES.GRASS) world.setTile(tx, ty, TILES.SNOW);
                    }
                }
            }
        }
        // Freeze entities in place
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (ent.active && Math.hypot(ent.x - x, ent.y - y) <= radius) {
                ent.frozen = 200;
            }
        }
    }

    // Divine Blessing
    triggerBlessing(x, y, entityManager, particleSystem, audio) {
        if (audio) audio.playMagic();
        if (particleSystem) {
            particleSystem.burst(x, y, 20, ['#facc15', '#fef08a', '#ffffff'], 1, 3, 1.5, 3, 'stardust');
        }
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (ent.active && Math.hypot(ent.x - x, ent.y - y) <= 10) {
                ent.applyBlessing();
            }
        }
    }

    // Dark Curse
    triggerCurse(x, y, entityManager, particleSystem) {
        if (particleSystem) {
            particleSystem.burst(x, y, 20, ['#7e22ce', '#3b0764', '#000000'], 1, 3, 1.5, 3, 'stardust');
        }
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (ent.active && Math.hypot(ent.x - x, ent.y - y) <= 10) {
                ent.applyCurse();
            }
        }
    }

    // Plague Spore Cloud
    triggerPlague(x, y, entityManager, particleSystem) {
        if (particleSystem) {
            particleSystem.burst(x, y, 30, ['#84cc16', '#65a30d', '#365314'], 1, 3, 1.5, 3, 'acid');
        }
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (ent.active && Math.hypot(ent.x - x, ent.y - y) <= 12) {
                ent.applyInfection();
            }
        }
    }

    // Thanos Snap / Coin of Fate (50% dissolve)
    triggerCoinOfFate(entityManager, particleSystem, audio) {
        if (audio) audio.playMagic();
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (ent.active && Math.random() < 0.5) {
                if (particleSystem) {
                    particleSystem.burst(ent.x, ent.y, 15, ['#facc15', '#fbbf24', '#ffffff'], 0.5, 2, 1, 2, 'stardust');
                }
                ent.active = false;
            }
        }
    }

    // Healing Aura
    triggerHealing(x, y, entityManager, particleSystem, audio) {
        if (audio) audio.playMagic();
        if (particleSystem) {
            particleSystem.burst(x, y, 25, ['#34d399', '#6ee7b7', '#ffffff'], 1, 3, 1.5, 3, 'stardust');
        }
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (ent.active && Math.hypot(ent.x - x, ent.y - y) <= 15) {
                ent.hp = ent.maxHp;
                ent.infected = false;
                ent.cursed = false;
            }
        }
    }

    // Frenzy / Bloodlust
    triggerFrenzy(x, y, entityManager, particleSystem) {
        if (particleSystem) {
            particleSystem.burst(x, y, 25, ['#ef4444', '#b91c1c'], 1, 3, 1.5, 3, 'spark');
        }
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (ent.active && Math.hypot(ent.x - x, ent.y - y) <= 12) {
                ent.attack *= 2.5;
                ent.speed *= 1.5;
                ent.state = 'attack';
            }
        }
    }

    // Growth Ray
    triggerGrowth(x, y, entityManager, particleSystem) {
        if (particleSystem) {
            particleSystem.burst(x, y, 15, ['#38bdf8', '#0284c7'], 1, 3, 1.5, 3, 'spark');
        }
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (ent.active && Math.hypot(ent.x - x, ent.y - y) <= 8) {
                ent.scale = Math.min(3.5, ent.scale * 1.5);
                ent.maxHp *= 2;
                ent.hp = ent.maxHp;
                ent.attack *= 1.8;
                break;
            }
        }
    }

    // Shrink Ray
    triggerShrink(x, y, entityManager, particleSystem) {
        if (particleSystem) {
            particleSystem.burst(x, y, 15, ['#ec4899', '#db2777'], 1, 3, 1.5, 3, 'spark');
        }
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (ent.active && Math.hypot(ent.x - x, ent.y - y) <= 8) {
                ent.scale = Math.max(0.4, ent.scale * 0.6);
                ent.hp = Math.max(1, Math.floor(ent.hp * 0.5));
                ent.attack = Math.max(1, Math.floor(ent.attack * 0.5));
                break;
            }
        }
    }

    // Spawn UFO
    spawnUFO(x, y) {
        this.ufos.push(new UFO(x, y));
    }

    // Forcefield Shield Bubble
    triggerForcefield(x, y) {
        this.forcefields.push(new Forcefield(x, y));
    }

    // Dimension Rift
    triggerDimensionRift(x, y) {
        this.rifts.push(new DimensionRift(x, y));
    }

    // Orbital Ion Cannon
    triggerIonCannon(x, y) {
        this.ionCannons.push(new IonCannon(x, y));
    }

    // Geyser / Hot Springs
    triggerGeyser(cx, cy, world, particleSystem, audio) {
        if (audio) audio.playSplash();
        if (particleSystem) {
            particleSystem.burst(cx, cy, 35, ['#e0f2fe', '#38bdf8', '#ffffff'], 1, 5, 2, 5, 'water', 0.1);
        }
        const r = 4;
        for (let dy = -r; dy <= r; dy++) {
            for (let dx = -r; dx <= r; dx++) {
                if (dx * dx + dy * dy <= r * r) {
                    const tx = Math.floor(cx + dx);
                    const ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        world.setTile(tx, ty, TILES.WATER);
                    }
                }
            }
        }
    }

    // Mind Control: Order nearby creatures towards target point
    triggerMindControl(tx, ty, entityManager, particleSystem) {
        if (particleSystem) {
            particleSystem.burst(tx, ty, 20, ['#ec4899', '#f43f5e', '#ffffff'], 2, 4, 1.5, 3, 'spark');
        }
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (ent.active && Math.hypot(ent.x - tx, ent.y - ty) < 35) {
                const angle = Math.atan2(ty - ent.y, tx - ent.x);
                ent.vx = Math.cos(angle) * ent.speed * 2.2;
                ent.vy = Math.sin(angle) * ent.speed * 2.2;
            }
        }
    }

    // Overclock Energy Surge
    triggerOverclock(cx, cy, entityManager, particleSystem, audio) {
        if (audio) audio.playMagic();
        if (particleSystem) {
            particleSystem.burst(cx, cy, 25, ['#facc15', '#fbbf24', '#ffffff'], 2, 5, 1.5, 3, 'spark');
        }
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (ent.active && Math.hypot(ent.x - cx, ent.y - cy) < 25) {
                ent.overclockTimer = 600; // 10 seconds of 2.5x speed and power
            }
        }
    }

    // Necromancy: Raise Army of Skeletons from the Ground
    triggerNecromancy(cx, cy, entityManager, particleSystem, audio) {
        if (audio) audio.playMagic();
        if (particleSystem) {
            particleSystem.burst(cx, cy, 40, ['#4ade80', '#15803d', '#cbd5e1', '#000000'], 2, 6, 2, 4, 'stardust');
        }
        for (let k = 0; k < 5; k++) {
            const sx = cx + (Math.random() - 0.5) * 16;
            const sy = cy + (Math.random() - 0.5) * 16;
            entityManager.spawn('skeleton', sx, sy);
        }
    }

    // Nuke Missile Airstrike
    triggerNukeMissile(targetX, targetY) {
        this.nukeMissiles.push(new NukeMissile(targetX, targetY));
    }

    // Clone Rain Weather
    triggerCloneRain(duration = 800) {
        this.activeStorm = 'clone_rain';
        this.stormTimer = duration;
    }

    clear() {
        this.blackHoles = [];
        this.tornadoes = [];
        this.volcanoes = [];
        this.meteors = [];
        this.ufos = [];
        this.forcefields = [];
        this.rifts = [];
        this.ionCannons = [];
        this.nukeMissiles = [];
        this.activeStorm = null;
        this.stormTimer = 0;
        this.grabbedEntity = null;
    }
}

window.DisasterManager = DisasterManager;
