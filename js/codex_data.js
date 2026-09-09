// ==========================================
// GALAXYBOX - GALAXYPEDIA ARTICLE DATABASE
// Universal Encyclopedia, Guides, Lore & Stats
// ==========================================

const GALAXY_PEDIA = {
    "era_stone": {
        "id": "era_stone",
        "category": "Civilizations",
        "title": "Stone Age",
        "subtitle": "Dawn of Civilization (Era 1)",
        "tags": [
            "civilization",
            "era",
            "stone_age",
            "primitive",
            "huts"
        ],
        "stats": {
            "Tech Tier": "Era 1",
            "Primary Material": "Wood / Thatch",
            "Weapons": "Stone Spears & Wooden Clubs",
            "Max Population": "30",
            "Defense": "Low"
        },
        "abilities": [
            "Tribal Campfire: Heals wounded villagers and wards off beasts at night.",
            "Thatch Huts: Basic shelter protecting citizens from harsh weather.",
            "Spear Hunting: Primitive hunters forage and gather meat from wild herds."
        ],
        "lore": "The primordial dawn of sentient history. Huddled closely around crackling campfires, early humanoids, elves, dwarves, and orcs protect each other against prowling predators and the cold night. They carve flint tools and thatch rudimentary huts from freshly cut timber.",
        "tactics": "Plant plentiful forests and fertile soil nearby. Stone Age tribes rely completely on local timber to construct huts and expand their hamlet.",
        "counters": "Extremely flammable. A single lightning bolt or stray wildfire ember can incinerate an entire tribal settlement in seconds.",
        "related": [
            "era_bronze",
            "human",
            "elf",
            "orc",
            "dwarf",
            "forest",
            "wildfire"
        ],
        "toolId": "human",
        "actionLabel": "Spawn Settler"
    },
    "era_bronze": {
        "id": "era_bronze",
        "category": "Civilizations",
        "title": "Bronze & Iron Age",
        "subtitle": "The Age of Metallurgy & Walls (Era 2)",
        "tags": [
            "civilization",
            "era",
            "bronze_age",
            "iron_age",
            "swords",
            "farms"
        ],
        "stats": {
            "Tech Tier": "Era 2",
            "Primary Material": "Hewn Stone & Hardwood",
            "Weapons": "Bronze Swords & Recurve Bows",
            "Max Population": "75",
            "Defense": "Medium"
        },
        "abilities": [
            "Blacksmith Workshops: Smelts mined ore into durable armor and sharp weaponry.",
            "Fortified Stone Cottages: Resilient structures withstanding minor raids.",
            "Archer Regiments: Defends village borders with ranged projectile volleys.",
            "Irrigated Farms: Cultivates crops to support growing families."
        ],
        "lore": "With the discovery of surface copper, tin, and iron veins, societies transcend mere survival. Blacksmith anvils ring through the evening air as warriors forge iron blades. Named sovereign kingdoms coalesce with recognized borders, formal heraldry, and codified laws.",
        "tactics": "Seed Gold Ore and Stone veins near their borders. This drastically accelerates the transition to the Medieval Age while fueling rapid cottage construction.",
        "counters": "Vulnerable to siege weapons and colossal beasts. Earthquakes, mudslides, and rampaging dinosaurs easily crack early stone masonry.",
        "related": [
            "era_stone",
            "era_medieval",
            "gold_ore",
            "stone",
            "sword",
            "bow"
        ],
        "toolId": "human",
        "actionLabel": "Spawn Settler"
    },
    "era_medieval": {
        "id": "era_medieval",
        "category": "Civilizations",
        "title": "Medieval Castle Age",
        "subtitle": "Age of Chivalry & Stone Citadels (Era 3)",
        "tags": [
            "civilization",
            "era",
            "medieval",
            "castles",
            "knights",
            "war"
        ],
        "stats": {
            "Tech Tier": "Era 3",
            "Primary Material": "Chiseled Granite & Steel",
            "Weapons": "Steel Broadswords, Crossbows & Catapults",
            "Max Population": "160",
            "Defense": "High"
        },
        "abilities": [
            "Stone Citadels: Massive granite keep sheltering the royal monarch.",
            "Defensive Watchtowers: Automated arrow fire targeting hostile invaders.",
            "Armored Knights: Plated shock cavalry leading field battles.",
            "Diplomacy Ledger: Signs non-aggression treaties or launches grand sieges."
        ],
        "lore": "The glorious zenith of chivalric feudalism. Majestic granite keeps rise above the clouds, surrounded by defensive moats, watchtowers, and colorful royal banners. Monarchs field armored knights and disciplined archers, engaging in geopolitical diplomacy and grand sieges.",
        "tactics": "Use the Kingdom Ledger (`btn_diplomacy`) to monitor alliances and declarations of war. Bestowing a Divine Blessing upon their King can turn the tide of a global war.",
        "counters": "Aerial titans (Dragons, Phoenixes) ignore castle walls completely, roasting garrisons from above. Subterranean horrors like the Dune Leviathan can swallow entire keeps.",
        "related": [
            "era_bronze",
            "era_industrial",
            "dragon",
            "btn_diplomacy",
            "blessing"
        ],
        "toolId": "human",
        "actionLabel": "Spawn Settler"
    },
    "era_industrial": {
        "id": "era_industrial",
        "category": "Civilizations",
        "title": "Industrial Steam Age",
        "subtitle": "The Age of Steam, Iron & Factories (Era 4)",
        "tags": [
            "civilization",
            "era",
            "industrial",
            "tanks",
            "factories",
            "steam",
            "rifles"
        ],
        "stats": {
            "Tech Tier": "Era 4",
            "Primary Material": "Reinforced Brick & Structural Steel",
            "Weapons": "Bolt-Action Rifles & Heavy Steam Tanks",
            "Max Population": "350",
            "Defense": "Very High"
        },
        "abilities": [
            "Smokestack Factories: Automated manufacturing lines assembling modern vehicles.",
            "Mechanized Battle Tanks: Ironclad combat vehicles armed with explosive cannons.",
            "Rifle Battalions: Long-range gunpowder salvos tearing through beast hides.",
            "Paved Roadways: High-speed transit routes linking sprawling metropolitan zones."
        ],
        "lore": "Spurred by ingenious dwarven metallurgy and clockwork science, the realm is remade in steam, soot, and steel. Soaring brick smokestacks belch steam as factories churn out armored battle tanks and gunpowder rifles. Sprawling cobblestone avenues replace dirt trails.",
        "tactics": "Industrial empires produce immense wealth and rebuild destroyed districts rapidly. Their mechanized tanks effortlessly annihilate wild monster nests and barbarian camps.",
        "counters": "Industrial smokestacks elevate ambient heat and can accidentally spark nearby Tar Pits or Methane gas pockets into devastating petrochemical explosions.",
        "related": [
            "era_medieval",
            "era_cosmic",
            "tank",
            "tar_pit",
            "helicopter"
        ],
        "toolId": "tank",
        "actionLabel": "Spawn Battle Tank"
    },
    "era_cosmic": {
        "id": "era_cosmic",
        "category": "Civilizations",
        "title": "Cosmic Cyber Age",
        "subtitle": "Transcendent Interstellar Supremacy (Era 5)",
        "tags": [
            "civilization",
            "era",
            "cosmic",
            "cyber",
            "starfighter",
            "pylons",
            "shields"
        ],
        "stats": {
            "Tech Tier": "Era 5",
            "Primary Material": "Aether Alloys & Nanite Composites",
            "Weapons": "Plasma Rifles, Starfighters & Forcefield Pylons",
            "Max Population": "700+",
            "Defense": "Supreme"
        },
        "abilities": [
            "Resonance Plasma Pylons: Towering energy obelisks firing piercing defensive lasers.",
            "Kinetic Shield Generators: Planetary forcefield domes deflecting meteors and bombs.",
            "Starfighter Squadrons: Antigravity supersonic fighters patrolling planetary airspace.",
            "Automated Nano-Terraforming: Instantaneous soil and flora regeneration."
        ],
        "lore": "Having decoded the enigmatic resonance of Aether Crystals and deep starlight geometry, the empire ascends to the stars. Gleaming crystalline skyscrapers, kinetic forcefields, and orbiting starfighter squadrons dominate their skyline in a symphony of neon harmony.",
        "tactics": "Cosmic civilizations are nearly immune to natural disasters. Their planetary shields effortlessly absorb earthquakes, volcanic eruptions, and meteor strikes.",
        "counters": "Only apocalyptic god-level cataclysms—such as the Black Hole, Tsar Bomba 100MT, or Antimatter ICBM—can penetrate their quantum shield generators.",
        "related": [
            "era_industrial",
            "aether_crystal",
            "starfighter",
            "colossus_mech",
            "blackhole",
            "tsar_bomba"
        ],
        "toolId": "starfighter",
        "actionLabel": "Spawn Starfighter"
    },
    "crabzilla": {
        "id": "crabzilla",
        "category": "Creatures",
        "title": "Crabzilla Colossus",
        "subtitle": "Ancient Crustacean God",
        "tags": [
            "crabzilla",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "5000 HP",
            "Attack": "100 DMG",
            "Speed": "0.55",
            "Size": "14 Tiles",
            "Armor": "Bedrock Chitin"
        },
        "abilities": [
            "Dual Eye Death Lasers: Piercing thermal beams vaporizing terrain and targets.",
            "Tidal Stomp Shockwave: Seismic tremor shattering ground and sending foes flying.",
            "Bedrock Shell: Total immunity to fire, lava, and water hazards."
        ],
        "lore": "Waking from slumber in the abyssal oceanic trenches, Crabzilla rises with catastrophic fury. Its carapaced legs span whole islands, and twin optic lasers incinerate coastal kingdoms with surgical ruthlessness.",
        "tactics": "Possess Crabzilla (`control`) to direct its optic lasers with Left-Click and stomp with Spacebar/Right-Click. It can traverse deep oceans with zero penalty.",
        "counters": "Susceptible to sub-zero freeze rays (`freezeray`, `cryo_bomb`) and continuous orbital ion cannons.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "crabzilla",
        "actionLabel": "Spawn Crabzilla Colossus"
    },
    "kaiju": {
        "id": "kaiju",
        "category": "Creatures",
        "title": "Kaiju Godzilla",
        "subtitle": "Atomic Saurian Behemoth",
        "tags": [
            "kaiju",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "4500 HP",
            "Attack": "90 DMG",
            "Speed": "0.50",
            "Size": "12 Tiles",
            "Armor": "Radiation Scales"
        },
        "abilities": [
            "Atomic Breath Ray: Searing cobalt beam disintegrating rock into molten slag.",
            "Nuclear Tail Whip: Massive sweep clearing forests and knocking back titans.",
            "Regenerative Core: Rapidly heals damage over time."
        ],
        "lore": "Born from deep radioactive strata beneath tectonic plates, Kaiju Godzilla embodies the fury of split atoms. Glowing dorsal fins announce its presence before a devastating blue thermonuclear beam levels everything in its path.",
        "tactics": "Aim the atomic breath into enemy mountain forts or hostile titan nests to melt armor and create impassable magma moats.",
        "counters": "Black holes and antimatter implosions easily bypass its dense scales.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "kaiju",
        "actionLabel": "Spawn Kaiju Godzilla"
    },
    "phoenix": {
        "id": "phoenix",
        "category": "Creatures",
        "title": "Solar Phoenix",
        "subtitle": "Immortal Stardust Firebird",
        "tags": [
            "phoenix",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "1800 HP",
            "Attack": "70 DMG",
            "Speed": "1.10",
            "Size": "7 Tiles",
            "Class": "Mythic Winged"
        },
        "abilities": [
            "Solar Flare Burst: Blinding eruption of sunfire burning nearby terrain.",
            "Supernova Rebirth: Explodes in a fiery burst upon death, regenerating to full life.",
            "Winged Flight: Unhindered flight above oceans, chasms, and volcanic calderas."
        ],
        "lore": "Said to be hatched from a newborn star fragment, the Solar Phoenix glides gracefully across planetary skies. Its plumage burns with eternal solar flames that never dwindle.",
        "tactics": "Use its high flight speed and aerial firestorms to decimate ground armies while staying completely out of reach of melee strikes.",
        "counters": "Cryomancers, frost tempests, and cryogenic freezing rays extinguish its fiery feathers.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "phoenix",
        "actionLabel": "Spawn Solar Phoenix"
    },
    "kraken": {
        "id": "kraken",
        "category": "Creatures",
        "title": "Abyssal Kraken",
        "subtitle": "Cthulhoid Ocean Devourer",
        "tags": [
            "kraken",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "3000 HP",
            "Attack": "80 DMG",
            "Speed": "0.70",
            "Size": "11 Tiles",
            "Class": "Aquatic Apex"
        },
        "abilities": [
            "Crushing Tentacle Sweep: Smashes warships, docks, and coastal towns.",
            "Whirlpool Deluge: Pulls surrounding vessels and swimmers into deep oceanic trenches.",
            "Ink Cloak: Disorients pursuers and regenerates in deep waters."
        ],
        "lore": "Dwelling in the darkest pelagic depths where light dare not tread, the Kraken sleeps for centuries before rising to pull entire naval fleets beneath the churning waves.",
        "tactics": "Keep the Kraken in deep ocean tiles where its movement speed and regeneration are at peak effectiveness.",
        "counters": "Evaporate ocean waters with extreme heat rays or drain coastal waters using sponge tools.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "kraken",
        "actionLabel": "Spawn Abyssal Kraken"
    },
    "hydra": {
        "id": "hydra",
        "category": "Creatures",
        "title": "Venom Hydra",
        "subtitle": "Multi-Headed Regenerative Serpent",
        "tags": [
            "hydra",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "2500 HP",
            "Attack": "65 DMG",
            "Speed": "0.45",
            "Size": "9 Tiles",
            "Class": "Mythic Reptile"
        },
        "abilities": [
            "Acid Bile Barrage: Spews corrosive toxic globs dissolving armor and flora.",
            "Tri-Head Strike: Rapid three-strike melee attacks rending foes.",
            "Mitotic Regeneration: Heals rapidly when standing in poisoned swamps or water."
        ],
        "lore": "A mythic serpent of primeval swamps. For every wound sustained, its multiple serpentine heads lash out with renewed vigor, coating the battlefield in corrosive neurotoxins.",
        "tactics": "Station the Hydra inside Poison Swamps or Tar Pits to act as a resilient regional fortress guardian.",
        "counters": "Fire and lightning cauterize its wounds and disrupt its biological regeneration.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "hydra",
        "actionLabel": "Spawn Venom Hydra"
    },
    "frost_titan": {
        "id": "frost_titan",
        "category": "Creatures",
        "title": "Frost Titan",
        "subtitle": "Glacial Juggernaut of the North",
        "tags": [
            "frost_titan",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "4000 HP",
            "Attack": "85 DMG",
            "Speed": "0.42",
            "Size": "12 Tiles",
            "Class": "Elemental Titan"
        },
        "abilities": [
            "Glacial Slam: Churns earth into permafrost and freezes targets solid.",
            "Blizzard Nova: Releases expanding shockwave of sub-zero ice crystals.",
            "Ice Affinity: Moves faster and heals continuously while traversing ice and snow."
        ],
        "lore": "Carved from living glaciers in the eternal arctic wastes, the Frost Titan marches southward bringing freezing blizzards and unyielding ice sheets wherever it treads.",
        "tactics": "Pair with the Blizzard Storm weather to transform whole continents into icy tundra while buffing the titan.",
        "counters": "Molten lava, wildfire, and solar flares melt its glacial armor rapidly.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "frost_titan",
        "actionLabel": "Spawn Frost Titan"
    },
    "galaxy_guardian": {
        "id": "galaxy_guardian",
        "category": "Creatures",
        "title": "Galaxy Guardian",
        "subtitle": "Celestial Planetary Protector",
        "tags": [
            "galaxy_guardian",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "6000 HP",
            "Attack": "120 DMG",
            "Speed": "0.60",
            "Size": "13 Tiles",
            "Class": "Cosmic Deity"
        },
        "abilities": [
            "Planetary Ring Barrier: Orbiting stardust shields deflecting 50% of projectiles.",
            "Cosmic Pulse: Radiates stellar waves that purge corruption and heal allies.",
            "Sacrificial Resonance: When struck by a thermonuclear device, triggers The Great Galaxy Sacrifice!"
        ],
        "lore": "An ancient guardian forged in the crucible of galaxy creation. Orbiting rings of stardust shimmer around its shoulders, watching over civilizations with benevolent cosmic vigil.",
        "tactics": "Use as the supreme champion to defend civilization capitals against apocalypse disasters.",
        "counters": "Detonating an Atomic Nuke directly atop the Galaxy Guardian triggers a secret celestial reaction!",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "galaxy_guardian",
        "actionLabel": "Spawn Galaxy Guardian"
    },
    "colossus_mech": {
        "id": "colossus_mech",
        "category": "Creatures",
        "title": "Colossus Mech",
        "subtitle": "Heavy Cybernetic Combat Walker",
        "tags": [
            "colossus_mech",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "3800 HP",
            "Attack": "95 DMG",
            "Speed": "0.48",
            "Size": "11 Tiles",
            "Class": "Cyber Titan"
        },
        "abilities": [
            "Twin Railguns: High-velocity hyperdense tungsten slugs piercing armor.",
            "Micro-Missile Swarm: Cascading cluster salvo detonating in wide arcs.",
            "Overdrive Shield: Absorbs incoming energy blasts."
        ],
        "lore": "The apex of advanced mechanized warfare. Stomping forward on hydraulics of hardened titanium, the Colossus Mech pulverizes enemy infantry lines and reduces fortified castles to rubble.",
        "tactics": "Possess to deliver devastating long-range railgun snipes against enemy leaders from across the map.",
        "counters": "High-Altitude EMP blasts disable its target tracking and short-circuit its shields.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "colossus_mech",
        "actionLabel": "Spawn Colossus Mech"
    },
    "seraph_angel": {
        "id": "seraph_angel",
        "category": "Creatures",
        "title": "Seraph Celestial Angel",
        "subtitle": "Six-Winged Divine Emissary",
        "tags": [
            "seraph_angel",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "2800 HP",
            "Attack": "85 DMG",
            "Speed": "0.95",
            "Size": "8 Tiles",
            "Class": "Celestial"
        },
        "abilities": [
            "Holy Smite Spear: Piercing shaft of radiant golden sunlight.",
            "Divine Grace Aura: Continuously heals all friendly creatures within 15 tiles.",
            "Consecration: Converts mundane grass and stone beneath into Consecrated Holy Ground."
        ],
        "lore": "Descending on six radiant wings woven of golden starlight, the Seraph brings judgment to wicked demons and divine salvation to righteous mortals.",
        "tactics": "Place near wounded kingdoms. The Seraph cures zombie infections, cleanses corruption, and raises fallen citizens.",
        "counters": "Nether demons and cursed blood rivers weaken its divine radiance.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "seraph_angel",
        "actionLabel": "Spawn Seraph Celestial Angel"
    },
    "dune_leviathan": {
        "id": "dune_leviathan",
        "category": "Creatures",
        "title": "Dune Sand Leviathan",
        "subtitle": "Colossal Subterranean Sandworm",
        "tags": [
            "dune_leviathan",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "4200 HP",
            "Attack": "110 DMG",
            "Speed": "0.65",
            "Size": "14 Tiles",
            "Class": "Apex Behemoth"
        },
        "abilities": [
            "Sand Breach Slam: Burrows underground and erupts violently beneath prey.",
            "Devour Whole: Swallows smaller entities and caravans in a single gulp.",
            "Tremor Sense: Detects footsteps across vast desert expanses."
        ],
        "lore": "Rulers of the vast arid dunes. Segmented rings of razor teeth grind through granite and sand with terrifying ease, surfacing only to drag unwary desert travelers into the subterranean abyss.",
        "tactics": "Spawn in desert biomes to police trade caravans and prevent encroaching civilizations from overharvesting.",
        "counters": "Deep water and ice halt its burrowing completely.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "dune_leviathan",
        "actionLabel": "Spawn Dune Sand Leviathan"
    },
    "vampire_lord": {
        "id": "vampire_lord",
        "category": "Creatures",
        "title": "Vampire Lord",
        "subtitle": "Gothic Sovereign of the Night",
        "tags": [
            "vampire_lord",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "2200 HP",
            "Attack": "75 DMG",
            "Speed": "0.85",
            "Size": "7 Tiles",
            "Class": "Undead Royalty"
        },
        "abilities": [
            "Vampiric Life Siphon: Steals vitality on every melee strike, healing wounds.",
            "Bat Swarm Dash: Warps instantly through obstacles as an untargetable bat swarm.",
            "Nocturnal Buff: Gains +50% speed and damage during night hours."
        ],
        "lore": "Drifting through moonlit mists clad in crimson velvet, the Vampire Lord commands undead thralls and siphons the life essence of mortal kingdoms.",
        "tactics": "Unleash during the Night cycle or a Solar Eclipse to capitalize on immense nocturnal combat bonuses.",
        "counters": "Vulnerable to daytime sunlight, holy ground tiles, and divine smite miracles.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "vampire_lord",
        "actionLabel": "Spawn Vampire Lord"
    },
    "void_titan": {
        "id": "void_titan",
        "category": "Creatures",
        "title": "Cosmic Void Titan",
        "subtitle": "Singularity Horror of the Nether",
        "tags": [
            "void_titan",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "5500 HP",
            "Attack": "115 DMG",
            "Speed": "0.52",
            "Size": "13 Tiles",
            "Class": "Cosmic Secret"
        },
        "abilities": [
            "Singularity Collapse: Creates miniature black hole vortices dragging in terrain.",
            "Netherflame Breath: Searing void fire that burns indefinitely.",
            "Dimensional Shift: Teleports short distances when sustaining heavy damage."
        ],
        "lore": "A nightmarish secret entity drawn from beyond the edge of the universe. Its form consists of collapsing gravitational mass and dark antimatter filaments.",
        "tactics": "A devastating boss encounter capable of eradicating entire continents single-handedly.",
        "counters": "Requires coordinated artillery barrages and orbital kinetic strikes to overwhelm.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "void_titan",
        "actionLabel": "Spawn Cosmic Void Titan"
    },
    "evermean": {
        "id": "evermean",
        "category": "Creatures",
        "title": "Evermean Treant",
        "subtitle": "Sentient Pointy-Legged Woodland Terror",
        "tags": [
            "evermean",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "1600 HP",
            "Attack": "60 DMG",
            "Speed": "0.60",
            "Size": "6 Tiles",
            "Class": "Sylvan Beast"
        },
        "abilities": [
            "Needle-Leg Headslam: Leaps into the air and slams down with earthshaking force.",
            "Forest Camouflage: Blends seamlessly with trees until prey draws near.",
            "Bark Armor: Reflects 35% of incoming physical damage."
        ],
        "lore": "An eyeless walking tree with sharp needle legs that stalks dense pine groves. Angered by reckless woodcutters, it uproots itself to pulverize mortal settlements.",
        "tactics": "Possess the Evermean to jump-slam enemy encampments and fell entire forests with a single leap.",
        "counters": "Highly flammable. Fire arrows and flamethrowers quickly reduce it to ash.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "evermean",
        "actionLabel": "Spawn Evermean Treant"
    },
    "tank": {
        "id": "tank",
        "category": "Creatures",
        "title": "Battle Tank",
        "subtitle": "Mechanized Armored Juggernaut",
        "tags": [
            "tank",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "2400 HP",
            "Attack": "75 DMG",
            "Speed": "0.50",
            "Size": "8 Tiles",
            "Class": "Vehicle"
        },
        "abilities": [
            "High-Explosive Cannon: Long-range explosive shells blasting craters.",
            "Coaxial Machine Gun: Continuous rapid-fire suppression against swarms.",
            "Reinforced Treads: Crushes trees and lightweight structures underfoot."
        ],
        "lore": "Engineered during the Industrial Age, this diesel-powered iron dreadnought dominates land warfare with explosive firepower and thick armor plating.",
        "tactics": "Deploy in tank brigades to spearhead kingdom expansion against hostile orc clans.",
        "counters": "Vulnerable to deep ocean water, lava pools, and anti-tank kinetic rods.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "tank",
        "actionLabel": "Spawn Battle Tank"
    },
    "warship": {
        "id": "warship",
        "category": "Creatures",
        "title": "Battleship",
        "subtitle": "Heavy Naval Ironclad",
        "tags": [
            "warship",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "3200 HP",
            "Attack": "85 DMG",
            "Speed": "0.55",
            "Size": "12 Tiles",
            "Class": "Naval Vehicle"
        },
        "abilities": [
            "Broadside Artillery Salvo: Rains 3 explosive shells along coastal targets.",
            "Depth Charges: Subsurface explosives combating sea monsters.",
            "Iron Hull: Resilient to projectile fire."
        ],
        "lore": "Riding high on open seas, this steel-plated leviathan commands coastal waterways and shells inland kingdoms from the safety of the ocean.",
        "tactics": "Position in coastal waters to provide artillery support during territorial sieges.",
        "counters": "Oceanic maelstroms, giant krakens, and aerial dive-bombers.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "warship",
        "actionLabel": "Spawn Battleship"
    },
    "helicopter": {
        "id": "helicopter",
        "category": "Creatures",
        "title": "Attack Chopper",
        "subtitle": "Tactical Rotary Aircraft",
        "tags": [
            "helicopter",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "1400 HP",
            "Attack": "65 DMG",
            "Speed": "1.20",
            "Size": "7 Tiles",
            "Class": "Aircraft"
        },
        "abilities": [
            "Twin Gatling Gun: High-speed strafing runs shredding infantry.",
            "Rocket Pods: Fires salvos of unguided rockets into target clusters.",
            "Air Mobility: Glides freely over all terrain obstacles."
        ],
        "lore": "Whirring blades tear through the sky as this agile gunship maneuvers above combat zones, delivering rapid close-air support.",
        "tactics": "Excellent for hunting down fast-moving monsters and patrolling expansive territory borders.",
        "counters": "Susceptible to anti-air flak, lightning storms, and guided missile strikes.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "helicopter",
        "actionLabel": "Spawn Attack Chopper"
    },
    "starfighter": {
        "id": "starfighter",
        "category": "Creatures",
        "title": "Cosmic Starfighter",
        "subtitle": "Supersonic Interstellar Craft",
        "tags": [
            "starfighter",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "2000 HP",
            "Attack": "80 DMG",
            "Speed": "1.45",
            "Size": "7 Tiles",
            "Class": "Cosmic Craft"
        },
        "abilities": [
            "Photon Plasma Cannons: Searing energy bolts disintegrating targets.",
            "Hyperspace Dash: Instantaneous short-range warp evasion.",
            "Energy Deflector: Kinetic shield absorbing projectile volleys."
        ],
        "lore": "Forged in orbital shipyards of the Cosmic Age, the starfighter cuts through atmosphere and vacuum alike with antigravity thrusters.",
        "tactics": "The fastest vehicle in the game. Possess to dogfight dragons and rain plasma upon ground forces.",
        "counters": "Electromagnetic pulses and black hole gravitational singularities.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "starfighter",
        "actionLabel": "Spawn Cosmic Starfighter"
    },
    "mech": {
        "id": "mech",
        "category": "Creatures",
        "title": "Steampunk Mech",
        "subtitle": "Steam-Powered Bipedal Walker",
        "tags": [
            "mech",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "2200 HP",
            "Attack": "70 DMG",
            "Speed": "0.55",
            "Size": "8 Tiles",
            "Class": "Mech"
        },
        "abilities": [
            "Gatling Cannon: High-speed brass bullet stream.",
            "Piston Punch: Heavy hydraulic melee strike launching targets backwards.",
            "Steam Vent: Releases burning steam cloud blinding surrounding enemies."
        ],
        "lore": "A masterpiece of dwarven clockwork and steam valves. Clanking gears and whistling copper pipes herald the arrival of this combat walker.",
        "tactics": "Equip with Flamethrowers or Gravity Hammers to maximize close-quarters devastation.",
        "counters": "Water submersion extinguishes its boiler, slowing it down.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "mech",
        "actionLabel": "Spawn Steampunk Mech"
    },
    "wizard": {
        "id": "wizard",
        "category": "Creatures",
        "title": "Arcane Wizard",
        "subtitle": "Master of Celestial Magic",
        "tags": [
            "wizard",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "950 HP",
            "Attack": "65 DMG",
            "Speed": "0.65",
            "Size": "5 Tiles",
            "Class": "Spellcaster"
        },
        "abilities": [
            "Homing Stardust Orbs: Arcane spheres tracking enemy lifeforms.",
            "Teleportation Ward: Instantly warps away when cornered.",
            "Elemental Transmutation: Can transform barren stone into fertile soil."
        ],
        "lore": "Robed scholars who spend centuries deciphering the celestial constellations. A single flick of an arcane staff bends the laws of physics.",
        "tactics": "Keep wizards behind frontline warriors. Their homing missiles pick off enemy champions effortlessly.",
        "counters": "Fragile physical defense. High-speed assassins can eliminate them before spells can be cast.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "wizard",
        "actionLabel": "Spawn Arcane Wizard"
    },
    "human": {
        "id": "human",
        "category": "Creatures",
        "title": "Human Settler",
        "subtitle": "Versatile Civilization Builder",
        "tags": [
            "human",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "100 HP",
            "Attack": "12 DMG",
            "Speed": "0.60",
            "Size": "4 Tiles",
            "Class": "Civilized Race"
        },
        "abilities": [
            "Kingdom Building: Constructs houses, farms, blacksmiths, and citadels.",
            "Resource Harvesting: Gathers wood, stone, gold, and food.",
            "Era Advancement: Techs up through 5 civilization eras."
        ],
        "lore": "Adaptable, ambitious, and prolific. Humans colonize diverse landscapes from coastal plains to rocky foothills, forging grand empires that shape history.",
        "tactics": "Spawn groups of humans near trees and water to jumpstart a thriving sovereign civilization.",
        "counters": "Vulnerable to wild beasts and plagues before establishing fortified towns.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "human",
        "actionLabel": "Spawn Human Settler"
    },
    "elf": {
        "id": "elf",
        "category": "Creatures",
        "title": "High Elf",
        "subtitle": "Graceful Long-Lived Archer",
        "tags": [
            "elf",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "110 HP",
            "Attack": "14 DMG",
            "Speed": "0.70",
            "Size": "4 Tiles",
            "Class": "Civilized Race"
        },
        "abilities": [
            "Elven Archery: High-range precision bow attacks.",
            "Forest Affinity: Moves faster through dense woods without clearing trees.",
            "Extended Lifespan: Lives up to 300 years, accumulating vast wisdom."
        ],
        "lore": "Born under starlight in ancient groves, elves live in deep harmony with the forest, weaving nature magic into their silver bows and graceful towers.",
        "tactics": "Seed Enchanted Groves and Dense Forests around elven settlements to bolster their growth and defenses.",
        "counters": "Deforestation and wildfires severely cripple elven infrastructure.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "elf",
        "actionLabel": "Spawn High Elf"
    },
    "orc": {
        "id": "orc",
        "category": "Creatures",
        "title": "Orc Warrior",
        "subtitle": "Brutal Clan Brawler",
        "tags": [
            "orc",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "150 HP",
            "Attack": "18 DMG",
            "Speed": "0.58",
            "Size": "5 Tiles",
            "Class": "Civilized Race"
        },
        "abilities": [
            "Bloodlust Fury: Gains bonus attack damage when injured.",
            "Siege Strength: Deals 2x damage against enemy buildings.",
            "Aggressive Expansion: Readily declares war on neighboring kingdoms."
        ],
        "lore": "Forged in rugged volcanic badlands, orcs value martial strength above all. Their war camps expand aggressively across untamed borders.",
        "tactics": "Spawn orcs when you want violent geopolitical warfare and dramatic kingdom clashes.",
        "counters": "Ranged archer volleys and magic spellcasters can whittle them down before melee range.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "orc",
        "actionLabel": "Spawn Orc Warrior"
    },
    "dwarf": {
        "id": "dwarf",
        "category": "Creatures",
        "title": "Mountain Dwarf",
        "subtitle": "Stonemason & Master Miner",
        "tags": [
            "dwarf",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "140 HP",
            "Attack": "15 DMG",
            "Speed": "0.52",
            "Size": "4 Tiles",
            "Class": "Civilized Race"
        },
        "abilities": [
            "Deep Tunneling: Mines stone and gold veins at double efficiency.",
            "Heavy Armor Smithing: Crafts high-defense equipment for troops.",
            "Subterranean Fortresses: Erects durable mountain citadels."
        ],
        "lore": "Stout, bearded miners who carve majestic stone halls beneath mountain summits. Dwarven blacksmiths forge the finest blades and armor in the realm.",
        "tactics": "Place gold veins and mountains near dwarven hamlets to see them rapidly advance into industrial mastery.",
        "counters": "Slow movement speed makes them vulnerable to hit-and-run tactics in open plains.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "dwarf",
        "actionLabel": "Spawn Mountain Dwarf"
    },
    "dragon": {
        "id": "dragon",
        "category": "Creatures",
        "title": "Fire Dragon",
        "subtitle": "Winged Flame Wyrm",
        "tags": [
            "dragon",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "2200 HP",
            "Attack": "75 DMG",
            "Speed": "0.90",
            "Size": "9 Tiles",
            "Class": "Draconic Titan"
        },
        "abilities": [
            "Flamethrower Breath: Spews a continuous cone of searing wildfire.",
            "Dive-Bomb Firestorm: Slams down into the earth creating fiery shockwaves.",
            "Fireproof Scales: Complete immunity to fire, lava, and thermal damage."
        ],
        "lore": "The apex terror of the skies. Its mighty leathery wings cast shadows across mountains, and its fiery breath turns green forests into raging infernos.",
        "tactics": "Possess the dragon to scorch enemy armies from high altitude and dive-bomb kingdom capitals.",
        "counters": "Cryo weapons, blizzard tempests, and ballista towers.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "dragon",
        "actionLabel": "Spawn Fire Dragon"
    },
    "trex": {
        "id": "trex",
        "category": "Creatures",
        "title": "Tyrannosaurus Rex",
        "subtitle": "Apex Primeval Carnivore",
        "tags": [
            "trex",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "2600 HP",
            "Attack": "95 DMG",
            "Speed": "0.72",
            "Size": "10 Tiles",
            "Class": "Dinosaur Apex"
        },
        "abilities": [
            "Bone-Crushing Bite: Snaps heavy jaws dealing catastrophic single-target damage.",
            "Terrifying Roar: Disorients and panics surrounding creatures.",
            "Rampage Sprint: Charges forward, toppling trees and wooden huts."
        ],
        "lore": "The undisputed king of the Cretaceous epoch. Powerful theropod legs carry a massive skull equipped with 60 serrated, railroad-spike teeth.",
        "tactics": "Unleash in orc or human lands to test whether their warriors have developed enough steel weapons to fell a prehistoric titan.",
        "counters": "Swarm tactics and ranged projectile weapons from defensive towers.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "trex",
        "actionLabel": "Spawn Tyrannosaurus Rex"
    },
    "velociraptor": {
        "id": "velociraptor",
        "category": "Creatures",
        "title": "Velociraptor",
        "subtitle": "Lethal Pack Hunter",
        "tags": [
            "velociraptor",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "450 HP",
            "Attack": "32 DMG",
            "Speed": "1.05",
            "Size": "5 Tiles",
            "Class": "Dinosaur Pack"
        },
        "abilities": [
            "Sickle Claw Leap: Pounces from distance, latching onto targets.",
            "Pack Howl: Buffs speed and damage of nearby raptors.",
            "Agile Evasion: High dodge chance against projectile arrows."
        ],
        "lore": "Feathered, cunning, and blindingly fast. Velociraptors hunt in coordinated packs, flanking larger prey with deadly surgical precision.",
        "tactics": "Spawn in groups of 4-6 to create lethal hunting packs that terrorize unfortified settlements.",
        "counters": "Heavy armor and defensive stone walls prevent their pounce attacks.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "velociraptor",
        "actionLabel": "Spawn Velociraptor"
    },
    "astral_phoenix": {
        "id": "astral_phoenix",
        "category": "Creatures",
        "title": "Astral Phoenix",
        "subtitle": "Cosmic Stellar Starbird",
        "tags": [
            "astral_phoenix",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "2100 HP",
            "Attack": "80 DMG",
            "Speed": "1.15",
            "Size": "8 Tiles",
            "Class": "Legendary Cosmic"
        },
        "abilities": [
            "Stellar Plasma Barrage: Fires piercing starlight flares in triple spreads.",
            "Supernova Rebirth: Detonates in a glorious burst of cosmic healing and damage on death.",
            "Aether Flight: Traverses void and mountains with complete freedom."
        ],
        "lore": "A celestial bird spun from pure stardust and cosmic auroras. Legend holds that its song can calm warring emperors and bring peace to troubled lands.",
        "tactics": "Command in First-Person mode to soar across the entire planet while showering starlight upon enemy lines.",
        "counters": "Void implosions and antimatter weaponry.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "astral_phoenix",
        "actionLabel": "Spawn Astral Phoenix"
    },
    "frost_giant": {
        "id": "frost_giant",
        "category": "Creatures",
        "title": "Frost Giant Juggernaut",
        "subtitle": "Ancient Glacial Titan",
        "tags": [
            "frost_giant",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "3600 HP",
            "Attack": "85 DMG",
            "Speed": "0.45",
            "Size": "11 Tiles",
            "Class": "Legendary Giant"
        },
        "abilities": [
            "Glacial Boulder Throw: Hurls massive ice chunks crushing targets at range.",
            "Avalanche Stomp: Fractures the ground into ice shards and freezes foes.",
            "Frost Aura: Chills nearby enemies, halving their movement speed."
        ],
        "lore": "Beings of ancient bedrock and permafrost from the northernmost peaks. Their footfalls sound like thunderous avalanches tearing down mountainsides.",
        "tactics": "Pair with icy mountain landscapes to create impenetrable arctic fortress zones.",
        "counters": "Volcanic calderas, lava flows, and continuous fire attacks.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "frost_giant",
        "actionLabel": "Spawn Frost Giant Juggernaut"
    },
    "dread_reaper": {
        "id": "dread_reaper",
        "category": "Creatures",
        "title": "Dread Reaper",
        "subtitle": "Harbinger of the Underworld",
        "tags": [
            "dread_reaper",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "1900 HP",
            "Attack": "85 DMG",
            "Speed": "0.80",
            "Size": "7 Tiles",
            "Class": "Legendary Undead"
        },
        "abilities": [
            "Soul Siphon Orbs: Homing shadow orbs that steal health and return it to the Reaper.",
            "Soul Harvest Sweep: 360-degree scythe whirlwind executing wounded foes.",
            "Phantom Phase: Passes freely through walls, trees, and obstacles."
        ],
        "lore": "Cloaked in tatters of shadow, the Dread Reaper glides above battlefields silently collecting the departing souls of fallen warriors.",
        "tactics": "Possess to execute low-health heroes and siphon vitality to sustain long rampages.",
        "counters": "Holy Ground tiles and Seraph Angel divine light rays deal critical damage.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "dread_reaper",
        "actionLabel": "Spawn Dread Reaper"
    },
    "dune_scorpion_king": {
        "id": "dune_scorpion_king",
        "category": "Creatures",
        "title": "Dune Scorpion King",
        "subtitle": "Monarch of the Waste",
        "tags": [
            "dune_scorpion_king",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "3100 HP",
            "Attack": "78 DMG",
            "Speed": "0.62",
            "Size": "10 Tiles",
            "Class": "Legendary Arthropod"
        },
        "abilities": [
            "Venom Barb Piercers: Twin tail stingers injecting virulent neurotoxins.",
            "Sandstorm Burrow: Vanishes into sand dunes and ambushes from behind.",
            "Chitinous Carapace: High physical resistance against swords and arrows."
        ],
        "lore": "Reigning over sun-scorched deserts for millennia, this titanic arachnid slumbers beneath the dunes, awaiting foolish intruders who disturb its treasure.",
        "tactics": "Guards desert pyramids and quicksand biomes with unmatched lethality.",
        "counters": "Cryo-freeze and water-based attacks break through its brittle chitin.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "dune_scorpion_king",
        "actionLabel": "Spawn Dune Scorpion King"
    },
    "titan_golem": {
        "id": "titan_golem",
        "category": "Creatures",
        "title": "Titan Golem",
        "subtitle": "Bedrock Bastion Colossus",
        "tags": [
            "titan_golem",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "4400 HP",
            "Attack": "90 DMG",
            "Speed": "0.38",
            "Size": "12 Tiles",
            "Class": "Legendary Colossus"
        },
        "abilities": [
            "Bedrock Quake: Slams massive stone fists, triggering seismic fissures.",
            "Fortress Stance: Roots into earth, increasing defense by 80%.",
            "Rock Hurl: Throws boulders shattering distant fortifications."
        ],
        "lore": "Carved directly from planetary bedrock by elder gods. Its body consists of solid granite, iron ore, and ancient protective runes.",
        "tactics": "Use as an unyielding frontline shield to absorb incoming artillery and monster assaults.",
        "counters": "Acid sludge dissolves its rock matrix; kinetic orbital strikes crack its core.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "titan_golem",
        "actionLabel": "Spawn Titan Golem"
    },
    "pegasus": {
        "id": "pegasus",
        "category": "Creatures",
        "title": "Celestial Pegasus",
        "subtitle": "Winged Steed of the Heavens",
        "tags": [
            "pegasus",
            "creature",
            "creatures"
        ],
        "stats": {
            "Health": "1300 HP",
            "Attack": "50 DMG",
            "Speed": "1.25",
            "Size": "6 Tiles",
            "Class": "Legendary Steed"
        },
        "abilities": [
            "Stardust Gale: Wing gust that blows back enemies and extinguishes wildfires.",
            "Aurora Blessing: Radiates gentle healing light to nearby kingdom citizens.",
            "High-Speed Flight: Can sprint and fly faster than any mundane mount."
        ],
        "lore": "A mythic winged stallion endowed with divine grace. Wherever its hooves touch ground, blooming flowers and sparkling stardust spring to life.",
        "tactics": "The ultimate reconnaissance and blessing mount. Possess to survey the world and bless distant cities.",
        "counters": "Vulnerable to concentrated archer volleys and lightning bolts.",
        "related": [
            "control",
            "creator",
            "era_medieval"
        ],
        "toolId": "pegasus",
        "actionLabel": "Spawn Celestial Pegasus"
    },
    "water": {
        "id": "water",
        "category": "Biomes & Tiles",
        "title": "Shallow Water",
        "subtitle": "Liquid of Life",
        "tags": [
            "water",
            "biome",
            "tile",
            "terrain"
        ],
        "stats": {
            "Depth": "1",
            "Flow Speed": "Normal",
            "Evaporation": "Slow"
        },
        "abilities": [
            "Cellular Automata Simulation",
            "Dynamic Fluid & Elevation Physics"
        ],
        "lore": "Clear, gentle water flowing through rivers, streams, and coastal shorelines. Essential for kingdom agriculture and drinking.",
        "tactics": "Use water to irrigate crops, quench raging wildfires, and create natural defense moats around cities.",
        "counters": "Reactions with opposing elemental forces.",
        "related": [
            "water",
            "lava",
            "fertilizer",
            "sponge"
        ],
        "toolId": "water",
        "actionLabel": "Paint Shallow Water"
    },
    "deep_water": {
        "id": "deep_water",
        "category": "Biomes & Tiles",
        "title": "Deep Ocean",
        "subtitle": "Abyssal Marine Depths",
        "tags": [
            "deep_water",
            "biome",
            "tile",
            "terrain"
        ],
        "stats": {
            "Depth": "2",
            "Traversable": "Ships & Krakens",
            "Pressure": "High"
        },
        "abilities": [
            "Cellular Automata Simulation",
            "Dynamic Fluid & Elevation Physics"
        ],
        "lore": "Vast oceanic trenches where sunlight fades and ancient leviathans lurk. Prevents land armies from crossing without naval vessels.",
        "tactics": "Carve deep water trenches using the Shovel Lower tool to isolate warring kingdoms.",
        "counters": "Reactions with opposing elemental forces.",
        "related": [
            "water",
            "lava",
            "fertilizer",
            "sponge"
        ],
        "toolId": "deep_water",
        "actionLabel": "Paint Deep Ocean"
    },
    "coral_reef": {
        "id": "coral_reef",
        "category": "Biomes & Tiles",
        "title": "Coral Reef",
        "subtitle": "Living Marine Sanctuary",
        "tags": [
            "coral_reef",
            "biome",
            "tile",
            "terrain"
        ],
        "stats": {
            "Marine Bio-Density": "High",
            "Ecosystem": "Flourishing",
            "Light": "Bioluminescent"
        },
        "abilities": [
            "Cellular Automata Simulation",
            "Dynamic Fluid & Elevation Physics"
        ],
        "lore": "Vibrant calcified colonies of living polyps growing in shallow tropical waters. Supports teeming schools of fish and enriches coastal civil settlements.",
        "tactics": "Seed along coasts to attract marine life and accelerate nearby kingdom fishing harvests.",
        "counters": "Reactions with opposing elemental forces.",
        "related": [
            "water",
            "lava",
            "fertilizer",
            "sponge"
        ],
        "toolId": "coral_reef",
        "actionLabel": "Paint Coral Reef"
    },
    "tar_pit": {
        "id": "tar_pit",
        "category": "Biomes & Tiles",
        "title": "Tar Pit",
        "subtitle": "Volatile Hydrocarbon Mire",
        "tags": [
            "tar_pit",
            "biome",
            "tile",
            "terrain"
        ],
        "stats": {
            "Viscosity": "Extreme",
            "Flammability": "Explosive",
            "Trapping": "Fatal"
        },
        "abilities": [
            "Cellular Automata Simulation",
            "Dynamic Fluid & Elevation Physics"
        ],
        "lore": "Bubbling pools of dense prehistoric petroleum seep up from deep subterranean reservoirs. Unwary creatures become mired and slowly sink.",
        "tactics": "Lay down as natural moat traps against hostile armies. WARNING: Fire or lightning will detonate the tar into a raging petroleum blaze!",
        "counters": "Reactions with opposing elemental forces.",
        "related": [
            "water",
            "lava",
            "fertilizer",
            "sponge"
        ],
        "toolId": "tar_pit",
        "actionLabel": "Paint Tar Pit"
    },
    "glowcap_mushroom": {
        "id": "glowcap_mushroom",
        "category": "Biomes & Tiles",
        "title": "Glowcap Mycelium",
        "subtitle": "Bioluminescent Fungal Grove",
        "tags": [
            "glowcap_mushroom",
            "biome",
            "tile",
            "terrain"
        ],
        "stats": {
            "Spores": "Psychoactive",
            "Luminescence": "Azure 12 Lux",
            "Growth": "Spreading"
        },
        "abilities": [
            "Cellular Automata Simulation",
            "Dynamic Fluid & Elevation Physics"
        ],
        "lore": "Deep-spore fungal mycelium that carpets damp caverns and midnight forests. Glowing indigo toadstools release soothing bioluminescent spores.",
        "tactics": "Provides soft ambient illumination during the Night cycle. Igniting glowcaps with fire produces intoxicating confusion clouds!",
        "counters": "Reactions with opposing elemental forces.",
        "related": [
            "water",
            "lava",
            "fertilizer",
            "sponge"
        ],
        "toolId": "glowcap_mushroom",
        "actionLabel": "Paint Glowcap Mycelium"
    },
    "aether_crystal": {
        "id": "aether_crystal",
        "category": "Biomes & Tiles",
        "title": "Aether Crystal Spire",
        "subtitle": "Resonant Cosmic Conduit",
        "tags": [
            "aether_crystal",
            "biome",
            "tile",
            "terrain"
        ],
        "stats": {
            "Mana Density": "Extreme",
            "Hardness": "10 Mohs",
            "Resonance": "Overclock"
        },
        "abilities": [
            "Cellular Automata Simulation",
            "Dynamic Fluid & Elevation Physics"
        ],
        "lore": "Extraterrestrial crystal spires fallen from ancient comets. They hum with arcane energy, harmonizing with planetary magnetic fields.",
        "tactics": "Striking an Aether Crystal with lightning or lasers triggers an Arcane Resonance shockwave that overclocks nearby units and cures diseases.",
        "counters": "Reactions with opposing elemental forces.",
        "related": [
            "water",
            "lava",
            "fertilizer",
            "sponge"
        ],
        "toolId": "aether_crystal",
        "actionLabel": "Paint Aether Crystal Spire"
    },
    "volcanic_caldera": {
        "id": "volcanic_caldera",
        "category": "Biomes & Tiles",
        "title": "Volcanic Caldera",
        "subtitle": "Superheated Magma Basin",
        "tags": [
            "volcanic_caldera",
            "biome",
            "tile",
            "terrain"
        ],
        "stats": {
            "Temperature": "1200°C",
            "Crust": "Basalt / Magma",
            "Venting": "Continuous"
        },
        "abilities": [
            "Cellular Automata Simulation",
            "Dynamic Fluid & Elevation Physics"
        ],
        "lore": "A yawning volcanic crater lined with scorched basalt and bubbling molten rock. Vents sulfurous gas plumes and superheated pumice.",
        "tactics": "Spawn near enemy keeps to force evacuation or melt through stone walls.",
        "counters": "Reactions with opposing elemental forces.",
        "related": [
            "water",
            "lava",
            "fertilizer",
            "sponge"
        ],
        "toolId": "volcanic_caldera",
        "actionLabel": "Paint Volcanic Caldera"
    },
    "enchanted_grove": {
        "id": "enchanted_grove",
        "category": "Biomes & Tiles",
        "title": "Enchanted Grove",
        "subtitle": "Sacred Blossom Biome",
        "tags": [
            "enchanted_grove",
            "biome",
            "tile",
            "terrain"
        ],
        "stats": {
            "Blessing": "Active",
            "Purification": "100%",
            "Flora": "Perennial"
        },
        "abilities": [
            "Cellular Automata Simulation",
            "Dynamic Fluid & Elevation Physics"
        ],
        "lore": "Sacred woodlands blooming with luminous pink petals and celestial herbs. An aura of divine serenity permeates the grove, purging all corruption.",
        "tactics": "Paint over zombie-infested or corrupted lands to instantly purify soil and heal dying lifeforms.",
        "counters": "Reactions with opposing elemental forces.",
        "related": [
            "water",
            "lava",
            "fertilizer",
            "sponge"
        ],
        "toolId": "enchanted_grove",
        "actionLabel": "Paint Enchanted Grove"
    },
    "lava": {
        "id": "lava",
        "category": "Biomes & Tiles",
        "title": "Molten Lava",
        "subtitle": "Liquid Fire",
        "tags": [
            "lava",
            "biome",
            "tile",
            "terrain"
        ],
        "stats": {
            "Temperature": "1100°C",
            "Viscosity": "Moderate",
            "Light": "Intense"
        },
        "abilities": [
            "Cellular Automata Simulation",
            "Dynamic Fluid & Elevation Physics"
        ],
        "lore": "Superheated molten rock that incinerates organic matter on contact. Solidifies into durable stone or shiny obsidian when meeting water.",
        "tactics": "Channel lava into oceans to create new volcanic landmasses and steam geysers.",
        "counters": "Reactions with opposing elemental forces.",
        "related": [
            "water",
            "lava",
            "fertilizer",
            "sponge"
        ],
        "toolId": "lava",
        "actionLabel": "Paint Molten Lava"
    },
    "acid": {
        "id": "acid",
        "category": "Biomes & Tiles",
        "title": "Acid Sludge",
        "subtitle": "Corrosive Liquefier",
        "tags": [
            "acid",
            "biome",
            "tile",
            "terrain"
        ],
        "stats": {
            "pH Level": "0.2",
            "Corrosion": "Extreme",
            "Fumes": "Toxic"
        },
        "abilities": [
            "Cellular Automata Simulation",
            "Dynamic Fluid & Elevation Physics"
        ],
        "lore": "Bubbling, emerald chemical sludge that rapidly dissolves rock, buildings, and organic flesh into green liquid vapor.",
        "tactics": "Use sparingly to excavate stubborn bedrock or dissolve enemy fortifications.",
        "counters": "Reactions with opposing elemental forces.",
        "related": [
            "water",
            "lava",
            "fertilizer",
            "sponge"
        ],
        "toolId": "acid",
        "actionLabel": "Paint Acid Sludge"
    },
    "quicksand": {
        "id": "quicksand",
        "category": "Biomes & Tiles",
        "title": "Quicksand",
        "subtitle": "Deceptive Shifting Trap",
        "tags": [
            "quicksand",
            "biome",
            "tile",
            "terrain"
        ],
        "stats": {
            "Fluidity": "Semi-solid",
            "Suction": "High",
            "Danger": "Suffocation"
        },
        "abilities": [
            "Cellular Automata Simulation",
            "Dynamic Fluid & Elevation Physics"
        ],
        "lore": "Water-saturated granular sand that collapses when stepped upon. Traps heavy walkers and land creatures in an inescapable downward pull.",
        "tactics": "Create desert defense perimeters around valuable gold deposits.",
        "counters": "Reactions with opposing elemental forces.",
        "related": [
            "water",
            "lava",
            "fertilizer",
            "sponge"
        ],
        "toolId": "quicksand",
        "actionLabel": "Paint Quicksand"
    },
    "holy_ground": {
        "id": "holy_ground",
        "category": "Biomes & Tiles",
        "title": "Consecrated Ground",
        "subtitle": "Hallowed Radiant Earth",
        "tags": [
            "holy_ground",
            "biome",
            "tile",
            "terrain"
        ],
        "stats": {
            "Sanctity": "100%",
            "Undead Bane": "Fatal",
            "Healing": "Continuous"
        },
        "abilities": [
            "Cellular Automata Simulation",
            "Dynamic Fluid & Elevation Physics"
        ],
        "lore": "Radiant, shimmering earth blessed by divine celestial angels. Undead skeletons, zombies, and demons suffer searing damage when stepping here.",
        "tactics": "Surround your favored kingdom capital with Holy Ground to make it impervious to dark necromancy.",
        "counters": "Reactions with opposing elemental forces.",
        "related": [
            "water",
            "lava",
            "fertilizer",
            "sponge"
        ],
        "toolId": "holy_ground",
        "actionLabel": "Paint Consecrated Ground"
    },
    "blood_river": {
        "id": "blood_river",
        "category": "Biomes & Tiles",
        "title": "Blood River",
        "subtitle": "Visceral Cursed Flow",
        "tags": [
            "blood_river",
            "biome",
            "tile",
            "terrain"
        ],
        "stats": {
            "Corruption": "Maximum",
            "Vampire Buff": "+100%",
            "Sanctity": "0%"
        },
        "abilities": [
            "Cellular Automata Simulation",
            "Dynamic Fluid & Elevation Physics"
        ],
        "lore": "Dark, viscous sanguine fluid flowing from nether rifts. Empowers demons, zombies, and vampires while sickening mortal villagers.",
        "tactics": "Paint blood rivers to build fearsome necropolis realms and empower your vampire overlords.",
        "counters": "Reactions with opposing elemental forces.",
        "related": [
            "water",
            "lava",
            "fertilizer",
            "sponge"
        ],
        "toolId": "blood_river",
        "actionLabel": "Paint Blood River"
    },
    "nuke_missile": {
        "id": "nuke_missile",
        "category": "Disasters",
        "title": "Apocalypse Nuke Missile",
        "subtitle": "Thermonuclear Annihilation ICBM",
        "tags": [
            "nuke_missile",
            "disaster",
            "destruction",
            "power"
        ],
        "stats": {
            "Blast Radius": "65 Tiles",
            "Shockwave": "Extreme",
            "Fallout": "Persistent",
            "Destruction": "100%"
        },
        "abilities": [
            "Catastrophic Shockwave",
            "Terrain Deformation",
            "Particle Explosion"
        ],
        "lore": "The ultimate weapon of apocalyptic warfare. A screaming ICBM descends from the stratosphere, detonating in a blinding million-degree flash that disintegrates continents and clouds the sky in radioactive ash.",
        "tactics": "Use when you desire total planetary reset. Melts stone, vaporizes populations, and leaves irradiated craters.",
        "counters": "Cosmic Age kinetic forcefield domes and Sanctuary Beacons can absorb a portion of the shockwave.",
        "related": [
            "supernova",
            "blackhole",
            "volcano"
        ],
        "toolId": "nuke_missile",
        "actionLabel": "Trigger Apocalypse Nuke Missile"
    },
    "blackhole": {
        "id": "blackhole",
        "category": "Disasters",
        "title": "Cosmic Black Hole",
        "subtitle": "Gravitational Singularity",
        "tags": [
            "blackhole",
            "disaster",
            "destruction",
            "power"
        ],
        "stats": {
            "Event Horizon": "Growing",
            "Gravitational Pull": "Absolute",
            "Matter Conversion": "Void"
        },
        "abilities": [
            "Catastrophic Shockwave",
            "Terrain Deformation",
            "Particle Explosion"
        ],
        "lore": "A catastrophic collapse of spacetime geometry. Nothing—neither light, nor mountain, nor titan—can escape the inexorable pull of the singularity.",
        "tactics": "Summon to clean up massive clutter or erase entire oceans in seconds.",
        "counters": "Only God’s Hand or resetting the world can halt a singularity.",
        "related": [
            "supernova",
            "blackhole",
            "volcano"
        ],
        "toolId": "blackhole",
        "actionLabel": "Trigger Cosmic Black Hole"
    },
    "supernova": {
        "id": "supernova",
        "category": "Disasters",
        "title": "Supernova",
        "subtitle": "Catastrophic Stellar Detonation",
        "tags": [
            "supernova",
            "disaster",
            "destruction",
            "power"
        ],
        "stats": {
            "Detonation Yield": "85 Tiles",
            "Thermal Radiation": "Maximum",
            "Particle Emission": "Stardust"
        },
        "abilities": [
            "Catastrophic Shockwave",
            "Terrain Deformation",
            "Particle Explosion"
        ],
        "lore": "The explosive death throes of a colossal supergiant star. A shockwave of incandescent celestial plasma sweeps across the entire screen, incinerating all matter.",
        "tactics": "The most spectacular celestial event in the game. Leave a crater of pure stardust and molten slag.",
        "counters": "None.",
        "related": [
            "supernova",
            "blackhole",
            "volcano"
        ],
        "toolId": "supernova",
        "actionLabel": "Trigger Supernova"
    },
    "plague_comet": {
        "id": "plague_comet",
        "category": "Disasters",
        "title": "Plague Comet",
        "subtitle": "Necrotic Biovirus Impact",
        "tags": [
            "plague_comet",
            "disaster",
            "destruction",
            "power"
        ],
        "stats": {
            "Impact Crater": "35 Tiles",
            "Infection Spread": "Aggressive",
            "Zombie Mutation": "High"
        },
        "abilities": [
            "Catastrophic Shockwave",
            "Terrain Deformation",
            "Particle Explosion"
        ],
        "lore": "A sinister interstellar comet contaminated with alien spores. Upon impact, it raises an infectious green cloud that mutates fallen victims into rabid zombies.",
        "tactics": "Unleash to test your kingdom’s military fortitude and medical resilience.",
        "counters": "Consecrated Ground, Holy Water, and Genesis Waves cleanse the plague.",
        "related": [
            "supernova",
            "blackhole",
            "volcano"
        ],
        "toolId": "plague_comet",
        "actionLabel": "Trigger Plague Comet"
    },
    "cryo_bomb": {
        "id": "cryo_bomb",
        "category": "Disasters",
        "title": "Cryo Cascade Bomb",
        "subtitle": "Absolute Zero Ordnance",
        "tags": [
            "cryo_bomb",
            "disaster",
            "destruction",
            "power"
        ],
        "stats": {
            "Freeze Radius": "40 Tiles",
            "Temperature": "-273°C",
            "Glaciation": "Instant"
        },
        "abilities": [
            "Catastrophic Shockwave",
            "Terrain Deformation",
            "Particle Explosion"
        ],
        "lore": "Sub-zero cryo-warhead that flash-freezes oceans into solid ice sheets and glaciates lush grasslands into permanent permafrost.",
        "tactics": "Halt tidal tsunamis, freeze rampaging lava flows, or immobilize charging titans.",
        "counters": "Solar flares, volcanoes, and heat rays thaw frozen terrain.",
        "related": [
            "supernova",
            "blackhole",
            "volcano"
        ],
        "toolId": "cryo_bomb",
        "actionLabel": "Trigger Cryo Cascade Bomb"
    },
    "tectonic_rupture": {
        "id": "tectonic_rupture",
        "category": "Disasters",
        "title": "Tectonic Rupture",
        "subtitle": "Bedrock Faultline Fracture",
        "tags": [
            "tectonic_rupture",
            "disaster",
            "destruction",
            "power"
        ],
        "stats": {
            "Fault Length": "Full Screen",
            "Magma Venting": "Violent",
            "Seismic Energy": "Cataclysmic"
        },
        "abilities": [
            "Catastrophic Shockwave",
            "Terrain Deformation",
            "Particle Explosion"
        ],
        "lore": "A catastrophic rupture along tectonic plates that rips open yawning bedrock chasms and vents subterranean magma geysers.",
        "tactics": "Split continents in half and forge dramatic natural canyon barriers.",
        "counters": "Level Terrain and Shovel tools can repair cracked fissures.",
        "related": [
            "supernova",
            "blackhole",
            "volcano"
        ],
        "toolId": "tectonic_rupture",
        "actionLabel": "Trigger Tectonic Rupture"
    },
    "gravity_inversion": {
        "id": "gravity_inversion",
        "category": "Disasters",
        "title": "Gravity Inversion",
        "subtitle": "Planetary Levitation Anomaly",
        "tags": [
            "gravity_inversion",
            "disaster",
            "destruction",
            "power"
        ],
        "stats": {
            "Levitation Height": "150px",
            "Duration": "8 Seconds",
            "Impact": "Crushing"
        },
        "abilities": [
            "Catastrophic Shockwave",
            "Terrain Deformation",
            "Particle Explosion"
        ],
        "lore": "Local gravity reverses violently, launching caught creatures, warships, and debris skyward into orbit before slamming them back down with bone-shattering force.",
        "tactics": "Disrupts enemy siege formations and flings hostile invaders over defensive walls.",
        "counters": "Heavy titans with titan trait resist gravitational displacement.",
        "related": [
            "supernova",
            "blackhole",
            "volcano"
        ],
        "toolId": "gravity_inversion",
        "actionLabel": "Trigger Gravity Inversion"
    },
    "equip_sword": {
        "id": "equip_sword",
        "category": "Weapons",
        "title": "Flaming Melee Broadsword",
        "subtitle": "Infused Steel Blade",
        "tags": [
            "equip_sword",
            "weapon",
            "equipment",
            "combat"
        ],
        "stats": {
            "Attack Bonus": "+15 DMG",
            "Type": "Melee",
            "Special": "Ignites Targets"
        },
        "abilities": [
            "Special Visual Overlay",
            "Stat Multiplier",
            "Custom Projectiles"
        ],
        "lore": "Forged in dragonflame by master blacksmiths, this blade burns with continuous fire, scorching armor and kindling vegetation on contact.",
        "tactics": "Equip on kingdom footmen to double their melee combat efficiency.",
        "counters": "Water walker trait and fireproof shields extinguish its flames.",
        "related": [
            "equip_death_scythe",
            "equip_frost_bow",
            "equip_plasma_rifle"
        ],
        "toolId": "equip_sword",
        "actionLabel": "Equip Flaming Melee Broadsword"
    },
    "equip_death_scythe": {
        "id": "equip_death_scythe",
        "category": "Weapons",
        "title": "Reaper Death Scythe",
        "subtitle": "Soul-Harvesting Polearm",
        "tags": [
            "equip_death_scythe",
            "weapon",
            "equipment",
            "combat"
        ],
        "stats": {
            "Attack Bonus": "+40 DMG",
            "Type": "Melee Whirlwind",
            "Special": "Life Steal & Poison"
        },
        "abilities": [
            "Special Visual Overlay",
            "Stat Multiplier",
            "Custom Projectiles"
        ],
        "lore": "The signature weapon of the Dread Reaper. Its curved obsidian blade thirsts for life, siphoning health directly from victims back to the wielder.",
        "tactics": "Equip onto a champion warrior to transform them into an unstoppable raid boss.",
        "counters": "Ranged snipers and orbital lasers prevent the wielder from getting into scythe reach.",
        "related": [
            "equip_death_scythe",
            "equip_frost_bow",
            "equip_plasma_rifle"
        ],
        "toolId": "equip_death_scythe",
        "actionLabel": "Equip Reaper Death Scythe"
    },
    "equip_frost_bow": {
        "id": "equip_frost_bow",
        "category": "Weapons",
        "title": "Glacial Frost Bow",
        "subtitle": "Enchanted Elven Ice Bow",
        "tags": [
            "equip_frost_bow",
            "weapon",
            "equipment",
            "combat"
        ],
        "stats": {
            "Attack Bonus": "+30 DMG",
            "Type": "Triple Piercing Ranged",
            "Special": "Freezes Targets"
        },
        "abilities": [
            "Special Visual Overlay",
            "Stat Multiplier",
            "Custom Projectiles"
        ],
        "lore": "Carved from heartwood of ancient tundra pines and strung with frost spider silk. Fires three freezing arrows that chill targets to ice.",
        "tactics": "Equip on elven archers to freeze charging beasts and slow down hostile armies.",
        "counters": "Fireproof monsters shatter ice crystals instantly.",
        "related": [
            "equip_death_scythe",
            "equip_frost_bow",
            "equip_plasma_rifle"
        ],
        "toolId": "equip_frost_bow",
        "actionLabel": "Equip Glacial Frost Bow"
    },
    "equip_plasma_rifle": {
        "id": "equip_plasma_rifle",
        "category": "Weapons",
        "title": "High-Tech Plasma Rifle",
        "subtitle": "Cosmic Energy Weapon",
        "tags": [
            "equip_plasma_rifle",
            "weapon",
            "equipment",
            "combat"
        ],
        "stats": {
            "Attack Bonus": "+30 DMG",
            "Type": "Rapid Plasma Beam",
            "Special": "Pierces Armor"
        },
        "abilities": [
            "Special Visual Overlay",
            "Stat Multiplier",
            "Custom Projectiles"
        ],
        "lore": "Standard issue infantry arm of Cosmic Age civilizations. Fires superheated ionized plasma bolts with pinpoint accuracy.",
        "tactics": "Arm your favorite hero with this rifle to easily solo dragons and golems.",
        "counters": "Kinetic energy shields absorb plasma bolts.",
        "related": [
            "equip_death_scythe",
            "equip_frost_bow",
            "equip_plasma_rifle"
        ],
        "toolId": "equip_plasma_rifle",
        "actionLabel": "Equip High-Tech Plasma Rifle"
    },
    "hand": {
        "id": "hand",
        "category": "God Powers",
        "title": "God's Hand",
        "subtitle": "Divine Telekinetic Grip",
        "tags": [
            "hand",
            "power",
            "miracle",
            "god"
        ],
        "stats": {
            "Grip Force": "Infinite",
            "Range": "Global",
            "Momentum": "Physics-Driven"
        },
        "abilities": [
            "Divine Intervention",
            "Instant Activation"
        ],
        "lore": "The supreme hand of the almighty creator. Pick up any creature, vehicle, titan, or monster, lift them above the clouds, and fling them across oceans with tremendous velocity.",
        "tactics": "Use to rescue a beloved monarch from a burning castle or toss an invading orc army into a volcanic caldera.",
        "counters": "Transcends mortal resistance.",
        "related": [
            "hand",
            "genesis_wave",
            "blessing"
        ],
        "toolId": "hand",
        "actionLabel": "Activate God's Hand"
    },
    "first_person": {
        "id": "first_person",
        "category": "God Powers",
        "title": "First-Person Mode (FPV)",
        "subtitle": "Direct Creature Eye Immersion",
        "tags": [
            "first_person",
            "power",
            "miracle",
            "god"
        ],
        "stats": {
            "Perspective": "3D Eye-Level",
            "Controls": "WASD + Mouse Look",
            "Hotkey": "F Key"
        },
        "abilities": [
            "Divine Intervention",
            "Instant Activation"
        ],
        "lore": "Descend from celestial godhood directly into the eyes of any creature in the world. Experience the realm from the ground level in 360-degree 3D perspective.",
        "tactics": "Press F to toggle FPV anytime. Left-click to swing equipped weapons or shoot projectiles. Right-click or Q to unleash special attacks.",
        "counters": "Transcends mortal resistance.",
        "related": [
            "hand",
            "genesis_wave",
            "blessing"
        ],
        "toolId": "first_person",
        "actionLabel": "Activate First-Person Mode (FPV)"
    },
    "chrono_freeze": {
        "id": "chrono_freeze",
        "category": "God Powers",
        "title": "Chrono Freeze",
        "subtitle": "Universal Spacetime Stasis",
        "tags": [
            "chrono_freeze",
            "power",
            "miracle",
            "god"
        ],
        "stats": {
            "Duration": "5 Seconds",
            "Scope": "Global",
            "Cooldown": "None"
        },
        "abilities": [
            "Divine Intervention",
            "Instant Activation"
        ],
        "lore": "Halts the flow of universal time completely. Water freezes mid-flow, falling meteorites pause in the sky, and creatures stand suspended like stone statues.",
        "tactics": "Freeze time to inspect chaotic battles, aim delicate terraforming brushes, or snap cinematic screenshots.",
        "counters": "Transcends mortal resistance.",
        "related": [
            "hand",
            "genesis_wave",
            "blessing"
        ],
        "toolId": "chrono_freeze",
        "actionLabel": "Activate Chrono Freeze"
    },
    "genesis_wave": {
        "id": "genesis_wave",
        "category": "God Powers",
        "title": "Genesis Wave",
        "subtitle": "Universal Planetary Revival",
        "tags": [
            "genesis_wave",
            "power",
            "miracle",
            "god"
        ],
        "stats": {
            "Scope": "Entire Screen",
            "Purification": "100%",
            "Flora Growth": "Instant"
        },
        "abilities": [
            "Divine Intervention",
            "Instant Activation"
        ],
        "lore": "A radiant wave of celestial vitality sweeps across the entire planet. Extinguishes wildfires, drains acid floods, purifies radioactive fallout, and blankets the land in blooming green pastures.",
        "tactics": "The ultimate restorative power after an apocalypse disaster.",
        "counters": "Transcends mortal resistance.",
        "related": [
            "hand",
            "genesis_wave",
            "blessing"
        ],
        "toolId": "genesis_wave",
        "actionLabel": "Activate Genesis Wave"
    },
    "duck_stampede": {
        "id": "duck_stampede",
        "category": "God Powers",
        "title": "Duck Stampede",
        "subtitle": "Quacking Explosive Chaos",
        "tags": [
            "duck_stampede",
            "power",
            "miracle",
            "god"
        ],
        "stats": {
            "Duck Count": "25 Quackers",
            "Speed": "Hyper",
            "Ordnance": "Ticking Eggs"
        },
        "abilities": [
            "Divine Intervention",
            "Instant Activation"
        ],
        "lore": "Summons a stampede of 25 hyper-speed explosive ducks that swarm across the world, laying ticking bomb eggs and quacking with relentless fervor.",
        "tactics": "Unleash to sow unpredictable mayhem and shatter rigid battlefield stalemates.",
        "counters": "Transcends mortal resistance.",
        "related": [
            "hand",
            "genesis_wave",
            "blessing"
        ],
        "toolId": "duck_stampede",
        "actionLabel": "Activate Duck Stampede"
    },
    "secret_galaxy_sacrifice": {
        "id": "secret_galaxy_sacrifice",
        "category": "Secrets & Lore",
        "title": "The Great Galaxy Sacrifice",
        "subtitle": "Cosmic Vault Secret Ritual",
        "tags": [
            "secret",
            "vault",
            "sacrifice",
            "galaxy_guardian",
            "nuke"
        ],
        "stats": {
            "Rarity": "Mythic Secret",
            "Requirement": "Galaxy Guardian + Nuke",
            "Reward": "Unlocks Cosmic Vault"
        },
        "abilities": [
            "Spawns the divine Galaxy Blade",
            "Unlocks Supernova Implosion tool",
            "Spawns the Void Titan"
        ],
        "lore": "Ancient scriptures whisper of a forbidden cosmic ritual: Spawn the celestial Galaxy Guardian, place it in the center of the world, and detonate a thermonuclear Apocalypse Nuke directly upon it. The catastrophic energy overload rips open the Cosmic Vault, unlocking supreme hidden powers.",
        "tactics": "Follow the ritual steps in order. A golden divine banner will proclaim the sacrifice accepted, permanently unlocking the secret toolset in the Menu palette.",
        "counters": "Be prepared for immense collateral terrain damage from the nuclear detonation.",
        "related": [
            "galaxy_guardian",
            "nuke_missile",
            "btn_secrets"
        ],
        "toolId": "btn_secrets",
        "actionLabel": "Open Cosmic Vault"
    },
    "guide_controls": {
        "id": "guide_controls",
        "category": "Guides & Manuals",
        "title": "Controls & Keyboard Shortcuts",
        "subtitle": "Master God Keybindings",
        "tags": [
            "controls",
            "guide",
            "hotkeys",
            "shortcuts",
            "manual"
        ],
        "stats": {
            "Platform": "Desktop & Mobile Touch",
            "Input Mode": "Keyboard, Mouse, Touch D-Pad"
        },
        "abilities": [
            "WASD / Arrows: Pan celestial camera across the world.",
            "Mouse Wheel / Pinch: Zoom camera smoothly from planetary to microscopic view.",
            "Spacebar: Pause simulation / primary attack when possessing a creature.",
            "V Key: Toggle seamlessly between native 2D pixel renderer and WebGL 3D perspective mode.",
            "F Key: Enter First-Person View (FPV) inside possessed creature eyes.",
            "K / F1 Key: Open the GalaxyPedia encyclopedia.",
            "Ctrl+S: Instant Quick Save to Slot 1.",
            "[ and ] Keys: Increase or decrease brush size.",
            "H Key: Toggle Cinematic HUD mode for clean screenshots."
        ],
        "lore": "GalaxyBox features a responsive hybrid input system tailored for both high-precision desktop god play and touch-friendly mobile navigation with on-screen D-pads and action buttons.",
        "tactics": "Mastering the hotkeys allows you to react instantly to unfolding catastrophes and guide civilizations to greatness.",
        "counters": "Custom controls can be tailored in the Settings modal.",
        "related": [
            "guide_first_person",
            "guide_possession"
        ],
        "toolId": "btn_settings",
        "actionLabel": "Open Settings"
    },
    "nuke": {
        "id": "nuke",
        "category": "Destruction",
        "title": "Atomic Nuke",
        "subtitle": "Destruction Encyclopedia Entry",
        "tags": [
            "nuke",
            "destruction",
            "tool"
        ],
        "stats": {
            "Category": "Destruction",
            "Tool ID": "nuke"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Colossal 65-tile radioactive blast and mega mushroom cloud.",
        "tactics": "Select from the Destruction palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "nuke",
        "actionLabel": "Use Atomic Nuke"
    },
    "duck_barrage": {
        "id": "duck_barrage",
        "category": "Destruction",
        "title": "Duck Barrage",
        "subtitle": "Destruction Encyclopedia Entry",
        "tags": [
            "duck_barrage",
            "destruction",
            "tool"
        ],
        "stats": {
            "Category": "Destruction",
            "Tool ID": "duck_barrage"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Orbital air-drop raining ticking explosive ducks from the heavens!",
        "tactics": "Select from the Destruction palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "duck_barrage",
        "actionLabel": "Use Duck Barrage"
    },
    "plasma_barrage": {
        "id": "plasma_barrage",
        "category": "Destruction",
        "title": "Plasma Barrage",
        "subtitle": "Destruction Encyclopedia Entry",
        "tags": [
            "plasma_barrage",
            "destruction",
            "tool"
        ],
        "stats": {
            "Category": "Destruction",
            "Tool ID": "plasma_barrage"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "High-velocity azure plasma artillery bombardment cratering terrain.",
        "tactics": "Select from the Destruction palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "plasma_barrage",
        "actionLabel": "Use Plasma Barrage"
    },
    "gamma_ray": {
        "id": "gamma_ray",
        "category": "Destruction",
        "title": "Gamma Ray",
        "subtitle": "Destruction Encyclopedia Entry",
        "tags": [
            "gamma_ray",
            "destruction",
            "tool"
        ],
        "stats": {
            "Category": "Destruction",
            "Tool ID": "gamma_ray"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Piercing cosmic radiation beam melting and disintegrating all matter.",
        "tactics": "Select from the Destruction palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "gamma_ray",
        "actionLabel": "Use Gamma Ray"
    },
    "napalm_strike": {
        "id": "napalm_strike",
        "category": "Destruction",
        "title": "Napalm Airstrike",
        "subtitle": "Destruction Encyclopedia Entry",
        "tags": [
            "napalm_strike",
            "destruction",
            "tool"
        ],
        "stats": {
            "Category": "Destruction",
            "Tool ID": "napalm_strike"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Air carpet-bombing releasing blazing sea of continuous fire.",
        "tactics": "Select from the Destruction palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "napalm_strike",
        "actionLabel": "Use Napalm Airstrike"
    },
    "kinetic_strike": {
        "id": "kinetic_strike",
        "category": "Destruction",
        "title": "Kinetic Rod Strike",
        "subtitle": "Destruction Encyclopedia Entry",
        "tags": [
            "kinetic_strike",
            "destruction",
            "tool"
        ],
        "stats": {
            "Category": "Destruction",
            "Tool ID": "kinetic_strike"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Dense tungsten telephone pole dropped from orbit piercing bedrock.",
        "tactics": "Select from the Destruction palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "kinetic_strike",
        "actionLabel": "Use Kinetic Rod Strike"
    },
    "void_implosion": {
        "id": "void_implosion",
        "category": "Destruction",
        "title": "Void Implosion",
        "subtitle": "Destruction Encyclopedia Entry",
        "tags": [
            "void_implosion",
            "destruction",
            "tool"
        ],
        "stats": {
            "Category": "Destruction",
            "Tool ID": "void_implosion"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Inverted cosmic shockwave pulling surrounding land into singularity.",
        "tactics": "Select from the Destruction palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "void_implosion",
        "actionLabel": "Use Void Implosion"
    },
    "antimatter_missile": {
        "id": "antimatter_missile",
        "category": "Destruction",
        "title": "Antimatter ICBM",
        "subtitle": "Destruction Encyclopedia Entry",
        "tags": [
            "antimatter_missile",
            "destruction",
            "tool"
        ],
        "stats": {
            "Category": "Destruction",
            "Tool ID": "antimatter_missile"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Cosmic warhead triggering a devastating void annihilation shockwave.",
        "tactics": "Select from the Destruction palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "antimatter_missile",
        "actionLabel": "Use Antimatter ICBM"
    },
    "orbital_strike": {
        "id": "orbital_strike",
        "category": "Destruction",
        "title": "Hammer of Dawn",
        "subtitle": "Destruction Encyclopedia Entry",
        "tags": [
            "orbital_strike",
            "destruction",
            "tool"
        ],
        "stats": {
            "Category": "Destruction",
            "Tool ID": "orbital_strike"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Devastating satellite beam vaporizing terrain with searing plasma.",
        "tactics": "Select from the Destruction palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "orbital_strike",
        "actionLabel": "Use Hammer of Dawn"
    },
    "emp_blast": {
        "id": "emp_blast",
        "category": "Destruction",
        "title": "High-Altitude EMP",
        "subtitle": "Destruction Encyclopedia Entry",
        "tags": [
            "emp_blast",
            "destruction",
            "tool"
        ],
        "stats": {
            "Category": "Destruction",
            "Tool ID": "emp_blast"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Electromagnetic pulse short-circuiting mechs and disintegrating projectiles.",
        "tactics": "Select from the Destruction palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "emp_blast",
        "actionLabel": "Use High-Altitude EMP"
    },
    "hellfire_missile": {
        "id": "hellfire_missile",
        "category": "Destruction",
        "title": "Hellfire Warhead",
        "subtitle": "Destruction Encyclopedia Entry",
        "tags": [
            "hellfire_missile",
            "destruction",
            "tool"
        ],
        "stats": {
            "Category": "Destruction",
            "Tool ID": "hellfire_missile"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Incendiary tactical missile unleashing waves of raging wildfire.",
        "tactics": "Select from the Destruction palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "hellfire_missile",
        "actionLabel": "Use Hellfire Warhead"
    },
    "tsar_bomba": {
        "id": "tsar_bomba",
        "category": "Destruction",
        "title": "Tsar Bomba 100MT",
        "subtitle": "Destruction Encyclopedia Entry",
        "tags": [
            "tsar_bomba",
            "destruction",
            "tool"
        ],
        "stats": {
            "Category": "Destruction",
            "Tool ID": "tsar_bomba"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Megaton thermonuclear device crushing half the globe in nuclear fallout.",
        "tactics": "Select from the Destruction palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "tsar_bomba",
        "actionLabel": "Use Tsar Bomba 100MT"
    },
    "toxic_cloud": {
        "id": "toxic_cloud",
        "category": "Destruction",
        "title": "Toxic Gas Cloud",
        "subtitle": "Destruction Encyclopedia Entry",
        "tags": [
            "toxic_cloud",
            "destruction",
            "tool"
        ],
        "stats": {
            "Category": "Destruction",
            "Tool ID": "toxic_cloud"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Spreads expanding noxious choking green gas clouds dissolving biologicals.",
        "tactics": "Select from the Destruction palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "toxic_cloud",
        "actionLabel": "Use Toxic Gas Cloud"
    },
    "acid_missile": {
        "id": "acid_missile",
        "category": "Destruction",
        "title": "Corrosive Acid Warhead",
        "subtitle": "Destruction Encyclopedia Entry",
        "tags": [
            "acid_missile",
            "destruction",
            "tool"
        ],
        "stats": {
            "Category": "Destruction",
            "Tool ID": "acid_missile"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Splashes massive pools of concentrated bubbling acid melting mountains.",
        "tactics": "Select from the Destruction palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "acid_missile",
        "actionLabel": "Use Corrosive Acid Warhead"
    },
    "ion_storm_barrage": {
        "id": "ion_storm_barrage",
        "category": "Destruction",
        "title": "Ion Storm Barrage",
        "subtitle": "Destruction Encyclopedia Entry",
        "tags": [
            "ion_storm_barrage",
            "destruction",
            "tool"
        ],
        "stats": {
            "Category": "Destruction",
            "Tool ID": "ion_storm_barrage"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Rains crackling high-energy ion pulses disintegrating terrain and units.",
        "tactics": "Select from the Destruction palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "ion_storm_barrage",
        "actionLabel": "Use Ion Storm Barrage"
    },
    "chronos_rift": {
        "id": "chronos_rift",
        "category": "Destruction",
        "title": "Chronos Spacetime Rift",
        "subtitle": "Destruction Encyclopedia Entry",
        "tags": [
            "chronos_rift",
            "destruction",
            "tool"
        ],
        "stats": {
            "Category": "Destruction",
            "Tool ID": "chronos_rift"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Opens a spacetime rift accelerating decay while freezing caught creatures.",
        "tactics": "Select from the Destruction palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "chronos_rift",
        "actionLabel": "Use Chronos Spacetime Rift"
    },
    "ion_cannon": {
        "id": "ion_cannon",
        "category": "Destruction",
        "title": "Orbital Ion Cannon",
        "subtitle": "Destruction Encyclopedia Entry",
        "tags": [
            "ion_cannon",
            "destruction",
            "tool"
        ],
        "stats": {
            "Category": "Destruction",
            "Tool ID": "ion_cannon"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Targeting grid summoning an orbital death beam from space.",
        "tactics": "Select from the Destruction palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "ion_cannon",
        "actionLabel": "Use Orbital Ion Cannon"
    },
    "rift": {
        "id": "rift",
        "category": "Destruction",
        "title": "Dimension Rift",
        "subtitle": "Destruction Encyclopedia Entry",
        "tags": [
            "rift",
            "destruction",
            "tool"
        ],
        "stats": {
            "Category": "Destruction",
            "Tool ID": "rift"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Cosmic tear pulling land in and spawning nether demons.",
        "tactics": "Select from the Destruction palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "rift",
        "actionLabel": "Use Dimension Rift"
    },
    "antimatter": {
        "id": "antimatter",
        "category": "Destruction",
        "title": "Antimatter Bomb",
        "subtitle": "Destruction Encyclopedia Entry",
        "tags": [
            "antimatter",
            "destruction",
            "tool"
        ],
        "stats": {
            "Category": "Destruction",
            "Tool ID": "antimatter"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Cosmic implosion that vaporizes all matter into void.",
        "tactics": "Select from the Destruction palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "antimatter",
        "actionLabel": "Use Antimatter Bomb"
    },
    "laser": {
        "id": "laser",
        "category": "Destruction",
        "title": "Orbital Laser",
        "subtitle": "Destruction Encyclopedia Entry",
        "tags": [
            "laser",
            "destruction",
            "tool"
        ],
        "stats": {
            "Category": "Destruction",
            "Tool ID": "laser"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Continuous divine death ray beam.",
        "tactics": "Select from the Destruction palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "laser",
        "actionLabel": "Use Orbital Laser"
    },
    "meteor": {
        "id": "meteor",
        "category": "Destruction",
        "title": "Meteor Strike",
        "subtitle": "Destruction Encyclopedia Entry",
        "tags": [
            "meteor",
            "destruction",
            "tool"
        ],
        "stats": {
            "Category": "Destruction",
            "Tool ID": "meteor"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Fiery space rock hurtling down with crater.",
        "tactics": "Select from the Destruction palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "meteor",
        "actionLabel": "Use Meteor Strike"
    },
    "cluster": {
        "id": "cluster",
        "category": "Destruction",
        "title": "Cluster Missiles",
        "subtitle": "Destruction Encyclopedia Entry",
        "tags": [
            "cluster",
            "destruction",
            "tool"
        ],
        "stats": {
            "Category": "Destruction",
            "Tool ID": "cluster"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Multiple cascading micro-explosions.",
        "tactics": "Select from the Destruction palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "cluster",
        "actionLabel": "Use Cluster Missiles"
    },
    "disintegrator": {
        "id": "disintegrator",
        "category": "Destruction",
        "title": "Tsar Finger",
        "subtitle": "Destruction Encyclopedia Entry",
        "tags": [
            "disintegrator",
            "destruction",
            "tool"
        ],
        "stats": {
            "Category": "Destruction",
            "Tool ID": "disintegrator"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Instant pixel disintegration on touch.",
        "tactics": "Select from the Destruction palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "disintegrator",
        "actionLabel": "Use Tsar Finger"
    },
    "tnt": {
        "id": "tnt",
        "category": "Destruction",
        "title": "TNT Explosive",
        "subtitle": "Destruction Encyclopedia Entry",
        "tags": [
            "tnt",
            "destruction",
            "tool"
        ],
        "stats": {
            "Category": "Destruction",
            "Tool ID": "tnt"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Heavy explosive block causing fiery shockwave.",
        "tactics": "Select from the Destruction palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "tnt",
        "actionLabel": "Use TNT Explosive"
    },
    "supernova_implosion": {
        "id": "supernova_implosion",
        "category": "Destruction",
        "title": "Supernova Collapse",
        "subtitle": "Destruction Encyclopedia Entry",
        "tags": [
            "supernova_implosion",
            "destruction",
            "tool"
        ],
        "stats": {
            "Category": "Destruction",
            "Tool ID": "supernova_implosion"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "SECRET: Catastrophic stellar collapse obliterating the regional cosmos.",
        "tactics": "Select from the Destruction palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "supernova_implosion",
        "actionLabel": "Use Supernova Collapse"
    },
    "corrosion": {
        "id": "corrosion",
        "category": "Destruction",
        "title": "Corrosion Bomb",
        "subtitle": "Destruction Encyclopedia Entry",
        "tags": [
            "corrosion",
            "destruction",
            "tool"
        ],
        "stats": {
            "Category": "Destruction",
            "Tool ID": "corrosion"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Shower of bubbling acid melting everything.",
        "tactics": "Select from the Destruction palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "corrosion",
        "actionLabel": "Use Corrosion Bomb"
    },
    "orbital_death_ray": {
        "id": "orbital_death_ray",
        "category": "Destruction",
        "title": "Solaris Death Ray",
        "subtitle": "Destruction Encyclopedia Entry",
        "tags": [
            "orbital_death_ray",
            "destruction",
            "tool"
        ],
        "stats": {
            "Category": "Destruction",
            "Tool ID": "orbital_death_ray"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Devastating high-intensity continuous orbital death ray disintegrating all matter and leaving molten slag.",
        "tactics": "Select from the Destruction palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "orbital_death_ray",
        "actionLabel": "Use Solaris Death Ray"
    },
    "nanite_swarm": {
        "id": "nanite_swarm",
        "category": "Destruction",
        "title": "Nanite Swarm",
        "subtitle": "Destruction Encyclopedia Entry",
        "tags": [
            "nanite_swarm",
            "destruction",
            "tool"
        ],
        "stats": {
            "Category": "Destruction",
            "Tool ID": "nanite_swarm"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Self-replicating microscopic gray goo nanobots devouring all minerals, buildings, and organics.",
        "tactics": "Select from the Destruction palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "nanite_swarm",
        "actionLabel": "Use Nanite Swarm"
    },
    "volcano": {
        "id": "volcano",
        "category": "Nature",
        "title": "Volcano",
        "subtitle": "Nature Encyclopedia Entry",
        "tags": [
            "volcano",
            "nature",
            "tool"
        ],
        "stats": {
            "Category": "Nature",
            "Tool ID": "volcano"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Spews endless ash, smoke, and molten lava.",
        "tactics": "Select from the Nature palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "volcano",
        "actionLabel": "Use Volcano"
    },
    "supervolcano": {
        "id": "supervolcano",
        "category": "Nature",
        "title": "Supervolcano",
        "subtitle": "Nature Encyclopedia Entry",
        "tags": [
            "supervolcano",
            "nature",
            "tool"
        ],
        "stats": {
            "Category": "Nature",
            "Tool ID": "supervolcano"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Massive caldera rupture generating continents of magma and ash.",
        "tactics": "Select from the Nature palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "supervolcano",
        "actionLabel": "Use Supervolcano"
    },
    "solar_flare": {
        "id": "solar_flare",
        "category": "Nature",
        "title": "Solar Flare",
        "subtitle": "Nature Encyclopedia Entry",
        "tags": [
            "solar_flare",
            "nature",
            "tool"
        ],
        "stats": {
            "Category": "Nature",
            "Tool ID": "solar_flare"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Blinding solar storm pulse igniting surface vegetation and supercharging creatures.",
        "tactics": "Select from the Nature palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "solar_flare",
        "actionLabel": "Use Solar Flare"
    },
    "frost_tempest": {
        "id": "frost_tempest",
        "category": "Nature",
        "title": "Frost Tempest",
        "subtitle": "Nature Encyclopedia Entry",
        "tags": [
            "frost_tempest",
            "nature",
            "tool"
        ],
        "stats": {
            "Category": "Nature",
            "Tool ID": "frost_tempest"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Arctic blizzard gale rapidly glaciating waters into ice sheets.",
        "tactics": "Select from the Nature palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "frost_tempest",
        "actionLabel": "Use Frost Tempest"
    },
    "crystal_spire": {
        "id": "crystal_spire",
        "category": "Nature",
        "title": "Crystal Spire",
        "subtitle": "Nature Encyclopedia Entry",
        "tags": [
            "crystal_spire",
            "nature",
            "tool"
        ],
        "stats": {
            "Category": "Nature",
            "Tool ID": "crystal_spire"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Spawns towering resonant geological crystal pillars from the ground.",
        "tactics": "Select from the Nature palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "crystal_spire",
        "actionLabel": "Use Crystal Spire"
    },
    "aurora_borealis": {
        "id": "aurora_borealis",
        "category": "Nature",
        "title": "Aurora Borealis",
        "subtitle": "Nature Encyclopedia Entry",
        "tags": [
            "aurora_borealis",
            "nature",
            "tool"
        ],
        "stats": {
            "Category": "Nature",
            "Tool ID": "aurora_borealis"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Magnificent celestial light curtain calming hostilities and healing all life.",
        "tactics": "Select from the Nature palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "aurora_borealis",
        "actionLabel": "Use Aurora Borealis"
    },
    "tornado": {
        "id": "tornado",
        "category": "Nature",
        "title": "Tornado",
        "subtitle": "Nature Encyclopedia Entry",
        "tags": [
            "tornado",
            "nature",
            "tool"
        ],
        "stats": {
            "Category": "Nature",
            "Tool ID": "tornado"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Wandering twister flinging trees and creatures.",
        "tactics": "Select from the Nature palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "tornado",
        "actionLabel": "Use Tornado"
    },
    "fire_tornado": {
        "id": "fire_tornado",
        "category": "Nature",
        "title": "Fire Tornado",
        "subtitle": "Nature Encyclopedia Entry",
        "tags": [
            "fire_tornado",
            "nature",
            "tool"
        ],
        "stats": {
            "Category": "Nature",
            "Tool ID": "fire_tornado"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Vortex of spinning fire incinerating everything in its path.",
        "tactics": "Select from the Nature palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "fire_tornado",
        "actionLabel": "Use Fire Tornado"
    },
    "meteor_shower": {
        "id": "meteor_shower",
        "category": "Nature",
        "title": "Meteor Shower",
        "subtitle": "Nature Encyclopedia Entry",
        "tags": [
            "meteor_shower",
            "nature",
            "tool"
        ],
        "stats": {
            "Category": "Nature",
            "Tool ID": "meteor_shower"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Torrential barrage of celestial meteors pounding the realm.",
        "tactics": "Select from the Nature palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "meteor_shower",
        "actionLabel": "Use Meteor Shower"
    },
    "meteor_rain": {
        "id": "meteor_rain",
        "category": "Nature",
        "title": "Meteor Rain",
        "subtitle": "Nature Encyclopedia Entry",
        "tags": [
            "meteor_rain",
            "nature",
            "tool"
        ],
        "stats": {
            "Category": "Nature",
            "Tool ID": "meteor_rain"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Continuous celestial meteor shower pelting the ground with flaming boulders.",
        "tactics": "Select from the Nature palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "meteor_rain",
        "actionLabel": "Use Meteor Rain"
    },
    "lightning_storm": {
        "id": "lightning_storm",
        "category": "Nature",
        "title": "Supercell Storm",
        "subtitle": "Nature Encyclopedia Entry",
        "tags": [
            "lightning_storm",
            "nature",
            "tool"
        ],
        "stats": {
            "Category": "Nature",
            "Tool ID": "lightning_storm"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Violent thunderstorm firing cascading lightning bolts across the skies.",
        "tactics": "Select from the Nature palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "lightning_storm",
        "actionLabel": "Use Supercell Storm"
    },
    "blizzard_vortex": {
        "id": "blizzard_vortex",
        "category": "Nature",
        "title": "Blizzard Vortex",
        "subtitle": "Nature Encyclopedia Entry",
        "tags": [
            "blizzard_vortex",
            "nature",
            "tool"
        ],
        "stats": {
            "Category": "Nature",
            "Tool ID": "blizzard_vortex"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Howling arctic blizzard hurricane instantly glaciating oceans and land.",
        "tactics": "Select from the Nature palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "blizzard_vortex",
        "actionLabel": "Use Blizzard Vortex"
    },
    "sand_typhoon": {
        "id": "sand_typhoon",
        "category": "Nature",
        "title": "Sand Typhoon",
        "subtitle": "Nature Encyclopedia Entry",
        "tags": [
            "sand_typhoon",
            "nature",
            "tool"
        ],
        "stats": {
            "Category": "Nature",
            "Tool ID": "sand_typhoon"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Vicious desert cyclone tearing up terrain into dunes and dust.",
        "tactics": "Select from the Nature palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "sand_typhoon",
        "actionLabel": "Use Sand Typhoon"
    },
    "magma_surge": {
        "id": "magma_surge",
        "category": "Nature",
        "title": "Magma Surge",
        "subtitle": "Nature Encyclopedia Entry",
        "tags": [
            "magma_surge",
            "nature",
            "tool"
        ],
        "stats": {
            "Category": "Nature",
            "Tool ID": "magma_surge"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Underground tectonic rupture venting molten lava geysers.",
        "tactics": "Select from the Nature palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "magma_surge",
        "actionLabel": "Use Magma Surge"
    },
    "spore_bloom": {
        "id": "spore_bloom",
        "category": "Nature",
        "title": "Spore Bloom",
        "subtitle": "Nature Encyclopedia Entry",
        "tags": [
            "spore_bloom",
            "nature",
            "tool"
        ],
        "stats": {
            "Category": "Nature",
            "Tool ID": "spore_bloom"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Releases infectious fungal spores mutating land into mushroom mycelium.",
        "tactics": "Select from the Nature palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "spore_bloom",
        "actionLabel": "Use Spore Bloom"
    },
    "whirlpool": {
        "id": "whirlpool",
        "category": "Nature",
        "title": "Oceanic Maelstrom",
        "subtitle": "Nature Encyclopedia Entry",
        "tags": [
            "whirlpool",
            "nature",
            "tool"
        ],
        "stats": {
            "Category": "Nature",
            "Tool ID": "whirlpool"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Swirling oceanic vortex dragging ships, creatures, and debris into the depths.",
        "tactics": "Select from the Nature palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "whirlpool",
        "actionLabel": "Use Oceanic Maelstrom"
    },
    "geyser": {
        "id": "geyser",
        "category": "Nature",
        "title": "Thermal Geyser",
        "subtitle": "Nature Encyclopedia Entry",
        "tags": [
            "geyser",
            "nature",
            "tool"
        ],
        "stats": {
            "Category": "Nature",
            "Tool ID": "geyser"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "High-pressure thermal water eruption bursting from ground.",
        "tactics": "Select from the Nature palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "geyser",
        "actionLabel": "Use Thermal Geyser"
    },
    "earthquake": {
        "id": "earthquake",
        "category": "Nature",
        "title": "Earthquake",
        "subtitle": "Nature Encyclopedia Entry",
        "tags": [
            "earthquake",
            "nature",
            "tool"
        ],
        "stats": {
            "Category": "Nature",
            "Tool ID": "earthquake"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Tears jagged magma chasms through the terrain.",
        "tactics": "Select from the Nature palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "earthquake",
        "actionLabel": "Use Earthquake"
    },
    "lightning": {
        "id": "lightning",
        "category": "Nature",
        "title": "Lightning Strike",
        "subtitle": "Nature Encyclopedia Entry",
        "tags": [
            "lightning",
            "nature",
            "tool"
        ],
        "stats": {
            "Category": "Nature",
            "Tool ID": "lightning"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Electric strike that burns or empowers.",
        "tactics": "Select from the Nature palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "lightning",
        "actionLabel": "Use Lightning Strike"
    },
    "tsunami": {
        "id": "tsunami",
        "category": "Nature",
        "title": "Tsunami Deluge",
        "subtitle": "Nature Encyclopedia Entry",
        "tags": [
            "tsunami",
            "nature",
            "tool"
        ],
        "stats": {
            "Category": "Nature",
            "Tool ID": "tsunami"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Giant surge of ocean water flooding land.",
        "tactics": "Select from the Nature palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "tsunami",
        "actionLabel": "Use Tsunami Deluge"
    },
    "rain": {
        "id": "rain",
        "category": "Nature",
        "title": "Reviving Rain",
        "subtitle": "Nature Encyclopedia Entry",
        "tags": [
            "rain",
            "nature",
            "tool"
        ],
        "stats": {
            "Category": "Nature",
            "Tool ID": "rain"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Extinguishes fires, replenishes plants.",
        "tactics": "Select from the Nature palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "rain",
        "actionLabel": "Use Reviving Rain"
    },
    "snowfall": {
        "id": "snowfall",
        "category": "Nature",
        "title": "Blizzard Storm",
        "subtitle": "Nature Encyclopedia Entry",
        "tags": [
            "snowfall",
            "nature",
            "tool"
        ],
        "stats": {
            "Category": "Nature",
            "Tool ID": "snowfall"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Freezes lakes and coats the world in snow.",
        "tactics": "Select from the Nature palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "snowfall",
        "actionLabel": "Use Blizzard Storm"
    },
    "acidrain": {
        "id": "acidrain",
        "category": "Nature",
        "title": "Acid Storm",
        "subtitle": "Nature Encyclopedia Entry",
        "tags": [
            "acidrain",
            "nature",
            "tool"
        ],
        "stats": {
            "Category": "Nature",
            "Tool ID": "acidrain"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Toxic green rain dissolving vegetation.",
        "tactics": "Select from the Nature palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "acidrain",
        "actionLabel": "Use Acid Storm"
    },
    "sandstorm": {
        "id": "sandstorm",
        "category": "Nature",
        "title": "Sandstorm",
        "subtitle": "Nature Encyclopedia Entry",
        "tags": [
            "sandstorm",
            "nature",
            "tool"
        ],
        "stats": {
            "Category": "Nature",
            "Tool ID": "sandstorm"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Fierce desert gale eroding terrain and vegetation into sand.",
        "tactics": "Select from the Nature palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "sandstorm",
        "actionLabel": "Use Sandstorm"
    },
    "clone_rain": {
        "id": "clone_rain",
        "category": "Nature",
        "title": "Clone Rain",
        "subtitle": "Nature Encyclopedia Entry",
        "tags": [
            "clone_rain",
            "nature",
            "tool"
        ],
        "stats": {
            "Category": "Nature",
            "Tool ID": "clone_rain"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Arcane celestial tempest raining cloned creatures from heaven!",
        "tactics": "Select from the Nature palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "clone_rain",
        "actionLabel": "Use Clone Rain"
    },
    "wildfire": {
        "id": "wildfire",
        "category": "Nature",
        "title": "Wildfire",
        "subtitle": "Nature Encyclopedia Entry",
        "tags": [
            "wildfire",
            "nature",
            "tool"
        ],
        "stats": {
            "Category": "Nature",
            "Tool ID": "wildfire"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Rapidly propagating forest fire.",
        "tactics": "Select from the Nature palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "wildfire",
        "actionLabel": "Use Wildfire"
    },
    "monsoon": {
        "id": "monsoon",
        "category": "Nature",
        "title": "Tropical Monsoon",
        "subtitle": "Nature Encyclopedia Entry",
        "tags": [
            "monsoon",
            "nature",
            "tool"
        ],
        "stats": {
            "Category": "Nature",
            "Tool ID": "monsoon"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Cataclysmic deluge flooding land, extinguishing wildfires, and replenishing global plant growth.",
        "tactics": "Select from the Nature palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "monsoon",
        "actionLabel": "Use Tropical Monsoon"
    },
    "solar_eclipse": {
        "id": "solar_eclipse",
        "category": "Nature",
        "title": "Solar Eclipse",
        "subtitle": "Nature Encyclopedia Entry",
        "tags": [
            "solar_eclipse",
            "nature",
            "tool"
        ],
        "stats": {
            "Category": "Nature",
            "Tool ID": "solar_eclipse"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Cosmic shadow plunging the world into darkness, chilling temperatures, and empowering shadows.",
        "tactics": "Select from the Nature palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "solar_eclipse",
        "actionLabel": "Use Solar Eclipse"
    },
    "ash_storm": {
        "id": "ash_storm",
        "category": "Nature",
        "title": "Volcanic Ash Storm",
        "subtitle": "Nature Encyclopedia Entry",
        "tags": [
            "ash_storm",
            "nature",
            "tool"
        ],
        "stats": {
            "Category": "Nature",
            "Tool ID": "ash_storm"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Dense suffocating cloud of volcanic fallout blanketing vegetation and terrain in dark ash.",
        "tactics": "Select from the Nature palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "ash_storm",
        "actionLabel": "Use Volcanic Ash Storm"
    },
    "sand": {
        "id": "sand",
        "category": "Landscaping",
        "title": "Sand",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "sand",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "sand"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Warm coastal beaches and desert sands.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "sand",
        "actionLabel": "Use Sand"
    },
    "soil": {
        "id": "soil",
        "category": "Landscaping",
        "title": "Fertile Soil",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "soil",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "soil"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Rich soil where vegetation thrives.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "soil",
        "actionLabel": "Use Fertile Soil"
    },
    "grass": {
        "id": "grass",
        "category": "Landscaping",
        "title": "Grassland",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "grass",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "grass"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Lush green grass for grazing.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "grass",
        "actionLabel": "Use Grassland"
    },
    "forest": {
        "id": "forest",
        "category": "Landscaping",
        "title": "Dense Forest",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "forest",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "forest"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Lush woodland providing timber.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "forest",
        "actionLabel": "Use Dense Forest"
    },
    "bioluminescent_moss": {
        "id": "bioluminescent_moss",
        "category": "Landscaping",
        "title": "Bioluminescent Moss",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "bioluminescent_moss",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "bioluminescent_moss"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Alien glowing moss spreading across moisture and illuminating land.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "bioluminescent_moss",
        "actionLabel": "Use Bioluminescent Moss"
    },
    "gold_ore": {
        "id": "gold_ore",
        "category": "Landscaping",
        "title": "Gold Vein",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "gold_ore",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "gold_ore"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Gleaming mineral deposit mined by kingdoms for wealth.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "gold_ore",
        "actionLabel": "Use Gold Vein"
    },
    "mushroom_spore": {
        "id": "mushroom_spore",
        "category": "Landscaping",
        "title": "Mushroom Spore Soil",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "mushroom_spore",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "mushroom_spore"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Living fungal earth spreading giant bioluminescent toadstools.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "mushroom_spore",
        "actionLabel": "Use Mushroom Spore Soil"
    },
    "honey_comb": {
        "id": "honey_comb",
        "category": "Landscaping",
        "title": "Honeycomb Amber",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "honey_comb",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "honey_comb"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Golden sweet hive biome preserving organic matter.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "honey_comb",
        "actionLabel": "Use Honeycomb Amber"
    },
    "poison_swamp": {
        "id": "poison_swamp",
        "category": "Landscaping",
        "title": "Poison Swamp",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "poison_swamp",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "poison_swamp"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Fetid toxic mire slowing creatures and inflicting venom.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "poison_swamp",
        "actionLabel": "Use Poison Swamp"
    },
    "stone": {
        "id": "stone",
        "category": "Landscaping",
        "title": "Rock / Mountain",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "stone",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "stone"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Durable stone and mineral hills.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "stone",
        "actionLabel": "Use Rock / Mountain"
    },
    "mountain": {
        "id": "mountain",
        "category": "Landscaping",
        "title": "High Peak",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "mountain",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "mountain"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Towering mountain summit.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "mountain",
        "actionLabel": "Use High Peak"
    },
    "snow": {
        "id": "snow",
        "category": "Landscaping",
        "title": "Snow Blanket",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "snow",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "snow"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Frigid snowy terrain.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "snow",
        "actionLabel": "Use Snow Blanket"
    },
    "ice": {
        "id": "ice",
        "category": "Landscaping",
        "title": "Solid Ice",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "ice",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "ice"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Slick ice that melts when heated.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "ice",
        "actionLabel": "Use Solid Ice"
    },
    "magma_rock": {
        "id": "magma_rock",
        "category": "Landscaping",
        "title": "Magma Rock",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "magma_rock",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "magma_rock"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Superheated volcanic rock scorching passersby and warming soil.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "magma_rock",
        "actionLabel": "Use Magma Rock"
    },
    "obsidian": {
        "id": "obsidian",
        "category": "Landscaping",
        "title": "Obsidian Glass",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "obsidian",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "obsidian"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Volcanic glossy dark mineral glass.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "obsidian",
        "actionLabel": "Use Obsidian Glass"
    },
    "crystal": {
        "id": "crystal",
        "category": "Landscaping",
        "title": "Prismatic Crystal",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "crystal",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "crystal"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Luminescent gemstone refracting prismatic light.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "crystal",
        "actionLabel": "Use Prismatic Crystal"
    },
    "bedrock": {
        "id": "bedrock",
        "category": "Landscaping",
        "title": "Bedrock Wall",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "bedrock",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "bedrock"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Indestructible barrier to contain chaos.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "bedrock",
        "actionLabel": "Use Bedrock Wall"
    },
    "nebula": {
        "id": "nebula",
        "category": "Landscaping",
        "title": "Cosmic Nebula",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "nebula",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "nebula"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Swirling luminous interstellar fluid nebula.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "nebula",
        "actionLabel": "Use Cosmic Nebula"
    },
    "stardust": {
        "id": "stardust",
        "category": "Landscaping",
        "title": "Stardust Land",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "stardust",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "stardust"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Gleaming celestial stardust soil.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "stardust",
        "actionLabel": "Use Stardust Land"
    },
    "plasma_field": {
        "id": "plasma_field",
        "category": "Landscaping",
        "title": "Plasma Field",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "plasma_field",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "plasma_field"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "High-energy ionized fluid conductor crackling with cosmic sparks.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "plasma_field",
        "actionLabel": "Use Plasma Field"
    },
    "living_bramble": {
        "id": "living_bramble",
        "category": "Landscaping",
        "title": "Living Bramble",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "living_bramble",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "living_bramble"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Vigorous barbed thorns rapidly sprawling across fertile soil.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "living_bramble",
        "actionLabel": "Use Living Bramble"
    },
    "aether_fluid": {
        "id": "aether_fluid",
        "category": "Landscaping",
        "title": "Aether Fluid",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "aether_fluid",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "aether_fluid"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Weightless glowing celestial nectar that flows freely across terrain.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "aether_fluid",
        "actionLabel": "Use Aether Fluid"
    },
    "meteorite_ore": {
        "id": "meteorite_ore",
        "category": "Landscaping",
        "title": "Meteorite Ore",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "meteorite_ore",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "meteorite_ore"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Dense cosmic metal laced with star fragments and heavy minerals.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "meteorite_ore",
        "actionLabel": "Use Meteorite Ore"
    },
    "biome_savanna": {
        "id": "biome_savanna",
        "category": "Landscaping",
        "title": "Biome: Savanna",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "biome_savanna",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "biome_savanna"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Paints arid golden plains, acacia trees, and dry grass.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "biome_savanna",
        "actionLabel": "Use Biome: Savanna"
    },
    "biome_tundra": {
        "id": "biome_tundra",
        "category": "Landscaping",
        "title": "Biome: Tundra",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "biome_tundra",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "biome_tundra"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Paints permafrost, snowbanks, and ice formations.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "biome_tundra",
        "actionLabel": "Use Biome: Tundra"
    },
    "biome_jungle": {
        "id": "biome_jungle",
        "category": "Landscaping",
        "title": "Biome: Jungle",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "biome_jungle",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "biome_jungle"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Paints dense rainforest canopy, vines, and fertile mud.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "biome_jungle",
        "actionLabel": "Use Biome: Jungle"
    },
    "deforest": {
        "id": "deforest",
        "category": "Landscaping",
        "title": "Deforestation Axe",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "deforest",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "deforest"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Clears dense forests and overgrowth back to bare soil.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "deforest",
        "actionLabel": "Use Deforestation Axe"
    },
    "level_terrain": {
        "id": "level_terrain",
        "category": "Landscaping",
        "title": "Plateau / Level",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "level_terrain",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "level_terrain"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Flattens surrounding terrain to match clicked elevation and tile.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "level_terrain",
        "actionLabel": "Use Plateau / Level"
    },
    "raise": {
        "id": "raise",
        "category": "Landscaping",
        "title": "Shovel (Raise)",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "raise",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "raise"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Elevates terrain towards mountains.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "raise",
        "actionLabel": "Use Shovel (Raise)"
    },
    "lower": {
        "id": "lower",
        "category": "Landscaping",
        "title": "Shovel (Lower)",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "lower",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "lower"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Carves valleys and ocean trenches.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "lower",
        "actionLabel": "Use Shovel (Lower)"
    },
    "sponge": {
        "id": "sponge",
        "category": "Landscaping",
        "title": "Sponge Cake",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "sponge",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "sponge"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Absorbs fluids without altering ground.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "sponge",
        "actionLabel": "Use Sponge Cake"
    },
    "fertilizer": {
        "id": "fertilizer",
        "category": "Landscaping",
        "title": "Life Sprout",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "fertilizer",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "fertilizer"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Sprouts dense flora, trees and crops.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "fertilizer",
        "actionLabel": "Use Life Sprout"
    },
    "sculpt_peak": {
        "id": "sculpt_peak",
        "category": "Landscaping",
        "title": "Sculpt Mountain Peak",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "sculpt_peak",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "sculpt_peak"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Raise a grand high mountain summit surrounded by rugged crags and foothills.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "sculpt_peak",
        "actionLabel": "Use Sculpt Mountain Peak"
    },
    "carve_canyon": {
        "id": "carve_canyon",
        "category": "Landscaping",
        "title": "Carve Ocean Trench",
        "subtitle": "Landscaping Encyclopedia Entry",
        "tags": [
            "carve_canyon",
            "landscaping",
            "tool"
        ],
        "stats": {
            "Category": "Landscaping",
            "Tool ID": "carve_canyon"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Excavate a deep sea chasm or river canyon into surrounding terrain.",
        "tactics": "Select from the Landscaping palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "carve_canyon",
        "actionLabel": "Use Carve Ocean Trench"
    },
    "sanctuary_beacon": {
        "id": "sanctuary_beacon",
        "category": "Powers",
        "title": "Sanctuary Beacon",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "sanctuary_beacon",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "sanctuary_beacon"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Divine golden obelisk projecting protective energy shields & health regen.",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "sanctuary_beacon",
        "actionLabel": "Use Sanctuary Beacon"
    },
    "war_drum": {
        "id": "war_drum",
        "category": "Powers",
        "title": "War Horn",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "war_drum",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "war_drum"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Ancient battle horn supercharging all kingdom warriors with 2x speed and fury!",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "war_drum",
        "actionLabel": "Use War Horn"
    },
    "bounty_blessing": {
        "id": "bounty_blessing",
        "category": "Powers",
        "title": "Bounty Harvest",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "bounty_blessing",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "bounty_blessing"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Instantly mature all kingdom crops, spawn gold veins and timber stores.",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "bounty_blessing",
        "actionLabel": "Use Bounty Harvest"
    },
    "shield": {
        "id": "shield",
        "category": "Powers",
        "title": "Forcefield Bubble",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "shield",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "shield"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Deploy a protective kinetic shield bubble deflecting attacks.",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "shield",
        "actionLabel": "Use Forcefield Bubble"
    },
    "mind_control": {
        "id": "mind_control",
        "category": "Powers",
        "title": "Mind Control",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "mind_control",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "mind_control"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Psychic wave ordering all nearby creatures to march to target.",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "mind_control",
        "actionLabel": "Use Mind Control"
    },
    "overclock": {
        "id": "overclock",
        "category": "Powers",
        "title": "Overclock Surge",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "overclock",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "overclock"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Infuses creatures with 2.5x speed, power, and electric aura.",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "overclock",
        "actionLabel": "Use Overclock Surge"
    },
    "chronos_stasis": {
        "id": "chronos_stasis",
        "category": "Powers",
        "title": "Chronos Stasis",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "chronos_stasis",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "chronos_stasis"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Freeze time and motion for all nearby creatures.",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "chronos_stasis",
        "actionLabel": "Use Chronos Stasis"
    },
    "teleport": {
        "id": "teleport",
        "category": "Powers",
        "title": "Cosmic Teleport",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "teleport",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "teleport"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Instantly warp controlled hero or selected creature to clicked position.",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "teleport",
        "actionLabel": "Use Cosmic Teleport"
    },
    "resurrection_ray": {
        "id": "resurrection_ray",
        "category": "Powers",
        "title": "Resurrection Miracle",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "resurrection_ray",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "resurrection_ray"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Raise fallen creatures and skeletons back to life in divine light.",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "resurrection_ray",
        "actionLabel": "Use Resurrection Miracle"
    },
    "invisibility": {
        "id": "invisibility",
        "category": "Powers",
        "title": "Cloak of Shadows",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "invisibility",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "invisibility"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Bestow phantom invisibility on nearby creatures for 15 seconds.",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "invisibility",
        "actionLabel": "Use Cloak of Shadows"
    },
    "divine_smite": {
        "id": "divine_smite",
        "category": "Powers",
        "title": "Divine Smite",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "divine_smite",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "divine_smite"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Targeted heavenly golden thunderbolt instantly executing sinners.",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "divine_smite",
        "actionLabel": "Use Divine Smite"
    },
    "curse_frog": {
        "id": "curse_frog",
        "category": "Powers",
        "title": "Frog Polymorph",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "curse_frog",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "curse_frog"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Magically transfigure creatures into helpless croaking frogs!",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "curse_frog",
        "actionLabel": "Use Frog Polymorph"
    },
    "speed_boost": {
        "id": "speed_boost",
        "category": "Powers",
        "title": "Hyper Velocity",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "speed_boost",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "speed_boost"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Infuse creatures with 3x movement speed and agility.",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "speed_boost",
        "actionLabel": "Use Hyper Velocity"
    },
    "giant_growth": {
        "id": "giant_growth",
        "category": "Powers",
        "title": "Gigantification",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "giant_growth",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "giant_growth"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Massively swell creature into a colossal behemoth with 4x HP!",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "giant_growth",
        "actionLabel": "Use Gigantification"
    },
    "necromancy": {
        "id": "necromancy",
        "category": "Powers",
        "title": "Necromancy",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "necromancy",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "necromancy"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Summon an undead skeleton army out of the earth.",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "necromancy",
        "actionLabel": "Use Necromancy"
    },
    "equip_energy_shield": {
        "id": "equip_energy_shield",
        "category": "Powers",
        "title": "Equip: Energy Shield",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "equip_energy_shield",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "equip_energy_shield"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Give creature kinetic energy buckler granting barrier protection.",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "equip_energy_shield",
        "actionLabel": "Use Equip: Energy Shield"
    },
    "equip_poison_dagger": {
        "id": "equip_poison_dagger",
        "category": "Powers",
        "title": "Equip: Venom Dagger",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "equip_poison_dagger",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "equip_poison_dagger"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Arm creature with deadly venom blade inflicting continuous poison (+20 Atk).",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "equip_poison_dagger",
        "actionLabel": "Use Equip: Venom Dagger"
    },
    "equip_gravity_hammer": {
        "id": "equip_gravity_hammer",
        "category": "Powers",
        "title": "Equip: Gravity Hammer",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "equip_gravity_hammer",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "equip_gravity_hammer"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Arm creature with crushing gravitational warhammer launching shockwaves (+40 Atk).",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "equip_gravity_hammer",
        "actionLabel": "Use Equip: Gravity Hammer"
    },
    "equip_storm_staff": {
        "id": "equip_storm_staff",
        "category": "Powers",
        "title": "Equip: Storm Staff",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "equip_storm_staff",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "equip_storm_staff"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Arm creature with tempest staff summoning targeted lightning strikes (+30 Atk).",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "equip_storm_staff",
        "actionLabel": "Use Equip: Storm Staff"
    },
    "equip_grenade_launcher": {
        "id": "equip_grenade_launcher",
        "category": "Powers",
        "title": "Equip: Grenade Launcher",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "equip_grenade_launcher",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "equip_grenade_launcher"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Arm creature with explosive ordnance launcher (+35 Atk).",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "equip_grenade_launcher",
        "actionLabel": "Use Equip: Grenade Launcher"
    },
    "equip_thunder_hammer": {
        "id": "equip_thunder_hammer",
        "category": "Powers",
        "title": "Equip: Thunder Hammer",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "equip_thunder_hammer",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "equip_thunder_hammer"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Arm creature with lightning hammer causing thunderous ground slams (+35 Atk).",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "equip_thunder_hammer",
        "actionLabel": "Use Equip: Thunder Hammer"
    },
    "equip_flamethrower": {
        "id": "equip_flamethrower",
        "category": "Powers",
        "title": "Equip: Flamethrower",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "equip_flamethrower",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "equip_flamethrower"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Arm creature with heavy flamethrower unleashing continuous fiery streams (+20 Atk).",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "equip_flamethrower",
        "actionLabel": "Use Equip: Flamethrower"
    },
    "equip_frost_wand": {
        "id": "equip_frost_wand",
        "category": "Powers",
        "title": "Equip: Frost Wand",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "equip_frost_wand",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "equip_frost_wand"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Arm creature with glacial wand casting freezing projectile bolts (+20 Atk).",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "equip_frost_wand",
        "actionLabel": "Use Equip: Frost Wand"
    },
    "equip_chaos_mace": {
        "id": "equip_chaos_mace",
        "category": "Powers",
        "title": "Equip: Chaos Mace",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "equip_chaos_mace",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "equip_chaos_mace"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Arm creature with heavy explosive war mace fracturing buildings (+30 Atk).",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "equip_chaos_mace",
        "actionLabel": "Use Equip: Chaos Mace"
    },
    "equip_shuriken": {
        "id": "equip_shuriken",
        "category": "Powers",
        "title": "Equip: Shuriken Fan",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "equip_shuriken",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "equip_shuriken"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Arm creature with throwing stars launched in high-speed fans (+15 Atk).",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "equip_shuriken",
        "actionLabel": "Use Equip: Shuriken Fan"
    },
    "equip_bow": {
        "id": "equip_bow",
        "category": "Powers",
        "title": "Equip: Ranger Bow",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "equip_bow",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "equip_bow"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Arm nearest creature with a rapid-fire recurve bow (+range).",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "equip_bow",
        "actionLabel": "Use Equip: Ranger Bow"
    },
    "equip_blaster": {
        "id": "equip_blaster",
        "category": "Powers",
        "title": "Equip: Plasma Blaster",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "equip_blaster",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "equip_blaster"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Arm nearest creature with a futuristic plasma ray pistol.",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "equip_blaster",
        "actionLabel": "Use Equip: Plasma Blaster"
    },
    "equip_staff": {
        "id": "equip_staff",
        "category": "Powers",
        "title": "Equip: Arcane Staff",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "equip_staff",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "equip_staff"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Arm nearest creature with a homing stardust magic staff.",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "equip_staff",
        "actionLabel": "Use Equip: Arcane Staff"
    },
    "equip_void_scythe": {
        "id": "equip_void_scythe",
        "category": "Powers",
        "title": "Equip: Void Scythe",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "equip_void_scythe",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "equip_void_scythe"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Arm creature with a life-stealing scythe of the cosmic void (+25 Atk).",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "equip_void_scythe",
        "actionLabel": "Use Equip: Void Scythe"
    },
    "equip_laser_cannon": {
        "id": "equip_laser_cannon",
        "category": "Powers",
        "title": "Equip: Laser Cannon",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "equip_laser_cannon",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "equip_laser_cannon"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Arm creature with dual high-tech photon beam blasters (+30 Atk).",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "equip_laser_cannon",
        "actionLabel": "Use Equip: Laser Cannon"
    },
    "equip_galaxy_blade": {
        "id": "equip_galaxy_blade",
        "category": "Powers",
        "title": "Equip: Galaxy Blade",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "equip_galaxy_blade",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "equip_galaxy_blade"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "SECRET: Bestow celestial crescent sword launching stellar waves (+45 Atk)!",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "equip_galaxy_blade",
        "actionLabel": "Use Equip: Galaxy Blade"
    },
    "equip_laser_shotgun": {
        "id": "equip_laser_shotgun",
        "category": "Powers",
        "title": "Equip: Laser Shotgun",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "equip_laser_shotgun",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "equip_laser_shotgun"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Arm creature with multi-beam scatter blaster (+28 Atk).",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "equip_laser_shotgun",
        "actionLabel": "Use Equip: Laser Shotgun"
    },
    "equip_chain_lightning_staff": {
        "id": "equip_chain_lightning_staff",
        "category": "Powers",
        "title": "Equip: Chain Lightning Staff",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "equip_chain_lightning_staff",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "equip_chain_lightning_staff"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Arm creature with storm staff arcing electric surges to 3 targets (+32 Atk).",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "equip_chain_lightning_staff",
        "actionLabel": "Use Equip: Chain Lightning Staff"
    },
    "cosmic_oblivion": {
        "id": "cosmic_oblivion",
        "category": "Powers",
        "title": "Cosmic Oblivion",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "cosmic_oblivion",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "cosmic_oblivion"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "SECRET: Unfurl absolute divine annihilation ray upon the universe!",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "cosmic_oblivion",
        "actionLabel": "Use Cosmic Oblivion"
    },
    "galaxy_sacrifice": {
        "id": "galaxy_sacrifice",
        "category": "Powers",
        "title": "Galaxy Sacrifice",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "galaxy_sacrifice",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "galaxy_sacrifice"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Trigger the Great Galaxy Sacrifice to unlock the Cosmic Vault!",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "galaxy_sacrifice",
        "actionLabel": "Use Galaxy Sacrifice"
    },
    "heatray": {
        "id": "heatray",
        "category": "Powers",
        "title": "Heat Ray",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "heatray",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "heatray"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Intense thermal beam to melt or ignite.",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "heatray",
        "actionLabel": "Use Heat Ray"
    },
    "freezeray": {
        "id": "freezeray",
        "category": "Powers",
        "title": "Freeze Ray",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "freezeray",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "freezeray"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Cryogenic beam freezing water and creatures.",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "freezeray",
        "actionLabel": "Use Freeze Ray"
    },
    "blessing": {
        "id": "blessing",
        "category": "Powers",
        "title": "Divine Blessing",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "blessing",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "blessing"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Golden halo, double HP, super speed.",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "blessing",
        "actionLabel": "Use Divine Blessing"
    },
    "curse": {
        "id": "curse",
        "category": "Powers",
        "title": "Void Curse",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "curse",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "curse"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Shrinks, weakens, and halving HP.",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "curse",
        "actionLabel": "Use Void Curse"
    },
    "plague": {
        "id": "plague",
        "category": "Powers",
        "title": "Zombie Plague",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "plague",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "plague"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Contagious spores turning humans into undead.",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "plague",
        "actionLabel": "Use Zombie Plague"
    },
    "snap": {
        "id": "snap",
        "category": "Powers",
        "title": "Coin of Fate",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "snap",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "snap"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "50% of all living things dissolve in dust.",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "snap",
        "actionLabel": "Use Coin of Fate"
    },
    "heal": {
        "id": "heal",
        "category": "Powers",
        "title": "Divine Heal",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "heal",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "heal"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Restores all creatures to full health.",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "heal",
        "actionLabel": "Use Divine Heal"
    },
    "frenzy": {
        "id": "frenzy",
        "category": "Powers",
        "title": "Bloodlust",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "frenzy",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "frenzy"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Forces creatures into violent frenzy.",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "frenzy",
        "actionLabel": "Use Bloodlust"
    },
    "growth": {
        "id": "growth",
        "category": "Powers",
        "title": "Titan Ray",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "growth",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "growth"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Enlarges creature into a towering giant.",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "growth",
        "actionLabel": "Use Titan Ray"
    },
    "shrink": {
        "id": "shrink",
        "category": "Powers",
        "title": "Shrink Ray",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "shrink",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "shrink"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Minimizes creature to tiny scale.",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "shrink",
        "actionLabel": "Use Shrink Ray"
    },
    "ufo": {
        "id": "ufo",
        "category": "Powers",
        "title": "Alien Saucer",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "ufo",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "ufo"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Spawns UFO abducting cows and humans.",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "ufo",
        "actionLabel": "Use Alien Saucer"
    },
    "inspect": {
        "id": "inspect",
        "category": "Powers",
        "title": "Miracle Eye",
        "subtitle": "Powers Encyclopedia Entry",
        "tags": [
            "inspect",
            "powers",
            "tool"
        ],
        "stats": {
            "Category": "Powers",
            "Tool ID": "inspect"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Inspect creature and tile detailed stats.",
        "tactics": "Select from the Powers palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "inspect",
        "actionLabel": "Use Miracle Eye"
    },
    "control": {
        "id": "control",
        "category": "Creatures",
        "title": "Possess / Control",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "control",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "control"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Directly pilot and control any creature with WASD & attacks!",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "control",
        "actionLabel": "Use Possess / Control"
    },
    "creator": {
        "id": "creator",
        "category": "Creatures",
        "title": "Creature Creator",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "creator",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "creator"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Design, customize, and build your own custom monsters!",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "creator",
        "actionLabel": "Use Creature Creator"
    },
    "triceratops": {
        "id": "triceratops",
        "category": "Creatures",
        "title": "Triceratops",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "triceratops",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "triceratops"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Three-horned armored ceratopsian with frill shield bulldoze charge!",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "triceratops",
        "actionLabel": "Use Triceratops"
    },
    "pterodactyl": {
        "id": "pterodactyl",
        "category": "Creatures",
        "title": "Pterodactyl",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "pterodactyl",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "pterodactyl"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Soaring flying reptile with dive talons and supersonic screech gale!",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "pterodactyl",
        "actionLabel": "Use Pterodactyl"
    },
    "brachiosaurus": {
        "id": "brachiosaurus",
        "category": "Creatures",
        "title": "Brachiosaurus",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "brachiosaurus",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "brachiosaurus"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Colossal titan sauropod with columnar stomp and earth-shattering quake!",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "brachiosaurus",
        "actionLabel": "Use Brachiosaurus"
    },
    "frost_dragon": {
        "id": "frost_dragon",
        "category": "Creatures",
        "title": "Glacial Frost Dragon",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "frost_dragon",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "frost_dragon"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Ancient ice wyrm breathing freezing frost streams and blizzard vortices!",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "frost_dragon",
        "actionLabel": "Use Glacial Frost Dragon"
    },
    "shadow_dragon": {
        "id": "shadow_dragon",
        "category": "Creatures",
        "title": "Shadow Void Dragon",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "shadow_dragon",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "shadow_dragon"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Abyssal netherflame wyrm with void lasers and singularity shadow warp!",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "shadow_dragon",
        "actionLabel": "Use Shadow Void Dragon"
    },
    "storm_dragon": {
        "id": "storm_dragon",
        "category": "Creatures",
        "title": "Thunder Storm Dragon",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "storm_dragon",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "storm_dragon"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "High-voltage electric wyrm firing chain lightning and supercell thunder surges!",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "storm_dragon",
        "actionLabel": "Use Thunder Storm Dragon"
    },
    "cyber_dragon": {
        "id": "cyber_dragon",
        "category": "Creatures",
        "title": "Cybernetic Dragon",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "cyber_dragon",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "cyber_dragon"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Controllable mechanical dragon firing continuous high-power plasma laser breath!",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "cyber_dragon",
        "actionLabel": "Use Cybernetic Dragon"
    },
    "thunder_bird": {
        "id": "thunder_bird",
        "category": "Creatures",
        "title": "Thunderbird",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "thunder_bird",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "thunder_bird"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Controllable storm raptor unleashing electric gale strikes and chain tempest bolts!",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "thunder_bird",
        "actionLabel": "Use Thunderbird"
    },
    "phoenix_knight": {
        "id": "phoenix_knight",
        "category": "Creatures",
        "title": "Phoenix Knight",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "phoenix_knight",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "phoenix_knight"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Controllable solar crusader wielding radiant solar blades and blinding ascension burst!",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "phoenix_knight",
        "actionLabel": "Use Phoenix Knight"
    },
    "dark_matter_colossus": {
        "id": "dark_matter_colossus",
        "category": "Creatures",
        "title": "Dark Matter Colossus",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "dark_matter_colossus",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "dark_matter_colossus"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Controllable abyssal juggernaut firing gravitational crush pulses and singularity collapse!",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "dark_matter_colossus",
        "actionLabel": "Use Dark Matter Colossus"
    },
    "swamp_behemoth": {
        "id": "swamp_behemoth",
        "category": "Creatures",
        "title": "Swamp Behemoth",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "swamp_behemoth",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "swamp_behemoth"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Controllable primeval mire predator with toxic bile spew and tail slam wave!",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "swamp_behemoth",
        "actionLabel": "Use Swamp Behemoth"
    },
    "mammoth": {
        "id": "mammoth",
        "category": "Creatures",
        "title": "Woolly Mammoth",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "mammoth",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "mammoth"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Controllable prehistoric titan with glacial tusk sweep and seismic glacier stomp!",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "mammoth",
        "actionLabel": "Use Woolly Mammoth"
    },
    "duck": {
        "id": "duck",
        "category": "Creatures",
        "title": "Exploding Duck",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "duck",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "duck"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Quacking aquatic fowl that lays ticking explosive eggs and detonates upon death!",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "duck",
        "actionLabel": "Use Exploding Duck"
    },
    "frog": {
        "id": "frog",
        "category": "Creatures",
        "title": "Poison Dart Frog",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "frog",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "frog"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Agile amphibious hopper that spits venom darts and tongue-snatches prey.",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "frog",
        "actionLabel": "Use Poison Dart Frog"
    },
    "cyber_ninja": {
        "id": "cyber_ninja",
        "category": "Creatures",
        "title": "Cyber Ninja",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "cyber_ninja",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "cyber_ninja"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Augmented shinobi with shuriken fan attacks and supersonic shadow dash.",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "cyber_ninja",
        "actionLabel": "Use Cyber Ninja"
    },
    "laser_shark": {
        "id": "laser_shark",
        "category": "Creatures",
        "title": "Laser Shark",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "laser_shark",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "laser_shark"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Ferocious apex ocean predator equipped with high-tech head-mounted laser!",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "laser_shark",
        "actionLabel": "Use Laser Shark"
    },
    "frost_wolf": {
        "id": "frost_wolf",
        "category": "Creatures",
        "title": "Frost Wolf",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "frost_wolf",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "frost_wolf"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Frigid pack hunter howling glacial frost novae that freeze prey.",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "frost_wolf",
        "actionLabel": "Use Frost Wolf"
    },
    "sand_scorpion": {
        "id": "sand_scorpion",
        "category": "Creatures",
        "title": "Giant Sand Scorpion",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "sand_scorpion",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "sand_scorpion"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Armored desert arachnid with crushing pincer crush and burrow ambush.",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "sand_scorpion",
        "actionLabel": "Use Giant Sand Scorpion"
    },
    "necromancer": {
        "id": "necromancer",
        "category": "Creatures",
        "title": "Lich Necromancer",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "necromancer",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "necromancer"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Dark sorcerer raising armies of undead skeletons and soul drain.",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "necromancer",
        "actionLabel": "Use Lich Necromancer"
    },
    "valkyrie": {
        "id": "valkyrie",
        "category": "Creatures",
        "title": "Valkyrie of Valhalla",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "valkyrie",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "valkyrie"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Golden winged divine warrior hurling holy spears and sacred healing.",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "valkyrie",
        "actionLabel": "Use Valkyrie of Valhalla"
    },
    "gargoyle": {
        "id": "gargoyle",
        "category": "Creatures",
        "title": "Obsidian Gargoyle",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "gargoyle",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "gargoyle"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Living stone demon with wing gust shockwaves and stone armor stasis.",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "gargoyle",
        "actionLabel": "Use Obsidian Gargoyle"
    },
    "mecha_rex": {
        "id": "mecha_rex",
        "category": "Creatures",
        "title": "Mecha T-Rex",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "mecha_rex",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "mecha_rex"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Cybernetic bipedal titan armed with dual plasma cannons and tail whip.",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "mecha_rex",
        "actionLabel": "Use Mecha T-Rex"
    },
    "golden_dragon": {
        "id": "golden_dragon",
        "category": "Creatures",
        "title": "Golden Sun Dragon",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "golden_dragon",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "golden_dragon"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Controllable mythic deity unleashing sunbeam breath & divine flare burst!",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "golden_dragon",
        "actionLabel": "Use Golden Sun Dragon"
    },
    "space_worm": {
        "id": "space_worm",
        "category": "Creatures",
        "title": "Cosmic Starworm",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "space_worm",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "space_worm"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Interstellar abyssal serpent eating terrain and firing cosmic singularity rays.",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "space_worm",
        "actionLabel": "Use Cosmic Starworm"
    },
    "goblin": {
        "id": "goblin",
        "category": "Creatures",
        "title": "Goblin Raider",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "goblin",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "goblin"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Crafty marauder raiding kingdoms and tossing explosive gunpowder bomb bundles.",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "goblin",
        "actionLabel": "Use Goblin Raider"
    },
    "pirate_ship": {
        "id": "pirate_ship",
        "category": "Creatures",
        "title": "Pirate Galleon",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "pirate_ship",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "pirate_ship"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Waterborne pirate corsair firing full broadside cannon salvos & boarding crews.",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "pirate_ship",
        "actionLabel": "Use Pirate Galleon"
    },
    "crystal_golem": {
        "id": "crystal_golem",
        "category": "Creatures",
        "title": "Crystal Golem",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "crystal_golem",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "crystal_golem"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Living prism colossus firing refracting light beams and raising crystals.",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "crystal_golem",
        "actionLabel": "Use Crystal Golem"
    },
    "shadow_assassin": {
        "id": "shadow_assassin",
        "category": "Creatures",
        "title": "Shadow Assassin",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "shadow_assassin",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "shadow_assassin"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Stealthy rogue executing rapid shadow-strike dashes and smoke evasions.",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "shadow_assassin",
        "actionLabel": "Use Shadow Assassin"
    },
    "sheep": {
        "id": "sheep",
        "category": "Creatures",
        "title": "Sheep",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "sheep",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "sheep"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Peaceful grazing livestock.",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "sheep",
        "actionLabel": "Use Sheep"
    },
    "cow": {
        "id": "cow",
        "category": "Creatures",
        "title": "Cow",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "cow",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "cow"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Domestic farm animal.",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "cow",
        "actionLabel": "Use Cow"
    },
    "wolf": {
        "id": "wolf",
        "category": "Creatures",
        "title": "Grey Wolf",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "wolf",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "wolf"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Pack predator hunting sheep and villagers.",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "wolf",
        "actionLabel": "Use Grey Wolf"
    },
    "bear": {
        "id": "bear",
        "category": "Creatures",
        "title": "Grizzly Bear",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "bear",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "bear"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Fierce territorial apex beast.",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "bear",
        "actionLabel": "Use Grizzly Bear"
    },
    "golem": {
        "id": "golem",
        "category": "Creatures",
        "title": "Rock Golem",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "golem",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "golem"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Massive stone titan stomping terrain.",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "golem",
        "actionLabel": "Use Rock Golem"
    },
    "zombie": {
        "id": "zombie",
        "category": "Creatures",
        "title": "Zombie Horde",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "zombie",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "zombie"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Infectious undead biting the living.",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "zombie",
        "actionLabel": "Use Zombie Horde"
    },
    "skeleton": {
        "id": "skeleton",
        "category": "Creatures",
        "title": "Skeleton",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "skeleton",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "skeleton"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Risen undead warrior with sword.",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "skeleton",
        "actionLabel": "Use Skeleton"
    },
    "demon": {
        "id": "demon",
        "category": "Creatures",
        "title": "Nether Demon",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "demon",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "demon"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Fire-proof fiend of magma.",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "demon",
        "actionLabel": "Use Nether Demon"
    },
    "alien": {
        "id": "alien",
        "category": "Creatures",
        "title": "Alien Scout",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "alien",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "alien"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Futuristic invader shooting rayguns.",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "alien",
        "actionLabel": "Use Alien Scout"
    },
    "toggle_peace": {
        "id": "toggle_peace",
        "category": "Creatures",
        "title": "Law: Force Peace",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "toggle_peace",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "toggle_peace"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Toggles peaceful coexistence.",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "toggle_peace",
        "actionLabel": "Use Law: Force Peace"
    },
    "toggle_war": {
        "id": "toggle_war",
        "category": "Creatures",
        "title": "Law: Provoke War",
        "subtitle": "Creatures Encyclopedia Entry",
        "tags": [
            "toggle_war",
            "creatures",
            "tool"
        ],
        "stats": {
            "Category": "Creatures",
            "Tool ID": "toggle_war"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Toggles global kingdom war.",
        "tactics": "Select from the Creatures palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "toggle_war",
        "actionLabel": "Use Law: Provoke War"
    },
    "btn_gen": {
        "id": "btn_gen",
        "category": "Menu",
        "title": "World Generator",
        "subtitle": "Menu Encyclopedia Entry",
        "tags": [
            "btn_gen",
            "menu",
            "tool"
        ],
        "stats": {
            "Category": "Menu",
            "Tool ID": "btn_gen"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Procedural continents, islands, seeds.",
        "tactics": "Select from the Menu palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "btn_gen",
        "actionLabel": "Use World Generator"
    },
    "btn_secrets": {
        "id": "btn_secrets",
        "category": "Menu",
        "title": "Cosmic Vault",
        "subtitle": "Menu Encyclopedia Entry",
        "tags": [
            "btn_secrets",
            "menu",
            "tool"
        ],
        "stats": {
            "Category": "Menu",
            "Tool ID": "btn_secrets"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "View unlocked secrets from The Great Galaxy Sacrifice.",
        "tactics": "Select from the Menu palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "btn_secrets",
        "actionLabel": "Use Cosmic Vault"
    },
    "btn_diplomacy": {
        "id": "btn_diplomacy",
        "category": "Menu",
        "title": "Kingdom Ledger",
        "subtitle": "Menu Encyclopedia Entry",
        "tags": [
            "btn_diplomacy",
            "menu",
            "tool"
        ],
        "stats": {
            "Category": "Menu",
            "Tool ID": "btn_diplomacy"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Inspect all sovereign empires, populations, and wars.",
        "tactics": "Select from the Menu palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "btn_diplomacy",
        "actionLabel": "Use Kingdom Ledger"
    },
    "btn_soundboard": {
        "id": "btn_soundboard",
        "category": "Menu",
        "title": "SFX Soundboard",
        "subtitle": "Menu Encyclopedia Entry",
        "tags": [
            "btn_soundboard",
            "menu",
            "tool"
        ],
        "stats": {
            "Category": "Menu",
            "Tool ID": "btn_soundboard"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Procedural Web Audio sound generator testing audio frequencies.",
        "tactics": "Select from the Menu palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "btn_soundboard",
        "actionLabel": "Use SFX Soundboard"
    },
    "btn_weather": {
        "id": "btn_weather",
        "category": "Menu",
        "title": "Atmosphere Console",
        "subtitle": "Menu Encyclopedia Entry",
        "tags": [
            "btn_weather",
            "menu",
            "tool"
        ],
        "stats": {
            "Category": "Menu",
            "Tool ID": "btn_weather"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Master climate controls for global storms and wind.",
        "tactics": "Select from the Menu palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "btn_weather",
        "actionLabel": "Use Atmosphere Console"
    },
    "btn_stats": {
        "id": "btn_stats",
        "category": "Menu",
        "title": "Cosmic Analytics",
        "subtitle": "Menu Encyclopedia Entry",
        "tags": [
            "btn_stats",
            "menu",
            "tool"
        ],
        "stats": {
            "Category": "Menu",
            "Tool ID": "btn_stats"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Detailed population demographics, tile census, and world metrics.",
        "tactics": "Select from the Menu palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "btn_stats",
        "actionLabel": "Use Cosmic Analytics"
    },
    "btn_save": {
        "id": "btn_save",
        "category": "Menu",
        "title": "Save / Load",
        "subtitle": "Menu Encyclopedia Entry",
        "tags": [
            "btn_save",
            "menu",
            "tool"
        ],
        "stats": {
            "Category": "Menu",
            "Tool ID": "btn_save"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Local slots and JSON world export.",
        "tactics": "Select from the Menu palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "btn_save",
        "actionLabel": "Use Save / Load"
    },
    "btn_settings": {
        "id": "btn_settings",
        "category": "Menu",
        "title": "Settings",
        "subtitle": "Menu Encyclopedia Entry",
        "tags": [
            "btn_settings",
            "menu",
            "tool"
        ],
        "stats": {
            "Category": "Menu",
            "Tool ID": "btn_settings"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Audio volume, display toggles, FPS.",
        "tactics": "Select from the Menu palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "btn_settings",
        "actionLabel": "Use Settings"
    },
    "btn_codex": {
        "id": "btn_codex",
        "category": "Menu",
        "title": "God's Codex",
        "subtitle": "Menu Encyclopedia Entry",
        "tags": [
            "btn_codex",
            "menu",
            "tool"
        ],
        "stats": {
            "Category": "Menu",
            "Tool ID": "btn_codex"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Complete encyclopedia and guides.",
        "tactics": "Select from the Menu palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "btn_codex",
        "actionLabel": "Use God's Codex"
    },
    "btn_clear": {
        "id": "btn_clear",
        "category": "Menu",
        "title": "Reset World",
        "subtitle": "Menu Encyclopedia Entry",
        "tags": [
            "btn_clear",
            "menu",
            "tool"
        ],
        "stats": {
            "Category": "Menu",
            "Tool ID": "btn_clear"
        },
        "abilities": [
            "Interactive God Power / Tool",
            "Real-time Simulation Response"
        ],
        "lore": "Clear world to blank ocean.",
        "tactics": "Select from the Menu palette or press its quick-select hotkey to apply across the canvas.",
        "counters": "Use opposing elemental forces or cleansing miracles to neutralize its effects.",
        "related": [],
        "toolId": "btn_clear",
        "actionLabel": "Use Reset World"
    }
};

if (typeof window !== "undefined") {
    window.GALAXY_PEDIA = GALAXY_PEDIA;
}
if (typeof module !== "undefined" && module.exports) {
    module.exports = { GALAXY_PEDIA ,
    "tachyon_lance": {
            "id": "tachyon_lance",
            "category": "Destruction & Chaos",
            "title": "Tachyon Lance",
            "subtitle": "Destruction & Chaos Entry",
            "tags": [
                    "tachyon_lance",
                    "destruction",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Destruction & Chaos",
                    "Tool ID": "tachyon_lance",
                    "Damage Tier": "Catastrophic (Apocalypse)",
                    "Blast Radius": "Massive Multi-Tile",
                    "Area Effect": "High Kinetic / Thermal Flux"
            },
            "abilities": [
                    "Tachyon Lance: Devastates structures and disintegrates living entities.",
                    "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
            ],
            "lore": "High-energy tachyon particle beam boring straight through the crust.",
            "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
            "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
            "related": [],
            "toolId": "tachyon_lance",
            "actionLabel": "Use Tachyon Lance"
    },
    "subspace_torpedo": {
            "id": "subspace_torpedo",
            "category": "Destruction & Chaos",
            "title": "Subspace Torpedo",
            "subtitle": "Destruction & Chaos Entry",
            "tags": [
                    "subspace_torpedo",
                    "destruction",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Destruction & Chaos",
                    "Tool ID": "subspace_torpedo",
                    "Damage Tier": "Catastrophic (Apocalypse)",
                    "Blast Radius": "Massive Multi-Tile",
                    "Area Effect": "High Kinetic / Thermal Flux"
            },
            "abilities": [
                    "Subspace Torpedo: Devastates structures and disintegrates living entities.",
                    "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
            ],
            "lore": "Spatial torpedo warping underground before exploding in magma.",
            "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
            "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
            "related": [],
            "toolId": "subspace_torpedo",
            "actionLabel": "Use Subspace Torpedo"
    },
    "solar_beam": {
            "id": "solar_beam",
            "category": "Destruction & Chaos",
            "title": "Solar Death Beam",
            "subtitle": "Destruction & Chaos Entry",
            "tags": [
                    "solar_beam",
                    "destruction",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Destruction & Chaos",
                    "Tool ID": "solar_beam",
                    "Damage Tier": "Catastrophic (Apocalypse)",
                    "Blast Radius": "Massive Multi-Tile",
                    "Area Effect": "High Kinetic / Thermal Flux"
            },
            "abilities": [
                    "Solar Death Beam: Devastates structures and disintegrates living entities.",
                    "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
            ],
            "lore": "Focused sunlight beam incinerating everything in a concentrated beam.",
            "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
            "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
            "related": [],
            "toolId": "solar_beam",
            "actionLabel": "Use Solar Death Beam"
    },
    "dark_matter_detonator": {
            "id": "dark_matter_detonator",
            "category": "Destruction & Chaos",
            "title": "Dark Matter Detonator",
            "subtitle": "Destruction & Chaos Entry",
            "tags": [
                    "dark_matter_detonator",
                    "destruction",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Destruction & Chaos",
                    "Tool ID": "dark_matter_detonator",
                    "Damage Tier": "Catastrophic (Apocalypse)",
                    "Blast Radius": "Massive Multi-Tile",
                    "Area Effect": "High Kinetic / Thermal Flux"
            },
            "abilities": [
                    "Dark Matter Detonator: Devastates structures and disintegrates living entities.",
                    "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
            ],
            "lore": "Spreads dark matter implosion pockets dissolving matter.",
            "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
            "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
            "related": [],
            "toolId": "dark_matter_detonator",
            "actionLabel": "Use Dark Matter Detonator"
    },
    "void_drill": {
            "id": "void_drill",
            "category": "Destruction & Chaos",
            "title": "Void Drill",
            "subtitle": "Destruction & Chaos Entry",
            "tags": [
                    "void_drill",
                    "destruction",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Destruction & Chaos",
                    "Tool ID": "void_drill",
                    "Damage Tier": "Catastrophic (Apocalypse)",
                    "Blast Radius": "Massive Multi-Tile",
                    "Area Effect": "High Kinetic / Thermal Flux"
            },
            "abilities": [
                    "Void Drill: Devastates structures and disintegrates living entities.",
                    "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
            ],
            "lore": "Rotary seismic bore drilling vertical shafts down to bedrock.",
            "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
            "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
            "related": [],
            "toolId": "void_drill",
            "actionLabel": "Use Void Drill"
    },
    "magma_mortar": {
            "id": "magma_mortar",
            "category": "Destruction & Chaos",
            "title": "Magma Mortar",
            "subtitle": "Destruction & Chaos Entry",
            "tags": [
                    "magma_mortar",
                    "destruction",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Destruction & Chaos",
                    "Tool ID": "magma_mortar",
                    "Damage Tier": "Catastrophic (Apocalypse)",
                    "Blast Radius": "Massive Multi-Tile",
                    "Area Effect": "High Kinetic / Thermal Flux"
            },
            "abilities": [
                    "Magma Mortar: Devastates structures and disintegrates living entities.",
                    "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
            ],
            "lore": "Artillery salvo raining volcanic magma bombs across the area.",
            "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
            "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
            "related": [],
            "toolId": "magma_mortar",
            "actionLabel": "Use Magma Mortar"
    },
    "hellfire_vortex": {
            "id": "hellfire_vortex",
            "category": "Destruction & Chaos",
            "title": "Hellfire Vortex",
            "subtitle": "Destruction & Chaos Entry",
            "tags": [
                    "hellfire_vortex",
                    "destruction",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Destruction & Chaos",
                    "Tool ID": "hellfire_vortex",
                    "Damage Tier": "Catastrophic (Apocalypse)",
                    "Blast Radius": "Massive Multi-Tile",
                    "Area Effect": "High Kinetic / Thermal Flux"
            },
            "abilities": [
                    "Hellfire Vortex: Devastates structures and disintegrates living entities.",
                    "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
            ],
            "lore": "Twisting column of roaring hellfire incinerating the region.",
            "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
            "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
            "related": [],
            "toolId": "hellfire_vortex",
            "actionLabel": "Use Hellfire Vortex"
    },
    "gravity_well": {
            "id": "gravity_well",
            "category": "Destruction & Chaos",
            "title": "Gravity Well",
            "subtitle": "Destruction & Chaos Entry",
            "tags": [
                    "gravity_well",
                    "destruction",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Destruction & Chaos",
                    "Tool ID": "gravity_well",
                    "Damage Tier": "Catastrophic (Apocalypse)",
                    "Blast Radius": "Massive Multi-Tile",
                    "Area Effect": "High Kinetic / Thermal Flux"
            },
            "abilities": [
                    "Gravity Well: Devastates structures and disintegrates living entities.",
                    "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
            ],
            "lore": "Crushes all surrounding structures and units inward.",
            "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
            "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
            "related": [],
            "toolId": "gravity_well",
            "actionLabel": "Use Gravity Well"
    },
    "antimatter_singularity": {
            "id": "antimatter_singularity",
            "category": "Destruction & Chaos",
            "title": "Antimatter Singularity",
            "subtitle": "Destruction & Chaos Entry",
            "tags": [
                    "antimatter_singularity",
                    "destruction",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Destruction & Chaos",
                    "Tool ID": "antimatter_singularity",
                    "Damage Tier": "Catastrophic (Apocalypse)",
                    "Blast Radius": "Massive Multi-Tile",
                    "Area Effect": "High Kinetic / Thermal Flux"
            },
            "abilities": [
                    "Antimatter Singularity: Devastates structures and disintegrates living entities.",
                    "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
            ],
            "lore": "Micro-singularity vaporizing matter into absolute void.",
            "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
            "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
            "related": [],
            "toolId": "antimatter_singularity",
            "actionLabel": "Use Antimatter Singularity"
    },
    "orbital_kinetic_harpoon": {
            "id": "orbital_kinetic_harpoon",
            "category": "Destruction & Chaos",
            "title": "Kinetic Harpoon",
            "subtitle": "Destruction & Chaos Entry",
            "tags": [
                    "orbital_kinetic_harpoon",
                    "destruction",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Destruction & Chaos",
                    "Tool ID": "orbital_kinetic_harpoon",
                    "Damage Tier": "Catastrophic (Apocalypse)",
                    "Blast Radius": "Massive Multi-Tile",
                    "Area Effect": "High Kinetic / Thermal Flux"
            },
            "abilities": [
                    "Kinetic Harpoon: Devastates structures and disintegrates living entities.",
                    "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
            ],
            "lore": "Dense orbital harpoon striking ground with kinetic fury.",
            "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
            "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
            "related": [],
            "toolId": "orbital_kinetic_harpoon",
            "actionLabel": "Use Kinetic Harpoon"
    },
    "gamma_ray_pulsar": {
            "id": "gamma_ray_pulsar",
            "category": "Destruction & Chaos",
            "title": "Gamma Ray Pulsar",
            "subtitle": "Destruction & Chaos Entry",
            "tags": [
                    "gamma_ray_pulsar",
                    "destruction",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Destruction & Chaos",
                    "Tool ID": "gamma_ray_pulsar",
                    "Damage Tier": "Catastrophic (Apocalypse)",
                    "Blast Radius": "Massive Multi-Tile",
                    "Area Effect": "High Kinetic / Thermal Flux"
            },
            "abilities": [
                    "Gamma Ray Pulsar: Devastates structures and disintegrates living entities.",
                    "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
            ],
            "lore": "Irradiates terrain leaving radioactive wasteland slag.",
            "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
            "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
            "related": [],
            "toolId": "gamma_ray_pulsar",
            "actionLabel": "Use Gamma Ray Pulsar"
    },
    "chronos_decay_bomb": {
            "id": "chronos_decay_bomb",
            "category": "Destruction & Chaos",
            "title": "Chronos Decay Bomb",
            "subtitle": "Destruction & Chaos Entry",
            "tags": [
                    "chronos_decay_bomb",
                    "destruction",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Destruction & Chaos",
                    "Tool ID": "chronos_decay_bomb",
                    "Damage Tier": "Catastrophic (Apocalypse)",
                    "Blast Radius": "Massive Multi-Tile",
                    "Area Effect": "High Kinetic / Thermal Flux"
            },
            "abilities": [
                    "Chronos Decay Bomb: Devastates structures and disintegrates living entities.",
                    "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
            ],
            "lore": "Ages forests and structures into dust and skeletons.",
            "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
            "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
            "related": [],
            "toolId": "chronos_decay_bomb",
            "actionLabel": "Use Chronos Decay Bomb"
    },
    "plasma_torrent": {
            "id": "plasma_torrent",
            "category": "Destruction & Chaos",
            "title": "Plasma Torrent",
            "subtitle": "Destruction & Chaos Entry",
            "tags": [
                    "plasma_torrent",
                    "destruction",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Destruction & Chaos",
                    "Tool ID": "plasma_torrent",
                    "Damage Tier": "Catastrophic (Apocalypse)",
                    "Blast Radius": "Massive Multi-Tile",
                    "Area Effect": "High Kinetic / Thermal Flux"
            },
            "abilities": [
                    "Plasma Torrent: Devastates structures and disintegrates living entities.",
                    "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
            ],
            "lore": "Continuous torrent of ionized plasma scouring the battlefield.",
            "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
            "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
            "related": [],
            "toolId": "plasma_torrent",
            "actionLabel": "Use Plasma Torrent"
    },
    "seismic_splitter": {
            "id": "seismic_splitter",
            "category": "Destruction & Chaos",
            "title": "Seismic Splitter",
            "subtitle": "Destruction & Chaos Entry",
            "tags": [
                    "seismic_splitter",
                    "destruction",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Destruction & Chaos",
                    "Tool ID": "seismic_splitter",
                    "Damage Tier": "Catastrophic (Apocalypse)",
                    "Blast Radius": "Massive Multi-Tile",
                    "Area Effect": "High Kinetic / Thermal Flux"
            },
            "abilities": [
                    "Seismic Splitter: Devastates structures and disintegrates living entities.",
                    "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
            ],
            "lore": "Tears a straight continental faultline spilling molten rock.",
            "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
            "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
            "related": [],
            "toolId": "seismic_splitter",
            "actionLabel": "Use Seismic Splitter"
    },
    "acid_hail": {
            "id": "acid_hail",
            "category": "Destruction & Chaos",
            "title": "Corrosive Acid Hail",
            "subtitle": "Destruction & Chaos Entry",
            "tags": [
                    "acid_hail",
                    "destruction",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Destruction & Chaos",
                    "Tool ID": "acid_hail",
                    "Damage Tier": "Catastrophic (Apocalypse)",
                    "Blast Radius": "Massive Multi-Tile",
                    "Area Effect": "High Kinetic / Thermal Flux"
            },
            "abilities": [
                    "Corrosive Acid Hail: Devastates structures and disintegrates living entities.",
                    "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
            ],
            "lore": "Acidic hail barrage dissolving organic matter and stone.",
            "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
            "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
            "related": [],
            "toolId": "acid_hail",
            "actionLabel": "Use Corrosive Acid Hail"
    },
    "bioweapon_siphon": {
            "id": "bioweapon_siphon",
            "category": "Destruction & Chaos",
            "title": "Bioweapon Siphon",
            "subtitle": "Destruction & Chaos Entry",
            "tags": [
                    "bioweapon_siphon",
                    "destruction",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Destruction & Chaos",
                    "Tool ID": "bioweapon_siphon",
                    "Damage Tier": "Catastrophic (Apocalypse)",
                    "Blast Radius": "Massive Multi-Tile",
                    "Area Effect": "High Kinetic / Thermal Flux"
            },
            "abilities": [
                    "Bioweapon Siphon: Devastates structures and disintegrates living entities.",
                    "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
            ],
            "lore": "Seeds necrotic green slime mutating and poisoning life.",
            "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
            "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
            "related": [],
            "toolId": "bioweapon_siphon",
            "actionLabel": "Use Bioweapon Siphon"
    },
    "cryo_implosion": {
            "id": "cryo_implosion",
            "category": "Destruction & Chaos",
            "title": "Cryo Implosion",
            "subtitle": "Destruction & Chaos Entry",
            "tags": [
                    "cryo_implosion",
                    "destruction",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Destruction & Chaos",
                    "Tool ID": "cryo_implosion",
                    "Damage Tier": "Catastrophic (Apocalypse)",
                    "Blast Radius": "Massive Multi-Tile",
                    "Area Effect": "High Kinetic / Thermal Flux"
            },
            "abilities": [
                    "Cryo Implosion: Devastates structures and disintegrates living entities.",
                    "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
            ],
            "lore": "Sub-zero shockwave glaciating lava into obsidian and water into permafrost.",
            "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
            "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
            "related": [],
            "toolId": "cryo_implosion",
            "actionLabel": "Use Cryo Implosion"
    },
    "chaos_meteor": {
            "id": "chaos_meteor",
            "category": "Destruction & Chaos",
            "title": "Chaos Meteor",
            "subtitle": "Destruction & Chaos Entry",
            "tags": [
                    "chaos_meteor",
                    "destruction",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Destruction & Chaos",
                    "Tool ID": "chaos_meteor",
                    "Damage Tier": "Catastrophic (Apocalypse)",
                    "Blast Radius": "Massive Multi-Tile",
                    "Area Effect": "High Kinetic / Thermal Flux"
            },
            "abilities": [
                    "Chaos Meteor: Devastates structures and disintegrates living entities.",
                    "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
            ],
            "lore": "Prismatic meteor striking with radiant crystals and shockwaves.",
            "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
            "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
            "related": [],
            "toolId": "chaos_meteor",
            "actionLabel": "Use Chaos Meteor"
    },
    "emp_cascade": {
            "id": "emp_cascade",
            "category": "Destruction & Chaos",
            "title": "EMP Cascade",
            "subtitle": "Destruction & Chaos Entry",
            "tags": [
                    "emp_cascade",
                    "destruction",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Destruction & Chaos",
                    "Tool ID": "emp_cascade",
                    "Damage Tier": "Catastrophic (Apocalypse)",
                    "Blast Radius": "Massive Multi-Tile",
                    "Area Effect": "High Kinetic / Thermal Flux"
            },
            "abilities": [
                    "EMP Cascade: Devastates structures and disintegrates living entities.",
                    "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
            ],
            "lore": "Electromagnetic cascade disabling mechs, tanks, and vehicles.",
            "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
            "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
            "related": [],
            "toolId": "emp_cascade",
            "actionLabel": "Use EMP Cascade"
    },
    "apocalypse_bell": {
            "id": "apocalypse_bell",
            "category": "Destruction & Chaos",
            "title": "Apocalypse Bell",
            "subtitle": "Destruction & Chaos Entry",
            "tags": [
                    "apocalypse_bell",
                    "destruction",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Destruction & Chaos",
                    "Tool ID": "apocalypse_bell",
                    "Damage Tier": "Catastrophic (Apocalypse)",
                    "Blast Radius": "Massive Multi-Tile",
                    "Area Effect": "High Kinetic / Thermal Flux"
            },
            "abilities": [
                    "Apocalypse Bell: Devastates structures and disintegrates living entities.",
                    "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
            ],
            "lore": "Resonant sonic shockwave hurling entities away with thunder.",
            "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
            "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
            "related": [],
            "toolId": "apocalypse_bell",
            "actionLabel": "Use Apocalypse Bell"
    },
    "blood_moon": {
            "id": "blood_moon",
            "category": "Nature & Disasters",
            "title": "Blood Moon",
            "subtitle": "Nature & Disasters Entry",
            "tags": [
                    "blood_moon",
                    "nature",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Nature & Disasters",
                    "Tool ID": "blood_moon",
                    "Force Type": "Planetary Weather & Geology",
                    "Atmospheric Impact": "Extreme",
                    "Duration": "Sustained Phenomenon"
            },
            "abilities": [
                    "Blood Moon: Alters global or localized atmospheric and tectonic conditions.",
                    "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
            ],
            "lore": "Crimson lunar eclipse enraging demons, wolves, and undead.",
            "tactics": "Use Blood Moon to reshape biomes, spark organic evolution, or clear drought and stagnation across continents.",
            "counters": "Counter with opposite weather powers, Divine Panacea, or Climate Stabilizer tools.",
            "related": [],
            "toolId": "blood_moon",
            "actionLabel": "Use Blood Moon"
    },
    "ball_lightning": {
            "id": "ball_lightning",
            "category": "Nature & Disasters",
            "title": "Ball Lightning",
            "subtitle": "Nature & Disasters Entry",
            "tags": [
                    "ball_lightning",
                    "nature",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Nature & Disasters",
                    "Tool ID": "ball_lightning",
                    "Force Type": "Planetary Weather & Geology",
                    "Atmospheric Impact": "Extreme",
                    "Duration": "Sustained Phenomenon"
            },
            "abilities": [
                    "Ball Lightning: Alters global or localized atmospheric and tectonic conditions.",
                    "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
            ],
            "lore": "Floating spherical plasma orbs drifting and discharging sparks.",
            "tactics": "Use Ball Lightning to reshape biomes, spark organic evolution, or clear drought and stagnation across continents.",
            "counters": "Counter with opposite weather powers, Divine Panacea, or Climate Stabilizer tools.",
            "related": [],
            "toolId": "ball_lightning",
            "actionLabel": "Use Ball Lightning"
    },
    "solar_wind": {
            "id": "solar_wind",
            "category": "Nature & Disasters",
            "title": "Solar Wind",
            "subtitle": "Nature & Disasters Entry",
            "tags": [
                    "solar_wind",
                    "nature",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Nature & Disasters",
                    "Tool ID": "solar_wind",
                    "Force Type": "Planetary Weather & Geology",
                    "Atmospheric Impact": "Extreme",
                    "Duration": "Sustained Phenomenon"
            },
            "abilities": [
                    "Solar Wind: Alters global or localized atmospheric and tectonic conditions.",
                    "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
            ],
            "lore": "Cosmic solar storm showering auroral flares and stardust.",
            "tactics": "Use Solar Wind to reshape biomes, spark organic evolution, or clear drought and stagnation across continents.",
            "counters": "Counter with opposite weather powers, Divine Panacea, or Climate Stabilizer tools.",
            "related": [],
            "toolId": "solar_wind",
            "actionLabel": "Use Solar Wind"
    },
    "supercell_cyclone": {
            "id": "supercell_cyclone",
            "category": "Nature & Disasters",
            "title": "Supercell Cyclone",
            "subtitle": "Nature & Disasters Entry",
            "tags": [
                    "supercell_cyclone",
                    "nature",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Nature & Disasters",
                    "Tool ID": "supercell_cyclone",
                    "Force Type": "Planetary Weather & Geology",
                    "Atmospheric Impact": "Extreme",
                    "Duration": "Sustained Phenomenon"
            },
            "abilities": [
                    "Supercell Cyclone: Alters global or localized atmospheric and tectonic conditions.",
                    "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
            ],
            "lore": "Massive rotating thunderstorm with gale winds and tornados.",
            "tactics": "Use Supercell Cyclone to reshape biomes, spark organic evolution, or clear drought and stagnation across continents.",
            "counters": "Counter with opposite weather powers, Divine Panacea, or Climate Stabilizer tools.",
            "related": [],
            "toolId": "supercell_cyclone",
            "actionLabel": "Use Supercell Cyclone"
    },
    "cryo_deluge": {
            "id": "cryo_deluge",
            "category": "Nature & Disasters",
            "title": "Cryo Deluge",
            "subtitle": "Nature & Disasters Entry",
            "tags": [
                    "cryo_deluge",
                    "nature",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Nature & Disasters",
                    "Tool ID": "cryo_deluge",
                    "Force Type": "Planetary Weather & Geology",
                    "Atmospheric Impact": "Extreme",
                    "Duration": "Sustained Phenomenon"
            },
            "abilities": [
                    "Cryo Deluge: Alters global or localized atmospheric and tectonic conditions.",
                    "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
            ],
            "lore": "Arctic deluge rapidly freezing rivers and coastal waters.",
            "tactics": "Use Cryo Deluge to reshape biomes, spark organic evolution, or clear drought and stagnation across continents.",
            "counters": "Counter with opposite weather powers, Divine Panacea, or Climate Stabilizer tools.",
            "related": [],
            "toolId": "cryo_deluge",
            "actionLabel": "Use Cryo Deluge"
    },
    "magma_geyser": {
            "id": "magma_geyser",
            "category": "Nature & Disasters",
            "title": "Magma Geyser",
            "subtitle": "Nature & Disasters Entry",
            "tags": [
                    "magma_geyser",
                    "nature",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Nature & Disasters",
                    "Tool ID": "magma_geyser",
                    "Force Type": "Planetary Weather & Geology",
                    "Atmospheric Impact": "Extreme",
                    "Duration": "Sustained Phenomenon"
            },
            "abilities": [
                    "Magma Geyser: Alters global or localized atmospheric and tectonic conditions.",
                    "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
            ],
            "lore": "Thermal volcanic geyser erupting molten lava into the skies.",
            "tactics": "Use Magma Geyser to reshape biomes, spark organic evolution, or clear drought and stagnation across continents.",
            "counters": "Counter with opposite weather powers, Divine Panacea, or Climate Stabilizer tools.",
            "related": [],
            "toolId": "magma_geyser",
            "actionLabel": "Use Magma Geyser"
    },
    "spore_fog": {
            "id": "spore_fog",
            "category": "Nature & Disasters",
            "title": "Spore Fog",
            "subtitle": "Nature & Disasters Entry",
            "tags": [
                    "spore_fog",
                    "nature",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Nature & Disasters",
                    "Tool ID": "spore_fog",
                    "Force Type": "Planetary Weather & Geology",
                    "Atmospheric Impact": "Extreme",
                    "Duration": "Sustained Phenomenon"
            },
            "abilities": [
                    "Spore Fog: Alters global or localized atmospheric and tectonic conditions.",
                    "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
            ],
            "lore": "Drifting fungal spores sprouting giant mushrooms and mycelium.",
            "tactics": "Use Spore Fog to reshape biomes, spark organic evolution, or clear drought and stagnation across continents.",
            "counters": "Counter with opposite weather powers, Divine Panacea, or Climate Stabilizer tools.",
            "related": [],
            "toolId": "spore_fog",
            "actionLabel": "Use Spore Fog"
    },
    "static_squall": {
            "id": "static_squall",
            "category": "Nature & Disasters",
            "title": "Static Squall",
            "subtitle": "Nature & Disasters Entry",
            "tags": [
                    "static_squall",
                    "nature",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Nature & Disasters",
                    "Tool ID": "static_squall",
                    "Force Type": "Planetary Weather & Geology",
                    "Atmospheric Impact": "Extreme",
                    "Duration": "Sustained Phenomenon"
            },
            "abilities": [
                    "Static Squall: Alters global or localized atmospheric and tectonic conditions.",
                    "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
            ],
            "lore": "High-frequency electrical storm crackling through skies.",
            "tactics": "Use Static Squall to reshape biomes, spark organic evolution, or clear drought and stagnation across continents.",
            "counters": "Counter with opposite weather powers, Divine Panacea, or Climate Stabilizer tools.",
            "related": [],
            "toolId": "static_squall",
            "actionLabel": "Use Static Squall"
    },
    "pyroclastic_cloud": {
            "id": "pyroclastic_cloud",
            "category": "Nature & Disasters",
            "title": "Pyroclastic Cloud",
            "subtitle": "Nature & Disasters Entry",
            "tags": [
                    "pyroclastic_cloud",
                    "nature",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Nature & Disasters",
                    "Tool ID": "pyroclastic_cloud",
                    "Force Type": "Planetary Weather & Geology",
                    "Atmospheric Impact": "Extreme",
                    "Duration": "Sustained Phenomenon"
            },
            "abilities": [
                    "Pyroclastic Cloud: Alters global or localized atmospheric and tectonic conditions.",
                    "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
            ],
            "lore": "Avalanche of superheated ash and suffocating volcanic gases.",
            "tactics": "Use Pyroclastic Cloud to reshape biomes, spark organic evolution, or clear drought and stagnation across continents.",
            "counters": "Counter with opposite weather powers, Divine Panacea, or Climate Stabilizer tools.",
            "related": [],
            "toolId": "pyroclastic_cloud",
            "actionLabel": "Use Pyroclastic Cloud"
    },
    "dust_devil": {
            "id": "dust_devil",
            "category": "Nature & Disasters",
            "title": "Dust Devil",
            "subtitle": "Nature & Disasters Entry",
            "tags": [
                    "dust_devil",
                    "nature",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Nature & Disasters",
                    "Tool ID": "dust_devil",
                    "Force Type": "Planetary Weather & Geology",
                    "Atmospheric Impact": "Extreme",
                    "Duration": "Sustained Phenomenon"
            },
            "abilities": [
                    "Dust Devil: Alters global or localized atmospheric and tectonic conditions.",
                    "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
            ],
            "lore": "Swirling desert dust twister transforming earth into golden sand.",
            "tactics": "Use Dust Devil to reshape biomes, spark organic evolution, or clear drought and stagnation across continents.",
            "counters": "Counter with opposite weather powers, Divine Panacea, or Climate Stabilizer tools.",
            "related": [],
            "toolId": "dust_devil",
            "actionLabel": "Use Dust Devil"
    },
    "magnetic_aurora": {
            "id": "magnetic_aurora",
            "category": "Nature & Disasters",
            "title": "Magnetic Aurora",
            "subtitle": "Nature & Disasters Entry",
            "tags": [
                    "magnetic_aurora",
                    "nature",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Nature & Disasters",
                    "Tool ID": "magnetic_aurora",
                    "Force Type": "Planetary Weather & Geology",
                    "Atmospheric Impact": "Extreme",
                    "Duration": "Sustained Phenomenon"
            },
            "abilities": [
                    "Magnetic Aurora: Alters global or localized atmospheric and tectonic conditions.",
                    "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
            ],
            "lore": "Enchanting magnetic light show restoring life and enforcing peace.",
            "tactics": "Use Magnetic Aurora to reshape biomes, spark organic evolution, or clear drought and stagnation across continents.",
            "counters": "Counter with opposite weather powers, Divine Panacea, or Climate Stabilizer tools.",
            "related": [],
            "toolId": "magnetic_aurora",
            "actionLabel": "Use Magnetic Aurora"
    },
    "hailstorm": {
            "id": "hailstorm",
            "category": "Nature & Disasters",
            "title": "Severe Hailstorm",
            "subtitle": "Nature & Disasters Entry",
            "tags": [
                    "hailstorm",
                    "nature",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Nature & Disasters",
                    "Tool ID": "hailstorm",
                    "Force Type": "Planetary Weather & Geology",
                    "Atmospheric Impact": "Extreme",
                    "Duration": "Sustained Phenomenon"
            },
            "abilities": [
                    "Severe Hailstorm: Alters global or localized atmospheric and tectonic conditions.",
                    "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
            ],
            "lore": "Torrential ice pelt storm chilling terrain.",
            "tactics": "Use Severe Hailstorm to reshape biomes, spark organic evolution, or clear drought and stagnation across continents.",
            "counters": "Counter with opposite weather powers, Divine Panacea, or Climate Stabilizer tools.",
            "related": [],
            "toolId": "hailstorm",
            "actionLabel": "Use Severe Hailstorm"
    },
    "acid_geyser": {
            "id": "acid_geyser",
            "category": "Nature & Disasters",
            "title": "Acid Geyser",
            "subtitle": "Nature & Disasters Entry",
            "tags": [
                    "acid_geyser",
                    "nature",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Nature & Disasters",
                    "Tool ID": "acid_geyser",
                    "Force Type": "Planetary Weather & Geology",
                    "Atmospheric Impact": "Extreme",
                    "Duration": "Sustained Phenomenon"
            },
            "abilities": [
                    "Acid Geyser: Alters global or localized atmospheric and tectonic conditions.",
                    "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
            ],
            "lore": "Pressurized subterranean acid eruption burning surrounding soil.",
            "tactics": "Use Acid Geyser to reshape biomes, spark organic evolution, or clear drought and stagnation across continents.",
            "counters": "Counter with opposite weather powers, Divine Panacea, or Climate Stabilizer tools.",
            "related": [],
            "toolId": "acid_geyser",
            "actionLabel": "Use Acid Geyser"
    },
    "glacial_crevasse": {
            "id": "glacial_crevasse",
            "category": "Nature & Disasters",
            "title": "Glacial Crevasse",
            "subtitle": "Nature & Disasters Entry",
            "tags": [
                    "glacial_crevasse",
                    "nature",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Nature & Disasters",
                    "Tool ID": "glacial_crevasse",
                    "Force Type": "Planetary Weather & Geology",
                    "Atmospheric Impact": "Extreme",
                    "Duration": "Sustained Phenomenon"
            },
            "abilities": [
                    "Glacial Crevasse: Alters global or localized atmospheric and tectonic conditions.",
                    "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
            ],
            "lore": "Splits open a jagged icy chasm with permafrost edges.",
            "tactics": "Use Glacial Crevasse to reshape biomes, spark organic evolution, or clear drought and stagnation across continents.",
            "counters": "Counter with opposite weather powers, Divine Panacea, or Climate Stabilizer tools.",
            "related": [],
            "toolId": "glacial_crevasse",
            "actionLabel": "Use Glacial Crevasse"
    },
    "ozone_tear": {
            "id": "ozone_tear",
            "category": "Nature & Disasters",
            "title": "Ozone Tear",
            "subtitle": "Nature & Disasters Entry",
            "tags": [
                    "ozone_tear",
                    "nature",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Nature & Disasters",
                    "Tool ID": "ozone_tear",
                    "Force Type": "Planetary Weather & Geology",
                    "Atmospheric Impact": "Extreme",
                    "Duration": "Sustained Phenomenon"
            },
            "abilities": [
                    "Ozone Tear: Alters global or localized atmospheric and tectonic conditions.",
                    "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
            ],
            "lore": "Atmospheric rupture allowing scorching ultraviolet rays through.",
            "tactics": "Use Ozone Tear to reshape biomes, spark organic evolution, or clear drought and stagnation across continents.",
            "counters": "Counter with opposite weather powers, Divine Panacea, or Climate Stabilizer tools.",
            "related": [],
            "toolId": "ozone_tear",
            "actionLabel": "Use Ozone Tear"
    },
    "cosmic_radiation": {
            "id": "cosmic_radiation",
            "category": "Nature & Disasters",
            "title": "Cosmic Radiation",
            "subtitle": "Nature & Disasters Entry",
            "tags": [
                    "cosmic_radiation",
                    "nature",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Nature & Disasters",
                    "Tool ID": "cosmic_radiation",
                    "Force Type": "Planetary Weather & Geology",
                    "Atmospheric Impact": "Extreme",
                    "Duration": "Sustained Phenomenon"
            },
            "abilities": [
                    "Cosmic Radiation: Alters global or localized atmospheric and tectonic conditions.",
                    "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
            ],
            "lore": "Infusion of celestial rays mutating and empowering organisms.",
            "tactics": "Use Cosmic Radiation to reshape biomes, spark organic evolution, or clear drought and stagnation across continents.",
            "counters": "Counter with opposite weather powers, Divine Panacea, or Climate Stabilizer tools.",
            "related": [],
            "toolId": "cosmic_radiation",
            "actionLabel": "Use Cosmic Radiation"
    },
    "maelstrom_vortex": {
            "id": "maelstrom_vortex",
            "category": "Nature & Disasters",
            "title": "Maelstrom Vortex",
            "subtitle": "Nature & Disasters Entry",
            "tags": [
                    "maelstrom_vortex",
                    "nature",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Nature & Disasters",
                    "Tool ID": "maelstrom_vortex",
                    "Force Type": "Planetary Weather & Geology",
                    "Atmospheric Impact": "Extreme",
                    "Duration": "Sustained Phenomenon"
            },
            "abilities": [
                    "Maelstrom Vortex: Alters global or localized atmospheric and tectonic conditions.",
                    "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
            ],
            "lore": "Violent oceanic whirlpool pulling waterborne entities down.",
            "tactics": "Use Maelstrom Vortex to reshape biomes, spark organic evolution, or clear drought and stagnation across continents.",
            "counters": "Counter with opposite weather powers, Divine Panacea, or Climate Stabilizer tools.",
            "related": [],
            "toolId": "maelstrom_vortex",
            "actionLabel": "Use Maelstrom Vortex"
    },
    "swamp_gas_eruption": {
            "id": "swamp_gas_eruption",
            "category": "Nature & Disasters",
            "title": "Swamp Gas Eruption",
            "subtitle": "Nature & Disasters Entry",
            "tags": [
                    "swamp_gas_eruption",
                    "nature",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Nature & Disasters",
                    "Tool ID": "swamp_gas_eruption",
                    "Force Type": "Planetary Weather & Geology",
                    "Atmospheric Impact": "Extreme",
                    "Duration": "Sustained Phenomenon"
            },
            "abilities": [
                    "Swamp Gas Eruption: Alters global or localized atmospheric and tectonic conditions.",
                    "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
            ],
            "lore": "Volatile subterranean marsh gas bubbling into poison swamp.",
            "tactics": "Use Swamp Gas Eruption to reshape biomes, spark organic evolution, or clear drought and stagnation across continents.",
            "counters": "Counter with opposite weather powers, Divine Panacea, or Climate Stabilizer tools.",
            "related": [],
            "toolId": "swamp_gas_eruption",
            "actionLabel": "Use Swamp Gas Eruption"
    },
    "radiant_sunshower": {
            "id": "radiant_sunshower",
            "category": "Nature & Disasters",
            "title": "Radiant Sunshower",
            "subtitle": "Nature & Disasters Entry",
            "tags": [
                    "radiant_sunshower",
                    "nature",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Nature & Disasters",
                    "Tool ID": "radiant_sunshower",
                    "Force Type": "Planetary Weather & Geology",
                    "Atmospheric Impact": "Extreme",
                    "Duration": "Sustained Phenomenon"
            },
            "abilities": [
                    "Radiant Sunshower: Alters global or localized atmospheric and tectonic conditions.",
                    "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
            ],
            "lore": "Warm sunshower sprouting vibrant lush wildflower meadows.",
            "tactics": "Use Radiant Sunshower to reshape biomes, spark organic evolution, or clear drought and stagnation across continents.",
            "counters": "Counter with opposite weather powers, Divine Panacea, or Climate Stabilizer tools.",
            "related": [],
            "toolId": "radiant_sunshower",
            "actionLabel": "Use Radiant Sunshower"
    },
    "great_deluge": {
            "id": "great_deluge",
            "category": "Nature & Disasters",
            "title": "Great Deluge",
            "subtitle": "Nature & Disasters Entry",
            "tags": [
                    "great_deluge",
                    "nature",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Nature & Disasters",
                    "Tool ID": "great_deluge",
                    "Force Type": "Planetary Weather & Geology",
                    "Atmospheric Impact": "Extreme",
                    "Duration": "Sustained Phenomenon"
            },
            "abilities": [
                    "Great Deluge: Alters global or localized atmospheric and tectonic conditions.",
                    "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
            ],
            "lore": "Biblical ocean rainstorm turning desert sands into lakes.",
            "tactics": "Use Great Deluge to reshape biomes, spark organic evolution, or clear drought and stagnation across continents.",
            "counters": "Counter with opposite weather powers, Divine Panacea, or Climate Stabilizer tools.",
            "related": [],
            "toolId": "great_deluge",
            "actionLabel": "Use Great Deluge"
    },
    "ash_wasteland": {
            "id": "ash_wasteland",
            "category": "Landscaping & Biomes",
            "title": "Ash Wasteland",
            "subtitle": "Landscaping & Biomes Entry",
            "tags": [
                    "ash_wasteland",
                    "landscaping",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Landscaping & Biomes",
                    "Tool ID": "ash_wasteland",
                    "Material Type": "Geological / Ecological Substrate",
                    "Hardness": "High",
                    "Flammability": "Variable"
            },
            "abilities": [
                    "Terrain Substrate: Serves as foundation for kingdoms, flora, and mineral harvesting.",
                    "Elemental Interaction: Reacts dynamically with water, lava, acid, and temperature."
            ],
            "lore": "Desolate gray volcanic ash flats from cataclysms.",
            "tactics": "Paint Ash Wasteland to establish specialized resource biomes or defensive natural barriers around allied settlements.",
            "counters": "Can be excavated, blown away with high explosives, or terraformed with brushes.",
            "related": [],
            "toolId": "ash_wasteland",
            "actionLabel": "Paint Ash Wasteland"
    },
    "cursed_marsh": {
            "id": "cursed_marsh",
            "category": "Landscaping & Biomes",
            "title": "Cursed Marsh",
            "subtitle": "Landscaping & Biomes Entry",
            "tags": [
                    "cursed_marsh",
                    "landscaping",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Landscaping & Biomes",
                    "Tool ID": "cursed_marsh",
                    "Material Type": "Geological / Ecological Substrate",
                    "Hardness": "High",
                    "Flammability": "Variable"
            },
            "abilities": [
                    "Terrain Substrate: Serves as foundation for kingdoms, flora, and mineral harvesting.",
                    "Elemental Interaction: Reacts dynamically with water, lava, acid, and temperature."
            ],
            "lore": "Dark necrotic swampland draining life from passersby.",
            "tactics": "Paint Cursed Marsh to establish specialized resource biomes or defensive natural barriers around allied settlements.",
            "counters": "Can be excavated, blown away with high explosives, or terraformed with brushes.",
            "related": [],
            "toolId": "cursed_marsh",
            "actionLabel": "Paint Cursed Marsh"
    },
    "bioluminescent_coral": {
            "id": "bioluminescent_coral",
            "category": "Landscaping & Biomes",
            "title": "Bioluminescent Coral",
            "subtitle": "Landscaping & Biomes Entry",
            "tags": [
                    "bioluminescent_coral",
                    "landscaping",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Landscaping & Biomes",
                    "Tool ID": "bioluminescent_coral",
                    "Material Type": "Geological / Ecological Substrate",
                    "Hardness": "High",
                    "Flammability": "Variable"
            },
            "abilities": [
                    "Terrain Substrate: Serves as foundation for kingdoms, flora, and mineral harvesting.",
                    "Elemental Interaction: Reacts dynamically with water, lava, acid, and temperature."
            ],
            "lore": "Vibrant glowing oceanic reefs radiating aqua and pink light.",
            "tactics": "Paint Bioluminescent Coral to establish specialized resource biomes or defensive natural barriers around allied settlements.",
            "counters": "Can be excavated, blown away with high explosives, or terraformed with brushes.",
            "related": [],
            "toolId": "bioluminescent_coral",
            "actionLabel": "Paint Bioluminescent Coral"
    },
    "petrified_wood": {
            "id": "petrified_wood",
            "category": "Landscaping & Biomes",
            "title": "Petrified Wood",
            "subtitle": "Landscaping & Biomes Entry",
            "tags": [
                    "petrified_wood",
                    "landscaping",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Landscaping & Biomes",
                    "Tool ID": "petrified_wood",
                    "Material Type": "Geological / Ecological Substrate",
                    "Hardness": "High",
                    "Flammability": "Variable"
            },
            "abilities": [
                    "Terrain Substrate: Serves as foundation for kingdoms, flora, and mineral harvesting.",
                    "Elemental Interaction: Reacts dynamically with water, lava, acid, and temperature."
            ],
            "lore": "Ancient fossilized timber hard as stone and mineral.",
            "tactics": "Paint Petrified Wood to establish specialized resource biomes or defensive natural barriers around allied settlements.",
            "counters": "Can be excavated, blown away with high explosives, or terraformed with brushes.",
            "related": [],
            "toolId": "petrified_wood",
            "actionLabel": "Paint Petrified Wood"
    },
    "golden_sand": {
            "id": "golden_sand",
            "category": "Landscaping & Biomes",
            "title": "Golden Sand",
            "subtitle": "Landscaping & Biomes Entry",
            "tags": [
                    "golden_sand",
                    "landscaping",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Landscaping & Biomes",
                    "Tool ID": "golden_sand",
                    "Material Type": "Geological / Ecological Substrate",
                    "Hardness": "High",
                    "Flammability": "Variable"
            },
            "abilities": [
                    "Terrain Substrate: Serves as foundation for kingdoms, flora, and mineral harvesting.",
                    "Elemental Interaction: Reacts dynamically with water, lava, acid, and temperature."
            ],
            "lore": "Shimmering desert sand dunes infused with mineral dust.",
            "tactics": "Paint Golden Sand to establish specialized resource biomes or defensive natural barriers around allied settlements.",
            "counters": "Can be excavated, blown away with high explosives, or terraformed with brushes.",
            "related": [],
            "toolId": "golden_sand",
            "actionLabel": "Paint Golden Sand"
    },
    "obsidian_spire": {
            "id": "obsidian_spire",
            "category": "Landscaping & Biomes",
            "title": "Obsidian Spire",
            "subtitle": "Landscaping & Biomes Entry",
            "tags": [
                    "obsidian_spire",
                    "landscaping",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Landscaping & Biomes",
                    "Tool ID": "obsidian_spire",
                    "Material Type": "Geological / Ecological Substrate",
                    "Hardness": "High",
                    "Flammability": "Variable"
            },
            "abilities": [
                    "Terrain Substrate: Serves as foundation for kingdoms, flora, and mineral harvesting.",
                    "Elemental Interaction: Reacts dynamically with water, lava, acid, and temperature."
            ],
            "lore": "Jagged volcanic glass monoliths projecting upward.",
            "tactics": "Paint Obsidian Spire to establish specialized resource biomes or defensive natural barriers around allied settlements.",
            "counters": "Can be excavated, blown away with high explosives, or terraformed with brushes.",
            "related": [],
            "toolId": "obsidian_spire",
            "actionLabel": "Paint Obsidian Spire"
    },
    "glacial_permafrost": {
            "id": "glacial_permafrost",
            "category": "Landscaping & Biomes",
            "title": "Glacial Permafrost",
            "subtitle": "Landscaping & Biomes Entry",
            "tags": [
                    "glacial_permafrost",
                    "landscaping",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Landscaping & Biomes",
                    "Tool ID": "glacial_permafrost",
                    "Material Type": "Geological / Ecological Substrate",
                    "Hardness": "High",
                    "Flammability": "Variable"
            },
            "abilities": [
                    "Terrain Substrate: Serves as foundation for kingdoms, flora, and mineral harvesting.",
                    "Elemental Interaction: Reacts dynamically with water, lava, acid, and temperature."
            ],
            "lore": "Hard-packed prehistoric ice and frozen loam.",
            "tactics": "Paint Glacial Permafrost to establish specialized resource biomes or defensive natural barriers around allied settlements.",
            "counters": "Can be excavated, blown away with high explosives, or terraformed with brushes.",
            "related": [],
            "toolId": "glacial_permafrost",
            "actionLabel": "Paint Glacial Permafrost"
    },
    "radioactive_waste": {
            "id": "radioactive_waste",
            "category": "Landscaping & Biomes",
            "title": "Radioactive Slag",
            "subtitle": "Landscaping & Biomes Entry",
            "tags": [
                    "radioactive_waste",
                    "landscaping",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Landscaping & Biomes",
                    "Tool ID": "radioactive_waste",
                    "Material Type": "Geological / Ecological Substrate",
                    "Hardness": "High",
                    "Flammability": "Variable"
            },
            "abilities": [
                    "Terrain Substrate: Serves as foundation for kingdoms, flora, and mineral harvesting.",
                    "Elemental Interaction: Reacts dynamically with water, lava, acid, and temperature."
            ],
            "lore": "Irradiated glowing green nuclear fallout sediment.",
            "tactics": "Paint Radioactive Slag to establish specialized resource biomes or defensive natural barriers around allied settlements.",
            "counters": "Can be excavated, blown away with high explosives, or terraformed with brushes.",
            "related": [],
            "toolId": "radioactive_waste",
            "actionLabel": "Paint Radioactive Slag"
    },
    "aether_soil": {
            "id": "aether_soil",
            "category": "Landscaping & Biomes",
            "title": "Aether Soil",
            "subtitle": "Landscaping & Biomes Entry",
            "tags": [
                    "aether_soil",
                    "landscaping",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Landscaping & Biomes",
                    "Tool ID": "aether_soil",
                    "Material Type": "Geological / Ecological Substrate",
                    "Hardness": "High",
                    "Flammability": "Variable"
            },
            "abilities": [
                    "Terrain Substrate: Serves as foundation for kingdoms, flora, and mineral harvesting.",
                    "Elemental Interaction: Reacts dynamically with water, lava, acid, and temperature."
            ],
            "lore": "Celestial enchanted earth nourishing glowing flora.",
            "tactics": "Paint Aether Soil to establish specialized resource biomes or defensive natural barriers around allied settlements.",
            "counters": "Can be excavated, blown away with high explosives, or terraformed with brushes.",
            "related": [],
            "toolId": "aether_soil",
            "actionLabel": "Paint Aether Soil"
    },
    "deep_trench": {
            "id": "deep_trench",
            "category": "Landscaping & Biomes",
            "title": "Deep Abyssal Trench",
            "subtitle": "Landscaping & Biomes Entry",
            "tags": [
                    "deep_trench",
                    "landscaping",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Landscaping & Biomes",
                    "Tool ID": "deep_trench",
                    "Material Type": "Geological / Ecological Substrate",
                    "Hardness": "High",
                    "Flammability": "Variable"
            },
            "abilities": [
                    "Terrain Substrate: Serves as foundation for kingdoms, flora, and mineral harvesting.",
                    "Elemental Interaction: Reacts dynamically with water, lava, acid, and temperature."
            ],
            "lore": "Bottomless ocean chasm plunging into utter darkness.",
            "tactics": "Paint Deep Abyssal Trench to establish specialized resource biomes or defensive natural barriers around allied settlements.",
            "counters": "Can be excavated, blown away with high explosives, or terraformed with brushes.",
            "related": [],
            "toolId": "deep_trench",
            "actionLabel": "Paint Deep Abyssal Trench"
    },
    "basalt_mesa": {
            "id": "basalt_mesa",
            "category": "Landscaping & Biomes",
            "title": "Basalt Mesa",
            "subtitle": "Landscaping & Biomes Entry",
            "tags": [
                    "basalt_mesa",
                    "landscaping",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Landscaping & Biomes",
                    "Tool ID": "basalt_mesa",
                    "Material Type": "Geological / Ecological Substrate",
                    "Hardness": "High",
                    "Flammability": "Variable"
            },
            "abilities": [
                    "Terrain Substrate: Serves as foundation for kingdoms, flora, and mineral harvesting.",
                    "Elemental Interaction: Reacts dynamically with water, lava, acid, and temperature."
            ],
            "lore": "Steep-sided volcanic basalt rock plateaus.",
            "tactics": "Paint Basalt Mesa to establish specialized resource biomes or defensive natural barriers around allied settlements.",
            "counters": "Can be excavated, blown away with high explosives, or terraformed with brushes.",
            "related": [],
            "toolId": "basalt_mesa",
            "actionLabel": "Paint Basalt Mesa"
    },
    "sacred_soil": {
            "id": "sacred_soil",
            "category": "Landscaping & Biomes",
            "title": "Sacred Soil",
            "subtitle": "Landscaping & Biomes Entry",
            "tags": [
                    "sacred_soil",
                    "landscaping",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Landscaping & Biomes",
                    "Tool ID": "sacred_soil",
                    "Material Type": "Geological / Ecological Substrate",
                    "Hardness": "High",
                    "Flammability": "Variable"
            },
            "abilities": [
                    "Terrain Substrate: Serves as foundation for kingdoms, flora, and mineral harvesting.",
                    "Elemental Interaction: Reacts dynamically with water, lava, acid, and temperature."
            ],
            "lore": "Blessed holy earth preventing corruption and blight.",
            "tactics": "Paint Sacred Soil to establish specialized resource biomes or defensive natural barriers around allied settlements.",
            "counters": "Can be excavated, blown away with high explosives, or terraformed with brushes.",
            "related": [],
            "toolId": "sacred_soil",
            "actionLabel": "Paint Sacred Soil"
    },
    "crystal_geode": {
            "id": "crystal_geode",
            "category": "Landscaping & Biomes",
            "title": "Crystal Geode",
            "subtitle": "Landscaping & Biomes Entry",
            "tags": [
                    "crystal_geode",
                    "landscaping",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Landscaping & Biomes",
                    "Tool ID": "crystal_geode",
                    "Material Type": "Geological / Ecological Substrate",
                    "Hardness": "High",
                    "Flammability": "Variable"
            },
            "abilities": [
                    "Terrain Substrate: Serves as foundation for kingdoms, flora, and mineral harvesting.",
                    "Elemental Interaction: Reacts dynamically with water, lava, acid, and temperature."
            ],
            "lore": "Prismatic gemstone bedrock sparkling with multi-colored facets.",
            "tactics": "Paint Crystal Geode to establish specialized resource biomes or defensive natural barriers around allied settlements.",
            "counters": "Can be excavated, blown away with high explosives, or terraformed with brushes.",
            "related": [],
            "toolId": "crystal_geode",
            "actionLabel": "Paint Crystal Geode"
    },
    "sunbaked_clay": {
            "id": "sunbaked_clay",
            "category": "Landscaping & Biomes",
            "title": "Sunbaked Clay",
            "subtitle": "Landscaping & Biomes Entry",
            "tags": [
                    "sunbaked_clay",
                    "landscaping",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Landscaping & Biomes",
                    "Tool ID": "sunbaked_clay",
                    "Material Type": "Geological / Ecological Substrate",
                    "Hardness": "High",
                    "Flammability": "Variable"
            },
            "abilities": [
                    "Terrain Substrate: Serves as foundation for kingdoms, flora, and mineral harvesting.",
                    "Elemental Interaction: Reacts dynamically with water, lava, acid, and temperature."
            ],
            "lore": "Terracotta clay plains hardened under intense sunlight.",
            "tactics": "Paint Sunbaked Clay to establish specialized resource biomes or defensive natural barriers around allied settlements.",
            "counters": "Can be excavated, blown away with high explosives, or terraformed with brushes.",
            "related": [],
            "toolId": "sunbaked_clay",
            "actionLabel": "Paint Sunbaked Clay"
    },
    "toxic_slime": {
            "id": "toxic_slime",
            "category": "Landscaping & Biomes",
            "title": "Toxic Slime",
            "subtitle": "Landscaping & Biomes Entry",
            "tags": [
                    "toxic_slime",
                    "landscaping",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Landscaping & Biomes",
                    "Tool ID": "toxic_slime",
                    "Material Type": "Geological / Ecological Substrate",
                    "Hardness": "High",
                    "Flammability": "Variable"
            },
            "abilities": [
                    "Terrain Substrate: Serves as foundation for kingdoms, flora, and mineral harvesting.",
                    "Elemental Interaction: Reacts dynamically with water, lava, acid, and temperature."
            ],
            "lore": "Bubbling caustic green ooze melting non-native biology.",
            "tactics": "Paint Toxic Slime to establish specialized resource biomes or defensive natural barriers around allied settlements.",
            "counters": "Can be excavated, blown away with high explosives, or terraformed with brushes.",
            "related": [],
            "toolId": "toxic_slime",
            "actionLabel": "Paint Toxic Slime"
    },
    "living_vines": {
            "id": "living_vines",
            "category": "Landscaping & Biomes",
            "title": "Living Vines",
            "subtitle": "Landscaping & Biomes Entry",
            "tags": [
                    "living_vines",
                    "landscaping",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Landscaping & Biomes",
                    "Tool ID": "living_vines",
                    "Material Type": "Geological / Ecological Substrate",
                    "Hardness": "High",
                    "Flammability": "Variable"
            },
            "abilities": [
                    "Terrain Substrate: Serves as foundation for kingdoms, flora, and mineral harvesting.",
                    "Elemental Interaction: Reacts dynamically with water, lava, acid, and temperature."
            ],
            "lore": "Sentient tangled jungle creepers spreading across surfaces.",
            "tactics": "Paint Living Vines to establish specialized resource biomes or defensive natural barriers around allied settlements.",
            "counters": "Can be excavated, blown away with high explosives, or terraformed with brushes.",
            "related": [],
            "toolId": "living_vines",
            "actionLabel": "Paint Living Vines"
    },
    "star_metal_ore": {
            "id": "star_metal_ore",
            "category": "Landscaping & Biomes",
            "title": "Star Metal Ore",
            "subtitle": "Landscaping & Biomes Entry",
            "tags": [
                    "star_metal_ore",
                    "landscaping",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Landscaping & Biomes",
                    "Tool ID": "star_metal_ore",
                    "Material Type": "Geological / Ecological Substrate",
                    "Hardness": "High",
                    "Flammability": "Variable"
            },
            "abilities": [
                    "Terrain Substrate: Serves as foundation for kingdoms, flora, and mineral harvesting.",
                    "Elemental Interaction: Reacts dynamically with water, lava, acid, and temperature."
            ],
            "lore": "Fallen meteoric ore veins containing indestructible celestial alloys.",
            "tactics": "Paint Star Metal Ore to establish specialized resource biomes or defensive natural barriers around allied settlements.",
            "counters": "Can be excavated, blown away with high explosives, or terraformed with brushes.",
            "related": [],
            "toolId": "star_metal_ore",
            "actionLabel": "Paint Star Metal Ore"
    },
    "floating_rock": {
            "id": "floating_rock",
            "category": "Landscaping & Biomes",
            "title": "Aether Floating Rock",
            "subtitle": "Landscaping & Biomes Entry",
            "tags": [
                    "floating_rock",
                    "landscaping",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Landscaping & Biomes",
                    "Tool ID": "floating_rock",
                    "Material Type": "Geological / Ecological Substrate",
                    "Hardness": "High",
                    "Flammability": "Variable"
            },
            "abilities": [
                    "Terrain Substrate: Serves as foundation for kingdoms, flora, and mineral harvesting.",
                    "Elemental Interaction: Reacts dynamically with water, lava, acid, and temperature."
            ],
            "lore": "Anti-gravity floating islands levitating in the air.",
            "tactics": "Paint Aether Floating Rock to establish specialized resource biomes or defensive natural barriers around allied settlements.",
            "counters": "Can be excavated, blown away with high explosives, or terraformed with brushes.",
            "related": [],
            "toolId": "floating_rock",
            "actionLabel": "Paint Aether Floating Rock"
    },
    "magma_fissure": {
            "id": "magma_fissure",
            "category": "Landscaping & Biomes",
            "title": "Magma Fissure",
            "subtitle": "Landscaping & Biomes Entry",
            "tags": [
                    "magma_fissure",
                    "landscaping",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Landscaping & Biomes",
                    "Tool ID": "magma_fissure",
                    "Material Type": "Geological / Ecological Substrate",
                    "Hardness": "High",
                    "Flammability": "Variable"
            },
            "abilities": [
                    "Terrain Substrate: Serves as foundation for kingdoms, flora, and mineral harvesting.",
                    "Elemental Interaction: Reacts dynamically with water, lava, acid, and temperature."
            ],
            "lore": "Deep tectonic faultline venting molten magma.",
            "tactics": "Paint Magma Fissure to establish specialized resource biomes or defensive natural barriers around allied settlements.",
            "counters": "Can be excavated, blown away with high explosives, or terraformed with brushes.",
            "related": [],
            "toolId": "magma_fissure",
            "actionLabel": "Paint Magma Fissure"
    },
    "lush_meadow": {
            "id": "lush_meadow",
            "category": "Landscaping & Biomes",
            "title": "Lush Meadow",
            "subtitle": "Landscaping & Biomes Entry",
            "tags": [
                    "lush_meadow",
                    "landscaping",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Landscaping & Biomes",
                    "Tool ID": "lush_meadow",
                    "Material Type": "Geological / Ecological Substrate",
                    "Hardness": "High",
                    "Flammability": "Variable"
            },
            "abilities": [
                    "Terrain Substrate: Serves as foundation for kingdoms, flora, and mineral harvesting.",
                    "Elemental Interaction: Reacts dynamically with water, lava, acid, and temperature."
            ],
            "lore": "Flowering wildflower meadows teeming with butterflies.",
            "tactics": "Paint Lush Meadow to establish specialized resource biomes or defensive natural barriers around allied settlements.",
            "counters": "Can be excavated, blown away with high explosives, or terraformed with brushes.",
            "related": [],
            "toolId": "lush_meadow",
            "actionLabel": "Paint Lush Meadow"
    },
    "equip_void_halberd": {
            "id": "equip_void_halberd",
            "category": "Powers & Weapons",
            "title": "Equip: Void Halberd",
            "subtitle": "Powers & Weapons Entry",
            "tags": [
                    "equip_void_halberd",
                    "powers",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Powers & Weapons",
                    "Tool ID": "equip_void_halberd",
                    "Item Type": "Legendary Weapon",
                    "Combat Role": "Offensive / Tactical"
            },
            "abilities": [
                    "Weapon Equip: Arms possessed creatures or highlighted warriors with specialized projectile and melee strikes.",
                    "Specialized Attack: Delivers high critical damage and elemental projectile bursts."
            ],
            "lore": "Arm creature with an abyssal polearm cleaving dark energy (+45 Atk).",
            "tactics": "Equip onto heroes, champions, or your possessed avatar to turn the tide of kingdom wars.",
            "counters": "Disarm with Holy Light, defeat the wielder in combat, or strike from outside weapon range.",
            "related": [],
            "toolId": "equip_void_halberd",
            "actionLabel": "Equip Equip: Void Halberd"
    },
    "equip_frost_scythe": {
            "id": "equip_frost_scythe",
            "category": "Powers & Weapons",
            "title": "Equip: Frost Scythe",
            "subtitle": "Powers & Weapons Entry",
            "tags": [
                    "equip_frost_scythe",
                    "powers",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Powers & Weapons",
                    "Tool ID": "equip_frost_scythe",
                    "Item Type": "Legendary Weapon",
                    "Combat Role": "Offensive / Tactical"
            },
            "abilities": [
                    "Weapon Equip: Arms possessed creatures or highlighted warriors with specialized projectile and melee strikes.",
                    "Specialized Attack: Delivers high critical damage and elemental projectile bursts."
            ],
            "lore": "Arm creature with a glacial crescent scythe that freezes foes (+35 Atk).",
            "tactics": "Equip onto heroes, champions, or your possessed avatar to turn the tide of kingdom wars.",
            "counters": "Disarm with Holy Light, defeat the wielder in combat, or strike from outside weapon range.",
            "related": [],
            "toolId": "equip_frost_scythe",
            "actionLabel": "Equip Equip: Frost Scythe"
    },
    "equip_plasma_cannon": {
            "id": "equip_plasma_cannon",
            "category": "Powers & Weapons",
            "title": "Equip: Heavy Plasma Cannon",
            "subtitle": "Powers & Weapons Entry",
            "tags": [
                    "equip_plasma_cannon",
                    "powers",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Powers & Weapons",
                    "Tool ID": "equip_plasma_cannon",
                    "Item Type": "Legendary Weapon",
                    "Combat Role": "Offensive / Tactical"
            },
            "abilities": [
                    "Weapon Equip: Arms possessed creatures or highlighted warriors with specialized projectile and melee strikes.",
                    "Specialized Attack: Delivers high critical damage and elemental projectile bursts."
            ],
            "lore": "Arm creature with shoulder-mounted heavy plasma artillery (+50 Atk).",
            "tactics": "Equip onto heroes, champions, or your possessed avatar to turn the tide of kingdom wars.",
            "counters": "Disarm with Holy Light, defeat the wielder in combat, or strike from outside weapon range.",
            "related": [],
            "toolId": "equip_plasma_cannon",
            "actionLabel": "Equip Equip: Heavy Plasma Cannon"
    },
    "equip_arcane_crossbow": {
            "id": "equip_arcane_crossbow",
            "category": "Powers & Weapons",
            "title": "Equip: Arcane Crossbow",
            "subtitle": "Powers & Weapons Entry",
            "tags": [
                    "equip_arcane_crossbow",
                    "powers",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Powers & Weapons",
                    "Tool ID": "equip_arcane_crossbow",
                    "Item Type": "Legendary Weapon",
                    "Combat Role": "Offensive / Tactical"
            },
            "abilities": [
                    "Weapon Equip: Arms possessed creatures or highlighted warriors with specialized projectile and melee strikes.",
                    "Specialized Attack: Delivers high critical damage and elemental projectile bursts."
            ],
            "lore": "Arm creature with repeating crossbow firing magic bolts (+30 Atk).",
            "tactics": "Equip onto heroes, champions, or your possessed avatar to turn the tide of kingdom wars.",
            "counters": "Disarm with Holy Light, defeat the wielder in combat, or strike from outside weapon range.",
            "related": [],
            "toolId": "equip_arcane_crossbow",
            "actionLabel": "Equip Equip: Arcane Crossbow"
    },
    "equip_chaos_flail": {
            "id": "equip_chaos_flail",
            "category": "Powers & Weapons",
            "title": "Equip: Chaos Flail",
            "subtitle": "Powers & Weapons Entry",
            "tags": [
                    "equip_chaos_flail",
                    "powers",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Powers & Weapons",
                    "Tool ID": "equip_chaos_flail",
                    "Item Type": "Legendary Weapon",
                    "Combat Role": "Offensive / Tactical"
            },
            "abilities": [
                    "Weapon Equip: Arms possessed creatures or highlighted warriors with specialized projectile and melee strikes.",
                    "Specialized Attack: Delivers high critical damage and elemental projectile bursts."
            ],
            "lore": "Arm creature with spiked flail triggering explosive impacts (+40 Atk).",
            "tactics": "Equip onto heroes, champions, or your possessed avatar to turn the tide of kingdom wars.",
            "counters": "Disarm with Holy Light, defeat the wielder in combat, or strike from outside weapon range.",
            "related": [],
            "toolId": "equip_chaos_flail",
            "actionLabel": "Equip Equip: Chaos Flail"
    },
    "equip_sun_spear": {
            "id": "equip_sun_spear",
            "category": "Powers & Weapons",
            "title": "Equip: Radiant Sun Spear",
            "subtitle": "Powers & Weapons Entry",
            "tags": [
                    "equip_sun_spear",
                    "powers",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Powers & Weapons",
                    "Tool ID": "equip_sun_spear",
                    "Item Type": "Legendary Weapon",
                    "Combat Role": "Offensive / Tactical"
            },
            "abilities": [
                    "Weapon Equip: Arms possessed creatures or highlighted warriors with specialized projectile and melee strikes.",
                    "Specialized Attack: Delivers high critical damage and elemental projectile bursts."
            ],
            "lore": "Arm creature with solar javelin burning with radiant fury (+40 Atk).",
            "tactics": "Equip onto heroes, champions, or your possessed avatar to turn the tide of kingdom wars.",
            "counters": "Disarm with Holy Light, defeat the wielder in combat, or strike from outside weapon range.",
            "related": [],
            "toolId": "equip_sun_spear",
            "actionLabel": "Equip Equip: Radiant Sun Spear"
    },
    "midas_touch": {
            "id": "midas_touch",
            "category": "Powers & Weapons",
            "title": "Midas Touch",
            "subtitle": "Powers & Weapons Entry",
            "tags": [
                    "midas_touch",
                    "powers",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Powers & Weapons",
                    "Tool ID": "midas_touch",
                    "Power Type": "Divine Intervention",
                    "Cosmic Tier": "Empyrean"
            },
            "abilities": [
                    "Miracle Manifestation: Bends physical reality to bestow blessings, shields, or transformations.",
                    "Aether Resonance: Restores harmony and enhances civilization potential."
            ],
            "lore": "Transmutes touched stone and soil into lustrous gold ore veins.",
            "tactics": "Invoke during critical battles or ecological emergencies to protect cherished civilizations.",
            "counters": "Nullified only by antimatter singularities and cosmic decay forces.",
            "related": [],
            "toolId": "midas_touch",
            "actionLabel": "Use Midas Touch"
    },
    "plague_cure": {
            "id": "plague_cure",
            "category": "Powers & Weapons",
            "title": "Divine Panacea",
            "subtitle": "Powers & Weapons Entry",
            "tags": [
                    "plague_cure",
                    "powers",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Powers & Weapons",
                    "Tool ID": "plague_cure",
                    "Power Type": "Divine Intervention",
                    "Cosmic Tier": "Empyrean"
            },
            "abilities": [
                    "Miracle Manifestation: Bends physical reality to bestow blessings, shields, or transformations.",
                    "Aether Resonance: Restores harmony and enhances civilization potential."
            ],
            "lore": "Global healing light cleansing all diseases, infections, and curses.",
            "tactics": "Invoke during critical battles or ecological emergencies to protect cherished civilizations.",
            "counters": "Nullified only by antimatter singularities and cosmic decay forces.",
            "related": [],
            "toolId": "plague_cure",
            "actionLabel": "Use Divine Panacea"
    },
    "chronos_rewind": {
            "id": "chronos_rewind",
            "category": "Powers & Weapons",
            "title": "Chronos Rewind",
            "subtitle": "Powers & Weapons Entry",
            "tags": [
                    "chronos_rewind",
                    "powers",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Powers & Weapons",
                    "Tool ID": "chronos_rewind",
                    "Power Type": "Divine Intervention",
                    "Cosmic Tier": "Empyrean"
            },
            "abilities": [
                    "Miracle Manifestation: Bends physical reality to bestow blessings, shields, or transformations.",
                    "Aether Resonance: Restores harmony and enhances civilization potential."
            ],
            "lore": "Restores lost HP to all living entities and cools down burning terrain.",
            "tactics": "Invoke during critical battles or ecological emergencies to protect cherished civilizations.",
            "counters": "Nullified only by antimatter singularities and cosmic decay forces.",
            "related": [],
            "toolId": "chronos_rewind",
            "actionLabel": "Use Chronos Rewind"
    },
    "mass_polymorph": {
            "id": "mass_polymorph",
            "category": "Powers & Weapons",
            "title": "Mass Polymorph",
            "subtitle": "Powers & Weapons Entry",
            "tags": [
                    "mass_polymorph",
                    "powers",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Powers & Weapons",
                    "Tool ID": "mass_polymorph",
                    "Power Type": "Divine Intervention",
                    "Cosmic Tier": "Empyrean"
            },
            "abilities": [
                    "Miracle Manifestation: Bends physical reality to bestow blessings, shields, or transformations.",
                    "Aether Resonance: Restores harmony and enhances civilization potential."
            ],
            "lore": "Transforms all nearby hostiles and monsters into harmless sheep!",
            "tactics": "Invoke during critical battles or ecological emergencies to protect cherished civilizations.",
            "counters": "Nullified only by antimatter singularities and cosmic decay forces.",
            "related": [],
            "toolId": "mass_polymorph",
            "actionLabel": "Use Mass Polymorph"
    },
    "titan_ascension": {
            "id": "titan_ascension",
            "category": "Powers & Weapons",
            "title": "Titan Ascension",
            "subtitle": "Powers & Weapons Entry",
            "tags": [
                    "titan_ascension",
                    "powers",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Powers & Weapons",
                    "Tool ID": "titan_ascension",
                    "Power Type": "Divine Intervention",
                    "Cosmic Tier": "Empyrean"
            },
            "abilities": [
                    "Miracle Manifestation: Bends physical reality to bestow blessings, shields, or transformations.",
                    "Aether Resonance: Restores harmony and enhances civilization potential."
            ],
            "lore": "Ascends target creature to godlike scale with massive HP and seismic steps.",
            "tactics": "Invoke during critical battles or ecological emergencies to protect cherished civilizations.",
            "counters": "Nullified only by antimatter singularities and cosmic decay forces.",
            "related": [],
            "toolId": "titan_ascension",
            "actionLabel": "Use Titan Ascension"
    },
    "celestial_dome": {
            "id": "celestial_dome",
            "category": "Powers & Weapons",
            "title": "Aegis Sanctuary Dome",
            "subtitle": "Powers & Weapons Entry",
            "tags": [
                    "celestial_dome",
                    "powers",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Powers & Weapons",
                    "Tool ID": "celestial_dome",
                    "Power Type": "Divine Intervention",
                    "Cosmic Tier": "Empyrean"
            },
            "abilities": [
                    "Miracle Manifestation: Bends physical reality to bestow blessings, shields, or transformations.",
                    "Aether Resonance: Restores harmony and enhances civilization potential."
            ],
            "lore": "Deploys a giant luminous protective barrier across the region.",
            "tactics": "Invoke during critical battles or ecological emergencies to protect cherished civilizations.",
            "counters": "Nullified only by antimatter singularities and cosmic decay forces.",
            "related": [],
            "toolId": "celestial_dome",
            "actionLabel": "Use Aegis Sanctuary Dome"
    },
    "aether_fountain": {
            "id": "aether_fountain",
            "category": "Powers & Weapons",
            "title": "Aether Geyser",
            "subtitle": "Powers & Weapons Entry",
            "tags": [
                    "aether_fountain",
                    "powers",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Powers & Weapons",
                    "Tool ID": "aether_fountain",
                    "Power Type": "Divine Intervention",
                    "Cosmic Tier": "Empyrean"
            },
            "abilities": [
                    "Miracle Manifestation: Bends physical reality to bestow blessings, shields, or transformations.",
                    "Aether Resonance: Restores harmony and enhances civilization potential."
            ],
            "lore": "Spouts celestial glowing mana mist healing and invigorating life.",
            "tactics": "Invoke during critical battles or ecological emergencies to protect cherished civilizations.",
            "counters": "Nullified only by antimatter singularities and cosmic decay forces.",
            "related": [],
            "toolId": "aether_fountain",
            "actionLabel": "Use Aether Geyser"
    },
    "seraph_summon": {
            "id": "seraph_summon",
            "category": "Powers & Weapons",
            "title": "Summon Seraph Cohort",
            "subtitle": "Powers & Weapons Entry",
            "tags": [
                    "seraph_summon",
                    "powers",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Powers & Weapons",
                    "Tool ID": "seraph_summon",
                    "Power Type": "Divine Intervention",
                    "Cosmic Tier": "Empyrean"
            },
            "abilities": [
                    "Miracle Manifestation: Bends physical reality to bestow blessings, shields, or transformations.",
                    "Aether Resonance: Restores harmony and enhances civilization potential."
            ],
            "lore": "Summons a phalanx of celestial guardian angels.",
            "tactics": "Invoke during critical battles or ecological emergencies to protect cherished civilizations.",
            "counters": "Nullified only by antimatter singularities and cosmic decay forces.",
            "related": [],
            "toolId": "seraph_summon",
            "actionLabel": "Use Summon Seraph Cohort"
    },
    "gravity_crush": {
            "id": "gravity_crush",
            "category": "Powers & Weapons",
            "title": "Gravitational Singularity",
            "subtitle": "Powers & Weapons Entry",
            "tags": [
                    "gravity_crush",
                    "powers",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Powers & Weapons",
                    "Tool ID": "gravity_crush",
                    "Power Type": "Divine Intervention",
                    "Cosmic Tier": "Empyrean"
            },
            "abilities": [
                    "Miracle Manifestation: Bends physical reality to bestow blessings, shields, or transformations.",
                    "Aether Resonance: Restores harmony and enhances civilization potential."
            ],
            "lore": "Violently slams all airborne and ground creatures into bedrock.",
            "tactics": "Invoke during critical battles or ecological emergencies to protect cherished civilizations.",
            "counters": "Nullified only by antimatter singularities and cosmic decay forces.",
            "related": [],
            "toolId": "gravity_crush",
            "actionLabel": "Use Gravitational Singularity"
    },
    "starlight_beam": {
            "id": "starlight_beam",
            "category": "Powers & Weapons",
            "title": "Starlight Beam",
            "subtitle": "Powers & Weapons Entry",
            "tags": [
                    "starlight_beam",
                    "powers",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Powers & Weapons",
                    "Tool ID": "starlight_beam",
                    "Power Type": "Divine Intervention",
                    "Cosmic Tier": "Empyrean"
            },
            "abilities": [
                    "Miracle Manifestation: Bends physical reality to bestow blessings, shields, or transformations.",
                    "Aether Resonance: Restores harmony and enhances civilization potential."
            ],
            "lore": "Concentrated celestial beam blessing and rejuvenating allies.",
            "tactics": "Invoke during critical battles or ecological emergencies to protect cherished civilizations.",
            "counters": "Nullified only by antimatter singularities and cosmic decay forces.",
            "related": [],
            "toolId": "starlight_beam",
            "actionLabel": "Use Starlight Beam"
    },
    "dragon_tame": {
            "id": "dragon_tame",
            "category": "Powers & Weapons",
            "title": "Dragon Whisper",
            "subtitle": "Powers & Weapons Entry",
            "tags": [
                    "dragon_tame",
                    "powers",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Powers & Weapons",
                    "Tool ID": "dragon_tame",
                    "Power Type": "Divine Intervention",
                    "Cosmic Tier": "Empyrean"
            },
            "abilities": [
                    "Miracle Manifestation: Bends physical reality to bestow blessings, shields, or transformations.",
                    "Aether Resonance: Restores harmony and enhances civilization potential."
            ],
            "lore": "Soothes all dragons and mythical beasts into peaceful kingdom allies.",
            "tactics": "Invoke during critical battles or ecological emergencies to protect cherished civilizations.",
            "counters": "Nullified only by antimatter singularities and cosmic decay forces.",
            "related": [],
            "toolId": "dragon_tame",
            "actionLabel": "Use Dragon Whisper"
    },
    "peace_dove": {
            "id": "peace_dove",
            "category": "Powers & Weapons",
            "title": "Empyrean Dove",
            "subtitle": "Powers & Weapons Entry",
            "tags": [
                    "peace_dove",
                    "powers",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Powers & Weapons",
                    "Tool ID": "peace_dove",
                    "Power Type": "Divine Intervention",
                    "Cosmic Tier": "Empyrean"
            },
            "abilities": [
                    "Miracle Manifestation: Bends physical reality to bestow blessings, shields, or transformations.",
                    "Aether Resonance: Restores harmony and enhances civilization potential."
            ],
            "lore": "Releases sacred doves establishing an enduring world peace pact.",
            "tactics": "Invoke during critical battles or ecological emergencies to protect cherished civilizations.",
            "counters": "Nullified only by antimatter singularities and cosmic decay forces.",
            "related": [],
            "toolId": "peace_dove",
            "actionLabel": "Use Empyrean Dove"
    },
    "abyssal_gate": {
            "id": "abyssal_gate",
            "category": "Powers & Weapons",
            "title": "Abyssal Gate",
            "subtitle": "Powers & Weapons Entry",
            "tags": [
                    "abyssal_gate",
                    "powers",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Powers & Weapons",
                    "Tool ID": "abyssal_gate",
                    "Power Type": "Divine Intervention",
                    "Cosmic Tier": "Empyrean"
            },
            "abilities": [
                    "Miracle Manifestation: Bends physical reality to bestow blessings, shields, or transformations.",
                    "Aether Resonance: Restores harmony and enhances civilization potential."
            ],
            "lore": "Opens an infernal portal summoning allied nether fiends.",
            "tactics": "Invoke during critical battles or ecological emergencies to protect cherished civilizations.",
            "counters": "Nullified only by antimatter singularities and cosmic decay forces.",
            "related": [],
            "toolId": "abyssal_gate",
            "actionLabel": "Use Abyssal Gate"
    },
    "supercharge": {
            "id": "supercharge",
            "category": "Powers & Weapons",
            "title": "Divine Overcharge",
            "subtitle": "Powers & Weapons Entry",
            "tags": [
                    "supercharge",
                    "powers",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Powers & Weapons",
                    "Tool ID": "supercharge",
                    "Power Type": "Divine Intervention",
                    "Cosmic Tier": "Empyrean"
            },
            "abilities": [
                    "Miracle Manifestation: Bends physical reality to bestow blessings, shields, or transformations.",
                    "Aether Resonance: Restores harmony and enhances civilization potential."
            ],
            "lore": "Instantly supercharges all creatures with maximum energy, speed and shields.",
            "tactics": "Invoke during critical battles or ecological emergencies to protect cherished civilizations.",
            "counters": "Nullified only by antimatter singularities and cosmic decay forces.",
            "related": [],
            "toolId": "supercharge",
            "actionLabel": "Use Divine Overcharge"
    },
    "storm_griffin": {
            "id": "storm_griffin",
            "category": "Creatures & Civs",
            "title": "Storm Griffin",
            "subtitle": "Creatures & Civs Entry",
            "tags": [
                    "storm_griffin",
                    "creatures",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Creatures & Civs",
                    "Tool ID": "storm_griffin",
                    "Creature Tier": "Living Entity / Apex Beast",
                    "Controllable": "Fully Possessable (WASD / Space / Q)",
                    "First-Person Mode": "Supported (Press 'F')"
            },
            "abilities": [
                    "Active AI Routine: Roams, hunts, defends territory, and interacts with world fauna.",
                    "Direct Possession: Take direct control with WASD navigation and unique primary/special combat abilities."
            ],
            "lore": "Majestic winged griffin firing lightning arcs and diving.",
            "tactics": "Spawn in compatible biomes or directly possess via Right-Click to experience the world through their eyes in 1st-Person Mode.",
            "counters": "Vulnerable to heavy siege artillery, void weapons, and extreme environmental hazards.",
            "related": [],
            "toolId": "storm_griffin",
            "actionLabel": "Spawn Storm Griffin"
    },
    "abyssal_angler": {
            "id": "abyssal_angler",
            "category": "Creatures & Civs",
            "title": "Abyssal Angler",
            "subtitle": "Creatures & Civs Entry",
            "tags": [
                    "abyssal_angler",
                    "creatures",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Creatures & Civs",
                    "Tool ID": "abyssal_angler",
                    "Creature Tier": "Living Entity / Apex Beast",
                    "Controllable": "Fully Possessable (WASD / Space / Q)",
                    "First-Person Mode": "Supported (Press 'F')"
            },
            "abilities": [
                    "Active AI Routine: Roams, hunts, defends territory, and interacts with world fauna.",
                    "Direct Possession: Take direct control with WASD navigation and unique primary/special combat abilities."
            ],
            "lore": "Deep sea terror with glowing lure and razor maw.",
            "tactics": "Spawn in compatible biomes or directly possess via Right-Click to experience the world through their eyes in 1st-Person Mode.",
            "counters": "Vulnerable to heavy siege artillery, void weapons, and extreme environmental hazards.",
            "related": [],
            "toolId": "abyssal_angler",
            "actionLabel": "Spawn Abyssal Angler"
    },
    "sun_falcon": {
            "id": "sun_falcon",
            "category": "Creatures & Civs",
            "title": "Solar Sun Falcon",
            "subtitle": "Creatures & Civs Entry",
            "tags": [
                    "sun_falcon",
                    "creatures",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Creatures & Civs",
                    "Tool ID": "sun_falcon",
                    "Creature Tier": "Living Entity / Apex Beast",
                    "Controllable": "Fully Possessable (WASD / Space / Q)",
                    "First-Person Mode": "Supported (Press 'F')"
            },
            "abilities": [
                    "Active AI Routine: Roams, hunts, defends territory, and interacts with world fauna.",
                    "Direct Possession: Take direct control with WASD navigation and unique primary/special combat abilities."
            ],
            "lore": "Blazing aerial raptor leaving radiant fire trails.",
            "tactics": "Spawn in compatible biomes or directly possess via Right-Click to experience the world through their eyes in 1st-Person Mode.",
            "counters": "Vulnerable to heavy siege artillery, void weapons, and extreme environmental hazards.",
            "related": [],
            "toolId": "sun_falcon",
            "actionLabel": "Spawn Solar Sun Falcon"
    },
    "magma_salamander": {
            "id": "magma_salamander",
            "category": "Creatures & Civs",
            "title": "Magma Salamander",
            "subtitle": "Creatures & Civs Entry",
            "tags": [
                    "magma_salamander",
                    "creatures",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Creatures & Civs",
                    "Tool ID": "magma_salamander",
                    "Creature Tier": "Living Entity / Apex Beast",
                    "Controllable": "Fully Possessable (WASD / Space / Q)",
                    "First-Person Mode": "Supported (Press 'F')"
            },
            "abilities": [
                    "Active AI Routine: Roams, hunts, defends territory, and interacts with world fauna.",
                    "Direct Possession: Take direct control with WASD navigation and unique primary/special combat abilities."
            ],
            "lore": "Volcanic lizard swimming through molten lava.",
            "tactics": "Spawn in compatible biomes or directly possess via Right-Click to experience the world through their eyes in 1st-Person Mode.",
            "counters": "Vulnerable to heavy siege artillery, void weapons, and extreme environmental hazards.",
            "related": [],
            "toolId": "magma_salamander",
            "actionLabel": "Spawn Magma Salamander"
    },
    "crystal_spider": {
            "id": "crystal_spider",
            "category": "Creatures & Civs",
            "title": "Crystal Arachnid",
            "subtitle": "Creatures & Civs Entry",
            "tags": [
                    "crystal_spider",
                    "creatures",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Creatures & Civs",
                    "Tool ID": "crystal_spider",
                    "Creature Tier": "Living Entity / Apex Beast",
                    "Controllable": "Fully Possessable (WASD / Space / Q)",
                    "First-Person Mode": "Supported (Press 'F')"
            },
            "abilities": [
                    "Active AI Routine: Roams, hunts, defends territory, and interacts with world fauna.",
                    "Direct Possession: Take direct control with WASD navigation and unique primary/special combat abilities."
            ],
            "lore": "Luminescent prismatic spider weaving crystal webs.",
            "tactics": "Spawn in compatible biomes or directly possess via Right-Click to experience the world through their eyes in 1st-Person Mode.",
            "counters": "Vulnerable to heavy siege artillery, void weapons, and extreme environmental hazards.",
            "related": [],
            "toolId": "crystal_spider",
            "actionLabel": "Spawn Crystal Arachnid"
    },
    "void_stalker": {
            "id": "void_stalker",
            "category": "Creatures & Civs",
            "title": "Void Stalker",
            "subtitle": "Creatures & Civs Entry",
            "tags": [
                    "void_stalker",
                    "creatures",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Creatures & Civs",
                    "Tool ID": "void_stalker",
                    "Creature Tier": "Living Entity / Apex Beast",
                    "Controllable": "Fully Possessable (WASD / Space / Q)",
                    "First-Person Mode": "Supported (Press 'F')"
            },
            "abilities": [
                    "Active AI Routine: Roams, hunts, defends territory, and interacts with world fauna.",
                    "Direct Possession: Take direct control with WASD navigation and unique primary/special combat abilities."
            ],
            "lore": "Shadow predator phasing through reality with stealth.",
            "tactics": "Spawn in compatible biomes or directly possess via Right-Click to experience the world through their eyes in 1st-Person Mode.",
            "counters": "Vulnerable to heavy siege artillery, void weapons, and extreme environmental hazards.",
            "related": [],
            "toolId": "void_stalker",
            "actionLabel": "Spawn Void Stalker"
    },
    "thunder_ram": {
            "id": "thunder_ram",
            "category": "Creatures & Civs",
            "title": "Thunder Ram",
            "subtitle": "Creatures & Civs Entry",
            "tags": [
                    "thunder_ram",
                    "creatures",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Creatures & Civs",
                    "Tool ID": "thunder_ram",
                    "Creature Tier": "Living Entity / Apex Beast",
                    "Controllable": "Fully Possessable (WASD / Space / Q)",
                    "First-Person Mode": "Supported (Press 'F')"
            },
            "abilities": [
                    "Active AI Routine: Roams, hunts, defends territory, and interacts with world fauna.",
                    "Direct Possession: Take direct control with WASD navigation and unique primary/special combat abilities."
            ],
            "lore": "Horned storm ram charging with electric concussions.",
            "tactics": "Spawn in compatible biomes or directly possess via Right-Click to experience the world through their eyes in 1st-Person Mode.",
            "counters": "Vulnerable to heavy siege artillery, void weapons, and extreme environmental hazards.",
            "related": [],
            "toolId": "thunder_ram",
            "actionLabel": "Spawn Thunder Ram"
    },
    "sand_wurm": {
            "id": "sand_wurm",
            "category": "Creatures & Civs",
            "title": "Primeval Sand Wurm",
            "subtitle": "Creatures & Civs Entry",
            "tags": [
                    "sand_wurm",
                    "creatures",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Creatures & Civs",
                    "Tool ID": "sand_wurm",
                    "Creature Tier": "Living Entity / Apex Beast",
                    "Controllable": "Fully Possessable (WASD / Space / Q)",
                    "First-Person Mode": "Supported (Press 'F')"
            },
            "abilities": [
                    "Active AI Routine: Roams, hunts, defends territory, and interacts with world fauna.",
                    "Direct Possession: Take direct control with WASD navigation and unique primary/special combat abilities."
            ],
            "lore": "Segmented desert titan devouring dunes.",
            "tactics": "Spawn in compatible biomes or directly possess via Right-Click to experience the world through their eyes in 1st-Person Mode.",
            "counters": "Vulnerable to heavy siege artillery, void weapons, and extreme environmental hazards.",
            "related": [],
            "toolId": "sand_wurm",
            "actionLabel": "Spawn Primeval Sand Wurm"
    },
    "elder_wyrm": {
            "id": "elder_wyrm",
            "category": "Creatures & Civs",
            "title": "Ancient Elder Wyrm",
            "subtitle": "Creatures & Civs Entry",
            "tags": [
                    "elder_wyrm",
                    "creatures",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Creatures & Civs",
                    "Tool ID": "elder_wyrm",
                    "Creature Tier": "Living Entity / Apex Beast",
                    "Controllable": "Fully Possessable (WASD / Space / Q)",
                    "First-Person Mode": "Supported (Press 'F')"
            },
            "abilities": [
                    "Active AI Routine: Roams, hunts, defends territory, and interacts with world fauna.",
                    "Direct Possession: Take direct control with WASD navigation and unique primary/special combat abilities."
            ],
            "lore": "Legendary winged arch-dragon with cosmic beam breath.",
            "tactics": "Spawn in compatible biomes or directly possess via Right-Click to experience the world through their eyes in 1st-Person Mode.",
            "counters": "Vulnerable to heavy siege artillery, void weapons, and extreme environmental hazards.",
            "related": [],
            "toolId": "elder_wyrm",
            "actionLabel": "Spawn Ancient Elder Wyrm"
    },
    "chimera": {
            "id": "chimera",
            "category": "Creatures & Civs",
            "title": "Mythic Chimera",
            "subtitle": "Creatures & Civs Entry",
            "tags": [
                    "chimera",
                    "creatures",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Creatures & Civs",
                    "Tool ID": "chimera",
                    "Creature Tier": "Living Entity / Apex Beast",
                    "Controllable": "Fully Possessable (WASD / Space / Q)",
                    "First-Person Mode": "Supported (Press 'F')"
            },
            "abilities": [
                    "Active AI Routine: Roams, hunts, defends territory, and interacts with world fauna.",
                    "Direct Possession: Take direct control with WASD navigation and unique primary/special combat abilities."
            ],
            "lore": "Lion, goat and snake hybrid breathing venom and fire.",
            "tactics": "Spawn in compatible biomes or directly possess via Right-Click to experience the world through their eyes in 1st-Person Mode.",
            "counters": "Vulnerable to heavy siege artillery, void weapons, and extreme environmental hazards.",
            "related": [],
            "toolId": "chimera",
            "actionLabel": "Spawn Mythic Chimera"
    },
    "basilisk": {
            "id": "basilisk",
            "category": "Creatures & Civs",
            "title": "Petrifying Basilisk",
            "subtitle": "Creatures & Civs Entry",
            "tags": [
                    "basilisk",
                    "creatures",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Creatures & Civs",
                    "Tool ID": "basilisk",
                    "Creature Tier": "Living Entity / Apex Beast",
                    "Controllable": "Fully Possessable (WASD / Space / Q)",
                    "First-Person Mode": "Supported (Press 'F')"
            },
            "abilities": [
                    "Active AI Routine: Roams, hunts, defends territory, and interacts with world fauna.",
                    "Direct Possession: Take direct control with WASD navigation and unique primary/special combat abilities."
            ],
            "lore": "Reptilian beast freezing victims into solid stone.",
            "tactics": "Spawn in compatible biomes or directly possess via Right-Click to experience the world through their eyes in 1st-Person Mode.",
            "counters": "Vulnerable to heavy siege artillery, void weapons, and extreme environmental hazards.",
            "related": [],
            "toolId": "basilisk",
            "actionLabel": "Spawn Petrifying Basilisk"
    },
    "lich_king": {
            "id": "lich_king",
            "category": "Creatures & Civs",
            "title": "Nether Lich King",
            "subtitle": "Creatures & Civs Entry",
            "tags": [
                    "lich_king",
                    "creatures",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Creatures & Civs",
                    "Tool ID": "lich_king",
                    "Creature Tier": "Living Entity / Apex Beast",
                    "Controllable": "Fully Possessable (WASD / Space / Q)",
                    "First-Person Mode": "Supported (Press 'F')"
            },
            "abilities": [
                    "Active AI Routine: Roams, hunts, defends territory, and interacts with world fauna.",
                    "Direct Possession: Take direct control with WASD navigation and unique primary/special combat abilities."
            ],
            "lore": "Undead sovereign commanding legions of skeletons.",
            "tactics": "Spawn in compatible biomes or directly possess via Right-Click to experience the world through their eyes in 1st-Person Mode.",
            "counters": "Vulnerable to heavy siege artillery, void weapons, and extreme environmental hazards.",
            "related": [],
            "toolId": "lich_king",
            "actionLabel": "Spawn Nether Lich King"
    },
    "cyber_mech_titan": {
            "id": "cyber_mech_titan",
            "category": "Creatures & Civs",
            "title": "Cyber Mech Titan",
            "subtitle": "Creatures & Civs Entry",
            "tags": [
                    "cyber_mech_titan",
                    "creatures",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Creatures & Civs",
                    "Tool ID": "cyber_mech_titan",
                    "Creature Tier": "Living Entity / Apex Beast",
                    "Controllable": "Fully Possessable (WASD / Space / Q)",
                    "First-Person Mode": "Supported (Press 'F')"
            },
            "abilities": [
                    "Active AI Routine: Roams, hunts, defends territory, and interacts with world fauna.",
                    "Direct Possession: Take direct control with WASD navigation and unique primary/special combat abilities."
            ],
            "lore": "Armored quadruped war mech with twin rotary lasers.",
            "tactics": "Spawn in compatible biomes or directly possess via Right-Click to experience the world through their eyes in 1st-Person Mode.",
            "counters": "Vulnerable to heavy siege artillery, void weapons, and extreme environmental hazards.",
            "related": [],
            "toolId": "cyber_mech_titan",
            "actionLabel": "Spawn Cyber Mech Titan"
    },
    "cerberus": {
            "id": "cerberus",
            "category": "Creatures & Civs",
            "title": "Three-Headed Cerberus",
            "subtitle": "Creatures & Civs Entry",
            "tags": [
                    "cerberus",
                    "creatures",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Creatures & Civs",
                    "Tool ID": "cerberus",
                    "Creature Tier": "Living Entity / Apex Beast",
                    "Controllable": "Fully Possessable (WASD / Space / Q)",
                    "First-Person Mode": "Supported (Press 'F')"
            },
            "abilities": [
                    "Active AI Routine: Roams, hunts, defends territory, and interacts with world fauna.",
                    "Direct Possession: Take direct control with WASD navigation and unique primary/special combat abilities."
            ],
            "lore": "Nether hellhound guarding the underworld with hellfire.",
            "tactics": "Spawn in compatible biomes or directly possess via Right-Click to experience the world through their eyes in 1st-Person Mode.",
            "counters": "Vulnerable to heavy siege artillery, void weapons, and extreme environmental hazards.",
            "related": [],
            "toolId": "cerberus",
            "actionLabel": "Spawn Three-Headed Cerberus"
    },
    "sea_serpent": {
            "id": "sea_serpent",
            "category": "Creatures & Civs",
            "title": "Azure Sea Serpent",
            "subtitle": "Creatures & Civs Entry",
            "tags": [
                    "sea_serpent",
                    "creatures",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Creatures & Civs",
                    "Tool ID": "sea_serpent",
                    "Creature Tier": "Living Entity / Apex Beast",
                    "Controllable": "Fully Possessable (WASD / Space / Q)",
                    "First-Person Mode": "Supported (Press 'F')"
            },
            "abilities": [
                    "Active AI Routine: Roams, hunts, defends territory, and interacts with world fauna.",
                    "Direct Possession: Take direct control with WASD navigation and unique primary/special combat abilities."
            ],
            "lore": "Aquatic leviathan coiled in the deepest oceanic trenches.",
            "tactics": "Spawn in compatible biomes or directly possess via Right-Click to experience the world through their eyes in 1st-Person Mode.",
            "counters": "Vulnerable to heavy siege artillery, void weapons, and extreme environmental hazards.",
            "related": [],
            "toolId": "sea_serpent",
            "actionLabel": "Spawn Azure Sea Serpent"
    },
    "yeti": {
            "id": "yeti",
            "category": "Creatures & Civs",
            "title": "Abominable Yeti",
            "subtitle": "Creatures & Civs Entry",
            "tags": [
                    "yeti",
                    "creatures",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Creatures & Civs",
                    "Tool ID": "yeti",
                    "Creature Tier": "Living Entity / Apex Beast",
                    "Controllable": "Fully Possessable (WASD / Space / Q)",
                    "First-Person Mode": "Supported (Press 'F')"
            },
            "abilities": [
                    "Active AI Routine: Roams, hunts, defends territory, and interacts with world fauna.",
                    "Direct Possession: Take direct control with WASD navigation and unique primary/special combat abilities."
            ],
            "lore": "Mountain frost colossus hurling giant snow boulders.",
            "tactics": "Spawn in compatible biomes or directly possess via Right-Click to experience the world through their eyes in 1st-Person Mode.",
            "counters": "Vulnerable to heavy siege artillery, void weapons, and extreme environmental hazards.",
            "related": [],
            "toolId": "yeti",
            "actionLabel": "Spawn Abominable Yeti"
    },
    "djinn": {
            "id": "djinn",
            "category": "Creatures & Civs",
            "title": "Mystic Djinn",
            "subtitle": "Creatures & Civs Entry",
            "tags": [
                    "djinn",
                    "creatures",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Creatures & Civs",
                    "Tool ID": "djinn",
                    "Creature Tier": "Living Entity / Apex Beast",
                    "Controllable": "Fully Possessable (WASD / Space / Q)",
                    "First-Person Mode": "Supported (Press 'F')"
            },
            "abilities": [
                    "Active AI Routine: Roams, hunts, defends territory, and interacts with world fauna.",
                    "Direct Possession: Take direct control with WASD navigation and unique primary/special combat abilities."
            ],
            "lore": "Levitating genie of the lamp conjuring mystic whirlwinds.",
            "tactics": "Spawn in compatible biomes or directly possess via Right-Click to experience the world through their eyes in 1st-Person Mode.",
            "counters": "Vulnerable to heavy siege artillery, void weapons, and extreme environmental hazards.",
            "related": [],
            "toolId": "djinn",
            "actionLabel": "Spawn Mystic Djinn"
    },
    "centaur": {
            "id": "centaur",
            "category": "Creatures & Civs",
            "title": "Sylvan Centaur",
            "subtitle": "Creatures & Civs Entry",
            "tags": [
                    "centaur",
                    "creatures",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Creatures & Civs",
                    "Tool ID": "centaur",
                    "Creature Tier": "Living Entity / Apex Beast",
                    "Controllable": "Fully Possessable (WASD / Space / Q)",
                    "First-Person Mode": "Supported (Press 'F')"
            },
            "abilities": [
                    "Active AI Routine: Roams, hunts, defends territory, and interacts with world fauna.",
                    "Direct Possession: Take direct control with WASD navigation and unique primary/special combat abilities."
            ],
            "lore": "Half-human half-horse archer galloping through woods.",
            "tactics": "Spawn in compatible biomes or directly possess via Right-Click to experience the world through their eyes in 1st-Person Mode.",
            "counters": "Vulnerable to heavy siege artillery, void weapons, and extreme environmental hazards.",
            "related": [],
            "toolId": "centaur",
            "actionLabel": "Spawn Sylvan Centaur"
    },
    "mummy_pharaoh": {
            "id": "mummy_pharaoh",
            "category": "Creatures & Civs",
            "title": "Cursed Mummy Pharaoh",
            "subtitle": "Creatures & Civs Entry",
            "tags": [
                    "mummy_pharaoh",
                    "creatures",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Creatures & Civs",
                    "Tool ID": "mummy_pharaoh",
                    "Creature Tier": "Living Entity / Apex Beast",
                    "Controllable": "Fully Possessable (WASD / Space / Q)",
                    "First-Person Mode": "Supported (Press 'F')"
            },
            "abilities": [
                    "Active AI Routine: Roams, hunts, defends territory, and interacts with world fauna.",
                    "Direct Possession: Take direct control with WASD navigation and unique primary/special combat abilities."
            ],
            "lore": "Ancient royal corpse summoning sandstorms and curses.",
            "tactics": "Spawn in compatible biomes or directly possess via Right-Click to experience the world through their eyes in 1st-Person Mode.",
            "counters": "Vulnerable to heavy siege artillery, void weapons, and extreme environmental hazards.",
            "related": [],
            "toolId": "mummy_pharaoh",
            "actionLabel": "Spawn Cursed Mummy Pharaoh"
    },
    "alien_overlord": {
            "id": "alien_overlord",
            "category": "Creatures & Civs",
            "title": "Alien Overlord",
            "subtitle": "Creatures & Civs Entry",
            "tags": [
                    "alien_overlord",
                    "creatures",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Creatures & Civs",
                    "Tool ID": "alien_overlord",
                    "Creature Tier": "Living Entity / Apex Beast",
                    "Controllable": "Fully Possessable (WASD / Space / Q)",
                    "First-Person Mode": "Supported (Press 'F')"
            },
            "abilities": [
                    "Active AI Routine: Roams, hunts, defends territory, and interacts with world fauna.",
                    "Direct Possession: Take direct control with WASD navigation and unique primary/special combat abilities."
            ],
            "lore": "Extraterrestrial mastermind with psychic telekinesis.",
            "tactics": "Spawn in compatible biomes or directly possess via Right-Click to experience the world through their eyes in 1st-Person Mode.",
            "counters": "Vulnerable to heavy siege artillery, void weapons, and extreme environmental hazards.",
            "related": [],
            "toolId": "alien_overlord",
            "actionLabel": "Spawn Alien Overlord"
    },
    "btn_fpv_quick": {
            "id": "btn_fpv_quick",
            "category": "Menu & World Tools",
            "title": "Launch 1st-Person",
            "subtitle": "Menu & World Tools Entry",
            "tags": [
                    "btn_fpv_quick",
                    "menu",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Menu & World Tools",
                    "Tool ID": "btn_fpv_quick",
                    "Command Type": "God Engine Utility",
                    "Execution Scope": "Global Simulation"
            },
            "abilities": [
                    "Immediate Execution: Modifies world rules, camera perspective, or temporal flow in real-time."
            ],
            "lore": "Jump straight into 3D First-Person View mode.",
            "tactics": "Use for swift navigation, perspective switching, or managing overall simulation flow with single-click convenience.",
            "counters": "Reversible using opposing commands or temporal rewind.",
            "related": [],
            "toolId": "btn_fpv_quick",
            "actionLabel": "Execute Launch 1st-Person"
    },
    "btn_codex_quick": {
            "id": "btn_codex_quick",
            "category": "Menu & World Tools",
            "title": "Open Galaxy Codex",
            "subtitle": "Menu & World Tools Entry",
            "tags": [
                    "btn_codex_quick",
                    "menu",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Menu & World Tools",
                    "Tool ID": "btn_codex_quick",
                    "Command Type": "God Engine Utility",
                    "Execution Scope": "Global Simulation"
            },
            "abilities": [
                    "Immediate Execution: Modifies world rules, camera perspective, or temporal flow in real-time."
            ],
            "lore": "Browse the complete encyclopedia and guides.",
            "tactics": "Use for swift navigation, perspective switching, or managing overall simulation flow with single-click convenience.",
            "counters": "Reversible using opposing commands or temporal rewind.",
            "related": [],
            "toolId": "btn_codex_quick",
            "actionLabel": "Execute Open Galaxy Codex"
    },
    "btn_3d_quick": {
            "id": "btn_3d_quick",
            "category": "Menu & World Tools",
            "title": "Toggle 3D Mode",
            "subtitle": "Menu & World Tools Entry",
            "tags": [
                    "btn_3d_quick",
                    "menu",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Menu & World Tools",
                    "Tool ID": "btn_3d_quick",
                    "Command Type": "God Engine Utility",
                    "Execution Scope": "Global Simulation"
            },
            "abilities": [
                    "Immediate Execution: Modifies world rules, camera perspective, or temporal flow in real-time."
            ],
            "lore": "Switch between 2D pixel view and 3D heightfield voxel view.",
            "tactics": "Use for swift navigation, perspective switching, or managing overall simulation flow with single-click convenience.",
            "counters": "Reversible using opposing commands or temporal rewind.",
            "related": [],
            "toolId": "btn_3d_quick",
            "actionLabel": "Execute Toggle 3D Mode"
    },
    "btn_time_day": {
            "id": "btn_time_day",
            "category": "Menu & World Tools",
            "title": "Set Time: Dawn",
            "subtitle": "Menu & World Tools Entry",
            "tags": [
                    "btn_time_day",
                    "menu",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Menu & World Tools",
                    "Tool ID": "btn_time_day",
                    "Command Type": "God Engine Utility",
                    "Execution Scope": "Global Simulation"
            },
            "abilities": [
                    "Immediate Execution: Modifies world rules, camera perspective, or temporal flow in real-time."
            ],
            "lore": "Set time of day to sunrise (6:00 AM).",
            "tactics": "Use for swift navigation, perspective switching, or managing overall simulation flow with single-click convenience.",
            "counters": "Reversible using opposing commands or temporal rewind.",
            "related": [],
            "toolId": "btn_time_day",
            "actionLabel": "Execute Set Time: Dawn"
    },
    "btn_time_noon": {
            "id": "btn_time_noon",
            "category": "Menu & World Tools",
            "title": "Set Time: Noon",
            "subtitle": "Menu & World Tools Entry",
            "tags": [
                    "btn_time_noon",
                    "menu",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Menu & World Tools",
                    "Tool ID": "btn_time_noon",
                    "Command Type": "God Engine Utility",
                    "Execution Scope": "Global Simulation"
            },
            "abilities": [
                    "Immediate Execution: Modifies world rules, camera perspective, or temporal flow in real-time."
            ],
            "lore": "Set time of day to high noon (12:00 PM).",
            "tactics": "Use for swift navigation, perspective switching, or managing overall simulation flow with single-click convenience.",
            "counters": "Reversible using opposing commands or temporal rewind.",
            "related": [],
            "toolId": "btn_time_noon",
            "actionLabel": "Execute Set Time: Noon"
    },
    "btn_time_dusk": {
            "id": "btn_time_dusk",
            "category": "Menu & World Tools",
            "title": "Set Time: Dusk",
            "subtitle": "Menu & World Tools Entry",
            "tags": [
                    "btn_time_dusk",
                    "menu",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Menu & World Tools",
                    "Tool ID": "btn_time_dusk",
                    "Command Type": "God Engine Utility",
                    "Execution Scope": "Global Simulation"
            },
            "abilities": [
                    "Immediate Execution: Modifies world rules, camera perspective, or temporal flow in real-time."
            ],
            "lore": "Set time of day to sunset (6:00 PM).",
            "tactics": "Use for swift navigation, perspective switching, or managing overall simulation flow with single-click convenience.",
            "counters": "Reversible using opposing commands or temporal rewind.",
            "related": [],
            "toolId": "btn_time_dusk",
            "actionLabel": "Execute Set Time: Dusk"
    },
    "btn_time_night": {
            "id": "btn_time_night",
            "category": "Menu & World Tools",
            "title": "Set Time: Midnight",
            "subtitle": "Menu & World Tools Entry",
            "tags": [
                    "btn_time_night",
                    "menu",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Menu & World Tools",
                    "Tool ID": "btn_time_night",
                    "Command Type": "God Engine Utility",
                    "Execution Scope": "Global Simulation"
            },
            "abilities": [
                    "Immediate Execution: Modifies world rules, camera perspective, or temporal flow in real-time."
            ],
            "lore": "Set time of day to starry midnight (12:00 AM).",
            "tactics": "Use for swift navigation, perspective switching, or managing overall simulation flow with single-click convenience.",
            "counters": "Reversible using opposing commands or temporal rewind.",
            "related": [],
            "toolId": "btn_time_night",
            "actionLabel": "Execute Set Time: Midnight"
    },
    "btn_kill_all_monsters": {
            "id": "btn_kill_all_monsters",
            "category": "Menu & World Tools",
            "title": "Slay All Monsters",
            "subtitle": "Menu & World Tools Entry",
            "tags": [
                    "btn_kill_all_monsters",
                    "menu",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Menu & World Tools",
                    "Tool ID": "btn_kill_all_monsters",
                    "Command Type": "God Engine Utility",
                    "Execution Scope": "Global Simulation"
            },
            "abilities": [
                    "Immediate Execution: Modifies world rules, camera perspective, or temporal flow in real-time."
            ],
            "lore": "Cleanse the realm of all hostile beasts and undead.",
            "tactics": "Use for swift navigation, perspective switching, or managing overall simulation flow with single-click convenience.",
            "counters": "Reversible using opposing commands or temporal rewind.",
            "related": [],
            "toolId": "btn_kill_all_monsters",
            "actionLabel": "Execute Slay All Monsters"
    },
    "btn_bless_all": {
            "id": "btn_bless_all",
            "category": "Menu & World Tools",
            "title": "Bless All Creatures",
            "subtitle": "Menu & World Tools Entry",
            "tags": [
                    "btn_bless_all",
                    "menu",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Menu & World Tools",
                    "Tool ID": "btn_bless_all",
                    "Command Type": "God Engine Utility",
                    "Execution Scope": "Global Simulation"
            },
            "abilities": [
                    "Immediate Execution: Modifies world rules, camera perspective, or temporal flow in real-time."
            ],
            "lore": "Grant divine blessing, 2x HP, and immortality to all.",
            "tactics": "Use for swift navigation, perspective switching, or managing overall simulation flow with single-click convenience.",
            "counters": "Reversible using opposing commands or temporal rewind.",
            "related": [],
            "toolId": "btn_bless_all",
            "actionLabel": "Execute Bless All Creatures"
    },
    "btn_heal_all_world": {
            "id": "btn_heal_all_world",
            "category": "Menu & World Tools",
            "title": "Heal Entire World",
            "subtitle": "Menu & World Tools Entry",
            "tags": [
                    "btn_heal_all_world",
                    "menu",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Menu & World Tools",
                    "Tool ID": "btn_heal_all_world",
                    "Command Type": "God Engine Utility",
                    "Execution Scope": "Global Simulation"
            },
            "abilities": [
                    "Immediate Execution: Modifies world rules, camera perspective, or temporal flow in real-time."
            ],
            "lore": "Instantly restore all creatures to 100% health.",
            "tactics": "Use for swift navigation, perspective switching, or managing overall simulation flow with single-click convenience.",
            "counters": "Reversible using opposing commands or temporal rewind.",
            "related": [],
            "toolId": "btn_heal_all_world",
            "actionLabel": "Execute Heal Entire World"
    },
    "btn_unfreeze_world": {
            "id": "btn_unfreeze_world",
            "category": "Menu & World Tools",
            "title": "Thaw All Ice",
            "subtitle": "Menu & World Tools Entry",
            "tags": [
                    "btn_unfreeze_world",
                    "menu",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Menu & World Tools",
                    "Tool ID": "btn_unfreeze_world",
                    "Command Type": "God Engine Utility",
                    "Execution Scope": "Global Simulation"
            },
            "abilities": [
                    "Immediate Execution: Modifies world rules, camera perspective, or temporal flow in real-time."
            ],
            "lore": "Melt all ice sheets and glaciated permafrost into water.",
            "tactics": "Use for swift navigation, perspective switching, or managing overall simulation flow with single-click convenience.",
            "counters": "Reversible using opposing commands or temporal rewind.",
            "related": [],
            "toolId": "btn_unfreeze_world",
            "actionLabel": "Execute Thaw All Ice"
    },
    "btn_extinguish_all": {
            "id": "btn_extinguish_all",
            "category": "Menu & World Tools",
            "title": "Extinguish Wildfires",
            "subtitle": "Menu & World Tools Entry",
            "tags": [
                    "btn_extinguish_all",
                    "menu",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Menu & World Tools",
                    "Tool ID": "btn_extinguish_all",
                    "Command Type": "God Engine Utility",
                    "Execution Scope": "Global Simulation"
            },
            "abilities": [
                    "Immediate Execution: Modifies world rules, camera perspective, or temporal flow in real-time."
            ],
            "lore": "Extinguish all raging fires and cooling hot spots.",
            "tactics": "Use for swift navigation, perspective switching, or managing overall simulation flow with single-click convenience.",
            "counters": "Reversible using opposing commands or temporal rewind.",
            "related": [],
            "toolId": "btn_extinguish_all",
            "actionLabel": "Execute Extinguish Wildfires"
    },
    "btn_repopulate": {
            "id": "btn_repopulate",
            "category": "Menu & World Tools",
            "title": "Repopulate Settlements",
            "subtitle": "Menu & World Tools Entry",
            "tags": [
                    "btn_repopulate",
                    "menu",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Menu & World Tools",
                    "Tool ID": "btn_repopulate",
                    "Command Type": "God Engine Utility",
                    "Execution Scope": "Global Simulation"
            },
            "abilities": [
                    "Immediate Execution: Modifies world rules, camera perspective, or temporal flow in real-time."
            ],
            "lore": "Spawn 5 humans, elves, dwarves, and orcs into villages.",
            "tactics": "Use for swift navigation, perspective switching, or managing overall simulation flow with single-click convenience.",
            "counters": "Reversible using opposing commands or temporal rewind.",
            "related": [],
            "toolId": "btn_repopulate",
            "actionLabel": "Execute Repopulate Settlements"
    },
    "btn_advance_eras": {
            "id": "btn_advance_eras",
            "category": "Menu & World Tools",
            "title": "Advance All Eras",
            "subtitle": "Menu & World Tools Entry",
            "tags": [
                    "btn_advance_eras",
                    "menu",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Menu & World Tools",
                    "Tool ID": "btn_advance_eras",
                    "Command Type": "God Engine Utility",
                    "Execution Scope": "Global Simulation"
            },
            "abilities": [
                    "Immediate Execution: Modifies world rules, camera perspective, or temporal flow in real-time."
            ],
            "lore": "Accelerate civilization technological era for all kingdoms.",
            "tactics": "Use for swift navigation, perspective switching, or managing overall simulation flow with single-click convenience.",
            "counters": "Reversible using opposing commands or temporal rewind.",
            "related": [],
            "toolId": "btn_advance_eras",
            "actionLabel": "Execute Advance All Eras"
    },
    "btn_clean_corpses": {
            "id": "btn_clean_corpses",
            "category": "Menu & World Tools",
            "title": "Clear All Corpses",
            "subtitle": "Menu & World Tools Entry",
            "tags": [
                    "btn_clean_corpses",
                    "menu",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Menu & World Tools",
                    "Tool ID": "btn_clean_corpses",
                    "Command Type": "God Engine Utility",
                    "Execution Scope": "Global Simulation"
            },
            "abilities": [
                    "Immediate Execution: Modifies world rules, camera perspective, or temporal flow in real-time."
            ],
            "lore": "Vaporize all fallen bodies, skeletons, and battlefield debris.",
            "tactics": "Use for swift navigation, perspective switching, or managing overall simulation flow with single-click convenience.",
            "counters": "Reversible using opposing commands or temporal rewind.",
            "related": [],
            "toolId": "btn_clean_corpses",
            "actionLabel": "Execute Clear All Corpses"
    },
    "btn_quicken_crops": {
            "id": "btn_quicken_crops",
            "category": "Menu & World Tools",
            "title": "Maximize Agriculture",
            "subtitle": "Menu & World Tools Entry",
            "tags": [
                    "btn_quicken_crops",
                    "menu",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Menu & World Tools",
                    "Tool ID": "btn_quicken_crops",
                    "Command Type": "God Engine Utility",
                    "Execution Scope": "Global Simulation"
            },
            "abilities": [
                    "Immediate Execution: Modifies world rules, camera perspective, or temporal flow in real-time."
            ],
            "lore": "Instantly mature all crops, forests, and flora.",
            "tactics": "Use for swift navigation, perspective switching, or managing overall simulation flow with single-click convenience.",
            "counters": "Reversible using opposing commands or temporal rewind.",
            "related": [],
            "toolId": "btn_quicken_crops",
            "actionLabel": "Execute Maximize Agriculture"
    },
    "btn_random_event": {
            "id": "btn_random_event",
            "category": "Menu & World Tools",
            "title": "Trigger Chaos Event",
            "subtitle": "Menu & World Tools Entry",
            "tags": [
                    "btn_random_event",
                    "menu",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Menu & World Tools",
                    "Tool ID": "btn_random_event",
                    "Command Type": "God Engine Utility",
                    "Execution Scope": "Global Simulation"
            },
            "abilities": [
                    "Immediate Execution: Modifies world rules, camera perspective, or temporal flow in real-time."
            ],
            "lore": "Roll a random cosmic or environmental event!",
            "tactics": "Use for swift navigation, perspective switching, or managing overall simulation flow with single-click convenience.",
            "counters": "Reversible using opposing commands or temporal rewind.",
            "related": [],
            "toolId": "btn_random_event",
            "actionLabel": "Execute Trigger Chaos Event"
    },
    "btn_turbo_speed": {
            "id": "btn_turbo_speed",
            "category": "Menu & World Tools",
            "title": "Turbo Speed (10x)",
            "subtitle": "Menu & World Tools Entry",
            "tags": [
                    "btn_turbo_speed",
                    "menu",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Menu & World Tools",
                    "Tool ID": "btn_turbo_speed",
                    "Command Type": "God Engine Utility",
                    "Execution Scope": "Global Simulation"
            },
            "abilities": [
                    "Immediate Execution: Modifies world rules, camera perspective, or temporal flow in real-time."
            ],
            "lore": "Run simulation at ultra-fast 10x clock rate.",
            "tactics": "Use for swift navigation, perspective switching, or managing overall simulation flow with single-click convenience.",
            "counters": "Reversible using opposing commands or temporal rewind.",
            "related": [],
            "toolId": "btn_turbo_speed",
            "actionLabel": "Execute Turbo Speed (10x)"
    },
    "btn_camera_center": {
            "id": "btn_camera_center",
            "category": "Menu & World Tools",
            "title": "Recenter Camera",
            "subtitle": "Menu & World Tools Entry",
            "tags": [
                    "btn_camera_center",
                    "menu",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Menu & World Tools",
                    "Tool ID": "btn_camera_center",
                    "Command Type": "God Engine Utility",
                    "Execution Scope": "Global Simulation"
            },
            "abilities": [
                    "Immediate Execution: Modifies world rules, camera perspective, or temporal flow in real-time."
            ],
            "lore": "Reset zoom and pan directly to the world center.",
            "tactics": "Use for swift navigation, perspective switching, or managing overall simulation flow with single-click convenience.",
            "counters": "Reversible using opposing commands or temporal rewind.",
            "related": [],
            "toolId": "btn_camera_center",
            "actionLabel": "Execute Recenter Camera"
    },
    "btn_photo_mode": {
            "id": "btn_photo_mode",
            "category": "Menu & World Tools",
            "title": "Cinematic Clean View",
            "subtitle": "Menu & World Tools Entry",
            "tags": [
                    "btn_photo_mode",
                    "menu",
                    "v3_update"
            ],
            "stats": {
                    "Category": "Menu & World Tools",
                    "Tool ID": "btn_photo_mode",
                    "Command Type": "God Engine Utility",
                    "Execution Scope": "Global Simulation"
            },
            "abilities": [
                    "Immediate Execution: Modifies world rules, camera perspective, or temporal flow in real-time."
            ],
            "lore": "Toggle full immersion mode hiding all HUD elements.",
            "tactics": "Use for swift navigation, perspective switching, or managing overall simulation flow with single-click convenience.",
            "counters": "Reversible using opposing commands or temporal rewind.",
            "related": [],
            "toolId": "btn_photo_mode",
            "actionLabel": "Execute Cinematic Clean View"
    }
};
}
