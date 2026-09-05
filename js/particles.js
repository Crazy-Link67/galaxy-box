// ==========================================
// GALAXYBOX - High Performance Particle Engine
// Particle pool with zero-allocation recycling
// ==========================================

class Particle {
    constructor() {
        this.active = false;
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.size = 2;
        this.color = '#ffffff';
        this.alpha = 1;
        this.decay = 0.02;
        this.gravity = 0;
        this.friction = 0.98;
        this.type = 'spark'; // spark, smoke, fire, shockwave, ember, blood, stardust, acid, water
        this.life = 1;
        this.maxLife = 1;
        this.extra = 0;
    }

    reset(x, y, vx, vy, size, color, life, type = 'spark', gravity = 0, friction = 0.98) {
        this.active = true;
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.size = size;
        this.color = color;
        this.life = life;
        this.maxLife = life;
        this.decay = 1 / life;
        this.type = type;
        this.gravity = gravity;
        this.friction = friction;
        this.alpha = 1;
        this.extra = 0;
    }

    update(dt = 1) {
        if (!this.active) return;
        this.x += this.vx * dt;
        this.y += this.vy * dt;
        this.vy += this.gravity * dt;
        this.vx *= Math.pow(this.friction, dt);
        this.vy *= Math.pow(this.friction, dt);

        this.life -= dt;
        this.alpha = Math.max(0, this.life / this.maxLife);

        if (this.type === 'shockwave') {
            this.size += 2.5 * dt;
        } else if (this.type === 'smoke') {
            this.size += 0.08 * dt;
        } else if (this.type === 'fire') {
            this.size = Math.max(0.5, this.size - 0.04 * dt);
        }

        if (this.life <= 0) {
            this.active = false;
        }
    }
}

class ParticleSystem {
    constructor(maxParticles = 6000) {
        this.maxParticles = maxParticles;
        this.pool = new Array(maxParticles);
        for (let i = 0; i < maxParticles; i++) {
            this.pool[i] = new Particle();
        }
        this.freeIndex = 0;
        this.activeCount = 0;
    }

    spawn(x, y, vx, vy, size, color, life, type = 'spark', gravity = 0, friction = 0.98) {
        // Find next free or oldest
        let p = null;
        for (let i = 0; i < this.maxParticles; i++) {
            const idx = (this.freeIndex + i) % this.maxParticles;
            if (!this.pool[idx].active) {
                p = this.pool[idx];
                this.freeIndex = (idx + 1) % this.maxParticles;
                break;
            }
        }
        if (!p) {
            // Overwrite oldest
            p = this.pool[this.freeIndex];
            this.freeIndex = (this.freeIndex + 1) % this.maxParticles;
        }

        p.reset(x, y, vx, vy, size, color, life, type, gravity, friction);
        return p;
    }

