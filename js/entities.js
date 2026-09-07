// ==========================================
// GALAXYBOX - Living Entities, Bosses & Traits
// AI State Machines, Player Possession & Custom Monsters
// ==========================================

const KINGDOM_COLORS = [
    '#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', 
    '#ec4899', '#06b6d4', '#84cc16', '#f97316', '#a855f7'
];

const KINGDOM_NAMES = [
    'Solaris', 'Vanguard', 'Ironcrest', 'Mythgard', 'Eldoria',
    'Stormpeak', 'Dragonfall', 'Sunhaven', 'Frostholm', 'Valoria'
];

const HUMAN_NAMES = [
    'Arthur', 'Elia', 'Rowan', 'Thorin', 'Lyra', 'Cedric', 'Gareth',
    'Aria', 'Kael', 'Bryn', 'Doran', 'Vesper', 'Mira', 'Alden', 'Selene'
];

// Available Traits
const TRAITS = {
    titan: { name: "Titan", desc: "Enormous size, boosted health and attack", icon: "🗿" },
    immortal: { name: "Immortal", desc: "Immunity to age and high defense", icon: "👑" },
    fireproof: { name: "Fireproof", desc: "Walks through fire and lava unharmed", icon: "🔥" },
    laser_eyes: { name: "Laser Eyes", desc: "Periodically fires devastating laser rays", icon: "⚡" },
    regenerating: { name: "Regeneration", desc: "Rapidly recovers health over time", icon: "💚" },
    super_speed: { name: "Super Speed", desc: "Hyper fast movement with speed trails", icon: "💨" },
    venomous: { name: "Venomous", desc: "Attacks poison and corrode targets", icon: "🧪" },
    explosive_death: { name: "Explosive Death", desc: "Detonates in a huge explosion when slain", icon: "💣" },
    electrocharged: { name: "Electrocharged", desc: "Discharges electricity to nearby foes", icon: "🌩️" },
    water_walker: { name: "Water Walker", desc: "Walks effortlessly across water and oceans", icon: "🌊" },
    bloodthirsty: { name: "Bloodthirsty", desc: "Frenzied aggression attacking all creatures", icon: "🩸" },
    peaceful: { name: "Peaceful", desc: "Never starts fights or hurts other creatures", icon: "🕊️" },
    headslammer: { name: "Headslammer", desc: "Leaps and slams head, clearing trees & creating shockwaves", icon: "💥" },
    pyromaniac: { name: "Pyromaniac", desc: "Ignites terrain, fires spark bursts, immune to flame", icon: "🔥" },
    cryomancer: { name: "Cryomancer", desc: "Glaciates water to ice and chills attackers", icon: "❄️" },
    acid_blood: { name: "Acid Blood", desc: "Sprays corrosive acid droplets upon taking damage", icon: "🧪" },
    necromancer: { name: "Necromancer", desc: "Raises slain nearby enemies as loyal undead", icon: "💀" },
    vampiric: { name: "Vampiric", desc: "Steals life on attack, restoring health", icon: "🧛" },
    starlight_aura: { name: "Starlight Aura", desc: "Radiates healing stardust aura to all nearby allies", icon: "✨" },
    earthshaker: { name: "Earthshaker", desc: "Footsteps shake ground and crack brittle stone", icon: "🌋" },
    invisibility: { name: "Invisibility", desc: "Translucent stealth cloaking dodging enemy detection", icon: "👻" },
    thorny: { name: "Thorny Bark", desc: "Reflects 35% of incoming melee damage back to attackers", icon: "🌵" },
    flying: { name: "Winged Flight", desc: "Flies effortlessly above deep oceans, lava, and chasms", icon: "🪽" },
    splitter: { name: "Mitosis Splitter", desc: "Splits into two mini clones upon death", icon: "🧬" },
    teleporter: { name: "Void Teleport", desc: "Instantly warps through space when struck", icon: "🌀" },
    amphibious: { name: "Amphibious", desc: "Swims freely through water, acid, and lava unharmed", icon: "🦎" }
};

class Kingdom {
    constructor(id, name, color, startX, startY) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.x = startX;
        this.y = startY;
        this.wood = 20;
        this.stone = 10;
        this.food = 30;
        this.population = 0;
        this.buildings = [];
        this.isAtWar = false;
        this.enemies = new Set();
    }
}

class Building {
    constructor(type, x, y, kingdomId) {
        this.type = type; // campfire, hut, house, townhall, farm, tower
        this.x = Math.floor(x);
        this.y = Math.floor(y);
        this.kingdomId = kingdomId;
        this.level = 1;

        if (type === 'campfire') {
            this.hp = 50;
            this.maxHp = 50;
            this.width = 2;
            this.height = 2;
            this.color = '#ff9800';
        } else if (type === 'hut') {
            this.hp = 100;
            this.maxHp = 100;
            this.width = 3;
            this.height = 3;
            this.color = '#8d6e63';
        } else if (type === 'house') {
            this.hp = 250;
            this.maxHp = 250;
            this.width = 4;
            this.height = 3;
            this.color = '#78909c';
        } else if (type === 'townhall') {
            this.hp = 600;
            this.maxHp = 600;
            this.width = 5;
            this.height = 4;
            this.color = '#f59e0b';
        } else if (type === 'farm') {
            this.hp = 60;
            this.maxHp = 60;
            this.width = 3;
            this.height = 3;
            this.color = '#eab308';
        } else {
            this.hp = 200;
            this.maxHp = 200;
            this.width = 2;
            this.height = 4;
            this.color = '#64748b';
        }
    }

    takeDamage(amount, world = null, particleSystem = null, audio = null) {
        this.hp -= amount;
        if (particleSystem) {
            particleSystem.burst(this.x, this.y, 4, ['#78350f', '#64748b', '#d97706'], 1, 2.5, 1, 2);
        }
        if (this.hp <= 0) {
            this.hp = 0;
            this.destroyed = true;
            if (audio && typeof audio.playExplosion === 'function') {
                audio.playExplosion(0.8);
            }
            if (particleSystem) {
                particleSystem.burst(this.x, this.y, 16, ['#78350f', '#451a03', '#94a3b8', '#374151'], 1.5, 4, 1.5, 3, 'smoke');
            }
            if (world && world.inBounds(Math.floor(this.x), Math.floor(this.y))) {
                world.setTile(Math.floor(this.x), Math.floor(this.y), TILES.ASH);
            }
            return true;
        }
        return false;
    }
}

class Projectile {
    constructor(x, y, vx, vy, type, sourceId, damage = 15) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.type = type; // arrow, fireball, laser, plasma, frost, acid
        this.sourceId = sourceId;
        this.damage = damage;
        this.life = 60;
        this.active = true;
    }

    update(dt = 1) {
        this.x += this.vx * dt;
        this.y += this.vy * dt;
        this.life -= dt;
        if (this.life <= 0) this.active = false;
    }
}

class ExplosiveEgg {
    constructor(x, y, sourceId = null) {
        this.x = x;
        this.y = y;
        this.timer = 180; // ~3 seconds at 60fps
        this.maxTimer = 180;
        this.sourceId = sourceId;
        this.active = true;
    }

    update(world, entityManager, particleSystem, audio, disasterManager) {
        this.timer--;
        if (this.timer === 120 || this.timer === 60) {
            if (audio && typeof audio.playEggTick === 'function') audio.playEggTick();
            if (particleSystem) {
                particleSystem.spawn(this.x, this.y - 2, 0, -0.4, 1.2, '#facc15', 12, 'spark');
            }
        }
        if (this.timer <= 0) {
            this.explode(world, entityManager, particleSystem, audio, disasterManager);
            this.active = false;
        }
    }

    explode(world, entityManager, particleSystem, audio, disasterManager) {
        if (audio && typeof audio.playExplosion === 'function') audio.playExplosion(1.5);
        if (typeof window !== 'undefined' && window.game && typeof window.game.shakeCamera === 'function') {
            window.game.shakeCamera(16, 25);
        }
        if (particleSystem) {
            particleSystem.burst(this.x, this.y, 35, ['#facc15', '#f97316', '#ffffff', '#ef4444'], 2.5, 6, 2, 4, 'fire');
            particleSystem.burst(this.x, this.y, 25, ['#fef08a', '#facc15', '#ffffff'], 2, 5, 2, 4, 'stardust');
        }
        const radius = 12;
        for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
                if (dx * dx + dy * dy <= radius * radius) {
                    const tx = Math.floor(this.x + dx);
                    const ty = Math.floor(this.y + dy);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                        if (Math.random() < 0.35) world.setTile(tx, ty, TILES.ASH);
                        else if (Math.random() < 0.2) world.ignite(tx, ty, 60);
                    }
                }
            }
        }
        for (let i = 0; i < entityManager.entities.length; i++) {
            const ent = entityManager.entities[i];
            if (!ent.active) continue;
            const dist = Math.hypot(ent.x - this.x, ent.y - this.y);
            if (dist < radius * 1.6) {
                ent.takeDamage(120, null);
                const ang = Math.atan2(ent.y - this.y, ent.x - this.x);
                ent.x += Math.cos(ang) * 10;
                ent.y += Math.sin(ang) * 10;
            }
        }
    }
}

class Entity {
    constructor(type, x, y, customData = null) {
        this.id = Math.floor(Math.random() * 1000000);
        this.type = type;
        this.species = type;
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.name = HUMAN_NAMES[Math.floor(Math.random() * HUMAN_NAMES.length)];
        this.age = Math.floor(18 + Math.random() * 20);
        this.kills = 0;
        this.kingdomId = null;
        this.isKing = false;
        this.active = true;
        this.entityManager = null;

        // Modifiers & Player Control
        this.blessed = false;
        this.cursed = false;
        this.infected = false; // zombie plague
        this.frozen = 0; // freeze timer
        this.scale = 1.0;
        this.grabbed = false;
        this.isControlled = false;
        this.abilityCooldown = 0;
        this.specialCooldown = 0;
        this.weapon = null; // 'sword', 'bow', 'blaster', 'staff'
        this.overclockTimer = 0;

        // Visual effects, combat feedback & dying animation
        this.isDying = false;
        this.deathTimer = 0;
        this.maxDeathTimer = 0;
        this.deathType = 'humanoid';
        this.hitFlash = 0;
        this.stepTimer = 0;
        this.facingLeft = false;

        // Traits set
        this.traits = new Set();

        // Custom properties (for Creature Creator)
        this.customData = customData;
        this.bodyParts = null;
        this.colors = null;

        // Combat & Stats
        this.initStats();

        // Apply custom data if present
        if (customData) {
            this.applyCustomData(customData);
        }

        // AI
        this.state = 'wander';
        this.stateTimer = Math.floor(20 + Math.random() * 40);
        this.targetX = x;
        this.targetY = y;
        this.targetEntity = null;
        this.inventory = { wood: 0, stone: 0, food: 0 };
    }

