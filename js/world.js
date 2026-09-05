// ==========================================
// GALAXYBOX - World Tile Grid & Cellular Engine
// ==========================================

const TILES = {
    VOID: 0,
    DEEP_WATER: 1,
    WATER: 2,
    SAND: 3,
    SOIL: 4,
    GRASS: 5,
    FOREST: 6,
    STONE: 7,
    HIGH_MOUNTAIN: 8,
    SNOW: 9,
    ICE: 10,
    LAVA: 11,
    ACID: 12,
    BEDROCK: 13,
    FALLOUT: 14,
    ASH: 15,
    CORRUPTED: 16,
    SWAMP: 17,
    ROAD: 18,
    NEBULA: 19,
    STARDUST: 20
};

const TILE_INFO = {
    [TILES.VOID]: { name: "Void", color: "#0a0a14", isLiquid: false, isSolid: false, flammability: 0 },
    [TILES.DEEP_WATER]: { name: "Deep Ocean", color: "#102f6b", isLiquid: true, isSolid: false, flammability: 0 },
    [TILES.WATER]: { name: "Shallow Water", color: "#1c64b4", isLiquid: true, isSolid: false, flammability: 0 },
    [TILES.SAND]: { name: "Sand", color: "#dec17a", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.SOIL]: { name: "Fertile Soil", color: "#54371c", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.GRASS]: { name: "Grassland", color: "#489e38", isLiquid: false, isSolid: true, flammability: 0.7 },
    [TILES.FOREST]: { name: "Dense Forest", color: "#25661d", isLiquid: false, isSolid: true, flammability: 0.9 },
    [TILES.STONE]: { name: "Rock / Mountain", color: "#6b7280", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.HIGH_MOUNTAIN]: { name: "Mountain Peak", color: "#9ca3af", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.SNOW]: { name: "Snow", color: "#e2e8f0", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.ICE]: { name: "Ice", color: "#a5f3fc", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.LAVA]: { name: "Molten Lava", color: "#ff4500", isLiquid: true, isSolid: false, flammability: 0 },
    [TILES.ACID]: { name: "Acid Sludge", color: "#4ade80", isLiquid: true, isSolid: false, flammability: 0 },
    [TILES.BEDROCK]: { name: "Bedrock", color: "#1f2937", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.FALLOUT]: { name: "Radioactive Fallout", color: "#65a30d", isLiquid: false, isSolid: true, flammability: 0.1 },
    [TILES.ASH]: { name: "Burnt Ash", color: "#374151", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.CORRUPTED]: { name: "Cosmic Corruption", color: "#7e22ce", isLiquid: false, isSolid: true, flammability: 0.3 },
    [TILES.SWAMP]: { name: "Swamp", color: "#365314", isLiquid: false, isSolid: true, flammability: 0.4 },
    [TILES.ROAD]: { name: "Stone Road", color: "#94a3b8", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.NEBULA]: { name: "Cosmic Nebula", color: "#c026d3", isLiquid: true, isSolid: false, flammability: 0 },
    [TILES.STARDUST]: { name: "Stardust Land", color: "#38bdf8", isLiquid: false, isSolid: true, flammability: 0 }
};

// Compact Fast Perlin/Simplex-style Noise Generator
class FastNoise {
    constructor(seed = 1337) {
        this.p = new Uint8Array(512);
        this.perm = new Uint8Array(256);
        this.seed(seed);
    }

    seed(seed) {
        let s = seed % 2147483647;
        if (s <= 0) s += 2147483646;
        for (let i = 0; i < 256; i++) {
            s = (s * 16807) % 2147483647;
            this.perm[i] = s & 255;
        }
        for (let i = 0; i < 512; i++) {
            this.p[i] = this.perm[i & 255];
        }
    }

    fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
    lerp(t, a, b) { return a + t * (b - a); }
    grad(hash, x, y) {
        const h = hash & 7;
        const u = h < 4 ? x : y;
        const v = h < 4 ? y : x;
        return ((h & 1) ? -u : u) + ((h & 2) ? -2.0 * v : 2.0 * v);
    }

