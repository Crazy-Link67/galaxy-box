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
    peaceful: { name: "Peaceful", desc: "Never starts fights or hurts other creatures", icon: "🕊️" }
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

class Entity {
    constructor(type, x, y, customData = null) {
        this.id = Math.floor(Math.random() * 1000000);
        this.type = type;
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

        // Traits set
        this.traits = new Set();

        // Custom properties (for Creature Creator)
        this.customData = customData;

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
        if (this.blessed && Math.random() < 0.3) return false;
        if (this.hasTrait('immortal') && Math.random() < 0.5) return false;

        this.hp -= amount;
        if (this.hp <= 0) {
            this.hp = 0;
            this.active = false;
            if (source && source.kills !== undefined) source.kills++;
            return true; // died
        }
        return false;
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

        if (this.type === 'crabzilla' || this.hasTrait('laser_eyes')) {
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
        } else if (this.type === 'phoenix' || this.type === 'dragon') {
            // Fireball
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
                if (particleSystem) particleSystem.burst(target.x, target.y, 6, ['#ef4444', '#ffffff'], 1, 3, 1, 2);
            }
        }
    }

    useSpecialAbility(world, entityManager, disasterManager, particleSystem, audio) {
        if (this.specialCooldown > 0) return;
        this.specialCooldown = 60;

        if (this.type === 'crabzilla') {
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
        this.nextKingdomId = 1;
        this.forcePeace = false;
        this.worldWar = false;
    }

    spawn(type, x, y, customData = null) {
        const ent = new Entity(type, x, y, customData);

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

    update(world, particleSystem, audio, disasterManager) {
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

        // 2. Update Kingdoms population count
        for (const kd of this.kingdoms.values()) {
            kd.population = 0;
        }
        for (let i = 0; i < this.entities.length; i++) {
            const ent = this.entities[i];
            if (ent.active && ent.kingdomId && this.kingdoms.has(ent.kingdomId)) {
                this.kingdoms.get(ent.kingdomId).population++;
            }
        }

        // 3. Update Entities
        for (let i = this.entities.length - 1; i >= 0; i--) {
            const ent = this.entities[i];
            if (!ent.active) {
                if (ent.hasTrait('explosive_death') && disasterManager) {
                    disasterManager.triggerExplosion(ent.x, ent.y, 16, 1.5, world, this, particleSystem, audio);
                }
                this.entities.splice(i, 1);
                continue;
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

            // Lava burning check
            if (tile === TILES.LAVA && !ent.hasTrait('fireproof') && !ent.isFlying) {
                ent.takeDamage(5);
                if (particleSystem) {
                    particleSystem.spawn(ent.x, ent.y, 0, -0.5, 2, '#ff5722', 20, 'fire');
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
            if (!other.active || other.id === from.id) continue;
            if (filterFn && !filterFn(other)) continue;

            const dist = Math.hypot(other.x - from.x, other.y - from.y);
            if (dist < minDist) {
                minDist = dist;
                nearest = other;
            }
        }
        return nearest;
    }

    clear() {
        this.entities = [];
        this.kingdoms.clear();
        this.buildings = [];
        this.projectiles = [];
        this.nextKingdomId = 1;
    }
}

window.TRAITS = TRAITS;
window.Kingdom = Kingdom;
window.Building = Building;
window.Entity = Entity;
window.EntityManager = EntityManager;
