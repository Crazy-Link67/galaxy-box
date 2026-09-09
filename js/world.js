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
    STARDUST: 20,
    OBSIDIAN: 21,
    CRYSTAL: 22,
    MAGMA_ROCK: 23,
    BIOLUMINESCENT_MOSS: 24,
    QUICKSAND: 25,
    MUSHROOM_SPORE: 26,
    HONEY_COMB: 27,
    GOLD_ORE: 28,
    POISON_SWAMP: 29,
    HOLY_GROUND: 30,
    BLOOD_RIVER: 31,
    PLASMA_FIELD: 32,
    LIVING_BRAMBLE: 33,
    AETHER_FLUID: 34,
    METEORITE_ORE: 35,
    CORAL_REEF: 36,
    TAR_PIT: 37,
    GLOWCAP_MUSHROOM: 38,
    AETHER_CRYSTAL: 39,
    VOLCANIC_CALDERA: 40,
    ENCHANTED_GROVE: 41,
    ASH_WASTELAND: 42,
    CURSED_MARSH: 43,
    BIOLUMINESCENT_CORAL: 44,
    PETRIFIED_WOOD: 45,
    GOLDEN_SAND: 46,
    OBSIDIAN_SPIRE: 47,
    GLACIAL_PERMAFROST: 48,
    RADIOACTIVE_WASTE: 49,
    AETHER_SOIL: 50,
    DEEP_TRENCH: 51,
    BASALT_MESA: 52,
    SACRED_SOIL: 53,
    CRYSTAL_GEODE: 54,
    SUNBAKED_CLAY: 55,
    TOXIC_SLIME: 56,
    LIVING_VINES: 57,
    STAR_METAL_ORE: 58,
    FLOATING_ROCK: 59,
    MAGMA_FISSURE: 60,
    LUSH_MEADOW: 61,
    OBSIDIAN_BLOCK: 62,
    BASALT: 63,
    GLACIAL_ICE: 64,
    CRYSTAL_ORE: 65,
    GOLD_VEIN: 66,
    AETHER_ROCK: 67,
    MUD: 68,
    PEAT: 69,
    MYCELIUM: 70,
    CORAL_BARRIER: 71,
    DUNE_QUICKSAND: 72,
    VOLCANIC_CINDER: 73,
    SULFUR_STONE: 74,
    CHLOROPHYLL_MOSS: 75,
    STARFALL_DUST: 76,
    VOID_STONE: 77,
    ANCIENT_BRICK: 78,
    MARBLE_ROAD: 79,
    RUNIC_SLATE: 80,
    CRIMSON_RED_SAND: 81,
    BAMBOO_THICKET: 82,
    TUNDRA_PERMAFROST: 83,
    PETRIFIED_GROVE: 84,
    LUMINESCENT_LICHEN: 85,
    SILVER_ORE: 86,
    METEORITE_CORE: 87,
    PRISMATIC_CRYSTAL: 88,
    DEEP_EARTH_MANTLE: 89,
    DIVINE_SOIL: 90,
    ABYSSAL_CHASM: 91
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
    [TILES.STARDUST]: { name: "Stardust Land", color: "#38bdf8", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.OBSIDIAN]: { name: "Volcanic Obsidian", color: "#1e1b2e", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.CRYSTAL]: { name: "Luminous Crystal", color: "#ec4899", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.MAGMA_ROCK]: { name: "Magma Rock", color: "#b91c1c", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.BIOLUMINESCENT_MOSS]: { name: "Bioluminescent Moss", color: "#06b6d4", isLiquid: false, isSolid: true, flammability: 0.4 },
    [TILES.QUICKSAND]: { name: "Quicksand", color: "#b49b65", isLiquid: false, isSolid: false, flammability: 0 },
    [TILES.MUSHROOM_SPORE]: { name: "Mushroom Spore", color: "#a855f7", isLiquid: false, isSolid: true, flammability: 0.5 },
    [TILES.HONEY_COMB]: { name: "Honey Comb", color: "#f59e0b", isLiquid: false, isSolid: true, flammability: 0.2 },
    [TILES.GOLD_ORE]: { name: "Gold Ore", color: "#eab308", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.POISON_SWAMP]: { name: "Poison Swamp", color: "#8b5cf6", isLiquid: true, isSolid: false, flammability: 0.3 },
    [TILES.HOLY_GROUND]: { name: "Holy Ground", color: "#fef08a", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.BLOOD_RIVER]: { name: "Blood River", color: "#991b1b", isLiquid: true, isSolid: false, flammability: 0 },
    [TILES.PLASMA_FIELD]: { name: "Plasma Field", color: "#06b6d4", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.LIVING_BRAMBLE]: { name: "Living Bramble", color: "#15803d", isLiquid: false, isSolid: true, flammability: 0.8 },
    [TILES.AETHER_FLUID]: { name: "Aether Fluid", color: "#818cf8", isLiquid: true, isSolid: false, flammability: 0 },
    [TILES.METEORITE_ORE]: { name: "Meteorite Ore", color: "#f97316", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.CORAL_REEF]: { name: "Coral Reef", color: "#f43f5e", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.TAR_PIT]: { name: "Tar Pit", color: "#18181b", isLiquid: true, isSolid: false, flammability: 0.95 },
    [TILES.GLOWCAP_MUSHROOM]: { name: "Glowcap Mushroom", color: "#06b6d4", isLiquid: false, isSolid: true, flammability: 0.4 },
    [TILES.AETHER_CRYSTAL]: { name: "Aether Crystal", color: "#38bdf8", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.VOLCANIC_CALDERA]: { name: "Volcanic Caldera", color: "#450a0a", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.ENCHANTED_GROVE]: { name: "Enchanted Grove", color: "#f472b6", isLiquid: false, isSolid: true, flammability: 0.7 },
    [TILES.ASH_WASTELAND]: { name: "Ash Wasteland", color: "#475569", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.CURSED_MARSH]: { name: "Cursed Marsh", color: "#581c87", isLiquid: true, isSolid: false, flammability: 0.1 },
    [TILES.BIOLUMINESCENT_CORAL]: { name: "Bioluminescent Coral", color: "#06b6d4", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.PETRIFIED_WOOD]: { name: "Petrified Wood", color: "#78716c", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.GOLDEN_SAND]: { name: "Golden Shimmer Sand", color: "#fbbf24", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.OBSIDIAN_SPIRE]: { name: "Obsidian Spire", color: "#0f172a", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.GLACIAL_PERMAFROST]: { name: "Glacial Permafrost", color: "#cffafe", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.RADIOACTIVE_WASTE]: { name: "Radioactive Waste", color: "#84cc16", isLiquid: true, isSolid: false, flammability: 0 },
    [TILES.AETHER_SOIL]: { name: "Aether Spore Soil", color: "#818cf8", isLiquid: false, isSolid: true, flammability: 0.4 },
    [TILES.DEEP_TRENCH]: { name: "Abyssal Trench", color: "#030712", isLiquid: true, isSolid: false, flammability: 0 },
    [TILES.BASALT_MESA]: { name: "Basalt Mesa", color: "#334155", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.SACRED_SOIL]: { name: "Consecrated Radiant Turf", color: "#fef08a", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.CRYSTAL_GEODE]: { name: "Crystal Geode", color: "#c084fc", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.SUNBAKED_CLAY]: { name: "Sunbaked Clay", color: "#ea580c", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.TOXIC_SLIME]: { name: "Living Toxic Sludge", color: "#22c55e", isLiquid: true, isSolid: false, flammability: 0 },
    [TILES.LIVING_VINES]: { name: "Primordial Bramble Vines", color: "#166534", isLiquid: false, isSolid: true, flammability: 0.8 },
    [TILES.STAR_METAL_ORE]: { name: "Star-Metal Ore", color: "#6366f1", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.FLOATING_ROCK]: { name: "Floating Sky Rock", color: "#64748b", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.MAGMA_FISSURE]: { name: "Smoldering Magma Fissure", color: "#dc2626", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.LUSH_MEADOW]: { name: "Wildflower Meadow", color: "#a3e635", isLiquid: false, isSolid: true, flammability: 0.6 },
    [TILES.OBSIDIAN_BLOCK]: { name: "Obsidian Block", color: "#161324", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.BASALT]: { name: "Basalt Crust", color: "#292524", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.GLACIAL_ICE]: { name: "Glacial Blue Ice", color: "#67e8f9", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.CRYSTAL_ORE]: { name: "Prismatic Geode Ore", color: "#c084fc", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.GOLD_VEIN]: { name: "Rich Gold Vein", color: "#eab308", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.AETHER_ROCK]: { name: "Aether Floating Rock", color: "#818cf8", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.MUD]: { name: "Wet River Mud", color: "#451a03", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.PEAT]: { name: "Peat Moss Bog", color: "#3f2e18", isLiquid: false, isSolid: true, flammability: 0.2 },
    [TILES.MYCELIUM]: { name: "Bioluminescent Mycelium", color: "#9333ea", isLiquid: false, isSolid: true, flammability: 0.4 },
    [TILES.CORAL_BARRIER]: { name: "Coral Barrier Reef", color: "#fb7185", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.DUNE_QUICKSAND]: { name: "Sinking Dune Sand", color: "#d97706", isLiquid: false, isSolid: false, flammability: 0 },
    [TILES.VOLCANIC_CINDER]: { name: "Volcanic Cinder Ash", color: "#57534e", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.SULFUR_STONE]: { name: "Yellow Sulfur Deposit", color: "#facc15", isLiquid: false, isSolid: true, flammability: 0.3 },
    [TILES.CHLOROPHYLL_MOSS]: { name: "Verdant Chlorophyll Moss", color: "#16a34a", isLiquid: false, isSolid: true, flammability: 0.5 },
    [TILES.STARFALL_DUST]: { name: "Starfall Stardust Dune", color: "#38bdf8", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.VOID_STONE]: { name: "Dark Matter Void Stone", color: "#0f0a1c", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.ANCIENT_BRICK]: { name: "Ancient Ruin Brick", color: "#78716c", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.MARBLE_ROAD]: { name: "Imperial Marble Highway", color: "#f1f5f9", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.RUNIC_SLATE]: { name: "Runic Inscribed Slate", color: "#475569", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.CRIMSON_RED_SAND]: { name: "Crimson Martian Sand", color: "#b91c1c", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.BAMBOO_THICKET]: { name: "Emerald Bamboo Thicket", color: "#15803d", isLiquid: false, isSolid: true, flammability: 0.8 },
    [TILES.TUNDRA_PERMAFROST]: { name: "Frozen Tundra Soil", color: "#94a3b8", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.PETRIFIED_GROVE]: { name: "Petrified Stone Forest", color: "#52525b", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.LUMINESCENT_LICHEN]: { name: "Glowing Cyan Lichen", color: "#06b6d4", isLiquid: false, isSolid: true, flammability: 0.3 },
    [TILES.SILVER_ORE]: { name: "Gleaming Silver Ore", color: "#cbd5e1", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.METEORITE_CORE]: { name: "Searing Meteor Core", color: "#f97316", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.PRISMATIC_CRYSTAL]: { name: "Prismatic Rainbow Crystal", color: "#ec4899", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.DEEP_EARTH_MANTLE]: { name: "Deep Earth Mantle", color: "#7f1d1d", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.DIVINE_SOIL]: { name: "Hallowed Celestial Soil", color: "#fef08a", isLiquid: false, isSolid: true, flammability: 0 },
    [TILES.ABYSSAL_CHASM]: { name: "Bottomless Abyssal Chasm", color: "#020617", isLiquid: true, isSolid: false, flammability: 0 }
};

