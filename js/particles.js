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
        this.type = 'spark'; // spark, smoke, fire, shockwave, ember, blood, stardust, acid, water, soul, leaf, bone
        this.life = 1;
        this.maxLife = 1;
        this.extra = 0;
        this._poolIndex = -1;
        this._activeIndex = -1;
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
        this.decay = 1 / Math.max(1, life);
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
            this.size += 2.8 * dt;
            if (this.size > 140) this.life = 0;
        } else if (this.type === 'smoke') {
            this.size += 0.06 * dt;
        } else if (this.type === 'fire') {
            this.size = Math.max(0.5, this.size - 0.04 * dt);
        } else if (this.type === 'soul') {
            this.vy = -0.35;
            this.x += Math.sin(this.life * 0.18) * 0.35 * dt;
        } else if (this.type === 'leaf') {
            this.vy = 0.3;
            this.x += Math.cos(this.life * 0.15) * 0.45 * dt;
        } else if (this.type === 'water_ripple') {
            this.size += 0.35 * dt;
        }

        if (this.life <= 0) {
            this.active = false;
        }
    }
}

// Precomputed 32-angle retro circle lookups for instant shockwave drawing
const SHOCKWAVE_ANGLES = [];
for (let i = 0; i < 32; i++) {
    const a = (i / 32) * Math.PI * 2;
    SHOCKWAVE_ANGLES.push({ cos: Math.cos(a), sin: Math.sin(a) });
}

class ParticleSystem {
    constructor(maxParticles = 2000) {
        this.maxParticles = maxParticles;
        this.pool = new Array(maxParticles);
        this.freeIndices = new Int32Array(maxParticles);
        this.activeIndices = new Int32Array(maxParticles);
        this.freeTop = maxParticles;
        this.activeCount = 0;

        for (let i = 0; i < maxParticles; i++) {
            this.pool[i] = new Particle();
            this.pool[i]._poolIndex = i;
            this.freeIndices[i] = maxParticles - 1 - i;
        }
    }

    spawn(x, y, vx, vy, size, color, life, type = 'spark', gravity = 0, friction = 0.98) {
        let p = null;
        let poolIdx = -1;

        if (this.freeTop > 0) {
            poolIdx = this.freeIndices[--this.freeTop];
            p = this.pool[poolIdx];
            p._activeIndex = this.activeCount;
            this.activeIndices[this.activeCount++] = poolIdx;
        } else {
            // Overwrite oldest active particle at index 0 (O(1) recycling)
            poolIdx = this.activeIndices[0];
            p = this.pool[poolIdx];
        }

        p.reset(x, y, vx, vy, size, color, life, type, gravity, friction);
        return p;
    }

    burst(x, y, count, colors, speedMin = 1, speedMax = 4, sizeMin = 1, sizeMax = 3, type = 'spark', gravity = 0) {
        // Enforce sane retro particle burst limit to prevent CPU stalls
        const realCount = Math.min(75, Math.max(1, count));
        for (let i = 0; i < realCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const spd = speedMin + Math.random() * (speedMax - speedMin);
            const vx = Math.cos(angle) * spd;
            const vy = Math.sin(angle) * spd;
            const col = colors[Math.floor(Math.random() * colors.length)];
            const sz = sizeMin + Math.random() * (sizeMax - sizeMin);
            const life = 18 + Math.random() * 25;
            this.spawn(x, y, vx, vy, sz, col, life, type, gravity, 0.96);
        }
    }

