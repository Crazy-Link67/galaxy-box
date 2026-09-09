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
        this.x = targetX + (Math.random() - 0.5) * 80;
        this.y = -180;
        this.speed = 4.0;
        this.active = true;
        this.angle = Math.atan2(this.targetY - this.y, this.targetX - this.x);
        this.animTimer = 0;
    }

    update(world, entityManager, disasterManager, particleSystem, audio) {
        this.animTimer++;
        const dx = this.targetX - this.x;
        const dy = this.targetY - this.y;
        const dist = Math.hypot(dx, dy);

        this.angle = Math.atan2(dy, dx);
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.speed = Math.min(11.0, this.speed + 0.22);

        if (particleSystem) {
            const exX = this.x - Math.cos(this.angle) * 12;
            const exY = this.y - Math.sin(this.angle) * 12;
            particleSystem.spawn(exX, exY, -Math.cos(this.angle) * 2.5 + (Math.random() - 0.5), -Math.sin(this.angle) * 2.5 + (Math.random() - 0.5), 3.2, '#f97316', 25, 'fire');
            particleSystem.spawn(exX, exY, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, 4.5, '#475569', 35, 'smoke');
            if (Math.random() < 0.35) {
                particleSystem.spawn(exX, exY, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, 2.5, '#facc15', 15, 'spark');
            }
        }

        const reachedTarget = dist <= Math.max(12, this.speed * 1.5) || (this.y >= this.targetY && Math.abs(dx) <= 20);

        if (reachedTarget) {
            this.active = false;
            disasterManager.triggerWorldEndingNuke(this.targetX, this.targetY, world, entityManager, particleSystem, audio);
        }
    }

    render(ctx) {
        ctx.save();

        // 1. Tactical Apocalyptic Targeting Reticle at target ground zero
        const tx = Math.floor(this.targetX);
        const ty = Math.floor(this.targetY);
        const pulse = Math.sin(this.animTimer * 0.15) * 5;
        const r = Math.floor(26 + pulse);

        // Stepped pixel hazard corners
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(tx - r, ty - r, 8, 2);
        ctx.fillRect(tx - r, ty - r, 2, 8);
        ctx.fillRect(tx + r - 8, ty - r, 8, 2);
        ctx.fillRect(tx + r - 2, ty - r, 2, 8);
        ctx.fillRect(tx - r, ty + r - 2, 8, 2);
        ctx.fillRect(tx - r, ty + r - 8, 2, 8);
        ctx.fillRect(tx + r - 8, ty + r - 2, 8, 2);
        ctx.fillRect(tx + r - 2, ty + r - 8, 2, 8);

        // Crosshairs
        ctx.fillRect(tx - r - 6, ty - 1, 6, 2);
        ctx.fillRect(tx + r, ty - 1, 6, 2);
        ctx.fillRect(tx - 1, ty - r - 6, 2, 6);
        ctx.fillRect(tx - 1, ty + r, 2, 6);

        // Concentric inner box
        ctx.strokeStyle = '#facc15';
        ctx.lineWidth = 1;
        ctx.strokeRect(tx - Math.floor(r * 0.5), ty - Math.floor(r * 0.5), Math.floor(r), Math.floor(r));

        // Warning text
        ctx.fillStyle = '#ef4444';
        ctx.font = 'bold 8px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('☢️ APOCALYPTIC TARGET ☢️', tx, ty - r - 8);

        // 2. Heavy Ballistic ICBM Missile Body
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle + Math.PI / 2);

        // Missile hull
        ctx.fillStyle = '#e2e8f0';
        ctx.fillRect(-3.5, -12, 7, 24);

        // Conical red warhead tip
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.moveTo(-3.5, -12);
        ctx.lineTo(0, -20);
        ctx.lineTo(3.5, -12);
        ctx.closePath();
        ctx.fill();

        // Nuclear hazard stripes
        ctx.fillStyle = '#eab308';
        ctx.fillRect(-3.5, -5, 7, 3);
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(-3.5, -2, 7, 3);

        // Hazard symbol indicator
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(-1.5, 3, 3, 3);

        // Stabilizer fins
        ctx.fillStyle = '#475569';
        ctx.beginPath();
        ctx.moveTo(-3.5, 6); ctx.lineTo(-8, 12); ctx.lineTo(-3.5, 12);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(3.5, 6); ctx.lineTo(8, 12); ctx.lineTo(3.5, 12);
        ctx.fill();

        // Rocket thruster exhaust
        ctx.fillStyle = '#f97316';
        ctx.beginPath();
        ctx.moveTo(-2.5, 12);
        ctx.lineTo(0, 22 + Math.random() * 6);
        ctx.lineTo(2.5, 12);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#fef08a';
        ctx.beginPath();
        ctx.moveTo(-1.5, 12);
        ctx.lineTo(0, 17 + Math.random() * 3);
        ctx.lineTo(1.5, 12);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
    }
}

class DuckBarrage {
    constructor(targetX, targetY) {
        this.targetX = targetX;
        this.targetY = targetY;
        this.timer = 80;
        this.ducksLeft = 7;
        this.active = true;
    }

    update(world, entityManager, particleSystem, audio, disasterManager) {
        this.timer--;
        if (this.ducksLeft > 0 && this.timer % 10 === 0) {
            this.ducksLeft--;
            const ox = this.targetX + (Math.random() - 0.5) * 28;
            const oy = this.targetY + (Math.random() - 0.5) * 28;
            if (audio && typeof audio.playQuackSound === 'function') audio.playQuackSound();
            if (entityManager) {
                const duck = entityManager.spawn('duck', ox, oy);
                if (duck) {
                    duck.speed *= 1.4;
                    if (particleSystem) {
                        particleSystem.burst(ox, oy, 16, ['#facc15', '#fef08a', '#ffffff'], 2, 5, 1.5, 3, 'stardust');
                    }
                }
            }
        }
        if (this.ducksLeft <= 0 && this.timer <= 0) {
            this.active = false;
        }
    }

    render(ctx) {
        if (!this.active) return;
        const tx = Math.round(this.targetX);
        const ty = Math.round(this.targetY);
        ctx.save();
        ctx.strokeStyle = '#facc15';
        ctx.lineWidth = 1;
        ctx.strokeRect(tx - 12, ty - 12, 24, 24);
        ctx.fillStyle = '#fef08a';
        ctx.fillRect(tx - 4, ty, 9, 1);
        ctx.fillRect(tx, ty - 4, 1, 9);
        ctx.fillStyle = '#eab308';
        ctx.fillRect(tx - 12, ty - 12, 2, 2);
        ctx.fillRect(tx + 11, ty - 12, 2, 2);
        ctx.fillRect(tx - 12, ty + 11, 2, 2);
        ctx.fillRect(tx + 11, ty + 11, 2, 2);
        ctx.restore();
    }
}

class AntimatterMissile {
    constructor(targetX, targetY) {
        this.targetX = targetX;
        this.targetY = targetY;
        this.x = targetX + (Math.random() - 0.5) * 60;
        this.y = -150;
        this.speed = 4.5;
        this.active = true;
        this.angle = Math.atan2(this.targetY - this.y, this.targetX - this.x);
        this.animTimer = 0;
    }

    update(world, entityManager, disasterManager, particleSystem, audio) {
        this.animTimer++;
        const dx = this.targetX - this.x;
        const dy = this.targetY - this.y;
        const dist = Math.hypot(dx, dy);

        this.angle = Math.atan2(dy, dx);
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.speed = Math.min(12.0, this.speed + 0.25);

        if (particleSystem) {
            const exX = this.x - Math.cos(this.angle) * 10;
            const exY = this.y - Math.sin(this.angle) * 10;
            particleSystem.spawn(exX, exY, -Math.cos(this.angle) * 2, -Math.sin(this.angle) * 2, 3, '#a855f7', 20, 'stardust');
            particleSystem.spawn(exX, exY, (Math.random() - 0.5), (Math.random() - 0.5), 2.5, '#6366f1', 15, 'stardust');
        }

        if (dist <= Math.max(12, this.speed * 1.5) || (this.y >= this.targetY && Math.abs(dx) <= 15)) {
            this.active = false;
            disasterManager.triggerAntimatter(this.targetX, this.targetY, world, entityManager, particleSystem, audio);
        }
    }

    render(ctx) {
        ctx.save();
        const tx = Math.floor(this.targetX);
        const ty = Math.floor(this.targetY);
        const pulse = Math.sin(this.animTimer * 0.2) * 4;
        const r = Math.floor(20 + pulse);

        // Purple targeting ring
        ctx.strokeStyle = '#a855f7';
        ctx.lineWidth = 1.2;
        ctx.strokeRect(tx - r, ty - r, r * 2, r * 2);
        ctx.fillStyle = '#c084fc';
        ctx.fillRect(tx - 1, ty - 1, 2, 2);

        // Missile body
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle + Math.PI / 2);
        ctx.fillStyle = '#312e81';
        ctx.fillRect(-3, -10, 6, 20);
        ctx.fillStyle = '#a855f7';
        ctx.fillRect(-2, -12, 4, 3);
        ctx.fillStyle = '#6366f1';
        ctx.fillRect(-4, 6, 8, 4);
        ctx.restore();
    }
}

class OrbitalDeathRay {
    constructor(x, y, duration = 180) {
        this.x = x;
        this.y = y;
        this.targetX = x;
        this.targetY = y;
        this.life = duration;
        this.maxLife = duration;
        this.active = true;
    }

    update(world, entityManager, particleSystem, audio) {
        this.life--;
        if (this.life <= 0) {
            this.active = false;
            return;
        }

        // Smoothly steer towards target
        this.x += (this.targetX - this.x) * 0.12;
        this.y += (this.targetY - this.y) * 0.12;

        if (this.life % 25 === 0 && audio) {
            if (typeof audio.playHammerOfDawn === 'function') audio.playHammerOfDawn();
            else if (typeof audio.playLaser === 'function') audio.playLaser();
        }

        if (window.game && Math.random() < 0.3) {
            window.game.shakeCamera(6, 8);
        }

        // Searing orbital beam particles
        if (particleSystem) {
            for (let ly = -200; ly < this.y; ly += 10) {
                particleSystem.spawn(this.x + (Math.random() - 0.5) * 6, ly, 0, 8, 2.5, '#f59e0b', 10, 'spark');
                particleSystem.spawn(this.x + (Math.random() - 0.5) * 3, ly, 0, 9, 2, '#ffffff', 8, 'spark');
            }
            particleSystem.burst(this.x, this.y, 12, ['#ffffff', '#facc15', '#ef4444'], 2, 6, 1.5, 3, 'fire');
        }

        // Carve burning trenches in radius 7
        const r = 7;
        for (let dy = -r; dy <= r; dy++) {
            for (let dx = -r; dx <= r; dx++) {
                if (dx * dx + dy * dy <= r * r) {
                    const tx = Math.floor(this.x + dx);
                    const ty = Math.floor(this.y + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        if (dx * dx + dy * dy < 9) {
                            world.setTile(tx, ty, TILES.LAVA);
                        } else if (Math.random() < 0.4) {
                            world.setTile(tx, ty, TILES.MAGMA_ROCK);
                            world.ignite(tx, ty, 100);
                        }
                    }
                }
            }
        }

        // Incinerate entities
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (ent.active && Math.hypot(ent.x - this.x, ent.y - this.y) <= 12) {
                ent.takeDamage(18);
            }
        }
    }

    render(ctx) {
        ctx.save();
        const cx = Math.floor(this.x);
        const cy = Math.floor(this.y);

        // Sweeping golden searing beam
        ctx.fillStyle = 'rgba(245, 158, 11, 0.4)';
        ctx.fillRect(cx - 8, -500, 16, cy + 500);
        ctx.fillStyle = 'rgba(254, 240, 138, 0.8)';
        ctx.fillRect(cx - 3, -500, 6, cy + 500);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(cx - 1, -500, 2, cy + 500);

        // Ground searing flare
        ctx.fillStyle = '#fef08a';
        ctx.fillRect(cx - 12, cy - 3, 24, 6);
        ctx.fillRect(cx - 3, cy - 12, 6, 24);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(cx - 6, cy - 2, 12, 4);

        ctx.restore();
    }
}

class Whirlpool {
    constructor(x, y, duration = 500) {
        this.x = x;
        this.y = y;
        this.life = duration;
        this.maxLife = duration;
        this.radius = 24;
        this.active = true;
    }

