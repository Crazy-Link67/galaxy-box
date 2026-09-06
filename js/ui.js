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
        { id: 'sponge', name: 'Sponge Drain', icon: '🧽', desc: 'Absorbs fluids without altering ground.' },
        { id: 'fertilizer', name: 'Life Sprout', icon: '🌾', desc: 'Sprouts dense flora, trees and crops.' }
    ],
    powers: [
        { id: 'hand', name: "God's Hand", icon: '✋', desc: 'Grab any creature and fling with momentum!' },
        { id: 'shield', name: 'Forcefield Bubble', icon: '🛡️', desc: 'Deploy a protective kinetic shield bubble deflecting attacks.' },
        { id: 'mind_control', name: 'Mind Control', icon: '🧠', desc: 'Psychic wave ordering all nearby creatures to march to target.' },
        { id: 'overclock', name: 'Overclock Surge', icon: '⚡', desc: 'Infuses creatures with 2.5x speed, power, and electric aura.' },
        { id: 'chronos_stasis', name: 'Chronos Stasis', icon: '⏱️', desc: 'Freeze time and motion for all nearby creatures.' },
        { id: 'teleport', name: 'Cosmic Teleport', icon: '✨', desc: 'Instantly warp controlled hero or selected creature to clicked position.' },
        { id: 'necromancy', name: 'Necromancy', icon: '☠️', desc: 'Summon an undead skeleton army out of the earth.' },
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
        { id: 'evermean', name: 'Evermean Treant', icon: '🌲', desc: 'Living walking tree that headslams foes and forest trees with shockwaves!' },
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

        // Sound settings
        const volSlider = document.getElementById('sound-volume');
        if (volSlider) {
            volSlider.oninput = (e) => {
                if (this.game.audio) this.game.audio.setVolume(parseFloat(e.target.value));
            };
        }
        const muteToggle = document.getElementById('sound-mute');
        if (muteToggle) {
            muteToggle.onchange = (e) => {
                if (this.game.audio) this.game.audio.setMuted(e.target.checked);
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

        // Creature Creator Studio Spawn Button
        const spawnCustomBtn = document.getElementById('btn-spawn-custom');
        if (spawnCustomBtn) {
            spawnCustomBtn.onclick = () => {
                const name = document.getElementById('custom-name').value || 'Custom Titan';
                const type = document.getElementById('custom-archetype').value || 'monster';
                const color = document.getElementById('custom-color').value || '#ec4899';
                const hp = parseInt(document.getElementById('custom-hp').value) || 600;
                const attack = parseInt(document.getElementById('custom-attack').value) || 45;
                const speed = parseFloat(document.getElementById('custom-speed').value) || 0.6;
                const scale = parseFloat(document.getElementById('custom-scale').value) || 2.0;

                // Collect checked traits
                const traits = [];
                document.querySelectorAll('.custom-trait-check:checked').forEach(chk => {
                    traits.push(chk.value);
                });

                const customData = { name, color, hp, attack, speed, scale, traits };

                // Spawn in center of camera and immediately possess
                const cam = this.game.renderer.camera;
                const ent = this.game.entityManager.spawn(type, cam.x, cam.y, customData);
                this.game.possess(ent);

                document.getElementById('modal-creator').classList.remove('active');
                if (this.game.audio) this.game.audio.playMagic();
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
}

window.CATEGORIES = CATEGORIES;
window.CATEGORY_TOOLS = CATEGORY_TOOLS;
window.UIManager = UIManager;