    noise2D(x, y) {
        const X = Math.floor(x) & 255;
        const Y = Math.floor(y) & 255;
        x -= Math.floor(x);
        y -= Math.floor(y);
        const u = this.fade(x);
        const v = this.fade(y);

        const A = this.p[X] + Y;
        const B = this.p[X + 1] + Y;

        return this.lerp(v,
            this.lerp(u, this.grad(this.p[A], x, y), this.grad(this.p[B], x - 1, y)),
            this.lerp(u, this.grad(this.p[A + 1], x, y - 1), this.grad(this.p[B + 1], x - 1, y - 1))
        );
    }

    fractal(x, y, octaves = 4, persistence = 0.5, lacunarity = 2.0) {
        let total = 0;
        let frequency = 1;
        let amplitude = 1;
        let maxValue = 0;
        for (let i = 0; i < octaves; i++) {
            total += this.noise2D(x * frequency, y * frequency) * amplitude;
            maxValue += amplitude;
            amplitude *= persistence;
            frequency *= lacunarity;
        }
        return (total / maxValue + 1) * 0.5; // Normalized to 0..1
    }
}

class World {
    constructor(width = 256, height = 144, seed = 12345) {
        this.width = width;
        this.height = height;
        this.size = width * height;
        this.seed = seed;

        // Buffers
        this.tiles = new Uint8Array(this.size);
        this.variation = new Uint8Array(this.size);
        this.temperature = new Int16Array(this.size); // in °C (default 20)
        this.fire = new Uint8Array(this.size); // burning timer
        this.liquids = new Uint8Array(this.size); // liquid volume

        this.stepCount = 0;
        this.noise = new FastNoise(seed);

        // Precompute color variations
        for (let i = 0; i < this.size; i++) {
            this.variation[i] = Math.floor(Math.random() * 5); // 0-4 variation offset
            this.temperature[i] = 20;
        }
    }

    idx(x, y) {
        return y * this.width + x;
    }

    inBounds(x, y) {
        return x >= 0 && x < this.width && y >= 0 && y < this.height;
    }

    getTile(x, y) {
        if (!this.inBounds(x, y)) return TILES.BEDROCK;
        return this.tiles[this.idx(x, y)];
    }

    setTile(x, y, type) {
        if (!this.inBounds(x, y)) return;
        const i = this.idx(x, y);
        if (this.tiles[i] === TILES.BEDROCK && type !== TILES.BEDROCK && type !== TILES.VOID) return;
        this.tiles[i] = type;
        this.fire[i] = 0;
        if (type === TILES.LAVA) this.temperature[i] = 800;
        else if (type === TILES.ICE || type === TILES.SNOW) this.temperature[i] = -10;
        else if (type === TILES.WATER || type === TILES.DEEP_WATER) this.temperature[i] = 15;
    }

    // --- Procedural Generation Presets ---