    initStats() {
        switch (this.type) {
            case 'crabzilla':
                this.name = 'Crabzilla';
                this.hp = 5000;
                this.maxHp = 5000;
                this.speed = 0.55;
                this.attack = 100;
                this.size = 14;
                this.color = '#ea580c';
                this.isBoss = true;
                this.traits.add('titan');
                this.traits.add('fireproof');
                this.traits.add('water_walker');
                this.traits.add('laser_eyes');
                break;
            case 'kaiju':
                this.name = 'Kaiju Godzilla';
                this.hp = 4500;
                this.maxHp = 4500;
                this.speed = 0.5;
                this.attack = 90;
                this.size = 12;
                this.color = '#0284c7';
                this.isBoss = true;
                this.traits.add('titan');
                this.traits.add('fireproof');
                this.traits.add('regenerating');
                break;
            case 'phoenix':
                this.name = 'Solar Phoenix';
                this.hp = 1800;
                this.maxHp = 1800;
                this.speed = 1.1;
                this.attack = 70;
                this.size = 7;
                this.color = '#fbbf24';
                this.isFlying = true;
                this.isMythic = true;
                this.traits.add('fireproof');
                this.traits.add('explosive_death');
                this.traits.add('regenerating');
                break;
            case 'kraken':
                this.name = 'Abyssal Kraken';
                this.hp = 3000;
                this.maxHp = 3000;
                this.speed = 0.7;
                this.attack = 80;
                this.size = 11;
                this.color = '#0d9488';
                this.isAquatic = true;
                this.isMythic = true;
                this.traits.add('water_walker');
                this.traits.add('regenerating');
                break;
            case 'hydra':
                this.name = 'Venom Hydra';
                this.hp = 2500;
                this.maxHp = 2500;
                this.speed = 0.45;
                this.attack = 65;
                this.size = 9;
                this.color = '#16a34a';
                this.isMythic = true;
                this.traits.add('regenerating');
                this.traits.add('venomous');
                break;
            case 'frost_titan':
                this.name = 'Frost Titan';
                this.hp = 3500;
                this.maxHp = 3500;
                this.speed = 0.38;
                this.attack = 85;
                this.size = 11;
                this.color = '#38bdf8';
                this.isBoss = true;
                this.isMythic = true;
                this.traits.add('titan');
                break;
            case 'galaxy_guardian':
                this.name = 'Galaxy Guardian';
                this.hp = 6000;
                this.maxHp = 6000;
                this.speed = 0.65;
                this.attack = 95;
                this.size = 13;
                this.color = '#a855f7';
                this.isBoss = true;
                this.isCelestial = true;
                this.traits.add('titan');
                this.traits.add('laser_eyes');
                this.traits.add('immortal');
                this.traits.add('water_walker');
                this.traits.add('fireproof');
                break;
            case 'colossus_mech':
                this.name = 'Colossus Heavy Walker';
                this.hp = 3500;
                this.maxHp = 3500;
                this.speed = 0.5;
                this.attack = 135;
                this.size = 11;
                this.color = '#334155';
                this.isVehicle = true;
                this.isBoss = true;
                this.traits.add('titan');
                this.traits.add('fireproof');
                break;
            case 'seraph_angel':
                this.name = 'Seraph Celestial Angel';
                this.hp = 2200;
                this.maxHp = 2200;
                this.speed = 0.9;
                this.attack = 90;
                this.size = 6.5;
                this.color = '#fef08a';
                this.isFlying = true;
                this.isMythic = true;
                this.traits.add('immortal');
                this.traits.add('regenerating');
                break;
            case 'dune_leviathan':
                this.name = 'Dune Sand Leviathan';
                this.hp = 3400;
                this.maxHp = 3400;
                this.speed = 0.6;
                this.attack = 115;
                this.size = 11;
                this.color = '#ca8a04';
                this.isBoss = true;
                this.traits.add('titan');
                this.traits.add('venomous');
                break;
            case 'vampire_lord':
                this.name = 'Vampire Lord';
                this.hp = 1500;
                this.maxHp = 1500;
                this.speed = 1.05;
                this.attack = 80;
                this.size = 4;
                this.color = '#881337';
                this.isMythic = true;
                this.traits.add('super_speed');
                this.traits.add('regenerating');
                break;
            case 'void_titan':
                this.name = 'Cosmic Void Titan';
                this.hp = 6500;
                this.maxHp = 6500;
                this.speed = 0.7;
                this.attack = 180;
                this.size = 14;
                this.color = '#6366f1';
                this.isBoss = true;
                this.isCelestial = true;
                this.traits.add('titan');
                this.traits.add('immortal');
                this.traits.add('fireproof');
                this.traits.add('water_walker');
                break;
            case 'evermean':
                this.name = 'Evermean Treant';
                this.hp = 1200;
                this.maxHp = 1200;
                this.speed = 0.65;
                this.attack = 55;
                this.size = 6.5;
                this.color = '#15803d';
                this.isMythic = true;
                this.traits.add('headslammer');
                this.traits.add('earthshaker');
                break;
            case 'tank':
                this.name = 'Battle Tank';
                this.hp = 850;
                this.maxHp = 850;
                this.speed = 0.65;
                this.attack = 80;
                this.size = 5;
                this.color = '#475569';
                this.isVehicle = true;
                break;
            case 'warship':
                this.name = 'Battleship';
                this.hp = 1600;
                this.maxHp = 1600;
                this.speed = 0.55;
                this.attack = 95;
                this.size = 9;
                this.color = '#334155';
                this.isVehicle = true;
                this.isAquatic = true;
                this.traits.add('water_walker');
                break;
            case 'helicopter':
                this.name = 'Attack Chopper';
                this.hp = 600;
                this.maxHp = 600;
                this.speed = 0.95;
                this.attack = 45;
                this.size = 5;
                this.color = '#15803d';
                this.isVehicle = true;
                this.isFlying = true;
                break;
            case 'starfighter':
                this.name = 'Cosmic Starfighter';
                this.hp = 750;
                this.maxHp = 750;
                this.speed = 1.35;
                this.attack = 60;
                this.size = 4.5;
                this.color = '#38bdf8';
                this.isVehicle = true;
                this.isFlying = true;
                this.traits.add('fireproof');
                break;
            case 'mech':
                this.name = 'Steampunk War Mech';
                this.hp = 1800;
                this.maxHp = 1800;
                this.speed = 0.6;
                this.attack = 75;
                this.size = 7;
                this.color = '#b45309';
                this.isVehicle = true;
                this.traits.add('titan');
                this.traits.add('fireproof');
                break;
            case 'wizard':
                this.name = 'Arcane Wizard';
                this.hp = 450;
                this.maxHp = 450;
                this.speed = 0.75;
                this.attack = 55;
                this.size = 3;
                this.color = '#6366f1';
                this.isCiv = true;
                this.traits.add('immortal');
                break;
            case 'human':
                this.hp = 100;
                this.maxHp = 100;
                this.speed = 0.5;
                this.attack = 12;
                this.size = 2;
                this.color = '#fbc02d';
                this.isCiv = true;
                break;
            case 'elf':
                this.hp = 85;
                this.maxHp = 85;
                this.speed = 0.65;
                this.attack = 15;
                this.size = 2;
                this.color = '#4ade80';
                this.isCiv = true;
                break;
            case 'orc':
                this.hp = 160;
                this.maxHp = 160;
                this.speed = 0.45;
                this.attack = 20;
                this.size = 2.5;
                this.color = '#15803d';
                this.isCiv = true;
                break;
            case 'dwarf':
                this.hp = 140;
                this.maxHp = 140;
                this.speed = 0.4;
                this.attack = 16;
                this.size = 2;
                this.color = '#ca8a04';
                this.isCiv = true;
                break;
            case 'sheep':
                this.hp = 40;
                this.maxHp = 40;
                this.speed = 0.4;
                this.attack = 0;
                this.size = 1.8;
                this.color = '#f8fafc';
                this.isCiv = false;
                break;
            case 'cow':
                this.hp = 80;
                this.maxHp = 80;
                this.speed = 0.35;
                this.attack = 0;
                this.size = 2.4;
                this.color = '#d97706';
                this.isCiv = false;
                break;
            case 'wolf':
                this.hp = 70;
                this.maxHp = 70;
                this.speed = 0.75;
                this.attack = 18;
                this.size = 2;
                this.color = '#64748b';
                this.isCiv = false;
                break;
            case 'bear':
                this.hp = 220;
                this.maxHp = 220;
                this.speed = 0.5;
                this.attack = 30;
                this.size = 3;
                this.color = '#78350f';
                this.isCiv = false;
                break;
            case 'dragon':
                this.hp = 1200;
                this.maxHp = 1200;
                this.speed = 0.9;
                this.attack = 60;
                this.size = 6;
                this.color = '#dc2626';
                this.isCiv = false;
                this.isFlying = true;
                this.traits.add('fireproof');
                break;
            case 'golem':
                this.hp = 900;
                this.maxHp = 900;
                this.speed = 0.3;
                this.attack = 50;
                this.size = 5;
                this.color = '#475569';
                this.isCiv = false;
                this.traits.add('titan');
                break;
            case 'zombie':
                this.hp = 80;
                this.maxHp = 80;
                this.speed = 0.4;
                this.attack = 16;
                this.size = 2;
                this.color = '#65a30d';
                this.isCiv = false;
                this.infected = true;
                break;
            case 'skeleton':
                this.hp = 60;
                this.maxHp = 60;
                this.speed = 0.55;
                this.attack = 14;
                this.size = 2;
                this.color = '#cbd5e1';
                this.isCiv = false;
                break;
            case 'demon':
                this.hp = 300;
                this.maxHp = 300;
                this.speed = 0.6;
                this.attack = 35;
                this.size = 3;
                this.color = '#b91c1c';
                this.isCiv = false;
                this.traits.add('fireproof');
                break;
            case 'alien':
                this.hp = 150;
                this.maxHp = 150;
                this.speed = 0.7;
                this.attack = 25;
                this.size = 2.2;
                this.color = '#a855f7';
                this.isCiv = false;
                break;
            case 'duck':
                this.name = 'Exploding Duck';
                this.hp = 80;
                this.maxHp = 80;
                this.speed = 0.9;
                this.attack = 25;
                this.size = 2.2;
                this.color = '#facc15';
                this.isCiv = false;
                this.traits.add('amphibious');
                this.traits.add('explosive_death');
                this.deathType = 'duck_explode';
                break;
            case 'crystal_golem':
                this.name = 'Crystal Golem';
                this.hp = 1200;
                this.maxHp = 1200;
                this.speed = 0.35;
                this.attack = 55;
                this.size = 5.5;
                this.color = '#ec4899';
                this.isCiv = false;
                this.traits.add('titan');
                this.traits.add('immortal');
                break;
            case 'shadow_assassin':
                this.name = 'Shadow Assassin';
                this.hp = 220;
                this.maxHp = 220;
                this.speed = 1.1;
                this.attack = 45;
                this.size = 2.2;
                this.color = '#1e1b4b';
                this.isCiv = true;
                this.traits.add('invisibility');
                this.traits.add('super_speed');
                break;
            case 'frog':
                this.name = 'Tree Frog';
                this.hp = 70;
                this.maxHp = 70;
                this.speed = 0.8;
                this.attack = 18;
                this.size = 2;
                this.color = '#22c55e';
                this.traits.add('amphibious');
                break;
            case 'cyber_ninja':
                this.name = 'Cyber Ninja';
                this.hp = 260;
                this.maxHp = 260;
                this.speed = 1.15;
                this.attack = 48;
                this.size = 2.2;
                this.color = '#06b6d4';
                this.traits.add('super_speed');
                this.weapon = 'shuriken';
                break;
            case 'laser_shark':
                this.name = 'Laser Shark';
                this.hp = 1400;
                this.maxHp = 1400;
                this.speed = 0.9;
                this.attack = 70;
                this.size = 6.5;
                this.color = '#0284c7';
                this.isAquatic = true;
                this.traits.add('water_walker');
                this.traits.add('laser_eyes');
                break;
            case 'frost_wolf':
                this.name = 'Frost Direwolf';
                this.hp = 280;
                this.maxHp = 280;
                this.speed = 0.85;
                this.attack = 32;
                this.size = 2.8;
                this.color = '#38bdf8';
                this.traits.add('cryomancer');
                break;
            case 'sand_scorpion':
                this.name = 'Sand Scorpion';
                this.hp = 420;
                this.maxHp = 420;
                this.speed = 0.65;
                this.attack = 38;
                this.size = 3.2;
                this.color = '#d97706';
                this.traits.add('venomous');
                this.traits.add('thorny');
                break;
            case 'necromancer':
                this.name = 'Dark Necromancer';
                this.hp = 420;
                this.maxHp = 420;
                this.speed = 0.7;
                this.attack = 45;
                this.size = 2.6;
                this.color = '#4c1d95';
                this.isCiv = true;
                this.traits.add('necromancer');
                this.weapon = 'staff';
                break;
            case 'valkyrie':
                this.name = 'Celestial Valkyrie';
                this.hp = 850;
                this.maxHp = 850;
                this.speed = 0.95;
                this.attack = 65;
                this.size = 3.5;
                this.color = '#fef08a';
                this.isFlying = true;
                this.traits.add('flying');
                this.traits.add('immortal');
                break;
            case 'gargoyle':
                this.name = 'Stone Gargoyle';
                this.hp = 650;
                this.maxHp = 650;
                this.speed = 0.7;
                this.attack = 50;
                this.size = 3.2;
                this.color = '#64748b';
                this.isFlying = true;
                this.traits.add('flying');
                break;
            case 'mecha_rex':
                this.name = 'Mecha-Rex Titan';
                this.hp = 4200;
                this.maxHp = 4200;
                this.speed = 0.55;
                this.attack = 120;
                this.size = 11;
                this.color = '#475569';
                this.isBoss = true;
                this.traits.add('titan');
                this.traits.add('fireproof');
                break;
            case 'golden_dragon':
                this.name = 'Golden Celestial Dragon';
                this.hp = 3200;
                this.maxHp = 3200;
                this.speed = 0.95;
                this.attack = 95;
                this.size = 8;
                this.color = '#facc15';
                this.isFlying = true;
                this.isBoss = true;
                this.isMythic = true;
                this.traits.add('titan');
                this.traits.add('immortal');
                this.traits.add('starlight_aura');
                break;
            case 'space_worm':
                this.name = 'Cosmic Space Worm';
                this.hp = 2500;
                this.maxHp = 2500;
                this.speed = 0.75;
                this.attack = 85;
                this.size = 7;
                this.color = '#8b5cf6';
                this.isFlying = true;
                this.isMythic = true;
                this.traits.add('flying');
                this.traits.add('fireproof');
                break;
            case 'goblin':
                this.name = 'Goblin Rogue';
                this.hp = 85;
                this.maxHp = 85;
                this.speed = 0.85;
                this.attack = 22;
                this.size = 1.8;
                this.color = '#84cc16';
                this.isCiv = true;
                this.weapon = 'poison_dagger';
                break;
            case 'pirate_ship':
                this.name = 'Armed Galleon';
                this.hp = 1500;
                this.maxHp = 1500;
                this.speed = 0.5;
                this.attack = 80;
                this.size = 8;
                this.color = '#78350f';
                this.isVehicle = true;
                this.isAquatic = true;
                this.traits.add('water_walker');
                break;
            case 'trex':
                this.name = 'Tyrannosaurus Rex';
                this.hp = 3500;
                this.maxHp = 3500;
                this.speed = 0.85;
                this.attack = 115;
                this.size = 11;
                this.color = '#15803d';
                this.isApex = true;
                this.traits.add('titan');
                this.traits.add('bloodthirsty');
                this.traits.add('earthshaker');
                break;
            case 'triceratops':
                this.name = 'Triceratops';
                this.hp = 2800;
                this.maxHp = 2800;
                this.speed = 0.65;
                this.attack = 80;
                this.size = 9;
                this.color = '#b45309';
                this.traits.add('titan');
                this.traits.add('thorny');
                break;
            case 'velociraptor':
                this.name = 'Velociraptor';
                this.hp = 380;
                this.maxHp = 380;
                this.speed = 1.45;
                this.attack = 45;
                this.size = 4;
                this.color = '#ca8a04';
                this.traits.add('super_speed');
                this.traits.add('bloodthirsty');
                break;
            case 'pterodactyl':
                this.name = 'Pterodactyl';
                this.hp = 480;
                this.maxHp = 480;
                this.speed = 1.35;
                this.attack = 42;
                this.size = 5;
                this.color = '#0284c7';
                this.isFlying = true;
                this.traits.add('flying');
                break;
            case 'brachiosaurus':
                this.name = 'Brachiosaurus';
                this.hp = 6500;
                this.maxHp = 6500;
                this.speed = 0.4;
                this.attack = 85;
                this.size = 15;
                this.color = '#3f6212';
                this.traits.add('titan');
                this.traits.add('peaceful');
                this.traits.add('earthshaker');
                break;
            case 'frost_dragon':
                this.name = 'Glacial Frost Dragon';
                this.hp = 4200;
                this.maxHp = 4200;
                this.speed = 0.95;
                this.attack = 95;
                this.size = 12;
                this.color = '#38bdf8';
                this.isFlying = true;
                this.isBoss = true;
                this.traits.add('flying');
                this.traits.add('cryomancer');
                this.traits.add('fireproof');
                break;
            case 'shadow_dragon':
                this.name = 'Nether Shadow Dragon';
                this.hp = 4500;
                this.maxHp = 4500;
                this.speed = 1.0;
                this.attack = 110;
                this.size = 12;
                this.color = '#7e22ce';
                this.isFlying = true;
                this.isBoss = true;
                this.traits.add('flying');
                this.traits.add('teleporter');
                this.traits.add('fireproof');
                break;
            case 'storm_dragon':
                this.name = 'Storm Lightning Wyrm';
                this.hp = 4000;
                this.maxHp = 4000;
                this.speed = 1.05;
                this.attack = 100;
                this.size = 12;
                this.color = '#06b6d4';
                this.isFlying = true;
                this.isBoss = true;
                this.traits.add('flying');
                this.traits.add('electrocharged');
                this.traits.add('fireproof');
                break;
            default:
                this.hp = 100;
                this.maxHp = 100;
                this.speed = 0.5;
                this.attack = 10;
                this.size = 2;
                this.color = '#ffffff';
                this.isCiv = false;
        }
    }

    applyCustomData(data) {
        if (data.name) this.name = data.name;
        if (data.color) this.color = data.color;
        if (data.hp) {
            this.maxHp = data.hp;
            this.hp = data.hp;
        }
        if (data.attack) this.attack = data.attack;
        if (data.speed) this.speed = data.speed;
        if (data.scale) this.scale = data.scale;
        if (data.traits && Array.isArray(data.traits)) {
            data.traits.forEach(t => this.traits.add(t));
        }
        if (data.ability) this.customAbility = data.ability;
        if (data.bodyParts) {
            this.bodyParts = { ...data.bodyParts };
        }
        if (data.colors) {
            this.colors = { ...data.colors };
            if (data.colors.primary) this.color = data.colors.primary;
        }
    }

    // Trait Management Methods
    hasTrait(trait) {
        return this.traits.has(trait);
    }

    addTrait(trait) {
        this.traits.add(trait);
        if (trait === 'titan') {
            this.scale = Math.max(2.0, this.scale * 1.8);
            this.maxHp *= 2;
            this.hp = this.maxHp;
            this.attack *= 1.5;
        } else if (trait === 'super_speed') {
            this.speed *= 2.0;
        } else if (trait === 'flying') {
            this.isFlying = true;
        } else if (trait === 'amphibious') {
            this.traits.add('water_walker');
            this.traits.add('fireproof');
        }
    }

    removeTrait(trait) {
        this.traits.delete(trait);
        if (trait === 'titan') {
            this.scale = Math.max(1.0, this.scale / 1.8);
            this.maxHp = Math.max(10, Math.floor(this.maxHp / 2));
            this.hp = Math.min(this.hp, this.maxHp);
            this.attack = Math.max(1, Math.floor(this.attack / 1.5));
        } else if (trait === 'super_speed') {
            this.speed = Math.max(0.2, this.speed / 2.0);
        } else if (trait === 'flying') {
            this.isFlying = false;
        }
    }

    toggleTrait(trait) {
        if (this.hasTrait(trait)) {
            this.removeTrait(trait);
            return false;
        } else {
            this.addTrait(trait);
            return true;
        }
    }

    equipWeapon(type) {
        this.weapon = type;
        if (type === 'sword') {
            this.attack = Math.max(this.attack, 35) + 15;
        } else if (type === 'bow') {
            this.attack = Math.max(this.attack, 25) + 10;
        } else if (type === 'blaster') {
            this.attack = Math.max(this.attack, 30) + 15;
        } else if (type === 'staff') {
            this.attack = Math.max(this.attack, 35) + 20;
        } else if (type === 'void_scythe') {
            this.attack = Math.max(this.attack, 40) + 25;
        } else if (type === 'laser_cannon') {
            this.attack = Math.max(this.attack, 45) + 30;
        } else if (type === 'galaxy_blade') {
            this.attack = Math.max(this.attack, 55) + 45;
        } else if (type === 'thunder_hammer') {
            this.attack = Math.max(this.attack, 50) + 35;
        } else if (type === 'flamethrower') {
            this.attack = Math.max(this.attack, 35) + 20;
        } else if (type === 'frost_wand') {
            this.attack = Math.max(this.attack, 35) + 20;
        } else if (type === 'chaos_mace') {
            this.attack = Math.max(this.attack, 45) + 30;
        } else if (type === 'shuriken') {
            this.attack = Math.max(this.attack, 30) + 15;
        } else if (type === 'plasma_rifle') {
            this.attack = Math.max(this.attack, 40) + 25;
        } else if (type === 'energy_shield') {
            this.attack = Math.max(this.attack, 30) + 15;
            this.maxHp += 150;
            this.hp = Math.min(this.maxHp, this.hp + 150);
            this.traits.add('thorny');
        } else if (type === 'poison_dagger') {
            this.attack = Math.max(this.attack, 35) + 20;
            this.traits.add('venomous');
        } else if (type === 'gravity_hammer') {
            this.attack = Math.max(this.attack, 50) + 40;
        } else if (type === 'storm_staff') {
            this.attack = Math.max(this.attack, 45) + 30;
            this.traits.add('electrocharged');
        } else if (type === 'grenade_launcher') {
            this.attack = Math.max(this.attack, 48) + 35;
        }
    }

    applyBlessing() {
        this.blessed = true;
        this.cursed = false;
        this.maxHp *= 2;
        this.hp = this.maxHp;
        this.speed *= 1.4;
        this.attack *= 2;
        this.addTrait('immortal');
    }

    applyCurse() {
        this.cursed = true;
        this.blessed = false;
        this.hp = Math.max(1, Math.floor(this.hp * 0.5));
        this.speed *= 0.7;
        this.attack = Math.max(1, Math.floor(this.attack * 0.5));
    }

    applyInfection() {
        if (this.infected || this.isBoss || this.isMythic || this.hasTrait('immortal')) return;
        this.infected = true;
    }

    takeDamage(amount, source = null) {
        if (!this.active || this.isDying) return false;
        if (this.blessed && Math.random() < 0.3) return false;
        if (this.hasTrait('immortal') && Math.random() < 0.5) return false;

        // Visual Hit Flash
        this.hitFlash = 3;

        // Combat Hit SFX
        const isCrit = amount >= (source && source.attack ? source.attack * 1.3 : 38);
        if (window.game && window.game.audio) {
            window.game.audio.playHitSound(isCrit);
        }

        // Spawn Floating Combat Damage Indicator
        const em = this.entityManager || (typeof window !== 'undefined' && window.game ? window.game.entityManager : null);
        if (em) {
            const displayDmg = Math.max(1, Math.round(amount));
            const dmgCol = isCrit ? '#f59e0b' : '#ef4444';
            const dmgText = isCrit ? `CRIT! ${displayDmg}` : `-${displayDmg}`;
            em.addFloatingText(this.x, this.y - (this.size * this.scale) - 3, dmgText, dmgCol, isCrit);
        }

        // Thorny: Reflect 35% of incoming melee damage
        if (this.hasTrait('thorny') && source && source !== this && typeof source.takeDamage === 'function') {
            source.takeDamage(amount * 0.35);
        }

        // Acid blood: Spray corrosive acid droplets when wounded
        if (this.hasTrait('acid_blood') && window.game && window.game.particleSystem) {
            window.game.particleSystem.burst(this.x, this.y, 6, ['#84cc16', '#a3e635', '#4d7c0f'], 1.5, 3.5, 1, 2, 'acid');
        }

        // Teleporter: Chance to warp short distance away when hit
        if (this.hasTrait('teleporter') && Math.random() < 0.4 && window.game && window.game.world) {
            const w = window.game.world;
            this.x = Math.max(4, Math.min(w.width - 4, this.x + (Math.random() - 0.5) * 28));
            this.y = Math.max(4, Math.min(w.height - 4, this.y + (Math.random() - 0.5) * 28));
            if (window.game.particleSystem) {
                window.game.particleSystem.burst(this.x, this.y, 10, ['#a855f7', '#6366f1', '#ffffff'], 1.5, 3, 1, 2, 'stardust');
            }
        }

        this.hp -= amount;
        if (this.hp <= 0) {
            this.hp = 0;
            if (source && source.kills !== undefined) source.kills++;
            this.startDying(source);
            return true; // died
        }
        return false;
    }

    startDying(killer = null) {
        if (this.isDying) return;
        this.isDying = true;
        this.killer = killer;

        if (this.type === 'duck') {
            this.deathTimer = 22;
            this.deathType = 'duck_explode';
        } else if (this.isBoss || this.isMythic) {
            this.deathTimer = 45;
            this.deathType = 'boss';
        } else if (this.type === 'evermean') {
            this.deathTimer = 36;
            this.deathType = 'evermean';
        } else if (this.type === 'colossus_mech') {
            this.deathTimer = 36;
            this.deathType = 'colossus_mech';
        } else if (this.type === 'seraph_angel') {
            this.deathTimer = 36;
            this.deathType = 'seraph_angel';
        } else if (this.type === 'dragon' || this.type === 'dune_leviathan' || this.type === 'golden_dragon' || this.type === 'frost_dragon' || this.type === 'shadow_dragon' || this.type === 'storm_dragon') {
            this.deathTimer = 40;
            this.deathType = 'dragon';
        } else if (this.type === 'trex' || this.type === 'brachiosaurus' || this.type === 'triceratops' || this.type === 'velociraptor' || this.type === 'pterodactyl') {
            this.deathTimer = 38;
            this.deathType = 'dino';
        } else if (this.type === 'skeleton' || this.type === 'zombie') {
            this.deathTimer = 22;
            this.deathType = 'undead';
        } else {
            this.deathTimer = 28;
            this.deathType = 'humanoid';
        }
        this.maxDeathTimer = this.deathTimer;

        if (window.game && window.game.audio) {
            window.game.audio.playDeathSound(this.type, this.isBoss || this.isMythic);
        }
    }

