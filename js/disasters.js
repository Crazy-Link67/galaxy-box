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
        // Accretion disk glow
        ctx.save();
        ctx.strokeStyle = '#a855f7';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 8, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

class Tornado {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = 16;
        this.life = 600;
        this.active = true;
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
        this.vx = Math.max(-1.2, Math.min(1.2, this.vx));
        this.vy = Math.max(-1.2, Math.min(1.2, this.vy));
        this.x += this.vx;
        this.y += this.vy;

        // Keep in bounds
        if (this.x < 10) this.vx = 0.5;
        if (this.x > world.width - 10) this.vx = -0.5;
        if (this.y < 10) this.vy = 0.5;
        if (this.y > world.height - 10) this.vy = -0.5;

        // Funnel cloud particles
        if (particleSystem) {
            for (let i = 0; i < 6; i++) {
                const angle = Math.random() * Math.PI * 2;
                const dist = Math.random() * this.radius;
                const px = this.x + Math.cos(angle) * dist;
                const py = this.y + Math.sin(angle) * (dist * 0.6);
                const spd = 1.5 + Math.random() * 2;
                particleSystem.spawn(px, py, -Math.sin(angle) * spd, -1.2, 2.5, '#94a3b8', 20, 'smoke');
            }
        }

        // Tear up land & trees
        const tx = Math.floor(this.x);
        const ty = Math.floor(this.y);
        for (let dy = -3; dy <= 3; dy++) {
            for (let dx = -3; dx <= 3; dx++) {
                const ptx = tx + dx;
                const pty = ty + dy;
                if (!world.inBounds(ptx, pty)) continue;
                const t = world.getTile(ptx, pty);
                if (t === TILES.FOREST) {
                    world.setTile(ptx, pty, TILES.SOIL);
                } else if (t === TILES.GRASS && Math.random() < 0.2) {
                    world.setTile(ptx, pty, TILES.SOIL);
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
                ent.x += Math.cos(angle) * 3;
                ent.y += Math.sin(angle) * 3;
                ent.takeDamage(1.5);
            }
        }
    }

    render(ctx, animTime = 0) {
        ctx.save();
        ctx.fillStyle = 'rgba(148, 163, 184, 0.28)';
        for (let yOff = 0; yOff < 32; yOff += 4) {
            const width = Math.max(3, yOff * 0.7);
            const wobble = Math.sin(animTime * 10 + yOff * 0.4) * 3;
            ctx.beginPath();
            ctx.ellipse(this.x + wobble, this.y - yOff, width, width * 0.35, 0, 0, Math.PI * 2);
            ctx.fill();
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
            disasterManager.triggerExplosion(this.targetX, this.targetY, 18, 1.8, world, entityManager, particleSystem, audio);
        }
    }

    render(ctx) {
        ctx.fillStyle = '#ff3d00';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
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
        // Tractor beam cone
        ctx.fillStyle = 'rgba(56, 189, 248, 0.2)';
        ctx.beginPath();
        ctx.moveTo(this.x - 2, this.y + 3);
        ctx.lineTo(this.x + 2, this.y + 3);
        ctx.lineTo(this.x + 14, this.y + 45);
        ctx.lineTo(this.x - 14, this.y + 45);
        ctx.closePath();
        ctx.fill();

        // Saucer dome & hull
        ctx.fillStyle = '#67e8f9';
        ctx.beginPath();
        ctx.arc(this.x, this.y - 2, 4, Math.PI, 0);
        ctx.fill();

        ctx.fillStyle = '#94a3b8';
        ctx.beginPath();
        ctx.ellipse(this.x, this.y + 1, 9, 3, 0, 0, Math.PI * 2);
        ctx.fill();

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
        ctx.fillStyle = 'rgba(56, 189, 248, 0.18)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * pulse, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Inner glowing wave
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 0.65, 0, Math.PI * 2);
        ctx.stroke();
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

