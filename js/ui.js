// ==========================================
// GALAXYBOX - UI Manager & Category Systems
// 6 Core Categories with rich power palettes
// ==========================================

const CATEGORIES = [
    { id: 'destruction', name: 'Destruction & Chaos', icon: '💥', key: '1' },
    { id: 'nature', name: 'Nature & Disasters', icon: '🌪️', key: '2' },
    { id: 'landscaping', name: 'Landscaping', icon: '🗺️', key: '3' },
    { id: 'powers', name: 'Various Powers', icon: '✨', key: '4' },
    { id: 'creatures', name: 'Creatures & Civs', icon: '👥', key: '5' },
    { id: 'menu', name: 'Menu & Settings', icon: '⚙️', key: '6' }
];

const CATEGORY_TOOLS = {
    destruction: [
        { id: 'nuke', name: 'Atomic Nuke', icon: '☢️', desc: 'Colossal 65-tile radioactive blast and mega mushroom cloud.' },
        { id: 'duck_barrage', name: 'Duck Barrage', icon: '🦆', desc: 'Orbital air-drop raining ticking explosive ducks from the heavens!' },
        { id: 'plasma_barrage', name: 'Plasma Barrage', icon: '⚡', desc: 'High-velocity azure plasma artillery bombardment cratering terrain.' },
        { id: 'gamma_ray', name: 'Gamma Ray', icon: '☢️', desc: 'Piercing cosmic radiation beam melting and disintegrating all matter.' },
        { id: 'napalm_strike', name: 'Napalm Airstrike', icon: '🔥', desc: 'Air carpet-bombing releasing blazing sea of continuous fire.' },
        { id: 'kinetic_strike', name: 'Kinetic Rod Strike', icon: '☄️', desc: 'Dense tungsten telephone pole dropped from orbit piercing bedrock.' },
        { id: 'void_implosion', name: 'Void Implosion', icon: '🌌', desc: 'Inverted cosmic shockwave pulling surrounding land into singularity.' },
        { id: 'nuke_missile', name: 'Nuke Missile', icon: '🚀', desc: 'Guided ballistic missile causing catastrophic atomic detonation.' },
        { id: 'ion_cannon', name: 'Orbital Ion Cannon', icon: '🛰️', desc: 'Targeting grid summoning an orbital death beam from space.' },
        { id: 'rift', name: 'Dimension Rift', icon: '🌀', desc: 'Cosmic tear pulling land in and spawning nether demons.' },
        { id: 'antimatter', name: 'Antimatter Bomb', icon: '🌌', desc: 'Cosmic implosion that vaporizes all matter into void.' },
        { id: 'blackhole', name: 'Black Hole', icon: '🕳️', desc: 'Singularity that sucks in land and creatures.' },
        { id: 'laser', name: 'Orbital Laser', icon: '⚡', desc: 'Continuous divine death ray beam.' },
        { id: 'meteor', name: 'Meteor Strike', icon: '☄️', desc: 'Fiery space rock hurtling down with crater.' },
        { id: 'cluster', name: 'Cluster Missiles', icon: '🚀', desc: 'Multiple cascading micro-explosions.' },
        { id: 'disintegrator', name: 'Tsar Finger', icon: '👆', desc: 'Instant pixel disintegration on touch.' },
        { id: 'tnt', name: 'TNT Explosive', icon: '🧨', desc: 'Heavy explosive block causing fiery shockwave.' },
        { id: 'supernova', name: 'Supernova', icon: '⭐', desc: 'Colossal 85-tile cosmic star detonation.' },
        { id: 'supernova_implosion', name: 'Supernova Collapse', icon: '💫', desc: 'SECRET: Catastrophic stellar collapse obliterating the regional cosmos.' },
        { id: 'corrosion', name: 'Corrosion Bomb', icon: '🧪', desc: 'Shower of bubbling acid melting everything.' }
    ],
    nature: [
        { id: 'volcano', name: 'Volcano', icon: '🌋', desc: 'Spews endless ash, smoke, and molten lava.' },
        { id: 'supervolcano', name: 'Supervolcano', icon: '🌋', desc: 'Massive caldera rupture generating continents of magma and ash.' },
        { id: 'solar_flare', name: 'Solar Flare', icon: '☀️', desc: 'Blinding solar storm pulse igniting surface vegetation and supercharging creatures.' },
        { id: 'frost_tempest', name: 'Frost Tempest', icon: '❄️', desc: 'Arctic blizzard gale rapidly glaciating waters into ice sheets.' },
        { id: 'crystal_spire', name: 'Crystal Spire', icon: '💎', desc: 'Spawns towering resonant geological crystal pillars from the ground.' },
        { id: 'tornado', name: 'Tornado', icon: '🌪️', desc: 'Wandering twister flinging trees and creatures.' },
        { id: 'fire_tornado', name: 'Fire Tornado', icon: '🌪️', desc: 'Vortex of spinning fire incinerating everything in its path.' },
        { id: 'meteor_shower', name: 'Meteor Shower', icon: '🌠', desc: 'Torrential barrage of celestial meteors pounding the realm.' },
        { id: 'geyser', name: 'Thermal Geyser', icon: '⛲', desc: 'High-pressure thermal water eruption bursting from ground.' },
        { id: 'earthquake', name: 'Earthquake', icon: '⚡', desc: 'Tears jagged magma chasms through the terrain.' },
        { id: 'lightning', name: 'Lightning Strike', icon: '🌩️', desc: 'Electric strike that burns or empowers.' },
        { id: 'tsunami', name: 'Tsunami Deluge', icon: '🌊', desc: 'Giant surge of ocean water flooding land.' },
        { id: 'rain', name: 'Reviving Rain', icon: '🌧️', desc: 'Extinguishes fires, replenishes plants.' },
        { id: 'snow', name: 'Blizzard', icon: '❄️', desc: 'Freezes lakes and coats the world in snow.' },
        { id: 'acidrain', name: 'Acid Storm', icon: '☣️', desc: 'Toxic green rain dissolving vegetation.' },
        { id: 'sandstorm', name: 'Sandstorm', icon: '🏜️', desc: 'Fierce desert gale eroding terrain and vegetation into sand.' },
        { id: 'clone_rain', name: 'Clone Rain', icon: '🔮', desc: 'Arcane celestial tempest raining cloned creatures from heaven!' },
        { id: 'wildfire', name: 'Wildfire', icon: '🔥', desc: 'Rapidly propagating forest fire.' }
    ],
    landscaping: [
        { id: 'deep_water', name: 'Deep Ocean', icon: '🌊', desc: 'Dark, deep oceanic waters.' },
        { id: 'water', name: 'Shallow Water', icon: '💧', desc: 'Flowing water for rivers and lakes.' },
        { id: 'sand', name: 'Sand', icon: '🏖️', desc: 'Warm coastal beaches and desert sands.' },
        { id: 'quicksand', name: 'Quicksand', icon: '⏳', desc: 'Treacherous shifting sand trap swallowing unwary creatures.' },
        { id: 'soil', name: 'Fertile Soil', icon: '🟤', desc: 'Rich soil where vegetation thrives.' },
        { id: 'grass', name: 'Grassland', icon: '🌱', desc: 'Lush green grass for grazing.' },
        { id: 'forest', name: 'Dense Forest', icon: '🌲', desc: 'Lush woodland providing timber.' },
        { id: 'bioluminescent_moss', name: 'Bioluminescent Moss', icon: '🌿', desc: 'Alien glowing moss spreading across moisture and illuminating land.' },
        { id: 'stone', name: 'Rock / Mountain', icon: '⛰️', desc: 'Durable stone and mineral hills.' },
        { id: 'mountain', name: 'High Peak', icon: '🏔️', desc: 'Towering mountain summit.' },
        { id: 'snow', name: 'Snow Blanket', icon: '🌨️', desc: 'Frigid snowy terrain.' },
        { id: 'ice', name: 'Solid Ice', icon: '🧊', desc: 'Slick ice that melts when heated.' },
        { id: 'lava', name: 'Molten Lava', icon: '🔥', desc: 'Fiery magma that solidifies near water.' },
        { id: 'magma_rock', name: 'Magma Rock', icon: '🧱', desc: 'Superheated volcanic rock scorching passersby and warming soil.' },
        { id: 'acid', name: 'Acid Sludge', icon: '🧪', desc: 'Corrosive sludge melting organic matter.' },
        { id: 'obsidian', name: 'Obsidian Glass', icon: '🖤', desc: 'Volcanic glossy dark mineral glass.' },
        { id: 'crystal', name: 'Prismatic Crystal', icon: '💎', desc: 'Luminescent gemstone refracting prismatic light.' },
        { id: 'bedrock', name: 'Bedrock Wall', icon: '🧱', desc: 'Indestructible barrier to contain chaos.' },
        { id: 'nebula', name: 'Cosmic Nebula', icon: '🌌', desc: 'Swirling luminous interstellar fluid nebula.' },
        { id: 'stardust', name: 'Stardust Land', icon: '✨', desc: 'Gleaming celestial stardust soil.' },
        { id: 'level_terrain', name: 'Plateau / Level', icon: '📐', desc: 'Flattens surrounding terrain to match clicked elevation and tile.' },
        { id: 'raise', name: 'Shovel (Raise)', icon: '⬆️', desc: 'Elevates terrain towards mountains.' },
        { id: 'lower', name: 'Shovel (Lower)', icon: '⬇️', desc: 'Carves valleys and ocean trenches.' },
        { id: 'sponge', name: 'Sponge Cake', icon: '🧽', desc: 'Absorbs fluids without altering ground.' },
        { id: 'fertilizer', name: 'Life Sprout', icon: '🌾', desc: 'Sprouts dense flora, trees and crops.' }
    ],
    powers: [
        { id: 'hand', name: "God's Hand", icon: '✋', desc: 'Grab any creature and fling with momentum!' },
        { id: 'chrono_freeze', name: 'Chrono Freeze', icon: '⌛', desc: 'Freeze time across the entire world for 5 seconds!' },
        { id: 'genesis_wave', name: 'Genesis Wave', icon: '🌱', desc: 'Celestial revival wave sweeping across the globe restoring lush green biomes.' },
        { id: 'duck_stampede', name: 'Duck Stampede', icon: '🦆', desc: 'Summon a rampaging horde of 25 hyper-speed quacking explosive ducks!' },
        { id: 'sanctuary_beacon', name: 'Sanctuary Beacon', icon: '🏛️', desc: 'Divine golden obelisk projecting protective energy shields & health regen.' },
        { id: 'war_drum', name: 'War Horn', icon: '📯', desc: 'Ancient battle horn supercharging all kingdom warriors with 2x speed and fury!' },
        { id: 'bounty_blessing', name: 'Bounty Harvest', icon: '🌾', desc: 'Instantly mature all kingdom crops, spawn gold veins and timber stores.' },
        { id: 'shield', name: 'Forcefield Bubble', icon: '🛡️', desc: 'Deploy a protective kinetic shield bubble deflecting attacks.' },
        { id: 'mind_control', name: 'Mind Control', icon: '🧠', desc: 'Psychic wave ordering all nearby creatures to march to target.' },
        { id: 'overclock', name: 'Overclock Surge', icon: '⚡', desc: 'Infuses creatures with 2.5x speed, power, and electric aura.' },
        { id: 'chronos_stasis', name: 'Chronos Stasis', icon: '⏱️', desc: 'Freeze time and motion for all nearby creatures.' },
        { id: 'teleport', name: 'Cosmic Teleport', icon: '✨', desc: 'Instantly warp controlled hero or selected creature to clicked position.' },
        { id: 'necromancy', name: 'Necromancy', icon: '☠️', desc: 'Summon an undead skeleton army out of the earth.' },
        { id: 'equip_thunder_hammer', name: 'Equip: Thunder Hammer', icon: '⚡', desc: 'Arm creature with lightning hammer causing thunderous ground slams (+35 Atk).' },
        { id: 'equip_flamethrower', name: 'Equip: Flamethrower', icon: '🔥', desc: 'Arm creature with heavy flamethrower unleashing continuous fiery streams (+20 Atk).' },
        { id: 'equip_frost_wand', name: 'Equip: Frost Wand', icon: '❄️', desc: 'Arm creature with glacial wand casting freezing projectile bolts (+20 Atk).' },
        { id: 'equip_chaos_mace', name: 'Equip: Chaos Mace', icon: '💥', desc: 'Arm creature with heavy explosive war mace fracturing buildings (+30 Atk).' },
        { id: 'equip_shuriken', name: 'Equip: Shuriken Fan', icon: '🥷', desc: 'Arm creature with throwing stars launched in high-speed fans (+15 Atk).' },
        { id: 'equip_sword', name: 'Equip: Flaming Sword', icon: '🗡️', desc: 'Arm nearest creature with a flaming melee broadsword (+15 Atk).' },
        { id: 'equip_bow', name: 'Equip: Ranger Bow', icon: '🏹', desc: 'Arm nearest creature with a rapid-fire recurve bow (+range).' },
        { id: 'equip_blaster', name: 'Equip: Plasma Blaster', icon: '🔫', desc: 'Arm nearest creature with a futuristic plasma ray pistol.' },
        { id: 'equip_staff', name: 'Equip: Arcane Staff', icon: '🪄', desc: 'Arm nearest creature with a homing stardust magic staff.' },
        { id: 'equip_void_scythe', name: 'Equip: Void Scythe', icon: '⚔️', desc: 'Arm creature with a life-stealing scythe of the cosmic void (+25 Atk).' },
        { id: 'equip_laser_cannon', name: 'Equip: Laser Cannon', icon: '🔫', desc: 'Arm creature with dual high-tech photon beam blasters (+30 Atk).' },
        { id: 'equip_galaxy_blade', name: 'Equip: Galaxy Blade', icon: '🌟', desc: 'SECRET: Bestow celestial crescent sword launching stellar waves (+45 Atk)!' },
        { id: 'cosmic_oblivion', name: 'Cosmic Oblivion', icon: '🔱', desc: 'SECRET: Unfurl absolute divine annihilation ray upon the universe!' },
        { id: 'galaxy_sacrifice', name: 'Galaxy Sacrifice', icon: '🌌', desc: 'Trigger the Great Galaxy Sacrifice to unlock the Cosmic Vault!' },
        { id: 'heatray', name: 'Heat Ray', icon: '☀️', desc: 'Intense thermal beam to melt or ignite.' },
        { id: 'freezeray', name: 'Freeze Ray', icon: '❄️', desc: 'Cryogenic beam freezing water and creatures.' },
        { id: 'blessing', name: 'Divine Blessing', icon: '✨', desc: 'Golden halo, double HP, super speed.' },
        { id: 'curse', name: 'Void Curse', icon: '💀', desc: 'Shrinks, weakens, and halving HP.' },
        { id: 'plague', name: 'Zombie Plague', icon: '🧟', desc: 'Contagious spores turning humans into undead.' },
        { id: 'snap', name: 'Coin of Fate', icon: '🪙', desc: '50% of all living things dissolve in dust.' },
        { id: 'heal', name: 'Divine Heal', icon: '💚', desc: 'Restores all creatures to full health.' },
        { id: 'frenzy', name: 'Bloodlust', icon: '🩸', desc: 'Forces creatures into violent frenzy.' },
        { id: 'growth', name: 'Titan Ray', icon: '📈', desc: 'Enlarges creature into a towering giant.' },
        { id: 'shrink', name: 'Shrink Ray', icon: '📉', desc: 'Minimizes creature to tiny scale.' },
        { id: 'ufo', name: 'Alien Saucer', icon: '🛸', desc: 'Spawns UFO abducting cows and humans.' },
        { id: 'inspect', name: 'Miracle Eye', icon: '🔍', desc: 'Inspect creature and tile detailed stats.' }
    ],
    creatures: [
        { id: 'control', name: 'Possess / Control', icon: '🎮', desc: 'Directly pilot and control any creature with WASD & attacks!' },
        { id: 'creator', name: 'Creature Creator', icon: '🎨', desc: 'Design, customize, and build your own custom monsters!' },
        { id: 'duck', name: 'Exploding Duck', icon: '🦆', desc: 'Quacking aquatic fowl that lays ticking explosive eggs and detonates upon death!' },
        { id: 'evermean', name: 'Evermean Treant', icon: '🌲', desc: 'Eyeless walking tree with sharp needle legs that headslams foes and forest trees!' },
        { id: 'crystal_golem', name: 'Crystal Golem', icon: '💎', desc: 'Living prism colossus firing refracting light beams and raising crystals.' },
        { id: 'shadow_assassin', name: 'Shadow Assassin', icon: '🥷', desc: 'Stealthy rogue executing rapid shadow-strike dashes and smoke evasions.' },
        { id: 'dragon', name: 'Fire Dragon', icon: '🐉', desc: 'Controllable winged titan with flamethrower breath & dive-bomb firestorm!' },
        { id: 'colossus_mech', name: 'Colossus Mech', icon: '🤖', desc: 'Heavy walker titan equipped with twin railguns and micro-missile swarms.' },
        { id: 'void_titan', name: 'Void Titan', icon: '👾', desc: 'SECRET: Colossal cosmic nightmare wielding singularity collapse vortices!' },
        { id: 'seraph_angel', name: 'Seraph Angel', icon: '👼', desc: 'Six-winged celestial deity casting divine light and group healing.' },
        { id: 'dune_leviathan', name: 'Dune Leviathan', icon: '🪱', desc: 'Colossal segmented desert sandworm breaching through rock and earth.' },
        { id: 'vampire_lord', name: 'Vampire Lord', icon: '🧛', desc: 'Gothic immortal lord draining lifeforce and dashing as bat swarms.' },
        { id: 'mech', name: 'Steampunk Mech', icon: '🤖', desc: 'Controllable heavy armored combat walker with gatling cannon & rockets!' },
        { id: 'wizard', name: 'Arcane Wizard', icon: '🧙', desc: 'Wise archmage casting homing mystic stardust orbs and novae.' },
        { id: 'tank', name: 'Battle Tank', icon: '🚜', desc: 'Heavy armored combat vehicle with explosive cannon & MG turret.' },
        { id: 'warship', name: 'Battleship', icon: '🚢', desc: 'Heavy naval vessel navigating waters with broadside cannons.' },
        { id: 'helicopter', name: 'Attack Chopper', icon: '🚁', desc: 'Armed aerial gunship with vulcan machine guns and rockets.' },
        { id: 'starfighter', name: 'Cosmic Starfighter', icon: '🚀', desc: 'Interstellar spacecraft with photon plasma lasers and warp shockwave.' },
        { id: 'galaxy_guardian', name: 'Galaxy Guardian', icon: '✨', desc: 'Cosmic celestial titan with planetary rings. Nuke it to trigger The Great Galaxy Sacrifice!' },
        { id: 'crabzilla', name: 'Crabzilla', icon: '🦀', desc: 'Colossal titan crab with twin eye lasers and mega stomp!' },
        { id: 'kaiju', name: 'Kaiju Godzilla', icon: '🦖', desc: 'Atomic radioactive behemoth with atomic breath ray!' },
        { id: 'phoenix', name: 'Solar Phoenix', icon: '🦅', desc: 'Immortal fire bird reborn with solar flares!' },
        { id: 'kraken', name: 'Abyssal Kraken', icon: '🦑', desc: 'Deep sea leviathan with tentacle strikes!' },
        { id: 'hydra', name: 'Venom Hydra', icon: '🐍', desc: 'Multi-headed regenerative serpent with acid spit!' },
        { id: 'frost_titan', name: 'Frost Titan', icon: '🧊', desc: 'Glacial colossus freezing land and casting frost novas!' },
        { id: 'human', name: 'Human Settler', icon: '🧑', desc: 'Builds villages, houses, and kingdoms.' },
        { id: 'elf', name: 'High Elf', icon: '🧝', desc: 'Nature-loving civilization with archery.' },
        { id: 'orc', name: 'Orc Warrior', icon: '👹', desc: 'Tough, aggressive clan fighters.' },
        { id: 'dwarf', name: 'Mountain Dwarf', icon: '🧔', desc: 'Sturdy miners and stone builders.' },
        { id: 'sheep', name: 'Sheep', icon: '🐑', desc: 'Peaceful grazing livestock.' },
        { id: 'cow', name: 'Cow', icon: '🐄', desc: 'Domestic farm animal.' },
        { id: 'wolf', name: 'Grey Wolf', icon: '🐺', desc: 'Pack predator hunting sheep and villagers.' },
        { id: 'bear', name: 'Grizzly Bear', icon: '🐻', desc: 'Fierce territorial apex beast.' },
        { id: 'golem', name: 'Rock Golem', icon: '🗿', desc: 'Massive stone titan stomping terrain.' },
        { id: 'zombie', name: 'Zombie Horde', icon: '🧟', desc: 'Infectious undead biting the living.' },
        { id: 'skeleton', name: 'Skeleton', icon: '💀', desc: 'Risen undead warrior with sword.' },
        { id: 'demon', name: 'Nether Demon', icon: '😈', desc: 'Fire-proof fiend of magma.' },
        { id: 'alien', name: 'Alien Scout', icon: '👽', desc: 'Futuristic invader shooting rayguns.' },
        { id: 'toggle_peace', name: 'Law: Force Peace', icon: '🕊️', desc: 'Toggles peaceful coexistence.' },
        { id: 'toggle_war', name: 'Law: Provoke War', icon: '⚔️', desc: 'Toggles global kingdom war.' }
    ],
    menu: [
        { id: 'btn_gen', name: 'World Generator', icon: '🌍', desc: 'Procedural continents, islands, seeds.' },
        { id: 'btn_secrets', name: 'Cosmic Vault', icon: '🔮', desc: 'View unlocked secrets from The Great Galaxy Sacrifice.' },
        { id: 'btn_diplomacy', name: 'Kingdom Ledger', icon: '👑', desc: 'Inspect all sovereign empires, populations, and wars.' },
        { id: 'btn_save', name: 'Save / Load', icon: '💾', desc: 'Local slots and JSON world export.' },
        { id: 'btn_settings', name: 'Settings', icon: '⚙️', desc: 'Audio volume, display toggles, FPS.' },
        { id: 'btn_codex', name: "God's Codex", icon: '📖', desc: 'Complete encyclopedia and guides.' },
        { id: 'btn_clear', name: 'Reset World', icon: '🗑️', desc: 'Clear world to blank ocean.' }
    ]
};