    update(world, entityManager, particleSystem, audio) {
        this.life--;
        if (this.life <= 0) {
            this.active = false;
            return;
        }

        if (this.life % 60 === 0 && audio && typeof audio.playMaelstrom === 'function') {
            audio.playMaelstrom();
        }

        // Swirling water particles
        if (particleSystem) {
            for (let i = 0; i < 4; i++) {
                const angle = Math.random() * Math.PI * 2;
                const dist = 4 + Math.random() * this.radius;
                const px = this.x + Math.cos(angle) * dist;
                const py = this.y + Math.sin(angle) * dist;
                const vx = -Math.sin(angle) * 2.2 - Math.cos(angle) * 1.2;
                const vy = Math.cos(angle) * 2.2 - Math.sin(angle) * 1.2;
                particleSystem.spawn(px, py, vx, vy, 1.5, Math.random() < 0.5 ? '#38bdf8' : '#ffffff', 14, 'water');
            }
        }

        // Deepen and erode water tiles
        const rad = Math.floor(this.radius);
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                const dist2 = dx * dx + dy * dy;
                if (dist2 > rad * rad) continue;
                const tx = Math.floor(this.x + dx);
                const ty = Math.floor(this.y + dy);
                if (!world.inBounds(tx, ty)) continue;

                const t = world.getTile(tx, ty);
                if (t === TILES.WATER && dist2 < 36 && Math.random() < 0.05) {
                    world.setTile(tx, ty, TILES.DEEP_WATER);
                } else if ((t === TILES.SAND || t === TILES.SOIL) && Math.random() < 0.04) {
                    world.setTile(tx, ty, TILES.WATER);
                }
            }
        }

        // Drag entities & ships inward
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (!ent.active) continue;
            const dist = Math.hypot(this.x - ent.x, this.y - ent.y);
            if (dist < this.radius) {
                const angle = Math.atan2(this.y - ent.y, this.x - ent.x);
                ent.x += Math.cos(angle) * 1.4;
                ent.y += Math.sin(angle) * 1.4;
                if (dist < 5) {
                    ent.takeDamage(8);
                }
            }
        }
    }

    render(ctx) {
        ctx.save();
        const cx = Math.floor(this.x);
        const cy = Math.floor(this.y);
        ctx.fillStyle = '#0369a1';
        // Stepped pixel swirling spiral
        for (let a = 0; a < 6; a++) {
            const ang = Date.now() * 0.006 + a * (Math.PI / 3);
            const r1 = 6 + (a % 3) * 3;
            const r2 = 14 + (a % 3) * 4;
            ctx.fillRect(Math.floor(cx + Math.cos(ang) * r1), Math.floor(cy + Math.sin(ang) * r1 * 0.6), 2, 2);
            ctx.fillStyle = '#38bdf8';
            ctx.fillRect(Math.floor(cx + Math.cos(ang + 0.3) * r2), Math.floor(cy + Math.sin(ang + 0.3) * r2 * 0.6), 2, 2);
        }
        // Center vortex void
        ctx.fillStyle = '#082f49';
        ctx.fillRect(cx - 2, cy - 2, 4, 4);
        ctx.restore();
    }
}