    finalizeDeath(world, disasterManager, particleSystem, audio, entityManager = null) {
        this.active = false;
        const em = entityManager || this.entityManager || (typeof window !== 'undefined' && window.game ? window.game.entityManager : null);

        // Explosive death: Detonates in a huge explosion when slain
        if (this.hasTrait('explosive_death') && disasterManager) {
            disasterManager.triggerExplosion(this.x, this.y, 16, 1.5, world, em, particleSystem, audio);
        }
        if (this.deathType === 'duck_explode' && particleSystem) {
            particleSystem.burst(this.x, this.y, 30, ['#facc15', '#fef08a', '#ffffff', '#f97316'], 2, 6, 2, 4, 'stardust');
        }

        // Splitter: Spawns 2 smaller miniature clones upon demise
        if (this.hasTrait('splitter') && this.scale >= 0.7 && em) {
            for (let s = 0; s < 2; s++) {
                const clone = em.clone(this);
                if (clone) {
                    clone.active = true;
                    clone.isDying = false;
                    clone.scale = this.scale * 0.6;
                    clone.maxHp = Math.max(30, Math.floor(this.maxHp * 0.5));
                    clone.hp = clone.maxHp;
                    clone.traits.delete('splitter'); // Avoid endless cascading splits
                }
            }
        }

        // Necromancer: Killer raises slain foe as a zombie
        if (this.killer && this.killer.hasTrait && this.killer.hasTrait('necromancer') && em) {
            em.spawn('zombie', this.x, this.y);
        } else if (this.infected && em) {
            em.spawn('zombie', this.x, this.y);
        }

        // Add lingering corpse remains to entity manager
        if (em) {
            em.addCorpse(this);
        }
    }

    // ==========================================
    // PLAYER POSSESSION & BOSS ABILITIES
    // ==========================================