    update(world, entityManager, particleSystem) {
        this.life--;
        if (this.life <= 0) {
            this.active = false;
            return;
        }

        // Swirl particles
        if (particleSystem) {
            for (let k = 0; k < 2; k++) {
                const a = Math.random() * Math.PI * 2;
                const d = Math.random() * this.radius;
                particleSystem.spawn(this.x + Math.cos(a) * d, this.y + Math.sin(a) * d, -Math.sin(a) * 2, Math.cos(a) * 2, 1.5, '#c026d3', 20, 'stardust');
            }
        }

        // Gravitational pull & corruption
        const rad = Math.floor(this.radius);
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                if (dx * dx + dy * dy <= rad * rad) {
                    const tx = Math.floor(this.x + dx);
                    const ty = Math.floor(this.y + dy);
                    if (world.inBounds(tx, ty) && Math.random() < 0.005) {
                        const cur = world.getTile(tx, ty);
                        if (cur !== TILES.BEDROCK && cur !== TILES.VOID) {
                            world.setTile(tx, ty, TILES.CORRUPTED);
                        }
                    }
                }
            }
        }

        // Periodic demon / void creature spawn
        this.spawnTimer++;
        if (this.spawnTimer >= 140) {
            this.spawnTimer = 0;
            const spawnType = Math.random() < 0.6 ? 'demon' : (Math.random() < 0.5 ? 'alien' : 'skeleton');
            entityManager.spawn(spawnType, this.x + (Math.random() - 0.5) * 6, this.y + (Math.random() - 0.5) * 6);
            if (particleSystem) {
                particleSystem.burst(this.x, this.y, 15, ['#a855f7', '#7e22ce', '#ffffff'], 1.5, 3.5, 1.5, 3);
            }
        }
    }

    render(ctx, animTime = 0) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(animTime * 1.5);
        ctx.fillStyle = '#3b0764';
        ctx.beginPath();
        ctx.ellipse(0, 0, this.radius * 0.8, this.radius * 0.35, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#e879f9';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(0, 0, this.radius * 0.6, this.radius * 0.2, 0, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(-1.5, -1.5, 3, 3);
        ctx.restore();
    }
}