class ToxicGasCloud {
    constructor(x, y, duration = 350) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.life = duration;
        this.maxLife = duration;
        this.radius = 20;
        this.active = true;
    }

    update(world, entityManager, particleSystem) {
        this.life--;
        if (this.life <= 0) {
            this.active = false;
            return;
        }

        this.x += this.vx;
        this.y += this.vy;

        if (particleSystem && Math.random() < 0.6) {
            const ang = Math.random() * Math.PI * 2;
            const d = Math.random() * this.radius;
            particleSystem.spawn(this.x + Math.cos(ang) * d, this.y + Math.sin(ang) * d, (Math.random() - 0.5) * 0.3, -0.3, 2.5, '#84cc16', 25, 'acid');
        }

        // Wither vegetation and poison creatures
        const rad = Math.floor(this.radius);
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                if (dx * dx + dy * dy <= rad * rad && Math.random() < 0.03) {
                    const tx = Math.floor(this.x + dx);
                    const ty = Math.floor(this.y + dy);
                    if (world.inBounds(tx, ty)) {
                        const t = world.getTile(tx, ty);
                        if (t === TILES.FOREST || t === TILES.GRASS) {
                            world.setTile(tx, ty, TILES.ASH);
                        }
                    }
                }
            }
        }

        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (ent.active && Math.hypot(ent.x - this.x, ent.y - this.y) < this.radius) {
                ent.takeDamage(2);
                ent.applyInfection();
            }
        }
    }

    render(ctx) {
        ctx.save();
        ctx.fillStyle = 'rgba(132, 204, 22, 0.25)';
        const cx = Math.floor(this.x);
        const cy = Math.floor(this.y);
        ctx.fillRect(cx - 14, cy - 10, 28, 20);
        ctx.fillRect(cx - 10, cy - 14, 20, 28);
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
        this.duckBarrages = [];
        this.antimatterMissiles = [];
        this.orbitalBeams = [];
        this.toxicClouds = [];
        this.whirlpools = [];
        this.activeStorm = null; // rain, snow, acid, sandstorm, clone_rain
        this.stormTimer = 0;
        this.nuclearFlashTimer = 0;

        // God's hand state
        this.grabbedEntity = null;
        this.grabStartX = 0;
        this.grabStartY = 0;
    }

    get weather() { return this.activeStorm || 'clear'; }
    set weather(val) { this.activeStorm = (val === 'clear' || !val) ? null : val; }
    get weatherTimer() { return this.stormTimer; }
    set weatherTimer(val) { this.stormTimer = val; }

    isShielded(x, y) {
        for (let i = 0; i < this.forcefields.length; i++) {
            const ff = this.forcefields[i];
            if (ff.active && ff.contains(x, y)) return ff;
        }
        return null;
    }

    update(world, entityManager, particleSystem, audio) {
        if (this.nuclearFlashTimer > 0) {
            this.nuclearFlashTimer--;
        }

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

        // Update Duck Barrages
        for (let i = this.duckBarrages.length - 1; i >= 0; i--) {
            const db = this.duckBarrages[i];
            db.update(world, entityManager, particleSystem, audio, this);
            if (!db.active) this.duckBarrages.splice(i, 1);
        }

        // Update Antimatter Missiles
        for (let i = this.antimatterMissiles.length - 1; i >= 0; i--) {
            const am = this.antimatterMissiles[i];
            am.update(world, entityManager, this, particleSystem, audio);
            if (!am.active) this.antimatterMissiles.splice(i, 1);
        }

        // Update Orbital Death Ray Beams
        for (let i = this.orbitalBeams.length - 1; i >= 0; i--) {
            const ob = this.orbitalBeams[i];
            ob.update(world, entityManager, particleSystem, audio);
            if (!ob.active) this.orbitalBeams.splice(i, 1);
        }

        // Update Toxic Clouds
        for (let i = this.toxicClouds.length - 1; i >= 0; i--) {
            const tc = this.toxicClouds[i];
            tc.update(world, entityManager, particleSystem);
            if (!tc.active) this.toxicClouds.splice(i, 1);
        }

        // Update Whirlpools
        for (let i = this.whirlpools.length - 1; i >= 0; i--) {
            const wp = this.whirlpools[i];
            wp.update(world, entityManager, particleSystem, audio);
            if (!wp.active) this.whirlpools.splice(i, 1);
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
        // Focus weather around the visible camera viewport so the user clearly sees the atmosphere without wasting 90% particles offscreen
        const cam = (typeof window !== 'undefined' && window.game && window.game.renderer) ? window.game.renderer.camera : null;
        const zoom = cam ? Math.max(0.5, cam.zoom) : 1;
        const viewW = cam ? (window.innerWidth / zoom) : (world ? world.width : 200);
        const viewH = cam ? (window.innerHeight / zoom) : (world ? world.height : 200);
        const minX = cam ? Math.max(0, Math.floor(cam.x - viewW * 0.55)) : 0;
        const maxX = cam ? Math.min(world ? world.width : 200, Math.floor(cam.x + viewW * 0.55)) : (world ? world.width : 200);
        const minY = cam ? Math.max(0, Math.floor(cam.y - viewH * 0.55)) : 0;
        const maxY = cam ? Math.min(world ? world.height : 200, Math.floor(cam.y + viewH * 0.55)) : (world ? world.height : 200);

        const drops = 6 + Math.floor(Math.random() * 4);
        for (let i = 0; i < drops; i++) {
            const rx = Math.floor(minX + Math.random() * Math.max(1, maxX - minX));
            const ry = Math.floor(minY + Math.random() * Math.max(1, maxY - minY));

            if (this.activeStorm === 'rain') {
                if (particleSystem && Math.random() < 0.6) {
                    particleSystem.spawn(rx, ry - 15, (Math.random() - 0.5) * 0.2, 4, 1.5, '#60a5fa', 14, 'water');
                }
                if (world && world.inBounds(rx, ry)) {
                    const idx = world.idx(rx, ry);
                    if (world.fire[idx] > 0) {
                        world.fire[idx] = 0; // extinguish fire
                    } else if (world.getTile(rx, ry) === TILES.SOIL && Math.random() < 0.08) {
                        world.setTile(rx, ry, TILES.GRASS);
                    }
                }
            } else if (this.activeStorm === 'snow') {
                if (particleSystem && Math.random() < 0.5) {
                    particleSystem.spawn(rx, ry - 18, (Math.random() - 0.5) * 0.5, 1.0, 1.5, '#ffffff', 28, 'spark');
                }
                if (world && world.inBounds(rx, ry)) {
                    const t = world.getTile(rx, ry);
                    if (t === TILES.WATER && Math.random() < 0.05) {
                        world.setTile(rx, ry, TILES.ICE);
                    } else if (t === TILES.GRASS && Math.random() < 0.05) {
                        world.setTile(rx, ry, TILES.SNOW);
                    }
                }
            } else if (this.activeStorm === 'acid') {
                if (particleSystem && Math.random() < 0.5) {
                    particleSystem.spawn(rx, ry - 15, 0, 3.2, 1.5, '#84cc16', 15, 'acid');
                }
                if (world && world.inBounds(rx, ry)) {
                    const t = world.getTile(rx, ry);
                    if ((t === TILES.FOREST || t === TILES.GRASS) && Math.random() < 0.08) {
                        world.setTile(rx, ry, TILES.ASH);
                    }
                }
            } else if (this.activeStorm === 'sandstorm') {
                if (particleSystem && Math.random() < 0.5) {
                    particleSystem.spawn(rx - 10, ry, 3.2 + Math.random() * 1.5, (Math.random() - 0.5) * 0.6, 1.5, '#dec17a', 16, 'stardust');
                }
                if (world && world.inBounds(rx, ry)) {
                    const t = world.getTile(rx, ry);
                    if ((t === TILES.GRASS || t === TILES.SOIL) && Math.random() < 0.06) {
                        world.setTile(rx, ry, TILES.SAND);
                    } else if (t === TILES.STONE && Math.random() < 0.02) {
                        world.setTile(rx, ry, TILES.SAND);
                    }
                }
            } else if (this.activeStorm === 'clone_rain') {
                if (particleSystem && Math.random() < 0.4) {
                    particleSystem.spawn(rx, ry - 20, (Math.random() - 0.5) * 0.3, 3.5, 1.8, '#c084fc', 20, 'stardust');
                }
            }
        }

        // Throttle clone rain spawning to once every 24 frames, capped at 150 entities
        if (this.activeStorm === 'clone_rain') {
            this.cloneTimer = (this.cloneTimer || 0) + 1;
            if (this.cloneTimer % 24 === 0 && entityManager && Array.isArray(entityManager.entities)) {
                const living = entityManager.entities.filter(e => e && e.active && !e.isDying);
                if (living.length > 0 && living.length < 150) {
                    const candidate = living[Math.floor(Math.random() * living.length)];
                    const spawnX = Math.floor(10 + Math.random() * (world.width - 20));
                    const spawnY = Math.floor(10 + Math.random() * (world.height - 20));
                    const clone = entityManager.clone(candidate, spawnX, spawnY);
                    if (clone && particleSystem) {
                        particleSystem.burst(spawnX, spawnY, 10, ['#c084fc', '#e879f9', '#ffffff'], 1.5, 3.5, 1.5, 2.5, 'stardust');
                    }
                }
            }
        }
    }

    // ==========================================
    // 1. DESTRUCTION & CHAOS POWERS
    // ==========================================

    // Total Apocalyptic World-Ending Nuke Detonation (Obliterates the entire planet)
    triggerWorldEndingNuke(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio) {
            if (typeof audio.playWorldEnderNuke === 'function') audio.playWorldEnderNuke();
            else if (typeof audio.playNuke === 'function') audio.playNuke();
        }

        // Blinding full-screen whiteout nuclear flash
        this.nuclearFlashTimer = 75;

        // Catastrophic prolonged seismic rumble
        if (window.game) {
            window.game.shakeCamera(60, 160);
            if (window.game.ui && typeof window.game.ui.showNotification === 'function') {
                window.game.ui.showNotification("☢️ APOCALYPTIC NUKE IMPACT: TOTAL PLANETARY EXTINCTION!");
            }
        }

        // Crisp retro mushroom cloud & supersonic shockwave
        if (particleSystem) {
            particleSystem.nukeMushroom(cx, cy, 2.0);
            particleSystem.burst(cx, cy, 70, ['#ffffff', '#fef08a', '#f97316', '#ef4444', '#84cc16'], 5, 20, 2, 6, 'fire');

            for (let s = 0; s < 2; s++) {
                const sw = particleSystem.spawn(cx, cy, 0, 0, 14 + s * 8, '#f97316', 70 + s * 20, 'shockwave', 0, 1);
                if (sw) sw.extra = 130;
            }
        }

        // 1. COMPLETE OBLITERATION OF ALL KINGDOM BUILDINGS ACROSS THE ENTIRE WORLD
        if (entityManager && Array.isArray(entityManager.buildings)) {
            for (let i = entityManager.buildings.length - 1; i >= 0; i--) {
                const b = entityManager.buildings[i];
                b.takeDamage(999999, world, particleSystem, audio);
            }
            entityManager.buildings = [];
        }

        // 2. COMPLETE ANNIHILATION OF ALL LIVING ENTITIES ACROSS THE ENTIRE WORLD
        if (entityManager && Array.isArray(entityManager.entities)) {
            for (let i = entityManager.entities.length - 1; i >= 0; i--) {
                const ent = entityManager.entities[i];
                if (!ent) continue;

                // Check for The Great Galaxy Sacrifice
                if (ent.type === 'galaxy_guardian' || ent.isCelestial) {
                    this.triggerGreatGalaxySacrifice(ent.x, ent.y, world, entityManager, particleSystem, audio);
                }

                ent.hp = 0;
                ent.isDying = true;
                ent.active = false;
                ent.takeDamage(999999);
            }
            if (window.game && window.game.possessedEntity) {
                window.game.unpossess();
            }
            entityManager.entities = [];
            entityManager.corpses = [];
            entityManager.projectiles = [];
            entityManager.explosiveEggs = [];
            if (entityManager.kingdoms) entityManager.kingdoms.clear();
        }

        // 3. COMPLETE WORLD TERRAIN DESTRUCTION ACROSS EVERY TILE ON THE PLANET
        if (world) {
            if (typeof world.carveCrater === 'function') {
                world.carveCrater(cx, cy, 140, 24.0);
            }
            for (let i = 0; i < world.size; i++) {
                const tx = i % world.width;
                const ty = Math.floor(i / world.width);
                const dist = Math.hypot(tx - cx, ty - cy);
                const tile = world.tiles[i];

                if (tile === TILES.BEDROCK) continue;

                // Ground Zero Void Abyss (Core Crater)
                if (dist < 60) {
                    world.setTile(tx, ty, TILES.VOID);
                }
                // Heavy Thermal & Radioactive Rupture Zone (~60 to 130 tiles)
                else if (dist < 130) {
                    const r = Math.random();
                    world.setTile(tx, ty, r < 0.45 ? TILES.FALLOUT : (r < 0.75 ? TILES.LAVA : TILES.MAGMA_ROCK));
                    world.ignite(tx, ty, 255);
                }
                // Middle Fallout & Acid Crater (~130 to 220 tiles)
                else if (dist < 220) {
                    if (tile === TILES.WATER || tile === TILES.DEEP_WATER) {
                        world.setTile(tx, ty, Math.random() < 0.75 ? TILES.ACID : TILES.FALLOUT);
                    } else if (tile === TILES.ICE || tile === TILES.SNOW) {
                        world.setTile(tx, ty, TILES.ACID);
                    } else {
                        world.setTile(tx, ty, Math.random() < 0.5 ? TILES.FALLOUT : TILES.ASH);
                        world.ignite(tx, ty, 240);
                    }
                }
                // Rest of the ENTIRE WORLD (Global Thermal Shockwave & Planetary Incineration)
                else {
                    if (tile === TILES.WATER || tile === TILES.DEEP_WATER) {
                        world.setTile(tx, ty, TILES.ACID); // All oceans turned to deadly radioactive acid
                    } else if (tile === TILES.ICE || tile === TILES.SNOW) {
                        world.setTile(tx, ty, TILES.ACID);
                    } else if (tile === TILES.STONE || tile === TILES.HIGH_MOUNTAIN) {
                        world.setTile(tx, ty, Math.random() < 0.6 ? TILES.MAGMA_ROCK : TILES.ASH);
                        if (Math.random() < 0.4) world.ignite(tx, ty, 200);
                    } else {
                        world.setTile(tx, ty, Math.random() < 0.4 ? TILES.FALLOUT : TILES.ASH);
                        world.ignite(tx, ty, 255);
                    }
                }
            }
        }

        // Global Nuclear Winter Fallout Storm
        this.startStorm('acid', 4500);
    }

    // Atomic Nuke (Mega-Destruction Overhaul)
    triggerNuke(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio) audio.playNuke();
        if (particleSystem) particleSystem.nukeMushroom(cx, cy, 2.0);
        if (window.game) window.game.shakeCamera(22, 45);

        const radius = 65;
        const rad2 = radius * radius;

        if (world && typeof world.carveCrater === 'function') {
            world.carveCrater(cx, cy, radius * 0.85, 14.0);
        }

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
        if (typeof gx === 'object' && gx !== null && gx.width) {
            audio = entityManager;
            particleSystem = world;
            entityManager = gy;
            world = gx;
            gx = Math.floor(world.width / 2);
            gy = Math.floor(world.height / 2);
        }
        world = world || (window.game ? window.game.world : null);
        entityManager = entityManager || (window.game ? window.game.entityManager : null);
        particleSystem = particleSystem || (window.game ? window.game.particleSystem : null);
        audio = audio || (window.game ? window.game.audio : null);
        if (!world) return;

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
            particleSystem.burst(gx, gy, 65, ['#a855f7', '#c026d3', '#38bdf8', '#facc15', '#ffffff'], 3, 12, 2, 5, 'stardust');
            for (let r = 0; r < 2; r++) {
                const sw = particleSystem.spawn(gx, gy, 0, 0, 10 + r * 8, '#38bdf8', 60 + r * 15, 'shockwave', 0, 1);
                if (sw) sw.extra = 120;
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
        if (world && typeof world.carveCrater === 'function') {
            world.carveCrater(cx, cy, radius * 0.75, Math.min(9.0, intensity * 2.2));
        }

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
            if (typeof entityManager.damageBuildingsInRadius === 'function') {
                entityManager.damageBuildingsInRadius(cx, cy, radius * 1.1, 90 * intensity, world, particleSystem, audio);
            }
            if (Array.isArray(entityManager.entities)) {
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
    }

    // Antimatter / Void Bomb (Buffed to Colossal Annihilation)
    triggerAntimatter(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio) audio.playSingularity();
        if (window.game) window.game.shakeCamera(22, 45);

        const radius = 52;
        if (particleSystem) {
            particleSystem.burst(cx, cy, 50, ['#a855f7', '#000000', '#3b82f6', '#ffffff'], 3, 10, 2, 5, 'stardust');
            for (let r = 0; r < 2; r++) {
                const sw = particleSystem.spawn(cx, cy, 0, 0, 8 + r * 6, '#a855f7', 45 + r * 10, 'shockwave', 0, 1);
                if (sw) sw.extra = 90;
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
            particleSystem.burst(cx, cy, 65, ['#ffffff', '#f43f5e', '#a855f7', '#38bdf8', '#facc15'], 3, 14, 2, 5, 'stardust');
            for (let r = 0; r < 2; r++) {
                const sw = particleSystem.spawn(cx, cy, 0, 0, 10 + r * 8, '#facc15', 50 + r * 15, 'shockwave', 0, 1);
                if (sw) sw.extra = 110;
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
            particleSystem.burst(cx, cy, 35, ['#84cc16', '#4ade80', '#15803d'], 1.5, 5, 1.5, 3.5, 'acid');
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
            particleSystem.burst(cx, cy, 45, ['#ffffff', '#f97316', '#475569', '#334155'], 3, 14, 2, 5);
            for (let r = 0; r < 2; r++) {
                const sw = particleSystem.spawn(cx, cy, 0, 0, 10 + r * 8, '#f1f5f9', 50 + r * 15, 'shockwave', 0, 1);
                if (sw) sw.extra = 110;
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
            particleSystem.burst(cx, cy, 40, ['#a855f7', '#38bdf8', '#000000', '#ffffff'], 2.5, 8, 2, 4, 'stardust');
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
        world = world || (window.game ? window.game.world : null);
        if (!world) return;
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
        world = world || (window.game ? window.game.world : null);
        entityManager = entityManager || (window.game ? window.game.entityManager : null);
        particleSystem = particleSystem || (window.game ? window.game.particleSystem : null);
        audio = audio || (window.game ? window.game.audio : null);

        if (audio) {
            audio.playSingularity();
            audio.playNuke();
        }
        if (window.game) window.game.shakeCamera(35, 70);

        if (particleSystem) {
            particleSystem.burst(cx, cy, 60, ['#ffffff', '#a855f7', '#38bdf8', '#facc15', '#ec4899'], 4, 15, 2, 6, 'stardust');
            for (let r = 0; r < 2; r++) {
                const sw = particleSystem.spawn(cx, cy, 0, 0, 12 + r * 10, '#38bdf8', 65 + r * 15, 'shockwave', 0, 1);
                if (sw) sw.extra = 140;
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
    triggerNukeMissile(targetX, targetY, audio = null) {
        if (audio && typeof audio.playApocalypseSiren === 'function') {
            audio.playApocalypseSiren();
        }
        this.nukeMissiles.push(new NukeMissile(targetX, targetY));
    }

    // Clone Rain Weather
    triggerCloneRain(duration = 800) {
        this.activeStorm = 'clone_rain';
        this.stormTimer = duration;
    }

    // Duck Barrage
    triggerDuckBarrage(targetX, targetY) {
        this.duckBarrages.push(new DuckBarrage(targetX, targetY));
    }

    // Solar Flare Pulse
    triggerSolarFlare(...args) {
        let world, entityManager, particleSystem, audio;
        if (typeof args[0] === 'number' && typeof args[1] === 'number') {
            world = args[2]; entityManager = args[3]; particleSystem = args[4]; audio = args[5];
        } else {
            world = args[0]; entityManager = args[1]; particleSystem = args[2]; audio = args[3];
        }
        world = world || (window.game ? window.game.world : null);
        entityManager = entityManager || (window.game ? window.game.entityManager : null);
        particleSystem = particleSystem || (window.game ? window.game.particleSystem : null);
        audio = audio || (window.game ? window.game.audio : null);
        if (!world) return;

        if (audio && typeof audio.playSolarFlare === 'function') audio.playSolarFlare();
        else if (audio) audio.playThunder();
        if (window.game && window.game.shakeCamera) window.game.shakeCamera(16, 30);
        if (particleSystem) {
            for (let i = 0; i < 40; i++) {
                const rx = Math.random() * world.width;
                const ry = Math.random() * world.height;
                particleSystem.spawn(rx, ry, (Math.random() - 0.5) * 2, -1.5 - Math.random(), 2, '#f59e0b', 25, 'spark');
            }
        }
        for (let i = 0; i < world.size; i++) {
            const t = world.tiles[i];
            if (t === TILES.GRASS || t === TILES.FOREST) {
                if (Math.random() < 0.08) world.fire[i] = 70;
            }
        }
        if (entityManager && Array.isArray(entityManager.entities)) {
            for (let i = 0; i < entityManager.entities.length; i++) {
                const ent = entityManager.entities[i];
                if (ent && ent.active) ent.overclockTimer = Math.max(ent.overclockTimer || 0, 300);
            }
        }
    }

    // Frost Tempest Blizzard
    triggerFrostTempest(...args) {
        let world, entityManager, particleSystem, audio;
        if (typeof args[0] === 'number' && typeof args[1] === 'number') {
            world = args[2]; entityManager = args[3]; particleSystem = args[4]; audio = args[5];
        } else {
            world = args[0]; entityManager = args[1]; particleSystem = args[2]; audio = args[3];
        }
        world = world || (window.game ? window.game.world : null);
        entityManager = entityManager || (window.game ? window.game.entityManager : null);
        particleSystem = particleSystem || (window.game ? window.game.particleSystem : null);
        audio = audio || (window.game ? window.game.audio : null);
        if (!world) return;

        if (audio) audio.playThunder();
        if (particleSystem) {
            for (let i = 0; i < 50; i++) {
                const rx = Math.random() * world.width;
                const ry = Math.random() * world.height;
                particleSystem.spawn(rx, ry, -1 - Math.random(), 1 + Math.random(), 1.5, '#a5f3fc', 30, 'snow');
            }
        }
        for (let i = 0; i < world.size; i++) {
            const t = world.tiles[i];
            if (t === TILES.WATER) {
                if (Math.random() < 0.45) world.tiles[i] = TILES.ICE;
            } else if (t === TILES.DEEP_WATER) {
                if (Math.random() < 0.25) world.tiles[i] = TILES.ICE;
            } else if (t === TILES.GRASS && Math.random() < 0.2) {
                world.tiles[i] = TILES.SNOW;
            }
        }
        if (entityManager && Array.isArray(entityManager.entities)) {
            for (let i = 0; i < entityManager.entities.length; i++) {
                const ent = entityManager.entities[i];
                if (ent && ent.active && !ent.hasTrait('fireproof')) {
                    ent.frozen = Math.max(ent.frozen || 0, 60);
                }
            }
        }
    }

    // Crystal Spire Eruption
    triggerCrystalSpire(cx, cy, world, ...rest) {
        let particleSystem = null, audio = null;
        if (rest.length >= 3) {
            particleSystem = rest[1];
            audio = rest[2];
        } else if (rest.length === 2) {
            particleSystem = rest[0];
            audio = rest[1];
        } else if (rest.length === 1) {
            particleSystem = rest[0];
        }
        world = world || (window.game ? window.game.world : null);
        particleSystem = particleSystem || (window.game ? window.game.particleSystem : null);
        audio = audio || (window.game ? window.game.audio : null);
        if (!world) return;

        if (audio && typeof audio.playSingularity === 'function') audio.playSingularity();
        if (particleSystem) {
            particleSystem.burst(cx, cy, 35, ['#ec4899', '#f472b6', '#38bdf8', '#ffffff'], 2, 6, 2, 4, 'spark');
        }
        const radius = 10;
        for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
                if (dx * dx + dy * dy <= radius * radius) {
                    const tx = Math.floor(cx + dx);
                    const ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        if (Math.random() < 0.6) world.setTile(tx, ty, TILES.CRYSTAL);
                    }
                }
            }
        }
    }

    // Chrono Temporal Freeze
    triggerChronoFreeze(audio) {
        if (audio && typeof audio.playChronoFreeze === 'function') audio.playChronoFreeze();
        if (window.game) {
            window.game.chronoFreezeTimer = 400; // ~6.6 seconds of freeze
        }
    }

    // Genesis Revival Wave
    triggerGenesisWave(world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playMagic === 'function') audio.playMagic();
        for (let i = 0; i < world.size; i++) {
            const t = world.tiles[i];
            if (t === TILES.ASH || t === TILES.CORRUPTED || t === TILES.FALLOUT || t === TILES.SAND) {
                if (Math.random() < 0.55) world.tiles[i] = TILES.GRASS;
            } else if (t === TILES.VOID && Math.random() < 0.2) {
                world.tiles[i] = TILES.SOIL;
            }
            world.fire[i] = 0;
        }
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (ent.active) {
                ent.hp = ent.maxHp;
                ent.cursed = false;
                ent.infected = false;
                if (particleSystem) particleSystem.spawn(ent.x, ent.y - 2, 0, -0.6, 2, '#4ade80', 20, 'stardust');
            }
        }
    }

    // Duck Stampede
    triggerDuckStampede(arg1, arg2, arg3, arg4, arg5) {
        let cx = null, cy = null, em = null, ps = null, au = null;
        if (typeof arg1 === 'number' && typeof arg2 === 'number') {
            cx = arg1;
            cy = arg2;
            em = arg3;
            ps = arg4;
            au = arg5;
        } else {
            em = arg2;
            ps = arg3;
            au = arg4;
        }
        if (au && typeof au.playQuackSound === 'function') au.playQuackSound();
        if (!em || typeof em.spawn !== 'function') return;
        for (let i = 0; i < 25; i++) {
            const x = cx !== null ? cx + (Math.random() - 0.5) * 40 : Math.random() * 200 + 10;
            const y = cy !== null ? cy + (Math.random() - 0.5) * 40 : Math.random() * 200 + 10;
            const d = em.spawn('duck', x, y);
            if (d) {
                d.addTrait('super_speed');
                d.vx = 2.5 + Math.random();
                d.vy = (Math.random() - 0.5) * 0.8;
                if (ps) {
                    ps.burst(x, y, 6, ['#facc15', '#fef08a'], 1.5, 3, 1, 2, 'stardust');
                }
            }
        }
    }

    // Sanctuary Beacon
    triggerSanctuaryBeacon(cx, cy, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playMagic === 'function') audio.playMagic();
        if (particleSystem) {
            particleSystem.burst(cx, cy, 30, ['#facc15', '#fef08a', '#ffffff'], 2, 6, 2, 4, 'stardust');
        }
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (ent.active && Math.hypot(ent.x - cx, ent.y - cy) < 32) {
                ent.applyBlessing();
            }
        }
    }

    // War Horn
    triggerWarHorn(entityManager, particleSystem, audio) {
        if (audio && typeof audio.playWarHorn === 'function') audio.playWarHorn();
        else if (audio) audio.playThunder();
        if (window.game && window.game.shakeCamera) window.game.shakeCamera(14, 25);
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (ent.active && ent.kingdomId) {
                ent.overclockTimer = 900;
                ent.attack = Math.floor(ent.attack * 1.5);
                if (particleSystem) {
                    particleSystem.burst(ent.x, ent.y, 8, ['#ef4444', '#f59e0b', '#ffffff'], 1.5, 4, 1.5, 3, 'spark');
                }
            }
        }
    }

    // Bounty Blessing
    triggerBountyBlessing(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playMagic === 'function') audio.playMagic();
        for (const kd of entityManager.kingdoms.values()) {
            if (Math.hypot(kd.x - cx, kd.y - cy) < 40) {
                kd.wood += 100;
                kd.stone += 100;
                kd.food += 100;
            }
        }
        const rad = 14;
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                if (dx * dx + dy * dy <= rad * rad) {
                    const tx = Math.floor(cx + dx);
                    const ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty)) {
                        const t = world.getTile(tx, ty);
                        if (t === TILES.GRASS && Math.random() < 0.3) {
                            world.setTile(tx, ty, TILES.FOREST);
                        }
                    }
                }
            }
        }
        if (particleSystem) {
            particleSystem.burst(cx, cy, 35, ['#f59e0b', '#eab308', '#22c55e', '#ffffff'], 2, 6, 2, 4, 'stardust');
        }
    }

    // Plasma Barrage
    triggerPlasmaBarrage(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playLaser === 'function') audio.playLaser();
        if (window.game && window.game.shakeCamera) window.game.shakeCamera(18, 30);
        for (let i = 0; i < 12; i++) {
            setTimeout(() => {
                const ox = (Math.random() - 0.5) * 50;
                const oy = (Math.random() - 0.5) * 50;
                this.triggerExplosion(cx + ox, cy + oy, 14, 1.3, world, entityManager, particleSystem, audio);
                if (particleSystem) {
                    particleSystem.burst(cx + ox, cy + oy, 20, ['#00e5ff', '#38bdf8', '#ffffff'], 2, 5, 2, 4, 'spark');
                }
            }, i * 70);
        }
    }

    // Gamma Ray Trench
    triggerGammaRay(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playLaser === 'function') audio.playLaser();
        if (particleSystem) {
            particleSystem.burst(cx, cy, 25, ['#4ade80', '#a3e635', '#ffffff'], 2, 5, 1.5, 3, 'spark');
        }
        const length = 40;
        for (let step = -length / 2; step <= length / 2; step++) {
            const tx = Math.floor(cx + step);
            const ty = Math.floor(cy);
            if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                world.setTile(tx, ty, TILES.FALLOUT);
                world.ignite(tx, ty, 60);
            }
        }
        if (entityManager && typeof entityManager.damageBuildingsInRadius === 'function') {
            entityManager.damageBuildingsInRadius(cx, cy, 25, 150, world, particleSystem, audio);
        }
    }

    // Antimatter Guided Missile
    triggerAntimatterMissile(targetX, targetY, audio = null) {
        if (audio && typeof audio.playSingularity === 'function') audio.playSingularity();
        this.antimatterMissiles.push(new AntimatterMissile(targetX, targetY));
    }

    // Orbital Death Ray / Hammer of Dawn
    triggerOrbitalStrike(targetX, targetY, ...rest) {
        let audio = null;
        for (const a of rest) {
            if (a && typeof a.playHammerOfDawn === 'function') { audio = a; break; }
            if (a && typeof a.playLaser === 'function') { audio = a; }
        }
        audio = audio || (window.game ? window.game.audio : null);
        if (audio && typeof audio.playHammerOfDawn === 'function') audio.playHammerOfDawn();
        else if (audio && typeof audio.playLaser === 'function') audio.playLaser();
        this.orbitalBeams.push(new OrbitalDeathRay(targetX, targetY));
    }

    // EMP Shockwave Blast
    triggerEmpBlast(cx, cy, ...rest) {
        let world = null, entityManager = null, particleSystem = null, audio = null;
        if (rest[0] && rest[0].tiles) {
            world = rest[0]; entityManager = rest[1]; particleSystem = rest[2]; audio = rest[3];
        } else {
            entityManager = rest[0]; particleSystem = rest[1]; audio = rest[2];
            world = window.game ? window.game.world : null;
        }
        entityManager = entityManager || (window.game ? window.game.entityManager : null);
        particleSystem = particleSystem || (window.game ? window.game.particleSystem : null);
        audio = audio || (window.game ? window.game.audio : null);

        if (audio && typeof audio.playEmpSound === 'function') audio.playEmpSound();
        else if (audio && typeof audio.playThunder === 'function') audio.playThunder();
        if (window.game && window.game.shakeCamera) window.game.shakeCamera(14, 25);
        if (particleSystem) {
            particleSystem.burst(cx, cy, 35, ['#00e5ff', '#38bdf8', '#ffffff'], 2.5, 7, 2, 4, 'spark');
            const sw = particleSystem.spawn(cx, cy, 0, 0, 8, '#00e5ff', 50, 'shockwave', 0, 1);
            if (sw) sw.extra = 80;
        }
        this.forcefields = [];
        if (entityManager && Array.isArray(entityManager.entities)) {
            for (let i = 0; i < entityManager.entities.length; i++) {
                const ent = entityManager.entities[i];
                if (!ent || !ent.active) continue;
                const dist = Math.hypot(ent.x - cx, ent.y - cy);
                if (dist < 60) {
                    if (ent.isVehicle || ent.type === 'mech' || ent.type === 'colossus_mech' || ent.type === 'tank' || ent.type === 'helicopter' || ent.type === 'starfighter') {
                        ent.frozen = 300;
                    }
                    ent.takeDamage(45);
                }
            }
        }
    }

    // Hellfire Missile Salvo
    triggerHellfireMissile(cx, cy, world, entityManager, particleSystem, audio = null) {
        if (audio && typeof audio.playExplosion === 'function') audio.playExplosion(1.5);
        for (let i = 0; i < 6; i++) {
            setTimeout(() => {
                const ox = (Math.random() - 0.5) * 45;
                const oy = (Math.random() - 0.5) * 45;
                this.triggerExplosion(cx + ox, cy + oy, 16, 1.4, world, entityManager, particleSystem, audio);
                for (let fy = -5; fy <= 5; fy++) {
                    for (let fx = -5; fx <= 5; fx++) {
                        const tx = Math.floor(cx + ox + fx);
                        const ty = Math.floor(cy + oy + fy);
                        if (world.inBounds(tx, ty) && Math.random() < 0.3) {
                            world.ignite(tx, ty, 120);
                        }
                    }
                }
            }, i * 90);
        }
    }

    // Tsar Bomba Multistage Detonation
    triggerTsarBomba(cx, cy, world, entityManager, particleSystem, audio = null) {
        if (audio && typeof audio.playWorldEnderNuke === 'function') audio.playWorldEnderNuke();
        else if (audio && typeof audio.playNuke === 'function') audio.playNuke();
        this.nuclearFlashTimer = 45;
        if (window.game) window.game.shakeCamera(40, 75);
        if (particleSystem) {
            particleSystem.nukeMushroom(cx, cy, 2.5);
            particleSystem.burst(cx, cy, 65, ['#ffffff', '#fef08a', '#f97316', '#ef4444'], 4, 18, 2, 6, 'fire');
        }
        const radius = 80;
        for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
                const d2 = dx * dx + dy * dy;
                if (d2 <= radius * radius) {
                    const tx = Math.floor(cx + dx);
                    const ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        if (d2 < 600) world.setTile(tx, ty, TILES.VOID);
                        else if (d2 < 2000) world.setTile(tx, ty, TILES.FALLOUT);
                        else if (d2 < 4500) world.setTile(tx, ty, Math.random() < 0.4 ? TILES.MAGMA_ROCK : TILES.ASH);
                        else if (Math.random() < 0.3) world.ignite(tx, ty, 150);
                    }
                }
            }
        }
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (ent.active && Math.hypot(ent.x - cx, ent.y - cy) <= radius * 1.3) {
                ent.takeDamage(3500);
            }
        }
        if (entityManager && typeof entityManager.damageBuildingsInRadius === 'function') {
            entityManager.damageBuildingsInRadius(cx, cy, radius * 1.1, 5000, world, particleSystem, audio);
        }
    }

    // Drifting Toxic Gas Cloud
    triggerToxicCloud(cx, cy) {
        this.toxicClouds.push(new ToxicGasCloud(cx, cy));
    }

    // Corrosive Acid Missile
    triggerAcidMissile(cx, cy, world, entityManager, particleSystem, audio = null) {
        if (audio && typeof audio.playSplash === 'function') audio.playSplash();
        if (window.game && window.game.shakeCamera) window.game.shakeCamera(14, 25);
        if (particleSystem) {
            particleSystem.burst(cx, cy, 35, ['#84cc16', '#4ade80', '#15803d', '#ffffff'], 2, 6, 2, 4, 'acid');
        }
        const rad = 25;
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                if (dx * dx + dy * dy <= rad * rad) {
                    const tx = Math.floor(cx + dx);
                    const ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        world.setTile(tx, ty, TILES.ACID);
                    }
                }
            }
        }
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (ent.active && Math.hypot(ent.x - cx, ent.y - cy) <= rad * 1.2) {
                ent.takeDamage(220);
                ent.infected = true;
            }
        }
    }

    // Continuous Meteor Rain
    triggerMeteorRain(...args) {
        let world = null, audio = null;
        for (const a of args) {
            if (a && a.tiles && a.width) world = a;
            else if (a && (typeof a.playMeteorExplosion === 'function' || typeof a.playThunder === 'function')) audio = a;
        }
        world = world || (window.game ? window.game.world : null);
        audio = audio || (window.game ? window.game.audio : null);
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const rx = Math.random() * (world ? world.width : 200);
                const ry = Math.random() * (world ? world.height : 200);
                this.spawnMeteor(rx, ry);
            }, i * 180);
        }
    }

    // Global Lightning Storm
    triggerLightningStorm(...args) {
        let world, entityManager, particleSystem, audio;
        if (typeof args[0] === 'number' && typeof args[1] === 'number') {
            world = args[2]; entityManager = args[3]; particleSystem = args[4]; audio = args[5];
        } else {
            world = args[0]; entityManager = args[1]; particleSystem = args[2]; audio = args[3];
        }
        world = world || (window.game ? window.game.world : null);
        entityManager = entityManager || (window.game ? window.game.entityManager : null);
        particleSystem = particleSystem || (window.game ? window.game.particleSystem : null);
        audio = audio || (window.game ? window.game.audio : null);
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const rx = Math.random() * (world ? world.width : 200);
                const ry = Math.random() * (world ? world.height : 200);
                this.triggerLightning(rx, ry, world, entityManager, particleSystem, audio);
            }, i * 220);
        }
    }

    // Glacial Blizzard Vortex
    triggerBlizzardVortex(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playThunder === 'function') audio.playThunder();
        if (particleSystem) {
            particleSystem.burst(cx, cy, 40, ['#a5f3fc', '#ffffff', '#38bdf8'], 2, 6, 2, 4, 'snow');
        }
        const rad = 28;
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                if (dx * dx + dy * dy <= rad * rad) {
                    const tx = Math.floor(cx + dx);
                    const ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty)) {
                        const t = world.getTile(tx, ty);
                        if (t === TILES.WATER || t === TILES.DEEP_WATER) world.setTile(tx, ty, TILES.ICE);
                        else if (t === TILES.GRASS || t === TILES.SOIL) world.setTile(tx, ty, TILES.SNOW);
                    }
                }
            }
        }
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (ent.active && Math.hypot(ent.x - cx, ent.y - cy) <= rad) {
                ent.frozen = 250;
            }
        }
    }

    // Desert Sand Typhoon
    triggerSandTyphoon(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playThunder === 'function') audio.playThunder();
        this.tornadoes.push(new Tornado(cx, cy, false));
        const rad = 30;
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                if (dx * dx + dy * dy <= rad * rad) {
                    const tx = Math.floor(cx + dx);
                    const ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        if (Math.random() < 0.5) world.setTile(tx, ty, TILES.SAND);
                        else if (Math.random() < 0.15) world.setTile(tx, ty, TILES.QUICKSAND);
                    }
                }
            }
        }
    }

    // Subterranean Magma Surge
    triggerMagmaSurge(cx, cy, world, ...rest) {
        let entityManager = null, particleSystem = null, audio = null;
        if (rest.length >= 3) {
            entityManager = rest[0]; particleSystem = rest[1]; audio = rest[2];
        } else if (rest.length === 2) {
            particleSystem = rest[0]; audio = rest[1];
        }
        world = world || (window.game ? window.game.world : null);
        entityManager = entityManager || (window.game ? window.game.entityManager : null);
        particleSystem = particleSystem || (window.game ? window.game.particleSystem : null);
        audio = audio || (window.game ? window.game.audio : null);
        if (!world) return;

        if (audio && typeof audio.playExplosion === 'function') audio.playExplosion(1.5);
        if (window.game && window.game.shakeCamera) window.game.shakeCamera(16, 25);
        if (particleSystem) {
            particleSystem.burst(cx, cy, 35, ['#ef4444', '#f97316', '#ff5722'], 2, 6, 2, 4, 'fire');
        }
        const rad = 16;
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                if (dx * dx + dy * dy <= rad * rad) {
                    const tx = Math.floor(cx + dx);
                    const ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        if (dx * dx + dy * dy < 25) world.setTile(tx, ty, TILES.LAVA);
                        else if (Math.random() < 0.5) world.setTile(tx, ty, TILES.MAGMA_ROCK);
                    }
                }
            }
        }
    }

    // Alien Spore Bloom
    triggerSporeBloom(cx, cy, world, particleSystem, audio) {
        if (audio && typeof audio.playMagic === 'function') audio.playMagic();
        if (particleSystem) {
            particleSystem.burst(cx, cy, 45, ['#a855f7', '#c084fc', '#e879f9', '#ffffff'], 2, 6, 2, 4, 'stardust');
        }
        const rad = 20;
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                if (dx * dx + dy * dy <= rad * rad) {
                    const tx = Math.floor(cx + dx);
                    const ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        if (Math.random() < 0.6) world.setTile(tx, ty, TILES.MUSHROOM_SPORE);
                    }
                }
            }
        }
    }

    // Oceanic Whirlpool Maelstrom
    spawnWhirlpool(cx, cy, audio = null) {
        if (audio && typeof audio.playMaelstrom === 'function') audio.playMaelstrom();
        const wp = new Whirlpool(cx, cy);
        this.whirlpools.push(wp);
        return wp;
    }

    // NEW: Aurora Borealis - Cosmic celestial healing curtain
    triggerAuroraBorealis(world, entityManager, particleSystem, audio) {
        world = world || (window.game ? window.game.world : null);
        entityManager = entityManager || (window.game ? window.game.entityManager : null);
        particleSystem = particleSystem || (window.game ? window.game.particleSystem : null);
        audio = audio || (window.game ? window.game.audio : null);
        if (audio && typeof audio.playMagic === 'function') audio.playMagic();
        else if (audio && typeof audio.playSingularity === 'function') audio.playSingularity();

        if (particleSystem && world) {
            for (let i = 0; i < 45; i++) {
                const rx = Math.random() * world.width;
                const ry = Math.random() * (world.height * 0.45);
                const colors = ['#22c55e', '#10b981', '#06b6d4', '#8b5cf6', '#ec4899'];
                const col = colors[Math.floor(Math.random() * colors.length)];
                particleSystem.spawn(rx, ry, (Math.random() - 0.5) * 1.5, (Math.random() - 0.5) * 0.5, 2.5, col, 50, 'stardust');
            }
        }

        if (world) {
            for (let i = 0; i < world.size; i++) {
                const t = world.tiles[i];
                if (t === TILES.CORRUPTED || t === TILES.ASH || t === TILES.FALLOUT) {
                    if (Math.random() < 0.45) world.tiles[i] = TILES.GRASS;
                }
                world.fire[i] = 0;
            }
        }

        if (entityManager && Array.isArray(entityManager.entities)) {
            for (let i = 0; i < entityManager.entities.length; i++) {
                const ent = entityManager.entities[i];
                if (ent && ent.active) {
                    ent.hp = ent.maxHp;
                    ent.infected = false;
                    ent.cursed = false;
                    ent.applyBlessing();
                }
            }
        }
    }

    // NEW: Ion Storm Barrage - Orbital precision particle lance salvo
    triggerIonStormBarrage(cx, cy, world, entityManager, particleSystem, audio) {
        world = world || (window.game ? window.game.world : null);
        entityManager = entityManager || (window.game ? window.game.entityManager : null);
        particleSystem = particleSystem || (window.game ? window.game.particleSystem : null);
        audio = audio || (window.game ? window.game.audio : null);
        if (audio && typeof audio.playLaser === 'function') audio.playLaser();
        if (window.game && window.game.shakeCamera) window.game.shakeCamera(20, 35);

        for (let s = 0; s < 5; s++) {
            setTimeout(() => {
                const strikeX = cx + (Math.random() - 0.5) * 36;
                const strikeY = cy + (Math.random() - 0.5) * 36;
                if (particleSystem) {
                    particleSystem.burst(strikeX, strikeY, 25, ['#00e5ff', '#38bdf8', '#ffffff'], 2.5, 6, 2, 4, 'spark');
                    const sw = particleSystem.spawn(strikeX, strikeY, 0, 0, 6, '#00e5ff', 35, 'shockwave', 0, 1);
                    if (sw) sw.extra = 45;
                }
                if (world) {
                    for (let dy = -5; dy <= 5; dy++) {
                        for (let dx = -5; dx <= 5; dx++) {
                            if (dx * dx + dy * dy <= 25) {
                                const tx = Math.floor(strikeX + dx);
                                const ty = Math.floor(strikeY + dy);
                                if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                                    world.setTile(tx, ty, (TILES.PLASMA_FIELD !== undefined ? TILES.PLASMA_FIELD : 32));
                                }
                            }
                        }
                    }
                }
                if (entityManager && Array.isArray(entityManager.entities)) {
                    for (let i = 0; i < entityManager.entities.length; i++) {
                        const ent = entityManager.entities[i];
                        if (ent && ent.active && Math.hypot(ent.x - strikeX, ent.y - strikeY) < 16) {
                            ent.takeDamage(220);
                            ent.overclockTimer = 180;
                        }
                    }
                }
            }, s * 80);
        }
    }

    // NEW: Chronos Spacetime Rift - Spatial temporal singularity
    triggerChronosRift(cx, cy, world, entityManager, particleSystem, audio) {
        world = world || (window.game ? window.game.world : null);
        entityManager = entityManager || (window.game ? window.game.entityManager : null);
        particleSystem = particleSystem || (window.game ? window.game.particleSystem : null);
        audio = audio || (window.game ? window.game.audio : null);
        if (audio && typeof audio.playChronoFreeze === 'function') audio.playChronoFreeze();
        else if (audio && typeof audio.playSingularity === 'function') audio.playSingularity();
        if (window.game && window.game.shakeCamera) window.game.shakeCamera(18, 30);

        if (particleSystem) {
            particleSystem.burst(cx, cy, 35, ['#c084fc', '#818cf8', '#38bdf8', '#ffffff'], 2.5, 7, 2, 4, 'stardust');
            const sw = particleSystem.spawn(cx, cy, 0, 0, 8, '#c084fc', 60, 'shockwave', 0, 1);
            if (sw) sw.extra = 90;
        }

        const rad = 24;
        if (world) {
            for (let dy = -rad; dy <= rad; dy++) {
                for (let dx = -rad; dx <= rad; dx++) {
                    if (dx * dx + dy * dy <= rad * rad) {
                        const tx = Math.floor(cx + dx);
                        const ty = Math.floor(cy + dy);
                        if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                            const t = world.getTile(tx, ty);
                            if (t === TILES.WATER || t === TILES.DEEP_WATER) {
                                world.setTile(tx, ty, TILES.CRYSTAL);
                            } else if (Math.random() < 0.2) {
                                world.setTile(tx, ty, (TILES.AETHER_FLUID !== undefined ? TILES.AETHER_FLUID : 34));
                            }
                        }
                    }
                }
            }
        }

        if (entityManager && Array.isArray(entityManager.entities)) {
            for (let i = 0; i < entityManager.entities.length; i++) {
                const ent = entityManager.entities[i];
                if (ent && ent.active && Math.hypot(ent.x - cx, ent.y - cy) <= rad * 1.2) {
                    ent.frozen = 350;
                    ent.takeDamage(90);
                }
            }
        }
    }

    // NEW: Cryo Bomb - Absolute Zero Freezing Nova
    triggerCryoBomb(cx, cy, world, entityManager, particleSystem, audio) {
        world = world || (window.game ? window.game.world : null);
        entityManager = entityManager || (window.game ? window.game.entityManager : null);
        particleSystem = particleSystem || (window.game ? window.game.particleSystem : null);
        audio = audio || (window.game ? window.game.audio : null);
        if (audio && typeof audio.playChronoFreeze === 'function') audio.playChronoFreeze();
        else if (audio && typeof audio.playMagic === 'function') audio.playMagic();
        if (window.game && window.game.shakeCamera) window.game.shakeCamera(16, 25);

        if (particleSystem) {
            particleSystem.burst(cx, cy, 45, ['#38bdf8', '#bae6fd', '#ffffff', '#0284c7'], 3, 8, 2, 5, 'spark');
            const sw = particleSystem.spawn(cx, cy, 0, 0, 8, '#38bdf8', 45, 'shockwave', 0, 1);
            if (sw) sw.extra = 110;
        }

        const rad = 32;
        if (world) {
            for (let dy = -rad; dy <= rad; dy++) {
                for (let dx = -rad; dx <= rad; dx++) {
                    const d2 = dx * dx + dy * dy;
                    if (d2 <= rad * rad) {
                        const tx = Math.floor(cx + dx);
                        const ty = Math.floor(cy + dy);
                        if (world.inBounds(tx, ty)) {
                            const t = world.getTile(tx, ty);
                            if (t === TILES.WATER || t === TILES.DEEP_WATER) {
                                world.setTile(tx, ty, TILES.ICE);
                            } else if (t === TILES.LAVA || t === 40) {
                                world.setTile(tx, ty, TILES.OBSIDIAN);
                            } else if (t !== TILES.BEDROCK && Math.random() < 0.65) {
                                world.setTile(tx, ty, TILES.SNOW);
                            }
                            if (world.fire) world.fire[ty * world.width + tx] = 0;
                        }
                    }
                }
            }
        }

        if (entityManager && Array.isArray(entityManager.entities)) {
            for (let i = 0; i < entityManager.entities.length; i++) {
                const ent = entityManager.entities[i];
                if (ent && ent.active && Math.hypot(ent.x - cx, ent.y - cy) <= rad * 1.1) {
                    ent.frozen = 450;
                    ent.takeDamage(120);
                }
            }
        }
    }

    // NEW: Orbital Death Ray - Celestial Annihilation Lance
    triggerOrbitalDeathRay(cx, cy, world, entityManager, particleSystem, audio) {
        world = world || (window.game ? window.game.world : null);
        entityManager = entityManager || (window.game ? window.game.entityManager : null);
        particleSystem = particleSystem || (window.game ? window.game.particleSystem : null);
        audio = audio || (window.game ? window.game.audio : null);
        if (audio && typeof audio.playLaser === 'function') audio.playLaser();
        if (window.game && window.game.shakeCamera) window.game.shakeCamera(24, 40);

        for (let step = 0; step < 7; step++) {
            setTimeout(() => {
                const ang = (step / 7) * Math.PI * 2;
                const sx = cx + Math.cos(ang) * 16;
                const sy = cy + Math.sin(ang) * 16;

                if (particleSystem) {
                    particleSystem.burst(sx, sy, 30, ['#ef4444', '#facc15', '#ffffff'], 3, 7, 2, 4, 'fire');
                    const sw = particleSystem.spawn(sx, sy, 0, 0, 5, '#ef4444', 30, 'shockwave', 0, 1);
                    if (sw) sw.extra = 60;
                }

                if (world) {
                    for (let dy = -6; dy <= 6; dy++) {
                        for (let dx = -6; dx <= 6; dx++) {
                            if (dx * dx + dy * dy <= 36) {
                                const tx = Math.floor(sx + dx);
                                const ty = Math.floor(sy + dy);
                                if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                                    world.setTile(tx, ty, (dx * dx + dy * dy <= 12) ? TILES.LAVA : TILES.OBSIDIAN);
                                }
                            }
                        }
                    }
                }

                if (entityManager && Array.isArray(entityManager.entities)) {
                    for (let i = 0; i < entityManager.entities.length; i++) {
                        const ent = entityManager.entities[i];
                        if (ent && ent.active && Math.hypot(ent.x - sx, ent.y - sy) < 18) {
                            ent.takeDamage(260);
                            ent.vx += (ent.x - sx) * 0.4;
                            ent.vy += (ent.y - sy) * 0.4;
                        }
                    }
                }
            }, step * 90);
        }
    }

    // NEW: Plague Comet - Mutagenic Bio-Hazard Impact
    triggerPlagueComet(cx, cy, world, entityManager, disasterManager, particleSystem, audio) {
        world = world || (window.game ? window.game.world : null);
        entityManager = entityManager || (window.game ? window.game.entityManager : null);
        particleSystem = particleSystem || (window.game ? window.game.particleSystem : null);
        audio = audio || (window.game ? window.game.audio : null);
        if (audio && typeof audio.playExplosion === 'function') audio.playExplosion(1.6);
        if (window.game && window.game.shakeCamera) window.game.shakeCamera(20, 30);

        if (particleSystem) {
            particleSystem.burst(cx, cy, 40, ['#15803d', '#84cc16', '#a855f7', '#0f172a'], 3, 7, 2, 4, 'blood');
            const sw = particleSystem.spawn(cx, cy, 0, 0, 7, '#84cc16', 40, 'shockwave', 0, 1);
            if (sw) sw.extra = 80;
        }

        const rad = 26;
        if (world) {
            for (let dy = -rad; dy <= rad; dy++) {
                for (let dx = -rad; dx <= rad; dx++) {
                    const d2 = dx * dx + dy * dy;
                    if (d2 <= rad * rad) {
                        const tx = Math.floor(cx + dx);
                        const ty = Math.floor(cy + dy);
                        if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                            if (d2 <= 25) {
                                world.setTile(tx, ty, 37); // TAR_PIT
                            } else if (Math.random() < 0.5) {
                                world.setTile(tx, ty, (TILES.POISON_SWAMP !== undefined ? TILES.POISON_SWAMP : 20));
                            }
                        }
                    }
                }
            }
        }

        if (entityManager && Array.isArray(entityManager.entities)) {
            for (let i = 0; i < entityManager.entities.length; i++) {
                const ent = entityManager.entities[i];
                if (ent && ent.active && Math.hypot(ent.x - cx, ent.y - cy) <= rad * 1.1) {
                    ent.infected = true;
                    ent.poisonTimer = 300;
                    ent.takeDamage(110);
                }
            }
        }
    }

    // NEW: Tectonic Rupture - Magma Fault Line Fracture
    triggerTectonicRupture(cx, cy, world, entityManager, disasterManager, particleSystem, audio) {
        world = world || (window.game ? window.game.world : null);
        entityManager = entityManager || (window.game ? window.game.entityManager : null);
        particleSystem = particleSystem || (window.game ? window.game.particleSystem : null);
        audio = audio || (window.game ? window.game.audio : null);
        if (audio && typeof audio.playEarthquake === 'function') audio.playEarthquake();
        else if (audio && typeof audio.playExplosion === 'function') audio.playExplosion(1.4);
        if (window.game && window.game.shakeCamera) window.game.shakeCamera(22, 35);

        const length = 40;
        const angle = Math.random() * Math.PI;
        for (let step = -length; step <= length; step += 2) {
            const fx = Math.floor(cx + Math.cos(angle) * step + (Math.random() - 0.5) * 3);
            const fy = Math.floor(cy + Math.sin(angle) * step + (Math.random() - 0.5) * 3);

            if (particleSystem && Math.random() < 0.6) {
                particleSystem.burst(fx, fy, 8, ['#ea580c', '#f97316', '#475569'], 2, 4, 1.5, 3, 'fire');
            }

            if (world) {
                for (let dy = -2; dy <= 2; dy++) {
                    for (let dx = -2; dx <= 2; dx++) {
                        const tx = fx + dx;
                        const ty = fy + dy;
                        if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                            world.setTile(tx, ty, (dx === 0 && dy === 0) ? TILES.LAVA : 40); // VOLCANIC_CALDERA
                        }
                    }
                }
            }
        }

        if (entityManager && Array.isArray(entityManager.entities)) {
            for (let i = 0; i < entityManager.entities.length; i++) {
                const ent = entityManager.entities[i];
                if (ent && ent.active && Math.hypot(ent.x - cx, ent.y - cy) <= length * 1.1) {
                    ent.takeDamage(130);
                    ent.vx += (Math.random() - 0.5) * 6;
                    ent.vy += (Math.random() - 0.5) * 6;
                }
            }
        }
    }

    // NEW: Nanite Swarm - Molecular Grey Goo Disassembly
    triggerNaniteSwarm(cx, cy, world, entityManager, particleSystem, audio) {
        world = world || (window.game ? window.game.world : null);
        entityManager = entityManager || (window.game ? window.game.entityManager : null);
        particleSystem = particleSystem || (window.game ? window.game.particleSystem : null);
        audio = audio || (window.game ? window.game.audio : null);
        if (audio && typeof audio.playLaser === 'function') audio.playLaser();

        const rad = 22;
        if (particleSystem) {
            particleSystem.burst(cx, cy, 35, ['#64748b', '#94a3b8', '#38bdf8', '#ffffff'], 2, 5, 1.5, 3, 'spark');
        }

        if (world) {
            for (let dy = -rad; dy <= rad; dy++) {
                for (let dx = -rad; dx <= rad; dx++) {
                    if (dx * dx + dy * dy <= rad * rad) {
                        const tx = Math.floor(cx + dx);
                        const ty = Math.floor(cy + dy);
                        if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                            if (Math.random() < 0.45) {
                                world.setTile(tx, ty, TILES.VOID);
                            } else if (Math.random() < 0.35) {
                                world.setTile(tx, ty, TILES.STARDUST);
                            }
                        }
                    }
                }
            }
        }

        if (entityManager && Array.isArray(entityManager.entities)) {
            for (let i = 0; i < entityManager.entities.length; i++) {
                const ent = entityManager.entities[i];
                if (ent && ent.active && Math.hypot(ent.x - cx, ent.y - cy) <= rad * 1.1) {
                    ent.takeDamage(180);
                }
            }
        }
    }

    // NEW: Gravity Inversion - Antigravity Levitation Catapult
    triggerGravityInversion(cx, cy, world, entityManager, particleSystem, audio) {
        entityManager = entityManager || (window.game ? window.game.entityManager : null);
        particleSystem = particleSystem || (window.game ? window.game.particleSystem : null);
        audio = audio || (window.game ? window.game.audio : null);
        if (audio && typeof audio.playMagic === 'function') audio.playMagic();
        if (window.game && window.game.shakeCamera) window.game.shakeCamera(14, 25);

        if (particleSystem) {
            particleSystem.burst(cx, cy, 30, ['#a855f7', '#c084fc', '#38bdf8', '#ffffff'], 2, 6, 2, 4, 'stardust');
            const sw = particleSystem.spawn(cx, cy, 0, 0, 7, '#a855f7', 35, 'shockwave', 0, 1);
            if (sw) sw.extra = 75;
        }

        const rad = 30;
        if (entityManager && Array.isArray(entityManager.entities)) {
            for (let i = 0; i < entityManager.entities.length; i++) {
                const ent = entityManager.entities[i];
                if (ent && ent.active && Math.hypot(ent.x - cx, ent.y - cy) <= rad) {
                    const ang = Math.atan2(ent.y - cy, ent.x - cx);
                    ent.vx += Math.cos(ang) * 7.5;
                    ent.vy += Math.sin(ang) * 7.5;
                    ent.takeDamage(60);
                    if (particleSystem) particleSystem.spawn(ent.x, ent.y, 0, 0, 2, '#c084fc', 20, 'stardust');
                }
            }
        }
    }

    // NEW: Monsoon Deluge - Endless Replenishing Rain
    triggerMonsoon(world, disasterManager, audio) {
        disasterManager = disasterManager || this;
        disasterManager.weather = 'rain';
        disasterManager.weatherTimer = 800;
        if (audio && typeof audio.playRain === 'function') audio.playRain();
    }

    // NEW: Solar Eclipse - Cosmic Umbral Twilight
    triggerSolarEclipse(world, disasterManager, particleSystem, audio) {
        disasterManager = disasterManager || this;
        disasterManager.weather = 'acid'; // Dark atmospheric tint
        disasterManager.weatherTimer = 600;
        if (audio && typeof audio.playSingularity === 'function') audio.playSingularity();
        if (particleSystem && world) {
            for (let i = 0; i < 20; i++) {
                const rx = Math.random() * world.width;
                const ry = Math.random() * world.height;
                particleSystem.spawn(rx, ry, 0, 0, 3, '#c084fc', 40, 'stardust');
            }
        }
    }

    // ----------------------------------------------------
    // 20 NEW DESTRUCTION & CHAOS POWERS
    // ----------------------------------------------------
    triggerTachyonLance(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playLaser === 'function') audio.playLaser();
        if (window.game) window.game.shakeCamera(24, 30);
        if (particleSystem) {
            for (let y = 0; y < world.height; y += 4) {
                particleSystem.spawn(cx, y, (Math.random() - 0.5) * 2, 0, 2.5, '#38bdf8', 15, 'stardust');
            }
            particleSystem.burst(cx, cy, 30, ['#38bdf8', '#0284c7', '#ffffff'], 3, 7, 2, 4, 'spark');
        }
        for (let y = 0; y < world.height; y++) {
            for (let dx = -2; dx <= 2; dx++) {
                const tx = Math.floor(cx + dx);
                if (world.inBounds(tx, y)) {
                    const t = world.getTile(tx, y);
                    if (t !== TILES.BEDROCK) world.setTile(tx, y, Math.abs(dx) <= 1 ? TILES.VOID : TILES.PLASMA_FIELD);
                }
            }
        }
        if (entityManager && entityManager.entities) {
            entityManager.entities.forEach(e => {
                if (e.active && Math.abs(e.x - cx) < 6) e.takeDamage(450);
            });
        }
    }

    triggerSubspaceTorpedo(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playExplosion === 'function') audio.playExplosion(1.8);
        if (window.game) window.game.shakeCamera(32, 40);
        if (particleSystem) {
            particleSystem.burst(cx, cy, 40, ['#7c3aed', '#c084fc', '#f43f5e', '#ffffff'], 4, 10, 2, 5, 'fire');
            const sw = particleSystem.spawn(cx, cy, 0, 0, 10, '#c084fc', 35, 'shockwave', 0, 1);
            if (sw) sw.extra = 60;
        }
        const rad = 18;
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                const d2 = dx * dx + dy * dy;
                if (d2 <= rad * rad) {
                    const tx = Math.floor(cx + dx), ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        if (d2 < 25) world.setTile(tx, ty, TILES.LAVA);
                        else if (Math.random() < 0.6) world.setTile(tx, ty, TILES.MAGMA_ROCK);
                    }
                }
            }
        }
        if (entityManager && entityManager.entities) {
            entityManager.entities.forEach(e => {
                if (e.active && Math.hypot(e.x - cx, e.y - cy) < rad) e.takeDamage(200);
            });
        }
    }

    triggerSolarBeam(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playLaser === 'function') audio.playLaser();
        if (window.game) window.game.shakeCamera(16, 25);
        if (particleSystem) {
            particleSystem.burst(cx, cy, 35, ['#fbbf24', '#f59e0b', '#ffffff'], 3, 8, 2, 4, 'spark');
        }
        const rad = 16;
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                if (dx * dx + dy * dy <= rad * rad) {
                    const tx = Math.floor(cx + dx), ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty)) {
                        const t = world.getTile(tx, ty);
                        if (t === TILES.WATER || t === TILES.DEEP_WATER) world.setTile(tx, ty, TILES.SAND);
                        else if (t === TILES.ICE || t === TILES.SNOW) world.setTile(tx, ty, TILES.WATER);
                        else if (t === TILES.FOREST || t === TILES.GRASS) { world.setTile(tx, ty, TILES.ASH); world.ignite(tx, ty, 100); }
                    }
                }
            }
        }
        if (entityManager && entityManager.entities) {
            entityManager.entities.forEach(e => {
                if (e.active && Math.hypot(e.x - cx, e.y - cy) < rad && !e.hasTrait('fireproof')) e.takeDamage(250);
            });
        }
    }

    triggerDarkMatterDetonator(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playSingularity === 'function') audio.playSingularity();
        if (window.game) window.game.shakeCamera(28, 45);
        if (particleSystem) {
            particleSystem.burst(cx, cy, 50, ['#1e1b4b', '#4338ca', '#818cf8', '#000000'], 3, 9, 2, 5, 'stardust');
        }
        const rad = 22;
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                if (dx * dx + dy * dy <= rad * rad) {
                    const tx = Math.floor(cx + dx), ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        const rnd = Math.random();
                        if (rnd < 0.45) world.setTile(tx, ty, TILES.VOID);
                        else if (rnd < 0.8) world.setTile(tx, ty, TILES.STARDUST);
                    }
                }
            }
        }
        if (entityManager && entityManager.entities) {
            entityManager.entities.forEach(e => {
                if (e.active && Math.hypot(e.x - cx, e.y - cy) < rad) e.takeDamage(320);
            });
        }
    }

    triggerVoidDrill(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playExplosion === 'function') audio.playExplosion(1.4);
        if (window.game) window.game.shakeCamera(20, 30);
        for (let y = Math.floor(cy); y < world.height; y++) {
            for (let dx = -2; dx <= 2; dx++) {
                const tx = Math.floor(cx + dx);
                if (world.inBounds(tx, y)) {
                    world.setTile(tx, y, TILES.DEEP_TRENCH);
                }
            }
        }
        if (particleSystem) particleSystem.burst(cx, cy, 30, ['#334155', '#64748b', '#0f172a'], 2, 6, 2, 4, 'smoke');
    }

    triggerMagmaMortar(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playExplosion === 'function') audio.playExplosion(1.3);
        for (let s = 0; s < 7; s++) {
            const ox = (Math.random() - 0.5) * 24;
            const oy = (Math.random() - 0.5) * 24;
            const tx = Math.floor(cx + ox), ty = Math.floor(cy + oy);
            if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                world.setTile(tx, ty, TILES.LAVA);
                world.ignite(tx, ty, 120);
            }
            if (particleSystem) particleSystem.burst(cx + ox, cy + oy, 15, ['#f97316', '#ef4444', '#facc15'], 2, 5, 1, 3, 'fire');
        }
    }

    triggerHellfireVortex(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playExplosion === 'function') audio.playExplosion(1.5);
        if (window.game) window.game.shakeCamera(18, 30);
        const rad = 16;
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                if (dx * dx + dy * dy <= rad * rad) {
                    const tx = Math.floor(cx + dx), ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        if (Math.random() < 0.4) world.setTile(tx, ty, TILES.MAGMA_ROCK);
                        world.ignite(tx, ty, 150);
                    }
                }
            }
        }
        if (particleSystem) particleSystem.burst(cx, cy, 40, ['#ef4444', '#b91c1c', '#f97316'], 3, 8, 2, 4, 'fire');
        if (entityManager && entityManager.entities) {
            entityManager.entities.forEach(e => {
                if (e.active && Math.hypot(e.x - cx, e.y - cy) < rad && !e.hasTrait('fireproof')) e.takeDamage(180);
            });
        }
    }

    triggerGravityWell(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playSingularity === 'function') audio.playSingularity();
        const rad = 25;
        if (entityManager && entityManager.entities) {
            entityManager.entities.forEach(e => {
                if (e.active && Math.hypot(e.x - cx, e.y - cy) < rad) {
                    const ang = Math.atan2(cy - e.y, cx - e.x);
                    e.vx += Math.cos(ang) * 8;
                    e.vy += Math.sin(ang) * 8;
                    e.takeDamage(120);
                }
            });
        }
        if (particleSystem) particleSystem.burst(cx, cy, 35, ['#a855f7', '#7c3aed', '#ffffff'], 3, 7, 2, 4, 'stardust');
    }

    triggerAntimatterSingularity(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playSingularity === 'function') audio.playSingularity();
        if (window.game) window.game.shakeCamera(35, 50);
        this.nuclearFlashTimer = 35;
        const rad = 26;
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                if (dx * dx + dy * dy <= rad * rad) {
                    const tx = Math.floor(cx + dx), ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        world.setTile(tx, ty, TILES.VOID);
                    }
                }
            }
        }
        if (particleSystem) particleSystem.burst(cx, cy, 60, ['#ffffff', '#e0e7ff', '#6366f1'], 4, 12, 2, 5, 'stardust');
        if (entityManager && entityManager.entities) {
            entityManager.entities.forEach(e => {
                if (e.active && Math.hypot(e.x - cx, e.y - cy) < rad) e.takeDamage(800);
            });
        }
    }

    triggerOrbitalKineticHarpoon(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playExplosion === 'function') audio.playExplosion(2.0);
        if (window.game) window.game.shakeCamera(40, 50);
        const rad = 14;
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                const dist2 = dx * dx + dy * dy;
                if (dist2 <= rad * rad) {
                    const tx = Math.floor(cx + dx), ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        world.setTile(tx, ty, dist2 < 20 ? TILES.DEEP_TRENCH : TILES.STONE);
                    }
                }
            }
        }
        if (particleSystem) particleSystem.burst(cx, cy, 50, ['#94a3b8', '#cbd5e1', '#ffffff'], 4, 12, 2, 5, 'spark');
        if (entityManager && entityManager.entities) {
            entityManager.entities.forEach(e => {
                if (e.active && Math.hypot(e.x - cx, e.y - cy) < rad * 1.5) e.takeDamage(350);
            });
        }
    }

    triggerGammaRayPulsar(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playLaser === 'function') audio.playLaser();
        const rad = 20;
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                if (dx * dx + dy * dy <= rad * rad) {
                    const tx = Math.floor(cx + dx), ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        if (Math.random() < 0.4) world.setTile(tx, ty, TILES.RADIOACTIVE_WASTE);
                    }
                }
            }
        }
        if (particleSystem) particleSystem.burst(cx, cy, 30, ['#84cc16', '#a3e635', '#ffffff'], 3, 7, 2, 4, 'acid');
        if (entityManager && entityManager.entities) {
            entityManager.entities.forEach(e => {
                if (e.active && Math.hypot(e.x - cx, e.y - cy) < rad) e.takeDamage(220);
            });
        }
    }

    triggerChronosDecayBomb(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playChronoFreeze === 'function') audio.playChronoFreeze();
        const rad = 18;
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                if (dx * dx + dy * dy <= rad * rad) {
                    const tx = Math.floor(cx + dx), ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        const t = world.getTile(tx, ty);
                        if (t === TILES.FOREST || t === TILES.GRASS) world.setTile(tx, ty, TILES.ASH);
                    }
                }
            }
        }
        if (entityManager && entityManager.entities) {
            entityManager.entities.forEach(e => {
                if (e.active && Math.hypot(e.x - cx, e.y - cy) < rad) {
                    e.takeDamage(150);
                    if (e.hp <= 0 && entityManager.spawn) entityManager.spawn('skeleton', e.x, e.y);
                }
            });
        }
        if (particleSystem) particleSystem.burst(cx, cy, 30, ['#a855f7', '#475569', '#cbd5e1'], 2, 6, 2, 4, 'smoke');
    }

    triggerPlasmaTorrent(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playLaser === 'function') audio.playLaser();
        const rad = 15;
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                if (dx * dx + dy * dy <= rad * rad) {
                    const tx = Math.floor(cx + dx), ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        world.setTile(tx, ty, TILES.PLASMA_FIELD);
                    }
                }
            }
        }
        if (particleSystem) particleSystem.burst(cx, cy, 35, ['#06b6d4', '#38bdf8', '#ffffff'], 3, 8, 2, 4, 'spark');
        if (entityManager && entityManager.entities) {
            entityManager.entities.forEach(e => {
                if (e.active && Math.hypot(e.x - cx, e.y - cy) < rad) e.takeDamage(260);
            });
        }
    }

    triggerSeismicSplitter(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playExplosion === 'function') audio.playExplosion(1.6);
        if (window.game) window.game.shakeCamera(25, 40);
        for (let dx = -25; dx <= 25; dx++) {
            const tx = Math.floor(cx + dx);
            const ty = Math.floor(cy + (Math.random() - 0.5) * 3);
            if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                world.setTile(tx, ty, TILES.MAGMA_FISSURE);
                if (world.inBounds(tx, ty + 1)) world.setTile(tx, ty + 1, TILES.LAVA);
            }
        }
        if (particleSystem) particleSystem.burst(cx, cy, 40, ['#dc2626', '#f97316', '#7f1d1d'], 3, 7, 2, 4, 'fire');
    }

    triggerAcidHail(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playExplosion === 'function') audio.playExplosion(0.8);
        const rad = 18;
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                if (dx * dx + dy * dy <= rad * rad && Math.random() < 0.4) {
                    const tx = Math.floor(cx + dx), ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        world.setTile(tx, ty, TILES.ACID);
                    }
                }
            }
        }
        if (particleSystem) particleSystem.burst(cx, cy, 35, ['#4ade80', '#22c55e', '#a3e635'], 2, 6, 2, 4, 'acid');
        if (entityManager && entityManager.entities) {
            entityManager.entities.forEach(e => {
                if (e.active && Math.hypot(e.x - cx, e.y - cy) < rad) e.takeDamage(160);
            });
        }
    }

    triggerBioweaponSiphon(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playMagic === 'function') audio.playMagic();
        const rad = 20;
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                if (dx * dx + dy * dy <= rad * rad && Math.random() < 0.35) {
                    const tx = Math.floor(cx + dx), ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty)) world.setTile(tx, ty, TILES.TOXIC_SLIME);
                }
            }
        }
        if (entityManager && entityManager.entities) {
            entityManager.entities.forEach(e => {
                if (e.active && Math.hypot(e.x - cx, e.y - cy) < rad) {
                    e.takeDamage(120);
                    e.infected = true;
                }
            });
        }
        if (particleSystem) particleSystem.burst(cx, cy, 30, ['#15803d', '#22c55e', '#84cc16'], 2, 5, 2, 4, 'acid');
    }

    triggerCryoImplosion(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playThunder === 'function') audio.playThunder();
        const rad = 22;
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                if (dx * dx + dy * dy <= rad * rad) {
                    const tx = Math.floor(cx + dx), ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        const t = world.getTile(tx, ty);
                        if (t === TILES.WATER || t === TILES.DEEP_WATER) world.setTile(tx, ty, TILES.ICE);
                        else if (t === TILES.LAVA) world.setTile(tx, ty, TILES.OBSIDIAN);
                        else world.setTile(tx, ty, TILES.GLACIAL_PERMAFROST);
                    }
                }
            }
        }
        if (particleSystem) particleSystem.burst(cx, cy, 40, ['#a5f3fc', '#38bdf8', '#ffffff'], 3, 8, 2, 4, 'spark');
        if (entityManager && entityManager.entities) {
            entityManager.entities.forEach(e => {
                if (e.active && Math.hypot(e.x - cx, e.y - cy) < rad) {
                    e.frozen = 300;
                    e.takeDamage(90);
                }
            });
        }
    }

    triggerChaosMeteor(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playExplosion === 'function') audio.playExplosion(1.5);
        if (window.game) window.game.shakeCamera(24, 35);
        const rad = 14;
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                if (dx * dx + dy * dy <= rad * rad) {
                    const tx = Math.floor(cx + dx), ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        world.setTile(tx, ty, Math.random() < 0.6 ? TILES.CRYSTAL_GEODE : TILES.CRYSTAL);
                    }
                }
            }
        }
        if (particleSystem) particleSystem.burst(cx, cy, 45, ['#ec4899', '#a855f7', '#38bdf8', '#ffffff'], 3, 9, 2, 5, 'spark');
        if (entityManager && entityManager.entities) {
            entityManager.entities.forEach(e => {
                if (e.active && Math.hypot(e.x - cx, e.y - cy) < rad) e.takeDamage(240);
            });
        }
    }

    triggerEmpCascade(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playThunder === 'function') audio.playThunder();
        if (particleSystem) particleSystem.burst(cx, cy, 35, ['#38bdf8', '#0284c7', '#ffffff'], 3, 7, 2, 4, 'spark');
        if (entityManager) {
            entityManager.projectiles = [];
            if (entityManager.entities) {
                entityManager.entities.forEach(e => {
                    if (e.active && (e.isVehicle || e.type.includes('mech') || e.type.includes('tank') || e.type.includes('cyber'))) {
                        e.takeDamage(400);
                        if (particleSystem) particleSystem.burst(e.x, e.y, 15, ['#facc15', '#ef4444'], 2, 4, 1, 2, 'spark');
                    }
                });
            }
        }
    }

    triggerApocalypseBell(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playThunder === 'function') audio.playThunder();
        if (window.game) window.game.shakeCamera(30, 45);
        if (particleSystem) {
            for (let s = 1; s <= 3; s++) {
                const sw = particleSystem.spawn(cx, cy, 0, 0, 8 * s, '#fbbf24', 35, 'shockwave', 0, 1);
                if (sw) sw.extra = 60 * s;
            }
        }
        if (entityManager && entityManager.entities) {
            entityManager.entities.forEach(e => {
                if (e.active) {
                    const d = Math.hypot(e.x - cx, e.y - cy);
                    if (d < 50) {
                        const ang = Math.atan2(e.y - cy, e.x - cx);
                        e.vx += Math.cos(ang) * 9;
                        e.vy += Math.sin(ang) * 9;
                        e.takeDamage(150);
                    }
                }
            });
        }
    }

    // ----------------------------------------------------
    // 20 NEW NATURE & ENVIRONMENTAL POWERS
    // ----------------------------------------------------
    triggerBloodMoon(world, entityManager, disasterManager, particleSystem, audio) {
        if (audio && typeof audio.playSingularity === 'function') audio.playSingularity();
        if (disasterManager) {
            disasterManager.activeStorm = 'acid';
            disasterManager.stormTimer = 700;
        }
        if (entityManager && entityManager.entities) {
            entityManager.entities.forEach(e => {
                if (e.active && (e.type === 'wolf' || e.type === 'demon' || e.type === 'zombie' || e.hasTrait('bloodthirsty'))) {
                    e.attack *= 2;
                    e.speed *= 1.4;
                    e.traits.add('bloodthirsty');
                }
            });
        }
        if (particleSystem && world) {
            for (let i = 0; i < 25; i++) {
                particleSystem.spawn(Math.random() * world.width, Math.random() * world.height, 0, 0, 2, '#991b1b', 40, 'stardust');
            }
        }
    }

    triggerBallLightning(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playThunder === 'function') audio.playThunder();
        for (let i = 0; i < 4; i++) {
            const ang = (i / 4) * Math.PI * 2;
            const bx = cx + Math.cos(ang) * 10;
            const by = cy + Math.sin(ang) * 10;
            if (particleSystem) particleSystem.burst(bx, by, 15, ['#38bdf8', '#facc15', '#ffffff'], 2, 5, 1, 3, 'spark');
            if (world && world.inBounds(Math.floor(bx), Math.floor(by))) {
                world.ignite(Math.floor(bx), Math.floor(by), 60);
            }
        }
    }

    triggerSolarWind(world, entityManager, disasterManager, particleSystem, audio) {
        if (audio && typeof audio.playLaser === 'function') audio.playLaser();
        if (disasterManager) {
            disasterManager.activeStorm = 'clone_rain';
            disasterManager.stormTimer = 400;
        }
        if (particleSystem && world) {
            for (let i = 0; i < 40; i++) {
                particleSystem.spawn(Math.random() * world.width, Math.random() * world.height, 2, 0.5, 2, '#fbbf24', 30, 'stardust');
            }
        }
    }

    triggerSupercellCyclone(cx, cy, world, disasterManager, particleSystem, audio) {
        if (disasterManager) {
            disasterManager.spawnTornado(cx, cy);
            disasterManager.activeStorm = 'rain';
            disasterManager.stormTimer = 800;
        }
        if (audio && typeof audio.playThunder === 'function') audio.playThunder();
    }

    triggerCryoDeluge(disasterManager, world) {
        if (disasterManager) {
            disasterManager.activeStorm = 'snow';
            disasterManager.stormTimer = 900;
        }
        for (let i = 0; i < world.size; i++) {
            if (world.tiles[i] === TILES.WATER && Math.random() < 0.3) world.tiles[i] = TILES.ICE;
        }
    }

    triggerMagmaGeyser(cx, cy, world, particleSystem, audio) {
        if (audio && typeof audio.playExplosion === 'function') audio.playExplosion(1.3);
        const rad = 8;
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                if (dx * dx + dy * dy <= rad * rad) {
                    const tx = Math.floor(cx + dx), ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        world.setTile(tx, ty, TILES.LAVA);
                    }
                }
            }
        }
        if (particleSystem) particleSystem.burst(cx, cy, 35, ['#ef4444', '#f97316', '#facc15'], 3, 8, 2, 4, 'fire');
    }

    triggerSporeFog(cx, cy, world, particleSystem, audio) {
        if (audio && typeof audio.playMagic === 'function') audio.playMagic();
        const rad = 15;
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                if (dx * dx + dy * dy <= rad * rad) {
                    const tx = Math.floor(cx + dx), ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty) && (world.getTile(tx, ty) === TILES.SOIL || world.getTile(tx, ty) === TILES.GRASS)) {
                        world.setTile(tx, ty, Math.random() < 0.5 ? TILES.GLOWCAP_MUSHROOM : TILES.MUSHROOM_SPORE);
                    }
                }
            }
        }
        if (particleSystem) particleSystem.burst(cx, cy, 30, ['#06b6d4', '#a855f7', '#c084fc'], 2, 6, 2, 4, 'stardust');
    }

    triggerStaticSquall(disasterManager) {
        if (disasterManager) {
            disasterManager.activeStorm = 'rain';
            disasterManager.stormTimer = 700;
        }
    }

    triggerPyroclasticCloud(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playExplosion === 'function') audio.playExplosion(1.4);
        const rad = 18;
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                if (dx * dx + dy * dy <= rad * rad) {
                    const tx = Math.floor(cx + dx), ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        world.setTile(tx, ty, TILES.ASH_WASTELAND);
                    }
                }
            }
        }
        if (particleSystem) particleSystem.burst(cx, cy, 40, ['#475569', '#334155', '#78350f'], 3, 7, 2, 5, 'smoke');
        if (entityManager && entityManager.entities) {
            entityManager.entities.forEach(e => {
                if (e.active && Math.hypot(e.x - cx, e.y - cy) < rad && !e.hasTrait('fireproof')) e.takeDamage(175);
            });
        }
    }

    triggerDustDevil(cx, cy, world, particleSystem, audio) {
        if (audio && typeof audio.playRain === 'function') audio.playRain();
        const rad = 10;
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                if (dx * dx + dy * dy <= rad * rad) {
                    const tx = Math.floor(cx + dx), ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        world.setTile(tx, ty, TILES.GOLDEN_SAND);
                    }
                }
            }
        }
        if (particleSystem) particleSystem.burst(cx, cy, 25, ['#dec17a', '#fbbf24'], 2, 5, 1, 3, 'stardust');
    }

    triggerMagneticAurora(world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playMagic === 'function') audio.playMagic();
        if (entityManager) {
            entityManager.forcePeace = true;
            if (entityManager.entities) {
                entityManager.entities.forEach(e => {
                    if (e.active) e.hp = e.maxHp;
                });
            }
        }
        if (particleSystem && world) {
            for (let i = 0; i < 40; i++) {
                particleSystem.spawn(Math.random() * world.width, Math.random() * 30, 1, 0, 3, '#34d399', 45, 'stardust');
            }
        }
    }

    triggerHailstorm(disasterManager) {
        if (disasterManager) {
            disasterManager.activeStorm = 'snow';
            disasterManager.stormTimer = 800;
        }
    }

    triggerAcidGeyser(cx, cy, world, particleSystem, audio) {
        if (audio && typeof audio.playExplosion === 'function') audio.playExplosion(1.1);
        const rad = 8;
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                if (dx * dx + dy * dy <= rad * rad) {
                    const tx = Math.floor(cx + dx), ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        world.setTile(tx, ty, TILES.ACID);
                    }
                }
            }
        }
        if (particleSystem) particleSystem.burst(cx, cy, 30, ['#4ade80', '#22c55e', '#84cc16'], 2.5, 6, 2, 4, 'acid');
    }

    triggerGlacialCrevasse(cx, cy, world, particleSystem, audio) {
        if (audio && typeof audio.playThunder === 'function') audio.playThunder();
        for (let dy = -15; dy <= 15; dy++) {
            const ty = Math.floor(cy + dy);
            const tx = Math.floor(cx + (Math.random() - 0.5) * 2);
            if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                world.setTile(tx, ty, TILES.ICE);
                if (world.inBounds(tx + 1, ty)) world.setTile(tx + 1, ty, TILES.GLACIAL_PERMAFROST);
            }
        }
        if (particleSystem) particleSystem.burst(cx, cy, 30, ['#a5f3fc', '#ffffff', '#38bdf8'], 2, 5, 2, 4, 'spark');
    }

    triggerOzoneTear(cx, cy, world, particleSystem, audio) {
        if (audio && typeof audio.playLaser === 'function') audio.playLaser();
        const rad = 14;
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                if (dx * dx + dy * dy <= rad * rad) {
                    const tx = Math.floor(cx + dx), ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        world.setTile(tx, ty, TILES.SAND);
                    }
                }
            }
        }
        if (particleSystem) particleSystem.burst(cx, cy, 25, ['#f59e0b', '#fbbf24', '#ffffff'], 2, 6, 2, 4, 'spark');
    }

    triggerCosmicRadiation(world, entityManager, particleSystem, audio) {
        if (audio && typeof audio.playMagic === 'function') audio.playMagic();
        if (particleSystem && world) {
            for (let i = 0; i < 50; i++) {
                particleSystem.spawn(Math.random() * world.width, Math.random() * world.height, 0, 1, 2.5, '#c084fc', 35, 'stardust');
            }
        }
        if (entityManager && entityManager.entities) {
            entityManager.entities.forEach(e => {
                if (e.active) e.hp = Math.min(e.maxHp * 1.5, e.hp + 100);
            });
        }
    }

    triggerMaelstromVortex(cx, cy, world, entityManager, disasterManager, particleSystem, audio) {
        if (disasterManager) disasterManager.spawnWhirlpool(cx, cy);
        if (audio && typeof audio.playRain === 'function') audio.playRain();
    }

    triggerSwampGasEruption(cx, cy, world, particleSystem, audio) {
        if (audio && typeof audio.playExplosion === 'function') audio.playExplosion(1.0);
        const rad = 10;
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                if (dx * dx + dy * dy <= rad * rad) {
                    const tx = Math.floor(cx + dx), ty = Math.floor(cy + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        world.setTile(tx, ty, TILES.POISON_SWAMP);
                    }
                }
            }
        }
        if (particleSystem) particleSystem.burst(cx, cy, 30, ['#22c55e', '#16a34a', '#4ade80'], 2, 6, 2, 4, 'acid');
    }

    triggerRadiantSunshower(disasterManager, world, particleSystem, audio) {
        if (disasterManager) {
            disasterManager.activeStorm = 'rain';
            disasterManager.stormTimer = 600;
        }
        for (let i = 0; i < world.size; i++) {
            if (world.tiles[i] === TILES.GRASS && Math.random() < 0.2) {
                world.tiles[i] = TILES.LUSH_MEADOW;
            }
        }
        if (audio && typeof audio.playRain === 'function') audio.playRain();
    }

    triggerGreatDeluge(disasterManager, world) {
        if (disasterManager) {
            disasterManager.activeStorm = 'rain';
            disasterManager.stormTimer = 1200;
        }
        for (let i = 0; i < world.size; i++) {
            if (world.tiles[i] === TILES.SAND && Math.random() < 0.4) {
                world.tiles[i] = TILES.WATER;
            }
        }
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
        this.duckBarrages = [];
        this.antimatterMissiles = [];
        this.orbitalBeams = [];
        this.toxicClouds = [];
        this.whirlpools = [];
        this.activeStorm = null;
        this.stormTimer = 0;
        this.nuclearFlashTimer = 0;
        this.grabbedEntity = null;
    }
}

window.DisasterManager = DisasterManager;