    usePrimaryAbility(targetX, targetY, world, entityManager, particleSystem, audio) {
        if (this.abilityCooldown > 0) return;
        this.abilityCooldown = 15;

        const dx = targetX - this.x;
        const dy = targetY - this.y;
        const dist = Math.hypot(dx, dy) || 1;
        const dirX = dx / dist;
        const dirY = dy / dist;

        // 1. Equipped Weapon Attacks
        if (this.weapon === 'sword') {
            if (audio) audio.playClick();
            const target = entityManager.findNearestEntity(this, (other) => other.id !== this.id);
            if (target && Math.hypot(target.x - this.x, target.y - this.y) < (this.size * this.scale + 12)) {
                target.takeDamage(this.attack * 1.5, this);
                if (particleSystem) particleSystem.burst(target.x, target.y, 8, ['#ff4500', '#f59e0b', '#ffffff'], 1.5, 3, 1.5, 2, 'fire');
            }
            return;
        } else if (this.weapon === 'bow') {
            if (audio) audio.playClick();
            entityManager.projectiles.push(new Projectile(this.x, this.y, dirX * 6.5, dirY * 6.5, 'arrow', this.id, this.attack));
            return;
        } else if (this.weapon === 'blaster') {
            if (audio) audio.playLaser();
            entityManager.projectiles.push(new Projectile(this.x, this.y, dirX * 8, dirY * 8, 'laser', this.id, this.attack));
            return;
        } else if (this.weapon === 'staff') {
            if (audio) audio.playMagic();
            entityManager.projectiles.push(new Projectile(this.x, this.y, dirX * 5.5, dirY * 5.5, 'laser', this.id, this.attack));
            if (particleSystem) particleSystem.burst(this.x, this.y, 10, ['#a855f7', '#38bdf8'], 1, 3, 1, 2, 'stardust');
            return;
        } else if (this.weapon === 'void_scythe') {
            if (audio) audio.playMagic();
            const target = entityManager.findNearestEntity(this, (other) => other.id !== this.id);
            if (target && Math.hypot(target.x - this.x, target.y - this.y) < (this.size * this.scale + 16)) {
                target.takeDamage(this.attack * 1.8, this);
                this.hp = Math.min(this.maxHp, this.hp + this.attack * 0.5);
                if (particleSystem) particleSystem.burst(target.x, target.y, 14, ['#7e22ce', '#3b0764', '#c084fc'], 2, 4, 1.5, 3, 'stardust');
            }
            return;
        } else if (this.weapon === 'laser_cannon') {
            if (audio) audio.playLaser();
            entityManager.projectiles.push(new Projectile(this.x - 3, this.y, dirX * 9, dirY * 9, 'laser', this.id, this.attack * 0.7));
            entityManager.projectiles.push(new Projectile(this.x + 3, this.y, dirX * 9, dirY * 9, 'laser', this.id, this.attack * 0.7));
            return;
        } else if (this.weapon === 'galaxy_blade') {
            if (audio) audio.playMagic();
            entityManager.projectiles.push(new Projectile(this.x, this.y, dirX * 8, dirY * 8, 'laser', this.id, this.attack));
            if (particleSystem) particleSystem.burst(this.x, this.y, 12, ['#38bdf8', '#facc15', '#ffffff'], 2, 4, 1.5, 2.5, 'stardust');
            return;
        } else if (this.weapon === 'thunder_hammer') {
            if (audio && typeof audio.playThunder === 'function') audio.playThunder();
            if (typeof window !== 'undefined' && window.game && typeof window.game.shakeCamera === 'function') window.game.shakeCamera(12, 18);
            if (particleSystem) particleSystem.burst(this.x + dirX * 10, this.y + dirY * 10, 20, ['#38bdf8', '#facc15', '#ffffff'], 2, 5, 2, 4, 'spark');
            const target = entityManager.findNearestEntity(this, (other) => other.id !== this.id);
            if (target && Math.hypot(target.x - this.x, target.y - this.y) < (this.size * this.scale + 22)) {
                target.takeDamage(this.attack * 1.6, this);
            }
            if (entityManager.damageBuildingsInRadius) {
                entityManager.damageBuildingsInRadius(this.x + dirX * 10, this.y + dirY * 10, 16, this.attack * 1.5, world, particleSystem, audio);
            }
            return;
        } else if (this.weapon === 'flamethrower') {
            if (audio && typeof audio.playClick === 'function') audio.playClick();
            for (let i = 0; i < 3; i++) {
                const spread = (Math.random() - 0.5) * 0.4;
                const fx = dirX * Math.cos(spread) - dirY * Math.sin(spread);
                const fy = dirX * Math.sin(spread) + dirY * Math.cos(spread);
                entityManager.projectiles.push(new Projectile(this.x, this.y, fx * 6, fy * 6, 'fireball', this.id, this.attack * 0.45));
            }
            if (particleSystem) particleSystem.burst(this.x + dirX * 4, this.y + dirY * 4, 10, ['#f97316', '#ef4444', '#facc15'], 1.5, 4, 1.5, 3, 'fire');
            return;
        } else if (this.weapon === 'frost_wand') {
            if (audio && typeof audio.playMagic === 'function') audio.playMagic();
            entityManager.projectiles.push(new Projectile(this.x, this.y, dirX * 7, dirY * 7, 'frost', this.id, this.attack * 0.7));
            if (particleSystem) particleSystem.burst(this.x, this.y, 8, ['#a5f3fc', '#ffffff', '#38bdf8'], 1.5, 3.5, 1, 2, 'spark');
            return;
        } else if (this.weapon === 'chaos_mace') {
            if (audio && typeof audio.playExplosion === 'function') audio.playExplosion(1.0);
            if (particleSystem) particleSystem.burst(this.x + dirX * 12, this.y + dirY * 12, 16, ['#ef4444', '#f97316', '#000000'], 2, 4, 1.5, 3, 'fire');
            const target = entityManager.findNearestEntity(this, (other) => other.id !== this.id);
            if (target && Math.hypot(target.x - this.x, target.y - this.y) < (this.size * this.scale + 18)) {
                target.takeDamage(this.attack * 1.5, this);
            }
            if (entityManager.damageBuildingsInRadius) {
                entityManager.damageBuildingsInRadius(this.x + dirX * 12, this.y + dirY * 12, 14, this.attack * 1.4, world, particleSystem, audio);
            }
            return;
        } else if (this.weapon === 'shuriken') {
            if (audio && typeof audio.playClick === 'function') audio.playClick();
            for (let a = -0.25; a <= 0.25; a += 0.25) {
                const sx = dirX * Math.cos(a) - dirY * Math.sin(a);
                const sy = dirX * Math.sin(a) + dirY * Math.cos(a);
                entityManager.projectiles.push(new Projectile(this.x, this.y, sx * 8.5, sy * 8.5, 'arrow', this.id, this.attack * 0.55));
            }
            if (particleSystem) particleSystem.burst(this.x, this.y, 6, ['#cbd5e1', '#ffffff'], 1, 3, 1, 2);
            return;
        } else if (this.weapon === 'plasma_rifle') {
            if (audio) audio.playLaser();
            entityManager.projectiles.push(new Projectile(this.x - 2, this.y, dirX * 9, dirY * 9, 'laser', this.id, this.attack * 0.55));
            entityManager.projectiles.push(new Projectile(this.x + 2, this.y, dirX * 9, dirY * 9, 'laser', this.id, this.attack * 0.55));
            if (particleSystem) particleSystem.burst(this.x + dirX * 3, this.y + dirY * 3, 6, ['#00e5ff', '#38bdf8', '#ffffff'], 1.2, 3, 1, 2);
            return;
        } else if (this.weapon === 'energy_shield') {
            if (audio) audio.playClick();
            if (particleSystem) particleSystem.burst(this.x + dirX * 4, this.y + dirY * 4, 12, ['#38bdf8', '#67e8f9', '#ffffff'], 1.5, 4, 1.5, 3, 'spark');
            const target = entityManager.findNearestEntity(this, (o) => o.id !== this.id);
            if (target && Math.hypot(target.x - this.x, target.y - this.y) < (this.size * this.scale + 14)) {
                target.takeDamage(this.attack * 1.3, this);
                target.x += dirX * 8;
                target.y += dirY * 8;
            }
            return;
        } else if (this.weapon === 'poison_dagger') {
            if (audio) audio.playSplash();
            const target = entityManager.findNearestEntity(this, (o) => o.id !== this.id);
            if (target && Math.hypot(target.x - this.x, target.y - this.y) < (this.size * this.scale + 12)) {
                target.takeDamage(this.attack * 1.4, this);
                target.infected = true;
                if (particleSystem) particleSystem.burst(target.x, target.y, 8, ['#84cc16', '#4ade80', '#15803d'], 1, 3, 1, 2, 'acid');
            }
            return;
        } else if (this.weapon === 'gravity_hammer') {
            if (audio && typeof audio.playThunder === 'function') audio.playThunder();
            if (window.game && window.game.shakeCamera) window.game.shakeCamera(10, 16);
            if (particleSystem) particleSystem.burst(this.x + dirX * 8, this.y + dirY * 8, 22, ['#a855f7', '#6366f1', '#ffffff'], 2, 6, 2, 4, 'spark');
            for (let i = 0; i < entityManager.entities.length; i++) {
                const other = entityManager.entities[i];
                if (!other.active || other.id === this.id) continue;
                if (Math.hypot(other.x - (this.x + dirX * 8), other.y - (this.y + dirY * 8)) < 24) {
                    other.takeDamage(this.attack * 1.6, this);
                    other.y -= 12;
                    other.x += dirX * 8;
                }
            }
            return;
        } else if (this.weapon === 'storm_staff') {
            if (audio && typeof audio.playThunder === 'function') audio.playThunder();
            for (let a = -0.3; a <= 0.3; a += 0.3) {
                const sx = dirX * Math.cos(a) - dirY * Math.sin(a);
                const sy = dirX * Math.sin(a) + dirY * Math.cos(a);
                entityManager.projectiles.push(new Projectile(this.x, this.y, sx * 8, sy * 8, 'laser', this.id, this.attack * 0.7));
            }
            if (particleSystem) particleSystem.burst(this.x, this.y, 14, ['#facc15', '#38bdf8', '#ffffff'], 2, 5, 1.5, 3, 'spark');
            return;
        } else if (this.weapon === 'grenade_launcher') {
            if (audio) audio.playExplosion(1.0);
            entityManager.projectiles.push(new Projectile(this.x, this.y, dirX * 6, dirY * 6, 'fireball', this.id, this.attack));
            if (particleSystem) particleSystem.burst(this.x + dirX * 3, this.y + dirY * 3, 8, ['#f97316', '#475569'], 1, 3, 1, 2);
            return;
        }

        if (this.type === 'duck') {
            // Quack Blast!
            if (audio && typeof audio.playQuackSound === 'function') audio.playQuackSound();
            if (particleSystem) {
                particleSystem.burst(this.x, this.y, 25, ['#facc15', '#ffffff', '#38bdf8'], 2, 5, 1.5, 3, 'stardust');
            }
            for (let i = 0; i < entityManager.entities.length; i++) {
                const other = entityManager.entities[i];
                if (!other.active || other.id === this.id) continue;
                const dist = Math.hypot(other.x - this.x, other.y - this.y);
                if (dist < 32) {
                    other.takeDamage(this.attack, this);
                    const ang = Math.atan2(other.y - this.y, other.x - this.x);
                    other.x += Math.cos(ang) * 14;
                    other.y += Math.sin(ang) * 14;
                }
            }
            return;
        } else if (this.type === 'crystal_golem') {
            // Refracted Prismatic Laser Beam
            if (audio && typeof audio.playLaser === 'function') audio.playLaser();
            for (let a = -0.3; a <= 0.3; a += 0.3) {
                const rx = dirX * Math.cos(a) - dirY * Math.sin(a);
                const ry = dirX * Math.sin(a) + dirY * Math.cos(a);
                entityManager.projectiles.push(new Projectile(this.x, this.y, rx * 7, ry * 7, 'laser', this.id, this.attack * 0.7));
            }
            if (particleSystem) particleSystem.burst(this.x, this.y, 12, ['#ec4899', '#f472b6', '#ffffff'], 2, 4, 1.5, 3, 'spark');
            return;
        } else if (this.type === 'shadow_assassin') {
            // Shadow Dash Strike
            if (audio && typeof audio.playClick === 'function') audio.playClick();
            this.x += dirX * 12;
            this.y += dirY * 12;
            if (particleSystem) particleSystem.burst(this.x, this.y, 16, ['#1e1b4b', '#475569', '#000000'], 1.5, 4, 1, 2, 'smoke');
            for (let i = 0; i < entityManager.entities.length; i++) {
                const other = entityManager.entities[i];
                if (!other.active || other.id === this.id) continue;
                if (Math.hypot(other.x - this.x, other.y - this.y) < 16) {
                    other.takeDamage(this.attack * 1.8, this);
                }
            }
            return;
        } else if (this.type === 'frog') {
            // Tongue Lash Pull
            if (audio && typeof audio.playClick === 'function') audio.playClick();
            entityManager.projectiles.push(new Projectile(this.x, this.y, dirX * 7.5, dirY * 7.5, 'arrow', this.id, this.attack));
            if (particleSystem) particleSystem.burst(this.x + dirX * 4, this.y + dirY * 4, 6, ['#22c55e', '#86efac', '#ffffff'], 1, 2.5, 1, 2);
            return;
        } else if (this.type === 'cyber_ninja') {
            // Cyber Energy Slash Dash
            if (audio && typeof audio.playLaser === 'function') audio.playLaser();
            this.x += dirX * 12;
            this.y += dirY * 12;
            if (particleSystem) particleSystem.burst(this.x, this.y, 18, ['#06b6d4', '#38bdf8', '#ffffff'], 1.5, 4, 1.2, 2.5, 'spark');
            const target = entityManager.findNearestEntity(this, (o) => o.id !== this.id);
            if (target && Math.hypot(target.x - this.x, target.y - this.y) < 18) {
                target.takeDamage(this.attack * 1.6, this);
            }
            return;
        } else if (this.type === 'laser_shark') {
            // Twin Dorsal Laser Cannons
            if (audio && typeof audio.playLaser === 'function') audio.playLaser();
            entityManager.projectiles.push(new Projectile(this.x - 2, this.y, dirX * 8, dirY * 8, 'laser', this.id, this.attack * 0.7));
            entityManager.projectiles.push(new Projectile(this.x + 2, this.y, dirX * 8, dirY * 8, 'laser', this.id, this.attack * 0.7));
            if (particleSystem) particleSystem.burst(this.x, this.y, 8, ['#0284c7', '#38bdf8'], 1.2, 3, 1, 2);
            return;
        } else if (this.type === 'frost_wolf') {
            // Glacial Dire Bite
            if (audio && typeof audio.playClick === 'function') audio.playClick();
            this.x += dirX * 8;
            this.y += dirY * 8;
            const target = entityManager.findNearestEntity(this, (o) => o.id !== this.id);
            if (target && Math.hypot(target.x - this.x, target.y - this.y) < 16) {
                target.takeDamage(this.attack * 1.5, this);
                target.frozen = 45;
                if (particleSystem) particleSystem.burst(target.x, target.y, 10, ['#a5f3fc', '#ffffff', '#38bdf8'], 1.5, 3.5, 1, 2, 'spark');
            }
            return;
        } else if (this.type === 'sand_scorpion') {
            // Pincer Slash & Venom Dart
            if (audio && typeof audio.playSplash === 'function') audio.playSplash();
            entityManager.projectiles.push(new Projectile(this.x, this.y, dirX * 6, dirY * 6, 'acid', this.id, this.attack * 0.8));
            const target = entityManager.findNearestEntity(this, (o) => o.id !== this.id);
            if (target && Math.hypot(target.x - this.x, target.y - this.y) < 14) {
                target.takeDamage(this.attack, this);
                target.infected = true;
            }
            return;
        } else if (this.type === 'necromancer') {
            // Shadow Death Bolt
            if (audio && typeof audio.playMagic === 'function') audio.playMagic();
            entityManager.projectiles.push(new Projectile(this.x, this.y, dirX * 6.5, dirY * 6.5, 'laser', this.id, this.attack));
            if (particleSystem) particleSystem.burst(this.x, this.y, 10, ['#4c1d95', '#a855f7', '#000000'], 1.5, 3.5, 1.2, 2.5, 'stardust');
            return;
        } else if (this.type === 'valkyrie') {
            // Radiant Holy Spear
            if (audio && typeof audio.playMagic === 'function') audio.playMagic();
            entityManager.projectiles.push(new Projectile(this.x, this.y, dirX * 8, dirY * 8, 'laser', this.id, this.attack));
            if (particleSystem) particleSystem.burst(this.x, this.y, 12, ['#fef08a', '#facc15', '#ffffff'], 1.5, 4, 1.2, 3, 'stardust');
            return;
        } else if (this.type === 'gargoyle') {
            // Aerial Stone Dive Swoop
            if (audio && typeof audio.playClick === 'function') audio.playClick();
            this.x += dirX * 10;
            this.y += dirY * 10;
            const target = entityManager.findNearestEntity(this, (o) => o.id !== this.id);
            if (target && Math.hypot(target.x - this.x, target.y - this.y) < 16) {
                target.takeDamage(this.attack * 1.5, this);
                if (particleSystem) particleSystem.burst(target.x, target.y, 8, ['#64748b', '#475569', '#334155'], 1.2, 3, 1, 2);
            }
            return;
        } else if (this.type === 'mecha_rex') {
            // Cyber Laser Chomp & Incendiary Blast
            if (audio && typeof audio.playLaser === 'function') audio.playLaser();
            entityManager.projectiles.push(new Projectile(this.x - 3, this.y, dirX * 8, dirY * 8, 'laser', this.id, this.attack * 0.6));
            entityManager.projectiles.push(new Projectile(this.x + 3, this.y, dirX * 8, dirY * 8, 'laser', this.id, this.attack * 0.6));
            entityManager.projectiles.push(new Projectile(this.x, this.y, dirX * 6, dirY * 6, 'fireball', this.id, this.attack * 0.5));
            if (particleSystem) particleSystem.burst(this.x + dirX * 5, this.y + dirY * 5, 12, ['#38bdf8', '#f97316', '#475569'], 2, 4, 1.5, 3);
            return;
        } else if (this.type === 'golden_dragon') {
            // Golden Starlight Breath Barrage
            if (audio && typeof audio.playLaser === 'function') audio.playLaser();
            for (let b = -1; b <= 1; b++) {
                const ang = Math.atan2(dirY, dirX) + b * 0.2;
                entityManager.projectiles.push(new Projectile(this.x, this.y, Math.cos(ang) * 7, Math.sin(ang) * 7, 'laser', this.id, this.attack * 0.8));
            }
            if (particleSystem) particleSystem.burst(this.x + dirX * 4, this.y + dirY * 4, 14, ['#facc15', '#fef08a', '#ffffff'], 2, 5, 1.5, 3, 'stardust');
            return;
        } else if (this.type === 'space_worm') {
            // Cosmic Void Spit
            if (audio && typeof audio.playSingularity === 'function') audio.playSingularity();
            entityManager.projectiles.push(new Projectile(this.x, this.y, dirX * 6, dirY * 6, 'laser', this.id, this.attack));
            if (particleSystem) particleSystem.burst(this.x, this.y, 10, ['#8b5cf6', '#c084fc', '#ffffff'], 1.5, 4, 1.5, 3, 'stardust');
            return;
        } else if (this.type === 'goblin') {
            // Venom Dagger Stab
            if (audio && typeof audio.playClick === 'function') audio.playClick();
            const target = entityManager.findNearestEntity(this, (o) => o.id !== this.id);
            if (target && Math.hypot(target.x - this.x, target.y - this.y) < 14) {
                target.takeDamage(this.attack * 1.5, this);
                target.infected = true;
                if (particleSystem) particleSystem.burst(target.x, target.y, 6, ['#84cc16', '#15803d'], 1, 2.5, 1, 2, 'acid');
            }
            return;
        } else if (this.type === 'pirate_ship') {
            // Twin Artillery Cannon Fire
            if (audio && typeof audio.playCannonFire === 'function') audio.playCannonFire();
            else if (audio) audio.playExplosion(1.3);
            for (let b = -1; b <= 1; b += 2) {
                const ang = Math.atan2(dirY, dirX) + b * 0.25;
                entityManager.projectiles.push(new Projectile(this.x, this.y, Math.cos(ang) * 6, Math.sin(ang) * 6, 'fireball', this.id, this.attack * 0.8));
            }
            if (particleSystem) particleSystem.burst(this.x, this.y, 12, ['#78350f', '#f97316', '#475569'], 2, 4, 1.5, 3);
            return;
        } else if (this.type === 'trex') {
            // Apex Bone-Crushing Bite & Lunge
            if (audio && typeof audio.playBiteChomp === 'function') audio.playBiteChomp();
            else if (audio && typeof audio.playRoar === 'function') audio.playRoar();
            if (window.game) window.game.shakeCamera(7, 14);
            this.vx += dirX * 3.8;
            this.vy += dirY * 3.8;
            for (let i = 0; i < entityManager.entities.length; i++) {
                const target = entityManager.entities[i];
                if (!target.active || target.id === this.id) continue;
                if (Math.hypot(target.x - (this.x + dirX * 10), target.y - (this.y + dirY * 10)) < 18) {
                    target.takeDamage(this.attack * 1.4, this);
                    target.vx += dirX * 6;
                    target.vy += dirY * 6;
                    if (particleSystem) particleSystem.burst(target.x, target.y, 10, ['#dc2626', '#991b1b', '#ffffff'], 1.5, 3.5, 1, 2, 'blood');
                }
            }
            return;
        } else if (this.type === 'triceratops') {
            // Horn Gore Charge & Bulldoze
            if (audio && typeof audio.playRoar === 'function') audio.playRoar();
            if (window.game) window.game.shakeCamera(8, 15);
            this.vx += dirX * 4.2;
            this.vy += dirY * 4.2;
            for (let i = 0; i < entityManager.entities.length; i++) {
                const target = entityManager.entities[i];
                if (!target.active || target.id === this.id) continue;
                if (Math.hypot(target.x - (this.x + dirX * 8), target.y - (this.y + dirY * 8)) < 16) {
                    target.takeDamage(this.attack * 1.25, this);
                    target.vx += dirX * 8;
                    target.vy += dirY * 8;
                    if (particleSystem) particleSystem.burst(target.x, target.y, 8, ['#b45309', '#78350f', '#ffffff'], 1.5, 3.5, 1, 2);
                }
            }
            return;
        } else if (this.type === 'velociraptor') {
            // Sickle Claw Leaping Pounce
            if (audio && typeof audio.playSlash === 'function') audio.playSlash();
            this.vx += dirX * 5.5;
            this.vy += dirY * 5.5;
            for (let i = 0; i < entityManager.entities.length; i++) {
                const target = entityManager.entities[i];
                if (!target.active || target.id === this.id) continue;
                if (Math.hypot(target.x - (this.x + dirX * 6), target.y - (this.y + dirY * 6)) < 14) {
                    target.takeDamage(this.attack * 1.3, this);
                    target.vx += dirX * 4;
                    target.vy += dirY * 4;
                    if (particleSystem) particleSystem.burst(target.x, target.y, 8, ['#dc2626', '#facc15'], 1.2, 3, 1, 2, 'blood');
                }
            }
            return;
        } else if (this.type === 'pterodactyl') {
            // Dive Bomb Talons & Aerial Gust
            if (audio && typeof audio.playPterosaurScreech === 'function') audio.playPterosaurScreech();
            this.vx += dirX * 5.0;
            this.vy += dirY * 5.0;
            for (let i = 0; i < entityManager.entities.length; i++) {
                const target = entityManager.entities[i];
                if (!target.active || target.id === this.id) continue;
                if (Math.hypot(target.x - (this.x + dirX * 8), target.y - (this.y + dirY * 8)) < 15) {
                    target.takeDamage(this.attack, this);
                    target.vx += dirX * 5;
                    target.vy += dirY * 5;
                    if (particleSystem) particleSystem.burst(target.x, target.y, 6, ['#38bdf8', '#ffffff'], 1, 3, 1, 2);
                }
            }
            return;
        } else if (this.type === 'brachiosaurus') {
            // Columnar Foot Stomp Shockwave
            if (audio && typeof audio.playExplosion === 'function') audio.playExplosion(1.6);
            if (window.game) window.game.shakeCamera(14, 22);
            if (particleSystem) particleSystem.burst(this.x, this.y, 25, ['#3f6212', '#78350f', '#475569'], 2, 5, 1.5, 3);
            for (let i = 0; i < entityManager.entities.length; i++) {
                const target = entityManager.entities[i];
                if (!target.active || target.id === this.id) continue;
                const d = Math.hypot(target.x - this.x, target.y - this.y);
                if (d < 30) {
                    target.takeDamage(this.attack, this);
                    const ang = Math.atan2(target.y - this.y, target.x - this.x);
                    target.vx += Math.cos(ang) * 9;
                    target.vy += Math.sin(ang) * 9;
                }
            }
            return;
        } else if (this.type === 'frost_dragon') {
            // Glacial Frost Breath Stream
            if (audio && typeof audio.playFrostBreath === 'function') audio.playFrostBreath();
            for (let b = -1; b <= 1; b++) {
                const ang = Math.atan2(dirY, dirX) + b * 0.18;
                entityManager.projectiles.push(new Projectile(this.x, this.y, Math.cos(ang) * 6.5, Math.sin(ang) * 6.5, 'frost', this.id, this.attack * 0.7));
            }
            // Freeze water along breath path
            for (let step = 3; step < 20; step += 4) {
                const mx = Math.floor(this.x + dirX * step);
                const my = Math.floor(this.y + dirY * step);
                if (world.inBounds(mx, my)) {
                    const t = world.getTile(mx, my);
                    if (t === TILES.WATER || t === TILES.DEEP_WATER) world.setTile(mx, my, TILES.ICE);
                    else if (t === TILES.GRASS || t === TILES.SOIL) world.setTile(mx, my, TILES.SNOW);
                }
            }
            if (particleSystem) particleSystem.burst(this.x + dirX * 6, this.y + dirY * 6, 16, ['#38bdf8', '#a5f3fc', '#ffffff'], 2, 5, 1.5, 3, 'spark');
            return;
        } else if (this.type === 'shadow_dragon') {
            // Netherflame Void Beam
            if (audio && typeof audio.playShadowBreath === 'function') audio.playShadowBreath();
            for (let b = -1; b <= 1; b++) {
                const ang = Math.atan2(dirY, dirX) + b * 0.18;
                entityManager.projectiles.push(new Projectile(this.x, this.y, Math.cos(ang) * 7.0, Math.sin(ang) * 7.0, 'laser', this.id, this.attack * 0.75));
            }
            for (let step = 3; step < 20; step += 4) {
                const mx = Math.floor(this.x + dirX * step);
                const my = Math.floor(this.y + dirY * step);
                if (world.inBounds(mx, my) && world.getTile(mx, my) !== TILES.BEDROCK) {
                    if (Math.random() < 0.4) world.setTile(mx, my, TILES.ASH);
                }
            }
            if (particleSystem) particleSystem.burst(this.x + dirX * 6, this.y + dirY * 6, 16, ['#7e22ce', '#a855f7', '#0f051d'], 2, 5, 1.5, 3, 'stardust');
            return;
        } else if (this.type === 'storm_dragon') {
            // Chain Lightning Breath
            if (audio && typeof audio.playLightningBreath === 'function') audio.playLightningBreath();
            for (let b = -1; b <= 1; b++) {
                const ang = Math.atan2(dirY, dirX) + b * 0.22;
                entityManager.projectiles.push(new Projectile(this.x, this.y, Math.cos(ang) * 8.0, Math.sin(ang) * 8.0, 'plasma', this.id, this.attack * 0.8));
            }
            if (particleSystem) particleSystem.burst(this.x + dirX * 6, this.y + dirY * 6, 18, ['#06b6d4', '#facc15', '#ffffff'], 2, 6, 1.5, 3, 'spark');
            return;
        } else if (this.type === 'crabzilla') {
            // Twin Eye Lasers!
            if (audio) audio.playLaser();
            entityManager.projectiles.push(new Projectile(this.x - 3, this.y - 2, dirX * 5, dirY * 5, 'laser', this.id, this.attack * 0.8));
            entityManager.projectiles.push(new Projectile(this.x + 3, this.y - 2, dirX * 5, dirY * 5, 'laser', this.id, this.attack * 0.8));
            if (particleSystem) {
                particleSystem.burst(this.x, this.y, 10, ['#00e5ff', '#ffffff'], 2, 4, 1.5, 3);
            }
        } else if (this.type === 'kaiju') {
            // Atomic Breath Stream
            if (audio) audio.playLaser();
            for (let i = 0; i < 3; i++) {
                const spd = 4 + i * 0.5;
                entityManager.projectiles.push(new Projectile(this.x, this.y, dirX * spd, dirY * spd, 'laser', this.id, this.attack * 0.5));
            }
            // Melt ground along path
            for (let step = 2; step < 16; step += 3) {
                const mx = Math.floor(this.x + dirX * step);
                const my = Math.floor(this.y + dirY * step);
                if (world.inBounds(mx, my) && world.getTile(mx, my) !== TILES.BEDROCK) {
                    world.setTile(mx, my, TILES.LAVA);
                }
            }
        } else if (this.type === 'dragon') {
            // Dragon Flamethrower Breath Stream
            if (audio) audio.playExplosion(0.7);
            for (let b = -1; b <= 1; b++) {
                const ang = Math.atan2(dirY, dirX) + b * 0.18;
                entityManager.projectiles.push(new Projectile(this.x, this.y, Math.cos(ang) * 5.5, Math.sin(ang) * 5.5, 'fireball', this.id, this.attack * 0.8));
            }
            if (particleSystem) particleSystem.burst(this.x + dirX * 4, this.y + dirY * 4, 10, ['#ef4444', '#f97316', '#fbbf24'], 2, 4, 1.5, 3, 'fire');
        } else if (this.type === 'phoenix') {
            // Phoenix Solar Fireball
            if (audio) audio.playExplosion(0.8);
            entityManager.projectiles.push(new Projectile(this.x, this.y, dirX * 4, dirY * 4, 'fireball', this.id, this.attack));
        } else if (this.type === 'frost_titan') {
            // Frost Shards
            if (audio) audio.playClick();
            entityManager.projectiles.push(new Projectile(this.x, this.y, dirX * 4.5, dirY * 4.5, 'frost', this.id, this.attack));
        } else if (this.type === 'galaxy_guardian') {
            // Cosmic Stardust Ray Barrage
            if (audio) audio.playLaser();
            for (let b = -1; b <= 1; b++) {
                const ang = Math.atan2(dirY, dirX) + b * 0.2;
                entityManager.projectiles.push(new Projectile(this.x, this.y, Math.cos(ang) * 6, Math.sin(ang) * 6, 'laser', this.id, this.attack));
            }
            if (particleSystem) particleSystem.burst(this.x, this.y, 15, ['#a855f7', '#38bdf8', '#ffffff'], 2, 5, 1.5, 3, 'stardust');
        } else if (this.type === 'tank') {
            // Heavy Explosive Tank Cannon
            if (audio) audio.playExplosion(1.3);
            entityManager.projectiles.push(new Projectile(this.x + dirX * 3, this.y + dirY * 3, dirX * 6, dirY * 6, 'fireball', this.id, this.attack));
            if (particleSystem) particleSystem.burst(this.x + dirX * 3, this.y + dirY * 3, 8, ['#ff9800', '#424242'], 1, 3, 1, 2);
        } else if (this.type === 'warship') {
            // Triple Artillery Broadside
            if (audio) audio.playExplosion(1.5);
            for (let b = -1; b <= 1; b++) {
                const ang = Math.atan2(dirY, dirX) + b * 0.15;
                entityManager.projectiles.push(new Projectile(this.x, this.y, Math.cos(ang) * 5.5, Math.sin(ang) * 5.5, 'fireball', this.id, this.attack * 0.7));
            }
        } else if (this.type === 'helicopter') {
            // Twin Vulcan Machine Gun
            if (audio) audio.playClick();
            entityManager.projectiles.push(new Projectile(this.x - 2, this.y, dirX * 7, dirY * 7, 'arrow', this.id, this.attack * 0.5));
            entityManager.projectiles.push(new Projectile(this.x + 2, this.y, dirX * 7, dirY * 7, 'arrow', this.id, this.attack * 0.5));
        } else if (this.type === 'starfighter') {
            // Twin Photon Lasers
            if (audio) audio.playLaser();
            entityManager.projectiles.push(new Projectile(this.x - 2, this.y, dirX * 8, dirY * 8, 'laser', this.id, this.attack));
            entityManager.projectiles.push(new Projectile(this.x + 2, this.y, dirX * 8, dirY * 8, 'laser', this.id, this.attack));
        } else if (this.type === 'mech') {
            // Twin Heavy Gatling Cannons
            if (audio) audio.playLaser();
            entityManager.projectiles.push(new Projectile(this.x - 3, this.y, dirX * 7, dirY * 7, 'arrow', this.id, this.attack * 0.6));
            entityManager.projectiles.push(new Projectile(this.x + 3, this.y, dirX * 7, dirY * 7, 'arrow', this.id, this.attack * 0.6));
            if (particleSystem) particleSystem.burst(this.x, this.y, 6, ['#f59e0b', '#78350f'], 1, 3, 1, 2);
        } else if (this.type === 'wizard') {
            // Arcane Mystic Orb
            if (audio) audio.playMagic();
            entityManager.projectiles.push(new Projectile(this.x, this.y, dirX * 5, dirY * 5, 'laser', this.id, this.attack));
            if (particleSystem) particleSystem.burst(this.x, this.y, 8, ['#818cf8', '#c084fc', '#ffffff'], 1.5, 4, 1.5, 3, 'stardust');
        } else if (this.type === 'colossus_mech') {
            // Colossus Dual Railgun Heavy Slugs
            if (audio) audio.playExplosion(1.4);
            if (window.game) window.game.shakeCamera(10, 16);
            entityManager.projectiles.push(new Projectile(this.x - 4, this.y, dirX * 9, dirY * 9, 'fireball', this.id, this.attack * 0.6));
            entityManager.projectiles.push(new Projectile(this.x + 4, this.y, dirX * 9, dirY * 9, 'fireball', this.id, this.attack * 0.6));
            if (particleSystem) particleSystem.burst(this.x + dirX * 6, this.y + dirY * 6, 12, ['#38bdf8', '#ffffff', '#475569'], 2, 5, 2, 4);
        } else if (this.type === 'seraph_angel') {
            // Seraph Radiant Divine Spear
            if (audio) audio.playMagic();
            entityManager.projectiles.push(new Projectile(this.x, this.y, dirX * 7.5, dirY * 7.5, 'laser', this.id, this.attack));
            if (particleSystem) particleSystem.burst(this.x, this.y, 10, ['#fef08a', '#ffffff', '#38bdf8'], 1.5, 4, 1.5, 2.5, 'stardust');
        } else if (this.type === 'dune_leviathan') {
            // Sandworm Lunge & Chomp
            if (audio) audio.playExplosion(1.0);
            this.x += dirX * 8;
            this.y += dirY * 8;
            entityManager.projectiles.push(new Projectile(this.x, this.y, dirX * 5, dirY * 5, 'acid', this.id, this.attack * 0.7));
            if (particleSystem) particleSystem.burst(this.x, this.y, 12, ['#dec17a', '#854d0e'], 2, 4, 1.5, 3);
        } else if (this.type === 'vampire_lord') {
            // Vampire Life-Steal Slash
            if (audio) audio.playClick();
            const target = entityManager.findNearestEntity(this, (other) => other.id !== this.id);
            if (target && Math.hypot(target.x - this.x, target.y - this.y) < (this.size * this.scale + 10)) {
                target.takeDamage(this.attack, this);
                this.hp = Math.min(this.maxHp, this.hp + this.attack * 0.5);
                if (particleSystem) particleSystem.burst(target.x, target.y, 8, ['#991b1b', '#ef4444'], 1.5, 3, 1.5, 2, 'blood');
            }
        } else if (this.type === 'void_titan') {
            // Cosmic Void Titan Triple Pulsar Laser Beams
            if (audio) audio.playLaser();
            for (let b = -1; b <= 1; b++) {
                const ang = Math.atan2(dirY, dirX) + b * 0.16;
                entityManager.projectiles.push(new Projectile(this.x, this.y, Math.cos(ang) * 7.5, Math.sin(ang) * 7.5, 'laser', this.id, this.attack * 0.8));
            }
            if (particleSystem) particleSystem.burst(this.x, this.y, 16, ['#6366f1', '#a855f7', '#38bdf8', '#ffffff'], 2, 6, 2, 4, 'stardust');
        } else if (this.type === 'evermean' || this.hasTrait('headslammer')) {
            // Evermean Headslam Smash!
            if (audio) audio.playExplosion(1.2);
            if (window.game) window.game.shakeCamera(12, 18);

            // Lurch forward towards target
            this.x += dirX * 6;
            this.y += dirY * 6;
            if (world.inBounds(Math.floor(this.x), Math.floor(this.y))) {
                this.x = Math.max(2, Math.min(world.width - 2, this.x));
                this.y = Math.max(2, Math.min(world.height - 2, this.y));
            }

            // Pulverize regular trees into wood ash / cleared grass
            const smashX = Math.floor(this.x + dirX * 3);
            const smashY = Math.floor(this.y + dirY * 3);
            for (let dy = -2; dy <= 2; dy++) {
                for (let dx = -2; dx <= 2; dx++) {
                    const tx = smashX + dx;
                    const ty = smashY + dy;
                    if (world.inBounds(tx, ty)) {
                        const tile = world.getTile(tx, ty);
                        if (tile === TILES.FOREST) {
                            world.setTile(tx, ty, TILES.GRASS);
                        }
                    }
                }
            }

            // Shockwave particles (wood splinters, green leaves, dust)
            if (particleSystem) {
                particleSystem.burst(this.x + dirX * 3, this.y + dirY * 3, 20, ['#78350f', '#15803d', '#22c55e', '#ffffff'], 2, 5, 2, 4);
            }

            // Smash foes in range with heavy blunt knockback
            for (let i = 0; i < entityManager.entities.length; i++) {
                const other = entityManager.entities[i];
                if (!other.active || other.id === this.id) continue;
                if (Math.hypot(other.x - (this.x + dirX * 3), other.y - (this.y + dirY * 3)) < (this.size * this.scale + 12)) {
                    other.takeDamage(this.attack * 1.6, this);
                    other.x += dirX * 10;
                    other.y += dirY * 10;
                }
            }
            return;
        } else if (this.hasTrait('venomous') || this.type === 'hydra') {
            // Acid / Venom Spit
            if (audio) audio.playSplash();
            entityManager.projectiles.push(new Projectile(this.x, this.y, dirX * 4, dirY * 4, 'acid', this.id, this.attack));
        } else {
            // Melee punch / slash
            if (audio) audio.playClick();
            const target = entityManager.findNearestEntity(this, (other) => other.id !== this.id);
            if (target && Math.hypot(target.x - this.x, target.y - this.y) < (this.size * this.scale + 6)) {
                target.takeDamage(this.attack, this);
                if (this.hasTrait('vampiric')) {
                    this.hp = Math.min(this.maxHp, this.hp + this.attack * 0.4);
                }
                if (this.hasTrait('pyromaniac') && particleSystem) {
                    particleSystem.burst(target.x, target.y, 6, ['#f97316', '#ef4444'], 1, 3, 1, 2, 'fire');
                }
                if (this.hasTrait('cryomancer')) {
                    target.frozen = 30;
                }
                if (particleSystem) particleSystem.burst(target.x, target.y, 6, ['#ef4444', '#ffffff'], 1, 3, 1, 2);
            }
        }
    }