    generate(preset = 'continents', customSeed = null) {
        if (customSeed !== null) this.seed = customSeed;
        this.noise.seed(this.seed);

        const w = this.width;
        const h = this.height;

        // Reset
        this.tiles.fill(TILES.DEEP_WATER);
        this.fire.fill(0);
        this.temperature.fill(20);

        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                const i = this.idx(x, y);
                const nx = x / w;
                const ny = y / h;

                // Center distance factor for natural island/continent falloff
                const dx = (nx - 0.5) * 2;
                const dy = (ny - 0.5) * 2;
                const distFromCenter = Math.sqrt(dx * dx + dy * dy);

                let elevation = 0;
                let moisture = this.noise.fractal(nx * 4 + 10, ny * 4 + 10, 3, 0.5);

                if (preset === 'continents') {
                    elevation = this.noise.fractal(nx * 3.5, ny * 3.5, 5, 0.55);
                    elevation -= distFromCenter * 0.45;
                } else if (preset === 'archipelago') {
                    elevation = this.noise.fractal(nx * 7, ny * 7, 4, 0.5);
                    elevation -= distFromCenter * 0.35;
                } else if (preset === 'pangea') {
                    elevation = this.noise.fractal(nx * 2.2, ny * 2.2, 5, 0.5);
                    elevation -= distFromCenter * 0.65;
                } else if (preset === 'ring') {
                    const ringDist = Math.abs(distFromCenter - 0.6);
                    elevation = (1.0 - ringDist * 2.5) * 0.7 + this.noise.fractal(nx * 6, ny * 6, 4, 0.5) * 0.4;
                } else if (preset === 'chaos') {
                    elevation = this.noise.fractal(nx * 10, ny * 10, 5, 0.6) - 0.1;
                } else if (preset === 'galaxy') {
                    // Logarithmic Spiral Galaxy
                    const angle = Math.atan2(dy, dx);
                    const r = distFromCenter;
                    const arms = 2;
                    const spiral = (angle * arms - Math.log(r + 0.001) * 3) % (Math.PI * 2);
                    const armDist = Math.abs(Math.sin(spiral));

                    if (r < 0.14) {
                        // Radiant Galactic Core
                        this.tiles[i] = TILES.STARDUST;
                        continue;
                    } else if (armDist < 0.38 && r < 0.9) {
                        const n = this.noise.fractal(nx * 8, ny * 8, 3, 0.5);
                        if (n > 0.62) this.tiles[i] = TILES.STARDUST;
                        else if (n > 0.38) this.tiles[i] = TILES.NEBULA;
                        else this.tiles[i] = TILES.CORRUPTED;
                        continue;
                    } else {
                        this.tiles[i] = TILES.VOID;
                        continue;
                    }
                } else if (preset === 'flat') {
                    this.tiles[i] = TILES.GRASS;
                    continue;
                } else if (preset === 'ocean') {
                    this.tiles[i] = TILES.WATER;
                    continue;
                }

                // Elevation to Tile Mapping
                if (elevation < 0.28) {
                    this.tiles[i] = TILES.DEEP_WATER;
                    this.temperature[i] = 12;
                } else if (elevation < 0.40) {
                    this.tiles[i] = TILES.WATER;
                    this.temperature[i] = 18;
                } else if (elevation < 0.44) {
                    this.tiles[i] = TILES.SAND;
                } else if (elevation < 0.70) {
                    if (moisture > 0.62) {
                        this.tiles[i] = TILES.FOREST;
                    } else if (moisture > 0.35) {
                        this.tiles[i] = TILES.GRASS;
                    } else {
                        this.tiles[i] = TILES.SOIL;
                    }
                } else if (elevation < 0.84) {
                    this.tiles[i] = TILES.STONE;
                } else if (elevation < 0.92) {
                    this.tiles[i] = TILES.HIGH_MOUNTAIN;
                } else {
                    this.tiles[i] = TILES.SNOW;
                    this.temperature[i] = -5;
                }

                // Polar caps
                if (ny < 0.08 || ny > 0.92) {
                    if (this.tiles[i] === TILES.WATER || this.tiles[i] === TILES.DEEP_WATER) {
                        if (Math.random() < 0.6) this.tiles[i] = TILES.ICE;
                    } else if (this.tiles[i] !== TILES.BEDROCK) {
                        this.tiles[i] = TILES.SNOW;
                    }
                }
            }
        }
    }

    // --- Brush Sculpting Tools ---

    applyBrush(cx, cy, radius, type, shape = 'circle', intensity = 1) {
        const r2 = radius * radius;
        const x0 = Math.max(0, Math.floor(cx - radius));
        const x1 = Math.min(this.width - 1, Math.ceil(cx + radius));
        const y0 = Math.max(0, Math.floor(cy - radius));
        const y1 = Math.min(this.height - 1, Math.ceil(cy + radius));

        for (let y = y0; y <= y1; y++) {
            for (let x = x0; x <= x1; x++) {
                const dist2 = (x - cx) * (x - cx) + (y - cy) * (y - cy);
                if (shape === 'circle' && dist2 > r2) continue;

                const i = this.idx(x, y);
                if (this.tiles[i] === TILES.BEDROCK && type !== TILES.BEDROCK && type !== TILES.VOID) continue;

                if (type === 'raise') {
                    this.raiseTile(x, y);
                } else if (type === 'lower') {
                    this.lowerTile(x, y);
                } else if (type === 'sponge') {
                    if (TILE_INFO[this.tiles[i]]?.isLiquid) {
                        this.tiles[i] = TILES.SAND;
                    }
                } else if (type === 'fertilizer') {
                    if (this.tiles[i] === TILES.SOIL) this.tiles[i] = TILES.GRASS;
                    else if (this.tiles[i] === TILES.GRASS) this.tiles[i] = TILES.FOREST;
                } else {
                    this.setTile(x, y, type);
                }
            }
        }
    }

    raiseTile(x, y) {
        const current = this.getTile(x, y);
        if (current === TILES.DEEP_WATER) this.setTile(x, y, TILES.WATER);
        else if (current === TILES.WATER) this.setTile(x, y, TILES.SAND);
        else if (current === TILES.SAND) this.setTile(x, y, TILES.SOIL);
        else if (current === TILES.SOIL) this.setTile(x, y, TILES.GRASS);
        else if (current === TILES.GRASS) this.setTile(x, y, TILES.FOREST);
        else if (current === TILES.FOREST) this.setTile(x, y, TILES.STONE);
        else if (current === TILES.STONE) this.setTile(x, y, TILES.HIGH_MOUNTAIN);
        else if (current === TILES.HIGH_MOUNTAIN) this.setTile(x, y, TILES.SNOW);
    }

    lowerTile(x, y) {
        const current = this.getTile(x, y);
        if (current === TILES.SNOW) this.setTile(x, y, TILES.HIGH_MOUNTAIN);
        else if (current === TILES.HIGH_MOUNTAIN) this.setTile(x, y, TILES.STONE);
        else if (current === TILES.STONE) this.setTile(x, y, TILES.SOIL);
        else if (current === TILES.FOREST || current === TILES.GRASS) this.setTile(x, y, TILES.SOIL);
        else if (current === TILES.SOIL) this.setTile(x, y, TILES.SAND);
        else if (current === TILES.SAND) this.setTile(x, y, TILES.WATER);
        else if (current === TILES.WATER) this.setTile(x, y, TILES.DEEP_WATER);
        else if (current === TILES.DEEP_WATER) this.setTile(x, y, TILES.VOID);
    }

    // --- Cellular Automata & Physics Step ---

    update(particleSystem) {
        this.stepCount++;
        const w = this.width;
        const h = this.height;

        // Process a stochastic sample or alternating rows for high 60fps performance
        const sampleOffset = (this.stepCount % 2);

        for (let y = sampleOffset; y < h; y += 2) {
            for (let x = 0; x < w; x++) {
                const i = this.idx(x, y);
                const t = this.tiles[i];

                // 1. Fire Propagation
                if (this.fire[i] > 0) {
                    this.fire[i]--;
                    // Spawn smoke & ember particles
                    if (particleSystem && Math.random() < 0.15) {
                        particleSystem.spawn(x, y, (Math.random() - 0.5) * 0.4, -0.6 - Math.random() * 0.8, 1.5, '#ff7043', 25, 'fire');
                    }
                    if (particleSystem && Math.random() < 0.1) {
                        particleSystem.spawn(x, y, (Math.random() - 0.5) * 0.3, -0.4 - Math.random() * 0.6, 2.5, '#424242', 35, 'smoke');
                    }

                    if (this.fire[i] === 0) {
                        // Extinguished -> turns to ash
                        this.tiles[i] = TILES.ASH;
                    } else {
                        // Ignite flammable neighbors
                        const neighbors = [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]];
                        for (let n = 0; n < 4; n++) {
                            const [nx, ny] = neighbors[n];
                            if (this.inBounds(nx, ny)) {
                                const ni = this.idx(nx, ny);
                                const nt = this.tiles[ni];
                                const flam = TILE_INFO[nt]?.flammability || 0;
                                if (flam > 0 && this.fire[ni] === 0 && Math.random() < (flam * 0.18)) {
                                    this.fire[ni] = 40 + Math.floor(Math.random() * 50);
                                }
                            }
                        }
                    }
                }

                // 2. Molten Lava Physics & Reactions
                if (t === TILES.LAVA) {
                    if (particleSystem && Math.random() < 0.04) {
                        particleSystem.spawn(x, y, (Math.random() - 0.5) * 0.5, -0.5 - Math.random() * 0.5, 2, '#ffab00', 30, 'fire');
                    }

                    // Spread or interact with adjacent cells
                    const neighbors = [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]];
                    for (let n = 0; n < 4; n++) {
                        const [nx, ny] = neighbors[n];
                        if (!this.inBounds(nx, ny)) continue;
                        const ni = this.idx(nx, ny);
                        const nt = this.tiles[ni];

                        // Lava touching water -> obsidian / stone + steam
                        if (nt === TILES.WATER || nt === TILES.DEEP_WATER || nt === TILES.ICE) {
                            this.tiles[ni] = TILES.STONE;
                            if (Math.random() < 0.3) this.tiles[i] = TILES.STONE;
                            if (particleSystem) {
                                particleSystem.burst(nx, ny, 4, ['#e0e0e0', '#ffffff', '#bdbdbd'], 0.5, 2, 2, 4, 'smoke', -0.01);
                            }
                            break;
                        }
                        // Lava touching flammable -> ignites
                        if (TILE_INFO[nt]?.flammability > 0 && this.fire[ni] === 0) {
                            this.fire[ni] = 50;
                        }
                        // Lava flowing downhill into void or sand
                        if (nt === TILES.VOID && Math.random() < 0.2) {
                            this.tiles[ni] = TILES.LAVA;
                        }
                    }
                }

                // 3. Water Fluid Flow & Gravity
                if (t === TILES.WATER) {
                    // Check if adjacent void or depression
                    const dir = Math.random() < 0.5 ? 1 : -1;
                    const sides = [[x + dir, y], [x - dir, y], [x, y + 1]];
                    for (let s = 0; s < 3; s++) {
                        const [sx, sy] = sides[s];
                        if (this.inBounds(sx, sy)) {
                            const si = this.idx(sx, sy);
                            if (this.tiles[si] === TILES.VOID && Math.random() < 0.25) {
                                this.tiles[si] = TILES.WATER;
                                break;
                            }
                        }
                    }
                }

                // 4. Acid Corrosion
                if (t === TILES.ACID) {
                    if (particleSystem && Math.random() < 0.05) {
                        particleSystem.spawn(x, y, (Math.random() - 0.5) * 0.3, -0.3 - Math.random() * 0.4, 1.5, '#76ff03', 25, 'spark');
                    }
                    // Dissolve solid neighbors
                    const neighbors = [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]];
                    const [nx, ny] = neighbors[Math.floor(Math.random() * 4)];
                    if (this.inBounds(nx, ny)) {
                        const ni = this.idx(nx, ny);
                        const nt = this.tiles[ni];
                        if (nt !== TILES.ACID && nt !== TILES.BEDROCK && nt !== TILES.VOID) {
                            if (Math.random() < 0.08) {
                                this.tiles[ni] = TILES.ACID;
                                if (Math.random() < 0.4) this.tiles[i] = TILES.VOID; // consumed
                            }
                        }
                    }
                }

                // 5. Natural Plant Regrowth
                if (t === TILES.SOIL && Math.random() < 0.002) {
                    // Turn to grass if near grass/water
                    this.tiles[i] = TILES.GRASS;
                } else if (t === TILES.ASH && Math.random() < 0.001) {
                    this.tiles[i] = TILES.SOIL;
                }
            }
        }
    }

    ignite(x, y, duration = 60) {
        if (!this.inBounds(x, y)) return;
        const i = this.idx(x, y);
        if (TILE_INFO[this.tiles[i]]?.flammability > 0) {
            this.fire[i] = duration;
        }
    }

    // Save & Load Serializer
    serialize() {
        return {
            width: this.width,
            height: this.height,
            seed: this.seed,
            tiles: Array.from(this.tiles)
        };
    }

    deserialize(data) {
        if (!data || !data.tiles) return false;
        this.width = data.width;
        this.height = data.height;
        this.size = data.width * data.height;
        this.seed = data.seed || 12345;
        this.tiles = new Uint8Array(data.tiles);
        this.variation = new Uint8Array(this.size);
        this.temperature = new Int16Array(this.size);
        this.fire = new Uint8Array(this.size);
        for (let i = 0; i < this.size; i++) {
            this.variation[i] = Math.floor(Math.random() * 5);
            this.temperature[i] = 20;
        }
        return true;
    }
}

window.TILES = TILES;
window.TILE_INFO = TILE_INFO;
window.World = World;
