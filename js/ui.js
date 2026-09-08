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
        { id: 'antimatter_missile', name: 'Antimatter ICBM', icon: '🚀', desc: 'Cosmic warhead triggering a devastating void annihilation shockwave.' },
        { id: 'orbital_strike', name: 'Hammer of Dawn', icon: '🛰️', desc: 'Devastating satellite beam vaporizing terrain with searing plasma.' },
        { id: 'emp_blast', name: 'High-Altitude EMP', icon: '⚡', desc: 'Electromagnetic pulse short-circuiting mechs and disintegrating projectiles.' },
        { id: 'hellfire_missile', name: 'Hellfire Warhead', icon: '🔥', desc: 'Incendiary tactical missile unleashing waves of raging wildfire.' },
        { id: 'tsar_bomba', name: 'Tsar Bomba 100MT', icon: '💣', desc: 'Megaton thermonuclear device crushing half the globe in nuclear fallout.' },
        { id: 'toxic_cloud', name: 'Toxic Gas Cloud', icon: '☣️', desc: 'Spreads expanding noxious choking green gas clouds dissolving biologicals.' },
        { id: 'acid_missile', name: 'Corrosive Acid Warhead', icon: '🧪', desc: 'Splashes massive pools of concentrated bubbling acid melting mountains.' },
        { id: 'ion_storm_barrage', name: 'Ion Storm Barrage', icon: '⚡', desc: 'Rains crackling high-energy ion pulses disintegrating terrain and units.' },
        { id: 'chronos_rift', name: 'Chronos Spacetime Rift', icon: '🌀', desc: 'Opens a spacetime rift accelerating decay while freezing caught creatures.' },
        { id: 'nuke_missile', name: 'Apocalypse Nuke Missile', icon: '🚀', desc: 'World-destroying ICBM: Vaporizes all kingdoms, incinerates continents into ash, and wipes out the whole planet!' },
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
        { id: 'corrosion', name: 'Corrosion Bomb', icon: '🧪', desc: 'Shower of bubbling acid melting everything.' },
        { id: 'cryo_bomb', name: 'Cryo Cascade Bomb', icon: '❄️', desc: 'Explosive sub-zero ordinance glaciating the surrounding region into permanent permafrost and freezing entities.' },
        { id: 'orbital_death_ray', name: 'Solaris Death Ray', icon: '🛰️', desc: 'Devastating high-intensity continuous orbital death ray disintegrating all matter and leaving molten slag.' },
        { id: 'plague_comet', name: 'Plague Comet', icon: '☄️', desc: 'Infectious interstellar comet seeding toxic biovirus and zombie plague in a colossal necrotic crater.' },
        { id: 'tectonic_rupture', name: 'Tectonic Rupture', icon: '🌋', desc: 'Seismic faultline fracture tearing open deep bedrock fissures and venting molten magma.' },
        { id: 'nanite_swarm', name: 'Nanite Swarm', icon: '🤖', desc: 'Self-replicating microscopic gray goo nanobots devouring all minerals, buildings, and organics.' }
    ],
    nature: [
        { id: 'volcano', name: 'Volcano', icon: '🌋', desc: 'Spews endless ash, smoke, and molten lava.' },
        { id: 'supervolcano', name: 'Supervolcano', icon: '🌋', desc: 'Massive caldera rupture generating continents of magma and ash.' },
        { id: 'solar_flare', name: 'Solar Flare', icon: '☀️', desc: 'Blinding solar storm pulse igniting surface vegetation and supercharging creatures.' },
        { id: 'frost_tempest', name: 'Frost Tempest', icon: '❄️', desc: 'Arctic blizzard gale rapidly glaciating waters into ice sheets.' },
        { id: 'crystal_spire', name: 'Crystal Spire', icon: '💎', desc: 'Spawns towering resonant geological crystal pillars from the ground.' },
        { id: 'aurora_borealis', name: 'Aurora Borealis', icon: '🌌', desc: 'Magnificent celestial light curtain calming hostilities and healing all life.' },
        { id: 'tornado', name: 'Tornado', icon: '🌪️', desc: 'Wandering twister flinging trees and creatures.' },
        { id: 'fire_tornado', name: 'Fire Tornado', icon: '🌪️', desc: 'Vortex of spinning fire incinerating everything in its path.' },
        { id: 'meteor_shower', name: 'Meteor Shower', icon: '🌠', desc: 'Torrential barrage of celestial meteors pounding the realm.' },
        { id: 'meteor_rain', name: 'Meteor Rain', icon: '☄️', desc: 'Continuous celestial meteor shower pelting the ground with flaming boulders.' },
        { id: 'lightning_storm', name: 'Supercell Storm', icon: '⛈️', desc: 'Violent thunderstorm firing cascading lightning bolts across the skies.' },
        { id: 'blizzard_vortex', name: 'Blizzard Vortex', icon: '🌀', desc: 'Howling arctic blizzard hurricane instantly glaciating oceans and land.' },
        { id: 'sand_typhoon', name: 'Sand Typhoon', icon: '🌪️', desc: 'Vicious desert cyclone tearing up terrain into dunes and dust.' },
        { id: 'magma_surge', name: 'Magma Surge', icon: '🌋', desc: 'Underground tectonic rupture venting molten lava geysers.' },
        { id: 'spore_bloom', name: 'Spore Bloom', icon: '🍄', desc: 'Releases infectious fungal spores mutating land into mushroom mycelium.' },
        { id: 'whirlpool', name: 'Oceanic Maelstrom', icon: '🌀', desc: 'Swirling oceanic vortex dragging ships, creatures, and debris into the depths.' },
        { id: 'geyser', name: 'Thermal Geyser', icon: '⛲', desc: 'High-pressure thermal water eruption bursting from ground.' },
        { id: 'earthquake', name: 'Earthquake', icon: '⚡', desc: 'Tears jagged magma chasms through the terrain.' },
        { id: 'lightning', name: 'Lightning Strike', icon: '🌩️', desc: 'Electric strike that burns or empowers.' },
        { id: 'tsunami', name: 'Tsunami Deluge', icon: '🌊', desc: 'Giant surge of ocean water flooding land.' },
        { id: 'rain', name: 'Reviving Rain', icon: '🌧️', desc: 'Extinguishes fires, replenishes plants.' },
        { id: 'snowfall', name: 'Blizzard Storm', icon: '❄️', desc: 'Freezes lakes and coats the world in snow.' },
        { id: 'acidrain', name: 'Acid Storm', icon: '☣️', desc: 'Toxic green rain dissolving vegetation.' },
        { id: 'sandstorm', name: 'Sandstorm', icon: '🏜️', desc: 'Fierce desert gale eroding terrain and vegetation into sand.' },
        { id: 'clone_rain', name: 'Clone Rain', icon: '🔮', desc: 'Arcane celestial tempest raining cloned creatures from heaven!' },
        { id: 'wildfire', name: 'Wildfire', icon: '🔥', desc: 'Rapidly propagating forest fire.' },
        { id: 'gravity_inversion', name: 'Gravity Inversion', icon: '🌌', desc: 'Gravitational anomaly launching caught creatures and debris skyward before crushing them back down.' },
        { id: 'monsoon', name: 'Tropical Monsoon', icon: '🌧️', desc: 'Cataclysmic deluge flooding land, extinguishing wildfires, and replenishing global plant growth.' },
        { id: 'solar_eclipse', name: 'Solar Eclipse', icon: '🌑', desc: 'Cosmic shadow plunging the world into darkness, chilling temperatures, and empowering shadows.' },
        { id: 'ash_storm', name: 'Volcanic Ash Storm', icon: '🌋', desc: 'Dense suffocating cloud of volcanic fallout blanketing vegetation and terrain in dark ash.' }
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
        { id: 'gold_ore', name: 'Gold Vein', icon: '🪙', desc: 'Gleaming mineral deposit mined by kingdoms for wealth.' },
        { id: 'mushroom_spore', name: 'Mushroom Spore Soil', icon: '🍄', desc: 'Living fungal earth spreading giant bioluminescent toadstools.' },
        { id: 'honey_comb', name: 'Honeycomb Amber', icon: '🍯', desc: 'Golden sweet hive biome preserving organic matter.' },
        { id: 'holy_ground', name: 'Consecrated Ground', icon: '✨', desc: 'Blessed radiant tiles purging corruption, fire, and curing diseases.' },
        { id: 'blood_river', name: 'Blood River', icon: '🩸', desc: 'Sinister cursed visceral fluid empowering demons and vampires.' },
        { id: 'poison_swamp', name: 'Poison Swamp', icon: '☣️', desc: 'Fetid toxic mire slowing creatures and inflicting venom.' },
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
        { id: 'plasma_field', name: 'Plasma Field', icon: '⚡', desc: 'High-energy ionized fluid conductor crackling with cosmic sparks.' },
        { id: 'living_bramble', name: 'Living Bramble', icon: '🌿', desc: 'Vigorous barbed thorns rapidly sprawling across fertile soil.' },
        { id: 'aether_fluid', name: 'Aether Fluid', icon: '🔮', desc: 'Weightless glowing celestial nectar that flows freely across terrain.' },
        { id: 'meteorite_ore', name: 'Meteorite Ore', icon: '☄️', desc: 'Dense cosmic metal laced with star fragments and heavy minerals.' },
        { id: 'biome_savanna', name: 'Biome: Savanna', icon: '🌾', desc: 'Paints arid golden plains, acacia trees, and dry grass.' },
        { id: 'biome_tundra', name: 'Biome: Tundra', icon: '❄️', desc: 'Paints permafrost, snowbanks, and ice formations.' },
        { id: 'biome_jungle', name: 'Biome: Jungle', icon: '🌴', desc: 'Paints dense rainforest canopy, vines, and fertile mud.' },
        { id: 'deforest', name: 'Deforestation Axe', icon: '🪓', desc: 'Clears dense forests and overgrowth back to bare soil.' },
        { id: 'level_terrain', name: 'Plateau / Level', icon: '📐', desc: 'Flattens surrounding terrain to match clicked elevation and tile.' },
        { id: 'raise', name: 'Shovel (Raise)', icon: '⬆️', desc: 'Elevates terrain towards mountains.' },
        { id: 'lower', name: 'Shovel (Lower)', icon: '⬇️', desc: 'Carves valleys and ocean trenches.' },
        { id: 'sponge', name: 'Sponge Cake', icon: '🧽', desc: 'Absorbs fluids without altering ground.' },
        { id: 'fertilizer', name: 'Life Sprout', icon: '🌾', desc: 'Sprouts dense flora, trees and crops.' },
        { id: 'coral_reef', name: 'Coral Reef', icon: '🪸', desc: 'Vibrant living marine ecosystem that enriches shallow coastal waters.' },
        { id: 'tar_pit', name: 'Tar Pit', icon: '🛢️', desc: 'Viscous sticky hydrocarbon mire trapping and suffocating unwary creatures.' },
        { id: 'glowcap_mushroom', name: 'Glowcap Mycelium', icon: '🍄', desc: 'Bioluminescent deep-spore fungal colony pulsing with azure light.' },
        { id: 'aether_crystal', name: 'Aether Crystal Spire', icon: '🔮', desc: 'Resonant extraterrestrial crystalline formations humming with arcane mana.' },
        { id: 'volcanic_caldera', name: 'Volcanic Caldera', icon: '🌋', desc: 'Superheated volcanic magma crater with hardened volcanic rock crust.' },
        { id: 'enchanted_grove', name: 'Enchanted Grove', icon: '🌸', desc: 'Mystical sacred flora blessing nearby life and purging corrupted tiles.' },
        { id: 'sculpt_peak', name: 'Sculpt Mountain Peak', icon: '⛰️', desc: 'Raise a grand high mountain summit surrounded by rugged crags and foothills.' },
        { id: 'carve_canyon', name: 'Carve Ocean Trench', icon: '🌊', desc: 'Excavate a deep sea chasm or river canyon into surrounding terrain.' }
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
        { id: 'resurrection_ray', name: 'Resurrection Miracle', icon: '🌟', desc: 'Raise fallen creatures and skeletons back to life in divine light.' },
        { id: 'invisibility', name: 'Cloak of Shadows', icon: '👻', desc: 'Bestow phantom invisibility on nearby creatures for 15 seconds.' },
        { id: 'divine_smite', name: 'Divine Smite', icon: '⚡', desc: 'Targeted heavenly golden thunderbolt instantly executing sinners.' },
        { id: 'curse_frog', name: 'Frog Polymorph', icon: '🐸', desc: 'Magically transfigure creatures into helpless croaking frogs!' },
        { id: 'speed_boost', name: 'Hyper Velocity', icon: '💨', desc: 'Infuse creatures with 3x movement speed and agility.' },
        { id: 'giant_growth', name: 'Gigantification', icon: '🆙', desc: 'Massively swell creature into a colossal behemoth with 4x HP!' },
        { id: 'necromancy', name: 'Necromancy', icon: '☠️', desc: 'Summon an undead skeleton army out of the earth.' },
        { id: 'equip_plasma_rifle', name: 'Equip: Plasma Rifle', icon: '🔫', desc: 'Arm creature with high-tech rapid plasma rifle (+30 Atk).' },
        { id: 'equip_energy_shield', name: 'Equip: Energy Shield', icon: '🛡️', desc: 'Give creature kinetic energy buckler granting barrier protection.' },
        { id: 'equip_poison_dagger', name: 'Equip: Venom Dagger', icon: '🗡️', desc: 'Arm creature with deadly venom blade inflicting continuous poison (+20 Atk).' },
        { id: 'equip_gravity_hammer', name: 'Equip: Gravity Hammer', icon: '🔨', desc: 'Arm creature with crushing gravitational warhammer launching shockwaves (+40 Atk).' },
        { id: 'equip_storm_staff', name: 'Equip: Storm Staff', icon: '⚡', desc: 'Arm creature with tempest staff summoning targeted lightning strikes (+30 Atk).' },
        { id: 'equip_grenade_launcher', name: 'Equip: Grenade Launcher', icon: '💣', desc: 'Arm creature with explosive ordnance launcher (+35 Atk).' },
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
        { id: 'equip_laser_shotgun', name: 'Equip: Laser Shotgun', icon: '🔫', desc: 'Arm creature with multi-beam scatter blaster (+28 Atk).' },
        { id: 'equip_chain_lightning_staff', name: 'Equip: Chain Lightning Staff', icon: '🪄', desc: 'Arm creature with storm staff arcing electric surges to 3 targets (+32 Atk).' },
        { id: 'first_person', name: 'First-Person Mode', icon: '👁️', desc: 'Immerse into the creature eyes in full 3D First-Person view with WASD and mouse look!' },
        { id: 'equip_death_scythe', name: 'Equip: Death Scythe', icon: '💀', desc: 'Arm creature with grim reaper scythe harvesting souls and draining health (+40 Atk).' },
        { id: 'equip_frost_bow', name: 'Equip: Glacial Frost Bow', icon: '🏹', desc: 'Arm creature with elven ice bow firing triple piercing freezing frost arrows (+30 Atk).' },
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
        { id: 'trex', name: 'Tyrannosaurus Rex', icon: '🦖', desc: 'Apex primordial carnivore with bone-crushing bite and earthshaking roar!' },
        { id: 'triceratops', name: 'Triceratops', icon: '🦏', desc: 'Three-horned armored ceratopsian with frill shield bulldoze charge!' },
        { id: 'velociraptor', name: 'Velociraptor', icon: '🦎', desc: 'Lethal sickle-clawed pack hunter with leap pounce and frenzy howl!' },
        { id: 'pterodactyl', name: 'Pterodactyl', icon: '🦅', desc: 'Soaring flying reptile with dive talons and supersonic screech gale!' },
        { id: 'brachiosaurus', name: 'Brachiosaurus', icon: '🦕', desc: 'Colossal titan sauropod with columnar stomp and earth-shattering quake!' },
        { id: 'frost_dragon', name: 'Glacial Frost Dragon', icon: '❄️', desc: 'Ancient ice wyrm breathing freezing frost streams and blizzard vortices!' },
        { id: 'shadow_dragon', name: 'Shadow Void Dragon', icon: '🔮', desc: 'Abyssal netherflame wyrm with void lasers and singularity shadow warp!' },
        { id: 'storm_dragon', name: 'Thunder Storm Dragon', icon: '⚡', desc: 'High-voltage electric wyrm firing chain lightning and supercell thunder surges!' },
        { id: 'cyber_dragon', name: 'Cybernetic Dragon', icon: '🐉', desc: 'Controllable mechanical dragon firing continuous high-power plasma laser breath!' },
        { id: 'thunder_bird', name: 'Thunderbird', icon: '🦅', desc: 'Controllable storm raptor unleashing electric gale strikes and chain tempest bolts!' },
        { id: 'phoenix_knight', name: 'Phoenix Knight', icon: '⚔️', desc: 'Controllable solar crusader wielding radiant solar blades and blinding ascension burst!' },
        { id: 'dark_matter_colossus', name: 'Dark Matter Colossus', icon: '🗿', desc: 'Controllable abyssal juggernaut firing gravitational crush pulses and singularity collapse!' },
        { id: 'swamp_behemoth', name: 'Swamp Behemoth', icon: '🐊', desc: 'Controllable primeval mire predator with toxic bile spew and tail slam wave!' },
        { id: 'mammoth', name: 'Woolly Mammoth', icon: '🦣', desc: 'Controllable prehistoric titan with glacial tusk sweep and seismic glacier stomp!' },
        { id: 'astral_phoenix', name: 'Astral Phoenix', icon: '🔥', desc: 'Controllable cosmic firebird with stellar plasma barrage and supernova rebirth!' },
        { id: 'frost_giant', name: 'Frost Giant Juggernaut', icon: '❄️', desc: 'Controllable glacial titan hurling ice boulders and triggering crushing avalanches!' },
        { id: 'dread_reaper', name: 'Dread Reaper', icon: '💀', desc: 'Controllable harbinger of death wielding soul siphon orbs and soul harvest shockwave!' },
        { id: 'dune_scorpion_king', name: 'Dune Scorpion King', icon: '🦂', desc: 'Controllable desert overlord with venom barb piercers and toxic sand tremors!' },
        { id: 'titan_golem', name: 'Titan Golem', icon: '🗿', desc: 'Controllable ancient bedrock colossus with earthshaking quake slams and bedrock fortress!' },
        { id: 'pegasus', name: 'Celestial Pegasus', icon: '🦄', desc: 'Controllable winged celestial steed firing stardust volleys and aurora blessing gales!' },
        { id: 'duck', name: 'Exploding Duck', icon: '🦆', desc: 'Quacking aquatic fowl that lays ticking explosive eggs and detonates upon death!' },
        { id: 'evermean', name: 'Evermean Treant', icon: '🌲', desc: 'Eyeless walking tree with sharp needle legs that headslams foes and forest trees!' },
        { id: 'frog', name: 'Poison Dart Frog', icon: '🐸', desc: 'Agile amphibious hopper that spits venom darts and tongue-snatches prey.' },
        { id: 'cyber_ninja', name: 'Cyber Ninja', icon: '🥷', desc: 'Augmented shinobi with shuriken fan attacks and supersonic shadow dash.' },
        { id: 'laser_shark', name: 'Laser Shark', icon: '🦈', desc: 'Ferocious apex ocean predator equipped with high-tech head-mounted laser!' },
        { id: 'frost_wolf', name: 'Frost Wolf', icon: '🐺', desc: 'Frigid pack hunter howling glacial frost novae that freeze prey.' },
        { id: 'sand_scorpion', name: 'Giant Sand Scorpion', icon: '🦂', desc: 'Armored desert arachnid with crushing pincer crush and burrow ambush.' },
        { id: 'necromancer', name: 'Lich Necromancer', icon: '🧙‍♂️', desc: 'Dark sorcerer raising armies of undead skeletons and soul drain.' },
        { id: 'valkyrie', name: 'Valkyrie of Valhalla', icon: '⚔️', desc: 'Golden winged divine warrior hurling holy spears and sacred healing.' },
        { id: 'gargoyle', name: 'Obsidian Gargoyle', icon: '🦇', desc: 'Living stone demon with wing gust shockwaves and stone armor stasis.' },
        { id: 'mecha_rex', name: 'Mecha T-Rex', icon: '🦖', desc: 'Cybernetic bipedal titan armed with dual plasma cannons and tail whip.' },
        { id: 'golden_dragon', name: 'Golden Sun Dragon', icon: '🐲', desc: 'Controllable mythic deity unleashing sunbeam breath & divine flare burst!' },
        { id: 'space_worm', name: 'Cosmic Starworm', icon: '🐛', desc: 'Interstellar abyssal serpent eating terrain and firing cosmic singularity rays.' },
        { id: 'goblin', name: 'Goblin Raider', icon: '👺', desc: 'Crafty marauder raiding kingdoms and tossing explosive gunpowder bomb bundles.' },
        { id: 'pirate_ship', name: 'Pirate Galleon', icon: '🏴‍☠️', desc: 'Waterborne pirate corsair firing full broadside cannon salvos & boarding crews.' },
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
        { id: 'btn_soundboard', name: 'SFX Soundboard', icon: '🔊', desc: 'Procedural Web Audio sound generator testing audio frequencies.' },
        { id: 'btn_weather', name: 'Atmosphere Console', icon: '🌦️', desc: 'Master climate controls for global storms and wind.' },
        { id: 'btn_stats', name: 'Cosmic Analytics', icon: '📊', desc: 'Detailed population demographics, tile census, and world metrics.' },
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
        this.initGalaxyPedia();
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
        } else if (tool.id === 'btn_soundboard') {
            this.showModal('modal-soundboard');
            this.populateSoundboard();
            return;
        } else if (tool.id === 'btn_weather') {
            this.showModal('modal-weather');
            this.populateWeatherConsole();
            return;
        } else if (tool.id === 'btn_stats') {
            this.showModal('modal-stats');
            this.populateStats();
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

        // 3D Perspective Mode toggle button
        const btnToggle3D = document.getElementById('btn-toggle-3d');
        if (btnToggle3D) {
            btnToggle3D.onclick = () => {
                if (this.game.audio) this.game.audio.playClick();
                this.game.toggle3D();
            };
        }

        // First-Person Mode toggle button
        const btnToggleFPV = document.getElementById('btn-toggle-fpv');
        if (btnToggleFPV) {
            btnToggleFPV.onclick = () => {
                if (this.game.audio) this.game.audio.playClick();
                this.game.toggleFirstPerson();
            };
        }

        // Top HUD GalaxyPedia button
        const btnOpenWiki = document.getElementById('btn-open-wiki');
        if (btnOpenWiki) {
            btnOpenWiki.onclick = () => {
                if (this.game.audio) this.game.audio.playClick();
                this.showModal('modal-codex');
                this.initGalaxyPedia();
            };
        }

        // Top HUD Quick Save button
        const btnQuickSave = document.getElementById('btn-quick-save');
        if (btnQuickSave) {
            btnQuickSave.onclick = () => {
                if (this.game.audio) this.game.audio.playClick();
                this.showModal('modal-save');
                this.refreshSaveSlots();
            };
        }

        // Modal Quick Save button
        const btnModalQuickSave = document.getElementById('btn-modal-quicksave');
        if (btnModalQuickSave) {
            btnModalQuickSave.onclick = () => {
                const res = this.game.saveGame(1);
                if (res.success) {
                    if (this.game.audio) this.game.audio.playMagic();
                    this.showNotification("⚡ Quick-Saved to Slot 1!", "success");
                    this.refreshSaveSlots();
                    const slot1 = document.getElementById('slot-card-1');
                    if (slot1) {
                        slot1.classList.add('save-success-glow');
                        setTimeout(() => slot1.classList.remove('save-success-glow'), 1400);
                    }
                } else {
                    alert(`Storage Error: ${res.error || 'Failed to save to browser storage.'}\n\nExporting world as JSON backup...`);
                    this.exportWorldJSON();
                }
            };
        }

        // Save Creature Preset button in Creature Creator
        const btnSaveCustomPreset = document.getElementById('btn-save-custom-preset');
        if (btnSaveCustomPreset) {
            btnSaveCustomPreset.onclick = () => {
                this.saveCreaturePreset();
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
                this.exportWorldJSON();
            };
        }

        const impInput = document.getElementById('input-import-world');
        if (impInput) {
            impInput.onchange = (e) => {
                const file = e.target.files[0];
                if (!file) return;
                this.importWorldJSON(file);
                impInput.value = ''; // Reset to allow re-importing same file
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
        } else if (modalId === 'modal-codex') {
            this.initGalaxyPedia();
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

    populateSoundboard() {
        const grid = document.getElementById('soundboard-grid');
        if (!grid) return;
        const sfxList = [
            { name: 'Atomic Nuke', icon: '☢️', play: () => this.game.audio.playExplosion(1.8) },
            { name: 'Singularity', icon: '🌌', play: () => this.game.audio.playSingularity() },
            { name: 'EMP Pulse', icon: '⚡', play: () => this.game.audio.playEmpSound() },
            { name: 'Hammer of Dawn', icon: '🛰️', play: () => this.game.audio.playHammerOfDawn() },
            { name: 'Ocean Maelstrom', icon: '🌀', play: () => this.game.audio.playMaelstrom() },
            { name: 'Shark Crunch', icon: '🦈', play: () => this.game.audio.playSharkBite() },
            { name: 'Resurrection', icon: '🌟', play: () => this.game.audio.playResurrection() },
            { name: 'Frog Polymorph', icon: '🐸', play: () => this.game.audio.playPolymorphCroak() },
            { name: 'Photon Laser', icon: '⚡', play: () => this.game.audio.playLaser() },
            { name: 'Thunderclap', icon: '🌩️', play: () => this.game.audio.playThunder() },
            { name: 'Kaiju Roar', icon: '🦖', play: () => this.game.audio.playRoar() },
            { name: 'Duck Quack', icon: '🦆', play: () => this.game.audio.playQuack() },
            { name: 'Melee Slash', icon: '⚔️', play: () => this.game.audio.playSlash() },
            { name: 'Recurve Bow', icon: '🏹', play: () => this.game.audio.playBow() },
            { name: 'Vulcan MG', icon: '🔫', play: () => this.game.audio.playMachineGun() },
            { name: 'Rocket Launch', icon: '🚀', play: () => this.game.audio.playRocketLaunch() },
            { name: 'Acid Sizzle', icon: '🧪', play: () => this.game.audio.playSplatter() },
            { name: 'Magic Chimes', icon: '✨', play: () => this.game.audio.playMagic() },
            { name: 'Chrono Stasis', icon: '⌛', play: () => this.game.audio.playChronoFreeze() },
            { name: 'Bldg Collapse', icon: '🏰', play: () => this.game.audio.playBuildingCollapse() }
        ];

        grid.innerHTML = '';
        sfxList.forEach(sfx => {
            const btn = document.createElement('button');
            btn.className = 'btn';
            btn.style.cssText = 'display:flex; align-items:center; gap:8px; padding:10px 12px; font-size:0.85rem; justify-content:flex-start;';
            btn.innerHTML = `<span style="font-size:1.3rem;">${sfx.icon}</span> <span>${sfx.name}</span>`;
            btn.onclick = () => {
                this.game.audio.ensureContext();
                sfx.play();
                btn.style.transform = 'scale(0.95)';
                setTimeout(() => btn.style.transform = '', 100);
            };
            grid.appendChild(btn);
        });
    }

    populateWeatherConsole() {
        const container = document.getElementById('weather-controls-content');
        if (!container) return;
        const dm = this.game.disasterManager;
        const curWeather = dm.weather || 'clear';
        const curTimer = Math.max(0, Math.round((dm.weatherTimer || 0) / 60));

        container.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.05); padding:10px 14px; border-radius:8px; margin-bottom:14px; border:1px solid rgba(255,255,255,0.1);">
                <div>
                    <div style="font-size:0.75rem; color:#94a3b8; text-transform:uppercase; letter-spacing:0.5px;">Active Global Climate</div>
                    <div style="font-size:1.1rem; font-weight:700; color:#38bdf8;">${curWeather.toUpperCase()}</div>
                </div>
                <div style="text-align:right;">
                    <div style="font-size:0.75rem; color:#94a3b8;">Duration Left</div>
                    <div style="font-size:1.1rem; font-weight:700; color:#facc15;">${curTimer}s</div>
                </div>
            </div>

            <h4 style="font-size:0.85rem; color:#cbd5e1; margin-bottom:8px;">Change Global Weather</h4>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(130px, 1fr)); gap:8px; margin-bottom:16px;">
                <button class="btn" id="w-btn-clear" style="padding:10px 8px; font-size:0.8rem;">☀️ Clear Sky</button>
                <button class="btn" id="w-btn-rain" style="padding:10px 8px; font-size:0.8rem; background:rgba(59,130,246,0.25);">🌧️ Reviving Rain</button>
                <button class="btn" id="w-btn-snow" style="padding:10px 8px; font-size:0.8rem; background:rgba(147,197,253,0.2);">❄️ Arctic Blizzard</button>
                <button class="btn" id="w-btn-acid" style="padding:10px 8px; font-size:0.8rem; background:rgba(34,197,94,0.2);">☣️ Toxic Acid</button>
                <button class="btn" id="w-btn-sand" style="padding:10px 8px; font-size:0.8rem; background:rgba(234,179,8,0.2);">🏜️ Sandstorm</button>
                <button class="btn" id="w-btn-clone" style="padding:10px 8px; font-size:0.8rem; background:rgba(168,85,247,0.2);">🔮 Clone Rain</button>
            </div>

            <h4 style="font-size:0.85rem; color:#cbd5e1; margin-bottom:8px;">Instant Atmospheric Disasters</h4>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(130px, 1fr)); gap:8px;">
                <button class="btn" id="w-btn-tornado" style="padding:10px 8px; font-size:0.8rem;">🌪️ Tornado</button>
                <button class="btn" id="w-btn-vortex" style="padding:10px 8px; font-size:0.8rem;">🌀 Blizzard Vortex</button>
                <button class="btn" id="w-btn-storm" style="padding:10px 8px; font-size:0.8rem;">⛈️ Supercell</button>
                <button class="btn" id="w-btn-meteors" style="padding:10px 8px; font-size:0.8rem;">☄️ Meteor Rain</button>
                <button class="btn" id="w-btn-whirlpool" style="padding:10px 8px; font-size:0.8rem;">🌀 Maelstrom</button>
                <button class="btn" id="w-btn-magma" style="padding:10px 8px; font-size:0.8rem;">🌋 Magma Surge</button>
            </div>
        `;

        const cam = this.game.renderer.camera;
        document.getElementById('w-btn-clear').onclick = () => { dm.weather = 'clear'; dm.weatherTimer = 0; this.populateWeatherConsole(); };
        document.getElementById('w-btn-rain').onclick = () => { dm.startStorm('rain', 1200); this.populateWeatherConsole(); };
        document.getElementById('w-btn-snow').onclick = () => { dm.startStorm('snow', 1200); this.populateWeatherConsole(); };
        document.getElementById('w-btn-acid').onclick = () => { dm.startStorm('acid', 1200); this.populateWeatherConsole(); };
        document.getElementById('w-btn-sand').onclick = () => { dm.startStorm('sandstorm', 1200); this.populateWeatherConsole(); };
        document.getElementById('w-btn-clone').onclick = () => { dm.triggerCloneRain(1200); this.populateWeatherConsole(); };

        document.getElementById('w-btn-tornado').onclick = () => { dm.spawnTornado(cam.x, cam.y); if (this.game.audio) this.game.audio.playThunder(); };
        document.getElementById('w-btn-vortex').onclick = () => { dm.triggerBlizzardVortex(cam.x, cam.y, this.game.world, this.game.entityManager, this.game.particleSystem, this.game.audio); };
        document.getElementById('w-btn-storm').onclick = () => { dm.triggerLightningStorm(cam.x, cam.y, this.game.world, this.game.entityManager, this.game.particleSystem, this.game.audio); };
        document.getElementById('w-btn-meteors').onclick = () => { dm.triggerMeteorRain(cam.x, cam.y, this.game.audio); };
        document.getElementById('w-btn-whirlpool').onclick = () => { dm.spawnWhirlpool(cam.x, cam.y, this.game.audio); };
        document.getElementById('w-btn-magma').onclick = () => { dm.triggerMagmaSurge(cam.x, cam.y, this.game.world, this.game.particleSystem, this.game.audio); };
    }

    populateStats() {
        const container = document.getElementById('stats-analytics-content');
        if (!container) return;

        const w = this.game.world.width;
        const h = this.game.world.height;
        const totalTiles = w * h;
        const ents = this.game.entityManager.entities;
        const pop = ents.length;

        let humans = 0, elves = 0, dwarves = 0, orcs = 0, beasts = 0, titans = 0, vehicles = 0, undead = 0;
        ents.forEach(e => {
            if (e.species === 'human') humans++;
            else if (e.species === 'elf') elves++;
            else if (e.species === 'dwarf') dwarves++;
            else if (e.species === 'orc') orcs++;
            else if (['dragon', 'crabzilla', 'kaiju', 'void_titan', 'galaxy_guardian', 'frost_titan', 'colossus_mech', 'golden_dragon', 'space_worm', 'mecha_rex'].includes(e.species)) titans++;
            else if (['tank', 'warship', 'helicopter', 'starfighter', 'pirate_ship', 'mech'].includes(e.species)) vehicles++;
            else if (['zombie', 'skeleton', 'demon', 'necromancer'].includes(e.species)) undead++;
            else beasts++;
        });

        const kingdomsCount = this.game.entityManager.kingdoms.size;
        const corpsesCount = this.game.entityManager.corpses.length;
        const particlesActive = this.game.particleSystem.particles.filter(p => p.active).length;

        // Approximate terrain sampling
        let waterTiles = 0, landTiles = 0, mountainTiles = 0, lavaTiles = 0, snowTiles = 0, otherTiles = 0;
        const sampleStep = 8;
        let samples = 0;
        for (let y = 0; y < h; y += sampleStep) {
            for (let x = 0; x < w; x += sampleStep) {
                samples++;
                const t = this.game.world.getTile(x, y);
                if (t === TILES.WATER || t === TILES.DEEP_WATER) waterTiles++;
                else if (t === TILES.GRASS || t === TILES.SOIL || t === TILES.FOREST) landTiles++;
                else if (t === TILES.STONE || t === TILES.HIGH_MOUNTAIN) mountainTiles++;
                else if (t === TILES.LAVA || t === TILES.MAGMA_ROCK) lavaTiles++;
                else if (t === TILES.SNOW || t === TILES.ICE) snowTiles++;
                else otherTiles++;
            }
        }

        const pct = (val) => Math.round((val / samples) * 100);

        container.innerHTML = `
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:10px; margin-bottom:14px;">
                <div class="stat-card" style="background:rgba(255,255,255,0.05); padding:10px; border-radius:8px; border:1px solid rgba(255,255,255,0.1);">
                    <div style="font-size:0.75rem; color:#94a3b8;">Total Population</div>
                    <div style="font-size:1.3rem; font-weight:700; color:#38bdf8;">${pop.toLocaleString()}</div>
                    <small style="color:#64748b;">${corpsesCount} corpses</small>
                </div>
                <div class="stat-card" style="background:rgba(255,255,255,0.05); padding:10px; border-radius:8px; border:1px solid rgba(255,255,255,0.1);">
                    <div style="font-size:0.75rem; color:#94a3b8;">Sovereign Kingdoms</div>
                    <div style="font-size:1.3rem; font-weight:700; color:#facc15;">${kingdomsCount}</div>
                    <small style="color:#64748b;">${this.game.entityManager.worldWar ? 'World War' : (this.game.entityManager.forcePeace ? 'Enforced Peace' : 'Peaceful')}</small>
                </div>
                <div class="stat-card" style="background:rgba(255,255,255,0.05); padding:10px; border-radius:8px; border:1px solid rgba(255,255,255,0.1);">
                    <div style="font-size:0.75rem; color:#94a3b8;">Simulation Speed</div>
                    <div style="font-size:1.3rem; font-weight:700; color:#4ade80;">${this.game.timeScale}x</div>
                    <small style="color:#64748b;">${this.game.fps} FPS</small>
                </div>
            </div>

            <h4 style="font-size:0.85rem; color:#cbd5e1; margin-bottom:8px;">Demographic Census</h4>
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); gap:8px; margin-bottom:14px; font-size:0.8rem;">
                <div style="background:rgba(255,255,255,0.03); padding:8px; border-radius:6px;">🧑 Humans: <strong>${humans}</strong></div>
                <div style="background:rgba(255,255,255,0.03); padding:8px; border-radius:6px;">🧝 Elves: <strong>${elves}</strong></div>
                <div style="background:rgba(255,255,255,0.03); padding:8px; border-radius:6px;">🧔 Dwarves: <strong>${dwarves}</strong></div>
                <div style="background:rgba(255,255,255,0.03); padding:8px; border-radius:6px;">👹 Orcs: <strong>${orcs}</strong></div>
                <div style="background:rgba(255,255,255,0.03); padding:8px; border-radius:6px;">🐺 Beasts: <strong>${beasts}</strong></div>
                <div style="background:rgba(255,255,255,0.03); padding:8px; border-radius:6px;">🗿 Titans: <strong>${titans}</strong></div>
                <div style="background:rgba(255,255,255,0.03); padding:8px; border-radius:6px;">🚢 Vehicles: <strong>${vehicles}</strong></div>
                <div style="background:rgba(255,255,255,0.03); padding:8px; border-radius:6px;">🧟 Undead: <strong>${undead}</strong></div>
            </div>

            <h4 style="font-size:0.85rem; color:#cbd5e1; margin-bottom:8px;">Planetary Geography & Land Coverage</h4>
            <div style="display:flex; flex-direction:column; gap:6px; font-size:0.8rem;">
                <div style="display:flex; justify-content:space-between;"><span>🌊 Water & Oceans:</span> <strong>${pct(waterTiles)}%</strong></div>
                <div style="display:flex; justify-content:space-between;"><span>🌱 Grass & Forests:</span> <strong>${pct(landTiles)}%</strong></div>
                <div style="display:flex; justify-content:space-between;"><span>⛰️ Mountains & Stone:</span> <strong>${pct(mountainTiles)}%</strong></div>
                <div style="display:flex; justify-content:space-between;"><span>❄️ Snow & Glaciers:</span> <strong>${pct(snowTiles)}%</strong></div>
                <div style="display:flex; justify-content:space-between;"><span>🔥 Lava & Magma:</span> <strong>${pct(lavaTiles)}%</strong></div>
                <div style="display:flex; justify-content:space-between;"><span>🔮 Minerals & Biomes:</span> <strong>${pct(otherTiles)}%</strong></div>
            </div>

            <div style="margin-top:14px; border-top:1px solid rgba(255,255,255,0.1); padding-top:10px; font-size:0.75rem; color:#94a3b8; display:flex; justify-content:space-between;">
                <span>Grid: ${w}x${h} (${totalTiles.toLocaleString()} tiles)</span>
                <span>Particles: ${particlesActive} / ${this.game.particleSystem.maxParticles}</span>
            </div>
        `;
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
            slotCard.id = `slot-card-${slot}`;

            let info = null;
            if (saved) {
                try {
                    info = JSON.parse(saved);
                } catch (e) {
                    info = null;
                }
            }

            if (info) {
                const entCount = info.entities?.entities?.length ?? (info.entitiesCount || 0);
                const kdCount = info.entities?.kingdoms?.length ?? (info.kingdomsCount || 0);
                const sizeStr = info.world?.width ? ` · 🗺️ ${info.world.width}x${info.world.height}` : '';

                slotCard.innerHTML = `
                    <div class="slot-info">
                        <div style="font-weight: 700; color: #f8fafc; font-size: 0.95rem;">Slot ${slot}: ${info.name || 'World ' + slot}</div>
                        <div style="font-size: 0.74rem; color: #94a3b8; margin-top: 2px;">📅 ${info.date || 'Unknown'}</div>
                        <div style="font-size: 0.74rem; color: #38bdf8; margin-top: 2px;">
                            👥 ${entCount} creatures · 👑 ${kdCount} kingdoms${sizeStr}
                        </div>
                    </div>
                    <div class="slot-actions">
                        <button class="btn btn-sm btn-load" data-slot="${slot}" style="background: rgba(56, 189, 248, 0.25); border-color: #38bdf8;">Load</button>
                        <button class="btn btn-sm btn-save" data-slot="${slot}" style="background: rgba(34, 197, 94, 0.2); border-color: #22c55e;">Overwrite</button>
                        <button class="btn btn-sm btn-del btn-danger" data-slot="${slot}">Delete</button>
                    </div>
                `;
            } else {
                slotCard.innerHTML = `
                    <div class="slot-info">
                        <div style="font-weight: 700; color: #64748b; font-size: 0.95rem;">Slot ${slot}: Empty</div>
                        <div style="font-size: 0.74rem; color: #475569; margin-top: 2px;">No world saved in this slot yet</div>
                    </div>
                    <div class="slot-actions">
                        <button class="btn btn-sm btn-save" data-slot="${slot}" style="background: rgba(59, 130, 246, 0.35); border-color: #60a5fa; font-weight: 600;">Save Here</button>
                    </div>
                `;
            }

            // Bind actions
            slotCard.querySelectorAll('.btn-save').forEach(b => {
                b.onclick = () => {
                    const res = this.game.saveGame(slot);
                    if (res.success) {
                        if (this.game.audio) this.game.audio.playMagic();
                        this.showNotification(`💾 Saved successfully to Slot ${slot}!`, 'success');
                        this.refreshSaveSlots();
                        const card = document.getElementById(`slot-card-${slot}`);
                        if (card) {
                            card.classList.add('save-success-glow');
                            setTimeout(() => card.classList.remove('save-success-glow'), 1400);
                        }
                    } else {
                        this.showNotification(`⚠️ Save error: ${res.error || 'Storage full'}`, 'error');
                        alert(`Storage Error: ${res.error || 'Failed to save to browser storage.'}\n\nExporting world as JSON backup...`);
                        this.exportWorldJSON();
                    }
                };
            });

            slotCard.querySelectorAll('.btn-load').forEach(b => {
                b.onclick = () => {
                    const res = this.game.loadGame(slot);
                    if (res.success) {
                        if (this.game.audio) this.game.audio.playMagic();
                        this.showNotification(`🌟 Successfully loaded Slot ${slot}!`, 'success');
                        const modal = document.getElementById('modal-save');
                        if (modal) modal.classList.remove('active');
                    } else {
                        this.showNotification(`⚠️ Load error: ${res.error || 'Unknown'}`, 'error');
                        alert(`Failed to load slot ${slot}: ${res.error || 'Unknown error'}`);
                    }
                };
            });

            slotCard.querySelectorAll('.btn-del').forEach(b => {
                b.onclick = () => {
                    localStorage.removeItem(key);
                    if (this.game.audio) this.game.audio.playClick();
                    this.showNotification(`🗑️ Slot ${slot} deleted.`, 'info');
                    this.refreshSaveSlots();
                };
            });

            container.appendChild(slotCard);
        }
    }

    showNotification(message, type = 'info', duration = 2400) {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        toast.className = `toast-message toast-${type}`;
        toast.innerHTML = message;
        container.appendChild(toast);

        setTimeout(() => {
            if (toast.parentNode) {
                toast.style.opacity = '0';
                toast.style.transform = 'translateY(-10px)';
                toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                setTimeout(() => {
                    if (toast.parentNode) toast.parentNode.removeChild(toast);
                }, 320);
            }
        }, duration);
    }

    update3DButtonState(is3DMode) {
        const btn = document.getElementById('btn-toggle-3d');
        const hint = document.getElementById('cam-3d-hint');
        if (btn) {
            btn.classList.toggle('active-3d', is3DMode);
            btn.innerHTML = is3DMode ? '🌐 3D Active' : '🗺️ 2D View';
            btn.title = is3DMode ? 'Switch to 2D Pixel View (V)' : 'Switch to 3D Perspective Mode (V)';
        }
        if (hint) {
            hint.style.display = is3DMode ? 'flex' : 'none';
        }
    }

    exportWorldJSON() {
        try {
            const saveObj = {
                version: 2,
                name: `GalaxyBox_Export_${new Date().toISOString().slice(0, 10)}`,
                date: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
                timestamp: Date.now(),
                world: this.game.world.serialize(),
                entities: this.game.entityManager.serialize(),
                weather: {
                    current: this.game.disasterManager.weather,
                    timer: this.game.disasterManager.weatherTimer
                }
            };

            const jsonStr = JSON.stringify(saveObj, null, 2);
            const blob = new Blob([jsonStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = `galaxybox_world_${Date.now()}.json`;
            document.body.appendChild(a);
            a.click();
            setTimeout(() => {
                if (a.parentNode) document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }, 600);

            if (this.game.audio) this.game.audio.playMagic();
            this.showNotification("📦 World exported successfully to file!", "success");
        } catch (err) {
            console.error("Export failed:", err);
            this.showNotification("⚠️ Export failed: " + err.message, "error");
        }
    }

    importWorldJSON(file) {
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                const res = this.game.applySaveData(data);
                if (res.success) {
                    if (this.game.audio) this.game.audio.playMagic();
                    this.showNotification(`📥 Loaded world: ${file.name}!`, "success");
                    const modal = document.getElementById('modal-save');
                    if (modal) modal.classList.remove('active');
                } else {
                    alert("Import Error: " + (res.error || "Corrupted save file format"));
                }
            } catch (err) {
                console.error("Import failed:", err);
                alert("Failed to parse JSON save file: " + err.message);
            }
        };
        reader.onerror = () => {
            alert("Failed to read file.");
        };
        reader.readAsText(file);
    }

    saveCreaturePreset() {
        const nameEl = document.getElementById('custom-name');
        const archetypeEl = document.getElementById('custom-archetype');
        const hpEl = document.getElementById('custom-hp');
        const atkEl = document.getElementById('custom-attack');
        const spdEl = document.getElementById('custom-speed');
        const scaleEl = document.getElementById('custom-scale');

        const colEl = document.getElementById('custom-color');
        const colSecEl = document.getElementById('custom-color-sec');
        const colGlowEl = document.getElementById('custom-color-glow');

        const headEl = document.getElementById('custom-part-head');
        const bodyEl = document.getElementById('custom-part-body');
        const armsEl = document.getElementById('custom-part-arms');
        const legsEl = document.getElementById('custom-part-legs');
        const backEl = document.getElementById('custom-part-back');

        const name = nameEl ? nameEl.value : 'Custom Creature';
        const traits = [];
        document.querySelectorAll('.custom-trait-check:checked').forEach(chk => {
            traits.push(chk.value);
        });

        const presetObj = {
            name,
            archetype: archetypeEl ? archetypeEl.value : 'human',
            hp: hpEl ? (parseInt(hpEl.value) || 1000) : 1000,
            attack: atkEl ? (parseInt(atkEl.value) || 50) : 50,
            speed: spdEl ? (parseFloat(spdEl.value) || 0.8) : 0.8,
            scale: scaleEl ? (parseFloat(scaleEl.value) || 2.0) : 2.0,
            colors: {
                primary: colEl ? colEl.value : '#ea580c',
                secondary: colSecEl ? colSecEl.value : '#38bdf8',
                glow: colGlowEl ? colGlowEl.value : '#facc15'
            },
            bodyParts: {
                head: headEl ? headEl.value : 'humanoid',
                body: bodyEl ? bodyEl.value : 'standard',
                arms: armsEl ? armsEl.value : 'bipedal_arms',
                legs: legsEl ? legsEl.value : 'bipedal_legs',
                back: backEl ? backEl.value : 'none'
            },
            traits
        };

        try {
            let presets = JSON.parse(localStorage.getItem('galaxybox_custom_creature_presets') || '[]');
            const idx = presets.findIndex(p => p.name.toLowerCase() === name.toLowerCase());
            if (idx >= 0) {
                presets[idx] = presetObj;
            } else {
                presets.push(presetObj);
            }
            localStorage.setItem('galaxybox_custom_creature_presets', JSON.stringify(presets));
            if (this.game.audio) this.game.audio.playMagic();
            this.showNotification(`💾 Saved creature preset "${name}"!`, "success");
        } catch (err) {
            console.error("Save preset failed:", err);
            this.showNotification("⚠️ Failed to save preset: " + err.message, "error");
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
        if (typeof clearTimeout === 'function') clearTimeout(this._toastTimer);
        if (typeof setTimeout === 'function') {
            this._toastTimer = setTimeout(() => {
                if (toast) toast.style.opacity = '0';
            }, 2200);
        }
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
            },
            trex: {
                name: 'Tyrannosaurus Rex',
                head: 'trex_head', body: 'dino_armored', arms: 'bipedal_arms', legs: 'theropod_legs', back: 'dino_spikes',
                col: '#2d5a27', colSec: '#14532d', colGlow: '#facc15',
                hp: 4500, atk: 95, spd: 0.95, scale: 3.2
            },
            triceratops: {
                name: 'Triceratops',
                head: 'triceratops_horns', body: 'dino_armored', arms: 'quadruped_paws', legs: 'sauropod_pillars', back: 'none',
                col: '#b45309', colSec: '#78350f', colGlow: '#fef08a',
                hp: 3800, atk: 75, spd: 0.85, scale: 2.8
            },
            velociraptor: {
                name: 'Velociraptor',
                head: 'trex_head', body: 'avian_feather', arms: 'raptor_claws', legs: 'theropod_legs', back: 'none',
                col: '#dc2626', colSec: '#991b1b', colGlow: '#facc15',
                hp: 1200, atk: 65, spd: 1.4, scale: 1.6
            },
            pterodactyl: {
                name: 'Pterodactyl',
                head: 'pterosaur_beak', body: 'standard', arms: 'pterodactyl_wings', legs: 'bipedal_legs', back: 'none',
                col: '#0284c7', colSec: '#38bdf8', colGlow: '#bae6fd',
                hp: 1600, atk: 60, spd: 1.25, scale: 2.2
            },
            brachiosaurus: {
                name: 'Brachiosaurus',
                head: 'humanoid', body: 'sauropod_bulk', arms: 'quadruped_paws', legs: 'sauropod_pillars', back: 'none',
                col: '#166534', colSec: '#14532d', colGlow: '#4ade80',
                hp: 7500, atk: 85, spd: 0.45, scale: 4.0
            },
            frost_dragon: {
                name: 'Frost Dragon',
                head: 'dragon_snout', body: 'dragon_scales', arms: 'dragon_wings', legs: 'quadruped_paws', back: 'dragon_wings',
                col: '#0284c7', colSec: '#38bdf8', colGlow: '#00ffff',
                hp: 4200, atk: 88, spd: 0.9, scale: 3.0
            },
            shadow_dragon: {
                name: 'Shadow Dragon',
                head: 'dragon_snout', body: 'dragon_scales', arms: 'dragon_wings', legs: 'quadruped_paws', back: 'dragon_wings',
                col: '#1e1b4b', colSec: '#581c87', colGlow: '#f43f5e',
                hp: 4800, atk: 92, spd: 0.95, scale: 3.2
            },
            storm_dragon: {
                name: 'Storm Dragon',
                head: 'dragon_snout', body: 'dragon_scales', arms: 'dragon_wings', legs: 'quadruped_paws', back: 'dragon_wings',
                col: '#0891b2', colSec: '#06b6d4', colGlow: '#facc15',
                hp: 4600, atk: 90, spd: 1.0, scale: 3.0
            },
            astral_phoenix: {
                name: 'Astral Phoenix',
                head: 'pterosaur_beak', body: 'avian_feather', arms: 'dragon_wings', legs: 'duck_webbed', back: 'starlight_halo',
                col: '#a855f7', colSec: '#ec4899', colGlow: '#38bdf8',
                hp: 3600, atk: 85, spd: 1.15, scale: 2.8
            },
            frost_giant: {
                name: 'Frost Giant Juggernaut',
                head: 'cyclops', body: 'crystalline', arms: 'bipedal_arms', legs: 'bipedal_legs', back: 'spiky_carapace',
                col: '#0284c7', colSec: '#38bdf8', colGlow: '#bae6fd',
                hp: 5500, atk: 88, spd: 0.6, scale: 3.4
            },
            dread_reaper: {
                name: 'Dread Reaper',
                head: 'skull', body: 'armored', arms: 'blade_arms', legs: 'ethereal_wisp', back: 'demon_wings',
                col: '#0f172a', colSec: '#10b981', colGlow: '#34d399',
                hp: 4000, atk: 92, spd: 1.05, scale: 2.8
            },
            dune_scorpion_king: {
                name: 'Dune Scorpion King',
                head: 'cyclops', body: 'dino_armored', arms: 'raptor_claws', legs: 'arachnid_legs', back: 'spiky_carapace',
                col: '#ca8a04', colSec: '#854d0e', colGlow: '#22c55e',
                hp: 4400, atk: 82, spd: 0.85, scale: 3.0
            },
            titan_golem: {
                name: 'Titan Golem',
                head: 'cyclops', body: 'sauropod_bulk', arms: 'blade_arms', legs: 'sauropod_pillars', back: 'dino_spikes',
                col: '#78716c', colSec: '#d97706', colGlow: '#f59e0b',
                hp: 6800, atk: 96, spd: 0.45, scale: 3.8
            },
            pegasus: {
                name: 'Celestial Pegasus',
                head: 'humanoid', body: 'standard', arms: 'feather_wings', legs: 'quadruped_paws', back: 'angel_wings',
                col: '#f8fafc', colSec: '#38bdf8', colGlow: '#fef08a',
                hp: 3200, atk: 72, spd: 1.25, scale: 2.6
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
        let studioOrbitAngle = 0;
        let isStudioDragging = false;
        let studioLastX = 0;

        previewCanvas.addEventListener('mousedown', (e) => {
            isStudioDragging = true;
            studioLastX = e.clientX;
        });
        window.addEventListener('mousemove', (e) => {
            if (isStudioDragging) {
                const dx = e.clientX - studioLastX;
                studioLastX = e.clientX;
                studioOrbitAngle += dx * 0.025;
            }
        });
        window.addEventListener('mouseup', () => {
            isStudioDragging = false;
        });
        previewCanvas.addEventListener('touchstart', (e) => {
            if (e.touches && e.touches.length === 1) {
                isStudioDragging = true;
                studioLastX = e.touches[0].clientX;
            }
        }, { passive: true });
        window.addEventListener('touchmove', (e) => {
            if (isStudioDragging && e.touches && e.touches.length === 1) {
                const dx = e.touches[0].clientX - studioLastX;
                studioLastX = e.touches[0].clientX;
                studioOrbitAngle += dx * 0.025;
            }
        }, { passive: true });
        window.addEventListener('touchend', () => {
            isStudioDragging = false;
        });

        const renderPreview = () => {
            const modal = document.getElementById('modal-creator');
            if (modal && modal.classList.contains('active')) {
                previewAnim += 0.035;
                if (!isStudioDragging) {
                    studioOrbitAngle += 0.015;
                }

                const head = headEl ? headEl.value : 'humanoid';
                const body = bodyEl ? bodyEl.value : 'standard';
                const arms = armsEl ? armsEl.value : 'bipedal_arms';
                const legs = legsEl ? legsEl.value : 'bipedal_legs';
                const back = backEl ? backEl.value : 'none';
                const col = colEl ? colEl.value : '#ea580c';
                const sec = colSecEl ? colSecEl.value : '#38bdf8';
                const glow = colGlowEl ? colGlowEl.value : '#facc15';

                const customData = {
                    archetype: archetypeEl ? archetypeEl.value : 'human',
                    name: nameEl ? nameEl.value : 'Omega Chimera',
                    color: col,
                    secColor: sec,
                    glowColor: glow,
                    head: head,
                    body: body,
                    arms: arms,
                    legs: legs,
                    back: back,
                    scale: scaleEl ? (parseFloat(scaleEl.value) || 2.0) : 2.0
                };

                if (this.game && this.game.renderer3D && typeof this.game.renderer3D.renderCreatureStudio3D === 'function') {
                    this.game.renderer3D.renderCreatureStudio3D(customData, previewCanvas, previewAnim, studioOrbitAngle);
                } else {
                    ctx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);

                    const cx = previewCanvas.width * 0.5;
                    const cy = previewCanvas.height * 0.54;
                    const bob = Math.sin(previewAnim * 3) * 2;

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
                } else if (back === 'dragon_wings') {
                    const wingSpread = Math.sin(previewAnim * 5) * 4;
                    ctx.fillStyle = sec;
                    ctx.fillRect(cx - 26, cy - 16 + wingSpread, 14, 18);
                    ctx.fillRect(cx - 30, cy - 22 + wingSpread, 12, 12);
                    ctx.fillRect(cx + 12, cy - 16 - wingSpread, 14, 18);
                    ctx.fillRect(cx + 18, cy - 22 - wingSpread, 12, 12);
                    ctx.fillStyle = glow;
                    ctx.fillRect(cx - 31, cy - 24 + wingSpread, 3, 3);
                    ctx.fillRect(cx + 28, cy - 24 - wingSpread, 3, 3);
                } else if (back === 'stegosaurus_plates') {
                    ctx.fillStyle = sec;
                    ctx.fillRect(cx - 16, cy - 18, 6, 8);
                    ctx.fillRect(cx - 4, cy - 22, 8, 12);
                    ctx.fillRect(cx + 10, cy - 18, 6, 8);
                    ctx.fillStyle = glow;
                    ctx.fillRect(cx - 2, cy - 20, 4, 4);
                } else if (back === 'dino_spikes') {
                    ctx.fillStyle = sec;
                    for (let sp = -14; sp <= 14; sp += 7) {
                        ctx.fillRect(cx + sp - 1, cy - 16, 3, 6);
                    }
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
                } else if (legs === 'theropod_legs') {
                    const legBob = Math.sin(previewAnim * 6) * 3;
                    ctx.fillStyle = sec;
                    ctx.fillRect(cx - 10, cy + 10, 6, 14 + legBob);
                    ctx.fillRect(cx + 4, cy + 10, 6, 14 - legBob);
                    ctx.fillStyle = '#0f172a';
                    ctx.fillRect(cx - 13, cy + 22 + legBob, 9, 3);
                    ctx.fillRect(cx + 4, cy + 22 - legBob, 9, 3);
                } else if (legs === 'sauropod_pillars') {
                    const legBob = Math.sin(previewAnim * 4) * 2;
                    ctx.fillStyle = sec;
                    ctx.fillRect(cx - 14, cy + 10, 8, 14 + legBob);
                    ctx.fillRect(cx - 4, cy + 10, 8, 14 - legBob);
                    ctx.fillRect(cx + 6, cy + 10, 8, 14 + legBob);
                    ctx.fillStyle = '#052e16';
                    ctx.fillRect(cx - 15, cy + 22 + legBob, 10, 3);
                    ctx.fillRect(cx - 5, cy + 22 - legBob, 10, 3);
                    ctx.fillRect(cx + 5, cy + 22 + legBob, 10, 3);
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
                } else if (body === 'sauropod_bulk') {
                    ctx.fillStyle = col;
                    ctx.fillRect(cx - 16, cy - 12 + bob, 32, 24);
                    ctx.fillStyle = sec;
                    ctx.fillRect(cx - 12, cy - 8 + bob, 24, 16);
                } else if (body === 'dino_armored') {
                    ctx.fillStyle = sec;
                    ctx.fillRect(cx - 12, cy - 8 + bob, 24, 5);
                    ctx.fillRect(cx - 10, cy - 1 + bob, 20, 5);
                    ctx.fillStyle = glow;
                    ctx.fillRect(cx - 2, cy + 5 + bob, 4, 4);
                } else if (body === 'dragon_scales') {
                    ctx.fillStyle = sec;
                    ctx.fillRect(cx - 10, cy - 8 + bob, 20, 18);
                    ctx.fillStyle = glow;
                    ctx.fillRect(cx - 4, cy - 4 + bob, 8, 8);
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
                } else if (arms === 'raptor_claws') {
                    ctx.fillStyle = col;
                    ctx.fillRect(cx - 16, cy - 4 + bob, 6, 12);
                    ctx.fillRect(cx + 10, cy - 4 + bob, 6, 12);
                    ctx.fillStyle = '#ffffff';
                    ctx.fillRect(cx - 18, cy + 6 + bob, 4, 6);
                    ctx.fillRect(cx + 14, cy + 6 + bob, 4, 6);
                } else if (arms === 'pterodactyl_wings' || arms === 'dragon_wings') {
                    const flap = Math.sin(previewAnim * 6) * 4;
                    ctx.fillStyle = sec;
                    ctx.fillRect(cx - 24, cy - 8 + bob + flap, 14, 12);
                    ctx.fillRect(cx + 10, cy - 8 + bob + flap, 14, 12);
                    ctx.fillStyle = glow;
                    ctx.fillRect(cx - 25, cy - 9 + bob + flap, 3, 3);
                    ctx.fillRect(cx + 22, cy - 9 + bob + flap, 3, 3);
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
                } else if (head === 'trex_head') {
                    ctx.fillStyle = col;
                    ctx.fillRect(cx - 12, cy - 30 + bob, 26, 18);
                    ctx.fillStyle = '#0f172a';
                    ctx.fillRect(cx + 4, cy - 20 + bob, 12, 6);
                    ctx.fillStyle = '#ffffff';
                    ctx.fillRect(cx + 6, cy - 21 + bob, 3, 3);
                    ctx.fillRect(cx + 11, cy - 21 + bob, 3, 3);
                    ctx.fillStyle = glow;
                    ctx.fillRect(cx - 2, cy - 26 + bob, 4, 4);
                } else if (head === 'dragon_snout') {
                    ctx.fillStyle = col;
                    ctx.fillRect(cx - 12, cy - 28 + bob, 24, 16);
                    ctx.fillRect(cx + 6, cy - 22 + bob, 10, 8);
                    ctx.fillStyle = sec;
                    ctx.fillRect(cx - 14, cy - 36 + bob, 5, 10);
                    ctx.fillRect(cx - 2, cy - 36 + bob, 5, 10);
                    ctx.fillStyle = glow;
                    ctx.fillRect(cx, cy - 25 + bob, 4, 4);
                } else if (head === 'triceratops_horns') {
                    ctx.fillStyle = sec;
                    ctx.fillRect(cx - 16, cy - 34 + bob, 32, 14);
                    ctx.fillStyle = col;
                    ctx.fillRect(cx - 10, cy - 26 + bob, 20, 16);
                    ctx.fillStyle = '#ffffff';
                    ctx.fillRect(cx + 6, cy - 30 + bob, 12, 4);
                    ctx.fillRect(cx + 8, cy - 20 + bob, 6, 4);
                    ctx.fillStyle = glow;
                    ctx.fillRect(cx - 2, cy - 22 + bob, 4, 4);
                } else if (head === 'pterosaur_beak') {
                    ctx.fillStyle = sec;
                    ctx.fillRect(cx - 22, cy - 30 + bob, 14, 6);
                    ctx.fillStyle = col;
                    ctx.fillRect(cx - 10, cy - 28 + bob, 18, 14);
                    ctx.fillStyle = '#f59e0b';
                    ctx.fillRect(cx + 8, cy - 24 + bob, 16, 5);
                    ctx.fillStyle = glow;
                    ctx.fillRect(cx - 2, cy - 24 + bob, 4, 4);
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

    // ==========================================
    // GALAXYPEDIA WIKIPEDIA SYSTEM
    // ==========================================
    initGalaxyPedia() {
        if (this.pediaInitialized) return;
        this.pediaInitialized = true;
        this.pediaHistory = [];
        this.pediaHistoryIndex = -1;
        this.pediaCurrentCat = 'all';
        this.pediaSearchQuery = '';

        const searchInput = document.getElementById('pedia-search-input');
        const clearBtn = document.getElementById('pedia-search-clear');
        const backBtn = document.getElementById('pedia-nav-back');
        const fwdBtn = document.getElementById('pedia-nav-fwd');
        const randomBtn = document.getElementById('pedia-btn-random');
        const catBar = document.getElementById('pedia-category-bar');

        if (searchInput) {
            searchInput.oninput = () => {
                this.pediaSearchQuery = searchInput.value.trim().toLowerCase();
                if (clearBtn) clearBtn.style.display = this.pediaSearchQuery ? 'block' : 'none';
                this.renderPediaArticleList(this.pediaCurrentCat, this.pediaSearchQuery);
            };
        }

        if (clearBtn) {
            clearBtn.onclick = () => {
                if (searchInput) {
                    searchInput.value = '';
                    this.pediaSearchQuery = '';
                    clearBtn.style.display = 'none';
                    this.renderPediaArticleList(this.pediaCurrentCat, '');
                }
            };
        }

        if (catBar) {
            catBar.querySelectorAll('.pedia-cat-pill').forEach(pill => {
                pill.onclick = () => {
                    catBar.querySelectorAll('.pedia-cat-pill').forEach(p => p.classList.remove('active'));
                    pill.classList.add('active');
                    this.pediaCurrentCat = pill.dataset.cat;
                    if (this.game.audio) this.game.audio.playClick();
                    this.renderPediaArticleList(this.pediaCurrentCat, this.pediaSearchQuery);
                };
            });
        }

        if (backBtn) {
            backBtn.onclick = () => {
                if (this.pediaHistoryIndex > 0) {
                    this.pediaHistoryIndex--;
                    const artId = this.pediaHistory[this.pediaHistoryIndex];
                    this.openCodexArticle(artId, false);
                }
            };
        }

        if (fwdBtn) {
            fwdBtn.onclick = () => {
                if (this.pediaHistoryIndex < this.pediaHistory.length - 1) {
                    this.pediaHistoryIndex++;
                    const artId = this.pediaHistory[this.pediaHistoryIndex];
                    this.openCodexArticle(artId, false);
                }
            };
        }

        if (randomBtn) {
            randomBtn.onclick = () => {
                const db = window.GALAXY_PEDIA || {};
                const keys = Object.keys(db);
                if (keys.length > 0) {
                    const randKey = keys[Math.floor(Math.random() * keys.length)];
                    this.openCodexArticle(randKey, true);
                }
            };
        }

        this.renderPediaArticleList('all', '');
        this.openCodexArticle('era_stone', true);
    }

    renderPediaArticleList(catFilter = 'all', query = '') {
        const listEl = document.getElementById('pedia-article-list');
        const countEl = document.getElementById('pedia-results-count');
        if (!listEl) return;
        listEl.innerHTML = '';

        const db = window.GALAXY_PEDIA || {};
        const entries = Object.values(db).filter(art => {
            if (catFilter !== 'all' && art.category !== catFilter) return false;
            if (!query) return true;
            const q = query.toLowerCase();
            const inTitle = art.title && art.title.toLowerCase().includes(q);
            const inTags = art.tags && art.tags.some(t => t.toLowerCase().includes(q));
            const inLore = art.lore && art.lore.toLowerCase().includes(q);
            const inSub = art.subtitle && art.subtitle.toLowerCase().includes(q);
            return inTitle || inTags || inLore || inSub;
        });

        if (countEl) {
            countEl.textContent = `Showing ${entries.length} ${catFilter === 'all' ? 'Articles' : catFilter}`;
        }

        if (entries.length === 0) {
            listEl.innerHTML = `<li style="padding: 12px; color: #94a3b8; font-size:0.75rem; text-align:center;">No articles matching "${query}"</li>`;
            return;
        }

        entries.forEach(art => {
            const li = document.createElement('li');
            li.className = `pedia-list-item ${this.pediaActiveArticleId === art.id ? 'active' : ''}`;
            li.dataset.articleId = art.id;
            li.innerHTML = `
                <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; padding-right:6px;">${art.title}</span>
                <span class="pedia-list-badge">${art.category}</span>
            `;
            li.onclick = () => {
                this.openCodexArticle(art.id, true);
            };
            listEl.appendChild(li);
        });
    }

    openCodexArticle(articleId, pushHistory = true) {
        const db = window.GALAXY_PEDIA || {};
        const art = db[articleId];
        if (!art) return;

        this.pediaActiveArticleId = articleId;
        if (pushHistory) {
            if (this.pediaHistoryIndex < this.pediaHistory.length - 1) {
                this.pediaHistory = this.pediaHistory.slice(0, this.pediaHistoryIndex + 1);
            }
            this.pediaHistory.push(articleId);
            this.pediaHistoryIndex = this.pediaHistory.length - 1;
        }

        const listEl = document.getElementById('pedia-article-list');
        if (listEl) {
            listEl.querySelectorAll('.pedia-list-item').forEach(item => {
                item.classList.toggle('active', item.dataset.articleId === articleId);
            });
        }

        const viewport = document.getElementById('pedia-article-viewport');
        if (!viewport) return;

        if (this.game.audio && typeof this.game.audio.playPageFlip === 'function') {
            this.game.audio.playPageFlip();
        }

        let statsRows = '';
        if (art.stats && typeof art.stats === 'object') {
            for (const [k, v] of Object.entries(art.stats)) {
                statsRows += `<tr><th>${k}</th><td>${v}</td></tr>`;
            }
        }

        let abilitiesHtml = '';
        if (art.abilities && art.abilities.length > 0) {
            abilitiesHtml = `
                <h2 class="pedia-h2" id="sec-abilities">⚡ Abilities & Simulation Mechanics</h2>
                <ul class="pedia-abilities-list">
                    ${art.abilities.map(ab => {
                        const parts = ab.split(':');
                        if (parts.length > 1) {
                            return `<li><strong>${parts[0]}:</strong>${parts.slice(1).join(':')}</li>`;
                        }
                        return `<li>${ab}</li>`;
                    }).join('')}
                </ul>
            `;
        }

        const tagsHtml = (art.tags || []).map(t => `<span class="pedia-tag-chip">#${t}</span>`).join('');

        let actionBtnHtml = '';
        if (art.toolId) {
            actionBtnHtml = `<button class="btn btn-primary" id="pedia-article-action-btn" style="white-space:nowrap; padding:8px 14px; font-weight:700; box-shadow: 0 0 12px rgba(59,130,246,0.5);">⚡ ${art.actionLabel || 'Spawn / Use'}</button>`;
        }

        let parsedLore = art.lore || '';
        for (const targetId of Object.keys(db)) {
            if (targetId === articleId || targetId.length < 4) continue;
            const targetArt = db[targetId];
            if (!targetArt || !targetArt.title) continue;
            const title = targetArt.title;
            const regex = new RegExp(`\\b(${title})\\b`, 'gi');
            if (parsedLore.match(regex)) {
                parsedLore = parsedLore.replace(regex, `<a class="pedia-wikilink" data-target="${targetId}">$1</a>`);
            }
        }

        let relatedHtml = '';
        if (art.related && art.related.length > 0) {
            relatedHtml = `
                <h2 class="pedia-h2" id="sec-related">🔗 See Also / Related Articles</h2>
                <p class="pedia-p">
                    ${art.related.map(relId => {
                        const rel = db[relId];
                        const title = rel ? rel.title : relId;
                        return `<a class="pedia-wikilink" data-target="${relId}" style="margin-right:12px;">↗ ${title}</a>`;
                    }).join('')}
                </p>
            `;
        }

        viewport.innerHTML = `
            <div class="pedia-article-header">
                <div class="pedia-article-title-wrap">
                    <h1>${art.title}</h1>
                    <div class="pedia-article-sub">${art.subtitle || art.category}</div>
                    <div class="pedia-tags-row">${tagsHtml}</div>
                </div>
                ${actionBtnHtml}
            </div>

            <div class="pedia-article-body">
                <div class="pedia-article-main">
                    <div class="pedia-toc-box">
                        <div class="pedia-toc-title">Contents</div>
                        <ul class="pedia-toc-list">
                            <li><a href="#sec-overview">1. Overview</a></li>
                            ${abilitiesHtml ? `<li><a href="#sec-abilities">2. Abilities & Mechanics</a></li>` : ''}
                            ${art.tactics ? `<li><a href="#sec-tactics">3. Tactical Strategies</a></li>` : ''}
                            ${art.counters ? `<li><a href="#sec-counters">4. Counters & Weaknesses</a></li>` : ''}
                            ${relatedHtml ? `<li><a href="#sec-related">5. See Also</a></li>` : ''}
                        </ul>
                    </div>

                    <h2 class="pedia-h2" id="sec-overview">📜 Overview & History</h2>
                    <p class="pedia-p">${parsedLore}</p>

                    ${abilitiesHtml}

                    ${art.tactics ? `
                        <h2 class="pedia-h2" id="sec-tactics">🎯 Tactical Usage & Strategy</h2>
                        <p class="pedia-p">${art.tactics}</p>
                    ` : ''}

                    ${art.counters ? `
                        <h2 class="pedia-h2" id="sec-counters">🛡️ Counters & Vulnerabilities</h2>
                        <p class="pedia-p">${art.counters}</p>
                    ` : ''}

                    ${relatedHtml}
                </div>

                <div class="pedia-infobox">
                    <div class="pedia-infobox-header">${art.title}</div>
                    <div class="pedia-infobox-preview">
                        <canvas id="pedia-preview-canvas" width="64" height="64"></canvas>
                        <span style="font-size:0.68rem; color:#38bdf8; font-family:monospace; margin-top:4px;">${art.category.toUpperCase()}</span>
                    </div>
                    <table class="pedia-infobox-table">
                        <tbody>
                            <tr><th>Category</th><td>${art.category}</td></tr>
                            ${statsRows}
                        </tbody>
                    </table>
                    <div class="pedia-quote-box">
                        "${art.subtitle || 'A prominent entry in universal history.'}"
                    </div>
                </div>
            </div>
        `;

        this.renderPediaPreview(art);

        viewport.querySelectorAll('.pedia-wikilink').forEach(link => {
            link.onclick = (e) => {
                e.preventDefault();
                const target = link.dataset.target;
                if (target) this.openCodexArticle(target, true);
            };
        });

        const actionBtn = document.getElementById('pedia-article-action-btn');
        if (actionBtn && art.toolId) {
            actionBtn.onclick = () => {
                this.selectToolById(art.toolId);
                const modal = document.getElementById('modal-codex');
                if (modal) modal.classList.remove('active');
                if (this.game.audio) this.game.audio.playPowerup();
            };
        }

        viewport.scrollTop = 0;
    }

    renderPediaPreview(art) {
        const cvs = document.getElementById('pedia-preview-canvas');
        if (!cvs) return;
        const ctx = cvs.getContext('2d');
        ctx.clearRect(0, 0, 64, 64);

        const atlas = this.game.renderer && this.game.renderer.creatureAtlasCanvas;
        if (art.category === 'Creatures' && atlas) {
            const SPECIES_ORDER = [
                'human', 'elf', 'orc', 'dwarf', 'sheep', 'cow', 'wolf', 'bear', 'golem', 'zombie',
                'skeleton', 'demon', 'alien', 'duck', 'crystal_golem', 'shadow_assassin', 'frog',
                'cyber_ninja', 'laser_shark', 'frost_wolf', 'sand_scorpion', 'necromancer', 'valkyrie',
                'gargoyle', 'mecha_rex', 'golden_dragon', 'space_worm', 'goblin', 'pirate_ship', 'trex',
                'triceratops', 'velociraptor', 'pterodactyl', 'brachiosaurus', 'frost_dragon', 'shadow_dragon',
                'storm_dragon', 'dark_matter_colossus', 'phoenix_knight', 'thunder_bird', 'cyber_dragon',
                'swamp_behemoth', 'mammoth', 'astral_phoenix', 'frost_giant', 'dread_reaper',
                'dune_scorpion_king', 'titan_golem', 'pegasus', 'crabzilla', 'kaiju', 'phoenix',
                'kraken', 'hydra', 'frost_titan', 'galaxy_guardian', 'colossus_mech', 'seraph_angel',
                'dune_leviathan', 'vampire_lord', 'void_titan', 'evermean', 'tank', 'warship',
                'helicopter', 'starfighter', 'mech', 'wizard'
            ];
            const idx = SPECIES_ORDER.indexOf(art.id);
            if (idx !== -1) {
                const row = 1 + Math.floor((idx * 2) / 32);
                const col = (idx * 2) % 32;
                ctx.imageSmoothingEnabled = false;
                ctx.drawImage(atlas, col * 64, row * 64, 64, 64, 0, 0, 64, 64);
                return;
            }
        }

        ctx.fillStyle = '#1e293b';
        ctx.fillRect(0, 0, 64, 64);

        const grad = ctx.createRadialGradient(32, 32, 4, 32, 32, 28);
        grad.addColorStop(0, 'rgba(56, 189, 248, 0.4)');
        grad.addColorStop(1, 'rgba(56, 189, 248, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 64, 64);

        ctx.font = '28px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        let icon = '🌌';
        if (art.category === 'Biomes & Tiles') icon = '🗺️';
        else if (art.category === 'Disasters') icon = '💥';
        else if (art.category === 'Weapons') icon = '⚔️';
        else if (art.category === 'Civilizations') icon = '🏛️';
        else if (art.category === 'God Powers') icon = '✨';
        ctx.fillText(icon, 32, 32);
    }

    selectToolById(toolId) {
        for (const [catId, tools] of Object.entries(CATEGORY_TOOLS)) {
            const found = tools.find(t => t.id === toolId);
            if (found) {
                this.switchCategory(catId);
                this.selectTool(found);
                return;
            }
        }
        this.activeTool = toolId;
    }
}

window.CATEGORIES = CATEGORIES;
window.CATEGORY_TOOLS = CATEGORY_TOOLS;
window.UIManager = UIManager;