    useSpecialAbility(world, entityManager, disasterManager, particleSystem, audio) {
        if (this.specialCooldown > 0) return;
        this.specialCooldown = 60;

        if (this.type === 'duck') {
            // Lay Explosive Egg
            if (audio && typeof audio.playClick === 'function') audio.playClick();
            if (entityManager.explosiveEggs) {
                entityManager.explosiveEggs.push(new ExplosiveEgg(this.x, this.y, this.id));
            }
            if (particleSystem) {
                particleSystem.spawn(this.x, this.y, 0, -0.6, 2, '#fef08a', 15, 'stardust');
            }
            return;
        } else if (this.type === 'crystal_golem') {
            // Crystal Spire Eruption
            if (audio && typeof audio.playSingularity === 'function') audio.playSingularity();
            if (particleSystem) particleSystem.burst(this.x, this.y, 40, ['#ec4899', '#f472b6', '#ffffff'], 2, 6, 2, 4, 'spark');
            const rad = 8;
            for (let dy = -rad; dy <= rad; dy++) {
                for (let dx = -rad; dx <= rad; dx++) {
                    if (dx * dx + dy * dy <= rad * rad) {
                        const tx = Math.floor(this.x + dx);
                        const ty = Math.floor(this.y + dy);
                        if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK && Math.random() < 0.45) {
                            world.setTile(tx, ty, TILES.CRYSTAL);
                        }
                    }
                }
            }
            for (let i = 0; i < entityManager.entities.length; i++) {
                const other = entityManager.entities[i];
                if (other.active && other.id !== this.id && Math.hypot(other.x - this.x, other.y - this.y) < 26) {
                    other.takeDamage(70, this);
                    other.frozen = 35;
                }
            }
            return;
        } else if (this.type === 'shadow_assassin') {
            // Smoke Bomb Teleport & Ambush
            if (audio && typeof audio.playMagic === 'function') audio.playMagic();
            if (particleSystem) particleSystem.burst(this.x, this.y, 30, ['#1e1b4b', '#475569', '#000000'], 2, 5, 2, 4, 'smoke');
            const target = entityManager.findNearestEntity(this, (o) => o.id !== this.id);
            if (target) {
                this.x = target.x + (Math.random() < 0.5 ? -4 : 4);
                this.y = target.y + (Math.random() < 0.5 ? -4 : 4);
                target.takeDamage(this.attack * 2.0, this);
            }
            return;
        } else if (this.type === 'frog') {
            // Polymorph Croak Leap
            if (audio && typeof audio.playPolymorphCroak === 'function') audio.playPolymorphCroak();
            this.x += (Math.random() - 0.5) * 20;
            this.y -= 10;
            if (particleSystem) particleSystem.burst(this.x, this.y, 20, ['#22c55e', '#86efac', '#ffffff'], 2, 5, 1.5, 3, 'stardust');
            for (let i = 0; i < entityManager.entities.length; i++) {
                const o = entityManager.entities[i];
                if (o.active && o.id !== this.id && Math.hypot(o.x - this.x, o.y - this.y) < 18) {
                    o.takeDamage(this.attack * 1.5, this);
                }
            }
            return;
        } else if (this.type === 'cyber_ninja') {
            // Shadow Katana Flurry
            if (audio && typeof audio.playLaser === 'function') audio.playLaser();
            if (particleSystem) particleSystem.burst(this.x, this.y, 25, ['#06b6d4', '#00e5ff', '#ffffff'], 2, 5, 1.5, 3, 'spark');
            const target = entityManager.findNearestEntity(this, (o) => o.id !== this.id);
            if (target) {
                this.x = target.x + (Math.random() < 0.5 ? -3 : 3);
                this.y = target.y + (Math.random() < 0.5 ? -3 : 3);
                target.takeDamage(this.attack * 2.2, this);
            }
            for (let a = 0; a < Math.PI * 2; a += Math.PI / 2) {
                entityManager.projectiles.push(new Projectile(this.x, this.y, Math.cos(a) * 8, Math.sin(a) * 8, 'arrow', this.id, this.attack * 0.7));
            }
            return;
        } else if (this.type === 'laser_shark') {
            // Frenzy Chomp Surge
            if (audio && typeof audio.playSharkBite === 'function') audio.playSharkBite();
            else if (audio) audio.playExplosion(1.2);
            this.x += (this.vx || 1) * 14;
            this.y += (this.vy || 0) * 14;
            if (particleSystem) particleSystem.burst(this.x, this.y, 25, ['#0284c7', '#38bdf8', '#ef4444'], 2, 6, 2, 4, 'blood');
            for (let i = 0; i < entityManager.entities.length; i++) {
                const o = entityManager.entities[i];
                if (o.active && o.id !== this.id && Math.hypot(o.x - this.x, o.y - this.y) < 22) {
                    o.takeDamage(this.attack * 2.5, this);
                }
            }
            return;
        } else if (this.type === 'frost_wolf') {
            // Glacial Howling Blizzard
            if (audio && typeof audio.playThunder === 'function') audio.playThunder();
            if (particleSystem) particleSystem.burst(this.x, this.y, 35, ['#a5f3fc', '#ffffff', '#38bdf8'], 2, 6, 2, 4, 'snow');
            for (let i = 0; i < entityManager.entities.length; i++) {
                const o = entityManager.entities[i];
                if (o.active && o.id !== this.id && Math.hypot(o.x - this.x, o.y - this.y) < 28) {
                    o.takeDamage(60, this);
                    o.frozen = 80;
                }
            }
            return;
        } else if (this.type === 'sand_scorpion') {
            // Subterranean Burrow & Corrosive Sting
            if (audio && typeof audio.playSplash === 'function') audio.playSplash();
            if (particleSystem) particleSystem.burst(this.x, this.y, 25, ['#d97706', '#84cc16'], 2, 5, 1.5, 3, 'acid');
            const target = entityManager.findNearestEntity(this, (o) => o.id !== this.id);
            if (target) {
                this.x = target.x + 3;
                this.y = target.y + 3;
                target.takeDamage(this.attack * 2.0, this);
                target.infected = true;
            }
            const tx = Math.floor(this.x);
            const ty = Math.floor(this.y);
            if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                world.setTile(tx, ty, TILES.ACID);
            }
            return;
        } else if (this.type === 'necromancer') {
            // Dark Corpse Revival & Skeleton Army
            if (audio && typeof audio.playMagic === 'function') audio.playMagic();
            if (particleSystem) particleSystem.burst(this.x, this.y, 35, ['#4c1d95', '#a855f7', '#000000'], 2, 6, 2, 4, 'stardust');
            let revived = 0;
            if (entityManager.corpses) {
                for (let c = entityManager.corpses.length - 1; c >= 0; c--) {
                    const corpse = entityManager.corpses[c];
                    if (Math.hypot(corpse.x - this.x, corpse.y - this.y) < 35 && revived < 3) {
                        entityManager.spawn('skeleton', corpse.x, corpse.y);
                        entityManager.corpses.splice(c, 1);
                        revived++;
                    }
                }
            }
            if (revived === 0) {
                for (let k = 0; k < 2; k++) {
                    entityManager.spawn('skeleton', this.x + (Math.random() - 0.5) * 12, this.y + (Math.random() - 0.5) * 12);
                }
            }
            return;
        } else if (this.type === 'valkyrie') {
            // Celestial Dawn Blessing & Evil Smite
            if (audio && typeof audio.playResurrection === 'function') audio.playResurrection();
            else if (audio) audio.playMagic();
            if (particleSystem) particleSystem.burst(this.x, this.y, 50, ['#fef08a', '#facc15', '#ffffff'], 2.5, 7, 2, 5, 'stardust');
            for (let i = 0; i < entityManager.entities.length; i++) {
                const o = entityManager.entities[i];
                if (!o.active) continue;
                const d = Math.hypot(o.x - this.x, o.y - this.y);
                if (d < 35) {
                    if (o.type === 'demon' || o.type === 'zombie' || o.type === 'skeleton' || o.infected) {
                        o.takeDamage(120, this);
                    } else {
                        o.hp = o.maxHp;
                        o.blessed = true;
                    }
                }
            }
            return;
        } else if (this.type === 'gargoyle') {
            // Stone Form Stasis & Shockwave
            if (audio && typeof audio.playClick === 'function') audio.playClick();
            this.hp = Math.min(this.maxHp, this.hp + 180);
            if (particleSystem) particleSystem.burst(this.x, this.y, 30, ['#64748b', '#475569', '#cbd5e1'], 2, 5, 2, 4);
            for (let i = 0; i < entityManager.entities.length; i++) {
                const o = entityManager.entities[i];
                if (o.active && o.id !== this.id && Math.hypot(o.x - this.x, o.y - this.y) < 20) {
                    o.takeDamage(this.attack * 1.5, this);
                    const ang = Math.atan2(o.y - this.y, o.x - this.x);
                    o.x += Math.cos(ang) * 10;
                    o.y += Math.sin(ang) * 10;
                }
            }
            return;
        } else if (this.type === 'mecha_rex') {
            // Micro-Missile Cluster Barrage
            if (audio) audio.playExplosion(1.4);
            if (window.game) window.game.shakeCamera(12, 20);
            for (let a = 0; a < Math.PI * 2; a += Math.PI / 4) {
                entityManager.projectiles.push(new Projectile(this.x, this.y, Math.cos(a) * 6.5, Math.sin(a) * 6.5, 'fireball', this.id, 85));
            }
            if (particleSystem) particleSystem.burst(this.x, this.y, 25, ['#f97316', '#38bdf8', '#475569'], 2, 5, 2, 4);
            return;
        } else if (this.type === 'golden_dragon') {
            // Celestial Starlight Shower
            if (audio && typeof audio.playMagic === 'function') audio.playMagic();
            if (particleSystem) particleSystem.burst(this.x, this.y, 60, ['#facc15', '#fef08a', '#ffffff'], 3, 8, 2, 5, 'stardust');
            for (let a = 0; a < Math.PI * 2; a += Math.PI / 5) {
                entityManager.projectiles.push(new Projectile(this.x, this.y, Math.cos(a) * 6, Math.sin(a) * 6, 'laser', this.id, 90));
            }
            return;
        } else if (this.type === 'space_worm') {
            // Singularity Gravity Vortex
            if (audio && typeof audio.playSingularity === 'function') audio.playSingularity();
            if (particleSystem) particleSystem.burst(this.x, this.y, 50, ['#8b5cf6', '#a855f7', '#000000'], 2.5, 7, 2, 5, 'stardust');
            for (let i = 0; i < entityManager.entities.length; i++) {
                const o = entityManager.entities[i];
                if (o.active && o.id !== this.id && Math.hypot(o.x - this.x, o.y - this.y) < 35) {
                    o.takeDamage(110, this);
                    const ang = Math.atan2(this.y - o.y, this.x - o.x);
                    o.x += Math.cos(ang) * 8;
                    o.y += Math.sin(ang) * 8;
                }
            }
            return;
        } else if (this.type === 'goblin') {
            // Fire Trap / Grenade Toss
            if (audio) audio.playExplosion(1.0);
            entityManager.projectiles.push(new Projectile(this.x, this.y, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6, 'fireball', this.id, 65));
            if (particleSystem) particleSystem.burst(this.x, this.y, 14, ['#84cc16', '#f97316'], 1.5, 4, 1, 2, 'fire');
            return;
        } else if (this.type === 'pirate_ship') {
            // Heavy Broadside Artillery Salvo
            if (audio && typeof audio.playCannonFire === 'function') audio.playCannonFire();
            else if (audio) audio.playExplosion(1.6);
            if (window.game) window.game.shakeCamera(10, 18);
            for (let s = -1; s <= 1; s += 2) {
                for (let k = -1; k <= 1; k++) {
                    const ang = (s === 1 ? 0 : Math.PI) + k * 0.2;
                    entityManager.projectiles.push(new Projectile(this.x, this.y, Math.cos(ang) * 6.5, Math.sin(ang) * 6.5, 'fireball', this.id, 75));
                }
            }
            if (particleSystem) particleSystem.burst(this.x, this.y, 25, ['#78350f', '#f97316', '#475569'], 2, 6, 2, 4);
            return;
        } else if (this.type === 'trex') {
            // Earthshaking Apex Roar
            if (audio && typeof audio.playDinoRoar === 'function') audio.playDinoRoar();
            else if (audio) audio.playRoar();
            if (window.game) window.game.shakeCamera(18, 30);
            if (particleSystem) particleSystem.burst(this.x, this.y, 45, ['#78350f', '#b45309', '#dc2626', '#ffffff'], 2.5, 7, 2, 5, 'smoke');
            for (let i = 0; i < entityManager.entities.length; i++) {
                const o = entityManager.entities[i];
                if (!o.active || o.id === this.id) continue;
                const d = Math.hypot(o.x - this.x, o.y - this.y);
                if (d < 35) {
                    o.takeDamage(130, this);
                    o.frozen = 60; // Terrified / Stunned
                    const ang = Math.atan2(o.y - this.y, o.x - this.x);
                    o.vx += Math.cos(ang) * 9;
                    o.vy += Math.sin(ang) * 9;
                }
            }
            return;
        } else if (this.type === 'triceratops') {
            // Frill Shield Bulldoze Rush
            if (audio && typeof audio.playRoar === 'function') audio.playRoar();
            if (window.game) window.game.shakeCamera(12, 22);
            const dirX = Math.cos(this.rotation || 0);
            const dirY = Math.sin(this.rotation || 0);
            this.vx += dirX * 9;
            this.vy += dirY * 9;
            if (particleSystem) particleSystem.burst(this.x, this.y, 30, ['#b45309', '#78350f', '#facc15'], 2, 6, 1.5, 4);
            for (let i = 0; i < entityManager.entities.length; i++) {
                const o = entityManager.entities[i];
                if (!o.active || o.id === this.id) continue;
                if (Math.hypot(o.x - this.x, o.y - this.y) < 26) {
                    o.takeDamage(110, this);
                    o.vx += dirX * 12;
                    o.vy += dirY * 12;
                }
            }
            return;
        } else if (this.type === 'velociraptor') {
            // Pack Frenzy Howl & Razor Cyclone
            if (audio && typeof audio.playSlash === 'function') audio.playSlash();
            if (particleSystem) particleSystem.burst(this.x, this.y, 30, ['#dc2626', '#facc15', '#ffffff'], 2, 6, 1.5, 3, 'blood');
            for (let a = 0; a < Math.PI * 2; a += Math.PI / 3) {
                entityManager.projectiles.push(new Projectile(this.x, this.y, Math.cos(a) * 7.5, Math.sin(a) * 7.5, 'arrow', this.id, this.attack * 1.1));
            }
            for (let i = 0; i < entityManager.entities.length; i++) {
                const o = entityManager.entities[i];
                if (o.active && o.type === 'velociraptor' && Math.hypot(o.x - this.x, o.y - this.y) < 40) {
                    o.speed *= 1.35; // Pack hunting buff
                }
            }
            return;
        } else if (this.type === 'pterodactyl') {
            // Supersonic Screech & Aerial Gale Shockwave
            if (audio && typeof audio.playPterosaurScreech === 'function') audio.playPterosaurScreech();
            if (window.game) window.game.shakeCamera(8, 16);
            if (particleSystem) particleSystem.burst(this.x, this.y, 35, ['#38bdf8', '#e0f2fe', '#ffffff'], 2.5, 7, 2, 4, 'spark');
            for (let i = 0; i < entityManager.entities.length; i++) {
                const o = entityManager.entities[i];
                if (!o.active || o.id === this.id) continue;
                const d = Math.hypot(o.x - this.x, o.y - this.y);
                if (d < 30) {
                    o.takeDamage(85, this);
                    const ang = Math.atan2(o.y - this.y, o.x - this.x);
                    o.vx += Math.cos(ang) * 11;
                    o.vy += Math.sin(ang) * 11;
                }
            }
            return;
        } else if (this.type === 'brachiosaurus') {
            // Colossal Seismic Earthshaker Stomp
            if (audio && typeof audio.playExplosion === 'function') audio.playExplosion(2.2);
            if (window.game) window.game.shakeCamera(22, 35);
            if (particleSystem) particleSystem.burst(this.x, this.y, 60, ['#3f6212', '#78350f', '#475569', '#15803d'], 3, 8, 2.5, 5);
            const radius = 32;
            for (let dy = -radius; dy <= radius; dy += 2) {
                for (let dx = -radius; dx <= radius; dx += 2) {
                    if (dx * dx + dy * dy <= radius * radius) {
                        const tx = Math.floor(this.x + dx);
                        const ty = Math.floor(this.y + dy);
                        if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                            if (Math.random() < 0.15) world.setTile(tx, ty, TILES.SOIL);
                        }
                    }
                }
            }
            for (let i = 0; i < entityManager.entities.length; i++) {
                const o = entityManager.entities[i];
                if (!o.active || o.id === this.id) continue;
                const d = Math.hypot(o.x - this.x, o.y - this.y);
                if (d < radius) {
                    o.takeDamage(170, this);
                    const ang = Math.atan2(o.y - this.y, o.x - this.x);
                    o.vx += Math.cos(ang) * 12;
                    o.vy += Math.sin(ang) * 12;
                }
            }
            return;
        } else if (this.type === 'frost_dragon') {
            // Glacial Blizzard Vortex
            if (audio && typeof audio.playFrostBreath === 'function') audio.playFrostBreath();
            if (window.game) window.game.shakeCamera(10, 20);
            if (particleSystem) particleSystem.burst(this.x, this.y, 50, ['#38bdf8', '#a5f3fc', '#ffffff'], 3, 8, 2, 5, 'snow');
            for (let a = 0; a < Math.PI * 2; a += Math.PI / 5) {
                entityManager.projectiles.push(new Projectile(this.x, this.y, Math.cos(a) * 6.5, Math.sin(a) * 6.5, 'frost', this.id, 95));
            }
            const frad = 24;
            for (let dy = -frad; dy <= frad; dy++) {
                for (let dx = -frad; dx <= frad; dx++) {
                    if (dx * dx + dy * dy <= frad * frad) {
                        const tx = Math.floor(this.x + dx);
                        const ty = Math.floor(this.y + dy);
                        if (world.inBounds(tx, ty)) {
                            const t = world.getTile(tx, ty);
                            if (t === TILES.WATER || t === TILES.DEEP_WATER) world.setTile(tx, ty, TILES.ICE);
                            else if ((t === TILES.GRASS || t === TILES.SOIL) && Math.random() < 0.6) world.setTile(tx, ty, TILES.SNOW);
                        }
                    }
                }
            }
            for (let i = 0; i < entityManager.entities.length; i++) {
                const o = entityManager.entities[i];
                if (o.active && o.id !== this.id && Math.hypot(o.x - this.x, o.y - this.y) < frad) {
                    o.takeDamage(100, this);
                    o.frozen = 120;
                }
            }
            return;
        } else if (this.type === 'shadow_dragon') {
            // Singularity Shadow Warp & Void Implosion
            if (audio && typeof audio.playSingularity === 'function') audio.playSingularity();
            if (window.game) window.game.shakeCamera(14, 25);
            if (particleSystem) particleSystem.burst(this.x, this.y, 45, ['#7e22ce', '#a855f7', '#0f051d'], 2.5, 7, 2, 5, 'stardust');
            const target = entityManager.findNearestEntity(this, (o) => o.id !== this.id);
            if (target) {
                this.x = target.x + (Math.random() < 0.5 ? -6 : 6);
                this.y = target.y + (Math.random() < 0.5 ? -6 : 6);
            } else {
                this.x += (Math.random() - 0.5) * 40;
                this.y += (Math.random() - 0.5) * 40;
            }
            if (particleSystem) particleSystem.burst(this.x, this.y, 45, ['#7e22ce', '#a855f7', '#0f051d'], 2.5, 7, 2, 5, 'stardust');
            for (let i = 0; i < entityManager.entities.length; i++) {
                const o = entityManager.entities[i];
                if (o.active && o.id !== this.id && Math.hypot(o.x - this.x, o.y - this.y) < 32) {
                    o.takeDamage(130, this);
                    const ang = Math.atan2(this.y - o.y, this.x - o.x);
                    o.vx += Math.cos(ang) * 9;
                    o.vy += Math.sin(ang) * 9;
                }
            }
            return;
        } else if (this.type === 'storm_dragon') {
            // Supercell Thunder Surge
            if (audio && typeof audio.playLightningBreath === 'function') audio.playLightningBreath();
            if (audio && typeof audio.playThunder === 'function') audio.playThunder();
            if (window.game) window.game.shakeCamera(18, 28);
            if (particleSystem) particleSystem.burst(this.x, this.y, 55, ['#06b6d4', '#facc15', '#ffffff'], 3, 8, 2, 5, 'spark');
            for (let a = 0; a < Math.PI * 2; a += Math.PI / 4) {
                entityManager.projectiles.push(new Projectile(this.x, this.y, Math.cos(a) * 8.5, Math.sin(a) * 8.5, 'plasma', this.id, 110));
            }
            for (let i = 0; i < entityManager.entities.length; i++) {
                const o = entityManager.entities[i];
                if (o.active && o.id !== this.id && Math.hypot(o.x - this.x, o.y - this.y) < 34) {
                    o.takeDamage(120, this);
                }
            }
            return;
        } else if (this.type === 'crabzilla') {
            // Crabzilla Mega Stomp Shockwave!
            if (audio) audio.playExplosion(2.0);
            const radius = 18;
            if (particleSystem) {
                particleSystem.explosion(this.x, this.y, radius, 2);
            }
            for (let dy = -radius; dy <= radius; dy++) {
                for (let dx = -radius; dx <= radius; dx++) {
                    if (dx * dx + dy * dy <= radius * radius) {
                        const tx = Math.floor(this.x + dx);
                        const ty = Math.floor(this.y + dy);
                        if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                            if (Math.random() < 0.3) world.setTile(tx, ty, TILES.VOID);
                            else if (Math.random() < 0.5) world.setTile(tx, ty, TILES.ASH);
                        }
                    }
                }
            }
            // Fling creatures away
            for (let i = 0; i < entityManager.entities.length; i++) {
                const ent = entityManager.entities[i];
                if (!ent.active || ent.id === this.id) continue;
                const d = Math.hypot(ent.x - this.x, ent.y - this.y);
                if (d < radius * 1.5) {
                    ent.takeDamage(80, this);
                    const ang = Math.atan2(ent.y - this.y, ent.x - this.x);
                    ent.x += Math.cos(ang) * 12;
                    ent.y += Math.sin(ang) * 12;
                }
            }
        } else if (this.type === 'galaxy_guardian') {
            // Celestial Supernova Shockwave
            if (audio) audio.playMagic();
            if (particleSystem) {
                particleSystem.burst(this.x, this.y, 100, ['#a855f7', '#38bdf8', '#facc15', '#ffffff'], 2, 7, 2, 4, 'stardust');
            }
            for (let a = 0; a < Math.PI * 2; a += Math.PI / 6) {
                entityManager.projectiles.push(new Projectile(this.x, this.y, Math.cos(a) * 5, Math.sin(a) * 5, 'laser', this.id, 60));
            }
        } else if (this.type === 'tank') {
            // Rapid Machine Gun Sweep
            if (audio) audio.playLaser();
            for (let i = 0; i < 5; i++) {
                const a = Math.random() * Math.PI * 2;
                entityManager.projectiles.push(new Projectile(this.x, this.y, Math.cos(a) * 6, Math.sin(a) * 6, 'arrow', this.id, 30));
            }
        } else if (this.type === 'helicopter') {
            // Rocket Salvo
            if (audio) audio.playExplosion(1.0);
            for (let i = 0; i < 4; i++) {
                const a = (Math.random() - 0.5) * 0.8;
                entityManager.projectiles.push(new Projectile(this.x, this.y, Math.cos(a) * 5, Math.sin(a) * 5, 'fireball', this.id, 45));
            }
        } else if (this.type === 'starfighter') {
            // Warp Shockwave
            if (audio) audio.playSingularity();
            if (particleSystem) particleSystem.burst(this.x, this.y, 40, ['#38bdf8', '#00e5ff', '#ffffff'], 3, 8, 2, 4, 'stardust');
            for (let i = 0; i < entityManager.entities.length; i++) {
                const other = entityManager.entities[i];
                if (other.active && other.id !== this.id && Math.hypot(other.x - this.x, other.y - this.y) < 25) {
                    other.takeDamage(75, this);
                }
            }
        } else if (this.type === 'mech') {
            // Flamethrower Arc Sweep
            if (audio) audio.playExplosion(0.7);
            for (let i = -2; i <= 2; i++) {
                const ang = Math.random() * Math.PI * 2;
                entityManager.projectiles.push(new Projectile(this.x, this.y, Math.cos(ang) * 4, Math.sin(ang) * 4, 'fireball', this.id, 50));
            }
            if (particleSystem) particleSystem.burst(this.x, this.y, 30, ['#ef4444', '#f59e0b', '#fbbf24'], 2, 5, 2, 3, 'fire');
        } else if (this.type === 'wizard') {
            // Arcane Blink & Chain Lightning Shockwave
            if (audio) audio.playMagic();
            if (particleSystem) particleSystem.burst(this.x, this.y, 40, ['#818cf8', '#a855f7', '#ffffff'], 2, 6, 2, 4, 'stardust');
            this.x += (Math.random() - 0.5) * 30;
            this.y += (Math.random() - 0.5) * 30;
            this.x = Math.max(4, Math.min(world.width - 4, this.x));
            this.y = Math.max(4, Math.min(world.height - 4, this.y));
            for (let i = 0; i < entityManager.entities.length; i++) {
                const other = entityManager.entities[i];
                if (other.active && other.id !== this.id && Math.hypot(other.x - this.x, other.y - this.y) < 20) {
                    other.takeDamage(70, this);
                }
            }
        } else if (this.type === 'kaiju') {
            // Kaiju Nuclear Roar & Shockwave
            if (audio) audio.playNuke();
            disasterManager.triggerExplosion(this.x, this.y, 22, 1.8, world, entityManager, particleSystem, audio);
        } else if (this.type === 'phoenix') {
            // Solar Supernova Burst
            if (audio) audio.playMagic();
            if (particleSystem) {
                particleSystem.burst(this.x, this.y, 60, ['#f59e0b', '#ef4444', '#ffffff'], 2, 6, 2, 4, 'fire');
            }
            for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 4) {
                entityManager.projectiles.push(new Projectile(this.x, this.y, Math.cos(angle) * 4, Math.sin(angle) * 4, 'fireball', this.id, 40));
            }
        } else if (this.type === 'dragon') {
            // Dragon Great Firestorm Dive Bomb
            if (audio) audio.playNuke();
            if (particleSystem) particleSystem.burst(this.x, this.y, 80, ['#ef4444', '#dc2626', '#f59e0b', '#fbbf24'], 3, 8, 2, 5, 'fire');
            for (let a = 0; a < Math.PI * 2; a += Math.PI / 5) {
                entityManager.projectiles.push(new Projectile(this.x, this.y, Math.cos(a) * 5, Math.sin(a) * 5, 'fireball', this.id, 65));
            }
            const rad = 12;
            for (let dy = -rad; dy <= rad; dy++) {
                for (let dx = -rad; dx <= rad; dx++) {
                    if (dx * dx + dy * dy <= rad * rad) {
                        const tx = Math.floor(this.x + dx);
                        const ty = Math.floor(this.y + dy);
                        if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                            world.ignite(tx, ty, 60);
                        }
                    }
                }
            }
        } else if (this.type === 'frost_titan') {
            // Frost Nova: Freeze surrounding ground into ice!
            if (audio) audio.playSplash();
            const rad = 14;
            for (let dy = -rad; dy <= rad; dy++) {
                for (let dx = -rad; dx <= rad; dx++) {
                    if (dx * dx + dy * dy <= rad * rad) {
                        const tx = Math.floor(this.x + dx);
                        const ty = Math.floor(this.y + dy);
                        if (world.inBounds(tx, ty)) {
                            const t = world.getTile(tx, ty);
                            if (t === TILES.WATER || t === TILES.DEEP_WATER) world.setTile(tx, ty, TILES.ICE);
                            else if (t === TILES.GRASS) world.setTile(tx, ty, TILES.SNOW);
                        }
                    }
                }
            }
            if (particleSystem) {
                particleSystem.burst(this.x, this.y, 40, ['#a5f3fc', '#ffffff'], 1.5, 4, 1.5, 3);
            }
        } else if (this.type === 'colossus_mech') {
            // Micro-Missile Barrage (6 homing explosive rockets radially)
            if (audio) audio.playExplosion(1.2);
            for (let a = 0; a < Math.PI * 2; a += Math.PI / 3) {
                entityManager.projectiles.push(new Projectile(this.x, this.y, Math.cos(a) * 6, Math.sin(a) * 6, 'fireball', this.id, 75));
            }
            if (particleSystem) particleSystem.burst(this.x, this.y, 25, ['#f97316', '#475569'], 2, 5, 2, 3);
        } else if (this.type === 'seraph_angel') {
            // Divine Aegis & Restoration
            if (audio) audio.playMagic();
            if (particleSystem) particleSystem.burst(this.x, this.y, 80, ['#fef08a', '#ffffff', '#38bdf8'], 2.5, 7, 2, 5, 'stardust');
            for (let i = 0; i < entityManager.entities.length; i++) {
                const other = entityManager.entities[i];
                if (other.active && Math.hypot(other.x - this.x, other.y - this.y) < 40) {
                    other.hp = other.maxHp;
                    other.blessed = true;
                }
            }
        } else if (this.type === 'dune_leviathan') {
            // Subterranean Breach & Sandstorm
            if (audio) audio.playThunder();
            if (window.game) window.game.shakeCamera(14, 25);
            for (let dy = -10; dy <= 10; dy++) {
                for (let dx = -10; dx <= 10; dx++) {
                    if (dx * dx + dy * dy <= 100) {
                        const tx = Math.floor(this.x + dx);
                        const ty = Math.floor(this.y + dy);
                        if (world.inBounds(tx, ty) && world.getTile(tx, ty) !== TILES.BEDROCK) {
                            if (Math.random() < 0.35) world.setTile(tx, ty, TILES.SAND);
                        }
                    }
                }
            }
            if (particleSystem) particleSystem.burst(this.x, this.y, 50, ['#dec17a', '#ca8a04', '#78350f'], 2, 6, 2, 4);
        } else if (this.type === 'vampire_lord') {
            // Bat Swarm Frenzy Dash
            if (audio) audio.playMagic();
            const dashAng = Math.random() * Math.PI * 2;
            const tx = this.x + Math.cos(dashAng) * 25;
            const ty = this.y + Math.sin(dashAng) * 25;
            this.x = Math.max(4, Math.min(world.width - 4, tx));
            this.y = Math.max(4, Math.min(world.height - 4, ty));
            if (particleSystem) particleSystem.burst(this.x, this.y, 40, ['#881337', '#4c0519', '#ffffff'], 2, 5, 2, 4);
            for (let i = 0; i < entityManager.entities.length; i++) {
                const other = entityManager.entities[i];
                if (other.active && other.id !== this.id && Math.hypot(other.x - this.x, other.y - this.y) < 22) {
                    other.takeDamage(110, this);
                    this.hp = Math.min(this.maxHp, this.hp + 40);
                }
            }
        } else if (this.type === 'void_titan') {
            // Singularity Collapse Vortex
            if (audio) audio.playSingularity();
            if (window.game) window.game.shakeCamera(24, 45);
            if (particleSystem) particleSystem.burst(this.x, this.y, 150, ['#6366f1', '#a855f7', '#38bdf8', '#000000'], 3, 10, 2, 6, 'stardust');
            for (let a = 0; a < Math.PI * 2; a += Math.PI / 8) {
                entityManager.projectiles.push(new Projectile(this.x, this.y, Math.cos(a) * 6.5, Math.sin(a) * 6.5, 'laser', this.id, 90));
            }
            for (let i = 0; i < entityManager.entities.length; i++) {
                const other = entityManager.entities[i];
                if (other.active && other.id !== this.id && Math.hypot(other.x - this.x, other.y - this.y) < 50) {
                    other.takeDamage(220, this);
                    const ang = Math.atan2(this.y - other.y, this.x - other.x);
                    other.x += Math.cos(ang) * 10;
                    other.y += Math.sin(ang) * 10;
                }
            }
        } else if (this.type === 'evermean') {
            // Rootquake / Ancient Uprising
            if (audio) audio.playThunder();
            if (window.game) window.game.shakeCamera(18, 30);
            this.hp = Math.min(this.maxHp, this.hp + 250);

            // Sprout fresh nature around root zone
            const rad = 6;
            for (let dy = -rad; dy <= rad; dy++) {
                for (let dx = -rad; dx <= rad; dx++) {
                    if (dx * dx + dy * dy <= rad * rad) {
                        const tx = Math.floor(this.x + dx);
                        const ty = Math.floor(this.y + dy);
                        if (world.inBounds(tx, ty)) {
                            const t = world.getTile(tx, ty);
                            if (t === TILES.SAND || t === TILES.DIRT || t === TILES.ASH) {
                                world.setTile(tx, ty, TILES.GRASS);
                            } else if (t === TILES.GRASS && Math.random() < 0.25) {
                                world.setTile(tx, ty, TILES.BIOLUMINESCENT_MOSS);
                            }
                        }
                    }
                }
            }

            // Seismic root shockwave
            if (particleSystem) {
                particleSystem.burst(this.x, this.y, 60, ['#15803d', '#22c55e', '#78350f', '#facc15'], 2.5, 7, 2, 5, 'stardust');
            }

            // Stun and damage surrounding enemies
            for (let i = 0; i < entityManager.entities.length; i++) {
                const other = entityManager.entities[i];
                if (other.active && other.id !== this.id && Math.hypot(other.x - this.x, other.y - this.y) < 28) {
                    other.takeDamage(90, this);
                    const ang = Math.atan2(other.y - this.y, other.x - this.x);
                    other.x += Math.cos(ang) * 12;
                    other.y += Math.sin(ang) * 12;
                    other.frozen = 25; // Root stasis / stun
                }
            }
        } else {
            // Generic Special: Dash Shockwave
            if (audio) audio.playClick();
            if (particleSystem) particleSystem.burst(this.x, this.y, 20, ['#38bdf8', '#ffffff'], 2, 4, 1, 2);
            for (let i = 0; i < entityManager.entities.length; i++) {
                const other = entityManager.entities[i];
                if (other.active && other.id !== this.id && Math.hypot(other.x - this.x, other.y - this.y) < 14) {
                    other.takeDamage(this.attack * 1.5, this);
                }
            }
        }
    }
}

