const rawAtlas = `
[[Virelden]]
• Type: Green Plains
• Description: Rolling hills of vibrant emerald grass that seem to hum with a faint, rhythmic magical pulse from the deep soil.
• Element: Earth
• Realm: Beeston
• Biome: Plains
• Coordinates: X: 984 Y: 3552
[[The Halcyon Verge]]
• Type: Green Plains
• Description: A peaceful, windswept meadow where the weather remains eternally calm and the flowers are purely decorative plastic-like growths.
• Element: Water
• Realm: Antiquity
• Biome: Plains
• Coordinates: X: 1836 Y: 3136
[[Caerwyn Fields]]
• Type: Green Plains
• Description: A sprawling moor where strange metallic ores grow from the soil like jagged, silver wheat alongside traditional grass.
• Element: Metal
• Realm: Ultimatera
• Biome: Plains
• Coordinates: X: 1516  Y: 3328
[[Blackfen]]
• Type: Marsh
• Description: A murky wetland choked with bioluminescent moss and ancient, gnarled roots that grip the peat with sentient intent.
• Element: Water
• Realm: Beeston
• Biome: Wetlands
• Coordinates: X: 2432  Y: 4012
[[Mirefall]]
• Type: Marsh
• Description: A chaotic bog where pockets of flammable industrial gas ignite spontaneously, creating a landscape of flickering peat-fires.
• Element: Fire
• Realm: Nexsicon
• Biome: Wetlands
• Coordinates: X: 3556  Y: 3688
[[Velmire]]
• Type: Marsh
• Description: A standard, fog-heavy woodland known for its treacherous mudflats and seasonal bird migrations.
• Element: Neutral
• Realm: Antiquity
• Biome: Forest
• Coordinates: X: 3128  Y: 2296
[[Solstride Expanse]]
• Type: Prairie
• Description: An endless sea of golden tallgrass that serves as the primary hunting ground for nomadic tribes following the natural breeze.
• Element: Wind
• Realm: Antiquity
• Biome: Forest
• Coordinates: X: 2332  Y: 2736
[[Kestrel Run]]
• Type: Prairie
• Description: A high-altitude grassland where the soil is rich in minerals, though the air feels unnaturally thin and technologically filtered.
• Element: Earth
• Realm: Nexsicon
• Biome: Plains
• Coordinates: X: 4360  Y: 3364
[[Ardent Prairie]]
• Type: Prairie
• Description: A region plagued by constant static discharge, where the grass glows with electric blue sparks and humming energy.
• Element: Lightning
• Realm: Beeston
• Biome: Plains
• Coordinates: X: 3132  Y: 4128
[[Rustwake]]
• Type: Landfill
• Description: A massive graveyard of discarded cybernetics and leaking batteries that has become a toxic, neon-lit slum.
• Element: Poison
• Realm: Royastella
• Biome: Mountains
• Coordinates: X: 3644  Y: 3416
[[The Shatterheap]]
• Type: Landfill
• Description: A disorganized pile of debris from across various dimensions, constantly shifting as new portals dump junk onto the flat land.
• Element: Wind
• Realm: Ultimatera
• Biome: Plains
• Coordinates: X: 3180  Y: 2820
[[Mourning Hollow]]
• Type: Graveyard
• Description: A haunted vale where the trees weep black sap and the headstones are carved from solidified shadows.
• Element: Darkness
• Realm: Beeston
• Biome: Forest
• Coordinates: X: 916  Y: 3324
[[The Pale Reliquary]]
• Type: Graveyard
• Description: An ossuary built into a dormant volcanic vent, where the remains of the dead are eternally preserved by dry, intense heat.
• Element: Fire
• Realm: Nexsicon
• Biome: Volcanic
• Coordinates: X: 2168  Y: 3780
[[Velis Sepulcher]]
• Type: Graveyard
• Description: A historic, non-supernatural cemetery where the elite of the past are buried in elaborate marble vaults amid the muck.
• Element: Martial
• Realm: Antiquity
• Biome: Wetlands
• Coordinates: X: 3376  Y: 2320
[[Thorneveil]]
• Type: Forest
• Description: A dense woodland where the trees actively rearrange themselves to trap travelers in a maze of thorns.
• Element: Plant
• Realm: Beeston
• Biome: Forest
• Coordinates: X: 2220  Y: 3404
[[Myrwood]]
• Type: Forest
• Description: A rain-soaked forest where the canopy is so thick that the ground level is essentially an indoor river system.
• Element: Water
• Realm: Nexsicon
• Biome: Forest
• Coordinates: X: 4116  Y: 2296
[[Vaelor Vines]]
• Type: Jungle
• Description: A vibrant, multi-layered environment where predatory flora and cyber-enhanced vines hunt for sustenance.
• Element: Martial
• Realm: Ultimatera
• Biome: Forest
• Coordinates: X: 5000  Y: 3536
[[Zantara Wilds]]
• Type: Jungle
• Description: A tropical rainforest where the wind carries psychic spores, causing vivid hallucinations of floating islands.
• Element: Wind
• Realm: Beeston
• Biome: Forest
• Coordinates: X: 2588  Y: 1600
[[Frostreach]]
• Type: Tundra
• Description: A vast, frozen wasteland of permafrost where survival depends on finding rare geothermal vents.
• Element: Ice
• Realm: Antiquity
• Biome: Wetlands
• Coordinates: X: 2608  Y: 4684
[[Pale Horizon]]
• Type: Tundra
• Description: A flat, snowy desert where the white ground meets a white sky, making navigation nearly impossible.
• Element: Earth
• Realm: Nexsicon
• Biome: Tundra
• Coordinates: X: 4672  Y: 4368
[[Skelwinter]]
• Type: Tundra
• Description: A magical arctic zone where the Aurora Borealis is so bright it can be used as a physical source of energy.
• Element: Light
• Realm: Beeston
• Biome: Tundra
• Coordinates: X: 2860  Y: 4952
[[Sable Bog]]
• Type: Swamp
• Description: A dark, humid mire filled with massive cypress trees and hidden sinkholes of unpredictable, shifting depths.
• Element: Water
• Realm: Ultimatera
• Biome: Wetlands
• Coordinates: X: 1344  Y: 3756
[[Thornmarsh]]
• Type: Swamp
• Description: A supernatural mire where the water is thick as syrup and the reeds are sharp enough to slice through leather.
• Element: Poison
• Realm: Beeston
• Biome: Wetlands
• Coordinates: X: 3876  Y: 3068
[[Argent Shore]]
• Type: Beach
• Description: A pristine coastline with white sands and turquoise waters, famous for its natural beauty and sea salt trade.
• Element: Water
• Realm: Antiquity
• Biome: Coastal
• Coordinates: X: 2480  Y: 2256
[[Luma Coast]]
• Type: Beach
• Description: A shoreline where the tides are influenced by shifting dimensional planes rather than a single moon.
• Element: Neutral
• Realm: Nexsicon
• Biome: Coastal
• Coordinates: X: 4124  Y: 1884
[[Solcarra]]
• Type: Desert
• Description: A brutal, sun-scorched wasteland where ancient sandstone formations provide the only shade for miles.
• Element: Fire
• Realm: Antiquity
• Biome: Volcanic
• Coordinates: X: 3808  Y: 3308
[[Arkan Wastes]]
• Type: Desert
• Description: A shifting sea of dunes that occasionally unearths relics from civilizations that never actually existed.
• Element: Wind
• Realm: Ultimatera
• Biome: Desert
• Coordinates: X: 3544  Y: 2152
[[The Shattered Mirror]]
• Type: Wild West
• Description: A dry canyon floor where outlaws duel using specialized combat techniques and dusty, sun-bleached grit.
• Element: Martial
• Realm: Antiquity
• Biome: Desert
• Coordinates: X: 4576  Y: 2720
[[Salar Virex]]
• Type: Wild West
• Description: A salt flat frontier where the water is toxic and the only law is enforced by those with the fastest draw.
• Element: Water
• Realm: Nexsicon
• Biome: Desert
• Coordinates: X: 3276  Y: 2180
[[Redlock Territory]]
• Type: Mountain
• Description: A rugged mountain range inhabited by hardy miners and guarded by fortress-like outposts.
• Element: Earth
• Realm: Antiquity
• Biome: Desert
• Coordinates: X: 640  Y: 4088
[[Dusthaven]]
• Type: Mountain
• Description: A high-tech mining colony built into a peak, utilizing massive atmospheric scrubbers to keep the air breathable.
• Element: Metal
• Realm: Royastella
• Biome: Mountain
• Coordinates: X: 1680  Y: 4304
[[Highnoon Vale]]
• Type: Mountain
• Description: A high-altitude valley that experiences nearly twenty hours of sunlight due to its unique orbital position.
• Element: Earth
• Realm: Ultimatera
• Biome: Mountain
• Coordinates: X: 3208  Y: 3728
[[Dravemont]]
• Type: Volcano
• Description: A peak where the lava flows in intricate, runic patterns directed by an ancient elemental consciousness.
• Element: Fire
• Realm: Beeston
• Biome: Volcanic
• Coordinates: X: 1156  Y: 4508
[[Kharos Summit]]
• Type: Volcano
• Description: A volatile peak where the eruptions consist of molten slag and glass shards rather than standard magma.
• Element: Fire
• Realm: Nexsicon
• Biome: Volcanic
• Coordinates: X: 1632  Y: 3976
[[Pyreheart]]
• Type: Ice Mountain
• Description: A paradoxical peak where the summit is encased in eternal ice that burns the touch like dry ice.
• Element: Ice
• Realm: Beeston
• Biome: Tundra
• Coordinates: X: 3880  Y: 4620
[[The Ember Throne]]
• Type: Ice Mountain
• Description: A glacial range sitting atop a thermal pocket, creating a landscape of frozen peaks and boiling hot springs.
• Element: Water
• Realm: Ultimatera
• Biome: Tundra
• Coordinates: X: 4348  Y: 4484
[[Glaciovar]]
• Type: Mines
• Description: A deep excavation into an ancient glacier to retrieve minerals frozen since the dawn of time.
• Element: Earth
• Realm: Antiquity
• Biome: Subterranean
• Coordinates: X: 1900  Y: 3560
[[Frostspire]]
• Type: Mines
• Description: A series of vertical shafts where the air pressure is controlled by enchanted wind bellows.
• Element: Wind
• Realm: Beeston
• Biome: Subterranean
• Coordinates: X: 2448  Y: 2344
[[Icerend Summit]]
• Type: Mines
• Description: A dark, freezing site where the shadow of the rock has manifested as a physical, suffocating substance.
• Element: Darkness
• Realm: Nexsicon
• Biome: Subterranean
• Coordinates: X: 548  Y: 4240
[[Blackmantle Mines]]
• Type: Crystal Mines
• Description: A cavern system filled with glowing crystals that pulse with a soft, benevolent magical aura.
• Element: Light
• Realm: Beeston
• Biome: Subterranean
• Coordinates: X: 4500  Y: 3300
[[Ironvein]]
• Type: Crystal Mines
• Description: A corporate-owned facility where industrial lasers are used to harvest synthetic crystals from deep underground.
• Element: Earth
• Realm: Royastella
• Biome: Subterranean
• Coordinates: X: 2504  Y: 3284
[[Prismfall]]
• Type: Quarry
• Description: A terraced excavation where the stone is naturally translucent and refracts light into stunning rainbows.
• Element: Earth
• Realm: Beeston
• Biome: Subterranean
• Coordinates: X: 4440  Y: 2640
[[Shardreach]]
• Type: Quarry
• Description: A brutalist industrial site that uses thermal blasting to extract rare, heat-resistant obsidian.
• Element: Fire
• Realm: Royastella
• Biome: Subterranean
• Coordinates: X: 2892  Y: 3492
[[Stonebreak Quarry]]
• Type: City
• Description: A mundane industrial town built around a limestone pit, providing the foundation for the surrounding region.
• Element: Neutral
• Realm: Antiquity
• Biome: Subterranean
• Coordinates: X: 2028  Y: 2664
[[Titan Cut]]
• Type: City
• Description: A hub built directly into the side of a massive, hollowed-out canyon that served as a prehistoric construction site.
• Element: Neutral
• Realm: Nexsicon
• Biome: Mountain
• Coordinates: X: 3428  Y: 3436
[[Sector 19 Scaffold]]
• Type: Metropolis
• Description: A dizzying array of neon walkways and plasma-fences suspended miles above a light-polluted urban sprawl.
• Element: Light
• Realm: Royastella
• Biome: Mountain
• Coordinates: X: 2140  Y: 4060
[[Corethrust]]
• Type: Vantacity
• Description: A gritty urban center built over a deep geothermal shaft, filled with steam-pipes and shadowy alleyways.
• Element: Earth
• Realm: Nexsicon
• Biome: Volcanic
• Coordinates: X: 3594  Y: 2998
[[Ashline Works]]
• Type: Casino
• Description: A high-stakes gambling district where the games are run by advanced AI and the chips are digital currency.
• Element: Light
• Realm: Royastella
• Biome: Plains
• Coordinates: X: 2144  Y: 2796
[[Criase Foundry]]
• Type: Casino
• Description: A luxury entertainment district built within a decommissioned industrial plant, featuring flying card tables.
• Element: Wind
• Realm: Ultimatera
• Biome: Volcanic
• Coordinates: X: 1826  Y: 3824
[[Thorncut Mill]]
• Type: School
• Description: A specialized academy where students learn to interface their nervous systems with high-speed machinery.
• Element: Lightning
• Realm: Royastella
• Biome: Forest
• Coordinates: X: 2240  Y: 3370
[[Timberfall]]
• Type: School
• Description: A traditional university located in a scenic highland, focusing on the study of natural history and law.
• Element: Earth
• Realm: Antiquity
• Biome: Mountain
• Coordinates: X: 2438  Y: 2648
[[Sylva Forge]]
• Type: School
• Description: A technical institute where students experiment with cryogenic engineering and cold-fusion.
• Element: Ice
• Realm: Nexsicon
• Biome: Tundra
• Coordinates: X: 3300  Y: 4580
[[Valeris]]
• Type: Dojo
• Description: A secluded mountain temple where masters teach the art of physical perfection and traditional combat.
• Element: Martial
• Realm: Antiquity
• Biome: Plains
• Coordinates: X: 3012  Y: 4092
[[Virex]]
• Type: Dojo
• Description: A high-tech training facility where warriors spar against hard-light holograms in heated environments.
• Element: Fire
• Realm: Royastella
• Biome: Volcanic
• Coordinates: X: 2768  Y: 2692
[[Noctem]]
• Type: Engine Machine
• Description: The interior of a world-sized computer, filled with shifting gears, data-streams, and glowing circuits.
• Element: Metal
• Realm: Royastella
• Biome: Forest
• Coordinates: X: 1360  Y: 3264
[[Gallowspire]]
• Type: Engine Machine
• Description: A vertical fortress-machine that serves as a central lighthouse for dimensional travelers.
• Element: Light
• Realm: Nexsicon
• Biome: Mountain
• Coordinates: X: 2900  Y: 3736
[[Fortuna Prime]]
• Type: Factory
• Description: A fully automated manufacturing plant where molten metal is poured into molds by massive robotic arms.
• Element: Fire
• Realm: Royastella
• Biome: Volcanic
• Coordinates: X: 3084  Y: 3148
[[House Luminara]]
• Type: Factory
• Description: A manufacturing estate where the ground itself is harvested for rare minerals to create durable goods.
• Element: Earth
• Realm: Ultimatera
• Biome: Subterranean
• Coordinates: X: 3424  Y: 1632
[[Aether Academy]]
• Type: Lumber Mill
• Description: A corporate campus that processes genetically modified timber into high-tensile construction materials.
• Element: Plant
• Realm: Royastella
• Biome: Forest
• Coordinates: X: 2592  Y: 2968
[[Northwind Institute]]
• Type: Lumber Mill
• Description: A mystical grove where trees are harvested using water-jet blades to preserve their latent magical properties.
• Element: Water
• Realm: Beeston
• Biome: Forest
• Coordinates: X: 2948  Y: 2592
[[Valeris Preparatory]]
• Type: Lumber Mill
• Description: A standard industrial mill that processes timber from the surrounding mundane forests.
• Element: Neutral
• Realm: Nexsicon
• Biome: Forest
• Coordinates: X: 3540  Y: 2600
[[House of Silent Gale]]
• Type: Warzone
• Description: A magical battlefield where the air is permanently thin and fighters move with supernatural speed.
• Element: Martial
• Realm: Beeston
• Biome: Forest
• Coordinates: X: 2924  Y: 3860
[[The Veiled Fist]]
• Type: Warzone
• Description: A localized combat zone where the ground is constantly struck by tactical orbital lightning strikes.
• Element: Lightning
• Realm: Ultimatera
• Biome: Forest
• Coordinates: X: 2564  Y: 3304
[[Ash Meridian]]
• Type: Prison
• Description: A penal colony located on a rainy, desolate island where the inmates are forced to mine the seabed.
• Element: Water
• Realm: Nexsicon
• Biome: Wetlands
• Coordinates: X: 1380  Y: 2892
[[Dreadhold]]
• Type: Circus
• Description: A sinister carnival where the performers are bound spirits and the attractions are deadly magical traps.
• Element: Light
• Realm: Beeston
• Biome: Desert
• Coordinates: X: 3764  Y: 2344
[[Blackreach Penitentiary]]
• Type: Circus
• Description: A brutal facility that holds death matches for the entertainment of the wealthy elite.
• Element: Earth
• Realm: Royastella
• Biome: Subterranean
• Coordinates: X: 764  Y: 3128
[[Virex Containment]]
• Type: Circus
• Description: A containment zone for rogue combatants, often viewed by the public through secure, long-range cameras.
• Element: Martial
• Realm: Ultimatera
• Biome:  Mountain
• Coordinates: X: 732  Y: 4252
[[Cirque Nocturne]]
• Type: Amusement Park
• Description: A nighttime fairground where the rides are powered by captive lightning and the prizes are magical charms.
• Element: Lightning
• Realm: Beeston
• Biome: Mountains
• Coordinates: X: 3408  Y: 2932
[[The Shattered Masque]]
• Type: Amusement Park
• Description: A derelict site where the leftover pyrotechnics and grease-fires have created a permanent, glowing haze.
• Element: Fire
• Realm: Nexsicon
• Biome: Volcanic
• Coordinates: X: 1100  Y: 4220
[[The Crimson Wake]]
• Type: Train
• Description: A high-speed maglev train that runs on a track of liquid fire, transporting goods across the wastes.
• Element: Metal
• Realm: Royastella
• Biome: Volcanic
• Coordinates: X: 1380  Y: 4212
[[The Salt Revenant]]
• Type: Train
• Description: A ghost-train that appears on abandoned tracks, its cars filled with the shadows of a lost era.
• Element: Darkness
• Realm: Nexsicon
• Biome: Forest
• Coordinates: X: 3036  Y: 3768
[[Iron Seraph]]
• Type: Haunted House
• Description: A mansion of living metal that changes its layout to trap those who enter its mechanical halls.
• Element: Darkness
• Realm: Beeston
• Biome: Plains
• Coordinates: X: 2652  Y: 1752
[[Railfang]]
• Type: Haunted House
• Description: A derelict research train where the onboard AI has gone insane and began haunting the intercoms.
• Element: Wind
• Realm: Royastella
• Biome: Plains
• Coordinates: X: 1548  Y: 3348
[[The Veil Manor]]
• Type: Abandoned Lab
• Description: A high-tech estate where secret experiments with electricity and the human mind went horribly wrong.
• Element: Lightning
• Realm: Royastella
• Biome: Mountain
• Coordinates: X: 4548  Y: 2560
[[Hollowrest]]
• Type: Abandoned Lab
• Description: A quiet, dusty manor once owned by a famous clockmaker; no ghosts, just unsettling silence.
• Element: Neutral
• Realm: Antiquity
• Biome: Forest
• Coordinates: X: 5040  Y: 3568
[[The Pale Widow]]
• Type: Abandoned Lab
• Description: A medical facility overtaken by toxic mold and failed chemical samples after a sudden evacuation.
• Element: Poison
• Realm: Ultimatera
• Biome: Forest
• Coordinates: X: 3064  Y: 2608
[[The Axiom Facility]]
• Type: Abandoned Sanitarium
• Description: A sprawling complex where advanced sedation techniques and chemical labs are still running on emergency power.
• Element: Poison
• Realm: Royastella
• Biome: Wetlands
• Coordinates: X: 3860  Y: 3656
[[Helix Sector]]
• Type: Abandoned Sanitarium
• Description: A former research hospital where the incinerators are still warm and the air smells of old chemicals.
• Element: Fire
• Realm: Nexsicon
• Biome: Volcanic
• Coordinates: X: 3244  Y: 3324
[[Graymoor Asylum]]
• Type: Abandoned Castle
• Description: A ruined stone fortress overrun by sentient vines and carnivorous flowers.
• Element: Plant
• Realm: Beeston
• Biome: Forest
• Coordinates: X: 672  Y: 3260
[[The Quiet Ward]]
• Type: Abandoned Castle
• Description: A stone keep on a windy cliffside, emptied by plague centuries ago and left to the elements.
• Element: Wind
• Realm: Ultimatera
• Biome: Mountain
• Coordinates: X: 1840  Y: 4332
[[Duskkeep]]
• Type: Abandoned Amusement Park
• Description: A rusted park where the mechanical mascots still twitch and sparks fly from broken coasters.
• Element: Metal
• Realm: Royastella
• Biome: Coastal
• Coordinates: X: 3218  Y: 1436
[[Ruinfall]]
• Type: Abandoned Amusement Park
• Description: A site built around a volcanic hot-spring that eventually overflowed, melting the plastic attractions.
• Element: Fire
• Realm: Nexsicon
• Biome: Volcanic
• Coordinates: X: 2740  Y: 2654
[[Ashcrown]]
• Type: Abandoned Amusement Park
• Description: A magical fairground where the illusions have become solid and wander the grounds as aimless ghosts.
• Element: Light
• Realm: Beeston
• Biome: Plains
• Coordinates: X: 4896  Y: 3444
[[Starfall Ruins]]
• Type: Abandoned Circus
• Description: A site where a grand theater once stood; now only a few marble pillars and stone masks remain.
• Element: Neutral
• Realm: Antiquity
• Biome: Plains
• Coordinates: X: 3432  Y: 4092
[[Radiant Relic]]
• Type: Abandoned Circus
• Description: A field where the remnants of a great celebration have been buried under layers of shifting earth and scrap.
• Element: Earth
• Realm: Ultimatera
• Biome:  Subterranean
• Coordinates: X: 1500  Y: 3784
[[The Broken Masque]]
• Type: Lost Temple
• Description: A mountain shrine dedicated to a forgotten wind god, where the statues still whisper to the breeze.
• Element: Wind
• Realm: Beeston
• Biome: Mountain
• Coordinates: X: 4160  Y: 2752
[[Velvet Ash]]
• Type: Lost Temple
• Description: An underground vault made of heavy lead and iron, designed to keep a secret buried forever.
• Element: Metal
• Realm: Royastella
• Biome: Subterranean
• Coordinates: X: 4808  Y: 2652
[[The Veiled Pantheon]]
• Type: European Castle
• Description: A grand palace located on a coastal cliff, where the fountains are said to flow with enchanted water and bioluminescence.
• Element: Water
• Realm: Nexsicon
• Biome: Coastal
• Coordinates: X: 4820  Y: 2280
[[Caer Valmont]]
• Type: Arabic Castle
• Description: A desert palace of gold and sand, famous for its intricate architecture and hidden oases.
• Element: Fire
• Realm: Antiquity
• Biome: Desert
• Coordinates: X: 4148  Y: 2904
[[Thornwatch Keep]]
• Type: Arabic Castle
• Description: A fortress guarding the mountain passes, built from local clay and reinforced with ironwood beams.
• Element: Earth
• Realm: Ultimatera
• Biome: Mountain
• Coordinates: X: 776  Y: 4124
[[Qasr Virex]]
• Type: Japanese Castle
• Description: A coastal pagoda surrounded by zen gardens, where the monks study the flow of the tides.
• Element: Water
• Realm: Antiquity
• Biome: Coastal
• Coordinates: X: 1276  Y: 3784
[[Zafiran Bastion]]
• Type: Japanese Castle
• Description: A militarized fortress where traditional training halls are used for modern tactical combat.
• Element: Martial
• Realm: Nexsicon
• Biome: Mountain
• Coordinates: X: 3536  Y: 3324
[[Kurohana-jō]]
• Type: Chinese Castle
• Description: A sprawling mountain citadel with red gates and stone dragons that overlook the fertile valleys below.
• Element: Earth
• Realm: Antiquity
• Biome: Mountain
• Coordinates: X: 2876  Y: 3112
[[Akatsura Keep]]
• Type: Chinese Castle
• Description: A magical palace where the lanterns are lit by captive fire spirits and the walls are made of jade.
• Element: Fire
• Realm: Beeston
• Biome: Volcanic
• Coordinates: X: 1768  Y: 4112
[[Seiryū Bastion]]
• Type: Chinese Castle
• Description: A fortress built into a windy peak, featuring massive kites used for long-range observation.
• Element: Wind
• Realm: Ultimatera
• Biome: Plains
• Coordinates: X: 1360  Y: 3144
[[Tianlong Fortress]]
• Type: Ice Palace
• Description: A palace carved from a single iceberg, inhabited by a court of immortal frost-wizards.
• Element: Ice
• Realm: Beeston
• Biome: Tundra
• Coordinates: X: 2452  Y: 4720
[[Yǒngshān Keep]]
• Type: Ice Palace
• Description: A standard stone castle located in a frozen highland, serving as a neutral meeting point for lords.
• Element: Neutral
• Realm: Nexsicon
• Biome: Tundra
• Coordinates: X: 2828  Y: 4836
[[The Glacial Crown]]
• Type: Coliseum
• Description: A massive arena carved into a glacier where warriors duel for the favor of the winter gods.
• Element: Martial
• Realm: Beeston
• Biome: Tundra
• Coordinates: X: 1900  Y: 4972
[[Cryovar Throne]]
• Type: Coliseum
• Description: An aquatic arena where combatants must fight while managing rising and falling water levels.
• Element: Water
• Realm: Ultimatera
• Biome: Wetlands
• Coordinates: X: 3476  Y: 3760
[[The Grand Meridian]]
• Type: Tower
• Description: A spire that pierces the clouds, serving as a magical conductor for atmospheric energy.
• Element: Wind
• Realm: Beeston
• Biome:  Mountain
• Coordinates: X: 2092  Y: 4048

[[Rivetpoint]]
• Type: Metropolis
• Description: A massive hub where different cultural sectors intersect, though it lacks a unified architectural style.
• Element: Wind
• Realm: Ultimatera
• Biome: Crossover
• Coordinates: X: 3600  Y: 4176
[[The Grand Dynamo]]
• Type: Vantacity
• Description: A rain-slicked city of towering dark spires, powered by a massive, humming generator that casts long shadows.
• Element: Darkness
• Realm: Royastella
• Biome: Crossover
• Coordinates: X: 3704  Y: 3084

[[Titan’s Ring]]
• Type: Tower
• Description: A circular spire built into the ground, descending into the deep sea rather than ascending.
• Element: Earth
• Realm: Nexsicon
• Biome: Water
• Coordinates: X: 1188  Y: 2284
[[Spire Astra]]
• Type: Underwater
• Description: A pressurized glass city located on the ocean floor, connected to the surface by a single reinforced lift.
• Element: Water
• Realm: Royastella
• Biome: Water
• Coordinates: X: 4596  Y: 752
[[Blackspire]]
• Type: Underwater
• Description: A dark, hydrothermal vent station used for deep-sea research and harvesting geothermal currents.
• Element: Wind
• Realm: Ultimatera
• Biome: Water
• Coordinates: X: 4712  Y: 5128
[[The Aetherion]]
• Type: Pirate Boat
• Description: A flying galleon that sails on magical currents, raiding land-dwellers for their mana reserves.
• Element: Water
• Realm: Beeston
• Biome: Water
• Coordinates: X: 580  Y: 3620
[[Skyward Bastion]]
• Type: Pirate Boat
• Description: A heavily armored air-ship used by sky-pirates to hijack cargo from orbital elevators.
• Element: Earth
• Realm: Royastella
• Biome: Water
• Coordinates: X: 2272  Y: 2094

[[Thaloryn Deep]]
• Type: Sky Clouds
• Description: A series of temples built on solidified vapor, accessible only to those who can fly or navigate the winds.
• Element: Wind
• Realm: Beeston
• Biome: Sky
• Coordinates: X: 1580  Y: 1064
[[Coral Virex]]
• Type: Sky Clouds
• Description: An aerial outpost where the heated air from below creates a warm, tropical climate among the mists.
• Element: Fire
• Realm: Nexsicon
• Biome: Sky
• Coordinates: X: 5188  Y: 1536
[[Caelumreach]]
• Type: Floating Continent
• Description: A massive island floating in the stratosphere, home to ancient ruins and strange, winged beasts.
• Element: Wind
• Realm: Beeston
• Biome: Sky
• Coordinates: X: 4272  Y: 456
[[Highwind Expanse]]
• Type: Floating Continent
• Description: A flat, grassy floating island used for the cultivation of rare, high-altitude botanical life.
• Element: Plant
• Realm: Ultimatera
• Biome: Sky
• Coordinates: X: 656  Y: 1896
[[The Red Front]]
• Type: Prison
• Description: A high-security facility located on a toxic world, where the atmosphere itself serves as the primary guard.
• Element: Poison
• Realm: Royastella
• Biome: Sky
• Coordinates: X: 1424  Y: 1080
[[Grand Eris]]
• Type: Construction Zone
• Description: A massive orbital shipyard where the frames of future dreadnoughts are welded by swarms of drones.
• Element: Poison
• Realm: Royastella
• Biome: Sky
• Coordinates: X: 408  Y: 3668
[[Caelorum Prime]]
• Type: Construction Zone
• Description: A chaotic site where gravity anchors are being used to tether several floating districts together.
• Element: Wind
• Realm: Ultimatera
• Biome: Sky
• Coordinates: X: 664  Y: 5180
[[Starfall Park]]
• Type: Sky Carrier
• Description: A luxury garden-vessel that floats above the smog, featuring artificial lakes and synthetic birds.
• Element: Wind
• Realm: Royastella
• Biome: Sky
• Coordinates: X: 2784  Y: 5200
[[Luminary Gardens]]
• Type: Sky Carrier
• Description: A vessel designed to look like a floating island, used as a mobile diplomatic neutral ground.
• Element: Water
• Realm: Ultimatera
• Biome: Sky
• Coordinates: X: 3828  Y: 4968
[[Solkarum Sanctum]]
• Type: European Castle
• Description: A floating fortress of white marble, held aloft by the collective will of a dedicated priesthood.
• Element: Neutral
• Realm: Beeston
• Biome: Sky
• Coordinates: X: 996  Y: 196

[[Aetherfall]]
• Type: Space
• Description: A space station built on the edge of a black hole, where the light is swallowed by constant, heavy shadows.
• Element: Darkness
• Realm: Royastella
• Biome: Space
• Coordinates: X: 924  Y: 1584
[[Heliox Drift]]
• Type: Space
• Description: A cluster of asteroid habitats that utilize solar currents to maintain their orbit around a central star.
• Element: Wind
• Realm: Nexsicon
• Biome: Space
• Coordinates: X: 4776  Y: 4968

[[The Outer Meridian]]
• Type: Cyberspace
• Description: The literal edge of the digital world, where the code starts to break down into raw, dark energy.
• Element: Darkness
• Realm: Royastella
• Biome: Digital
• Coordinates: X: 5100  Y: 1692
[[Astral Verge]]
• Type: Cyberspace
• Description: A virtual landscape designed to look like a calm, endless ocean for efficient data processing.
• Element: Water
• Realm: Ultimatera
• Biome: Digital
• Coordinates: X: 620  Y: 924
[[The Grid of Axiom]]
• Type: Cyberspace
• Description: The core architecture of the global network, a perfectly symmetrical realm of pure logic and light.
• Element: Light
• Realm: Royastella
• Biome: Digital
• Coordinates: X: 3312  Y: 4796
[[Neon Meridian]]
• Type: Cyberspace
• Description: A social hub in the digital world where users interact in a stylized, low-poly urban environment.
• Element: Neutral
• Realm: Nexsicon
• Biome: Digital
• Coordinates: X: 1288  Y: 4796

[[The Alabaster Crucible]]
• Type: Salt Flats
• Description: A blindingly white expanse of cracked mineral crust where the horizon vanishes into a shimmering, high-tech heat haze.
• Element: Aether
• Realm: Nexsicon
• Biome: Special
• Coordinates: X: 3148  Y: 968 
`;

const locations = [];

const blocks = rawAtlas.split("[[").slice(1);

blocks.forEach(block => {

  const name = block.split("]]")[0].trim();

  const typeMatch = block.match(/Type:\s*(.+)/i);
  const descMatch = block.match(/Description:\s*(.+)/i);
  const elementMatch = block.match(/Element:\s*(.+)/i);
  const realmMatch = block.match(/Realm:\s*(.+)/i);
  const biomeMatch = block.match(/Biome:\s*(.+)/i);
  const coordMatch = block.match(/Coordinates:\s*X:\s*(\d+)\s*Y:\s*(\d+)/i);

  locations.push({
    name,
    type: typeMatch ? typeMatch[1].trim() : "",
    description: descMatch ? descMatch[1].trim() : "",
    element: elementMatch ? elementMatch[1].trim() : "",
    realm: realmMatch ? realmMatch[1].trim() : "",
    biome: biomeMatch ? biomeMatch[1].trim() : "",
    coords: coordMatch
      ? [parseInt(coordMatch[1]), parseInt(coordMatch[2])]
      : null
  });

});

console.log("Loaded locations:", locations.length);