    explosion(x, y, radius = 20, intensity = 1) {
        const pCount = Math.min(50, Math.floor(22 * intensity));
        // Shockwave ring
        const shock = this.spawn(x, y, 0, 0, 4, '#ffffff', 22, 'shockwave', 0, 1);
        if (shock) shock.extra = Math.min(100, radius);

        // Blazing core sparks
        const fireColors = ['#ffffff', '#fff34d', '#ff9800', '#ff3d00'];
        for (let i = 0; i < pCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const spd = (1 + Math.random() * 4) * (0.8 + intensity * 0.3);
            const vx = Math.cos(angle) * spd;
            const vy = Math.sin(angle) * spd;
            const col = fireColors[Math.floor(Math.random() * fireColors.length)];
            const sz = 1.5 + Math.random() * 2.5;
            const life = 14 + Math.random() * 24 * intensity;
            this.spawn(x, y, vx, vy, sz, col, life, 'fire', 0.02, 0.94);
        }

        // Billowing smoke
        const smokeColors = ['#424242', '#616161', '#757575', '#212121'];
        for (let i = 0; i < Math.floor(pCount * 0.4); i++) {
            const angle = Math.random() * Math.PI * 2;
            const spd = (0.4 + Math.random() * 1.8);
            const vx = Math.cos(angle) * spd;
            const vy = Math.sin(angle) * spd - (0.3 + Math.random() * 0.6);
            const col = smokeColors[Math.floor(Math.random() * smokeColors.length)];
            const sz = 2.5 + Math.random() * 3;
            const life = 28 + Math.random() * 35;
            this.spawn(x, y, vx, vy, sz, col, life, 'smoke', -0.015, 0.97);
        }
    }

    nukeMushroom(x, y, scale = 1) {
        const s = Math.min(2.0, scale);
        // Supersonic retro shockwave
        const sw = this.spawn(x, y, 0, 0, 8, '#ffffff', 35, 'shockwave', 0, 1);
        if (sw) sw.extra = 110 * s;

        // Stem of mushroom
        const stemCount = Math.floor(35 * s);
        for (let i = 0; i < stemCount; i++) {
            const ox = (Math.random() - 0.5) * 8 * s;
            const oy = -Math.random() * 35 * s;
            const vy = -(1.2 + Math.random() * 1.8);
            const vx = (Math.random() - 0.5) * 0.6;
            const col = Math.random() > 0.4 ? '#ff5722' : '#ff9800';
            this.spawn(x + ox, y + oy, vx, vy, 2.5 + Math.random() * 3, col, 45 + Math.random() * 30, 'fire', -0.01, 0.98);
        }

        // Cap of mushroom cloud
        const capY = y - 38 * s;
        const capCount = Math.floor(55 * s);
        for (let i = 0; i < capCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * 26 * s;
            const px = x + Math.cos(angle) * dist;
            const py = capY + Math.sin(angle) * (dist * 0.5);
            const vx = Math.cos(angle) * (0.4 + Math.random() * 1.0);
            const vy = Math.sin(angle) * (0.2 + Math.random() * 0.6) - 0.15;
            const col = ['#e64a19', '#d84315', '#bf360c', '#3e2723', '#ffab00'][Math.floor(Math.random() * 5)];
            this.spawn(px, py, vx, vy, 3 + Math.random() * 4, col, 55 + Math.random() * 40, 'smoke', -0.008, 0.97);
        }

        // Radioactive fallout embers
        const falloutCount = Math.floor(25 * s);
        for (let i = 0; i < falloutCount; i++) {
            const px = x + (Math.random() - 0.5) * 60 * s;
            const py = y - Math.random() * 50 * s;
            const vx = (Math.random() - 0.5) * 0.8;
            const vy = 0.2 + Math.random() * 0.8;
            const col = Math.random() > 0.3 ? '#76ff03' : '#b2ff59';
            this.spawn(px, py, vx, vy, 1.5 + Math.random() * 1.5, col, 60 + Math.random() * 40, 'spark', 0.005, 0.98);
        }
    }

    update(dt = 1) {
        // Iterate ONLY through active particles
        for (let i = this.activeCount - 1; i >= 0; i--) {
            const poolIdx = this.activeIndices[i];
            const p = this.pool[poolIdx];
            p.update(dt);

            if (!p.active) {
                // O(1) swap-and-pop removal
                const lastPoolIdx = this.activeIndices[--this.activeCount];
                this.activeIndices[i] = lastPoolIdx;
                this.pool[lastPoolIdx]._activeIndex = i;
                this.freeIndices[this.freeTop++] = poolIdx;
            }
        }
    }