class EntityManager {
    constructor() {
        this.entities = [];
        this.kingdoms = new Map();
        this.buildings = [];
        this.projectiles = [];
        this.corpses = [];
        this.floatingTexts = [];
        this.explosiveEggs = [];
        this.nextKingdomId = 1;
        this.forcePeace = false;
        this.worldWar = false;
    }

    addCorpse(ent) {
        let corpseType = 'bones';
        if (ent.type === 'evermean') {
            corpseType = 'stump';
        } else if (ent.type === 'colossus_mech') {
            corpseType = 'mech_scrap';
        } else if (ent.type === 'dragon') {
            corpseType = 'dragon_skull';
        } else if (ent.type === 'dune_leviathan') {
            corpseType = 'leviathan_ribs';
        } else if (ent.type === 'seraph_angel') {
            corpseType = 'angel_halo';
        }

        this.corpses.push({
            x: ent.x,
            y: ent.y,
            type: corpseType,
            species: ent.type,
            color: ent.color,
            scale: ent.scale,
            facingLeft: ent.facingLeft,
            timer: 650,
            maxTimer: 650
        });

        if (this.corpses.length > 120) {
            this.corpses.shift();
        }
    }

    resurrectCorpses(cx, cy, radius, audio = null, particleSystem = null) {
        if (audio && typeof audio.playResurrection === 'function') audio.playResurrection();
        else if (audio && typeof audio.playMagic === 'function') audio.playMagic();
        if (particleSystem) {
            particleSystem.burst(cx, cy, 35, ['#fef08a', '#38bdf8', '#ffffff', '#4ade80'], 2, 6, 2, 4, 'stardust');
        }
        let revived = 0;
        for (let i = this.corpses.length - 1; i >= 0; i--) {
            const c = this.corpses[i];
            if (Math.hypot(c.x - cx, c.y - cy) <= radius) {
                const ent = this.spawn(c.species || 'human', c.x, c.y);
                if (ent) {
                    ent.blessed = true;
                    if (particleSystem) particleSystem.spawn(ent.x, ent.y - 2, 0, -0.8, 2, '#4ade80', 20, 'stardust');
                }
                this.corpses.splice(i, 1);
                revived++;
            }
        }
        return revived;
    }