class IonCannon {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.timer = 85;
        this.active = true;
        this.fired = false;
    }

    update(world, entityManager, disasterManager, particleSystem, audio) {
        this.timer--;
        if (this.timer === 35) {
            if (audio) audio.playLaser();
        }

        if (this.timer <= 30 && this.timer > 0) {
            if (!this.fired) {
                this.fired = true;
                if (audio) {
                    audio.playNuke();
                    audio.playSingularity();
                }
            }

            if (particleSystem) {
                for (let k = 0; k < 6; k++) {
                    const bx = this.x + (Math.random() - 0.5) * 16;
                    particleSystem.spawn(bx, this.y, (Math.random() - 0.5) * 3, -Math.random() * 4, 2, '#38bdf8', 25, 'spark');
                }
            }

            const rad = 10;
            for (let dy = -rad; dy <= rad; dy++) {
                for (let dx = -rad; dx <= rad; dx++) {
                    if (dx * dx + dy * dy <= rad * rad) {
                        const tx = Math.floor(this.x + dx);
                        const ty = Math.floor(this.y + dy);
                        if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                            world.setTile(tx, ty, TILES.FALLOUT);
                        }
                    }
                }
            }

            for (let i = 0; i < entityManager.entities.length; i++) {
                const ent = entityManager.entities[i];
                if (ent.active && Math.hypot(ent.x - this.x, ent.y - this.y) < 14) {
                    ent.takeDamage(80);
                }
            }
        }

        if (this.timer <= 0) {
            this.active = false;
            disasterManager.triggerExplosion(this.x, this.y, 22, 2.0, world, entityManager, particleSystem, audio);
        }
    }

    render(ctx, animTime = 0) {
        ctx.save();
        if (this.timer > 30) {
            const progress = (this.timer - 30) / 55;
            const r = 8 + progress * 24;
            ctx.strokeStyle = '#ef4444';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(this.x, this.y, r, 0, Math.PI * 2);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(this.x - r - 4, this.y); ctx.lineTo(this.x + r + 4, this.y);
            ctx.moveTo(this.x, this.y - r - 4); ctx.lineTo(this.x, this.y + r + 4);
            ctx.stroke();
        } else if (this.timer > 0) {
            ctx.fillStyle = 'rgba(56, 189, 248, 0.8)';
            ctx.fillRect(this.x - 7, -500, 14, this.y + 500);

            ctx.fillStyle = '#ffffff';
            ctx.fillRect(this.x - 3, -500, 6, this.y + 500);

            ctx.fillStyle = '#67e8f9';
            ctx.beginPath();
            ctx.arc(this.x, this.y, 14 + Math.random() * 4, 0, Math.PI * 2);
            ctx.fill();
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

        const tx = Math.floor(this.x);
        const ty = Math.floor(this.y);
        const hitGround = world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.AIR && world.getTile(tx, ty) !== TILES.VOID;

        if (dist <= this.speed * 1.2 || hitGround || this.y >= this.targetY) {
            this.active = false;
            disasterManager.triggerNuke(this.x, this.y, world, entityManager, particleSystem, audio);
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

    // Atomic Nuke
    triggerNuke(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio) audio.playNuke();
        if (particleSystem) particleSystem.nukeMushroom(cx, cy, 1.3);

        const radius = 35;
        const rad2 = radius * radius;

        // Obliterate terrain & create crater
        for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
                const dist2 = dx * dx + dy * dy;
                if (dist2 > rad2) continue;

                const tx = Math.floor(cx + dx);
                const ty = Math.floor(cy + dy);
                if (!world.inBounds(tx, ty)) continue;

                if (world.getTile(tx, ty) === TILES.BEDROCK) continue;

                if (dist2 < radius * radius * 0.25) {
                    world.setTile(tx, ty, TILES.FALLOUT);
                } else if (dist2 < radius * radius * 0.65) {
                    world.setTile(tx, ty, TILES.ASH);
                } else {
                    world.ignite(tx, ty, 100);
                }
            }
        }

        // Blast and vaporize entities & buildings
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (!ent.active) continue;
            const dist = Math.hypot(ent.x - cx, ent.y - cy);
            if (dist < radius * 1.4) {
                // Check for The Great Galaxy Sacrifice!
                if (ent.type === 'galaxy_guardian' || ent.isCelestial) {
                    this.triggerGreatGalaxySacrifice(ent.x, ent.y, world, entityManager, particleSystem, audio);
                }

                ent.takeDamage(250);
                // Push back violently
                const angle = Math.atan2(ent.y - cy, ent.x - cx);
                ent.x += Math.cos(angle) * (radius - dist) * 0.8;
                ent.y += Math.sin(angle) * (radius - dist) * 0.8;
            }
        }

        // Destroy buildings in blast radius
        for (let i = entityManager.buildings.length - 1; i >= 0; i--) {
            const b = entityManager.buildings[i];
            if (Math.hypot(b.x - cx, b.y - cy) < radius) {
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

        if (particleSystem) {
            // Massive expanding celestial stardust supernova
            particleSystem.burst(gx, gy, 450, ['#a855f7', '#c026d3', '#38bdf8', '#facc15', '#ffffff'], 3, 12, 2, 6, 'stardust');
            for (let r = 0; r < 4; r++) {
                const sw = particleSystem.spawn(gx, gy, 0, 0, 8 + r * 6, '#38bdf8', 60 + r * 15, 'shockwave', 0, 1);
                sw.extra = 90;
            }
        }

        // Convert ground in radius to cosmic STARDUST & NEBULA
        const rad = 25;
        for (let dy = -rad; dy <= rad; dy++) {
            for (let dx = -rad; dx <= rad; dx++) {
                if (dx * dx + dy * dy <= rad * rad) {
                    const tx = Math.floor(gx + dx);
                    const ty = Math.floor(gy + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        world.setTile(tx, ty, Math.random() < 0.5 ? TILES.STARDUST : TILES.NEBULA);
                    }
                }
            }
        }

        // Trigger unlock in game & UI
        if (window.game) {
            window.game.unlockGalaxyTemplate();
        }
    }

    // Standard / Generic Explosion
    triggerExplosion(cx, cy, radius = 15, intensity = 1, world = null, entityManager = null, particleSystem = null, audio = null) {
        if (particleSystem) particleSystem.explosion(cx, cy, radius, intensity);
        if (audio) audio.playExplosion(intensity);

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

                if (dist2 < r2 * 0.3) {
                    world.setTile(tx, ty, TILES.VOID);
                } else if (dist2 < r2 * 0.7) {
                    world.setTile(tx, ty, TILES.ASH);
                } else {
                    world.ignite(tx, ty, 60);
                }
            }
        }

        if (entityManager) {
            for (let i = 0; i < entityManager.entities.length; i++) {
                const ent = entityManager.entities[i];
                if (!ent.active) continue;
                const dist = Math.hypot(ent.x - cx, ent.y - cy);
                if (dist < radius * 1.2) {
                    ent.takeDamage(60 * intensity);
                }
            }
        }
    }

    // Antimatter / Void Bomb
    triggerAntimatter(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio) audio.playSingularity();
        const radius = 24;
        if (particleSystem) {
            particleSystem.burst(cx, cy, 120, ['#a855f7', '#000000', '#3b82f6', '#ffffff'], 2, 7, 2, 5, 'stardust');
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

        // Delete entities
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (ent.active && Math.hypot(ent.x - cx, ent.y - cy) <= radius) {
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

    // Cluster Missiles
    triggerClusterBomb(cx, cy, world, entityManager, particleSystem, audio) {
        for (let i = 0; i < 8; i++) {
            const ox = (Math.random() - 0.5) * 35;
            const oy = (Math.random() - 0.5) * 35;
            setTimeout(() => {
                this.triggerExplosion(cx + ox, cy + oy, 8, 1, world, entityManager, particleSystem, audio);
            }, i * 70);
        }
    }

    // Tsar Finger Disintegrator
    triggerDisintegrator(x, y, world, entityManager, particleSystem) {
        const radius = 5;
        if (particleSystem) {
            particleSystem.burst(x, y, 15, ['#f43f5e', '#cbd5e1'], 1, 3, 1, 2);
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
            if (ent.active && Math.hypot(ent.x - x, ent.y - y) <= radius) {
                ent.takeDamage(9999);
            }
        }
    }

    // Supernova Bomb
    triggerSupernova(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio) audio.playNuke();
        if (particleSystem) {
            particleSystem.burst(cx, cy, 250, ['#ffffff', '#f43f5e', '#a855f7', '#38bdf8', '#facc15'], 2, 9, 2, 6, 'stardust');
        }
        this.triggerExplosion(cx, cy, 45, 3.0, world, entityManager, particleSystem, audio);
    }

    // Corrosion Bomb
    triggerCorrosionBomb(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio) audio.playSplash();
        const radius = 14;
        if (particleSystem) {
            particleSystem.burst(cx, cy, 80, ['#84cc16', '#4ade80', '#15803d'], 1, 4, 1.5, 3.5, 'acid');
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

    spawnTornado(x, y) {
        this.tornadoes.push(new Tornado(x, y));
    }

    triggerEarthquake(cx, cy, world, entityManager, particleSystem, audio) {
        if (audio) audio.playThunder();
        // Create jagged fault line chasm
        let curX = cx - 30;
        let curY = cy + (Math.random() - 0.5) * 10;
        const targetX = cx + 30;

        while (curX < targetX) {
            curX += 1 + Math.random() * 2;
            curY += (Math.random() - 0.5) * 3;

            for (let w = -1; w <= 1; w++) {
                const tx = Math.floor(curX);
                const ty = Math.floor(curY + w);
                if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                    world.setTile(tx, ty, TILES.VOID);
                    if (particleSystem && Math.random() < 0.2) {
                        particleSystem.spawn(tx, ty, (Math.random() - 0.5) * 2, -1, 2, '#4b5563', 30, 'smoke');
                    }
                }
            }
        }

        // Damage entities nearby
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (ent.active && Math.hypot(ent.x - cx, ent.y - cy) < 35) {
                ent.takeDamage(40);
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