class UIManager {
    constructor(game) {
        this.game = game;
        this.currentCategory = 'destruction';
        this.activeTool = 'nuke';
        this.brushSize = 5;
        this.initDOM();
    }

    initDOM() {
        this.categoryTabsContainer = document.getElementById('category-tabs');
        this.toolPaletteContainer = document.getElementById('tool-palette');
        this.toolNameEl = document.getElementById('active-tool-name');
        this.toolDescEl = document.getElementById('active-tool-desc');
        this.brushSizeEl = document.getElementById('brush-size-val');
        this.inspectorPanel = document.getElementById('inspector-panel');

        this.renderCategoryTabs();
        this.switchCategory(this.currentCategory);
        this.setupEventListeners();
        this.initSettings();
        this.initCreatorStudio();
        this.setupVirtualMobileControls();
        this.setupPWA();
        this.updateGalaxyPresetUI();
    }

    renderCategoryTabs() {
        this.categoryTabsContainer.innerHTML = '';
        CATEGORIES.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = `cat-tab ${cat.id === this.currentCategory ? 'active' : ''}`;
            btn.dataset.cat = cat.id;
            btn.innerHTML = `<span class="cat-icon">${cat.icon}</span><span class="cat-label">${cat.name}</span><span class="cat-key">${cat.key}</span>`;
            btn.onclick = () => {
                if (this.game.audio) this.game.audio.playClick();
                this.switchCategory(cat.id);
            };
            this.categoryTabsContainer.appendChild(btn);
        });
    }

    switchCategory(catId) {
        this.currentCategory = catId;

        // Update Tab visual
        const tabs = this.categoryTabsContainer.querySelectorAll('.cat-tab');
        tabs.forEach(t => {
            t.classList.toggle('active', t.dataset.cat === catId);
        });

        // Populate tool palette
        this.toolPaletteContainer.innerHTML = '';
        const tools = CATEGORY_TOOLS[catId] || [];

        tools.forEach((tool, idx) => {
            const btn = document.createElement('button');
            btn.className = `tool-btn ${tool.id === this.activeTool ? 'active' : ''}`;
            btn.dataset.tool = tool.id;
            btn.title = `${tool.name} - ${tool.desc}`;
            btn.innerHTML = `<span class="tool-icon">${tool.icon}</span><span class="tool-name">${tool.name}</span>`;

            btn.onclick = () => {
                if (this.game.audio) this.game.audio.playClick();
                this.selectTool(tool);
            };

            this.toolPaletteContainer.appendChild(btn);
        });

        // Default to first tool of category if not menu
        if (catId !== 'menu' && tools.length > 0) {
            this.selectTool(tools[0]);
        }
    }

    selectTool(tool) {
        // Special actions for menu tools
        if (tool.id === 'btn_gen') {
            this.showModal('modal-generator');
            return;
        } else if (tool.id === 'btn_diplomacy') {
            this.showModal('modal-diplomacy');
            this.populateDiplomacyLedger();
            return;
        } else if (tool.id === 'btn_save') {
            this.showModal('modal-save');
            this.refreshSaveSlots();
            return;
        } else if (tool.id === 'btn_settings') {
            this.showModal('modal-settings');
            return;
        } else if (tool.id === 'btn_codex') {
            this.showModal('modal-codex');
            return;
        } else if (tool.id === 'btn_secrets') {
            this.showGalaxyUnlockModal();
            return;
        } else if (tool.id === 'btn_clear') {
            if (confirm("Reset the entire world to blank water?")) {
                this.game.world.generate('ocean');
                this.game.entityManager.clear();
                this.game.disasterManager.clear();
                this.game.particleSystem.clear();
            }
            return;
        } else if (tool.id === 'toggle_peace') {
            this.game.entityManager.forcePeace = !this.game.entityManager.forcePeace;
            this.game.entityManager.worldWar = false;
            alert(this.game.entityManager.forcePeace ? "World Law: Global Peace enforced!" : "World Law: Peace law lifted.");
            return;
        } else if (tool.id === 'toggle_war') {
            this.game.entityManager.worldWar = !this.game.entityManager.worldWar;
            this.game.entityManager.forcePeace = false;
            alert(this.game.entityManager.worldWar ? "World Law: Total Kingdom War declared!" : "World Law: War frenzy calmed.");
            return;
        }

        // Check if tool is a secret locked power
        const secretTools = ['void_titan', 'cosmic_oblivion', 'equip_galaxy_blade', 'supernova_implosion'];
        if (secretTools.includes(tool.id)) {
            const isUnlocked = localStorage.getItem('galaxybox_secrets_unlocked') === 'true' || localStorage.getItem('galaxybox_galaxy_unlocked') === 'true';
            if (!isUnlocked) {
                alert("🔒 SECRET COSMIC ARSENAL LOCKED!\n\nTo unlock the secret powers, titans, and presets, complete The Great Galaxy Sacrifice:\n1. Spawn a Galaxy Guardian (Creatures tab ✨)\n2. Detonate an Atomic Nuke (Destruction tab ☢️) directly on it!");
                return;
            }
        }

        this.activeTool = tool.id;
        if (this.toolNameEl) this.toolNameEl.textContent = tool.name;
        if (this.toolDescEl) this.toolDescEl.textContent = tool.desc;

        const btns = this.toolPaletteContainer.querySelectorAll('.tool-btn');
        btns.forEach(b => b.classList.toggle('active', b.dataset.tool === tool.id));
    }

    setBrushSize(size) {
        this.brushSize = Math.max(1, Math.min(35, size));
        if (this.brushSizeEl) this.brushSizeEl.textContent = this.brushSize;
    }

    setupEventListeners() {
        // Brush size buttons
        const bMinus = document.getElementById('brush-minus');
        const bPlus = document.getElementById('brush-plus');
        if (bMinus) bMinus.onclick = () => this.setBrushSize(this.brushSize - 2);
        if (bPlus) bPlus.onclick = () => this.setBrushSize(this.brushSize + 2);

        // Time controls
        document.querySelectorAll('.time-btn').forEach(btn => {
            btn.onclick = () => {
                if (this.game.audio) this.game.audio.playClick();
                document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.game.timeScale = parseFloat(btn.dataset.speed);
            };
        });

        // Modal Close Buttons
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.onclick = () => {
                btn.closest('.modal-overlay').classList.remove('active');
            };
        });

        // Close on background click
        document.querySelectorAll('.modal-overlay').forEach(modal => {
            modal.onclick = (e) => {
                if (e.target === modal) modal.classList.remove('active');
            };
        });

        // Generator Presets
        document.querySelectorAll('.gen-preset-btn').forEach(btn => {
            btn.onclick = () => {
                const preset = btn.dataset.preset;
                if (preset === 'galaxy' || preset === 'binary_stars' || preset === 'deep_nebula') {
                    const isUnlocked = localStorage.getItem('galaxybox_secrets_unlocked') === 'true' || localStorage.getItem('galaxybox_galaxy_unlocked') === 'true';
                    if (!isUnlocked) {
                        alert("🔒 LOCKED: Secret Cosmic Preset!\n\nTo unlock the secret cosmic presets and weapons, perform The Great Galaxy Sacrifice:\n1. Spawn a Galaxy Guardian (Creatures tab ✨)\n2. Drop an Atomic Nuke (Destruction tab ☢️) directly onto it!");
                        return;
                    }
                }
                const seed = parseInt(document.getElementById('gen-seed').value) || Math.floor(Math.random() * 999999);
                this.game.generateWorld(preset, seed);
                document.getElementById('modal-generator').classList.remove('active');
            };
        });

        // World Pixel Density / Size Selector buttons
        document.querySelectorAll('.world-size-btn').forEach(btn => {
            btn.onclick = () => {
                if (this.game.audio) this.game.audio.playClick();
                document.querySelectorAll('.world-size-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const w = parseInt(btn.dataset.width);
                const h = parseInt(btn.dataset.height);
                this.game.setWorldSize(w, h);
            };
        });

        // Cinematic mode button
        const btnCinematic = document.getElementById('btn-cinematic');
        if (btnCinematic) {
            btnCinematic.onclick = () => {
                if (this.game.audio) this.game.audio.playClick();
                document.body.classList.toggle('cinematic');
            };
        }

        // Diplomacy ledger buttons
        const btnLedgerPeace = document.getElementById('btn-ledger-peace');
        if (btnLedgerPeace) {
            btnLedgerPeace.onclick = () => {
                this.game.entityManager.forcePeace = true;
                this.game.entityManager.worldWar = false;
                if (this.game.audio) this.game.audio.playMagic();
                this.populateDiplomacyLedger();
            };
        }
        const btnLedgerWar = document.getElementById('btn-ledger-war');
        if (btnLedgerWar) {
            btnLedgerWar.onclick = () => {
                this.game.entityManager.worldWar = true;
                this.game.entityManager.forcePeace = false;
                if (this.game.audio) this.game.audio.playThunder();
                this.populateDiplomacyLedger();
            };
        }

        // Export & Import
        const expBtn = document.getElementById('btn-export-world');
        if (expBtn) {
            expBtn.onclick = () => {
                const data = this.game.world.serialize();
                const str = JSON.stringify(data);
                const blob = new Blob([str], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `galaxybox_world_${Date.now()}.json`;
                a.click();
                URL.revokeObjectURL(url);
            };
        }

        const impInput = document.getElementById('input-import-world');
        if (impInput) {
            impInput.onchange = (e) => {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (ev) => {
                    try {
                        const parsed = JSON.parse(ev.target.result);
                        this.game.world.deserialize(parsed);
                        this.game.entityManager.clear();
                        this.game.disasterManager.clear();
                        document.getElementById('modal-save').classList.remove('active');
                    } catch (err) {
                        alert("Invalid world JSON file: " + err.message);
                    }
                };
                reader.readAsText(file);
            };
        }

        // Close Inspector
        const closeInsp = document.getElementById('close-inspector');
        if (closeInsp) {
            closeInsp.onclick = () => {
                this.inspectorPanel.classList.remove('active');
            };
        }

        // Exit Control Button
        const exitCtrlBtn = document.getElementById('btn-exit-control');
        if (exitCtrlBtn) {
            exitCtrlBtn.onclick = () => {
                this.game.unpossess();
            };
        }

        // Generate Galaxy Now button in celebration modal
        const genGalaxyNowBtn = document.getElementById('btn-generate-galaxy-now');
        if (genGalaxyNowBtn) {
            genGalaxyNowBtn.onclick = () => {
                const seed = Math.floor(Math.random() * 999999);
                this.game.generateWorld('galaxy', seed);
                document.getElementById('modal-galaxy-sacrifice').classList.remove('active');
                if (this.game.audio) this.game.audio.playSingularity();
            };
        }
        const genBinaryNowBtn = document.getElementById('btn-generate-binary-now');
        if (genBinaryNowBtn) {
            genBinaryNowBtn.onclick = () => {
                const seed = Math.floor(Math.random() * 999999);
                this.game.generateWorld('binary_stars', seed);
                document.getElementById('modal-galaxy-sacrifice').classList.remove('active');
                if (this.game.audio) this.game.audio.playSingularity();
            };
        }
        const genNebulaNowBtn = document.getElementById('btn-generate-nebula-now');
        if (genNebulaNowBtn) {
            genNebulaNowBtn.onclick = () => {
                const seed = Math.floor(Math.random() * 999999);
                this.game.generateWorld('deep_nebula', seed);
                document.getElementById('modal-galaxy-sacrifice').classList.remove('active');
                if (this.game.audio) this.game.audio.playSingularity();
            };
        }
        const spawnVoidTitanBtn = document.getElementById('btn-spawn-void-titan-now');
        if (spawnVoidTitanBtn) {
            spawnVoidTitanBtn.onclick = () => {
                const ent = this.game.entityManager.spawn('void_titan', this.game.renderer.camera.x, this.game.renderer.camera.y);
                this.game.possess(ent);
                document.getElementById('modal-galaxy-sacrifice').classList.remove('active');
                if (this.game.audio) this.game.audio.playSingularity();
            };
        }
        const selectBladeBtn = document.getElementById('btn-select-blade-now');
        if (selectBladeBtn) {
            selectBladeBtn.onclick = () => {
                this.switchCategory('powers');
                const bladeTool = CATEGORY_TOOLS.powers.find(t => t.id === 'equip_galaxy_blade');
                if (bladeTool) this.selectTool(bladeTool);
                document.getElementById('modal-galaxy-sacrifice').classList.remove('active');
                if (this.game.audio) this.game.audio.playMagic();
            };
        }
    }

    updateGalaxyPresetUI() {
        const isUnlocked = localStorage.getItem('galaxybox_secrets_unlocked') === 'true' || localStorage.getItem('galaxybox_galaxy_unlocked') === 'true';

        const galaxyBtn = document.getElementById('btn-preset-galaxy');
        const galaxyIcon = document.getElementById('galaxy-preset-icon');
        const galaxyName = document.getElementById('galaxy-preset-name');
        if (galaxyBtn) {
            if (isUnlocked) {
                galaxyBtn.classList.remove('locked');
                if (galaxyIcon) galaxyIcon.textContent = '🌌';
                if (galaxyName) galaxyName.textContent = 'Spiral Galaxy';
            } else {
                galaxyBtn.classList.add('locked');
                if (galaxyIcon) galaxyIcon.textContent = '🔒';
                if (galaxyName) galaxyName.textContent = 'Spiral Galaxy (Locked)';
            }
        }

        const binaryBtn = document.getElementById('btn-preset-binary');
        const binaryIcon = document.getElementById('binary-preset-icon');
        const binaryName = document.getElementById('binary-preset-name');
        if (binaryBtn) {
            if (isUnlocked) {
                binaryBtn.classList.remove('locked');
                if (binaryIcon) binaryIcon.textContent = '⭐';
                if (binaryName) binaryName.textContent = 'Binary Stars';
            } else {
                binaryBtn.classList.add('locked');
                if (binaryIcon) binaryIcon.textContent = '🔒';
                if (binaryName) binaryName.textContent = 'Binary Stars (Locked)';
            }
        }

        const nebulaBtn = document.getElementById('btn-preset-nebula');
        const nebulaIcon = document.getElementById('nebula-preset-icon');
        const nebulaName = document.getElementById('nebula-preset-name');
        if (nebulaBtn) {
            if (isUnlocked) {
                nebulaBtn.classList.remove('locked');
                if (nebulaIcon) nebulaIcon.textContent = '🔮';
                if (nebulaName) nebulaName.textContent = 'Deep Nebula';
            } else {
                nebulaBtn.classList.add('locked');
                if (nebulaIcon) nebulaIcon.textContent = '🔒';
                if (nebulaName) nebulaName.textContent = 'Deep Nebula (Locked)';
            }
        }
    }

    showGalaxyUnlockModal() {
        this.updateGalaxyPresetUI();
        const m = document.getElementById('modal-galaxy-sacrifice');
        if (m) {
            m.classList.add('active');
            if (this.game.audio) this.game.audio.playSingularity();
        }
    }

    showModal(modalId) {
        if (modalId === 'modal-generator') {
            this.updateGalaxyPresetUI();
        }
        const m = document.getElementById(modalId);
        if (m) m.classList.add('active');
    }

    populateDiplomacyLedger() {
        const listEl = document.getElementById('diplomacy-kingdom-list');
        if (!listEl) return;
        const kingdoms = this.game.entityManager.getKingdomOverview();
        if (kingdoms.length === 0) {
            listEl.innerHTML = `<div style="text-align:center; padding:20px; color:#94a3b8;">No sovereign kingdoms have emerged yet.<br>Spawn Humans, Elves, Orcs, or Dwarves to witness the rise of civilizations!</div>`;
            return;
        }

        listEl.innerHTML = '';
        kingdoms.forEach(k => {
            const row = document.createElement('div');
            row.className = 'kingdom-card-row';
            const statusBadge = this.game.entityManager.worldWar 
                ? '<span class="kingdom-badge-tag" style="background:#ef4444; color:#fff;">AT WAR</span>' 
                : (this.game.entityManager.forcePeace 
                    ? '<span class="kingdom-badge-tag" style="background:#22c55e; color:#fff;">PEACE</span>' 
                    : '<span class="kingdom-badge-tag">SOVEREIGN</span>');

            row.innerHTML = `
                <div class="kingdom-card-header">
                    <div class="kingdom-color-dot" style="background-color: ${k.color}; color: ${k.color};"></div>
                    <div>
                        <div class="kingdom-title-text">${k.name}</div>
                        <div style="font-size: 0.76rem; color: #94a3b8;">Race: ${k.race} | Monarch: ${k.kingName}</div>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 14px;">
                    <div class="kingdom-stats-strip">
                        <span>👥 Pop: <strong>${k.population}</strong></span>
                        <span>🏰 Bldgs: <strong>${k.buildingsCount}</strong></span>
                    </div>
                    ${statusBadge}
                </div>
            `;
            listEl.appendChild(row);
        });
    }

    refreshSaveSlots() {
        const container = document.getElementById('save-slots-list');
        if (!container) return;
        container.innerHTML = '';

        for (let slot = 1; slot <= 5; slot++) {
            const key = `galaxybox_save_${slot}`;
            const saved = localStorage.getItem(key);
            const slotCard = document.createElement('div');
            slotCard.className = 'save-slot-card';

            if (saved) {
                const info = JSON.parse(saved);
                slotCard.innerHTML = `
                    <div class="slot-info">
                        <strong>Slot ${slot}: ${info.name || 'World'}</strong>
                        <small>Saved: ${info.date || 'Unknown'}</small>
                    </div>
                    <div class="slot-actions">
                        <button class="btn btn-sm btn-load" data-slot="${slot}">Load</button>
                        <button class="btn btn-sm btn-save" data-slot="${slot}">Overwrite</button>
                        <button class="btn btn-sm btn-del" data-slot="${slot}">Delete</button>
                    </div>
                `;
            } else {
                slotCard.innerHTML = `
                    <div class="slot-info">
                        <strong>Slot ${slot}: Empty</strong>
                    </div>
                    <div class="slot-actions">
                        <button class="btn btn-sm btn-save" data-slot="${slot}">Save Here</button>
                    </div>
                `;
            }

            // Bind actions
            slotCard.querySelectorAll('.btn-save').forEach(b => {
                b.onclick = () => {
                    const worldData = this.game.world.serialize();
                    worldData.name = `World ${slot}`;
                    worldData.date = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
                    localStorage.setItem(key, JSON.stringify(worldData));
                    this.refreshSaveSlots();
                };
            });
            slotCard.querySelectorAll('.btn-load').forEach(b => {
                b.onclick = () => {
                    const loaded = JSON.parse(localStorage.getItem(key));
                    if (loaded) {
                        this.game.world.deserialize(loaded);
                        this.game.entityManager.clear();
                        this.game.disasterManager.clear();
                        document.getElementById('modal-save').classList.remove('active');
                    }
                };
            });
            slotCard.querySelectorAll('.btn-del').forEach(b => {
                b.onclick = () => {
                    localStorage.removeItem(key);
                    this.refreshSaveSlots();
                };
            });

            container.appendChild(slotCard);
        }
    }

    showControlHUD(entity) {
        const hud = document.getElementById('control-hud');
        if (!hud) return;
        hud.classList.add('active');
        this.updateControlHUD(entity);
    }

    updateControlHUD(entity) {
        const hud = document.getElementById('control-hud');
        if (!hud || !entity) return;

        const nameEl = document.getElementById('ctrl-name');
        const hpFillEl = document.getElementById('ctrl-hp-fill');
        const hpTextEl = document.getElementById('ctrl-hp-text');
        const cdEl = document.getElementById('ctrl-cd');

        if (nameEl) nameEl.textContent = entity.name || entity.type.toUpperCase();
        if (hpFillEl && hpTextEl) {
            const pct = Math.max(0, Math.min(100, (entity.hp / entity.maxHp) * 100));
            hpFillEl.style.width = `${pct}%`;
            hpTextEl.textContent = `${Math.floor(entity.hp)} / ${entity.maxHp} HP`;
        }
        if (cdEl) {
            if (entity.specialCooldown > 0) {
                cdEl.textContent = `Special: Cooldown (${Math.ceil(entity.specialCooldown / 20)}s)`;
            } else {
                cdEl.textContent = `Special: Ready (Right-Click / Q)`;
            }
        }
    }

    hideControlHUD() {
        const hud = document.getElementById('control-hud');
        if (hud) hud.classList.remove('active');
    }

    setupVirtualMobileControls() {
        // Virtual D-Pad buttons
        const dpadButtons = document.querySelectorAll('.dpad-btn');
        dpadButtons.forEach(btn => {
            const key = btn.dataset.key;
            if (!key) return;

            const press = (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (this.game && this.game.virtualKeys) {
                    this.game.virtualKeys[key] = true;
                }
                btn.classList.add('pressed');
            };

            const release = (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (this.game && this.game.virtualKeys) {
                    this.game.virtualKeys[key] = false;
                }
                btn.classList.remove('pressed');
            };

            btn.addEventListener('pointerdown', press);
            btn.addEventListener('pointerup', release);
            btn.addEventListener('pointercancel', release);
            btn.addEventListener('pointerleave', release);
            btn.addEventListener('touchstart', press, { passive: false });
            btn.addEventListener('touchend', release);
            btn.addEventListener('touchcancel', release);
        });

        // Action: Attack
        const atkBtn = document.getElementById('btn-touch-atk');
        if (atkBtn) {
            const triggerAtk = (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (this.game && this.game.controlledEntity && this.game.controlledEntity.active) {
                    const ent = this.game.controlledEntity;
                    const aimX = this.game.mouse.worldX || (ent.x + 10);
                    const aimY = this.game.mouse.worldY || ent.y;
                    ent.usePrimaryAbility(aimX, aimY, this.game.world, this.game.entityManager, this.game.particleSystem, this.game.audio);
                }
            };
            atkBtn.addEventListener('pointerdown', triggerAtk);
            atkBtn.addEventListener('touchstart', triggerAtk, { passive: false });
        }

        // Action: Special
        const specBtn = document.getElementById('btn-touch-spec');
        if (specBtn) {
            const triggerSpec = (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (this.game && this.game.controlledEntity && this.game.controlledEntity.active) {
                    this.game.controlledEntity.useSpecialAbility(this.game.world, this.game.entityManager, this.game.disasterManager, this.game.particleSystem, this.game.audio);
                }
            };
            specBtn.addEventListener('pointerdown', triggerSpec);
            specBtn.addEventListener('touchstart', triggerSpec, { passive: false });
        }

        // Action: Exit Control
        const exitTouchBtn = document.getElementById('btn-touch-exit');
        if (exitTouchBtn) {
            const triggerExit = (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (this.game) this.game.unpossess();
            };
            exitTouchBtn.addEventListener('pointerdown', triggerExit);
            exitTouchBtn.addEventListener('touchstart', triggerExit, { passive: false });
        }

        const exitCtrlBtn = document.getElementById('btn-exit-control');
        if (exitCtrlBtn) {
            exitCtrlBtn.onclick = () => {
                if (this.game) this.game.unpossess();
            };
        }
    }

    showNotification(text) {
        let toast = document.getElementById('toast-notification');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toast-notification';
            toast.style.position = 'fixed';
            toast.style.bottom = '100px';
            toast.style.left = '50%';
            toast.style.transform = 'translateX(-50%)';
            toast.style.background = 'rgba(15, 23, 42, 0.92)';
            toast.style.border = '1px solid #38bdf8';
            toast.style.borderRadius = '8px';
            toast.style.padding = '8px 16px';
            toast.style.color = '#ffffff';
            toast.style.fontSize = '0.85rem';
            toast.style.fontWeight = 'bold';
            toast.style.zIndex = '300';
            toast.style.pointerEvents = 'none';
            toast.style.boxShadow = '0 0 15px rgba(56, 189, 248, 0.4)';
            toast.style.transition = 'opacity 0.3s ease';
            document.body.appendChild(toast);
        }
        toast.textContent = text;
        toast.style.opacity = '1';
        clearTimeout(this._toastTimer);
        this._toastTimer = setTimeout(() => {
            if (toast) toast.style.opacity = '0';
        }, 2200);
    }

    setupPWA() {
        const btnInstall = document.getElementById('btn-install-pwa');
        const nav = typeof navigator !== 'undefined' ? navigator : null;
        if (!nav) return;

        // 1. Service Worker Registration
        if ('serviceWorker' in nav && (window.location && window.location.protocol && (window.location.protocol.startsWith('http') || window.location.hostname === 'localhost'))) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('./sw.js')
                    .then((reg) => {
                        console.log('GalaxyBox PWA ServiceWorker registered with scope:', reg.scope);
                    })
                    .catch((err) => {
                        console.warn('GalaxyBox PWA ServiceWorker registration failed:', err);
                    });
            });
        }

        // 2. Before Install Prompt (Chrome / Edge / Android)
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this.deferredInstallPrompt = e;
            if (btnInstall) {
                btnInstall.style.display = 'inline-flex';
            }
        });

        // 3. App Installed Event
        window.addEventListener('appinstalled', () => {
            this.deferredInstallPrompt = null;
            if (btnInstall) btnInstall.style.display = 'none';
            this.showNotification('🌌 GalaxyBox installed to your device! Enjoy offline play!');
        });

        // 4. Click Install Button
        if (btnInstall) {
            const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
            const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
            if (isMobile && !isStandalone) {
                btnInstall.style.display = 'inline-flex';
            }

            btnInstall.addEventListener('click', async () => {
                if (this.game.audio) this.game.audio.playClick();
                if (this.deferredInstallPrompt) {
                    this.deferredInstallPrompt.prompt();
                    const choice = await this.deferredInstallPrompt.userChoice;
                    if (choice && choice.outcome === 'accepted') {
                        btnInstall.style.display = 'none';
                    }
                    this.deferredInstallPrompt = null;
                } else {
                    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
                    if (isIOS) {
                        this.showNotification('📲 To install on iOS: Tap Share [⎋] then "Add to Home Screen"');
                    } else {
                        this.showNotification('📲 Tap browser menu (⋮) -> "Install App" or "Add to Home screen"');
                    }
                }
            });
        }
    }

    showInspector(entity, tile, tx, ty) {
        if (!this.inspectorPanel) return;
        const content = document.getElementById('inspector-content');

        if (entity) {
            const kd = entity.kingdomId ? this.game.entityManager.kingdoms.get(entity.kingdomId) : null;

            // Build traits list
            let traitsHtml = '';
            for (const [traitKey, traitDef] of Object.entries(TRAITS)) {
                const has = entity.hasTrait(traitKey);
                traitsHtml += `<button class="trait-pill ${has ? 'active' : ''}" data-trait="${traitKey}" title="${traitDef.desc}">${traitDef.icon} ${traitDef.name}</button>`;
            }

            content.innerHTML = `
                <div class="insp-title">${entity.name} (${entity.type.toUpperCase()})</div>
                <div style="margin: 8px 0;">
                    <button class="btn btn-sm btn-control-now" style="width:100%; display:flex; align-items:center; justify-content:center; gap:6px; background:linear-gradient(135deg, #f59e0b, #ef4444); font-weight:700;">🎮 Possess / Control Creature</button>
                </div>
                <div class="insp-row"><span>Health:</span> <strong>${Math.floor(entity.hp)} / ${entity.maxHp}</strong></div>
                <div class="insp-row"><span>Attack:</span> <strong>${entity.attack} DMG</strong></div>
                <div class="insp-row"><span>Speed:</span> <strong>${entity.speed.toFixed(2)}</strong></div>
                <div class="insp-row"><span>Age:</span> <strong>${entity.age} yrs</strong></div>
                <div class="insp-row"><span>Kills:</span> <strong>${entity.kills}</strong></div>
                <div class="insp-row"><span>Kingdom:</span> <strong style="color:${kd ? kd.color : '#94a3b8'}">${kd ? kd.name : 'None'}</strong></div>
                <div style="margin-top: 10px; border-top: 1px solid var(--border-glass); padding-top: 8px;">
                    <div style="font-size:0.75rem; color:var(--text-secondary); margin-bottom:6px; font-weight:600;">TOGGLE TRAITS:</div>
                    <div class="traits-container" style="display:flex; flex-wrap:wrap; gap:4px; max-height:140px; overflow-y:auto;">
                        ${traitsHtml}
                    </div>
                </div>
            `;

            // Bind possess button
            const ctrlBtn = content.querySelector('.btn-control-now');
            if (ctrlBtn) {
                ctrlBtn.onclick = () => {
                    this.game.possess(entity);
                    this.inspectorPanel.classList.remove('active');
                };
            }

            // Bind trait toggles
            content.querySelectorAll('.trait-pill').forEach(btn => {
                btn.onclick = () => {
                    const tr = btn.dataset.trait;
                    const active = entity.toggleTrait(tr);
                    btn.classList.toggle('active', active);
                    if (this.game.audio) this.game.audio.playClick();
                };
            });
        } else {
            const tInfo = TILE_INFO[tile] || { name: 'Unknown' };
            const temp = this.game.world.temperature[this.game.world.idx(tx, ty)];
            content.innerHTML = `
                <div class="insp-title">Tile (${tx}, ${ty})</div>
                <div class="insp-row"><span>Terrain:</span> <strong>${tInfo.name}</strong></div>
                <div class="insp-row"><span>Temperature:</span> <strong>${temp}°C</strong></div>
                <div class="insp-row"><span>Type:</span> <strong>${tInfo.isLiquid ? 'Fluid' : 'Solid Ground'}</strong></div>
                <div class="insp-row"><span>Flammability:</span> <strong>${Math.floor(tInfo.flammability * 100)}%</strong></div>
            `;
        }

        this.inspectorPanel.classList.add('active');
    }

    initSettings() {
        const defaultSettings = {
            shake: true,
            damagetext: true,
            corpses: true,
            weather: true,
            footsteps: true,
            hitflashes: true,
            edgeshading: true,
            voices: true,
            volume: 0.5,
            mute: false,
            particles: 1500,
            panSpeed: 1.0,
            dpadScale: 1.0
        };

        let saved = null;
        try {
            const raw = localStorage.getItem('galaxybox_settings');
            if (raw) saved = JSON.parse(raw);
        } catch (e) {
            console.warn('Failed to parse saved settings', e);
        }

        this.settings = Object.assign({}, defaultSettings, saved || {});
        this.game.settings = this.settings;

        const applyToUI = () => {
            const setCheck = (id, val) => {
                const el = document.getElementById(id);
                if (el) el.checked = !!val;
            };
            const setVal = (id, val, textId, suffix = '') => {
                const el = document.getElementById(id);
                if (el) el.value = val;
                const txt = document.getElementById(textId);
                if (txt) txt.textContent = val + suffix;
            };

            setCheck('setting-shake', this.settings.shake);
            setCheck('setting-damagetext', this.settings.damagetext);
            setCheck('setting-corpses', this.settings.corpses);
            setCheck('setting-weather', this.settings.weather);
            setCheck('setting-footsteps', this.settings.footsteps);
            setCheck('setting-hitflashes', this.settings.hitflashes);
            setCheck('setting-edgeshading', this.settings.edgeshading);
            setCheck('setting-voices', this.settings.voices);
            setCheck('sound-mute', this.settings.mute);

            setVal('sound-volume', this.settings.volume, 'val-sound-volume');
            const volEl = document.getElementById('val-sound-volume');
            if (volEl) volEl.textContent = Math.round(this.settings.volume * 100) + '%';

            setVal('setting-particle-limit', this.settings.particles, 'val-setting-particles');
            setVal('setting-pan-speed', this.settings.panSpeed, 'val-setting-pan', 'x');
            setVal('setting-dpad-scale', this.settings.dpadScale, 'val-setting-dpad');
            const dpadEl = document.getElementById('val-setting-dpad');
            if (dpadEl) dpadEl.textContent = Math.round(this.settings.dpadScale * 100) + '%';

            if (this.game.audio) {
                this.game.audio.setVolume(this.settings.volume);
                this.game.audio.setMuted(this.settings.mute);
            }
            if (this.game.particleSystem) {
                this.game.particleSystem.maxParticles = this.settings.particles;
            }
            const mvc = document.getElementById('mobile-virtual-controls');
            if (mvc) {
                mvc.style.transform = `scale(${this.settings.dpadScale})`;
                mvc.style.transformOrigin = 'bottom center';
            }
        };

        const save = () => {
            this.game.settings = this.settings;
            try {
                localStorage.setItem('galaxybox_settings', JSON.stringify(this.settings));
            } catch (e) {}
        };

        const bindToggle = (id, key) => {
            const el = document.getElementById(id);
            if (el) {
                el.onchange = (e) => {
                    this.settings[key] = e.target.checked;
                    save();
                    if (key === 'mute' && this.game.audio) {
                        this.game.audio.setMuted(this.settings.mute);
                    }
                };
            }
        };

        bindToggle('setting-shake', 'shake');
        bindToggle('setting-damagetext', 'damagetext');
        bindToggle('setting-corpses', 'corpses');
        bindToggle('setting-weather', 'weather');
        bindToggle('setting-footsteps', 'footsteps');
        bindToggle('setting-hitflashes', 'hitflashes');
        bindToggle('setting-edgeshading', 'edgeshading');
        bindToggle('setting-voices', 'voices');
        bindToggle('sound-mute', 'mute');

        const volEl = document.getElementById('sound-volume');
        if (volEl) {
            volEl.oninput = (e) => {
                this.settings.volume = parseFloat(e.target.value);
                const txt = document.getElementById('val-sound-volume');
                if (txt) txt.textContent = Math.round(this.settings.volume * 100) + '%';
                if (this.game.audio) this.game.audio.setVolume(this.settings.volume);
                save();
            };
        }

        const partEl = document.getElementById('setting-particle-limit');
        if (partEl) {
            partEl.oninput = (e) => {
                this.settings.particles = parseInt(e.target.value);
                const txt = document.getElementById('val-setting-particles');
                if (txt) txt.textContent = this.settings.particles;
                if (this.game.particleSystem) this.game.particleSystem.maxParticles = this.settings.particles;
                save();
            };
        }

        const panEl = document.getElementById('setting-pan-speed');
        if (panEl) {
            panEl.oninput = (e) => {
                this.settings.panSpeed = parseFloat(e.target.value);
                const txt = document.getElementById('val-setting-pan');
                if (txt) txt.textContent = this.settings.panSpeed.toFixed(1) + 'x';
                save();
            };
        }

        const dpadEl = document.getElementById('setting-dpad-scale');
        if (dpadEl) {
            dpadEl.oninput = (e) => {
                this.settings.dpadScale = parseFloat(e.target.value);
                const txt = document.getElementById('val-setting-dpad');
                if (txt) txt.textContent = Math.round(this.settings.dpadScale * 100) + '%';
                const mvc = document.getElementById('mobile-virtual-controls');
                if (mvc) {
                    mvc.style.transform = `scale(${this.settings.dpadScale})`;
                    mvc.style.transformOrigin = 'bottom center';
                }
                save();
            };
        }

        const resetBtn = document.getElementById('btn-reset-settings');
        if (resetBtn) {
            resetBtn.onclick = () => {
                this.settings = Object.assign({}, defaultSettings);
                save();
                applyToUI();
                if (this.game.audio) this.game.audio.playClick();
                this.showNotification('⚙️ Settings reset to default!');
            };
        }

        const pwaBtn = document.getElementById('btn-pwa-install');
        if (pwaBtn) {
            pwaBtn.onclick = async () => {
                if (this.game.audio) this.game.audio.playClick();
                if (this.deferredInstallPrompt) {
                    this.deferredInstallPrompt.prompt();
                    const choice = await this.deferredInstallPrompt.userChoice;
                    if (choice && choice.outcome === 'accepted') {
                        pwaBtn.style.display = 'none';
                    }
                    this.deferredInstallPrompt = null;
                } else {
                    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
                    if (isIOS) {
                        this.showNotification('📲 To install on iOS: Tap Share [⎋] then "Add to Home Screen"');
                    } else {
                        this.showNotification('📲 Tap browser menu (⋮) -> "Install App" or "Add to Home screen"');
                    }
                }
            };
        }

        applyToUI();
    }

    initCreatorStudio() {
        const previewCanvas = document.getElementById('creator-preview-canvas');
        if (!previewCanvas) return;
        const ctx = previewCanvas.getContext('2d');
        ctx.imageSmoothingEnabled = false;

        const archetypeEl = document.getElementById('custom-archetype');
        const nameEl = document.getElementById('custom-name');
        const colEl = document.getElementById('custom-color');
        const colSecEl = document.getElementById('custom-color-sec');
        const colGlowEl = document.getElementById('custom-color-glow');
        const headEl = document.getElementById('custom-part-head');
        const bodyEl = document.getElementById('custom-part-body');
        const armsEl = document.getElementById('custom-part-arms');
        const legsEl = document.getElementById('custom-part-legs');
        const backEl = document.getElementById('custom-part-back');
        const hpEl = document.getElementById('custom-hp');
        const atkEl = document.getElementById('custom-attack');
        const spdEl = document.getElementById('custom-speed');
        const scaleEl = document.getElementById('custom-scale');
        const speciesTag = document.getElementById('preview-species-tag');

        const archetypePresets = {
            human: {
                name: 'High Hero',
                head: 'humanoid', body: 'armored', arms: 'bipedal_arms', legs: 'bipedal_legs', back: 'none',
                col: '#3b82f6', colSec: '#f59e0b', colGlow: '#60a5fa',
                hp: 800, atk: 50, spd: 1.0, scale: 1.8
            },
            evermean: {
                name: 'Evermean Treant',
                head: 'treant', body: 'treant_bark', arms: 'wood_branches', legs: 'pointy_roots', back: 'none',
                col: '#3b2010', colSec: '#15803d', colGlow: '#22c55e',
                hp: 1800, atk: 75, spd: 0.65, scale: 2.4
            },
            duck: {
                name: 'Exploding Duck',
                head: 'duck', body: 'avian_feather', arms: 'feather_wings', legs: 'duck_webbed', back: 'none',
                col: '#facc15', colSec: '#f97316', colGlow: '#ef4444',
                hp: 120, atk: 35, spd: 0.95, scale: 1.2
            },
            crystal_golem: {
                name: 'Prism Golem',
                head: 'cyclops', body: 'crystalline', arms: 'blade_arms', legs: 'bipedal_legs', back: 'starlight_halo',
                col: '#38bdf8', colSec: '#0284c7', colGlow: '#a855f7',
                hp: 2200, atk: 70, spd: 0.55, scale: 2.6
            },
            shadow_assassin: {
                name: 'Shadow Assassin',
                head: 'humanoid', body: 'armored', arms: 'blade_arms', legs: 'bipedal_legs', back: 'none',
                col: '#1e293b', colSec: '#475569', colGlow: '#f43f5e',
                hp: 550, atk: 65, spd: 1.35, scale: 1.4
            },
            crabzilla: {
                name: 'Crabzilla Titan',
                head: 'cyclops', body: 'armored', arms: 'blade_arms', legs: 'arachnid_legs', back: 'spiky_carapace',
                col: '#ef4444', colSec: '#991b1b', colGlow: '#facc15',
                hp: 5000, atk: 85, spd: 0.5, scale: 3.2
            },
            dragon: {
                name: 'Fire Wyvern',
                head: 'draconic', body: 'standard', arms: 'feather_wings', legs: 'quadruped_paws', back: 'demon_wings',
                col: '#dc2626', colSec: '#7f1d1d', colGlow: '#f97316',
                hp: 3200, atk: 80, spd: 0.9, scale: 2.8
            },
            colossus_mech: {
                name: 'Colossus Walker',
                head: 'robotic', body: 'chassis', arms: 'blaster_arms', legs: 'treads', back: 'energy_exhaust',
                col: '#475569', colSec: '#0284c7', colGlow: '#38bdf8',
                hp: 4200, atk: 90, spd: 0.6, scale: 3.0
            },
            void_titan: {
                name: 'Void Titan',
                head: 'cyclops', body: 'chassis', arms: 'tentacles', legs: 'ethereal_wisp', back: 'starlight_halo',
                col: '#581c87', colSec: '#1e1b4b', colGlow: '#ec4899',
                hp: 6500, atk: 95, spd: 0.7, scale: 3.5
            },
            seraph_angel: {
                name: 'Seraph Celestial',
                head: 'humanoid', body: 'armored', arms: 'bipedal_arms', legs: 'bipedal_legs', back: 'angel_wings',
                col: '#fef08a', colSec: '#f59e0b', colGlow: '#ffffff',
                hp: 3500, atk: 75, spd: 0.85, scale: 2.6
            },
            dune_leviathan: {
                name: 'Dune Sandworm',
                head: 'draconic', body: 'standard', arms: 'tentacles', legs: 'pointy_roots', back: 'spiky_carapace',
                col: '#d97706', colSec: '#78350f', colGlow: '#f59e0b',
                hp: 4000, atk: 80, spd: 0.8, scale: 3.0
            },
            vampire_lord: {
                name: 'Vampire Lord',
                head: 'humanoid', body: 'armored', arms: 'blade_arms', legs: 'bipedal_legs', back: 'demon_wings',
                col: '#450a0a', colSec: '#18181b', colGlow: '#dc2626',
                hp: 2000, atk: 70, spd: 1.1, scale: 2.2
            },
            frost_titan: {
                name: 'Glacial Giant',
                head: 'cyclops', body: 'crystalline', arms: 'bipedal_arms', legs: 'bipedal_legs', back: 'spiky_carapace',
                col: '#38bdf8', colSec: '#bae6fd', colGlow: '#ffffff',
                hp: 3800, atk: 70, spd: 0.55, scale: 2.8
            },
            golem: {
                name: 'Earth Golem',
                head: 'cyclops', body: 'muscular', arms: 'bipedal_arms', legs: 'bipedal_legs', back: 'none',
                col: '#78716c', colSec: '#44403c', colGlow: '#a8a29e',
                hp: 2500, atk: 65, spd: 0.5, scale: 2.5
            }
        };

        const applyPreset = (arch) => {
            const p = archetypePresets[arch];
            if (!p) return;
            if (nameEl) nameEl.value = p.name;
            if (headEl) headEl.value = p.head;
            if (bodyEl) bodyEl.value = p.body;
            if (armsEl) armsEl.value = p.arms;
            if (legsEl) legsEl.value = p.legs;
            if (backEl) backEl.value = p.back;
            if (colEl) colEl.value = p.col;
            if (colSecEl) colSecEl.value = p.colSec;
            if (colGlowEl) colGlowEl.value = p.colGlow;
            if (hpEl) { hpEl.value = p.hp; const hVal = document.getElementById('val-custom-hp'); if (hVal) hVal.textContent = p.hp; }
            if (atkEl) { atkEl.value = p.atk; const aVal = document.getElementById('val-custom-atk'); if (aVal) aVal.textContent = p.atk; }
            if (spdEl) { spdEl.value = p.spd; const sVal = document.getElementById('val-custom-spd'); if (sVal) sVal.textContent = p.spd; }
            if (scaleEl) { scaleEl.value = p.scale; const scVal = document.getElementById('val-custom-scale'); if (scVal) scVal.textContent = p.scale + 'x'; }
            if (speciesTag) speciesTag.textContent = p.name.toUpperCase();
        };

        if (archetypeEl) {
            archetypeEl.onchange = (e) => {
                applyPreset(e.target.value);
            };
        }

        let previewAnim = 0;
        const renderPreview = () => {
            const modal = document.getElementById('modal-creator');
            if (modal && modal.classList.contains('active')) {
                previewAnim += 0.05;
                ctx.clearRect(0, 0, 100, 100);

                const cx = 50;
                const cy = 54;
                const bob = Math.sin(previewAnim * 3) * 2;
                const col = colEl ? colEl.value : '#ea580c';
                const sec = colSecEl ? colSecEl.value : '#38bdf8';
                const glow = colGlowEl ? colGlowEl.value : '#facc15';

                const head = headEl ? headEl.value : 'humanoid';
                const body = bodyEl ? bodyEl.value : 'standard';
                const arms = armsEl ? armsEl.value : 'bipedal_arms';
                const legs = legsEl ? legsEl.value : 'bipedal_legs';
                const back = backEl ? backEl.value : 'none';

                if (back === 'demon_wings' || back === 'angel_wings') {
                    const wingSpread = Math.sin(previewAnim * 4) * 3;
                    ctx.fillStyle = back === 'angel_wings' ? '#ffffff' : '#450a0a';
                    ctx.fillRect(cx - 24, cy - 14 + wingSpread, 12, 16);
                    ctx.fillRect(cx - 28, cy - 20 + wingSpread, 10, 12);
                    ctx.fillRect(cx + 12, cy - 14 - wingSpread, 12, 16);
                    ctx.fillRect(cx + 18, cy - 20 - wingSpread, 10, 12);
                } else if (back === 'starlight_halo') {
                    ctx.fillStyle = glow;
                    ctx.fillRect(cx - 16, cy - 32, 32, 3);
                    ctx.fillRect(cx - 18, cy - 30, 4, 8);
                    ctx.fillRect(cx + 14, cy - 30, 4, 8);
                } else if (back === 'energy_exhaust') {
                    ctx.fillStyle = '#64748b';
                    ctx.fillRect(cx - 16, cy - 10, 5, 12);
                    ctx.fillRect(cx + 11, cy - 10, 5, 12);
                    ctx.fillStyle = glow;
                    ctx.fillRect(cx - 15, cy + 2 + Math.random() * 4, 3, 5);
                    ctx.fillRect(cx + 12, cy + 2 + Math.random() * 4, 3, 5);
                } else if (back === 'spiky_carapace') {
                    ctx.fillStyle = sec;
                    ctx.fillRect(cx - 14, cy - 12, 4, 8);
                    ctx.fillRect(cx + 10, cy - 12, 4, 8);
                    ctx.fillRect(cx - 18, cy - 6, 4, 6);
                    ctx.fillRect(cx + 14, cy - 6, 4, 6);
                }

                if (legs === 'pointy_roots') {
                    ctx.fillStyle = col;
                    ctx.beginPath();
                    ctx.moveTo(cx - 10, cy + 12);
                    ctx.lineTo(cx - 14, cy + 30 + bob);
                    ctx.lineTo(cx - 6, cy + 14);
                    ctx.closePath();
                    ctx.fill();

                    ctx.beginPath();
                    ctx.moveTo(cx + 10, cy + 12);
                    ctx.lineTo(cx + 14, cy + 30 - bob);
                    ctx.lineTo(cx + 6, cy + 14);
                    ctx.closePath();
                    ctx.fill();

                    ctx.fillStyle = '#270e02';
                    ctx.fillRect(cx - 2, cy + 14, 4, 12);
                } else if (legs === 'duck_webbed') {
                    ctx.fillStyle = sec;
                    ctx.fillRect(cx - 8, cy + 14, 5, 6);
                    ctx.fillRect(cx + 3, cy + 14, 5, 6);
                    ctx.fillRect(cx - 11, cy + 20, 8, 3);
                    ctx.fillRect(cx + 3, cy + 20, 8, 3);
                } else if (legs === 'treads') {
                    ctx.fillStyle = '#1e293b';
                    ctx.fillRect(cx - 18, cy + 12, 36, 12);
                    ctx.fillStyle = sec;
                    ctx.fillRect(cx - 14, cy + 15, 6, 6);
                    ctx.fillRect(cx - 3, cy + 15, 6, 6);
                    ctx.fillRect(cx + 8, cy + 15, 6, 6);
                } else if (legs === 'arachnid_legs') {
                    ctx.fillStyle = sec;
                    ctx.fillRect(cx - 18, cy + 8, 4, 18);
                    ctx.fillRect(cx - 22, cy + 14, 6, 4);
                    ctx.fillRect(cx + 14, cy + 8, 4, 18);
                    ctx.fillRect(cx + 16, cy + 14, 6, 4);
                } else if (legs === 'ethereal_wisp') {
                    ctx.fillStyle = glow;
                    ctx.fillRect(cx - 8, cy + 12, 16, 8);
                    ctx.fillRect(cx - 5, cy + 20, 10, 6);
                    ctx.fillRect(cx - 2, cy + 26, 4, 5);
                } else {
                    const legBob = Math.sin(previewAnim * 5) * 3;
                    ctx.fillStyle = '#0f172a';
                    ctx.fillRect(cx - 8, cy + 12, 6, 12 + legBob);
                    ctx.fillRect(cx + 2, cy + 12, 6, 12 - legBob);
                    ctx.fillStyle = col;
                    ctx.fillRect(cx - 9, cy + 22 + legBob, 8, 4);
                    ctx.fillRect(cx + 1, cy + 22 - legBob, 8, 4);
                }

                ctx.fillStyle = col;
                ctx.fillRect(cx - 12, cy - 10 + bob, 24, 22);
                ctx.fillStyle = sec;
                if (body === 'armored' || body === 'chassis') {
                    ctx.fillRect(cx - 8, cy - 6 + bob, 16, 14);
                    ctx.fillStyle = glow;
                    ctx.fillRect(cx - 3, cy - 2 + bob, 6, 6);
                } else if (body === 'treant_bark') {
                    ctx.fillStyle = '#14532d';
                    ctx.fillRect(cx - 10, cy - 8 + bob, 20, 8);
                    ctx.fillStyle = '#15803d';
                    ctx.fillRect(cx - 6, cy - 4 + bob, 12, 5);
                } else if (body === 'crystalline') {
                    ctx.fillStyle = sec;
                    ctx.fillRect(cx - 6, cy - 8 + bob, 12, 18);
                    ctx.fillStyle = glow;
                    ctx.fillRect(cx - 2, cy - 4 + bob, 4, 10);
                } else if (body === 'avian_feather') {
                    ctx.fillStyle = '#fef08a';
                    ctx.fillRect(cx - 8, cy - 4 + bob, 16, 14);
                }

                if (arms === 'blade_arms') {
                    ctx.fillStyle = sec;
                    ctx.fillRect(cx - 20, cy - 6 + bob, 6, 16);
                    ctx.fillRect(cx + 14, cy - 6 + bob, 6, 16);
                    ctx.fillStyle = glow;
                    ctx.fillRect(cx - 22, cy + 8 + bob, 4, 10);
                    ctx.fillRect(cx + 18, cy + 8 + bob, 4, 10);
                } else if (arms === 'blaster_arms') {
                    ctx.fillStyle = '#334155';
                    ctx.fillRect(cx - 20, cy - 4 + bob, 8, 8);
                    ctx.fillRect(cx + 12, cy - 4 + bob, 8, 8);
                    ctx.fillStyle = glow;
                    ctx.fillRect(cx - 22, cy - 2 + bob, 3, 4);
                    ctx.fillRect(cx + 19, cy - 2 + bob, 3, 4);
                } else if (arms === 'tentacles') {
                    ctx.fillStyle = col;
                    const w = Math.sin(previewAnim * 4) * 4;
                    ctx.fillRect(cx - 20 + w, cy - 2 + bob, 6, 18);
                    ctx.fillRect(cx + 14 - w, cy - 2 + bob, 6, 18);
                } else if (arms === 'feather_wings') {
                    ctx.fillStyle = col;
                    ctx.fillRect(cx - 18, cy - 6 + bob, 6, 14);
                    ctx.fillRect(cx + 12, cy - 6 + bob, 6, 14);
                } else if (arms === 'wood_branches') {
                    ctx.fillStyle = col;
                    ctx.fillRect(cx - 18, cy - 8 + bob, 5, 16);
                    ctx.fillRect(cx + 13, cy - 8 + bob, 5, 16);
                    ctx.fillStyle = sec;
                    ctx.fillRect(cx - 20, cy - 10 + bob, 4, 5);
                    ctx.fillRect(cx + 16, cy - 10 + bob, 4, 5);
                } else {
                    ctx.fillStyle = col;
                    ctx.fillRect(cx - 18, cy - 4 + bob, 5, 14);
                    ctx.fillRect(cx + 13, cy - 4 + bob, 5, 14);
                }

                if (head === 'treant') {
                    ctx.fillStyle = col;
                    ctx.fillRect(cx - 12, cy - 28 + bob, 24, 18);
                    ctx.fillStyle = '#14532d';
                    ctx.fillRect(cx - 16, cy - 34 + bob, 32, 10);
                    ctx.fillStyle = '#22c55e';
                    ctx.fillRect(cx - 10, cy - 38 + bob, 20, 6);
                    ctx.fillStyle = '#0a0502';
                    ctx.fillRect(cx - 4, cy - 22 + bob, 8, 6);
                    ctx.fillRect(cx - 2, cy - 24 + bob, 4, 2);
                } else if (head === 'duck') {
                    ctx.fillStyle = col;
                    ctx.fillRect(cx - 10, cy - 26 + bob, 20, 16);
                    ctx.fillStyle = '#000000';
                    ctx.fillRect(cx - 4, cy - 22 + bob, 3, 3);
                    ctx.fillRect(cx + 3, cy - 22 + bob, 3, 3);
                    ctx.fillStyle = sec;
                    ctx.fillRect(cx - 6, cy - 16 + bob, 12, 6);
                    ctx.fillStyle = '#451a03';
                    ctx.fillRect(cx - 1, cy - 31 + bob, 2, 5);
                    ctx.fillStyle = (Math.sin(previewAnim * 12) > 0) ? glow : '#f97316';
                    ctx.fillRect(cx - 2, cy - 34 + bob, 4, 4);
                } else if (head === 'draconic') {
                    ctx.fillStyle = col;
                    ctx.fillRect(cx - 12, cy - 28 + bob, 24, 18);
                    ctx.fillRect(cx - 16, cy - 20 + bob, 10, 8);
                    ctx.fillStyle = glow;
                    ctx.fillRect(cx - 8, cy - 24 + bob, 4, 3);
                    ctx.fillRect(cx + 2, cy - 24 + bob, 4, 3);
                } else if (head === 'horned') {
                    ctx.fillStyle = col;
                    ctx.fillRect(cx - 10, cy - 26 + bob, 20, 16);
                    ctx.fillStyle = '#1e1b4b';
                    ctx.fillRect(cx - 14, cy - 34 + bob, 5, 10);
                    ctx.fillRect(cx + 9, cy - 34 + bob, 5, 10);
                    ctx.fillStyle = glow;
                    ctx.fillRect(cx - 6, cy - 21 + bob, 3, 3);
                    ctx.fillRect(cx + 3, cy - 21 + bob, 3, 3);
                } else if (head === 'cyclops') {
                    ctx.fillStyle = col;
                    ctx.fillRect(cx - 10, cy - 26 + bob, 20, 16);
                    ctx.fillStyle = glow;
                    ctx.fillRect(cx - 4, cy - 22 + bob, 8, 6);
                    ctx.fillStyle = '#000000';
                    ctx.fillRect(cx - 1, cy - 20 + bob, 2, 3);
                } else if (head === 'robotic') {
                    ctx.fillStyle = col;
                    ctx.fillRect(cx - 12, cy - 26 + bob, 24, 16);
                    ctx.fillStyle = glow;
                    ctx.fillRect(cx - 9, cy - 20 + bob, 18, 4);
                } else if (head === 'skull') {
                    ctx.fillStyle = '#f1f5f9';
                    ctx.fillRect(cx - 10, cy - 26 + bob, 20, 16);
                    ctx.fillStyle = '#000000';
                    ctx.fillRect(cx - 6, cy - 22 + bob, 4, 4);
                    ctx.fillRect(cx + 2, cy - 22 + bob, 4, 4);
                    ctx.fillRect(cx - 3, cy - 14 + bob, 6, 3);
                } else {
                    ctx.fillStyle = '#fcd34d';
                    ctx.fillRect(cx - 8, cy - 26 + bob, 16, 16);
                    ctx.fillStyle = '#0f172a';
                    ctx.fillRect(cx - 5, cy - 20 + bob, 3, 3);
                    ctx.fillRect(cx + 2, cy - 20 + bob, 3, 3);
                    ctx.fillStyle = col;
                    ctx.fillRect(cx - 9, cy - 28 + bob, 18, 5);
                }
            }
            requestAnimationFrame(renderPreview);
        };
        requestAnimationFrame(renderPreview);

        const spawnCustomBtn = document.getElementById('btn-spawn-custom');
        if (spawnCustomBtn) {
            spawnCustomBtn.onclick = () => {
                const name = nameEl ? nameEl.value : 'Custom Creature';
                const arch = archetypeEl ? archetypeEl.value : 'human';
                const hp = hpEl ? (parseInt(hpEl.value) || 1000) : 1000;
                const attack = atkEl ? (parseInt(atkEl.value) || 50) : 50;
                const speed = spdEl ? (parseFloat(spdEl.value) || 0.8) : 0.8;
                const scale = scaleEl ? (parseFloat(scaleEl.value) || 2.0) : 2.0;

                const primaryColor = colEl ? colEl.value : '#ea580c';
                const secColor = colSecEl ? colSecEl.value : '#38bdf8';
                const glowColor = colGlowEl ? colGlowEl.value : '#facc15';

                const head = headEl ? headEl.value : 'humanoid';
                const body = bodyEl ? bodyEl.value : 'standard';
                const arms = armsEl ? armsEl.value : 'bipedal_arms';
                const legs = legsEl ? legsEl.value : 'bipedal_legs';
                const back = backEl ? backEl.value : 'none';

                const traits = [];
                document.querySelectorAll('.custom-trait-check:checked').forEach(chk => {
                    traits.push(chk.value);
                });

                const customData = {
                    name,
                    color: primaryColor,
                    colors: { primary: primaryColor, secondary: secColor, glow: glowColor },
                    bodyParts: { head, body, arms, legs, back },
                    hp, attack, speed, scale, traits
                };

                const cam = this.game.renderer.camera;
                const ent = this.game.entityManager.spawn(arch, cam.x, cam.y, customData);
                this.game.possess(ent);

                document.getElementById('modal-creator').classList.remove('active');
                if (this.game.audio) this.game.audio.playMagic();
                this.showNotification(`🌟 Created & Possessed ${name}!`);
            };
        }
    }
}

window.CATEGORIES = CATEGORIES;
window.CATEGORY_TOOLS = CATEGORY_TOOLS;
window.UIManager = UIManager;