    polymorph(target, newType = 'frog', audio = null, particleSystem = null) {
        if (!target || !target.active) return null;
        if (audio && typeof audio.playPolymorphCroak === 'function') audio.playPolymorphCroak();
        if (particleSystem) {
            particleSystem.burst(target.x, target.y, 25, ['#22c55e', '#86efac', '#a855f7', '#ffffff'], 2, 5, 1.5, 3, 'stardust');
        }
        target.type = newType;
        target.initStats();
        return target;
    }

    addFloatingText(x, y, text, color = '#ffffff', isCrit = false) {
        this.floatingTexts.push({
            x,
            y,
            vy: isCrit ? -0.55 : -0.38,
            text,
            color,
            isCrit,
            life: 30,
            maxLife: 30
        });

        if (this.floatingTexts.length > 60) {
            this.floatingTexts.shift();
        }
    }

    spawn(type, x, y, customData = null) {
        const ent = new Entity(type, x, y, customData);
        ent.entityManager = this;

        // If civilized, assign or found kingdom if nearby
        if (ent.isCiv) {
            let nearestKingdom = null;
            let minDist = 30;
            for (const kd of this.kingdoms.values()) {
                const dist = Math.hypot(kd.x - x, kd.y - y);
                if (dist < minDist) {
                    minDist = dist;
                    nearestKingdom = kd;
                }
            }

            if (nearestKingdom) {
                ent.kingdomId = nearestKingdom.id;
                nearestKingdom.population++;
            } else if (this.kingdoms.size < 10) {
                const id = this.nextKingdomId++;
                const name = KINGDOM_NAMES[(id - 1) % KINGDOM_NAMES.length];
                const color = KINGDOM_COLORS[(id - 1) % KINGDOM_COLORS.length];
                const kd = new Kingdom(id, name, color, x, y);
                kd.population = 1;
                ent.kingdomId = id;
                ent.isKing = true;
                this.kingdoms.set(id, kd);
                this.buildings.push(new Building('campfire', x, y, id));
            }
        }

        this.entities.push(ent);
        return ent;
    }

    clone(parent, targetX = null, targetY = null) {
        if (!parent) return null;
        const x = targetX !== null ? targetX : parent.x + (Math.random() - 0.5) * 8;
        const y = targetY !== null ? targetY : parent.y + (Math.random() - 0.5) * 8;
        const customData = parent.customData ? JSON.parse(JSON.stringify(parent.customData)) : null;
        const cloneEnt = this.spawn(parent.type, x, y, customData);
        if (!cloneEnt) return null;

        cloneEnt.scale = parent.scale;
        cloneEnt.maxHp = parent.maxHp;
        cloneEnt.hp = parent.hp;
        cloneEnt.attack = parent.attack;
        cloneEnt.speed = parent.speed;
        cloneEnt.color = parent.color;
        cloneEnt.traits = new Set(parent.traits);
        cloneEnt.weapon = parent.weapon;
        cloneEnt.kingdomId = parent.kingdomId;
        return cloneEnt;
    }

    update(world, particleSystem, audio, disasterManager) {
        // 0. Update Explosive Eggs
        if (this.explosiveEggs) {
            for (let i = this.explosiveEggs.length - 1; i >= 0; i--) {
                const egg = this.explosiveEggs[i];
                egg.update(world, this, particleSystem, audio, disasterManager);
                if (!egg.active) {
                    this.explosiveEggs.splice(i, 1);
                }
            }
        }

        // 1. Update Projectiles
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const p = this.projectiles[i];
            p.update(1);

            if (p.type === 'fireball' && particleSystem && Math.random() < 0.4) {
                particleSystem.spawn(p.x, p.y, 0, 0, 1.5, '#ff5722', 15, 'fire');
            } else if (p.type === 'laser' && particleSystem && Math.random() < 0.4) {
                particleSystem.spawn(p.x, p.y, 0, 0, 1.5, '#00e5ff', 10, 'spark');
            } else if (p.type === 'frost' && particleSystem && Math.random() < 0.4) {
                particleSystem.spawn(p.x, p.y, 0, 0, 1.5, '#a5f3fc', 12, 'spark');
            } else if (p.type === 'acid' && particleSystem && Math.random() < 0.4) {
                particleSystem.spawn(p.x, p.y, 0, 0, 1.5, '#84cc16', 12, 'acid');
            }

            // Hit detection against entities
            let hit = false;
            for (let j = 0; j < this.entities.length; j++) {
                const ent = this.entities[j];
                if (!ent.active || ent.id === p.sourceId) continue;
                if (Math.hypot(ent.x - p.x, ent.y - p.y) < ent.size * ent.scale + 2) {
                    ent.takeDamage(p.damage);
                    hit = true;
                    if (particleSystem) {
                        particleSystem.burst(p.x, p.y, 5, ['#ef4444', '#ffffff'], 1, 3, 1, 2);
                    }
                    if (ent.hp <= 0) {
                        if (ent.infected) this.spawn('zombie', ent.x, ent.y);
                        if (ent.hasTrait('explosive_death') && disasterManager) {
                            disasterManager.triggerExplosion(ent.x, ent.y, 14, 1.5, world, this, particleSystem, audio);
                        }
                    }
                    break;
                }
            }

            if (hit || !p.active || !world.inBounds(Math.floor(p.x), Math.floor(p.y))) {
                this.projectiles.splice(i, 1);
            }
        }

