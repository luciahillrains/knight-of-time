export const ITEMS_JSON = `
	{
  "debugItem": {
    "name": "Debug Item",
    "description": "You're not sure what this is supposed to be, but it looks pretty neato!",
    "effect": {
      "action": "recover",
      "constant": "10",
      "operand": "HP"
    },
    "type": "",
    "specialEffect": "",
    "cards": ""
  },


  "debugWeapon": {
    "name": "Debug Weapon",
    "description": "Lucy's favorite little thingymabob",
    "type": "weapon",
    "cards": "dCard",
    "effect": {
      "action": "recover",
      "constant": "15",
      "operand": "Offense"
    }
  },

  "debugArmor": {
    "name": "Debug Armor",
    "description": "Lucy's favorite shirt",
    "type": "armor",
    "cards": "dCard1",
    "effect": {
      "action": "recover",
      "constant": "15",
      "operand": "Defense"
    }
  },
  "specialRock": {
    "name": "Special Rock",
    "description": "A rock Dino says that can act as a key to find the girmoires.",
    "type": "key",
    "cards": "",
    "specialEffect": "",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    }
  },
  "fireGrimoire": {
    "name": "Fire Grimoire",
    "description": "A grimoire required to defeat Nara",
    "type": "key",
    "cards": "",
    "specialEffect": "",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    }
  },
  "earthGrimoire": {
    "name": "Earth Grimoire",
    "description": "A grimoire required to defeat Nara",
    "type": "key",
    "cards": "",
    "specialEffect": "",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    }
  },
  "waterGrimoire": {
    "name": "Water Grimoire",
    "description": "A grimoire required to defeat Nara",
    "type": "key",
    "cards": "",
    "specialEffect": "",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    }
  },
  "airGrimoire": {
    "name": "Air Grimoire",
    "description": "A grimoire required to defeat Nara",
    "type": "key",
    "cards": "",
    "specialEffect": "",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    }
  },
  "continuumGrimoire": {
    "name": "Continuum Grimoire",
    "description": "A grimoire required to defeat Nara",
    "type": "key",
    "cards": "",
    "specialEffect": "",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    }
  },
  "debugAcc": {
    "name": "Ring of Awesomeness",
    "description": "Not the kind that does freaky things",
    "type": "acc",
    "cards": "dCard2",
    "effect": {
      "action": "recover",
      "constant": "10",
      "operand": "HP"
    }
  },
  "commonStaff": {
    "name": "Common Staff",
    "description": "A regular staff that Thomas had at hand.",
    "type": "weapon",
    "cards": "strike,spinStrike,concussion",
    "effect": {
      "action": "+",
      "constant": "5",
      "operand": "Offense"
    }
  },
  "commonDress": {
    "name": "Common Dress",
    "description": "It's real a tailored potato sack, but Thomas was nice enough to let you borrow it.",
    "type": "armor",
    "cards": "defend",
    "effect": {
      "action": "+",
      "constant": "3",
      "operand": "Defense"
    }
  },
  "healRing": {
    "name": "Heal Ring",
    "description": "A magical ring that has a green gemstone in it.",
    "type": "acc",
    "cards": "heal",
    "effect": {
      "action": "+",
      "constant": "1",
      "operand": "Defense"
    }
  },
  "tonic": {
    "name": "Tonic",
    "description": "Heals a small amount of HP",
    "type": "",
    "cards": "",
    "effect": {
      "action": "+",
      "constant": "50",
      "operand": "HP"
    },
    "cost": 30
  },
  "crystal": {
    "name": "Crystal",
    "description": "Receive the card 'Psystorm'.",
    "type": "",
    "cards": "psystorm",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    },
    "cost": 450
  },
  "bigTonic": {
    "name": "Big Tonic",
    "description": "Recovers about 200 HP.",
    "type": "",
    "cards": "",
    "effect": {
      "action": "+",
      "constant": "200",
      "operand": "HP"
    },
    "cost": 100
  },
  "ffish": {
    "name": "Fermented Fish",
    "description": "Repels enemies for an amount of time.",
    "type": "",
    "cards": "",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    },
    "cost": 50
  },
  "tonicPack": {
    "name": "Tonic Pack",
    "description": "A six pack of tonics.",
    "type": "",
    "cards": "",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "50",
      "operand": "HP"
    },
    "cost": 600,
    "uses": 6
  },
  "bigTonicPack": {
    "name": "Big Tonic Pack",
    "description": "A six pack of big tonics.",
    "type": "",
    "cards": "",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "200",
      "operand": "HP"
    },
    "cost": 1500,
    "uses": 6
  },
  "ultraTonic": {
    "name": "Ultra Tonic",
    "description": "Recovers a good amount of health.",
    "type": "",
    "cards": "",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "500",
      "operand": "HP"
    },
    "cost": 1500
  },
  "maxTonic": {
    "name": "Max Tonic",
    "description": "Recovers all of your health.",
    "type": "",
    "cards": "",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "9999999999",
      "operand": "HP"
    },
    "cost": 3000
  },
  "balm": {
    "name": "Balm",
    "description": "Removes 1 DOT against you.",
    "type": "",
    "cards": "",
    "specialEffect": "Heal One",
    "effect": {
      "action": "",
      "constant": "",
      "operand": "HP"
    },
    "cost": 1000
  },
  "refreshingBalm": {
    "name": "Refreshing Balm",
    "description": "Removes all DOTs against you.",
    "type": "",
    "cards": "",
    "specialEffect": "Heal All",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    },
    "cost": 3000
  },
  "repelaide": {
    "name": "Repelaide",
    "description": "Stops random encounters for some time.",
    "type": "",
    "cards": "",
    "specialEffect": "Repel 1000",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    },
    "cost": 500
  },
  "repelaideMax": {
    "name": "Repelaide Max",
    "description": "Stops random encounters for a longer time.",
    "type": "",
    "cards": "",
    "specialEffect": "Repel 5000",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    },
    "cost": 2000
  },
  "hydroBalm": {
    "name": "Hydro Balm",
    "description": "Protects against water attacks.",
    "type": "",
    "cards": "",
    "specialEffect": "Resist Water",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    },
    "cost": 1000
  },
  "icyBalm": {
    "name": "Icy Balm",
    "description": "Protects against fire attacks.",
    "type": "",
    "cards": "",
    "specialEffect": "Resist Fire",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    },
    "cost": 1000
  },
  "warmBalm": {
    "name": "Warm Balm",
    "description": "Protects against ice attacks.",
    "type": "",
    "cards": "",
    "specialEffect": "Resist Ice",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    },
    "cost": 1000
  },
  "whiteSigil": {
    "name": "White Sigil",
    "description": "Protects against light attacks.",
    "type": "",
    "cards": "",
    "specialEffect": "Resist Light",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    }
  },
  "blackSigil": {
    "name": "Black Sigil",
    "description": "Protects against darkness attacks.",
    "type": "",
    "cards": "",
    "specialEffect": "Resist Dark",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    },
    "cost": 1000
  },
  "steelSigil": {
    "name": "Steel Sigil",
    "description": "Protects against darkness attacks.",
    "type": "",
    "cards": "",
    "specialEffect": "Resist Machine",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    },
    "cost": 1000
  },
  "protectiveBalm": {
    "name": "Protective Balm",
    "description": "Protects against air attacks.",
    "type": "",
    "cards": "",
    "specialEffect": "Resist Air",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    },
    "cost": 1000
  },
  "brownSigil": {
    "name": "Brown Sigil",
    "description": "Protects against earth attacks.",
    "type": "",
    "cards": "",
    "specialEffect": "Resist Earth",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    },
    "cost": 1000
  },
  "silverSigil": {
    "name": "Silver Sigil",
    "description": "Protects against physical attacks.",
    "type": "",
    "cards": "",
    "specialEffect": "Resist Physical",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    },
    "cost": 1000
  },
  "bugBalm": {
    "name": "Bug Balm",
    "description": "Protects against poison attacks.",
    "type": "",
    "cards": "",
    "specialEffect": "Resist Poison",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    },
    "cost": 1000
  },
  "plantBalm": {
    "name": "Plant Balm",
    "description": "Protects me against plant attacks.",
    "type": "",
    "cards": "",
    "specialEffect": "Resist Plant",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    },
    "cost": 1000
  },
  "holySigil": {
    "name": "Holy Sigil",
    "description": "Protects against the undead.",
    "type": "",
    "cards": "",
    "specialEffect": "Resist Undead",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    },
    "cost": 1000
  },
  "rubberBalm": {
    "name": "Rubber Balm",
    "description": "Protects against electric attacks.",
    "type": "",
    "cards": "",
    "specialEffect": "Resist Electric",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    },
    "cost": 1000
  },
  "opalRing": {
    "name": "Opal Ring",
    "description": "A ring with a beautiful dark opal in the center.  Resists darkness.",
    "type": "acc",
    "cards": "opalHeal,opalDisaster",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    },
    "cost": 100
  },
  "exteriorKey": {
    "name": "Exterior Key",
    "description": "A key that looks like it might lead outside.",
    "type": "key",
    "cards": "",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    },
    "cost": 1
  },
  "manorKey": {
    "name": "Manor Key",
    "description": "A key that looks like it leads deeper into the manor.",
    "type": "key",
    "cards": "",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    },
    "cost": 1
  },
  "handAxe": {
    "name": "Hand Axe",
    "description": "A small axe that you can use to chop wood.",
    "type": "weapon",
    "cards": "throwAxe,swingAxe,powerAxe,chopShop",
    "effect": {
      "action": "+",
      "constant": "7",
      "operand": "Offense"
    },
    "cost": 60
  },
  "ancientArmor": {
    "name": "Ancient Armor",
    "description": "Really old and really brittle armor.",
    "type": "armor",
    "cards": "defend",
    "effect": {
      "action": "+",
      "constant": "4",
      "operand": "Defense"
    },
    "cost": 60
  },
  "strangeStick": {
    "name": "Strange Stick",
    "description": "A strange stick decorated with metal.  It has a strange smell. Maybe you can ask someone about it?",
    "type": "key",
    "cards": "",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    }
  },
  "knightsHonor": {
    "name": "Knight's Honor",
    "description": "A medal given to the best knights in the Guldeve kingdom.  Raises your defense by 10.",
    "type": "key",
    "cards": "",
    "effect": {
      "action": "+",
      "constant": "10",
      "operand": "Defense"
    }
  },
  "holyBadge": {
    "name": "Holy Badge",
    "description": "A badge with a unique simple design on it.",
    "type": "acc",
    "cards": "",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    }
  },
  "knightSword": {
    "name": "Knight Sword",
    "description": "Your trust and slightly rusty sword.",
    "type": "weapon",
    "cards": "slice,spinSlice,impale",
    "effect": {
      "action": "+",
      "constant": "5",
      "operand": "Offense"
    }
  },
  "musket": {
    "name": "Musket",
    "description": "It's an old fashioned gun that's been in use for 200 years.",
    "type": "weapon",
    "cards": "shoot,reload,bayonette",
    "effect": {
      "action": "+",
      "constant": "20",
      "operand": "Offense"
    }
  },
  "ironSword": {
    "name": "Iron Sword",
    "description": "A heavy sword made out of iron.",
    "type": "weapon",
    "cards": "slice,spinSlice,impale,rush",
    "effect": {
      "action": "+",
      "constant": "9",
      "operand": "Offense"
    }
  },
  "ironArmor": {
    "name": "Iron Armor",
    "description": "Heavy armor made out of iron.",
    "type": "armor",
    "cards": "defend",
    "effect": {
      "action": "+",
      "constant": "9",
      "operand": "Defense"
    }
  },
  "ironStaff": {
    "name": "Iron Staff",
    "description": "A very heavy staff made out of iron.",
    "type": "weapon",
    "cards": "strike,spinStrike,concussion,block",
    "effect": {
      "action": "+",
      "constant": "8",
      "operand": "Offense"
    }
  },
  "entStick": {
    "name": "Ent Stick",
    "description": "A special stick given to you by Elder War'ent.",
    "type": "weapon",
    "cards": "strike,spinStrike,concussion,wildernessSong",
    "effect": {
      "action": "+",
      "constant": "12",
      "operand": "Offense"
    }
  },
  "entiqueArmor": {
    "name": "Entique Armor",
    "description": "Armor made by fallen ents.",
    "type": "armor",
    "cards": "defend,absorb",
    "specialEffect": "",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    }
  },
  "entWhistle": {
    "name": "Ent Whistle",
    "description": "A whistle made out of ent seed.",
    "type": "acc",
    "cards": "entCall",
    "specialEffect": "Resist Plant",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    }
  },
  "locket": {
    "name": "Locket",
    "description": "If you die in battle, you'll gird your loins and end up with 1 HP.",
    "type": "acc",
    "cards": "",
    "specialEffect": "Auto Rez",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    }
  },
  "pendant": {
    "name": "Pendant",
    "description": "Protects against physical attacks.",
    "type": "acc",
    "cards": "spell",
    "specialEffect": "Resist Physical",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    }
  },
  "flamethrower": {
    "name": "Flamethrower",
    "description": "A high-tech gun that shoots flames out",
    "type": "weapon",
    "cards": "flamethrower,butt,swing",
    "specialEffect": "Resist Physical",
    "effect": {
      "action": "+",
      "constant": "10",
      "operand": "Offense"
    }
  },
  "entiqueSword": {
    "name": "Entique Sword",
    "description": "A sword created out of the Ent Stick.",
    "type": "weapon",
    "cards": "slice,spinSlice,impale,hiltProtect",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "15",
      "operand": "Offense"
    }
  },
  "entiqueAxe": {
    "name": "Entique Sword",
    "description": "A axe created out of the Ent Stick.",
    "type": "weapon",
    "cards": "swingAxe,powerAxe,chopShop,hiltProtect",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "18",
      "operand": "Offense"
    }
  },
  "largePipe": {
    "name": "Long Pipe",
    "description": "A long pipe, possibly made out of lead.",
    "type": "weapon",
    "cards": "strike,spinStrike,concussion,block,impale",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "10",
      "operand": "Defense"
    }
  },
  "chainmail": {
    "name": "Chainmail",
    "description": "A flexible and protective armor.",
    "type": "armor",
    "cards": "defend",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "14",
      "operand": "Defense"
    }
  },
  "blasphemousBook": {
    "name": "Blasphemous Book",
    "description": "A book that Joan spent most of her life fighting against.",
    "type": "acc",
    "cards": "read,curse",
    "specialEffect": "Resist Dark",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    }
  },
  "gauntlet": {
    "name": "Gauntlets",
    "description": "These gauntlets make you feel like the knight you are",
    "type": "acc",
    "cards": "gauntBlock",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "5",
      "operand": "Offense"
    }
  },
  "kneePad": {
    "name": "Knee Pad",
    "description": "Protects your knees from attacks.",
    "type": "acc",
    "cards": "kneeThrust",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "5",
      "operand": "Defense"
    }
  },
  "battleAxe": {
    "name": "Battle Axe",
    "description": "A very large axe, used by marauders in battle.",
    "type": "weapon",
    "cards": "swingAxe,powerAxe,chopShop,cleave",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "20",
      "operand": "Offense"
    }
  },
  "twinDaggers": {
    "name": "Twin Daggers",
    "description": "Two Daggers, One Knight",
    "type": "weapon",
    "cards": "slice,spinSlice,impale,block",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "15",
      "operand": "Offense"
    }
  },
  "veralandArmor": {
    "name": "Veraland Armor",
    "description": "Armor that the knights of the Veraland wore.",
    "type": "armor",
    "cards": "defend",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "15",
      "operand": "Offense"
    }
  },
  "goldStud": {
    "name": "Gold Stud",
    "description": "A fashionable gold stud for your ear.  Power of cards in your hand are increased by one, unless they are 0.",
    "type": "acc",
    "cards": "",
    "specialEffect": "Empower",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    }
  },
  "silverStud": {
    "name": "Silver Stud",
    "description": "A fashionable silver stud.  All cards against you have their power reduced by 1, unless they are at 1 already.",
    "type": "acc",
    "cards": "",
    "specialEffect": "Weaken",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    }
  },
  "fishboneNecklace": {
    "name": "Fishbone Necklace",
    "description": "A mystical necklace made out of fish bones.",
    "type": "acc",
    "cards": "",
    "specialEffect": "Resist Water",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    }
  },
  "mop": {
    "name": "Mop",
    "description": "Just an ordinary mop. ;)",
    "type": "weapon",
    "cards": "strike,spinStrike,block,washAway",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "1",
      "operand": "Offense"
    }
  },
  "volcanoArmor": {
    "name": "Volcano Armor",
    "description": "Armor supplemented with volcanic rock.",
    "type": "armor",
    "cards": "defend",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "18",
      "operand": "Defense"
    }
  },
  "harpoonGun": {
    "name": "Harpoon Gun",
    "description": "A gun that shoots out spears.",
    "type": "weapon",
    "cards": "shootMusket,reloadMusket,butt,throw",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "35",
      "operand": "Offense"
    }
  },
  "guldleveScepter": {
    "name": "Guldleve Scepter",
    "description": "A scepter that the former King Dino gave you.",
    "type": "weapon",
    "cards": "strike,spinStrike,block,laser,blast",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "16",
      "operand": "Offense"
    }
  },
  "volcanoKnife": {
    "name": "Volcano Knife",
    "description": "A knife made out of ignious rock.",
    "type": "weapon",
    "cards": "slice,spinSlice,volcanicMemory",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "18",
      "operand": "Offense"
    }
  },
  "ropeBelt": {
    "name": "Rope Belt",
    "description": "A belt made out of rope.",
    "type": "acc",
    "cards": "",
    "specialEffect": "Resist Air",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    }
  },
  "safetyPin": {
    "name": "Safety Pin",
    "description": "A pin that prevents DOTs.",
    "type": "acc",
    "cards": "",
    "specialEffect": "Prevent Dots",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    }
  },
  "travelerCharm": {
    "name": "Traveler Charm",
    "description": "Heals you as you walk.",
    "type": "acc",
    "cards": "",
    "specialEffect": "Walk Heal",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    }
  },
  "throwingBlade": {
    "name": "Throwing Blade",
    "description": "A blade that you throw to deal damage.",
    "type": "weapon",
    "cards": "",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "20",
      "operand": "Offense"
    }
  },
  "monarchSword": {
    "name": "Monarch's Sword",
    "description": "A replica given to the emperor of Monarchia.",
    "type": "weapon",
    "cards": "slice,spinSlice,impale,quadSlice",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "22",
      "operand": "Offense"
    }
  },
  "mace": {
    "name": "Mace",
    "description": "A spiked ball with a chain and a handle.",
    "type": "weapon",
    "cards": "attackMace,suffocate",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "20",
      "operand": "Offense"
    }
  },
  "monarchArmor": {
    "name": "Monarch Armor",
    "description": "High tech armor given to the knights of Monarchia.",
    "type": "armor",
    "cards": "defend,absorb",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "22",
      "operand": "Defense"
    }
  },
  "monarchCharm": {
    "name": "Monarch Charm",
    "description": "A charm people of Monarch keep with themselves for protection.",
    "type": "acc",
    "cards": "",
    "specialEffect": "Protect All",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    }
  },
  "goldTooth": {
    "name": "Gold Tooth",
    "description": "Protection against darkness and can cause enemies to feel uncomfortable.",
    "type": "acc",
    "cards": "smileShine",
    "specialEffect": "Resist Dark",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    }
  },
  "merchantCharm": {
    "name": "Merchant Charm",
    "description": "A charm that doubles the amount of rare and ultra rare cards in battle.",
    "type": "acc",
    "cards": "",
    "specialEffect": "Double Rare Cards",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    }
  },
  "yetiFist": {
    "name": "Yeti Fist",
    "description": "Gloves made out of yeti skin.",
    "type": "weapon",
    "cards": "punch12,powerPunch,grapple,choke",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "19",
      "operand": "Offense"
    }
  },
  "steelBoot": {
    "name": "Steel Boot",
    "description": "A heavy boot.",
    "type": "weapon",
    "cards": "roundhouseKick,stomp",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "20",
      "operand": "Defense"
    }
  },
  "megaAxe": {
    "name": "Mega Axe",
    "description": "A giant, futuristic axe.",
    "type": "weapon",
    "cards": "swingAxe,powerAxe,chopShop,cleave,powerCleave",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "25",
      "operand": "Offense"
    }
  },
  "ultimateArmor": {
    "name": "Ultimate Armor",
    "description": "Futuristic armor.",
    "type": "armor",
    "cards": "defend,absorb",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "26",
      "operand": "Defense"
    }
  },
  "megaSword": {
    "name": "Mega Sword",
    "description": "A futuristic sword for future living.",
    "type": "weapon",
    "cards": "slice,spinSlice,impale,quadSlice,powerSlice",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "25",
      "operand": "Offense"
    }
  },
  "giantsGun": {
    "name": "Giant's Gun",
    "description": "A huge gun.",
    "type": "weapon",
    "cards": "shoot,butt,swing",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "28",
      "operand": "Offense"
    }
  },
  "theGrimoire": {
    "name": "The Grimoire",
    "description": "The source of Nara's power.",
    "type": "weapon",
    "cards": "fire,ice,lightning,poison,air,earth",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "50",
      "operand": "Offense"
    }
  },
  "masterKey": {
    "name": "Master Key",
    "description": "Allows you to unlock doors when equipped.",
    "type": "acc",
    "cards": "",
    "specialEffect": "Master Key",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    }
  },
  "nailOfAtlantis": {
    "name": "Nail of Atlantis",
    "description": "A mystical nail that keeps you protected.",
    "type": "acc",
    "cards": "",
    "specialEffect": "Protect All + prevent Dots",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    }
  },
  "manorF1Key": {
    "name": "Stairway Key",
    "description": "A key to the stairway in LaMaur Manor.",
    "type": "key",
    "cards": "",
    "specialEffect": "",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    }
  },
  "iceWand": {
    "name": "Ice Wand",
    "description": "Ice Wand from the Ice Wizard",
    "type": "weapon",
    "cards": "waterJet,floater,freeze,freezeJet,Icicle,strike",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "12",
      "operand": "Offense"
    }
  },
  "natureTome": {
    "name": "Nature's Tome",
    "description": "A book with some useful spells about how to make plants do your bidding.",
    "type": "",
    "cards": "vineSqueeze,vineSlap",
    "specialEffect": "",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    }
  },
    "elderStaff": {
      "name": "Elder Staff",
      "description": "The staff used by the elder of Seventh Heaven.",
      "type": "weapon",
      "cards": "strike,spinStrike,concussion,impale,convince",
      "specialEffect": "",
      "effect": {
        "action": "+",
        "constant": "4",
        "operand": ""
      }
    },
    "dynamite": {
      "name": "Dynamite",
      "description": "Use to blow up rocks in the Deepcroft Mines",
      "type": "key",
      "cards": "",
      "specialEffect": "",
      "effect": {
        "action": "",
        "constant": "",
        "operand": ""
      }
    },
    "mysteriousKey": {
      "name": "Mysterious Key",
      "description": "A mysterious key found in the Mines.",
      "type": "key",
      "cards": "",
      "specialEffect": "",
      "effect": {
        "action": "",
        "constant": "",
        "operand": ""
      }
    },
    "pickaxe": {
      "name": "Pickaxe",
      "description": "A weapon left by some miners.",
      "type": "weapon",
      "cards": "strike,spinStrike,chopShop",
      "specialEffect": "",
      "effect": {
        "action": "+",
        "constant": "8",
        "operand": "Offense"
      }
    }
  }


`;