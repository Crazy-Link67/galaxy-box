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
    },
    "tachyon_lance": {
        "id": "tachyon_lance",
        "category": "Destruction & Chaos",
        "title": "Tachyon Lance",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "tachyon_lance",
            "tachyon_lance"
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
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "subspace_torpedo",
            "subspace_torpedo"
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
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "solar_beam",
            "solar_death_beam"
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
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "dark_matter_detonator",
            "dark_matter_detonator"
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
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "void_drill",
            "void_drill"
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
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "magma_mortar",
            "magma_mortar"
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
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "hellfire_vortex",
            "hellfire_vortex"
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
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "gravity_well",
            "gravity_well"
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
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "antimatter_singularity",
            "antimatter_singularity"
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
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "orbital_kinetic_harpoon",
            "kinetic_harpoon"
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
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "gamma_ray_pulsar",
            "gamma_ray_pulsar"
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
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "chronos_decay_bomb",
            "chronos_decay_bomb"
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
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "plasma_torrent",
            "plasma_torrent"
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
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "seismic_splitter",
            "seismic_splitter"
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
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "acid_hail",
            "corrosive_acid_hail"
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
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "bioweapon_siphon",
            "bioweapon_siphon"
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
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "cryo_implosion",
            "cryo_implosion"
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
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "chaos_meteor",
            "chaos_meteor"
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
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "emp_cascade",
            "emp_cascade"
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
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "apocalypse_bell",
            "apocalypse_bell"
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
    "dark_matter_implosion": {
        "id": "dark_matter_implosion",
        "category": "Destruction & Chaos",
        "title": "Dark Matter Implosion",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "dark_matter_implosion",
            "dark_matter_implosion"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "dark_matter_implosion",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Dark Matter Implosion: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Gravitational collapse ripping space into void and crushing armor.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "dark_matter_implosion",
        "actionLabel": "Use Dark Matter Implosion"
    },
    "antimatter_bomb": {
        "id": "antimatter_bomb",
        "category": "Destruction & Chaos",
        "title": "Antimatter Annihilator",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "antimatter_bomb",
            "antimatter_annihilator"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "antimatter_bomb",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Antimatter Annihilator: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Pure matter-antimatter reaction vaporizing wide terrain into nothingness.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "antimatter_bomb",
        "actionLabel": "Use Antimatter Annihilator"
    },
    "singularity_cannon": {
        "id": "singularity_cannon",
        "category": "Destruction & Chaos",
        "title": "Singularity Cannon",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "singularity_cannon",
            "singularity_cannon"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "singularity_cannon",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Singularity Cannon: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Fires high-velocity micro black hole gravitational pulses.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "singularity_cannon",
        "actionLabel": "Use Singularity Cannon"
    },
    "plasma_orbital_beam": {
        "id": "plasma_orbital_beam",
        "category": "Destruction & Chaos",
        "title": "Plasma Orbital Beam",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "plasma_orbital_beam",
            "plasma_orbital_beam"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "plasma_orbital_beam",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Plasma Orbital Beam: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Solar-focus satellite lance superheating earth to liquid magma.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "plasma_orbital_beam",
        "actionLabel": "Use Plasma Orbital Beam"
    },
    "gamma_ray_burst": {
        "id": "gamma_ray_burst",
        "category": "Destruction & Chaos",
        "title": "Gamma Ray Burst",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "gamma_ray_burst",
            "gamma_ray_burst"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "gamma_ray_burst",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Gamma Ray Burst: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Extreme cosmic radiation stream obliterating cellular structures.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "gamma_ray_burst",
        "actionLabel": "Use Gamma Ray Burst"
    },
    "chrono_rift": {
        "id": "chrono_rift",
        "category": "Destruction & Chaos",
        "title": "Chrono Rift Tear",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "chrono_rift",
            "chrono_rift_tear"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "chrono_rift",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Chrono Rift Tear: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Ruptures time continuum, trapping hostile forces in temporal stasis.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "chrono_rift",
        "actionLabel": "Use Chrono Rift Tear"
    },
    "dimension_collapse": {
        "id": "dimension_collapse",
        "category": "Destruction & Chaos",
        "title": "Dimension Collapse",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "dimension_collapse",
            "dimension_collapse"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "dimension_collapse",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Dimension Collapse: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Dimensional instability tearing local spacetime into cosmic corruption.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "dimension_collapse",
        "actionLabel": "Use Dimension Collapse"
    },
    "magnetic_storm": {
        "id": "magnetic_storm",
        "category": "Destruction & Chaos",
        "title": "Magnetic EMP Storm",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "magnetic_storm",
            "magnetic_emp_storm"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "magnetic_storm",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Magnetic EMP Storm: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Pulsing electromagnetic fields shorting shields and stunning units.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "magnetic_storm",
        "actionLabel": "Use Magnetic EMP Storm"
    },
    "tachyon_blast": {
        "id": "tachyon_blast",
        "category": "Destruction & Chaos",
        "title": "Tachyon Hyper-Blast",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "tachyon_blast",
            "tachyon_hyper-blast"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "tachyon_blast",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Tachyon Hyper-Blast: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Faster-than-light particle lance piercing directly through all defenses.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "tachyon_blast",
        "actionLabel": "Use Tachyon Hyper-Blast"
    },
    "solar_flare_strike": {
        "id": "solar_flare_strike",
        "category": "Destruction & Chaos",
        "title": "Solar Flare Strike",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "solar_flare_strike",
            "solar_flare_strike"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "solar_flare_strike",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Solar Flare Strike: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Hurls concentrated solar coronal mass ejection incinerating kingdoms.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "solar_flare_strike",
        "actionLabel": "Use Solar Flare Strike"
    },
    "graviton_pulse": {
        "id": "graviton_pulse",
        "category": "Destruction & Chaos",
        "title": "Graviton Pulse",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "graviton_pulse",
            "graviton_pulse"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "graviton_pulse",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Graviton Pulse: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Repulsor wave scattering colossal armies and blasting fortress walls.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "graviton_pulse",
        "actionLabel": "Use Graviton Pulse"
    },
    "nanite_plague": {
        "id": "nanite_plague",
        "category": "Destruction & Chaos",
        "title": "Nanite Swarm Plague",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "nanite_plague",
            "nanite_swarm_plague"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "nanite_plague",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Nanite Swarm Plague: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Self-replicating microscopic machines consuming matter and converting to sludge.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "nanite_plague",
        "actionLabel": "Use Nanite Swarm Plague"
    },
    "supernova_spark": {
        "id": "supernova_spark",
        "category": "Destruction & Chaos",
        "title": "Supernova Spark",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "supernova_spark",
            "supernova_spark"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "supernova_spark",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Supernova Spark: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Ignites stellar core fusion trigger unleashing cataclysmic thermal blast.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "supernova_spark",
        "actionLabel": "Use Supernova Spark"
    },
    "subzero_freeze_bomb": {
        "id": "subzero_freeze_bomb",
        "category": "Destruction & Chaos",
        "title": "Subzero Cryo Bomb",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "subzero_freeze_bomb",
            "subzero_cryo_bomb"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "subzero_freeze_bomb",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Subzero Cryo Bomb: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Liquid nitrogen shockwave instantly freezing oceans and living foes.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "subzero_freeze_bomb",
        "actionLabel": "Use Subzero Cryo Bomb"
    },
    "chaos_meteor_shower": {
        "id": "chaos_meteor_shower",
        "category": "Destruction & Chaos",
        "title": "Chaos Meteor Shower",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "chaos_meteor_shower",
            "chaos_meteor_shower"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "chaos_meteor_shower",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Chaos Meteor Shower: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Bombardment of blazing cosmic asteroid fragments raining across world.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "chaos_meteor_shower",
        "actionLabel": "Use Chaos Meteor Shower"
    },
    "void_vortex": {
        "id": "void_vortex",
        "category": "Destruction & Chaos",
        "title": "Void Singularity Vortex",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "void_vortex",
            "void_singularity_vortex"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "void_vortex",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Void Singularity Vortex: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Swirling gravitational sink pulling nearby terrain and entities inward.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "void_vortex",
        "actionLabel": "Use Void Singularity Vortex"
    },
    "inferno_barrage": {
        "id": "inferno_barrage",
        "category": "Destruction & Chaos",
        "title": "Inferno Mortar Barrage",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "inferno_barrage",
            "inferno_mortar_barrage"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "inferno_barrage",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Inferno Mortar Barrage: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Volleys of incendiary shells turning fertile biomes to blazing infernos.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "inferno_barrage",
        "actionLabel": "Use Inferno Mortar Barrage"
    },
    "acidic_deluge": {
        "id": "acidic_deluge",
        "category": "Destruction & Chaos",
        "title": "Acidic Deluge Bomb",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "acidic_deluge",
            "acidic_deluge_bomb"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "acidic_deluge",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Acidic Deluge Bomb: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Saturates surface with corrosive bubbling emerald acid pools.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "acidic_deluge",
        "actionLabel": "Use Acidic Deluge Bomb"
    },
    "cosmic_lightning_storm": {
        "id": "cosmic_lightning_storm",
        "category": "Destruction & Chaos",
        "title": "Cosmic Lightning Surge",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "cosmic_lightning_storm",
            "cosmic_lightning_surge"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "cosmic_lightning_storm",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Cosmic Lightning Surge: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Cascading high-voltage celestial arcs striking multiple targets simultaneously.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "cosmic_lightning_storm",
        "actionLabel": "Use Cosmic Lightning Surge"
    },
    "abyssal_quake": {
        "id": "abyssal_quake",
        "category": "Destruction & Chaos",
        "title": "Abyssal Chasm Quake",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "abyssal_quake",
            "abyssal_chasm_quake"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "abyssal_quake",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Abyssal Chasm Quake: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Deep-mantle seismic shudder shattering bedrock and creating canyons.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "abyssal_quake",
        "actionLabel": "Use Abyssal Chasm Quake"
    },
    "radioactive_fallout_strike": {
        "id": "radioactive_fallout_strike",
        "category": "Destruction & Chaos",
        "title": "Radioactive Fallout Strike",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "radioactive_fallout_strike",
            "radioactive_fallout_strike"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "radioactive_fallout_strike",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Radioactive Fallout Strike: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Irradiates terrain with poisonous fallout, mutating survivors.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "radioactive_fallout_strike",
        "actionLabel": "Use Radioactive Fallout Strike"
    },
    "photon_laser_grid": {
        "id": "photon_laser_grid",
        "category": "Destruction & Chaos",
        "title": "Photon Laser Grid",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "photon_laser_grid",
            "photon_laser_grid"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "photon_laser_grid",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Photon Laser Grid: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Crosshatched coherent light lasers bisecting combatants.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "photon_laser_grid",
        "actionLabel": "Use Photon Laser Grid"
    },
    "entropy_wave": {
        "id": "entropy_wave",
        "category": "Destruction & Chaos",
        "title": "Entropy Decay Wave",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "entropy_wave",
            "entropy_decay_wave"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "entropy_wave",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Entropy Decay Wave: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Accelerates thermodynamic breakdown, crumbling walls and aging foes.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "entropy_wave",
        "actionLabel": "Use Entropy Decay Wave"
    },
    "hyperbeam_satellite": {
        "id": "hyperbeam_satellite",
        "category": "Destruction & Chaos",
        "title": "Hyperbeam Satellite",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "hyperbeam_satellite",
            "hyperbeam_satellite"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "hyperbeam_satellite",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Hyperbeam Satellite: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Orbital energy array channeling continuous searing laser column.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "hyperbeam_satellite",
        "actionLabel": "Use Hyperbeam Satellite"
    },
    "star_eater_strike": {
        "id": "star_eater_strike",
        "category": "Destruction & Chaos",
        "title": "Star Eater Strike",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "star_eater_strike",
            "star_eater_strike"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "star_eater_strike",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Star Eater Strike: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Cosmic void siphon devouring planetary crust down to bedrock.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "star_eater_strike",
        "actionLabel": "Use Star Eater Strike"
    },
    "vacuum_decay": {
        "id": "vacuum_decay",
        "category": "Destruction & Chaos",
        "title": "Vacuum Decay Catalyst",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "vacuum_decay",
            "vacuum_decay_catalyst"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "vacuum_decay",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Vacuum Decay Catalyst: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Drops quantum vacuum state creating expanding void bubble.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "vacuum_decay",
        "actionLabel": "Use Vacuum Decay Catalyst"
    },
    "blight_strike": {
        "id": "blight_strike",
        "category": "Destruction & Chaos",
        "title": "Primordial Blight Strike",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "blight_strike",
            "primordial_blight_strike"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "blight_strike",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Primordial Blight Strike: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Infects landscape with creeping necrosis and cursed marsh.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "blight_strike",
        "actionLabel": "Use Primordial Blight Strike"
    },
    "stellar_flare": {
        "id": "stellar_flare",
        "category": "Destruction & Chaos",
        "title": "Stellar Coronal Flare",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "stellar_flare",
            "stellar_coronal_flare"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "stellar_flare",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Stellar Coronal Flare: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Scorching planetary flare turning forests and fields into ash.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "stellar_flare",
        "actionLabel": "Use Stellar Coronal Flare"
    },
    "doomsday_clock_strike": {
        "id": "doomsday_clock_strike",
        "category": "Destruction & Chaos",
        "title": "Doomsday Clock Strike",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "doomsday_clock_strike",
            "doomsday_clock_strike"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "doomsday_clock_strike",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Doomsday Clock Strike: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Midnight strikes: Catastrophic apocalyptic multi-element detonation.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "doomsday_clock_strike",
        "actionLabel": "Use Doomsday Clock Strike"
    },
    "void_collapse_cannon": {
        "id": "void_collapse_cannon",
        "category": "Destruction & Chaos",
        "title": "Void Collapse Cannon",
        "subtitle": "Destruction & Chaos Encyclopedia Article",
        "tags": [
            "destruction",
            "void_collapse_cannon",
            "void_collapse_cannon"
        ],
        "stats": {
            "Category": "Destruction & Chaos",
            "Tool ID": "void_collapse_cannon",
            "Damage Tier": "Catastrophic (Apocalypse)",
            "Blast Radius": "Massive Multi-Tile",
            "Area Effect": "High Kinetic / Thermal Flux"
        },
        "abilities": [
            "Void Collapse Cannon: Devastates structures and disintegrates living entities.",
            "Chain Reaction: Creates fiery or explosive cascades across neighboring terrain."
        ],
        "lore": "Heavy gravitational battery tearing local matter into absolute vacuum.",
        "tactics": "Target enemy warbands, fortress walls, or overgrown monster nests to swiftly neutralize threats.",
        "counters": "Forcefields, Divine Shield, Cryo Freezing, or Aegis Sanctuary Domes can mitigate direct blast damage.",
        "related": [],
        "toolId": "void_collapse_cannon",
        "actionLabel": "Use Void Collapse Cannon"
    },
    "blood_moon": {
        "id": "blood_moon",
        "category": "Nature & Disasters",
        "title": "Blood Moon",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "blood_moon",
            "blood_moon"
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
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "blood_moon",
        "actionLabel": "Use Blood Moon"
    },
    "ball_lightning": {
        "id": "ball_lightning",
        "category": "Nature & Disasters",
        "title": "Ball Lightning",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "ball_lightning",
            "ball_lightning"
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
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "ball_lightning",
        "actionLabel": "Use Ball Lightning"
    },
    "solar_wind": {
        "id": "solar_wind",
        "category": "Nature & Disasters",
        "title": "Solar Wind",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "solar_wind",
            "solar_wind"
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
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "solar_wind",
        "actionLabel": "Use Solar Wind"
    },
    "supercell_cyclone": {
        "id": "supercell_cyclone",
        "category": "Nature & Disasters",
        "title": "Supercell Cyclone",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "supercell_cyclone",
            "supercell_cyclone"
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
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "supercell_cyclone",
        "actionLabel": "Use Supercell Cyclone"
    },
    "cryo_deluge": {
        "id": "cryo_deluge",
        "category": "Nature & Disasters",
        "title": "Cryo Deluge",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "cryo_deluge",
            "cryo_deluge"
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
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "cryo_deluge",
        "actionLabel": "Use Cryo Deluge"
    },
    "magma_geyser": {
        "id": "magma_geyser",
        "category": "Nature & Disasters",
        "title": "Magma Geyser",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "magma_geyser",
            "magma_geyser"
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
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "magma_geyser",
        "actionLabel": "Use Magma Geyser"
    },
    "spore_fog": {
        "id": "spore_fog",
        "category": "Nature & Disasters",
        "title": "Spore Fog",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "spore_fog",
            "spore_fog"
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
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "spore_fog",
        "actionLabel": "Use Spore Fog"
    },
    "static_squall": {
        "id": "static_squall",
        "category": "Nature & Disasters",
        "title": "Static Squall",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "static_squall",
            "static_squall"
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
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "static_squall",
        "actionLabel": "Use Static Squall"
    },
    "pyroclastic_cloud": {
        "id": "pyroclastic_cloud",
        "category": "Nature & Disasters",
        "title": "Pyroclastic Cloud",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "pyroclastic_cloud",
            "pyroclastic_cloud"
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
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "pyroclastic_cloud",
        "actionLabel": "Use Pyroclastic Cloud"
    },
    "dust_devil": {
        "id": "dust_devil",
        "category": "Nature & Disasters",
        "title": "Dust Devil",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "dust_devil",
            "dust_devil"
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
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "dust_devil",
        "actionLabel": "Use Dust Devil"
    },
    "magnetic_aurora": {
        "id": "magnetic_aurora",
        "category": "Nature & Disasters",
        "title": "Magnetic Aurora",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "magnetic_aurora",
            "magnetic_aurora"
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
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "magnetic_aurora",
        "actionLabel": "Use Magnetic Aurora"
    },
    "hailstorm": {
        "id": "hailstorm",
        "category": "Nature & Disasters",
        "title": "Severe Hailstorm",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "hailstorm",
            "severe_hailstorm"
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
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "hailstorm",
        "actionLabel": "Use Severe Hailstorm"
    },
    "acid_geyser": {
        "id": "acid_geyser",
        "category": "Nature & Disasters",
        "title": "Acid Geyser",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "acid_geyser",
            "acid_geyser"
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
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "acid_geyser",
        "actionLabel": "Use Acid Geyser"
    },
    "glacial_crevasse": {
        "id": "glacial_crevasse",
        "category": "Nature & Disasters",
        "title": "Glacial Crevasse",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "glacial_crevasse",
            "glacial_crevasse"
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
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "glacial_crevasse",
        "actionLabel": "Use Glacial Crevasse"
    },
    "ozone_tear": {
        "id": "ozone_tear",
        "category": "Nature & Disasters",
        "title": "Ozone Tear",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "ozone_tear",
            "ozone_tear"
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
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "ozone_tear",
        "actionLabel": "Use Ozone Tear"
    },
    "cosmic_radiation": {
        "id": "cosmic_radiation",
        "category": "Nature & Disasters",
        "title": "Cosmic Radiation",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "cosmic_radiation",
            "cosmic_radiation"
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
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "cosmic_radiation",
        "actionLabel": "Use Cosmic Radiation"
    },
    "maelstrom_vortex": {
        "id": "maelstrom_vortex",
        "category": "Nature & Disasters",
        "title": "Maelstrom Vortex",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "maelstrom_vortex",
            "maelstrom_vortex"
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
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "maelstrom_vortex",
        "actionLabel": "Use Maelstrom Vortex"
    },
    "swamp_gas_eruption": {
        "id": "swamp_gas_eruption",
        "category": "Nature & Disasters",
        "title": "Swamp Gas Eruption",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "swamp_gas_eruption",
            "swamp_gas_eruption"
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
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "swamp_gas_eruption",
        "actionLabel": "Use Swamp Gas Eruption"
    },
    "radiant_sunshower": {
        "id": "radiant_sunshower",
        "category": "Nature & Disasters",
        "title": "Radiant Sunshower",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "radiant_sunshower",
            "radiant_sunshower"
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
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "radiant_sunshower",
        "actionLabel": "Use Radiant Sunshower"
    },
    "great_deluge": {
        "id": "great_deluge",
        "category": "Nature & Disasters",
        "title": "Great Deluge",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "great_deluge",
            "great_deluge"
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
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "great_deluge",
        "actionLabel": "Use Great Deluge"
    },
    "blizzard_storm": {
        "id": "blizzard_storm",
        "category": "Nature & Disasters",
        "title": "Blizzard Gale",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "blizzard_storm",
            "blizzard_gale"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "blizzard_storm",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Blizzard Gale: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Violent arctic storm coating terrain in snow and freezing waters.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "blizzard_storm",
        "actionLabel": "Use Blizzard Gale"
    },
    "thundercloud_front": {
        "id": "thundercloud_front",
        "category": "Nature & Disasters",
        "title": "Thundercloud Front",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "thundercloud_front",
            "thundercloud_front"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "thundercloud_front",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Thundercloud Front: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Approaching squall line bringing drenching rain and lightning.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "thundercloud_front",
        "actionLabel": "Use Thundercloud Front"
    },
    "monsoon_surge": {
        "id": "monsoon_surge",
        "category": "Nature & Disasters",
        "title": "Monsoon Torrent",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "monsoon_surge",
            "monsoon_torrent"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "monsoon_surge",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Monsoon Torrent: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Sustained tropical downpours filling river basins and lush meadows.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "monsoon_surge",
        "actionLabel": "Use Monsoon Torrent"
    },
    "mist_fog": {
        "id": "mist_fog",
        "category": "Nature & Disasters",
        "title": "Dense Mist Fog",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "mist_fog",
            "dense_mist_fog"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "mist_fog",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Dense Mist Fog: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Rolls thick atmospheric fog concealing movements across terrain.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "mist_fog",
        "actionLabel": "Use Dense Mist Fog"
    },
    "wildfire_spread": {
        "id": "wildfire_spread",
        "category": "Nature & Disasters",
        "title": "Wildfire Spread",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "wildfire_spread",
            "wildfire_spread"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "wildfire_spread",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Wildfire Spread: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Sparks natural forest canopy fires that race before wind.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "wildfire_spread",
        "actionLabel": "Use Wildfire Spread"
    },
    "sand_dune_shift": {
        "id": "sand_dune_shift",
        "category": "Nature & Disasters",
        "title": "Sand Dune Shift",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "sand_dune_shift",
            "sand_dune_shift"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "sand_dune_shift",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Sand Dune Shift: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Rolling desert wind forming shifting golden sand dunes.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "sand_dune_shift",
        "actionLabel": "Use Sand Dune Shift"
    },
    "geyser_eruption": {
        "id": "geyser_eruption",
        "category": "Nature & Disasters",
        "title": "Thermal Geyser Eruption",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "geyser_eruption",
            "thermal_geyser_eruption"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "geyser_eruption",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Thermal Geyser Eruption: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Pressurized subterranean hot spring blasting scalding steam upward.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "geyser_eruption",
        "actionLabel": "Use Thermal Geyser Eruption"
    },
    "mudflow_slide": {
        "id": "mudflow_slide",
        "category": "Nature & Disasters",
        "title": "Mudflow Slide",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "mudflow_slide",
            "mudflow_slide"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "mudflow_slide",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Mudflow Slide: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Saturates hillside slopes into advancing mud torrents.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "mudflow_slide",
        "actionLabel": "Use Mudflow Slide"
    },
    "hailstorm_barrage": {
        "id": "hailstorm_barrage",
        "category": "Nature & Disasters",
        "title": "Hailstorm Barrage",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "hailstorm_barrage",
            "hailstorm_barrage"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "hailstorm_barrage",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Hailstorm Barrage: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Pelts ground with damaging chunks of compacted ice.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "hailstorm_barrage",
        "actionLabel": "Use Hailstorm Barrage"
    },
    "supercell_tornado": {
        "id": "supercell_tornado",
        "category": "Nature & Disasters",
        "title": "Supercell Vortex",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "supercell_tornado",
            "supercell_vortex"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "supercell_tornado",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Supercell Vortex: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Rotating mesocyclone funnel sweeping away obstacles.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "supercell_tornado",
        "actionLabel": "Use Supercell Vortex"
    },
    "dust_devil_whirl": {
        "id": "dust_devil_whirl",
        "category": "Nature & Disasters",
        "title": "Dust Devil Whirl",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "dust_devil_whirl",
            "dust_devil_whirl"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "dust_devil_whirl",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Dust Devil Whirl: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Whirling vortex of dust and sand skittering across plains.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "dust_devil_whirl",
        "actionLabel": "Use Dust Devil Whirl"
    },
    "sinkhole_collapse": {
        "id": "sinkhole_collapse",
        "category": "Nature & Disasters",
        "title": "Sinkhole Collapse",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "sinkhole_collapse",
            "sinkhole_collapse"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "sinkhole_collapse",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Sinkhole Collapse: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Sudden subterranean cavern breach swallowing surface into deep water.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "sinkhole_collapse",
        "actionLabel": "Use Sinkhole Collapse"
    },
    "bioluminescent_bloom": {
        "id": "bioluminescent_bloom",
        "category": "Nature & Disasters",
        "title": "Bioluminescent Bloom",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "bioluminescent_bloom",
            "bioluminescent_bloom"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "bioluminescent_bloom",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Bioluminescent Bloom: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Awakens glowing emerald and teal moss across caves and soil.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "bioluminescent_bloom",
        "actionLabel": "Use Bioluminescent Bloom"
    },
    "spore_cloud_haze": {
        "id": "spore_cloud_haze",
        "category": "Nature & Disasters",
        "title": "Fungal Spore Haze",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "spore_cloud_haze",
            "fungal_spore_haze"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "spore_cloud_haze",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Fungal Spore Haze: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Drifting cloud of hallucinogenic spores fertilizing mycelium.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "spore_cloud_haze",
        "actionLabel": "Use Fungal Spore Haze"
    },
    "frostbite_front": {
        "id": "frostbite_front",
        "category": "Nature & Disasters",
        "title": "Frostbite Front",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "frostbite_front",
            "frostbite_front"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "frostbite_front",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Frostbite Front: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Flash-freezing cold wave solidifying surface fluids into ice.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "frostbite_front",
        "actionLabel": "Use Frostbite Front"
    },
    "thermal_spring_burst": {
        "id": "thermal_spring_burst",
        "category": "Nature & Disasters",
        "title": "Thermal Spring Burst",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "thermal_spring_burst",
            "thermal_spring_burst"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "thermal_spring_burst",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Thermal Spring Burst: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Spawns bubbling mineral-rich hot springs.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "thermal_spring_burst",
        "actionLabel": "Use Thermal Spring Burst"
    },
    "tidal_surge_wave": {
        "id": "tidal_surge_wave",
        "category": "Nature & Disasters",
        "title": "Tidal Surge Wave",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "tidal_surge_wave",
            "tidal_surge_wave"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "tidal_surge_wave",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Tidal Surge Wave: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Great oceanic surge sweeping coastal beaches and inlets.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "tidal_surge_wave",
        "actionLabel": "Use Tidal Surge Wave"
    },
    "oasis_spring": {
        "id": "oasis_spring",
        "category": "Nature & Disasters",
        "title": "Desert Oasis Spring",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "oasis_spring",
            "desert_oasis_spring"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "oasis_spring",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Desert Oasis Spring: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Nurtures life in arid wastes with fresh water pool and greenery.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "oasis_spring",
        "actionLabel": "Use Desert Oasis Spring"
    },
    "rainbow_blessing": {
        "id": "rainbow_blessing",
        "category": "Nature & Disasters",
        "title": "Rainbow Blessing",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "rainbow_blessing",
            "rainbow_blessing"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "rainbow_blessing",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Rainbow Blessing: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Miraculous prism spanning sky, blessing and healing all creatures.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "rainbow_blessing",
        "actionLabel": "Use Rainbow Blessing"
    },
    "drought_wave": {
        "id": "drought_wave",
        "category": "Nature & Disasters",
        "title": "Scorching Drought Wave",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "drought_wave",
            "scorching_drought_wave"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "drought_wave",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Scorching Drought Wave: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Evaporates shallow waters and parches green vegetation.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "drought_wave",
        "actionLabel": "Use Scorching Drought Wave"
    },
    "magma_surge_fissure": {
        "id": "magma_surge_fissure",
        "category": "Nature & Disasters",
        "title": "Magma Surge Fissure",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "magma_surge_fissure",
            "magma_surge_fissure"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "magma_surge_fissure",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Magma Surge Fissure: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Opens molten fissure spilling glowing magma rock.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "magma_surge_fissure",
        "actionLabel": "Use Magma Surge Fissure"
    },
    "lightning_tree": {
        "id": "lightning_tree",
        "category": "Nature & Disasters",
        "title": "Lightning Strike Arbor",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "lightning_tree",
            "lightning_strike_arbor"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "lightning_tree",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Lightning Strike Arbor: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Directs focused atmospheric bolt charging the earth.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "lightning_tree",
        "actionLabel": "Use Lightning Strike Arbor"
    },
    "coral_sprout": {
        "id": "coral_sprout",
        "category": "Nature & Disasters",
        "title": "Coral Reef Sprout",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "coral_sprout",
            "coral_reef_sprout"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "coral_sprout",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Coral Reef Sprout: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Cultivates vibrant marine coral barriers in shallow waters.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "coral_sprout",
        "actionLabel": "Use Coral Reef Sprout"
    },
    "vine_overgrowth": {
        "id": "vine_overgrowth",
        "category": "Nature & Disasters",
        "title": "Primordial Vine Overgrowth",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "vine_overgrowth",
            "primordial_vine_overgrowth"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "vine_overgrowth",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Primordial Vine Overgrowth: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Rapidly grows dense thorny brambles and jungle vines.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "vine_overgrowth",
        "actionLabel": "Use Primordial Vine Overgrowth"
    },
    "crystal_growth": {
        "id": "crystal_growth",
        "category": "Nature & Disasters",
        "title": "Luminous Crystal Growth",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "crystal_growth",
            "luminous_crystal_growth"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "crystal_growth",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Luminous Crystal Growth: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Sprouts iridescent crystal formations from mineral veins.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "crystal_growth",
        "actionLabel": "Use Luminous Crystal Growth"
    },
    "glacier_advance": {
        "id": "glacier_advance",
        "category": "Nature & Disasters",
        "title": "Glacier Sheet Advance",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "glacier_advance",
            "glacier_sheet_advance"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "glacier_advance",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Glacier Sheet Advance: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Expands mountain snowpack into thick creeping glacial ice.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "glacier_advance",
        "actionLabel": "Use Glacier Sheet Advance"
    },
    "pollen_wind": {
        "id": "pollen_wind",
        "category": "Nature & Disasters",
        "title": "Floral Pollen Wind",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "pollen_wind",
            "floral_pollen_wind"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "pollen_wind",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Floral Pollen Wind: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Warm breeze pollinating meadows with vibrant wildflowers.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "pollen_wind",
        "actionLabel": "Use Floral Pollen Wind"
    },
    "fossil_unearth": {
        "id": "fossil_unearth",
        "category": "Nature & Disasters",
        "title": "Ancient Fossil Unearth",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "fossil_unearth",
            "ancient_fossil_unearth"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "fossil_unearth",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Ancient Fossil Unearth: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Exposes prehistoric petrified fossils and amber stones.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "fossil_unearth",
        "actionLabel": "Use Ancient Fossil Unearth"
    },
    "spring_thaw": {
        "id": "spring_thaw",
        "category": "Nature & Disasters",
        "title": "Spring Solstice Thaw",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "spring_thaw",
            "spring_solstice_thaw"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "spring_thaw",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Spring Solstice Thaw: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Melts winter snow and ice, rejuvenating fertile green soils.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "spring_thaw",
        "actionLabel": "Use Spring Solstice Thaw"
    },
    "geomagnetic_solar_squall": {
        "id": "geomagnetic_solar_squall",
        "category": "Nature & Disasters",
        "title": "Geomagnetic Solar Squall",
        "subtitle": "Nature & Disasters Encyclopedia Article",
        "tags": [
            "nature",
            "geomagnetic_solar_squall",
            "geomagnetic_solar_squall"
        ],
        "stats": {
            "Category": "Nature & Disasters",
            "Tool ID": "geomagnetic_solar_squall",
            "Force Type": "Planetary Weather & Geology",
            "Atmospheric Impact": "Extreme",
            "Duration": "Sustained Phenomenon"
        },
        "abilities": [
            "Geomagnetic Solar Squall: Alters global or localized atmospheric and tectonic conditions.",
            "Environmental Metamorphosis: Transforms surface biomes and temperature dynamically."
        ],
        "lore": "Solar storm winds inducing crackling electromagnetic particle auroras.",
        "tactics": "Utilize natural storms to douse raging wildfires, replenish arid deserts, or glaciate waterways for safe crossings.",
        "counters": "Weather Stabilizers, Solar Winds, or Terraforming Brushes can reverse atmospheric disturbances.",
        "related": [],
        "toolId": "geomagnetic_solar_squall",
        "actionLabel": "Use Geomagnetic Solar Squall"
    },
    "ash_wasteland": {
        "id": "ash_wasteland",
        "category": "Landscaping & Biomes",
        "title": "Ash Wasteland",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "ash_wasteland",
            "ash_wasteland"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "ash_wasteland",
            "Tile Material": "Ash Wasteland",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Ash Wasteland at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Desolate gray volcanic ash flats from cataclysms.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "ash_wasteland",
        "actionLabel": "Use Ash Wasteland"
    },
    "cursed_marsh": {
        "id": "cursed_marsh",
        "category": "Landscaping & Biomes",
        "title": "Cursed Marsh",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "cursed_marsh",
            "cursed_marsh"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "cursed_marsh",
            "Tile Material": "Cursed Marsh",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Cursed Marsh at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Dark necrotic swampland draining life from passersby.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "cursed_marsh",
        "actionLabel": "Use Cursed Marsh"
    },
    "bioluminescent_coral": {
        "id": "bioluminescent_coral",
        "category": "Landscaping & Biomes",
        "title": "Bioluminescent Coral",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "bioluminescent_coral",
            "bioluminescent_coral"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "bioluminescent_coral",
            "Tile Material": "Bioluminescent Coral",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Bioluminescent Coral at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Vibrant glowing oceanic reefs radiating aqua and pink light.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "bioluminescent_coral",
        "actionLabel": "Use Bioluminescent Coral"
    },
    "petrified_wood": {
        "id": "petrified_wood",
        "category": "Landscaping & Biomes",
        "title": "Petrified Wood",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "petrified_wood",
            "petrified_wood"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "petrified_wood",
            "Tile Material": "Petrified Wood",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Petrified Wood at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Ancient fossilized timber hard as stone and mineral.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "petrified_wood",
        "actionLabel": "Use Petrified Wood"
    },
    "golden_sand": {
        "id": "golden_sand",
        "category": "Landscaping & Biomes",
        "title": "Golden Sand",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "golden_sand",
            "golden_sand"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "golden_sand",
            "Tile Material": "Golden Sand",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Golden Sand at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Shimmering desert sand dunes infused with mineral dust.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "golden_sand",
        "actionLabel": "Use Golden Sand"
    },
    "obsidian_spire": {
        "id": "obsidian_spire",
        "category": "Landscaping & Biomes",
        "title": "Obsidian Spire",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "obsidian_spire",
            "obsidian_spire"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "obsidian_spire",
            "Tile Material": "Obsidian Spire",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Obsidian Spire at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Jagged volcanic glass monoliths projecting upward.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "obsidian_spire",
        "actionLabel": "Use Obsidian Spire"
    },
    "glacial_permafrost": {
        "id": "glacial_permafrost",
        "category": "Landscaping & Biomes",
        "title": "Glacial Permafrost",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "glacial_permafrost",
            "glacial_permafrost"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "glacial_permafrost",
            "Tile Material": "Glacial Permafrost",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Glacial Permafrost at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Hard-packed prehistoric ice and frozen loam.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "glacial_permafrost",
        "actionLabel": "Use Glacial Permafrost"
    },
    "radioactive_waste": {
        "id": "radioactive_waste",
        "category": "Landscaping & Biomes",
        "title": "Radioactive Slag",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "radioactive_waste",
            "radioactive_slag"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "radioactive_waste",
            "Tile Material": "Radioactive Slag",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Radioactive Slag at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Irradiated glowing green nuclear fallout sediment.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "radioactive_waste",
        "actionLabel": "Use Radioactive Slag"
    },
    "aether_soil": {
        "id": "aether_soil",
        "category": "Landscaping & Biomes",
        "title": "Aether Soil",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "aether_soil",
            "aether_soil"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "aether_soil",
            "Tile Material": "Aether Soil",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Aether Soil at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Celestial enchanted earth nourishing glowing flora.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "aether_soil",
        "actionLabel": "Use Aether Soil"
    },
    "deep_trench": {
        "id": "deep_trench",
        "category": "Landscaping & Biomes",
        "title": "Deep Abyssal Trench",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "deep_trench",
            "deep_abyssal_trench"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "deep_trench",
            "Tile Material": "Deep Abyssal Trench",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Deep Abyssal Trench at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Bottomless ocean chasm plunging into utter darkness.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "deep_trench",
        "actionLabel": "Use Deep Abyssal Trench"
    },
    "basalt_mesa": {
        "id": "basalt_mesa",
        "category": "Landscaping & Biomes",
        "title": "Basalt Mesa",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "basalt_mesa",
            "basalt_mesa"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "basalt_mesa",
            "Tile Material": "Basalt Mesa",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Basalt Mesa at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Steep-sided volcanic basalt rock plateaus.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "basalt_mesa",
        "actionLabel": "Use Basalt Mesa"
    },
    "sacred_soil": {
        "id": "sacred_soil",
        "category": "Landscaping & Biomes",
        "title": "Sacred Soil",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "sacred_soil",
            "sacred_soil"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "sacred_soil",
            "Tile Material": "Sacred Soil",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Sacred Soil at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Blessed holy earth preventing corruption and blight.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "sacred_soil",
        "actionLabel": "Use Sacred Soil"
    },
    "crystal_geode": {
        "id": "crystal_geode",
        "category": "Landscaping & Biomes",
        "title": "Crystal Geode",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "crystal_geode",
            "crystal_geode"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "crystal_geode",
            "Tile Material": "Crystal Geode",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Crystal Geode at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Prismatic gemstone bedrock sparkling with multi-colored facets.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "crystal_geode",
        "actionLabel": "Use Crystal Geode"
    },
    "sunbaked_clay": {
        "id": "sunbaked_clay",
        "category": "Landscaping & Biomes",
        "title": "Sunbaked Clay",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "sunbaked_clay",
            "sunbaked_clay"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "sunbaked_clay",
            "Tile Material": "Sunbaked Clay",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Sunbaked Clay at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Terracotta clay plains hardened under intense sunlight.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "sunbaked_clay",
        "actionLabel": "Use Sunbaked Clay"
    },
    "toxic_slime": {
        "id": "toxic_slime",
        "category": "Landscaping & Biomes",
        "title": "Toxic Slime",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "toxic_slime",
            "toxic_slime"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "toxic_slime",
            "Tile Material": "Toxic Slime",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Toxic Slime at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Bubbling caustic green ooze melting non-native biology.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "toxic_slime",
        "actionLabel": "Use Toxic Slime"
    },
    "living_vines": {
        "id": "living_vines",
        "category": "Landscaping & Biomes",
        "title": "Living Vines",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "living_vines",
            "living_vines"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "living_vines",
            "Tile Material": "Living Vines",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Living Vines at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Sentient tangled jungle creepers spreading across surfaces.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "living_vines",
        "actionLabel": "Use Living Vines"
    },
    "star_metal_ore": {
        "id": "star_metal_ore",
        "category": "Landscaping & Biomes",
        "title": "Star Metal Ore",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "star_metal_ore",
            "star_metal_ore"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "star_metal_ore",
            "Tile Material": "Star Metal Ore",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Star Metal Ore at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Fallen meteoric ore veins containing indestructible celestial alloys.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "star_metal_ore",
        "actionLabel": "Use Star Metal Ore"
    },
    "floating_rock": {
        "id": "floating_rock",
        "category": "Landscaping & Biomes",
        "title": "Aether Floating Rock",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "floating_rock",
            "aether_floating_rock"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "floating_rock",
            "Tile Material": "Aether Floating Rock",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Aether Floating Rock at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Anti-gravity floating islands levitating in the air.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "floating_rock",
        "actionLabel": "Use Aether Floating Rock"
    },
    "magma_fissure": {
        "id": "magma_fissure",
        "category": "Landscaping & Biomes",
        "title": "Magma Fissure",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "magma_fissure",
            "magma_fissure"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "magma_fissure",
            "Tile Material": "Magma Fissure",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Magma Fissure at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Deep tectonic faultline venting molten magma.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "magma_fissure",
        "actionLabel": "Use Magma Fissure"
    },
    "lush_meadow": {
        "id": "lush_meadow",
        "category": "Landscaping & Biomes",
        "title": "Lush Meadow",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "lush_meadow",
            "lush_meadow"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "lush_meadow",
            "Tile Material": "Lush Meadow",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Lush Meadow at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Flowering wildflower meadows teeming with butterflies.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "lush_meadow",
        "actionLabel": "Use Lush Meadow"
    },
    "obsidian_block": {
        "id": "obsidian_block",
        "category": "Landscaping & Biomes",
        "title": "Obsidian Block",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "obsidian_block",
            "obsidian_block"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "obsidian_block",
            "Tile Material": "Obsidian Block",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Obsidian Block at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Dense volcanic glass block impervious to standard explosions.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "obsidian_block",
        "actionLabel": "Use Obsidian Block"
    },
    "basalt": {
        "id": "basalt",
        "category": "Landscaping & Biomes",
        "title": "Basalt Crust",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "basalt",
            "basalt_crust"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "basalt",
            "Tile Material": "Basalt Crust",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Basalt Crust at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Hardened dark igneous rock formed from cooled basaltic lava.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "basalt",
        "actionLabel": "Use Basalt Crust"
    },
    "glacial_ice": {
        "id": "glacial_ice",
        "category": "Landscaping & Biomes",
        "title": "Glacial Blue Ice",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "glacial_ice",
            "glacial_blue_ice"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "glacial_ice",
            "Tile Material": "Glacial Blue Ice",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Glacial Blue Ice at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Deep compacted blue ice from ancient glacial sheets.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "glacial_ice",
        "actionLabel": "Use Glacial Blue Ice"
    },
    "crystal_ore": {
        "id": "crystal_ore",
        "category": "Landscaping & Biomes",
        "title": "Prismatic Geode Ore",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "crystal_ore",
            "prismatic_geode_ore"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "crystal_ore",
            "Tile Material": "Prismatic Geode Ore",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Prismatic Geode Ore at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Subterranean geode filled with sparkling amethyst and quartz.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "crystal_ore",
        "actionLabel": "Use Prismatic Geode Ore"
    },
    "gold_vein": {
        "id": "gold_vein",
        "category": "Landscaping & Biomes",
        "title": "Rich Gold Vein",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "gold_vein",
            "rich_gold_vein"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "gold_vein",
            "Tile Material": "Rich Gold Vein",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Rich Gold Vein at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Lustrous precious gold mineral deposit prized by civilizations.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "gold_vein",
        "actionLabel": "Use Rich Gold Vein"
    },
    "aether_rock": {
        "id": "aether_rock",
        "category": "Landscaping & Biomes",
        "title": "Aether Floating Rock",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "aether_rock",
            "aether_floating_rock"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "aether_rock",
            "Tile Material": "Aether Floating Rock",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Aether Floating Rock at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Gravity-defying stone floating high above surface terrain.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "aether_rock",
        "actionLabel": "Use Aether Floating Rock"
    },
    "mud": {
        "id": "mud",
        "category": "Landscaping & Biomes",
        "title": "Wet River Mud",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "mud",
            "wet_river_mud"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "mud",
            "Tile Material": "Wet River Mud",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Wet River Mud at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Soft muddy sediment slowing down foot travel.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "mud",
        "actionLabel": "Use Wet River Mud"
    },
    "peat": {
        "id": "peat",
        "category": "Landscaping & Biomes",
        "title": "Peat Moss Bog",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "peat",
            "peat_moss_bog"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "peat",
            "Tile Material": "Peat Moss Bog",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Peat Moss Bog at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Dark organic wetland soil rich in preserved botanical matter.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "peat",
        "actionLabel": "Use Peat Moss Bog"
    },
    "mycelium": {
        "id": "mycelium",
        "category": "Landscaping & Biomes",
        "title": "Bioluminescent Mycelium",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "mycelium",
            "bioluminescent_mycelium"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "mycelium",
            "Tile Material": "Bioluminescent Mycelium",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Bioluminescent Mycelium at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Underground fungal web glowing with faint purple light.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "mycelium",
        "actionLabel": "Use Bioluminescent Mycelium"
    },
    "coral_barrier": {
        "id": "coral_barrier",
        "category": "Landscaping & Biomes",
        "title": "Coral Barrier Reef",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "coral_barrier",
            "coral_barrier_reef"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "coral_barrier",
            "Tile Material": "Coral Barrier Reef",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Coral Barrier Reef at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Natural ocean barrier supporting thriving marine biomes.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "coral_barrier",
        "actionLabel": "Use Coral Barrier Reef"
    },
    "dune_quicksand": {
        "id": "dune_quicksand",
        "category": "Landscaping & Biomes",
        "title": "Sinking Dune Sand",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "dune_quicksand",
            "sinking_dune_sand"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "dune_quicksand",
            "Tile Material": "Sinking Dune Sand",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Sinking Dune Sand at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Deceptive desert sand that drags walking creatures under.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "dune_quicksand",
        "actionLabel": "Use Sinking Dune Sand"
    },
    "volcanic_cinder": {
        "id": "volcanic_cinder",
        "category": "Landscaping & Biomes",
        "title": "Volcanic Cinder Ash",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "volcanic_cinder",
            "volcanic_cinder_ash"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "volcanic_cinder",
            "Tile Material": "Volcanic Cinder Ash",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Volcanic Cinder Ash at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Loose basaltic gravel and volcanic tephra deposits.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "volcanic_cinder",
        "actionLabel": "Use Volcanic Cinder Ash"
    },
    "sulfur_stone": {
        "id": "sulfur_stone",
        "category": "Landscaping & Biomes",
        "title": "Yellow Sulfur Deposit",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "sulfur_stone",
            "yellow_sulfur_deposit"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "sulfur_stone",
            "Tile Material": "Yellow Sulfur Deposit",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Yellow Sulfur Deposit at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Sulfuric mineral formations found near geothermal vents.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "sulfur_stone",
        "actionLabel": "Use Yellow Sulfur Deposit"
    },
    "chlorophyll_moss": {
        "id": "chlorophyll_moss",
        "category": "Landscaping & Biomes",
        "title": "Verdant Moss",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "chlorophyll_moss",
            "verdant_moss"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "chlorophyll_moss",
            "Tile Material": "Verdant Moss",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Verdant Moss at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Vibrant chlorophyll moss carpet retaining moisture.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "chlorophyll_moss",
        "actionLabel": "Use Verdant Moss"
    },
    "starfall_dust": {
        "id": "starfall_dust",
        "category": "Landscaping & Biomes",
        "title": "Starfall Stardust Dune",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "starfall_dust",
            "starfall_stardust_dune"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "starfall_dust",
            "Tile Material": "Starfall Stardust Dune",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Starfall Stardust Dune at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Powdered celestial meteorite dust glimmering in daylight.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "starfall_dust",
        "actionLabel": "Use Starfall Stardust Dune"
    },
    "void_stone": {
        "id": "void_stone",
        "category": "Landscaping & Biomes",
        "title": "Dark Matter Void Stone",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "void_stone",
            "dark_matter_void_stone"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "void_stone",
            "Tile Material": "Dark Matter Void Stone",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Dark Matter Void Stone at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Enigmatic stone pulsing with gravitational distortion.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "void_stone",
        "actionLabel": "Use Dark Matter Void Stone"
    },
    "ancient_brick": {
        "id": "ancient_brick",
        "category": "Landscaping & Biomes",
        "title": "Ancient Ruin Brick",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "ancient_brick",
            "ancient_ruin_brick"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "ancient_brick",
            "Tile Material": "Ancient Ruin Brick",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Ancient Ruin Brick at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Weathered stone masonry from forgotten primordial empires.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "ancient_brick",
        "actionLabel": "Use Ancient Ruin Brick"
    },
    "marble_road": {
        "id": "marble_road",
        "category": "Landscaping & Biomes",
        "title": "Imperial Marble Highway",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "marble_road",
            "imperial_marble_highway"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "marble_road",
            "Tile Material": "Imperial Marble Highway",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Imperial Marble Highway at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Paved white marble highway speeding troop movements.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "marble_road",
        "actionLabel": "Use Imperial Marble Highway"
    },
    "runic_slate": {
        "id": "runic_slate",
        "category": "Landscaping & Biomes",
        "title": "Runic Inscribed Slate",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "runic_slate",
            "runic_inscribed_slate"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "runic_slate",
            "Tile Material": "Runic Inscribed Slate",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Runic Inscribed Slate at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Mystic slate etched with ancient protective glyphs.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "runic_slate",
        "actionLabel": "Use Runic Inscribed Slate"
    },
    "crimson_red_sand": {
        "id": "crimson_red_sand",
        "category": "Landscaping & Biomes",
        "title": "Crimson Martian Sand",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "crimson_red_sand",
            "crimson_martian_sand"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "crimson_red_sand",
            "Tile Material": "Crimson Martian Sand",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Crimson Martian Sand at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Iron oxide red sand native to alien desert wastes.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "crimson_red_sand",
        "actionLabel": "Use Crimson Martian Sand"
    },
    "bamboo_thicket": {
        "id": "bamboo_thicket",
        "category": "Landscaping & Biomes",
        "title": "Emerald Bamboo Thicket",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "bamboo_thicket",
            "emerald_bamboo_thicket"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "bamboo_thicket",
            "Tile Material": "Emerald Bamboo Thicket",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Emerald Bamboo Thicket at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Rapidly growing hollow bamboo stalks providing lumber.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "bamboo_thicket",
        "actionLabel": "Use Emerald Bamboo Thicket"
    },
    "tundra_permafrost": {
        "id": "tundra_permafrost",
        "category": "Landscaping & Biomes",
        "title": "Frozen Tundra Soil",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "tundra_permafrost",
            "frozen_tundra_soil"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "tundra_permafrost",
            "Tile Material": "Frozen Tundra Soil",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Frozen Tundra Soil at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Permanently frozen subsoil resistant to erosion.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "tundra_permafrost",
        "actionLabel": "Use Frozen Tundra Soil"
    },
    "petrified_grove": {
        "id": "petrified_grove",
        "category": "Landscaping & Biomes",
        "title": "Petrified Stone Forest",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "petrified_grove",
            "petrified_stone_forest"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "petrified_grove",
            "Tile Material": "Petrified Stone Forest",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Petrified Stone Forest at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Silicified tree trunks turned to colorful stone agate.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "petrified_grove",
        "actionLabel": "Use Petrified Stone Forest"
    },
    "luminescent_lichen": {
        "id": "luminescent_lichen",
        "category": "Landscaping & Biomes",
        "title": "Glowing Cyan Lichen",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "luminescent_lichen",
            "glowing_cyan_lichen"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "luminescent_lichen",
            "Tile Material": "Glowing Cyan Lichen",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Glowing Cyan Lichen at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Symbiotic organism illuminating subterranean caverns.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "luminescent_lichen",
        "actionLabel": "Use Glowing Cyan Lichen"
    },
    "silver_ore": {
        "id": "silver_ore",
        "category": "Landscaping & Biomes",
        "title": "Gleaming Silver Ore",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "silver_ore",
            "gleaming_silver_ore"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "silver_ore",
            "Tile Material": "Gleaming Silver Ore",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Gleaming Silver Ore at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Refined noble metal vein useful for artifacts and tech.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "silver_ore",
        "actionLabel": "Use Gleaming Silver Ore"
    },
    "meteorite_core": {
        "id": "meteorite_core",
        "category": "Landscaping & Biomes",
        "title": "Searing Meteor Core",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "meteorite_core",
            "searing_meteor_core"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "meteorite_core",
            "Tile Material": "Searing Meteor Core",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Searing Meteor Core at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Dense extraterrestrial metal radiating residual heat.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "meteorite_core",
        "actionLabel": "Use Searing Meteor Core"
    },
    "prismatic_crystal": {
        "id": "prismatic_crystal",
        "category": "Landscaping & Biomes",
        "title": "Prismatic Rainbow Crystal",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "prismatic_crystal",
            "prismatic_rainbow_crystal"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "prismatic_crystal",
            "Tile Material": "Prismatic Rainbow Crystal",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Prismatic Rainbow Crystal at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Multi-faceted crystal refracting sunlight into rainbows.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "prismatic_crystal",
        "actionLabel": "Use Prismatic Rainbow Crystal"
    },
    "deep_earth_mantle": {
        "id": "deep_earth_mantle",
        "category": "Landscaping & Biomes",
        "title": "Deep Earth Mantle",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "deep_earth_mantle",
            "deep_earth_mantle"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "deep_earth_mantle",
            "Tile Material": "Deep Earth Mantle",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Deep Earth Mantle at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Dense semi-molten silicate mantle exposed from below.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "deep_earth_mantle",
        "actionLabel": "Use Deep Earth Mantle"
    },
    "divine_soil": {
        "id": "divine_soil",
        "category": "Landscaping & Biomes",
        "title": "Hallowed Celestial Soil",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "divine_soil",
            "hallowed_celestial_soil"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "divine_soil",
            "Tile Material": "Hallowed Celestial Soil",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Hallowed Celestial Soil at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Soil blessed by deities, yielding abundant bounties.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "divine_soil",
        "actionLabel": "Use Hallowed Celestial Soil"
    },
    "abyssal_chasm": {
        "id": "abyssal_chasm",
        "category": "Landscaping & Biomes",
        "title": "Bottomless Abyssal Chasm",
        "subtitle": "Landscaping & Biomes Encyclopedia Article",
        "tags": [
            "landscaping",
            "abyssal_chasm",
            "bottomless_abyssal_chasm"
        ],
        "stats": {
            "Category": "Landscaping & Biomes",
            "Tool ID": "abyssal_chasm",
            "Tile Material": "Bottomless Abyssal Chasm",
            "Solid / Structural": "Terrain Surface Matrix",
            "Geological Stability": "Permanent until modified"
        },
        "abilities": [
            "Terrain Sculpting: Instantly paints and terrain-shapes Bottomless Abyssal Chasm at brush cursor.",
            "Biome Propagation: Natural elements interact dynamically with neighboring tiles."
        ],
        "lore": "Terrifying oceanic drop plunging into eternal darkness.",
        "tactics": "Use varied elevations and rich resource veins to guide civilization settlement patterns and road construction.",
        "counters": "Erosion, acid sludge, lava inundation, or terraforming sponge brushes can clear unwanted terrain.",
        "related": [],
        "toolId": "abyssal_chasm",
        "actionLabel": "Use Bottomless Abyssal Chasm"
    },
    "equip_void_halberd": {
        "id": "equip_void_halberd",
        "category": "Powers & Weapons",
        "title": "Equip: Void Halberd",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "equip_void_halberd",
            "equip:_void_halberd"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "equip_void_halberd",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Equip: Void Halberd: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Arm creature with an abyssal polearm cleaving dark energy (+45 Atk).",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "equip_void_halberd",
        "actionLabel": "Use Equip: Void Halberd"
    },
    "equip_frost_scythe": {
        "id": "equip_frost_scythe",
        "category": "Powers & Weapons",
        "title": "Equip: Frost Scythe",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "equip_frost_scythe",
            "equip:_frost_scythe"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "equip_frost_scythe",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Equip: Frost Scythe: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Arm creature with a glacial crescent scythe that freezes foes (+35 Atk).",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "equip_frost_scythe",
        "actionLabel": "Use Equip: Frost Scythe"
    },
    "equip_plasma_cannon": {
        "id": "equip_plasma_cannon",
        "category": "Powers & Weapons",
        "title": "Equip: Heavy Plasma Cannon",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "equip_plasma_cannon",
            "equip:_heavy_plasma_cannon"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "equip_plasma_cannon",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Equip: Heavy Plasma Cannon: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Arm creature with shoulder-mounted heavy plasma artillery (+50 Atk).",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "equip_plasma_cannon",
        "actionLabel": "Use Equip: Heavy Plasma Cannon"
    },
    "equip_arcane_crossbow": {
        "id": "equip_arcane_crossbow",
        "category": "Powers & Weapons",
        "title": "Equip: Arcane Crossbow",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "equip_arcane_crossbow",
            "equip:_arcane_crossbow"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "equip_arcane_crossbow",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Equip: Arcane Crossbow: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Arm creature with repeating crossbow firing magic bolts (+30 Atk).",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "equip_arcane_crossbow",
        "actionLabel": "Use Equip: Arcane Crossbow"
    },
    "equip_chaos_flail": {
        "id": "equip_chaos_flail",
        "category": "Powers & Weapons",
        "title": "Equip: Chaos Flail",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "equip_chaos_flail",
            "equip:_chaos_flail"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "equip_chaos_flail",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Equip: Chaos Flail: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Arm creature with spiked flail triggering explosive impacts (+40 Atk).",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "equip_chaos_flail",
        "actionLabel": "Use Equip: Chaos Flail"
    },
    "equip_sun_spear": {
        "id": "equip_sun_spear",
        "category": "Powers & Weapons",
        "title": "Equip: Radiant Sun Spear",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "equip_sun_spear",
            "equip:_radiant_sun_spear"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "equip_sun_spear",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Equip: Radiant Sun Spear: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Arm creature with solar javelin burning with radiant fury (+40 Atk).",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "equip_sun_spear",
        "actionLabel": "Use Equip: Radiant Sun Spear"
    },
    "midas_touch": {
        "id": "midas_touch",
        "category": "Powers & Weapons",
        "title": "Midas Touch",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "midas_touch",
            "midas_touch"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "midas_touch",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Midas Touch: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Transmutes touched stone and soil into lustrous gold ore veins.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "midas_touch",
        "actionLabel": "Use Midas Touch"
    },
    "plague_cure": {
        "id": "plague_cure",
        "category": "Powers & Weapons",
        "title": "Divine Panacea",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "plague_cure",
            "divine_panacea"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "plague_cure",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Divine Panacea: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Global healing light cleansing all diseases, infections, and curses.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "plague_cure",
        "actionLabel": "Use Divine Panacea"
    },
    "chronos_rewind": {
        "id": "chronos_rewind",
        "category": "Powers & Weapons",
        "title": "Chronos Rewind",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "chronos_rewind",
            "chronos_rewind"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "chronos_rewind",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Chronos Rewind: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Restores lost HP to all living entities and cools down burning terrain.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "chronos_rewind",
        "actionLabel": "Use Chronos Rewind"
    },
    "mass_polymorph": {
        "id": "mass_polymorph",
        "category": "Powers & Weapons",
        "title": "Mass Polymorph",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "mass_polymorph",
            "mass_polymorph"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "mass_polymorph",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Mass Polymorph: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Transforms all nearby hostiles and monsters into harmless sheep!",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "mass_polymorph",
        "actionLabel": "Use Mass Polymorph"
    },
    "titan_ascension": {
        "id": "titan_ascension",
        "category": "Powers & Weapons",
        "title": "Titan Ascension",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "titan_ascension",
            "titan_ascension"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "titan_ascension",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Titan Ascension: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Ascends target creature to godlike scale with massive HP and seismic steps.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "titan_ascension",
        "actionLabel": "Use Titan Ascension"
    },
    "celestial_dome": {
        "id": "celestial_dome",
        "category": "Powers & Weapons",
        "title": "Aegis Sanctuary Dome",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "celestial_dome",
            "aegis_sanctuary_dome"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "celestial_dome",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Aegis Sanctuary Dome: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Deploys a giant luminous protective barrier across the region.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "celestial_dome",
        "actionLabel": "Use Aegis Sanctuary Dome"
    },
    "aether_fountain": {
        "id": "aether_fountain",
        "category": "Powers & Weapons",
        "title": "Aether Geyser",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "aether_fountain",
            "aether_geyser"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "aether_fountain",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Aether Geyser: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Spouts celestial glowing mana mist healing and invigorating life.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "aether_fountain",
        "actionLabel": "Use Aether Geyser"
    },
    "seraph_summon": {
        "id": "seraph_summon",
        "category": "Powers & Weapons",
        "title": "Summon Seraph Cohort",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "seraph_summon",
            "summon_seraph_cohort"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "seraph_summon",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Summon Seraph Cohort: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Summons a phalanx of celestial guardian angels.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "seraph_summon",
        "actionLabel": "Use Summon Seraph Cohort"
    },
    "gravity_crush": {
        "id": "gravity_crush",
        "category": "Powers & Weapons",
        "title": "Gravitational Singularity",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "gravity_crush",
            "gravitational_singularity"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "gravity_crush",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Gravitational Singularity: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Violently slams all airborne and ground creatures into bedrock.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "gravity_crush",
        "actionLabel": "Use Gravitational Singularity"
    },
    "starlight_beam": {
        "id": "starlight_beam",
        "category": "Powers & Weapons",
        "title": "Starlight Beam",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "starlight_beam",
            "starlight_beam"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "starlight_beam",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Starlight Beam: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Concentrated celestial beam blessing and rejuvenating allies.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "starlight_beam",
        "actionLabel": "Use Starlight Beam"
    },
    "dragon_tame": {
        "id": "dragon_tame",
        "category": "Powers & Weapons",
        "title": "Dragon Whisper",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "dragon_tame",
            "dragon_whisper"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "dragon_tame",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Dragon Whisper: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Soothes all dragons and mythical beasts into peaceful kingdom allies.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "dragon_tame",
        "actionLabel": "Use Dragon Whisper"
    },
    "peace_dove": {
        "id": "peace_dove",
        "category": "Powers & Weapons",
        "title": "Empyrean Dove",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "peace_dove",
            "empyrean_dove"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "peace_dove",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Empyrean Dove: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Releases sacred doves establishing an enduring world peace pact.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "peace_dove",
        "actionLabel": "Use Empyrean Dove"
    },
    "abyssal_gate": {
        "id": "abyssal_gate",
        "category": "Powers & Weapons",
        "title": "Abyssal Gate",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "abyssal_gate",
            "abyssal_gate"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "abyssal_gate",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Abyssal Gate: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Opens an infernal portal summoning allied nether fiends.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "abyssal_gate",
        "actionLabel": "Use Abyssal Gate"
    },
    "supercharge": {
        "id": "supercharge",
        "category": "Powers & Weapons",
        "title": "Divine Overcharge",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "supercharge",
            "divine_overcharge"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "supercharge",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Divine Overcharge: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Instantly supercharges all creatures with maximum energy, speed and shields.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "supercharge",
        "actionLabel": "Use Divine Overcharge"
    },
    "divine_shield": {
        "id": "divine_shield",
        "category": "Powers & Weapons",
        "title": "Divine Aegis Shield",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "divine_shield",
            "divine_aegis_shield"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "divine_shield",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Divine Aegis Shield: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Bestows invulnerability, blessed aura, and full health on allies.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "divine_shield",
        "actionLabel": "Use Divine Aegis Shield"
    },
    "wrath_of_god": {
        "id": "wrath_of_god",
        "category": "Powers & Weapons",
        "title": "Wrath of God",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "wrath_of_god",
            "wrath_of_god"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "wrath_of_god",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Wrath of God: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Smite the wicked with apocalyptic lightning inflicting 5000 divine damage.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "wrath_of_god",
        "actionLabel": "Use Wrath of God"
    },
    "celestial_heal": {
        "id": "celestial_heal",
        "category": "Powers & Weapons",
        "title": "Celestial Heal Wave",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "celestial_heal",
            "celestial_heal_wave"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "celestial_heal",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Celestial Heal Wave: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Radiant wave healing all entities, curing plagues and lifting curses.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "celestial_heal",
        "actionLabel": "Use Celestial Heal Wave"
    },
    "time_warp_fast": {
        "id": "time_warp_fast",
        "category": "Powers & Weapons",
        "title": "Time Warp: Fast Forward",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "time_warp_fast",
            "time_warp:_fast_forward"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "time_warp_fast",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Time Warp: Fast Forward: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Accelerates universal time flow to 5x speed.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "time_warp_fast",
        "actionLabel": "Use Time Warp: Fast Forward"
    },
    "time_warp_slow": {
        "id": "time_warp_slow",
        "category": "Powers & Weapons",
        "title": "Time Warp: Slow Motion",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "time_warp_slow",
            "time_warp:_slow_motion"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "time_warp_slow",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Time Warp: Slow Motion: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Slows down universal time flow to 0.5x matrix speed.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "time_warp_slow",
        "actionLabel": "Use Time Warp: Slow Motion"
    },
    "mass_rejuvenation": {
        "id": "mass_rejuvenation",
        "category": "Powers & Weapons",
        "title": "Mass Rejuvenation",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "mass_rejuvenation",
            "mass_rejuvenation"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "mass_rejuvenation",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Mass Rejuvenation: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Reverses biological aging, setting all nearby creatures to age 18.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "mass_rejuvenation",
        "actionLabel": "Use Mass Rejuvenation"
    },
    "teleport_all": {
        "id": "teleport_all",
        "category": "Powers & Weapons",
        "title": "Omni Teleportation",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "teleport_all",
            "omni_teleportation"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "teleport_all",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Omni Teleportation: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Gathers all creatures in brush and warps them directly to cursor.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "teleport_all",
        "actionLabel": "Use Omni Teleportation"
    },
    "peace_treaty_edict": {
        "id": "peace_treaty_edict",
        "category": "Powers & Weapons",
        "title": "Imperial Peace Treaty",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "peace_treaty_edict",
            "imperial_peace_treaty"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "peace_treaty_edict",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Imperial Peace Treaty: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Edict mandating eternal planetary peace between all kingdoms.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "peace_treaty_edict",
        "actionLabel": "Use Imperial Peace Treaty"
    },
    "total_war_edict": {
        "id": "total_war_edict",
        "category": "Powers & Weapons",
        "title": "Total War Edict",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "total_war_edict",
            "total_war_edict"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "total_war_edict",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Total War Edict: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Instigates global total war: every civilization attacks all others!",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "total_war_edict",
        "actionLabel": "Use Total War Edict"
    },
    "inspire_invention": {
        "id": "inspire_invention",
        "category": "Powers & Weapons",
        "title": "Inspire Invention Surge",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "inspire_invention",
            "inspire_invention_surge"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "inspire_invention",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Inspire Invention Surge: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Sparks scientific renaissance, upgrading kingdom eras and resources.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "inspire_invention",
        "actionLabel": "Use Inspire Invention Surge"
    },
    "sanctify_ground": {
        "id": "sanctify_ground",
        "category": "Powers & Weapons",
        "title": "Sanctify Ground",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "sanctify_ground",
            "sanctify_ground"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "sanctify_ground",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Sanctify Ground: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Consecrates brush terrain into holy ground and blessed soil.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "sanctify_ground",
        "actionLabel": "Use Sanctify Ground"
    },
    "curse_of_decay": {
        "id": "curse_of_decay",
        "category": "Powers & Weapons",
        "title": "Curse of Decay",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "curse_of_decay",
            "curse_of_decay"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "curse_of_decay",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Curse of Decay: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Causes plant matter and buildings to swiftly decay into ash.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "curse_of_decay",
        "actionLabel": "Use Curse of Decay"
    },
    "levitation_field": {
        "id": "levitation_field",
        "category": "Powers & Weapons",
        "title": "Levitation Field",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "levitation_field",
            "levitation_field"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "levitation_field",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Levitation Field: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Inverts local gravity, causing all units to float into sky.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "levitation_field",
        "actionLabel": "Use Levitation Field"
    },
    "elemental_infusion": {
        "id": "elemental_infusion",
        "category": "Powers & Weapons",
        "title": "Elemental Infusion",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "elemental_infusion",
            "elemental_infusion"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "elemental_infusion",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Elemental Infusion: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Infuses creatures with fireproof, cryomancer, or electrocharged traits.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "elemental_infusion",
        "actionLabel": "Use Elemental Infusion"
    },
    "clone_creature": {
        "id": "clone_creature",
        "category": "Powers & Weapons",
        "title": "Mitosis Clone Ray",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "clone_creature",
            "mitosis_clone_ray"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "clone_creature",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Mitosis Clone Ray: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Creates an identical genetic duplicate of target creature.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "clone_creature",
        "actionLabel": "Use Mitosis Clone Ray"
    },
    "evolution_surge": {
        "id": "evolution_surge",
        "category": "Powers & Weapons",
        "title": "Evolutionary Surge",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "evolution_surge",
            "evolutionary_surge"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "evolution_surge",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Evolutionary Surge: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Mutates creatures, increasing scale, health pool, and damage.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "evolution_surge",
        "actionLabel": "Use Evolutionary Surge"
    },
    "divine_fertility": {
        "id": "divine_fertility",
        "category": "Powers & Weapons",
        "title": "Divine Fertility",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "divine_fertility",
            "divine_fertility"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "divine_fertility",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Divine Fertility: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Triggers instant population boom across nearby civilizations.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "divine_fertility",
        "actionLabel": "Use Divine Fertility"
    },
    "hero_ascension": {
        "id": "hero_ascension",
        "category": "Powers & Weapons",
        "title": "Champion Ascension",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "hero_ascension",
            "champion_ascension"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "hero_ascension",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Champion Ascension: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Elevates target into legendary Titan Hero with massive stat boosts.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "hero_ascension",
        "actionLabel": "Use Champion Ascension"
    },
    "crown_monarch": {
        "id": "crown_monarch",
        "category": "Powers & Weapons",
        "title": "Crown Grand Monarch",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "crown_monarch",
            "crown_grand_monarch"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "crown_monarch",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Crown Grand Monarch: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Anoints chosen unit as supreme King with golden royal crown.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "crown_monarch",
        "actionLabel": "Use Crown Grand Monarch"
    },
    "purify_world": {
        "id": "purify_world",
        "category": "Powers & Weapons",
        "title": "Purify World",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "purify_world",
            "purify_world"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "purify_world",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Purify World: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Global miracle cleansing all radioactive fallout, acid, and fire.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "purify_world",
        "actionLabel": "Use Purify World"
    },
    "mind_control_wave": {
        "id": "mind_control_wave",
        "category": "Powers & Weapons",
        "title": "Hypnotic Mind Wave",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "mind_control_wave",
            "hypnotic_mind_wave"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "mind_control_wave",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Hypnotic Mind Wave: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Subjugates enemy warbands under direct divine thrall.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "mind_control_wave",
        "actionLabel": "Use Hypnotic Mind Wave"
    },
    "invisibility_cloak": {
        "id": "invisibility_cloak",
        "category": "Powers & Weapons",
        "title": "Stealth Cloak Sphere",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "invisibility_cloak",
            "stealth_cloak_sphere"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "invisibility_cloak",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Stealth Cloak Sphere: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Veils selected creatures in translucent ghostly invisibility.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "invisibility_cloak",
        "actionLabel": "Use Stealth Cloak Sphere"
    },
    "berserk_rage": {
        "id": "berserk_rage",
        "category": "Powers & Weapons",
        "title": "Berserk War Frenzy",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "berserk_rage",
            "berserk_war_frenzy"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "berserk_rage",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Berserk War Frenzy: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Sends units into bloodthirsty rage with 2.5x speed and damage.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "berserk_rage",
        "actionLabel": "Use Berserk War Frenzy"
    },
    "frozen_in_time": {
        "id": "frozen_in_time",
        "category": "Powers & Weapons",
        "title": "Temporal Stasis Prism",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "frozen_in_time",
            "temporal_stasis_prism"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "frozen_in_time",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Temporal Stasis Prism: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Encases targets in unbreakable temporal stasis prism.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "frozen_in_time",
        "actionLabel": "Use Temporal Stasis Prism"
    },
    "speed_boost_aura": {
        "id": "speed_boost_aura",
        "category": "Powers & Weapons",
        "title": "Hyper Velocity Aura",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "speed_boost_aura",
            "hyper_velocity_aura"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "speed_boost_aura",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Hyper Velocity Aura: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Permanently doubles movement speed with blazing light trails.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "speed_boost_aura",
        "actionLabel": "Use Hyper Velocity Aura"
    },
    "resurrection_beacon": {
        "id": "resurrection_beacon",
        "category": "Powers & Weapons",
        "title": "Resurrection Beacon",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "resurrection_beacon",
            "resurrection_beacon"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "resurrection_beacon",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Resurrection Beacon: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Summons radiant beacon continually reviving fallen warriors.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "resurrection_beacon",
        "actionLabel": "Use Resurrection Beacon"
    },
    "wealth_shower": {
        "id": "wealth_shower",
        "category": "Powers & Weapons",
        "title": "Golden Wealth Shower",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "wealth_shower",
            "golden_wealth_shower"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "wealth_shower",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Golden Wealth Shower: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Showers kingdom with 1000 gold and 500 aether crystals.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "wealth_shower",
        "actionLabel": "Use Golden Wealth Shower"
    },
    "cosmic_knowledge": {
        "id": "cosmic_knowledge",
        "category": "Powers & Weapons",
        "title": "Akashic Enlightenment",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "cosmic_knowledge",
            "akashic_enlightenment"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "cosmic_knowledge",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Akashic Enlightenment: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Unlocks Cosmic Space Age technology for all civilizations.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "cosmic_knowledge",
        "actionLabel": "Use Akashic Enlightenment"
    },
    "apotheosis": {
        "id": "apotheosis",
        "category": "Powers & Weapons",
        "title": "Apotheosis Ascendance",
        "subtitle": "Powers & Weapons Encyclopedia Article",
        "tags": [
            "powers",
            "apotheosis",
            "apotheosis_ascendance"
        ],
        "stats": {
            "Category": "Powers & Weapons",
            "Tool ID": "apotheosis",
            "Power Class": "Omnipotent God Miracle",
            "Divine Energy Flux": "Limitless",
            "Targeting": "Cursor / Brush Radius"
        },
        "abilities": [
            "Apotheosis Ascendance: Bestows divine grace, temporal distortion, or reality manipulation upon world elements.",
            "Transcendent Influence: Directly commands entities, ecosystems, and physical laws."
        ],
        "lore": "Transforms creature into an immortal godlike cosmic deity.",
        "tactics": "Empower favored mortal champions into immortal titans or enforce world peace treaties during devastating global wars.",
        "counters": "Opposing divine edicts, antimatter erasure, or cataclysmic apocalypse powers.",
        "related": [],
        "toolId": "apotheosis",
        "actionLabel": "Use Apotheosis Ascendance"
    },
    "storm_griffin": {
        "id": "storm_griffin",
        "category": "Creatures & Civs",
        "title": "Storm Griffin",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "storm_griffin",
            "storm_griffin"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "storm_griffin",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Majestic winged griffin firing lightning arcs and diving.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "storm_griffin",
        "actionLabel": "Spawn Storm Griffin"
    },
    "abyssal_angler": {
        "id": "abyssal_angler",
        "category": "Creatures & Civs",
        "title": "Abyssal Angler",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "abyssal_angler",
            "abyssal_angler"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "abyssal_angler",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Deep sea terror with glowing lure and razor maw.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "abyssal_angler",
        "actionLabel": "Spawn Abyssal Angler"
    },
    "sun_falcon": {
        "id": "sun_falcon",
        "category": "Creatures & Civs",
        "title": "Solar Sun Falcon",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "sun_falcon",
            "solar_sun_falcon"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "sun_falcon",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Blazing aerial raptor leaving radiant fire trails.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "sun_falcon",
        "actionLabel": "Spawn Solar Sun Falcon"
    },
    "magma_salamander": {
        "id": "magma_salamander",
        "category": "Creatures & Civs",
        "title": "Magma Salamander",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "magma_salamander",
            "magma_salamander"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "magma_salamander",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Volcanic lizard swimming through molten lava.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "magma_salamander",
        "actionLabel": "Spawn Magma Salamander"
    },
    "crystal_spider": {
        "id": "crystal_spider",
        "category": "Creatures & Civs",
        "title": "Crystal Arachnid",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "crystal_spider",
            "crystal_arachnid"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "crystal_spider",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Luminescent prismatic spider weaving crystal webs.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "crystal_spider",
        "actionLabel": "Spawn Crystal Arachnid"
    },
    "void_stalker": {
        "id": "void_stalker",
        "category": "Creatures & Civs",
        "title": "Void Stalker",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "void_stalker",
            "void_stalker"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "void_stalker",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Shadow predator phasing through reality with stealth.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "void_stalker",
        "actionLabel": "Spawn Void Stalker"
    },
    "thunder_ram": {
        "id": "thunder_ram",
        "category": "Creatures & Civs",
        "title": "Thunder Ram",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "thunder_ram",
            "thunder_ram"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "thunder_ram",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Horned storm ram charging with electric concussions.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "thunder_ram",
        "actionLabel": "Spawn Thunder Ram"
    },
    "sand_wurm": {
        "id": "sand_wurm",
        "category": "Creatures & Civs",
        "title": "Primeval Sand Wurm",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "sand_wurm",
            "primeval_sand_wurm"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "sand_wurm",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Segmented desert titan devouring dunes.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "sand_wurm",
        "actionLabel": "Spawn Primeval Sand Wurm"
    },
    "elder_wyrm": {
        "id": "elder_wyrm",
        "category": "Creatures & Civs",
        "title": "Ancient Elder Wyrm",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "elder_wyrm",
            "ancient_elder_wyrm"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "elder_wyrm",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Legendary winged arch-dragon with cosmic beam breath.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "elder_wyrm",
        "actionLabel": "Spawn Ancient Elder Wyrm"
    },
    "chimera": {
        "id": "chimera",
        "category": "Creatures & Civs",
        "title": "Mythic Chimera",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "chimera",
            "mythic_chimera"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "chimera",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Lion, goat and snake hybrid breathing venom and fire.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "chimera",
        "actionLabel": "Spawn Mythic Chimera"
    },
    "basilisk": {
        "id": "basilisk",
        "category": "Creatures & Civs",
        "title": "Petrifying Basilisk",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "basilisk",
            "petrifying_basilisk"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "basilisk",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Reptilian beast freezing victims into solid stone.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "basilisk",
        "actionLabel": "Spawn Petrifying Basilisk"
    },
    "lich_king": {
        "id": "lich_king",
        "category": "Creatures & Civs",
        "title": "Nether Lich King",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "lich_king",
            "nether_lich_king"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "lich_king",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Undead sovereign commanding legions of skeletons.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "lich_king",
        "actionLabel": "Spawn Nether Lich King"
    },
    "cyber_mech_titan": {
        "id": "cyber_mech_titan",
        "category": "Creatures & Civs",
        "title": "Cyber Mech Titan",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "cyber_mech_titan",
            "cyber_mech_titan"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "cyber_mech_titan",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Armored quadruped war mech with twin rotary lasers.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "cyber_mech_titan",
        "actionLabel": "Spawn Cyber Mech Titan"
    },
    "cerberus": {
        "id": "cerberus",
        "category": "Creatures & Civs",
        "title": "Three-Headed Cerberus",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "cerberus",
            "three-headed_cerberus"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "cerberus",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Nether hellhound guarding the underworld with hellfire.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "cerberus",
        "actionLabel": "Spawn Three-Headed Cerberus"
    },
    "sea_serpent": {
        "id": "sea_serpent",
        "category": "Creatures & Civs",
        "title": "Azure Sea Serpent",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "sea_serpent",
            "azure_sea_serpent"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "sea_serpent",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Aquatic leviathan coiled in the deepest oceanic trenches.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "sea_serpent",
        "actionLabel": "Spawn Azure Sea Serpent"
    },
    "yeti": {
        "id": "yeti",
        "category": "Creatures & Civs",
        "title": "Abominable Yeti",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "yeti",
            "abominable_yeti"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "yeti",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Mountain frost colossus hurling giant snow boulders.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "yeti",
        "actionLabel": "Spawn Abominable Yeti"
    },
    "djinn": {
        "id": "djinn",
        "category": "Creatures & Civs",
        "title": "Mystic Djinn",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "djinn",
            "mystic_djinn"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "djinn",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Levitating genie of the lamp conjuring mystic whirlwinds.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "djinn",
        "actionLabel": "Spawn Mystic Djinn"
    },
    "centaur": {
        "id": "centaur",
        "category": "Creatures & Civs",
        "title": "Sylvan Centaur",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "centaur",
            "sylvan_centaur"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "centaur",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Half-human half-horse archer galloping through woods.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "centaur",
        "actionLabel": "Spawn Sylvan Centaur"
    },
    "mummy_pharaoh": {
        "id": "mummy_pharaoh",
        "category": "Creatures & Civs",
        "title": "Cursed Mummy Pharaoh",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "mummy_pharaoh",
            "cursed_mummy_pharaoh"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "mummy_pharaoh",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Ancient royal corpse summoning sandstorms and curses.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "mummy_pharaoh",
        "actionLabel": "Spawn Cursed Mummy Pharaoh"
    },
    "alien_overlord": {
        "id": "alien_overlord",
        "category": "Creatures & Civs",
        "title": "Alien Overlord",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "alien_overlord",
            "alien_overlord"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "alien_overlord",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Extraterrestrial mastermind with psychic telekinesis.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "alien_overlord",
        "actionLabel": "Spawn Alien Overlord"
    },
    "solar_phoenix": {
        "id": "solar_phoenix",
        "category": "Creatures & Civs",
        "title": "Solar Phoenix",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "solar_phoenix",
            "solar_phoenix"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "solar_phoenix",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Radiant fiery firebird born from the heart of collapsing stars.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "solar_phoenix",
        "actionLabel": "Spawn Solar Phoenix"
    },
    "frost_wyrm": {
        "id": "frost_wyrm",
        "category": "Creatures & Civs",
        "title": "Frost Wyrm",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "frost_wyrm",
            "frost_wyrm"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "frost_wyrm",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Glacial serpentine dragon chilling air and breathing frost shards.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "frost_wyrm",
        "actionLabel": "Spawn Frost Wyrm"
    },
    "iron_behemoth": {
        "id": "iron_behemoth",
        "category": "Creatures & Civs",
        "title": "Iron Behemoth",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "iron_behemoth",
            "iron_behemoth"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "iron_behemoth",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Colossal iron-clad quadruped titan causing localized earthquakes.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "iron_behemoth",
        "actionLabel": "Spawn Iron Behemoth"
    },
    "celestial_archon": {
        "id": "celestial_archon",
        "category": "Creatures & Civs",
        "title": "Celestial Archon",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "celestial_archon",
            "celestial_archon"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "celestial_archon",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Transcendent winged guardian channeling blinding divine rays.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "celestial_archon",
        "actionLabel": "Spawn Celestial Archon"
    },
    "shadow_stalker": {
        "id": "shadow_stalker",
        "category": "Creatures & Civs",
        "title": "Shadow Stalker",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "shadow_stalker",
            "shadow_stalker"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "shadow_stalker",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Deadly phantom assassin slipping invisibly through defenses.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "shadow_stalker",
        "actionLabel": "Spawn Shadow Stalker"
    },
    "deep_leviathan": {
        "id": "deep_leviathan",
        "category": "Creatures & Civs",
        "title": "Deep Leviathan",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "deep_leviathan",
            "deep_leviathan"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "deep_leviathan",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Primordial oceanic titan commanding whirlpools and tidal surges.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "deep_leviathan",
        "actionLabel": "Spawn Deep Leviathan"
    },
    "volcanic_drake": {
        "id": "volcanic_drake",
        "category": "Creatures & Civs",
        "title": "Volcanic Drake",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "volcanic_drake",
            "volcanic_drake"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "volcanic_drake",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Magma-crested drake spitting volatile explosive slag.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "volcanic_drake",
        "actionLabel": "Spawn Volcanic Drake"
    },
    "storm_valkyrie": {
        "id": "storm_valkyrie",
        "category": "Creatures & Civs",
        "title": "Storm Valkyrie",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "storm_valkyrie",
            "storm_valkyrie"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "storm_valkyrie",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Electrified maiden of battle hurling crackling thunderbolts.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "storm_valkyrie",
        "actionLabel": "Spawn Storm Valkyrie"
    },
    "mecha_colossus": {
        "id": "mecha_colossus",
        "category": "Creatures & Civs",
        "title": "Mecha Colossus",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "mecha_colossus",
            "mecha_colossus"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "mecha_colossus",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Heavy bipedal siege mech equipped with twin hyper-lasers.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "mecha_colossus",
        "actionLabel": "Spawn Mecha Colossus"
    },
    "astral_unicorn": {
        "id": "astral_unicorn",
        "category": "Creatures & Civs",
        "title": "Astral Unicorn",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "astral_unicorn",
            "astral_unicorn"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "astral_unicorn",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Benevolent horned steed blessing ground with healing stardust.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "astral_unicorn",
        "actionLabel": "Spawn Astral Unicorn"
    },
    "chronomancer": {
        "id": "chronomancer",
        "category": "Creatures & Civs",
        "title": "Chronomancer",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "chronomancer",
            "chronomancer"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "chronomancer",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Spacetime sorcerer warping through space and freezing foes.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "chronomancer",
        "actionLabel": "Spawn Chronomancer"
    },
    "spectral_knight": {
        "id": "spectral_knight",
        "category": "Creatures & Civs",
        "title": "Spectral Knight",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "spectral_knight",
            "spectral_knight"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "spectral_knight",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Ghostly warrior clad in ethereal armor reflecting incoming attacks.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "spectral_knight",
        "actionLabel": "Spawn Spectral Knight"
    },
    "sand_reaper": {
        "id": "sand_reaper",
        "category": "Creatures & Civs",
        "title": "Sand Reaper",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "sand_reaper",
            "sand_reaper"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "sand_reaper",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Arid predator hunting under desert dunes with razor pincers.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "sand_reaper",
        "actionLabel": "Spawn Sand Reaper"
    },
    "forest_ancient": {
        "id": "forest_ancient",
        "category": "Creatures & Civs",
        "title": "Forest Ancient",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "forest_ancient",
            "forest_ancient"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "forest_ancient",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Millennia-old treant titan crushing fortresses with mighty limbs.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "forest_ancient",
        "actionLabel": "Spawn Forest Ancient"
    },
    "plague_bringer": {
        "id": "plague_bringer",
        "category": "Creatures & Civs",
        "title": "Plague Bringer",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "plague_bringer",
            "plague_bringer"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "plague_bringer",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Noxious harbinger spreading corrosive rot and raising undead.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "plague_bringer",
        "actionLabel": "Spawn Plague Bringer"
    },
    "crystal_scorpion": {
        "id": "crystal_scorpion",
        "category": "Creatures & Civs",
        "title": "Crystal Scorpion",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "crystal_scorpion",
            "crystal_scorpion"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "crystal_scorpion",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Armored carapace refracting lasers with venomous tail stinger.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "crystal_scorpion",
        "actionLabel": "Spawn Crystal Scorpion"
    },
    "thunder_hawk": {
        "id": "thunder_hawk",
        "category": "Creatures & Civs",
        "title": "Thunder Hawk",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "thunder_hawk",
            "thunder_hawk"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "thunder_hawk",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "High-altitude bird of prey diving with sonic boom electricity.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "thunder_hawk",
        "actionLabel": "Spawn Thunder Hawk"
    },
    "magma_elemental": {
        "id": "magma_elemental",
        "category": "Creatures & Civs",
        "title": "Magma Elemental",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "magma_elemental",
            "magma_elemental"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "magma_elemental",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Living sentient molten rock igniting terrain wherever it treads.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "magma_elemental",
        "actionLabel": "Spawn Magma Elemental"
    },
    "frost_banshee": {
        "id": "frost_banshee",
        "category": "Creatures & Civs",
        "title": "Frost Banshee",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "frost_banshee",
            "frost_banshee"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "frost_banshee",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Floating spirit whose piercing wail flash-freezes victims.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "frost_banshee",
        "actionLabel": "Spawn Frost Banshee"
    },
    "dune_crawler": {
        "id": "dune_crawler",
        "category": "Creatures & Civs",
        "title": "Dune Crawler",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "dune_crawler",
            "dune_crawler"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "dune_crawler",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Massive armored desert centipede burrowing through sands.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "dune_crawler",
        "actionLabel": "Spawn Dune Crawler"
    },
    "void_horror": {
        "id": "void_horror",
        "category": "Creatures & Civs",
        "title": "Void Horror",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "void_horror",
            "void_horror"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "void_horror",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Multi-eyed cosmic entity warping reality and firing void beams.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "void_horror",
        "actionLabel": "Spawn Void Horror"
    },
    "sun_warrior": {
        "id": "sun_warrior",
        "category": "Creatures & Civs",
        "title": "Sun Warrior",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "sun_warrior",
            "sun_warrior"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "sun_warrior",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Solar-infused champion wielding a blazing solar blade.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "sun_warrior",
        "actionLabel": "Spawn Sun Warrior"
    },
    "abyssal_kraken_spawn": {
        "id": "abyssal_kraken_spawn",
        "category": "Creatures & Civs",
        "title": "Kraken Spawn",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "abyssal_kraken_spawn",
            "kraken_spawn"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "abyssal_kraken_spawn",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Deep-sea cephalopod pulling unwary sailors into ocean depths.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "abyssal_kraken_spawn",
        "actionLabel": "Spawn Kraken Spawn"
    },
    "runic_golem": {
        "id": "runic_golem",
        "category": "Creatures & Civs",
        "title": "Runic Golem",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "runic_golem",
            "runic_golem"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "runic_golem",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Ancient stone automaton powered by glowing arcane glyphs.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "runic_golem",
        "actionLabel": "Spawn Runic Golem"
    },
    "cyber_hound": {
        "id": "cyber_hound",
        "category": "Creatures & Civs",
        "title": "Cyber Hound",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "cyber_hound",
            "cyber_hound"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "cyber_hound",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Fast bionic scouting hound equipped with targeting laser optic.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "cyber_hound",
        "actionLabel": "Spawn Cyber Hound"
    },
    "blood_fiend": {
        "id": "blood_fiend",
        "category": "Creatures & Civs",
        "title": "Blood Fiend",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "blood_fiend",
            "blood_fiend"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "blood_fiend",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Voracious predatory vampire feasting on defeated adversaries.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "blood_fiend",
        "actionLabel": "Spawn Blood Fiend"
    },
    "titan_dreadnought": {
        "id": "titan_dreadnought",
        "category": "Creatures & Civs",
        "title": "Titan Dreadnought",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "titan_dreadnought",
            "titan_dreadnought"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "titan_dreadnought",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Colossal floating gunship fortress bristling with heavy artillery.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "titan_dreadnought",
        "actionLabel": "Spawn Titan Dreadnought"
    },
    "steampunk_airship": {
        "id": "steampunk_airship",
        "category": "Creatures & Civs",
        "title": "Steampunk Airship",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "steampunk_airship",
            "steampunk_airship"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "steampunk_airship",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Twin-propeller dirigible dropping explosive mortar bombs.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "steampunk_airship",
        "actionLabel": "Spawn Steampunk Airship"
    },
    "quantum_mech": {
        "id": "quantum_mech",
        "category": "Creatures & Civs",
        "title": "Quantum Mech",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "quantum_mech",
            "quantum_mech"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "quantum_mech",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Advanced mech teleporting across battlefield in cyan energy flashes.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "quantum_mech",
        "actionLabel": "Spawn Quantum Mech"
    },
    "cosmic_dragon": {
        "id": "cosmic_dragon",
        "category": "Creatures & Civs",
        "title": "Cosmic Dragon",
        "subtitle": "Creatures & Civs Encyclopedia Article",
        "tags": [
            "creatures",
            "cosmic_dragon",
            "cosmic_dragon"
        ],
        "stats": {
            "Category": "Creatures & Civs",
            "Tool ID": "cosmic_dragon",
            "Species Classification": "Living Entity / Colossus",
            "Combat Role": "Controllable Unit",
            "AI Behavior": "Autonomous / Possessable"
        },
        "abilities": [
            "Primary Ability: Direct-fire attack or projectile blast [WASD / Space / Left-Click].",
            "Special Ability: Ultimate shockwave, stasis, or defensive power [Q / Right-Click / E]."
        ],
        "lore": "Supreme stellar dragon breathing prismatic galaxy fire across the world.",
        "tactics": "Possess directly using Possess Tool to pilot movement and unleash active abilities in combat.",
        "counters": "Heavy orbital artillery, concentrated sniper fire, cryo freeze, or high-tier titan bosses.",
        "related": [],
        "toolId": "cosmic_dragon",
        "actionLabel": "Spawn Cosmic Dragon"
    },
    "btn_fpv_quick": {
        "id": "btn_fpv_quick",
        "category": "Menu & World Tools",
        "title": "Launch 1st-Person",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "btn_fpv_quick",
            "launch_1st-person"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "btn_fpv_quick",
            "System Utility": "Launch 1st-Person",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Jump straight into 3D First-Person View mode.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "btn_fpv_quick",
        "actionLabel": "Use Launch 1st-Person"
    },
    "btn_codex_quick": {
        "id": "btn_codex_quick",
        "category": "Menu & World Tools",
        "title": "Open Galaxy Codex",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "btn_codex_quick",
            "open_galaxy_codex"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "btn_codex_quick",
            "System Utility": "Open Galaxy Codex",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Browse the complete encyclopedia and guides.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "btn_codex_quick",
        "actionLabel": "Use Open Galaxy Codex"
    },
    "btn_3d_quick": {
        "id": "btn_3d_quick",
        "category": "Menu & World Tools",
        "title": "Toggle 3D Mode",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "btn_3d_quick",
            "toggle_3d_mode"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "btn_3d_quick",
            "System Utility": "Toggle 3D Mode",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Switch between 2D pixel view and 3D heightfield voxel view.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "btn_3d_quick",
        "actionLabel": "Use Toggle 3D Mode"
    },
    "btn_time_day": {
        "id": "btn_time_day",
        "category": "Menu & World Tools",
        "title": "Set Time: Dawn",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "btn_time_day",
            "set_time:_dawn"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "btn_time_day",
            "System Utility": "Set Time: Dawn",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Set time of day to sunrise (6:00 AM).",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "btn_time_day",
        "actionLabel": "Use Set Time: Dawn"
    },
    "btn_time_noon": {
        "id": "btn_time_noon",
        "category": "Menu & World Tools",
        "title": "Set Time: Noon",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "btn_time_noon",
            "set_time:_noon"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "btn_time_noon",
            "System Utility": "Set Time: Noon",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Set time of day to high noon (12:00 PM).",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "btn_time_noon",
        "actionLabel": "Use Set Time: Noon"
    },
    "btn_time_dusk": {
        "id": "btn_time_dusk",
        "category": "Menu & World Tools",
        "title": "Set Time: Dusk",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "btn_time_dusk",
            "set_time:_dusk"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "btn_time_dusk",
            "System Utility": "Set Time: Dusk",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Set time of day to sunset (6:00 PM).",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "btn_time_dusk",
        "actionLabel": "Use Set Time: Dusk"
    },
    "btn_time_night": {
        "id": "btn_time_night",
        "category": "Menu & World Tools",
        "title": "Set Time: Midnight",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "btn_time_night",
            "set_time:_midnight"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "btn_time_night",
            "System Utility": "Set Time: Midnight",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Set time of day to starry midnight (12:00 AM).",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "btn_time_night",
        "actionLabel": "Use Set Time: Midnight"
    },
    "btn_kill_all_monsters": {
        "id": "btn_kill_all_monsters",
        "category": "Menu & World Tools",
        "title": "Slay All Monsters",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "btn_kill_all_monsters",
            "slay_all_monsters"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "btn_kill_all_monsters",
            "System Utility": "Slay All Monsters",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Cleanse the realm of all hostile beasts and undead.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "btn_kill_all_monsters",
        "actionLabel": "Use Slay All Monsters"
    },
    "btn_bless_all": {
        "id": "btn_bless_all",
        "category": "Menu & World Tools",
        "title": "Bless All Creatures",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "btn_bless_all",
            "bless_all_creatures"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "btn_bless_all",
            "System Utility": "Bless All Creatures",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Grant divine blessing, 2x HP, and immortality to all.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "btn_bless_all",
        "actionLabel": "Use Bless All Creatures"
    },
    "btn_heal_all_world": {
        "id": "btn_heal_all_world",
        "category": "Menu & World Tools",
        "title": "Heal Entire World",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "btn_heal_all_world",
            "heal_entire_world"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "btn_heal_all_world",
            "System Utility": "Heal Entire World",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Instantly restore all creatures to 100% health.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "btn_heal_all_world",
        "actionLabel": "Use Heal Entire World"
    },
    "btn_unfreeze_world": {
        "id": "btn_unfreeze_world",
        "category": "Menu & World Tools",
        "title": "Thaw All Ice",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "btn_unfreeze_world",
            "thaw_all_ice"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "btn_unfreeze_world",
            "System Utility": "Thaw All Ice",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Melt all ice sheets and glaciated permafrost into water.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "btn_unfreeze_world",
        "actionLabel": "Use Thaw All Ice"
    },
    "btn_extinguish_all": {
        "id": "btn_extinguish_all",
        "category": "Menu & World Tools",
        "title": "Extinguish Wildfires",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "btn_extinguish_all",
            "extinguish_wildfires"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "btn_extinguish_all",
            "System Utility": "Extinguish Wildfires",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Extinguish all raging fires and cooling hot spots.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "btn_extinguish_all",
        "actionLabel": "Use Extinguish Wildfires"
    },
    "btn_repopulate": {
        "id": "btn_repopulate",
        "category": "Menu & World Tools",
        "title": "Repopulate Settlements",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "btn_repopulate",
            "repopulate_settlements"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "btn_repopulate",
            "System Utility": "Repopulate Settlements",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Spawn 5 humans, elves, dwarves, and orcs into villages.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "btn_repopulate",
        "actionLabel": "Use Repopulate Settlements"
    },
    "btn_advance_eras": {
        "id": "btn_advance_eras",
        "category": "Menu & World Tools",
        "title": "Advance All Eras",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "btn_advance_eras",
            "advance_all_eras"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "btn_advance_eras",
            "System Utility": "Advance All Eras",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Accelerate civilization technological era for all kingdoms.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "btn_advance_eras",
        "actionLabel": "Use Advance All Eras"
    },
    "btn_clean_corpses": {
        "id": "btn_clean_corpses",
        "category": "Menu & World Tools",
        "title": "Clear All Corpses",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "btn_clean_corpses",
            "clear_all_corpses"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "btn_clean_corpses",
            "System Utility": "Clear All Corpses",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Vaporize all fallen bodies, skeletons, and battlefield debris.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "btn_clean_corpses",
        "actionLabel": "Use Clear All Corpses"
    },
    "btn_quicken_crops": {
        "id": "btn_quicken_crops",
        "category": "Menu & World Tools",
        "title": "Maximize Agriculture",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "btn_quicken_crops",
            "maximize_agriculture"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "btn_quicken_crops",
            "System Utility": "Maximize Agriculture",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Instantly mature all crops, forests, and flora.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "btn_quicken_crops",
        "actionLabel": "Use Maximize Agriculture"
    },
    "btn_random_event": {
        "id": "btn_random_event",
        "category": "Menu & World Tools",
        "title": "Trigger Chaos Event",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "btn_random_event",
            "trigger_chaos_event"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "btn_random_event",
            "System Utility": "Trigger Chaos Event",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Roll a random cosmic or environmental event!",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "btn_random_event",
        "actionLabel": "Use Trigger Chaos Event"
    },
    "btn_turbo_speed": {
        "id": "btn_turbo_speed",
        "category": "Menu & World Tools",
        "title": "Turbo Speed (10x)",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "btn_turbo_speed",
            "turbo_speed_(10x)"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "btn_turbo_speed",
            "System Utility": "Turbo Speed (10x)",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Run simulation at ultra-fast 10x clock rate.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "btn_turbo_speed",
        "actionLabel": "Use Turbo Speed (10x)"
    },
    "btn_camera_center": {
        "id": "btn_camera_center",
        "category": "Menu & World Tools",
        "title": "Recenter Camera",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "btn_camera_center",
            "recenter_camera"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "btn_camera_center",
            "System Utility": "Recenter Camera",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Reset zoom and pan directly to the world center.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "btn_camera_center",
        "actionLabel": "Use Recenter Camera"
    },
    "btn_photo_mode": {
        "id": "btn_photo_mode",
        "category": "Menu & World Tools",
        "title": "Cinematic Clean View",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "btn_photo_mode",
            "cinematic_clean_view"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "btn_photo_mode",
            "System Utility": "Cinematic Clean View",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Toggle full immersion mode hiding all HUD elements.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "btn_photo_mode",
        "actionLabel": "Use Cinematic Clean View"
    },
    "brush_circle_small": {
        "id": "brush_circle_small",
        "category": "Menu & World Tools",
        "title": "1-Tile Needle Brush",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "brush_circle_small",
            "1-tile_needle_brush"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "brush_circle_small",
            "System Utility": "1-Tile Needle Brush",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Set brush size to fine single-pixel precision.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "brush_circle_small",
        "actionLabel": "Use 1-Tile Needle Brush"
    },
    "brush_square_medium": {
        "id": "brush_square_medium",
        "category": "Menu & World Tools",
        "title": "Medium Brush (Size 3)",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "brush_square_medium",
            "medium_brush_(size_3)"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "brush_square_medium",
            "System Utility": "Medium Brush (Size 3)",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Set brush size to 3-tile radius for quick sculpting.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "brush_square_medium",
        "actionLabel": "Use Medium Brush (Size 3)"
    },
    "brush_diamond_large": {
        "id": "brush_diamond_large",
        "category": "Menu & World Tools",
        "title": "Large Brush (Size 7)",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "brush_diamond_large",
            "large_brush_(size_7)"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "brush_diamond_large",
            "System Utility": "Large Brush (Size 7)",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Set brush size to 7-tile radius for sweeping changes.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "brush_diamond_large",
        "actionLabel": "Use Large Brush (Size 7)"
    },
    "fill_bucket": {
        "id": "fill_bucket",
        "category": "Menu & World Tools",
        "title": "Flood Fill Bucket",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "fill_bucket",
            "flood_fill_bucket"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "fill_bucket",
            "System Utility": "Flood Fill Bucket",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Flood fills connected area of same terrain with green grass.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "fill_bucket",
        "actionLabel": "Use Flood Fill Bucket"
    },
    "smooth_terrain": {
        "id": "smooth_terrain",
        "category": "Menu & World Tools",
        "title": "Terrain Smoothing Filter",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "smooth_terrain",
            "terrain_smoothing_filter"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "smooth_terrain",
            "System Utility": "Terrain Smoothing Filter",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Averages and softens harsh terrain elevation jaggedness.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "smooth_terrain",
        "actionLabel": "Use Terrain Smoothing Filter"
    },
    "noise_generator": {
        "id": "noise_generator",
        "category": "Menu & World Tools",
        "title": "Perlin Noise Generator",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "noise_generator",
            "perlin_noise_generator"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "noise_generator",
            "System Utility": "Perlin Noise Generator",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Generates organic Perlin noise fractal patterns.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "noise_generator",
        "actionLabel": "Use Perlin Noise Generator"
    },
    "erase_all_fire": {
        "id": "erase_all_fire",
        "category": "Menu & World Tools",
        "title": "Extinguish All Flames",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "erase_all_fire",
            "extinguish_all_flames"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "erase_all_fire",
            "System Utility": "Extinguish All Flames",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Instantly extinguishes all burning tiles across the world.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "erase_all_fire",
        "actionLabel": "Use Extinguish All Flames"
    },
    "quench_lava": {
        "id": "quench_lava",
        "category": "Menu & World Tools",
        "title": "Quench Magma to Obsidian",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "quench_lava",
            "quench_magma_to_obsidian"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "quench_lava",
            "System Utility": "Quench Magma to Obsidian",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Globally solidifies all molten lava into sturdy obsidian.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "quench_lava",
        "actionLabel": "Use Quench Magma to Obsidian"
    },
    "clear_all_acid": {
        "id": "clear_all_acid",
        "category": "Menu & World Tools",
        "title": "Neutralize All Acid",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "clear_all_acid",
            "neutralize_all_acid"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "clear_all_acid",
            "System Utility": "Neutralize All Acid",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Globally cleanses and turns corrosive acid pools into pure water.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "clear_all_acid",
        "actionLabel": "Use Neutralize All Acid"
    },
    "resurrect_dead": {
        "id": "resurrect_dead",
        "category": "Menu & World Tools",
        "title": "Global Necro Resurrection",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "resurrect_dead",
            "global_necro_resurrection"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "resurrect_dead",
            "System Utility": "Global Necro Resurrection",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Miraculously revives all fallen corpses across entire world.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "resurrect_dead",
        "actionLabel": "Use Global Necro Resurrection"
    },
    "clear_debris": {
        "id": "clear_debris",
        "category": "Menu & World Tools",
        "title": "Clear All Skeletons & Ash",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "clear_debris",
            "clear_all_skeletons_&_ash"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "clear_debris",
            "System Utility": "Clear All Skeletons & Ash",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Cleanses all burnt ash, rubble, and dead skeletons from map.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "clear_debris",
        "actionLabel": "Use Clear All Skeletons & Ash"
    },
    "biome_temperate_stamp": {
        "id": "biome_temperate_stamp",
        "category": "Menu & World Tools",
        "title": "Temperate Forest Stamp",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "biome_temperate_stamp",
            "temperate_forest_stamp"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "biome_temperate_stamp",
            "System Utility": "Temperate Forest Stamp",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Stamps lush temperate woodland with trees and fertile soil.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "biome_temperate_stamp",
        "actionLabel": "Use Temperate Forest Stamp"
    },
    "biome_desert_stamp": {
        "id": "biome_desert_stamp",
        "category": "Menu & World Tools",
        "title": "Saharan Desert Stamp",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "biome_desert_stamp",
            "saharan_desert_stamp"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "biome_desert_stamp",
            "System Utility": "Saharan Desert Stamp",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Stamps sprawling golden dunes and desert sands.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "biome_desert_stamp",
        "actionLabel": "Use Saharan Desert Stamp"
    },
    "biome_snow_stamp": {
        "id": "biome_snow_stamp",
        "category": "Menu & World Tools",
        "title": "Arctic Ice Sheet Stamp",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "biome_snow_stamp",
            "arctic_ice_sheet_stamp"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "biome_snow_stamp",
            "System Utility": "Arctic Ice Sheet Stamp",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Stamps freezing polar ice cap with permafrost and snow.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "biome_snow_stamp",
        "actionLabel": "Use Arctic Ice Sheet Stamp"
    },
    "biome_volcanic_stamp": {
        "id": "biome_volcanic_stamp",
        "category": "Menu & World Tools",
        "title": "Volcanic Hellscape Stamp",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "biome_volcanic_stamp",
            "volcanic_hellscape_stamp"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "biome_volcanic_stamp",
            "System Utility": "Volcanic Hellscape Stamp",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Stamps molten volcanic caldera with magma rock and basalt.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "biome_volcanic_stamp",
        "actionLabel": "Use Volcanic Hellscape Stamp"
    },
    "biome_alien_stamp": {
        "id": "biome_alien_stamp",
        "category": "Menu & World Tools",
        "title": "Aether Alien Biome Stamp",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "biome_alien_stamp",
            "aether_alien_biome_stamp"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "biome_alien_stamp",
            "System Utility": "Aether Alien Biome Stamp",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Stamps cosmic nebula stardust with glowing crystals.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "biome_alien_stamp",
        "actionLabel": "Use Aether Alien Biome Stamp"
    },
    "biome_ocean_stamp": {
        "id": "biome_ocean_stamp",
        "category": "Menu & World Tools",
        "title": "Ocean Trench Stamp",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "biome_ocean_stamp",
            "ocean_trench_stamp"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "biome_ocean_stamp",
            "System Utility": "Ocean Trench Stamp",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Stamps deep oceanic trenches filled with coral reefs.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "biome_ocean_stamp",
        "actionLabel": "Use Ocean Trench Stamp"
    },
    "stat_viewer": {
        "id": "stat_viewer",
        "category": "Menu & World Tools",
        "title": "Ecosystem Diagnostics",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "stat_viewer",
            "ecosystem_diagnostics"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "stat_viewer",
            "System Utility": "Ecosystem Diagnostics",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Displays comprehensive population, kingdom, and world stats.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "stat_viewer",
        "actionLabel": "Use Ecosystem Diagnostics"
    },
    "kingdom_ledger": {
        "id": "kingdom_ledger",
        "category": "Menu & World Tools",
        "title": "Geopolitical Ledger",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "kingdom_ledger",
            "geopolitical_ledger"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "kingdom_ledger",
            "System Utility": "Geopolitical Ledger",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Opens the Kingdom Diplomacy and Alliance ledger modal.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "kingdom_ledger",
        "actionLabel": "Use Geopolitical Ledger"
    },
    "creature_census": {
        "id": "creature_census",
        "category": "Menu & World Tools",
        "title": "Species Census Monitor",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "creature_census",
            "species_census_monitor"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "creature_census",
            "System Utility": "Species Census Monitor",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Calculates global census count of all living species.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "creature_census",
        "actionLabel": "Use Species Census Monitor"
    },
    "day_speed_slider": {
        "id": "day_speed_slider",
        "category": "Menu & World Tools",
        "title": "Day Cycle Accelerate",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "day_speed_slider",
            "day_cycle_accelerate"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "day_speed_slider",
            "System Utility": "Day Cycle Accelerate",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Toggles between 1x, 2x, 4x, and 8x day-night cycle speed.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "day_speed_slider",
        "actionLabel": "Use Day Cycle Accelerate"
    },
    "night_skip": {
        "id": "night_skip",
        "category": "Menu & World Tools",
        "title": "Skip to Sunrise",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "night_skip",
            "skip_to_sunrise"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "night_skip",
            "System Utility": "Skip to Sunrise",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Advances simulation time directly to 8:00 AM bright daylight.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "night_skip",
        "actionLabel": "Use Skip to Sunrise"
    },
    "toggle_bloom": {
        "id": "toggle_bloom",
        "category": "Menu & World Tools",
        "title": "Toggle Starlight Bloom",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "toggle_bloom",
            "toggle_starlight_bloom"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "toggle_bloom",
            "System Utility": "Toggle Starlight Bloom",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Toggles glowing celestial bloom post-processing shaders.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "toggle_bloom",
        "actionLabel": "Use Toggle Starlight Bloom"
    },
    "toggle_vignette": {
        "id": "toggle_vignette",
        "category": "Menu & World Tools",
        "title": "Toggle Cinematic Vignette",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "toggle_vignette",
            "toggle_cinematic_vignette"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "toggle_vignette",
            "System Utility": "Toggle Cinematic Vignette",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Toggles vintage CRT vignette border aesthetic.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "toggle_vignette",
        "actionLabel": "Use Toggle Cinematic Vignette"
    },
    "toggle_shadows": {
        "id": "toggle_shadows",
        "category": "Menu & World Tools",
        "title": "Toggle Dynamic Shadows",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "toggle_shadows",
            "toggle_dynamic_shadows"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "toggle_shadows",
            "System Utility": "Toggle Dynamic Shadows",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Toggles real-time sun/moon terrain drop shadows on/off.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "toggle_shadows",
        "actionLabel": "Use Toggle Dynamic Shadows"
    },
    "screenshot_tool": {
        "id": "screenshot_tool",
        "category": "Menu & World Tools",
        "title": "Capture High-Res Photo",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "screenshot_tool",
            "capture_high-res_photo"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "screenshot_tool",
            "System Utility": "Capture High-Res Photo",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Takes high-resolution snapshot and initiates instant PNG download.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "screenshot_tool",
        "actionLabel": "Use Capture High-Res Photo"
    },
    "reset_view": {
        "id": "reset_view",
        "category": "Menu & World Tools",
        "title": "Recenter Cosmic Camera",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "reset_view",
            "recenter_cosmic_camera"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "reset_view",
            "System Utility": "Recenter Cosmic Camera",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Centers camera on origin, resetting zoom and tilt.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "reset_view",
        "actionLabel": "Use Recenter Cosmic Camera"
    },
    "seed_generator": {
        "id": "seed_generator",
        "category": "Menu & World Tools",
        "title": "Regenerate Universe Seed",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "seed_generator",
            "regenerate_universe_seed"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "seed_generator",
            "System Utility": "Regenerate Universe Seed",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Generates a new universe seed and recreates world terrain.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "seed_generator",
        "actionLabel": "Use Regenerate Universe Seed"
    },
    "export_history": {
        "id": "export_history",
        "category": "Menu & World Tools",
        "title": "Chronicle Lore Export",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "export_history",
            "chronicle_lore_export"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "export_history",
            "System Utility": "Chronicle Lore Export",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Exports world history and kingdom events as a JSON file.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "export_history",
        "actionLabel": "Use Chronicle Lore Export"
    },
    "fps_turbo": {
        "id": "fps_turbo",
        "category": "Menu & World Tools",
        "title": "Overclock Physics Engine",
        "subtitle": "Menu & World Tools Encyclopedia Article",
        "tags": [
            "menu",
            "fps_turbo",
            "overclock_physics_engine"
        ],
        "stats": {
            "Category": "Menu & World Tools",
            "Tool ID": "fps_turbo",
            "System Utility": "Overclock Physics Engine",
            "Scope": "Global Engine / Interface",
            "Operation": "Instantaneous"
        },
        "abilities": [
            "Engine Control: Modifies simulation speed, camera view, rendering filters, or world seed.",
            "World Diagnostics: Inspects ecological balance, kingdom populations, and performance metrics."
        ],
        "lore": "Unlocks 120 FPS high-rate physics tick execution.",
        "tactics": "Use system utilities to balance active civil wars, capture cinematic photos, or accelerate timeline progression.",
        "counters": "Reset View or default presets easily restore initial parameters.",
        "related": [],
        "toolId": "fps_turbo",
        "actionLabel": "Use Overclock Physics Engine"
    }
};

if (typeof module !== "undefined") { module.exports = { GALAXY_PEDIA }; }
if (typeof window !== "undefined") { window.GALAXY_PEDIA = GALAXY_PEDIA; }