        // Update floating combat texts
        for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
            const ft = this.floatingTexts[i];
            ft.y += ft.vy;
            ft.life--;
            if (ft.life <= 0) {
                this.floatingTexts.splice(i, 1);
            }
        }

        // Update corpses & decay
        for (let i = this.corpses.length - 1; i >= 0; i--) {
            const c = this.corpses[i];
            c.timer--;
            const tx = Math.floor(c.x);
            const ty = Math.floor(c.y);
            if (world.inBounds(tx, ty)) {
                const t = world.getTile(tx, ty);
                if (t === TILES.LAVA || t === TILES.ACID) {
                    c.timer -= 4;
                    if (particleSystem && Math.random() < 0.15) {
                        particleSystem.spawn(c.x, c.y, (Math.random() - 0.5) * 0.5, -0.4, 1.2, t === TILES.LAVA ? '#ff5722' : '#84cc16', 10, 'smoke');
                    }
                }
            }
            if (c.timer <= 0) {
                this.corpses.splice(i, 1);
            }
        }

        // 2. Update Kingdoms population count
        for (const kd of this.kingdoms.values()) {
            kd.population = 0;
        }
        for (let i = 0; i < this.entities.length; i++) {
            const ent = this.entities[i];
            if (ent.active && !ent.isDying && ent.kingdomId && this.kingdoms.has(ent.kingdomId)) {
                this.kingdoms.get(ent.kingdomId).population++;
            }
        }

        // 3. Update Entities
        for (let i = this.entities.length - 1; i >= 0; i--) {
            const ent = this.entities[i];
            if (!ent.active) {
                this.entities.splice(i, 1);
                continue;
            }

            // Decrement hit flash
            if (ent.hitFlash > 0) ent.hitFlash--;

            // Handle Dying Animation State
            if (ent.isDying) {
                ent.deathTimer--;

                // Specialized per-tick dying visual particles
                if (particleSystem) {
                    if (ent.deathType === 'evermean') {
                        if (Math.random() < 0.35) {
                            particleSystem.spawn(ent.x + (Math.random() - 0.5) * 8, ent.y - (Math.random() * 8), (Math.random() - 0.5) * 0.4, 0.25, 2, '#16a34a', 30, 'leaf');
                        }
                        if (Math.random() < 0.2) {
                            particleSystem.spawn(ent.x + (Math.random() - 0.5) * 6, ent.y, (Math.random() - 0.5) * 0.8, -0.4, 1.5, '#78350f', 15, 'smoke');
                        }
                    } else if (ent.deathType === 'colossus_mech') {
                        if (Math.random() < 0.45) {
                            particleSystem.spawn(ent.x + (Math.random() - 0.5) * 6, ent.y - 4, (Math.random() - 0.5) * 1.5, -0.8, 1.5, '#60a5fa', 12, 'spark');
                        }
                        if (Math.random() < 0.25) {
                            particleSystem.spawn(ent.x + (Math.random() - 0.5) * 4, ent.y - 2, 0, -0.5, 2.5, '#424242', 25, 'smoke');
                        }
                    } else if (ent.deathType === 'seraph_angel') {
                        if (Math.random() < 0.4) {
                            particleSystem.spawn(ent.x + (Math.random() - 0.5) * 6, ent.y - 4, (Math.random() - 0.5) * 0.5, -0.6, 2, '#fef08a', 25, 'stardust');
                        }
                    } else if (ent.deathType === 'dragon') {
                        if (Math.random() < 0.35) {
                            particleSystem.spawn(ent.x + (Math.random() - 0.5) * 8, ent.y - 3, (Math.random() - 0.5) * 0.8, -0.4, 2, '#f97316', 20, 'fire');
                        }
                    } else if (ent.deathType === 'duck_explode') {
                        if (particleSystem && Math.random() < 0.5) {
                            particleSystem.spawn(ent.x + (Math.random() - 0.5) * 4, ent.y - 2, (Math.random() - 0.5) * 0.8, -0.6, 2, '#facc15', 18, 'spark');
                        }
                    } else if (ent.deathType === 'undead') {
                        if (Math.random() < 0.35) {
                            particleSystem.spawn(ent.x + (Math.random() - 0.5) * 4, ent.y, (Math.random() - 0.5) * 0.6, -0.4, 1.5, '#f8fafc', 20, 'bone', 0.05);
                        }
                    } else {
                        // Humanoid: Ascending soul wisp midway through death
                        if (ent.deathTimer === Math.floor(ent.maxDeathTimer * 0.55)) {
                            particleSystem.spawn(ent.x, ent.y - 3, 0, -0.35, 2, '#a5f3fc', 40, 'soul');
                        }
                        if (Math.random() < 0.2) {
                            particleSystem.spawn(ent.x + (Math.random() - 0.5) * 3, ent.y, (Math.random() - 0.5) * 0.4, 0.3, 1.5, '#dc2626', 15, 'blood', 0.05);
                        }
                    }
                }

                if (ent.deathTimer <= 0) {
                    ent.finalizeDeath(world, disasterManager, particleSystem, audio, this);
                    this.entities.splice(i, 1);
                }
                continue;
            }

            // Low health warning indicators
            if (ent.hp > 0 && ent.hp < ent.maxHp * 0.25 && particleSystem && Math.random() < 0.06) {
                if (ent.type === 'colossus_mech') {
                    particleSystem.spawn(ent.x, ent.y - 3, 0, -0.35, 1.5, '#64748b', 12, 'smoke');
                } else if (!ent.hasTrait('immortal')) {
                    particleSystem.spawn(ent.x + (Math.random() - 0.5) * 2, ent.y, 0, 0.2, 1, '#dc2626', 10, 'blood', 0.05);
                }
            }

            // Environmental footprints & water ripples
            if (Math.hypot(ent.vx, ent.vy) > 0.05) {
                if (ent.vx < 0) ent.facingLeft = true;
                else if (ent.vx > 0) ent.facingLeft = false;

                if (ent.stepTimer <= 0) {
                    const tx = Math.floor(ent.x);
                    const ty = Math.floor(ent.y);
                    if (world.inBounds(tx, ty) && particleSystem) {
                        const t = world.getTile(tx, ty);
                        if (t === TILES.WATER || t === TILES.DEEP_WATER) {
                            particleSystem.spawn(ent.x, ent.y + 1, 0, 0, 1.8, '#38bdf8', 16, 'water_ripple');
                        } else if (t === TILES.SAND || t === TILES.SNOW) {
                            particleSystem.spawn(ent.x, ent.y + 1, (Math.random() - 0.5) * 0.2, -0.1, 1, t === TILES.SAND ? '#d97706' : '#e2e8f0', 8, 'spark');
                        } else if (t === TILES.LAVA) {
                            particleSystem.spawn(ent.x, ent.y + 1, (Math.random() - 0.5) * 0.4, -0.3, 1, '#f97316', 10, 'fire');
                        }
                    }
                    ent.stepTimer = 8 + Math.floor(Math.random() * 5);
                } else {
                    ent.stepTimer--;
                }
            }

            // Necromancer: resurrect nearby corpses
            if (ent.hasTrait('necromancer') && Math.random() < 0.04 && this.corpses.length > 0) {
                for (let cIdx = 0; cIdx < this.corpses.length; cIdx++) {
                    const c = this.corpses[cIdx];
                    if (Math.hypot(c.x - ent.x, c.y - ent.y) < 16) {
                        this.spawn('zombie', c.x, c.y);
                        if (particleSystem) {
                            particleSystem.burst(c.x, c.y, 8, ['#22c55e', '#84cc16', '#000000'], 1, 3, 1, 2, 'stardust');
                        }
                        this.corpses.splice(cIdx, 1);
                        break;
                    }
                }
            }

            // Decrement ability cooldowns
            if (ent.abilityCooldown > 0) ent.abilityCooldown--;
            if (ent.specialCooldown > 0) ent.specialCooldown--;

            // Regeneration Trait
            if (ent.hasTrait('regenerating') && ent.hp < ent.maxHp) {
                ent.hp = Math.min(ent.maxHp, ent.hp + 0.5);
                if (particleSystem && Math.random() < 0.05) {
                    particleSystem.spawn(ent.x, ent.y - 2, 0, -0.4, 1, '#34d399', 15, 'stardust');
                }
            }

            // Electrocharged Trait
            if (ent.hasTrait('electrocharged') && Math.random() < 0.1) {
                if (particleSystem) {
                    particleSystem.spawn(ent.x + (Math.random() - 0.5) * 4, ent.y + (Math.random() - 0.5) * 4, 0, 0, 1.5, '#60a5fa', 8, 'spark');
                }
                // Shock nearest non-friendly
                const near = this.findNearestEntity(ent, (o) => o.id !== ent.id);
                if (near && Math.hypot(near.x - ent.x, near.y - ent.y) < 12) {
                    near.takeDamage(4);
                }
            }

            // Laser Eyes Autonomous Shooting
            if (ent.hasTrait('laser_eyes') && !ent.isControlled && Math.random() < 0.04) {
                const foe = this.findNearestEntity(ent, (o) => o.id !== ent.id);
                if (foe && Math.hypot(foe.x - ent.x, foe.y - ent.y) < 30) {
                    ent.usePrimaryAbility(foe.x, foe.y, world, this, particleSystem, audio);
                }
            }

            // Pyromaniac Trait
            if (ent.hasTrait('pyromaniac')) {
                if (particleSystem && Math.random() < 0.15) {
                    particleSystem.spawn(ent.x + (Math.random() - 0.5) * 4, ent.y + (Math.random() - 0.5) * 4, 0, -0.3, 1.2, '#f97316', 10, 'fire');
                }
                if (Math.random() < 0.02) {
                    const tx = Math.floor(ent.x);
                    const ty = Math.floor(ent.y);
                    if (world.inBounds(tx, ty) && world.getTile(tx, ty) === TILES.GRASS) {
                        world.ignite(tx, ty, 40);
                    }
                }
            }

            // Cryomancer Trait
            if (ent.hasTrait('cryomancer')) {
                if (particleSystem && Math.random() < 0.15) {
                    particleSystem.spawn(ent.x + (Math.random() - 0.5) * 4, ent.y + (Math.random() - 0.5) * 4, 0, -0.2, 1.2, '#a5f3fc', 10, 'spark');
                }
                const tx = Math.floor(ent.x);
                const ty = Math.floor(ent.y);
                if (world.inBounds(tx, ty)) {
                    const t = world.getTile(tx, ty);
                    if (t === TILES.WATER || t === TILES.DEEP_WATER) {
                        world.setTile(tx, ty, TILES.ICE);
                    }
                }
            }

            // Starlight Aura Trait
            if (ent.hasTrait('starlight_aura')) {
                if (particleSystem && Math.random() < 0.12) {
                    particleSystem.spawn(ent.x + (Math.random() - 0.5) * 5, ent.y - 2, 0, -0.4, 1.2, '#38bdf8', 12, 'stardust');
                }
                if (Math.random() < 0.04) {
                    for (let j = 0; j < this.entities.length; j++) {
                        const ally = this.entities[j];
                        if (ally.active && ally.id !== ent.id && Math.hypot(ally.x - ent.x, ally.y - ent.y) < 18) {
                            if (ally.hp < ally.maxHp) ally.hp = Math.min(ally.maxHp, ally.hp + 2);
                        }
                    }
                }
            }

            // Earthshaker Trait
            if (ent.hasTrait('earthshaker') && Math.hypot(ent.vx, ent.vy) > 0.1 && Math.random() < 0.08) {
                if (window.game) window.game.shakeCamera(2, 6);
                if (particleSystem) {
                    particleSystem.spawn(ent.x, ent.y + 1, (Math.random() - 0.5) * 0.8, -0.2, 1.5, '#78716c', 10, 'smoke');
                }
            }

            // If grabbed by God's Hand, skip physical AI
            if (ent.grabbed) continue;

            // If player-controlled, movement is handled via direct input
            if (ent.isControlled) {
                continue;
            }

            if (ent.frozen > 0) {
                ent.frozen--;
                continue;
            }

            // Hazard checks
            const tx = Math.floor(ent.x);
            const ty = Math.floor(ent.y);
            const tile = world.getTile(tx, ty);

            // Water drowning check
            if ((tile === TILES.WATER || tile === TILES.DEEP_WATER) && !ent.isFlying && !ent.hasTrait('water_walker') && !ent.isAquatic && ent.type !== 'alien') {
                ent.takeDamage(0.6);
                if (particleSystem && Math.random() < 0.1) {
                    particleSystem.spawn(ent.x, ent.y, 0, -0.3, 1.5, '#60a5fa', 15, 'water');
                }
            }

            // Lava & Magma Rock burning check
            if ((tile === TILES.LAVA || tile === TILES.MAGMA_ROCK) && !ent.hasTrait('fireproof') && !ent.isFlying) {
                ent.takeDamage(tile === TILES.LAVA ? 5 : 2);
                if (particleSystem) {
                    particleSystem.spawn(ent.x, ent.y, 0, -0.5, 2, '#ff5722', 20, 'fire');
                }
            }

            // Quicksand sinking check
            if (tile === TILES.QUICKSAND && !ent.isFlying && !ent.hasTrait('water_walker')) {
                ent.speed = Math.max(0.15, ent.speed * 0.4);
                ent.takeDamage(0.4);
                if (particleSystem && Math.random() < 0.15) {
                    particleSystem.spawn(ent.x, ent.y, 0, -0.2, 1.2, '#b49b65', 15, 'smoke');
                }
            }

            // AI Update
            this.updateEntityAI(ent, world, particleSystem, audio, disasterManager);
        }

        // 4. Kingdom Building Construction
        this.updateBuildings(world, particleSystem);
    }

    updateEntityAI(ent, world, particleSystem, audio, disasterManager) {
        ent.stateTimer--;

        // Boss / Mythic AI: Crabzilla & Kaiju autonomous destruction
        if (ent.type === 'crabzilla' || ent.type === 'kaiju') {
            if (ent.stateTimer <= 0) {
                ent.stateTimer = 50 + Math.floor(Math.random() * 50);
                ent.targetX = 10 + Math.random() * (world.width - 20);
                ent.targetY = 10 + Math.random() * (world.height - 20);
            }

            const dx = ent.targetX - ent.x;
            const dy = ent.targetY - ent.y;
            const dist = Math.hypot(dx, dy);

            if (dist > 3) {
                ent.vx = (dx / dist) * ent.speed;
                ent.vy = (dy / dist) * ent.speed;
                ent.x += ent.vx;
                ent.y += ent.vy;

                // Crush ground and buildings under colossal weight
                const cx = Math.floor(ent.x);
                const cy = Math.floor(ent.y);
                if (world.inBounds(cx, cy) && world.getTile(cx, cy) === TILES.FOREST) {
                    world.setTile(cx, cy, TILES.ASH);
                }
            }

            // Use primary / special abilities periodically
            if (Math.random() < 0.08) {
                const target = this.findNearestEntity(ent, (o) => o.id !== ent.id);
                if (target) {
                    ent.usePrimaryAbility(target.x, target.y, world, this, particleSystem, audio);
                }
            }
            if (Math.random() < 0.02) {
                ent.useSpecialAbility(world, this, disasterManager, particleSystem, audio);
            }
            return;
        }

        // Evermean Treant AI: Wanders, seeks out forests to headslam, or hunts hostile foes
        if (ent.type === 'evermean') {
            if (ent.stateTimer <= 0) {
                ent.stateTimer = 35 + Math.floor(Math.random() * 40);
                let foundTarget = false;
                const enemy = this.findNearestEntity(ent, (o) => o.id !== ent.id);
                if (enemy && Math.hypot(enemy.x - ent.x, enemy.y - ent.y) < 30) {
                    ent.targetX = enemy.x;
                    ent.targetY = enemy.y;
                    foundTarget = true;
                } else {
                    const cx = Math.floor(ent.x);
                    const cy = Math.floor(ent.y);
                    for (let attempt = 0; attempt < 15; attempt++) {
                        const fx = cx + Math.floor((Math.random() - 0.5) * 30);
                        const fy = cy + Math.floor((Math.random() - 0.5) * 30);
                        if (world.inBounds(fx, fy) && world.getTile(fx, fy) === TILES.FOREST) {
                            ent.targetX = fx;
                            ent.targetY = fy;
                            foundTarget = true;
                            break;
                        }
                    }
                }
                if (!foundTarget) {
                    ent.targetX = ent.x + (Math.random() - 0.5) * 25;
                    ent.targetY = ent.y + (Math.random() - 0.5) * 25;
                }
            }

            const dx = ent.targetX - ent.x;
            const dy = ent.targetY - ent.y;
            const dist = Math.hypot(dx, dy);

            if (dist > 2) {
                ent.vx = (dx / dist) * ent.speed;
                ent.vy = (dy / dist) * ent.speed;
                ent.x += ent.vx;
                ent.y += ent.vy;
            }

            // Headslam attack when close to target forest or enemy!
            const nearEnemy = this.findNearestEntity(ent, (o) => o.id !== ent.id && Math.hypot(o.x - ent.x, o.y - ent.y) < 14);
            const curTile = world.getTile(Math.floor(ent.x), Math.floor(ent.y));
            if ((nearEnemy || curTile === TILES.FOREST) && Math.random() < 0.12 && ent.abilityCooldown <= 0) {
                const targetX = nearEnemy ? nearEnemy.x : ent.targetX;
                const targetY = nearEnemy ? nearEnemy.y : ent.targetY;
                ent.usePrimaryAbility(targetX, targetY, world, this, particleSystem, audio);
            }
            if (Math.random() < 0.015 && ent.specialCooldown <= 0) {
                ent.useSpecialAbility(world, this, disasterManager, particleSystem, audio);
            }
            return;
        }

        // Dragon AI
        if (ent.type === 'dragon') {
            if (ent.stateTimer <= 0) {
                ent.stateTimer = 40 + Math.floor(Math.random() * 60);
                ent.targetX = 10 + Math.random() * (world.width - 20);
                ent.targetY = 10 + Math.random() * (world.height - 20);
            }
            const dx = ent.targetX - ent.x;
            const dy = ent.targetY - ent.y;
            const dist = Math.hypot(dx, dy);
            if (dist > 2) {
                ent.vx = (dx / dist) * ent.speed;
                ent.vy = (dy / dist) * ent.speed;
                ent.x += ent.vx;
                ent.y += ent.vy;
            }
            if (Math.random() < 0.15) {
                const angle = Math.random() * Math.PI * 2;
                this.projectiles.push(new Projectile(ent.x, ent.y, Math.cos(angle) * 2, Math.sin(angle) * 2, 'fireball', ent.id, 25));
                world.ignite(Math.floor(ent.x + (Math.random() - 0.5) * 6), Math.floor(ent.y + (Math.random() - 0.5) * 6));
            }
            return;
        }

        // Zombie AI
        if (ent.type === 'zombie') {
            const target = this.findNearestEntity(ent, (other) => other.isCiv || other.type === 'sheep' || other.type === 'cow');
            if (target) {
                const dx = target.x - ent.x;
                const dy = target.y - ent.y;
                const dist = Math.hypot(dx, dy);
                if (dist < 3) {
                    target.takeDamage(ent.attack);
                    target.applyInfection();
                    if (particleSystem) particleSystem.burst(target.x, target.y, 4, ['#ef4444'], 1, 2, 1, 2);
                } else {
                    ent.vx = (dx / dist) * ent.speed;
                    ent.vy = (dy / dist) * ent.speed;
                    ent.x += ent.vx;
                    ent.y += ent.vy;
                }
                return;
            }
        }

        // Standard Civilized AI (Humans, Elves, Orcs, Dwarves)
        if (ent.isCiv) {
            const kd = this.kingdoms.get(ent.kingdomId);

            if ((this.worldWar || (kd && kd.isAtWar)) && !this.forcePeace) {
                const enemy = this.findNearestEntity(ent, (other) => other.isCiv && other.kingdomId !== ent.kingdomId);
                if (enemy) {
                    const dx = enemy.x - ent.x;
                    const dy = enemy.y - ent.y;
                    const dist = Math.hypot(dx, dy);

                    if (ent.type === 'elf' && dist < 25 && dist > 5) {
                        if (Math.random() < 0.08) {
                            const angle = Math.atan2(dy, dx);
                            this.projectiles.push(new Projectile(ent.x, ent.y, Math.cos(angle) * 3.5, Math.sin(angle) * 3.5, 'arrow', ent.id, ent.attack));
                        }
                    } else if (dist < 2.5) {
                        enemy.takeDamage(ent.attack, ent);
                        if (particleSystem) particleSystem.burst(enemy.x, enemy.y, 3, ['#ef4444', '#ffffff'], 1, 2, 1, 2);
                    } else {
                        ent.vx = (dx / dist) * ent.speed * 1.2;
                        ent.vy = (dy / dist) * ent.speed * 1.2;
                        ent.x += ent.vx;
                        ent.y += ent.vy;
                    }
                    return;
                }
            }

            if (ent.stateTimer <= 0) {
                ent.stateTimer = 40 + Math.floor(Math.random() * 60);
                if (Math.random() < 0.4 && kd) {
                    ent.state = 'gather';
                } else {
                    ent.state = 'wander';
                    ent.targetX = ent.x + (Math.random() - 0.5) * 20;
                    ent.targetY = ent.y + (Math.random() - 0.5) * 20;
                }
            }

            if (ent.state === 'gather' && kd) {
                const tx = Math.floor(ent.x);
                const ty = Math.floor(ent.y);
                if (world.getTile(tx, ty) === TILES.FOREST) {
                    kd.wood += 2;
                    if (Math.random() < 0.05) world.setTile(tx, ty, TILES.GRASS);
                }
            }
        }

        // Standard Wandering
        const dx = ent.targetX - ent.x;
        const dy = ent.targetY - ent.y;
        const dist = Math.hypot(dx, dy);

        if (dist > 1) {
            ent.vx = (dx / dist) * ent.speed;
            ent.vy = (dy / dist) * ent.speed;
            const nx = ent.x + ent.vx;
            const ny = ent.y + ent.vy;

            const t = world.getTile(Math.floor(nx), Math.floor(ny));
            if ((t !== TILES.DEEP_WATER && t !== TILES.LAVA) || ent.isFlying || ent.hasTrait('water_walker') || ent.isAquatic) {
                ent.x = Math.max(0, Math.min(world.width - 1, nx));
                ent.y = Math.max(0, Math.min(world.height - 1, ny));
            } else {
                ent.targetX = ent.x + (Math.random() - 0.5) * 15;
                ent.targetY = ent.y + (Math.random() - 0.5) * 15;
            }
        }
    }

    updateBuildings(world, particleSystem) {
        for (const kd of this.kingdoms.values()) {
            if (kd.wood >= 15 && Math.random() < 0.02) {
                kd.wood -= 15;
                const bx = Math.floor(kd.x + (Math.random() - 0.5) * 25);
                const by = Math.floor(kd.y + (Math.random() - 0.5) * 25);
                if (world.inBounds(bx, by) && world.getTile(bx, by) === TILES.GRASS) {
                    const b = new Building(kd.buildings.length > 5 ? 'house' : 'hut', bx, by, kd.id);
                    this.buildings.push(b);
                    kd.buildings.push(b);
                    if (particleSystem) {
                        particleSystem.burst(bx, by, 8, ['#d97706', '#78350f'], 1, 2, 1, 3);
                    }
                }
            }
        }
    }

    findNearestEntity(from, filterFn = null) {
        let nearest = null;
        let minDist = Infinity;
        for (let i = 0; i < this.entities.length; i++) {
            const other = this.entities[i];
            if (!other.active || other.isDying || other.id === from.id) continue;
            if (filterFn && !filterFn(other)) continue;

            const dist = Math.hypot(other.x - from.x, other.y - from.y);
            if (dist < minDist) {
                minDist = dist;
                nearest = other;
            }
        }
        return nearest;
    }

    clone(ent) {
        if (!ent || !ent.active) return null;
        const newEnt = new Entity(ent.type, ent.x + (Math.random() - 0.5) * 6, ent.y + (Math.random() - 0.5) * 6);
        newEnt.color = ent.color;
        newEnt.hp = ent.hp;
        newEnt.maxHp = ent.maxHp;
        newEnt.attack = ent.attack;
        newEnt.speed = ent.speed;
        newEnt.scale = ent.scale;
        newEnt.size = ent.size;
        newEnt.weapon = ent.weapon;
        newEnt.kingdomId = ent.kingdomId;
        ent.traits.forEach(t => newEnt.traits.add(t));
        this.entities.push(newEnt);
        return newEnt;
    }

    equipNearest(x, y, weaponType) {
        const ent = this.findNearestEntity({ id: -1, x, y });
        if (ent && Math.hypot(ent.x - x, ent.y - y) < (ent.size * ent.scale + 16)) {
            ent.equipWeapon(weaponType);
            return ent;
        }
        return null;
    }

    getKingdomOverview() {
        const overview = [];
        for (const kd of this.kingdoms.values()) {
            let kingName = "Elected Council";
            let pop = 0;
            let warriors = 0;
            for (let i = 0; i < this.entities.length; i++) {
                const ent = this.entities[i];
                if (ent.active && ent.kingdomId === kd.id) {
                    pop++;
                    if (ent.isKing) kingName = ent.name;
                    if (ent.attack > 15) warriors++;
                }
            }
            const bCount = this.buildings.filter(b => b.kingdomId === kd.id).length;
            const enemyNames = [];
            for (const enemyId of kd.enemies) {
                if (this.kingdoms.has(enemyId)) enemyNames.push(this.kingdoms.get(enemyId).name);
            }
            overview.push({
                id: kd.id,
                name: kd.name,
                color: kd.color,
                ruler: kingName,
                population: pop,
                warriors: warriors,
                buildings: bCount,
                wood: kd.wood,
                stone: kd.stone,
                enemies: enemyNames
            });
        }
        return overview;
    }

    damageBuildingsInRadius(cx, cy, radius, damage, world = null, particleSystem = null, audio = null) {
        for (let i = this.buildings.length - 1; i >= 0; i--) {
            const b = this.buildings[i];
            if (Math.hypot(b.x - cx, b.y - cy) <= radius) {
                if (b.takeDamage(damage, world, particleSystem, audio)) {
                    this.buildings.splice(i, 1);
                }
            }
        }
    }

    clear() {
        this.entities = [];
        this.kingdoms.clear();
        this.buildings = [];
        this.projectiles = [];
        this.corpses = [];
        this.floatingTexts = [];
        this.explosiveEggs = [];
        this.nextKingdomId = 1;
    }
}

window.TRAITS = TRAITS;
window.Kingdom = Kingdom;
window.Building = Building;
window.ExplosiveEgg = ExplosiveEgg;
window.Entity = Entity;
window.EntityManager = EntityManager;