    // Specialized emitters
    burst(x, y, count, colors, speedMin = 1, speedMax = 4, sizeMin = 1, sizeMax = 3, type = 'spark', gravity = 0) {
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const spd = speedMin + Math.random() * (speedMax - speedMin);
            const vx = Math.cos(angle) * spd;
            const vy = Math.sin(angle) * spd;
            const col = colors[Math.floor(Math.random() * colors.length)];
            const sz = sizeMin + Math.random() * (sizeMax - sizeMin);
            const life = 20 + Math.random() * 30;
            this.spawn(x, y, vx, vy, sz, col, life, type, gravity, 0.96);
        }
    }

    explosion(x, y, radius = 20, intensity = 1) {
        const pCount = Math.min(250, Math.floor(40 * intensity));
        // Shockwave ring
        const shock = this.spawn(x, y, 0, 0, 4, '#ffffff', 25, 'shockwave', 0, 1);
        shock.extra = radius;

        // Blazing core sparks
        const fireColors = ['#ffffff', '#fff34d', '#ff9800', '#ff3d00', '#5d4037'];
        for (let i = 0; i < pCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const spd = (1 + Math.random() * 5) * (0.8 + intensity * 0.4);
            const vx = Math.cos(angle) * spd;
            const vy = Math.sin(angle) * spd;
            const col = fireColors[Math.floor(Math.random() * fireColors.length)];
            const sz = 1.5 + Math.random() * 3.5;
            const life = 15 + Math.random() * 35 * intensity;
            this.spawn(x, y, vx, vy, sz, col, life, 'fire', 0.02, 0.94);
        }

        // Rising billowing smoke
        const smokeColors = ['#424242', '#616161', '#757575', '#212121'];
        for (let i = 0; i < Math.floor(pCount * 0.6); i++) {
            const angle = Math.random() * Math.PI * 2;
            const spd = (0.5 + Math.random() * 2.5);
            const vx = Math.cos(angle) * spd;
            const vy = Math.sin(angle) * spd - (0.4 + Math.random() * 0.8);
            const col = smokeColors[Math.floor(Math.random() * smokeColors.length)];
            const sz = 2.5 + Math.random() * 4;
            const life = 40 + Math.random() * 60;
            this.spawn(x, y, vx, vy, sz, col, life, 'smoke', -0.015, 0.97);
        }
    }

    nukeMushroom(x, y, scale = 1) {
        // Triple shockwave ring
        for (let r = 0; r < 3; r++) {
            const sw = this.spawn(x, y, 0, 0, 6 + r * 5, '#ffffff', 45 + r * 10, 'shockwave', 0, 1);
            sw.extra = 60 * scale;
        }

        // Stem of mushroom
        for (let i = 0; i < 150 * scale; i++) {
            const ox = (Math.random() - 0.5) * 12 * scale;
            const oy = -Math.random() * 50 * scale;
            const vy = -(1.2 + Math.random() * 2.5);
            const vx = (Math.random() - 0.5) * 0.8;
            const col = Math.random() > 0.4 ? '#ff5722' : '#ff9800';
            this.spawn(x + ox, y + oy, vx, vy, 3 + Math.random() * 5, col, 80 + Math.random() * 50, 'fire', -0.01, 0.98);
        }

        // Cap of mushroom cloud
        const capY = y - 55 * scale;
        for (let i = 0; i < 280 * scale; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * 38 * scale;
            const px = x + Math.cos(angle) * dist;
            const py = capY + Math.sin(angle) * (dist * 0.5);
            const vx = Math.cos(angle) * (0.5 + Math.random() * 1.5);
            const vy = Math.sin(angle) * (0.3 + Math.random() * 0.8) - 0.2;
            const col = ['#e64a19', '#d84315', '#bf360c', '#3e2723', '#212121', '#ffab00'][Math.floor(Math.random() * 6)];
            this.spawn(px, py, vx, vy, 4 + Math.random() * 6, col, 100 + Math.random() * 80, 'smoke', -0.008, 0.97);
        }

        // Radioactive fallout embers
        for (let i = 0; i < 120 * scale; i++) {
            const px = x + (Math.random() - 0.5) * 90 * scale;
            const py = y - Math.random() * 70 * scale;
            const vx = (Math.random() - 0.5) * 1.2;
            const vy = 0.3 + Math.random() * 1.0;
            const col = Math.random() > 0.3 ? '#76ff03' : '#b2ff59';
            this.spawn(px, py, vx, vy, 1.5 + Math.random() * 2, col, 140 + Math.random() * 80, 'spark', 0.005, 0.98);
        }
    }

    update(dt = 1) {
        let count = 0;
        for (let i = 0; i < this.maxParticles; i++) {
            const p = this.pool[i];
            if (p.active) {
                p.update(dt);
                count++;
            }
        }
        this.activeCount = count;
    }

    render(ctx) {
        for (let i = 0; i < this.maxParticles; i++) {
            const p = this.pool[i];
            if (!p.active) continue;

            ctx.globalAlpha = p.alpha;

            if (p.type === 'shockwave') {
                ctx.strokeStyle = p.color;
                ctx.lineWidth = Math.max(1, 4 * p.alpha);
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.stroke();
            } else if (p.type === 'smoke') {
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            } else {
                // Pixel / square particle for retro crisp look
                ctx.fillStyle = p.color;
                ctx.fillRect(Math.floor(p.x - p.size * 0.5), Math.floor(p.y - p.size * 0.5), Math.max(1, Math.round(p.size)), Math.max(1, Math.round(p.size)));
            }
        }
        ctx.globalAlpha = 1.0;
    }

    clear() {
        for (let i = 0; i < this.maxParticles; i++) {
            this.pool[i].active = false;
        }
        this.activeCount = 0;
    }
}

window.ParticleSystem = ParticleSystem;