    render(ctx) {
        let lastAlpha = -1;
        let lastFill = null;

        for (let i = 0; i < this.activeCount; i++) {
            const p = this.pool[this.activeIndices[i]];
            if (!p.active) continue;

            // Quantize alpha to 0.1 increments to minimize Canvas2D context stalls
            const qAlpha = Math.round(p.alpha * 10) / 10;
            if (qAlpha !== lastAlpha) {
                ctx.globalAlpha = qAlpha;
                lastAlpha = qAlpha;
            }

            if (p.type === 'shockwave') {
                if (p.color !== lastFill) {
                    ctx.fillStyle = p.color;
                    lastFill = p.color;
                }
                const r = Math.round(p.size);
                const cx = Math.round(p.x);
                const cy = Math.round(p.y);
                if (r <= 2) {
                    ctx.fillRect(cx - 1, cy - 1, 3, 3);
                } else {
                    // Fast 32-angle stepped retro ring with zero subpixel jitter
                    const thick = Math.max(1, Math.min(2, Math.round(2 * p.alpha)));
                    for (let a = 0; a < 32; a++) {
                        const ang = SHOCKWAVE_ANGLES[a];
                        const rx = Math.round(cx + ang.cos * r);
                        const ry = Math.round(cy + ang.sin * r);
                        ctx.fillRect(rx, ry, thick, thick);
                    }
                }
            } else if (p.type === 'smoke') {
                if (p.color !== lastFill) {
                    ctx.fillStyle = p.color;
                    lastFill = p.color;
                }
                const s = Math.max(1, Math.round(p.size));
                const px = Math.round(p.x - s * 0.5);
                const py = Math.round(p.y - s * 0.5);
                if (s <= 2) {
                    ctx.fillRect(px, py, s, s);
                } else {
                    ctx.fillRect(px + 1, py, Math.max(1, s - 2), s);
                    ctx.fillRect(px, py + 1, s, Math.max(1, s - 2));
                }
            } else if (p.type === 'soul') {
                const px = Math.round(p.x);
                const py = Math.round(p.y);
                ctx.fillStyle = '#a5f3fc';
                ctx.fillRect(px - 1, py - 1, 3, 3);
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(px, py, 1, 1);
                lastFill = '#ffffff';
            } else if (p.type === 'water_ripple') {
                ctx.strokeStyle = p.color || '#38bdf8';
                ctx.lineWidth = 1;
                const r = Math.max(1, Math.round(p.size));
                const px = Math.round(p.x);
                const py = Math.round(p.y);
                ctx.strokeRect(px - r, py - Math.round(r * 0.6), r * 2, Math.max(1, Math.round(r * 1.2)));
            } else if (p.type === 'bone') {
                const px = Math.round(p.x);
                const py = Math.round(p.y);
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(px - 1, py, 3, 1);
                ctx.fillRect(px, py - 1, 1, 3);
                lastFill = '#f8fafc';
            } else if (p.type === 'leaf') {
                const px = Math.round(p.x);
                const py = Math.round(p.y);
                ctx.fillStyle = p.color || '#22c55e';
                ctx.fillRect(px, py - 1, 2, 2);
                ctx.fillRect(px - 1, py, 3, 1);
                lastFill = ctx.fillStyle;
            } else {
                // Crisp retro pixel square with integer grid snapping
                if (p.color !== lastFill) {
                    ctx.fillStyle = p.color;
                    lastFill = p.color;
                }
                const sz = Math.max(1, Math.round(p.size));
                ctx.fillRect(Math.round(p.x - sz * 0.5), Math.round(p.y - sz * 0.5), sz, sz);
            }
        }

        ctx.globalAlpha = 1.0;
    }

    clear() {
        for (let i = 0; i < this.maxParticles; i++) {
            this.pool[i].active = false;
            this.freeIndices[i] = this.maxParticles - 1 - i;
        }
        this.freeTop = this.maxParticles;
        this.activeCount = 0;
    }
}

window.ParticleSystem = ParticleSystem;