const TILE_BASE_ELEVATION = {
    [TILES.VOID]: -4.0,
    [TILES.DEEP_WATER]: 0.4,
    [TILES.WATER]: 1.2,
    [TILES.SAND]: 2.2,
    [TILES.SOIL]: 2.6,
    [TILES.GRASS]: 3.0,
    [TILES.FOREST]: 3.5,
    [TILES.STONE]: 5.2,
    [TILES.HIGH_MOUNTAIN]: 8.0,
    [TILES.SNOW]: 9.6,
    [TILES.ICE]: 1.8,
    [TILES.LAVA]: 1.6,
    [TILES.ACID]: 1.4,
    [TILES.BEDROCK]: 3.5,
    [TILES.FALLOUT]: 2.8,
    [TILES.ASH]: 2.5,
    [TILES.CORRUPTED]: 3.0,
    [TILES.SWAMP]: 1.6,
    [TILES.ROAD]: 2.9,
    [TILES.NEBULA]: 3.0,
    [TILES.STARDUST]: 3.2,
    [TILES.OBSIDIAN]: 4.2,
    [TILES.CRYSTAL]: 4.8,
    [TILES.MAGMA_ROCK]: 3.6,
    [TILES.BIOLUMINESCENT_MOSS]: 2.9,
    [TILES.QUICKSAND]: 1.9,
    [TILES.MUSHROOM_SPORE]: 2.8,
    [TILES.HONEY_COMB]: 3.0,
    [TILES.GOLD_ORE]: 4.6,
    [TILES.POISON_SWAMP]: 1.7,
    [TILES.HOLY_GROUND]: 3.4,
    [TILES.BLOOD_RIVER]: 1.4,
    [TILES.PLASMA_FIELD]: 2.6,
    [TILES.LIVING_BRAMBLE]: 3.2,
    [TILES.AETHER_FLUID]: 2.2,
    [TILES.METEORITE_ORE]: 5.0,
    [TILES.CORAL_REEF]: 0.8,
    [TILES.TAR_PIT]: 1.5,
    [TILES.GLOWCAP_MUSHROOM]: 2.8,
    [TILES.AETHER_CRYSTAL]: 4.5,
    [TILES.VOLCANIC_CALDERA]: 5.0,
    [TILES.ENCHANTED_GROVE]: 3.2,
    [TILES.ASH_WASTELAND]: 2.4,
    [TILES.CURSED_MARSH]: 1.5,
    [TILES.BIOLUMINESCENT_CORAL]: 0.9,
    [TILES.PETRIFIED_WOOD]: 4.0,
    [TILES.GOLDEN_SAND]: 2.3,
    [TILES.OBSIDIAN_SPIRE]: 6.5,
    [TILES.GLACIAL_PERMAFROST]: 3.8,
    [TILES.RADIOACTIVE_WASTE]: 1.6,
    [TILES.AETHER_SOIL]: 3.0,
    [TILES.DEEP_TRENCH]: -0.5,
    [TILES.BASALT_MESA]: 6.0,
    [TILES.SACRED_SOIL]: 3.2,
    [TILES.CRYSTAL_GEODE]: 5.5,
    [TILES.SUNBAKED_CLAY]: 3.0,
    [TILES.TOXIC_SLIME]: 1.4,
    [TILES.LIVING_VINES]: 3.4,
    [TILES.STAR_METAL_ORE]: 5.8,
    [TILES.FLOATING_ROCK]: 9.0,
    [TILES.MAGMA_FISSURE]: 2.2,
    [TILES.LUSH_MEADOW]: 3.1,
    [TILES.OBSIDIAN_BLOCK]: 4.5,
    [TILES.BASALT]: 3.8,
    [TILES.GLACIAL_ICE]: 2.5,
    [TILES.CRYSTAL_ORE]: 4.8,
    [TILES.GOLD_VEIN]: 4.2,
    [TILES.AETHER_ROCK]: 8.5,
    [TILES.MUD]: 2,
    [TILES.PEAT]: 2.1,
    [TILES.MYCELIUM]: 2.7,
    [TILES.CORAL_BARRIER]: 1.1,
    [TILES.DUNE_QUICKSAND]: 1.8,
    [TILES.VOLCANIC_CINDER]: 2.6,
    [TILES.SULFUR_STONE]: 3.2,
    [TILES.CHLOROPHYLL_MOSS]: 2.8,
    [TILES.STARFALL_DUST]: 3,
    [TILES.VOID_STONE]: 4,
    [TILES.ANCIENT_BRICK]: 3.3,
    [TILES.MARBLE_ROAD]: 3.1,
    [TILES.RUNIC_SLATE]: 3.6,
    [TILES.CRIMSON_RED_SAND]: 2.4,
    [TILES.BAMBOO_THICKET]: 3.4,
    [TILES.TUNDRA_PERMAFROST]: 3.2,
    [TILES.PETRIFIED_GROVE]: 4.1,
    [TILES.LUMINESCENT_LICHEN]: 2.9,
    [TILES.SILVER_ORE]: 4.4,
    [TILES.METEORITE_CORE]: 5.4,
    [TILES.PRISMATIC_CRYSTAL]: 5,
    [TILES.DEEP_EARTH_MANTLE]: 2.2,
    [TILES.DIVINE_SOIL]: 3.3,
    [TILES.ABYSSAL_CHASM]: -2
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
    constructor(width = 640, height = 360, seed = 12345) {
        this.width = width;
        this.height = height;
        this.size = width * height;
        this.seed = seed;

        // Buffers
        this.tiles = new Uint8Array(this.size);
        this.elevation = new Float32Array(this.size); // 3D height in world units
        this.variation = new Uint8Array(this.size);
        this.temperature = new Int16Array(this.size); // in °C (default 20)
        this.fire = new Uint8Array(this.size); // burning timer
        this.liquids = new Uint8Array(this.size); // liquid volume

        this.stepCount = 0;
        this.noise = new FastNoise(seed);

        // Precompute color variations and base elevations
        for (let i = 0; i < this.size; i++) {
            this.variation[i] = Math.floor(Math.random() * 5); // 0-4 variation offset
            this.temperature[i] = 20;
            this.elevation[i] = 2.0;
        }
    }

    resize(newWidth, newHeight) {
        if (this.width === newWidth && this.height === newHeight) return;
        this.width = newWidth;
        this.height = newHeight;
        this.size = newWidth * newHeight;
        this.tiles = new Uint8Array(this.size);
        this.elevation = new Float32Array(this.size);
        this.variation = new Uint8Array(this.size);
        this.temperature = new Int16Array(this.size);
        this.fire = new Uint8Array(this.size);
        this.liquids = new Uint8Array(this.size);
        for (let i = 0; i < this.size; i++) {
            this.variation[i] = Math.floor(Math.random() * 5);
            this.temperature[i] = 20;
            this.elevation[i] = 2.0;
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

    getElevation(x, y) {
        const ix = Math.floor(x);
        const iy = Math.floor(y);
        if (!this.inBounds(ix, iy)) return 0;
        return this.elevation ? this.elevation[this.idx(ix, iy)] : (TILE_BASE_ELEVATION[this.getTile(ix, iy)] || 2.0);
    }

    setElevation(x, y, h) {
        const ix = Math.floor(x);
        const iy = Math.floor(y);
        if (!this.inBounds(ix, iy)) return;
        this.elevation[this.idx(ix, iy)] = Math.max(-5.0, Math.min(25.0, h));
    }

    carveCrater(cx, cy, radius, depth = 3.5) {
        if (!this.elevation) return;
        const r2 = radius * radius;
        const x0 = Math.max(0, Math.floor(cx - radius));
        const x1 = Math.min(this.width - 1, Math.ceil(cx + radius));
        const y0 = Math.max(0, Math.floor(cy - radius));
        const y1 = Math.min(this.height - 1, Math.ceil(cy + radius));

        for (let y = y0; y <= y1; y++) {
            for (let x = x0; x <= x1; x++) {
                const dist2 = (x - cx) * (x - cx) + (y - cy) * (y - cy);
                if (dist2 <= r2) {
                    const factor = 1.0 - Math.sqrt(dist2) / radius;
                    const i = this.idx(x, y);
                    this.elevation[i] = Math.max(-3.5, this.elevation[i] - depth * factor);
                }
            }
        }
    }

    raiseElevation(cx, cy, radius, heightAdd = 2.0) {
        if (!this.elevation) return;
        const r2 = radius * radius;
        const x0 = Math.max(0, Math.floor(cx - radius));
        const x1 = Math.min(this.width - 1, Math.ceil(cx + radius));
        const y0 = Math.max(0, Math.floor(cy - radius));
        const y1 = Math.min(this.height - 1, Math.ceil(cy + radius));

        for (let y = y0; y <= y1; y++) {
            for (let x = x0; x <= x1; x++) {
                const dist2 = (x - cx) * (x - cx) + (y - cy) * (y - cy);
                if (dist2 <= r2) {
                    const factor = 1.0 - Math.sqrt(dist2) / radius;
                    const i = this.idx(x, y);
                    this.elevation[i] = Math.min(24.0, this.elevation[i] + heightAdd * factor);
                }
            }
        }
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

        // Auto-adjust 3D elevation baseline if tile type changes significantly
        if (type === TILES.HIGH_MOUNTAIN && this.elevation[i] < 6.0) this.elevation[i] = 7.8;
        else if (type === TILES.STONE && this.elevation[i] < 4.0) this.elevation[i] = 5.2;
        else if (type === TILES.SNOW && this.elevation[i] < 7.0) this.elevation[i] = 9.2;
        else if (type === TILES.DEEP_WATER && this.elevation[i] > 1.2) this.elevation[i] = 0.5;
        else if (type === TILES.VOID) this.elevation[i] = -4.0;
    }

    clear(defaultTile = TILES.DEEP_WATER) {
        this.tiles.fill(defaultTile);
        this.fire.fill(0);
        this.temperature.fill(20);
        const baseH = TILE_BASE_ELEVATION[defaultTile] !== undefined ? TILE_BASE_ELEVATION[defaultTile] : 1.0;
        this.elevation.fill(baseH);
        if (typeof window !== 'undefined' && window.game && window.game.entityManager) {
            window.game.entityManager.corpses = [];
            window.game.entityManager.floatingTexts = [];
            if (window.game.entityManager.explosiveEggs) window.game.entityManager.explosiveEggs = [];
        }
    }

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
                        this.elevation[i] = 4.8;
                        continue;
                    } else if (armDist < 0.38 && r < 0.9) {
                        const n = this.noise.fractal(nx * 8, ny * 8, 3, 0.5);
                        if (n > 0.62) { this.tiles[i] = TILES.STARDUST; this.elevation[i] = 3.8; }
                        else if (n > 0.38) { this.tiles[i] = TILES.NEBULA; this.elevation[i] = 2.4; }
                        else { this.tiles[i] = TILES.CORRUPTED; this.elevation[i] = 2.8; }
                        continue;
                    } else {
                        this.tiles[i] = TILES.VOID;
                        this.elevation[i] = -4.0;
                        continue;
                    }
                } else if (preset === 'binary_stars') {
                    // Twin Orbiting Stellar Cores with Plasma Accretion
                    const d1 = Math.hypot(dx - 0.28, dy);
                    const d2 = Math.hypot(dx + 0.28, dy);
                    if (d1 < 0.12 || d2 < 0.12) {
                        this.tiles[i] = TILES.STARDUST;
                        this.elevation[i] = 5.0;
                        continue;
                    } else if (Math.abs(dy) < 0.05 && Math.abs(dx) < 0.35) {
                        this.tiles[i] = TILES.NEBULA;
                        this.elevation[i] = 2.5;
                        continue;
                    } else if (Math.abs(distFromCenter - 0.55) < 0.12) {
                        const n = this.noise.fractal(nx * 10, ny * 10, 3, 0.5);
                        if (n > 0.6) { this.tiles[i] = TILES.CRYSTAL; this.elevation[i] = 4.6; }
                        else if (n > 0.35) { this.tiles[i] = TILES.STARDUST; this.elevation[i] = 3.6; }
                        else { this.tiles[i] = TILES.CORRUPTED; this.elevation[i] = 2.8; }
                        continue;
                    } else {
                        this.tiles[i] = TILES.VOID;
                        this.elevation[i] = -4.0;
                        continue;
                    }
                } else if (preset === 'deep_nebula') {
                    // Deep Cosmic Void with Floating Crystal Isles
                    const n = this.noise.fractal(nx * 6, ny * 6, 4, 0.5);
                    const neb = this.noise.fractal(nx * 3, ny * 3, 3, 0.4);
                    if (n > 0.65) {
                        this.tiles[i] = TILES.CRYSTAL;
                        this.elevation[i] = 4.8;
                    } else if (n > 0.45) {
                        this.tiles[i] = TILES.STARDUST;
                        this.elevation[i] = 3.6;
                    } else if (neb > 0.42) {
                        this.tiles[i] = TILES.NEBULA;
                        this.elevation[i] = 2.2;
                    } else {
                        this.tiles[i] = TILES.VOID;
                        this.elevation[i] = -4.0;
                    }
                    continue;
                } else if (preset === 'flat') {
                    this.tiles[i] = TILES.GRASS;
                    this.elevation[i] = 3.0;
                    continue;
                } else if (preset === 'ocean') {
                    this.tiles[i] = TILES.WATER;
                    this.elevation[i] = 1.0;
                    continue;
                }

                // Continuous 3D heightfield
                let h3d = (elevation - 0.28) * 13.0;
                if (h3d < 0) h3d = h3d * 0.4 + 0.4;
                else h3d = h3d + 1.2;
                this.elevation[i] = Math.max(-2.0, Math.min(18.0, h3d));

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
                } else if (type === 'deforest') {
                    if (this.tiles[i] === TILES.FOREST || this.tiles[i] === TILES.GRASS || this.tiles[i] === TILES.BIOLUMINESCENT_MOSS) {
                        this.tiles[i] = TILES.SOIL;
                    }
                } else if (type === 'biome_savanna') {
                    if (this.tiles[i] !== TILES.BEDROCK && this.tiles[i] !== TILES.VOID) {
                        const rnd = Math.random();
                        this.tiles[i] = rnd < 0.5 ? TILES.SAND : (rnd < 0.85 ? TILES.GRASS : TILES.SOIL);
                    }
                } else if (type === 'biome_tundra') {
                    if (this.tiles[i] !== TILES.BEDROCK && this.tiles[i] !== TILES.VOID) {
                        const rnd = Math.random();
                        this.tiles[i] = rnd < 0.5 ? TILES.SNOW : (rnd < 0.75 ? TILES.ICE : TILES.STONE);
                    }
                } else if (type === 'biome_jungle') {
                    if (this.tiles[i] !== TILES.BEDROCK && this.tiles[i] !== TILES.VOID) {
                        const rnd = Math.random();
                        this.tiles[i] = rnd < 0.6 ? TILES.FOREST : (rnd < 0.85 ? TILES.BIOLUMINESCENT_MOSS : TILES.WATER);
                    }
                } else if (type === 'gold_ore') {
                    this.setTile(x, y, TILES.GOLD_ORE);
                } else if (type === 'mushroom_spore') {
                    this.setTile(x, y, TILES.MUSHROOM_SPORE);
                } else if (type === 'honey_comb') {
                    this.setTile(x, y, TILES.HONEY_COMB);
                } else if (type === 'holy_ground') {
                    this.setTile(x, y, TILES.HOLY_GROUND);
                } else if (type === 'blood_river') {
                    this.setTile(x, y, TILES.BLOOD_RIVER);
                } else if (type === 'poison_swamp') {
                    this.setTile(x, y, TILES.POISON_SWAMP);
                } else if (type === 'plasma_field') {
                    this.setTile(x, y, TILES.PLASMA_FIELD);
                } else if (type === 'living_bramble') {
                    this.setTile(x, y, TILES.LIVING_BRAMBLE);
                } else if (type === 'aether_fluid') {
                    this.setTile(x, y, TILES.AETHER_FLUID);
                } else if (type === 'meteorite_ore') {
                    this.setTile(x, y, TILES.METEORITE_ORE);
                } else {
                    this.setTile(x, y, type);
                }
            }
        }
    }

    raiseTile(x, y) {
        const i = this.idx(x, y);
        if (this.elevation) this.elevation[i] = Math.min(22.0, this.elevation[i] + 0.9);
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
        const i = this.idx(x, y);
        if (this.elevation) this.elevation[i] = Math.max(-3.5, this.elevation[i] - 0.9);
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
                            this.tiles[ni] = Math.random() < 0.6 ? TILES.OBSIDIAN : TILES.STONE;
                            if (Math.random() < 0.4) this.tiles[i] = TILES.OBSIDIAN;
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

                // 6. Magma Rock Heat & Ember Sparkles
                if (t === TILES.MAGMA_ROCK) {
                    if (particleSystem && Math.random() < 0.04) {
                        particleSystem.spawn(x, y, (Math.random() - 0.5) * 0.4, -0.4 - Math.random() * 0.5, 1.2, '#f97316', 15, 'spark');
                    }
                    if (Math.random() < 0.02) {
                        const neighbors = [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]];
                        const [nx, ny] = neighbors[Math.floor(Math.random() * 4)];
                        if (this.inBounds(nx, ny)) {
                            const ni = this.idx(nx, ny);
                            if (this.tiles[ni] === TILES.WATER || this.tiles[ni] === TILES.DEEP_WATER) {
                                this.tiles[ni] = TILES.OBSIDIAN;
                                if (particleSystem) particleSystem.spawn(nx, ny, 0, -0.8, 3, '#94a3b8', 25, 'smoke');
                            } else if (TILE_INFO[this.tiles[ni]]?.flammability > 0) {
                                this.ignite(nx, ny, 60);
                            }
                        }
                    }
                }

                // 7. Bioluminescent Moss Spreading
                if (t === TILES.BIOLUMINESCENT_MOSS) {
                    if (particleSystem && Math.random() < 0.02) {
                        particleSystem.spawn(x, y, (Math.random() - 0.5) * 0.2, (Math.random() - 0.5) * 0.2, 1.4, '#06b6d4', 20, 'stardust');
                    }
                    if (Math.random() < 0.003) {
                        const neighbors = [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]];
                        const [nx, ny] = neighbors[Math.floor(Math.random() * 4)];
                        if (this.inBounds(nx, ny)) {
                            const ni = this.idx(nx, ny);
                            if (this.tiles[ni] === TILES.SOIL || this.tiles[ni] === TILES.STONE) {
                                this.tiles[ni] = TILES.BIOLUMINESCENT_MOSS;
                            }
                        }
                    }
                }

                // 8. Quicksand Sinking
                if (t === TILES.QUICKSAND && Math.random() < 0.02) {
                    if (y + 1 < this.height) {
                        const belowIdx = this.idx(x, y + 1);
                        if (this.tiles[belowIdx] === TILES.WATER || this.tiles[belowIdx] === TILES.SOIL) {
                            this.tiles[belowIdx] = TILES.QUICKSAND;
                        }
                    }
                }

                // 9. Poison Swamp & Blood River Fluid Flow & Spores
                if (t === TILES.POISON_SWAMP || t === TILES.BLOOD_RIVER) {
                    if (particleSystem && Math.random() < 0.03) {
                        particleSystem.spawn(x, y, (Math.random() - 0.5) * 0.3, -0.4, 1.3, t === TILES.POISON_SWAMP ? '#8b5cf6' : '#dc2626', 20, 'smoke');
                    }
                    if (y + 1 < this.height) {
                        const bi = this.idx(x, y + 1);
                        if (this.tiles[bi] === TILES.VOID && Math.random() < 0.3) {
                            this.tiles[bi] = t;
                        }
                    }
                }

                // 10. Holy Ground Sacred Purification
                if (t === TILES.HOLY_GROUND) {
                    if (particleSystem && Math.random() < 0.03) {
                        particleSystem.spawn(x, y, (Math.random() - 0.5) * 0.2, -0.5, 1.5, '#fef08a', 20, 'stardust');
                    }
                    if (Math.random() < 0.005) {
                        const neighbors = [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]];
                        const [nx, ny] = neighbors[Math.floor(Math.random() * 4)];
                        if (this.inBounds(nx, ny)) {
                            const ni = this.idx(nx, ny);
                            if (this.tiles[ni] === TILES.CORRUPTED || this.tiles[ni] === TILES.FALLOUT) {
                                this.tiles[ni] = TILES.GRASS;
                            }
                        }
                    }
                }

                // 11. Mushroom Spore Creeping Mycelium
                if (t === TILES.MUSHROOM_SPORE) {
                    if (particleSystem && Math.random() < 0.02) {
                        particleSystem.spawn(x, y, (Math.random() - 0.5) * 0.4, -0.3, 1.6, '#c084fc', 22, 'stardust');
                    }
                    if (Math.random() < 0.003) {
                        const neighbors = [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]];
                        const [nx, ny] = neighbors[Math.floor(Math.random() * 4)];
                        if (this.inBounds(nx, ny)) {
                            const ni = this.idx(nx, ny);
                            if (this.tiles[ni] === TILES.SOIL) {
                                this.tiles[ni] = TILES.MUSHROOM_SPORE;
                            }
                        }
                    }
                }

                // 12. Living Bramble Spreading
                if (t === TILES.LIVING_BRAMBLE) {
                    if (particleSystem && Math.random() < 0.015) {
                        particleSystem.spawn(x, y, (Math.random() - 0.5) * 0.2, -0.3, 1.2, '#22c55e', 16, 'spark');
                    }
                    if (Math.random() < 0.004) {
                        const neighbors = [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]];
                        const [nx, ny] = neighbors[Math.floor(Math.random() * 4)];
                        if (this.inBounds(nx, ny)) {
                            const ni = this.idx(nx, ny);
                            if (this.tiles[ni] === TILES.GRASS || this.tiles[ni] === TILES.SOIL) {
                                this.tiles[ni] = TILES.LIVING_BRAMBLE;
                            }
                        }
                    }
                }

                // 13. Aether Fluid Flow
                if (t === TILES.AETHER_FLUID) {
                    if (particleSystem && Math.random() < 0.02) {
                        particleSystem.spawn(x, y, (Math.random() - 0.5) * 0.3, -0.4, 1.3, '#818cf8', 18, 'stardust');
                    }
                    if (y + 1 < this.height) {
                        const bi = this.idx(x, y + 1);
                        if (this.tiles[bi] === TILES.VOID && Math.random() < 0.3) {
                            this.tiles[bi] = TILES.AETHER_FLUID;
                        }
                    }
                }

                // 14. Plasma Field Sparkles
                if (t === TILES.PLASMA_FIELD) {
                    if (particleSystem && Math.random() < 0.025) {
                        particleSystem.spawn(x, y, (Math.random() - 0.5) * 0.4, -0.5, 1.4, '#06b6d4', 15, 'spark');
                    }
                }

                // 15. Meteorite Ore Glint
                if (t === TILES.METEORITE_ORE) {
                    if (particleSystem && Math.random() < 0.015) {
                        particleSystem.spawn(x, y, (Math.random() - 0.5) * 0.2, -0.3, 1.2, '#f97316', 15, 'spark');
                    }
                }

                // 16. Tar Pit Chemical Reactions (Petroleum Inferno)
                if (t === TILES.TAR_PIT) {
                    if (this.fire[i] > 0) {
                        // Explode in petroleum blaze!
                        this.tiles[i] = Math.random() < 0.35 ? TILES.OBSIDIAN : TILES.ASH;
                        this.fire[i] = 0;
                        if (particleSystem) {
                            particleSystem.burst(x, y, 6, ['#f97316', '#ef4444', '#1e293b', '#000000'], 1.5, 3.5, 1, 3, 'fire');
                            particleSystem.burst(x, y, 4, ['#334155', '#1e293b', '#0f172a'], 1.2, 3, 1.5, 3, 'smoke');
                        }
                        // Ignite surrounding flammables and tar
                        const neighbors = [[x+1, y], [x-1, y], [x, y+1], [x, y-1]];
                        for (let n = 0; n < 4; n++) {
                            const [nx, ny] = neighbors[n];
                            if (this.inBounds(nx, ny)) {
                                const ni = this.idx(nx, ny);
                                if (this.tiles[ni] === TILES.TAR_PIT) {
                                    this.fire[ni] = 40;
                                }
                            }
                        }
                    }
                }

                // 17. Aether Crystal Arcane Resonance
                if (t === TILES.AETHER_CRYSTAL) {
                    if (particleSystem && Math.random() < 0.02) {
                        particleSystem.spawn(x, y - 1, (Math.random() - 0.5) * 0.4, -0.6, 1.4, '#c084fc', 20, 'stardust');
                    }
                }

                // 18. Glowcap Mushroom Spore Pulse
                if (t === TILES.GLOWCAP_MUSHROOM) {
                    if (particleSystem && Math.random() < 0.018) {
                        particleSystem.spawn(x, y - 0.5, (Math.random() - 0.5) * 0.3, -0.3, 1.2, '#38bdf8', 22, 'stardust');
                    }
                    if (this.fire[i] > 0) {
                        // Burst psychoactive spore cloud
                        this.tiles[i] = TILES.ASH;
                        this.fire[i] = 0;
                        if (particleSystem) {
                            particleSystem.burst(x, y, 8, ['#38bdf8', '#818cf8', '#a855f7'], 1.2, 3.2, 1.2, 2.5, 'stardust');
                        }
                    }
                }

                // 19. Volcanic Caldera Venting
                if (t === TILES.VOLCANIC_CALDERA) {
                    if (particleSystem && Math.random() < 0.035) {
                        particleSystem.spawn(x, y - 1, (Math.random() - 0.5) * 0.5, -0.8, 1.5, '#f97316', 20, 'fire');
                        particleSystem.spawn(x, y - 1, (Math.random() - 0.5) * 0.3, -0.6, 1.2, '#475569', 18, 'smoke');
                    }
                }

                // 20. Enchanted Grove Purification
                if (t === TILES.ENCHANTED_GROVE) {
                    if (particleSystem && Math.random() < 0.025) {
                        particleSystem.spawn(x, y - 0.5, (Math.random() - 0.5) * 0.3, -0.4, 1.3, '#f472b6', 20, 'stardust');
                    }
                    if (Math.random() < 0.02) {
                        const neighbors = [[x+1, y], [x-1, y], [x, y+1], [x, y-1]];
                        const [nx, ny] = neighbors[Math.floor(Math.random() * 4)];
                        if (this.inBounds(nx, ny)) {
                            const ni = this.idx(nx, ny);
                            if (this.tiles[ni] === TILES.CORRUPTED || this.tiles[ni] === TILES.FALLOUT || this.tiles[ni] === TILES.ASH) {
                                this.tiles[ni] = TILES.GRASS;
                            }
                        }
                    }
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

    // RLE (Run-Length Encoding) for ultra-compact world saving (15x-20x smaller)
    encodeRLE(arr) {
        if (!arr || arr.length === 0) return '';
        const res = [];
        let count = 1;
        let cur = arr[0];
        const len = arr.length;
        for (let i = 1; i < len; i++) {
            if (arr[i] === cur && count < 65535) {
                count++;
            } else {
                res.push(count === 1 ? cur : `${count}x${cur}`);
                cur = arr[i];
                count = 1;
            }
        }
        res.push(count === 1 ? cur : `${count}x${cur}`);
        return res.join(',');
    }

    decodeRLE(str, targetArr) {
        if (!str || !targetArr) return;
        const tokens = str.split(',');
        let idx = 0;
        const maxLen = targetArr.length;
        for (let i = 0; i < tokens.length && idx < maxLen; i++) {
            const token = tokens[i];
            const xIdx = token.indexOf('x');
            if (xIdx !== -1) {
                const count = parseInt(token.substring(0, xIdx), 10);
                const val = parseInt(token.substring(xIdx + 1), 10);
                const end = Math.min(idx + count, maxLen);
                while (idx < end) targetArr[idx++] = val;
            } else {
                targetArr[idx++] = parseInt(token, 10);
            }
        }
    }

    // Save & Load Serializer
    serialize() {
        const elevInt = new Int16Array(this.size);
        for (let i = 0; i < this.size; i++) {
            elevInt[i] = Math.round((this.elevation ? this.elevation[i] : 2.0) * 10);
        }
        return {
            width: this.width,
            height: this.height,
            seed: this.seed,
            tilesRLE: this.encodeRLE(this.tiles),
            elevationRLE: this.encodeRLE(elevInt)
        };
    }

    deserialize(data) {
        if (!data || (!data.tiles && !data.tilesRLE)) return false;
        this.width = data.width || 640;
        this.height = data.height || 360;
        this.size = this.width * this.height;
        this.seed = data.seed || 12345;
        this.tiles = new Uint8Array(this.size);
        this.elevation = new Float32Array(this.size);
        this.variation = new Uint8Array(this.size);
        this.temperature = new Int16Array(this.size);
        this.fire = new Uint8Array(this.size);

        if (data.tilesRLE) {
            this.decodeRLE(data.tilesRLE, this.tiles);
        } else if (data.tiles && Array.isArray(data.tiles)) {
            // Backward-compatibility with legacy uncompressed array format
            this.tiles.set(data.tiles);
        }

        if (data.elevationRLE) {
            const elevInt = new Int16Array(this.size);
            this.decodeRLE(data.elevationRLE, elevInt);
            for (let i = 0; i < this.size; i++) {
                this.elevation[i] = elevInt[i] / 10.0;
            }
        } else {
            // Backward-compatibility: reconstruct elevation from tile types
            for (let i = 0; i < this.size; i++) {
                const t = this.tiles[i];
                this.elevation[i] = TILE_BASE_ELEVATION[t] !== undefined ? TILE_BASE_ELEVATION[t] : 2.5;
            }
        }

        for (let i = 0; i < this.size; i++) {
            this.variation[i] = Math.floor(Math.random() * 5);
            this.temperature[i] = 20;
        }
        return true;
    }
}

window.TILES = TILES;
window.TILE_INFO = TILE_INFO;
window.TILE_BASE_ELEVATION = TILE_BASE_ELEVATION;
window.World = World;
