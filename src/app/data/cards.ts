export const CARDS_JSON = `
	{ 
  "dCard": {
    "name": "Debug Card 12",
    "description": "...W...where's Debug Card 1 - 11 !?",
    "power": 10,
    "color": "White",
    "specialEffect": "",
    "effect": {},
    "rarity": "Common",
    "affinity": "Electric"
  },
  "dCard1": {
    "name": "Debug Card 13",
    "description": "Would do something cool if it wasn't dummied out.",
    "power": 0,
    "color": "Red",
    "specialEffect": "+1 Turn",
    "effect": {},
    "rarity": "Ultra Rare",
    "affinity": "Air"
  },
  "dCard2": {
    "name": "Debug Card 14",
    "description": "It's blue, so it must be unlocked by another card.",
    "power": 5,
    "color": "Blue",
    "specialEffect": "Resist Dark",
    "effect": {},
    "rarity": "Common",
    "affinity": "Light"
  },
  "strike": {
    "name": "Strike",
    "description": "A common attack.",
    "power": 3,
    "color": "White",
    "rarity": "Common",
    "specialEffect": "",
    "affinity": "Physical",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {}
  },
  "spinStrike": {
    "name": "Spin Strike",
    "description": "Takes your weapon and spins around, doing a large amount of damage.",
    "power": 5,
    "color": "White",
    "rarity": "Uncommon",
    "specialEffect": "",
    "affinity": "Physical",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {}
  },
  "concussion": {
    "name": "Concussion",
    "description": "Aim for the head for some damage per turn.",
    "power": 3,
    "color": "White",
    "rarity": "Rare",
    "specialEffect": "",
    "affinity": "Physical",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "15"
    }
  },
  "defend": {
    "name": "Defend",
    "description": "Prevent all damage for one turn.",
    "power": 0,
    "color": "White",
    "rarity": "Uncommon",
    "specialEffect": "Gaurd",
    "affinity": "Physical",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    },
    "dot": {}
  },
  "heal": {
    "name": "Heal",
    "description": "Regenerate your wounds and heal some HP.",
    "power": 5,
    "color": "White",
    "rarity": "Common",
    "affinity": "Light",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {}
  },
  "opalHeal": {
    "name": "Love of Opal",
    "description": "Regenerate your wounds and heal some HP.",
    "power": 3,
    "color": "White",
    "rarity": "Common",
    "affinity": "Dark",
    "specialEffect": "",
    "effect": {
      "action": "+",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {}
  },
  "opalDisaster": {
    "name": "Dark Beam",
    "description": "Shoot laser from your opal ring.",
    "power": 9,
    "color": "White",
    "rarity": "Ultra Rare",
    "affinity": "Dark",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {}
  },
  "useItem": {
    "name": "Use Item",
    "description": "Use an item.",
    "power": 0,
    "color": "White",
    "rarity": "Uncommon",
    "specialEffect": "Use Item",
    "affinity": "Physical",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    },
    "dot": {}
  },
  "runAway": {
    "name": "Run Away",
    "description": "Run away from that scawy wittle slime.",
    "power": 0,
    "color": "White",
    "rarity": "Rare",
    "specialEffect": "Escape",
    "affinity": "Physical",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    },
    "dot": {}
  },
  "sonicAttack": {
    "name": "Sonic Attack",
    "description": "Lowers your defense by 5 points.",
    "power": 0,
    "color": "White",
    "rarity": "Rare",
    "specialEffect": "",
    "affinity": "Air",
    "effect": {
      "action": "-",
      "constant": "5",
      "operand": "Defense"
    },
    "dot": {}
  },
  "flamethrower": {
    "name": "Flamethrower",
    "description": "Shoots out a stream of fire.",
    "power": 3,
    "color": "White",
    "rarity": "Rare",
    "specialEffect": "",
    "affinity": "Fire",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "4"
    }
  },
  "chopperBlade": {
    "name": "Chopper Blade",
    "description": "An attack with a chopper blade",
    "power": 5,
    "color": "White",
    "rarity": "Ultra Rare",
    "affinity": "Machine",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {}
  },
  "noxiousGas": {
    "name": "Noxious Gas",
    "description": "An attack that will make the enemy sick!",
    "power": 1,
    "color": "White",
    "rarity": "Common",
    "specialEffect": "",
    "affinity": "Poison",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "10"
    },
    "unlocks": ""
  },
  "slap": {
    "name": "Slap",
    "description": "Slap the enemy for a weak attack.",
    "power": 2,
    "color": "White",
    "rarity": "Common",
    "specialEffect": "",
    "affinity": "Physical",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": ""
  },
  "arrow": {
    "name": "Shoot Arrow",
    "description": "Shoot an arrow at an enemy.",
    "power": 3,
    "color": "White",
    "rarity": "Common",
    "affinity": "Physical",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": ""
  },
  "knife": {
    "name": "Knife",
    "description": "Use your knife in close combat.",
    "power": 5,
    "color": "White",
    "rarity": "Rare",
    "specialEffect": "",
    "affinity": "Physical",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": ""
  },
  "bite": {
    "name": "Bite",
    "description": "A small little primal bite.",
    "power": 2,
    "color": "White",
    "rarity": "Common",
    "affinity": "Physical",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": ""
  },
  "poisonBite": {
    "name": "Poison Bite",
    "description": "A primal bite that leads poisoning the enemy.",
    "power": 3,
    "color": "White",
    "rarity": "Uncommon",
    "affinity": "Poison",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "2"
    },
    "unlocks": ""
  },
  "buzzAway": {
    "name": "Buzz Away",
    "description": "Evade next attack.",
    "power": 0,
    "color": "White",
    "rarity": "Rare",
    "specialEffect": "Gaurd",
    "affinity": "Physical",
    "effect": {
      "action": "-",
      "constant": "0",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": ""
  },
  "soulEat": {
    "name": "Soul Eat",
    "description": "Eat the enemy's soul.",
    "power": 8,
    "color": "White",
    "rarity": "Ultra Rare",
    "affinity": "Dark",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": ""
  },
  "coldness": {
    "name": "Coldness",
    "description": "Cause the temperature to drop tremendously.",
    "power": 2,
    "color": "Red",
    "rarity": "Uncommon",
    "affinity": "Ice",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "6"
    },
    "unlocks": ""
  },
  "doughball": {
    "name": "Doughball",
    "description": "Form into doughball, attack enemy",
    "power": 6,
    "color": "White",
    "rarity": "Uncommon",
    "affinity": "Physical",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": ""
  },
  "aim": {
    "name": "Aim",
    "description": "Unlocks headshot attack.",
    "power": 0,
    "color": "White",
    "rarity": "Rare",
    "affinity": "Physical",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": "headshot"
  },
  "headshot": {
    "name": "Headshot",
    "description": "Attack to the head",
    "power": 9,
    "color": "Blue",
    "rarity": "Ultra Rare",
    "affinity": "Physical",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": ""
  },
  "dbg1": {
    "name": "Headshot",
    "description": "Attack to the head",
    "power": 9,
    "color": "White",
    "affinity": "Physical",
    "rarity": "DEBUGONLY",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": ""
  },
  "spell": {
    "name": "Spell",
    "description": "Cast a spell to do some damage.",
    "power": 3,
    "color": "White",
    "rarity": "Common",
    "specialEffect": "",
    "affinity": "Light",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "1"
    },
    "unlocks": ""
  },
  "anxietyAttack": {
    "name": "Anxiety Attack",
    "description": "Make your opponent worry about things beyond their control.",
    "power": 4,
    "color": "White",
    "rarity": "Rare",
    "specialEffect": "+1 Turn",
    "affinity": "Dark",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "10"
    },
    "unlocks": ""
  },
  "scythe": {
    "name": "Scythe",
    "description": "Use the scythe to do some damage.",
    "power": 4,
    "color": "White",
    "rarity": "Common",
    "affinity": "Dark",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": ""
  },
  "reap": {
    "name": "Reap",
    "description": "The reaper is here to take your soul.",
    "power": 8,
    "color": "White",
    "rarity": "Rare",
    "affinity": "Dark",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": ""
  },
  "psystorm": {
    "name": "Psystorm",
    "description": "A psychic attack.",
    "power": 6,
    "color": "White",
    "rarity": "Rare",
    "affinity": "Dark",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": ""
  },
  "shootGun": {
    "name": "Shoot Gun",
    "description": "Shoots a gun at you, which does a lot of damage.",
    "power": 6,
    "color": "White",
    "rarity": "Rare",
    "affinity": "Machine",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": ""
  },
  "pistolWhip": {
    "name": "Pistol Whip",
    "description": "A strike with a gun.",
    "power": 4,
    "color": "White",
    "rarity": "Common",
    "affinity": "Machine",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": ""
  },
  "bootToTheFace": {
    "name": "Boot to the Face",
    "description": "Use the mighty boot to the face!",
    "power": 3,
    "color": "White",
    "rarity": "Common",
    "specialEffect": "",
    "affinity": "Physical",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": ""
  },
  "bleeder": {
    "name": "Aim to Bleed",
    "description": "An attack that causes a lot of bleeding.",
    "power": 3,
    "color": "White",
    "rarity": "Uncommon",
    "affinity": "Machine",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "6"
    },
    "unlocks": ""
  },
  "throwAxe": {
    "name": "Throw Axe",
    "description": "Throw the axe in an arc in front of yuou",
    "power": 5,
    "color": "White",
    "rarity": "Uncommon",
    "affinity": "Physical",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": ""
  },
  "swingAxe": {
    "name": "Swing Axe",
    "description": "Swing the axe!  Chop the monster!",
    "power": 3,
    "color": "White",
    "affinity": "Physical",
    "rarity": "Common",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": ""
  },
  "powerAxe": {
    "name": "Power Swing",
    "description": "Put a lot of energy in your swing!",
    "power": 9,
    "color": "White",
    "rarity": "Ultra Rare",
    "affinity": "Physical",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": ""
  },
  "chopShop": {
    "name": "Chop Chop Shop",
    "description": "Death by 100 axe cuts!",
    "power": 7,
    "color": "White",
    "rarity": "Rare",
    "affinity": "Physical",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": ""
  },
  "squawk": {
    "name": "Squawk",
    "description": "A loud noise that hurts the enemy's ears.",
    "power": 2,
    "color": "White",
    "rarity": "Common",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": ""
  },
  "flutter": {
    "name": "Flutter",
    "description": "Flutter around the enemy, disrupting their senses.",
    "power": 1,
    "color": "White",
    "rarity": "Common",
    "specialEffect": "+1 Turn",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": ""
  },
  "slice": {
    "name": "Slice",
    "description": "Slice the enemy with your sharp instrument.",
    "power": 3,
    "color": "White",
    "rarity": "Common",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": ""
  },
  "spinSlice": {
    "name": "Spin Slice",
    "description": "Spin around slicing everything in sight.",
    "power": 5,
    "color": "White",
    "rarity": "Uncommon",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": "",
    "affinity": "Physical"
  },
  "impale": {
    "name": "Impale",
    "description": "Impale your sharp instrument causing a lot of damage.",
    "power": 8,
    "color": "White",
    "rarity": "Ultra Rare",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": "",
    "affinity": "Physical"
  },
  "punch12": {
    "name": "1-2 Punch",
    "description": "One And a Two and a Pain!",
    "power": 3,
    "color": "White",
    "rarity": "Common",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "affinity": "Physical",
    "unlocks": ""
  },
  "sting": {
    "name": "Sting",
    "description": "A really sharp pain.",
    "power": 5,
    "color": "White",
    "rarity": "Uncommon",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "affinity": "Poison",
    "unlocks": ""
  },
  "squeeze": {
    "name": "Squeeze",
    "description": "Squeeze your enemies with your tentacles.",
    "power": 0,
    "color": "White",
    "rarity": "Common",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "4"
    },
    "affinity": "Physical",
    "unlocks": ""
  },
  "inkBlot": {
    "name": "Ink Jet",
    "description": "Shoot a stream of ink at the enemy.",
    "power": 2,
    "color": "White",
    "rarity": "Uncommon",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "4"
    },
    "affinity": "Water",
    "unlocks": ""
  },
  "handSlap8": {
    "name": "8 Hand Slap",
    "description": "Slap with 8 hands!",
    "power": 6,
    "color": "White",
    "rarity": "Rare",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "affinity": "Physical",
    "unlocks": ""
  },
  "sweetSmell": {
    "name": "Sweet Smell",
    "description": "A sickingly sweet smell.",
    "power": 3,
    "color": "White",
    "rarity": "Ultra Rare",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "9"
    },
    "affinity": "Poison",
    "unlocks": ""
  },
  "bigBite": {
    "name": "Big Bite",
    "description": "Take a bite out of crime!",
    "power": 6,
    "color": "White",
    "rarity": "Rare",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "affinity": "Physical",
    "unlocks": ""
  },
  "armRip": {
    "name": "Arm Rip",
    "description": "A very powerful physical attack.",
    "power": 9,
    "color": "White",
    "rarity": "Ultra Rare",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "1"
    },
    "affinity": "Physical",
    "unlocks": ""
  },
  "roundhouseKick": {
    "name": "Roundhouse Kick",
    "description": "A fancy kick to the shins",
    "power": 5,
    "color": "White",
    "rarity": "Rare",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "affinity": "Physical",
    "unlocks": ""
  },
  "howl": {
    "name": "Howl",
    "description": "A signal for others to attack!",
    "power": 0,
    "color": "White",
    "rarity": "Uncommon",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "5"
    },
    "affinity": "Physical",
    "unlocks": ""
  },
  "sucker": {
    "name": "Sucker",
    "description": "Attaches a sucker to the enemy!",
    "power": 1,
    "color": "White",
    "rarity": "Common",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "1"
    },
    "affinity": "Poison",
    "unlocks": ""
  },
  "vomitBile": {
    "name": "Vomit Bile",
    "description": "Vomit bile on the enemy.",
    "power": 4,
    "color": "White",
    "rarity": "Uncommon",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "5"
    },
    "affinity": "Poison",
    "unlocks": ""
  },
  "laser": {
    "name": "Laser",
    "description": "Shoot an laser at the enemy.",
    "power": 5,
    "color": "White",
    "rarity": "Uncommon",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "affinity": "Machine",
    "unlocks": ""
  },
  "scream": {
    "name": "Scream",
    "description": "Scream in terror at the enemy, shattering their eardrums.",
    "power": 3,
    "color": "White",
    "rarity": "Uncommon",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "10"
    },
    "affinity": "Physical",
    "unlocks": ""
  },
  "armThrow": {
    "name": "Arm Throw",
    "description": "Take your arm and throw it at the enemy.",
    "power": 2,
    "color": "White",
    "rarity": "Common",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "affinity": "Undead",
    "unlocks": ""
  },
  "reshuffle": {
    "name": "Reshuffle",
    "description": "Supposed to reshuffle enemy's cards.",
    "power": 0,
    "color": "White",
    "rarity": "Common",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "affinity": "Undead",
    "unlocks": ""
  },
  "slowDrain": {
    "name": "Slow Burn",
    "description": "Slowly burns you.",
    "power": 0,
    "color": "White",
    "rarity": "Common",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "1"
    },
    "affinity": "Dark",
    "unlocks": ""
  },
  "powerPunch": {
    "name": "Power Punch",
    "description": "A powerful punch.",
    "power": 6,
    "color": "White",
    "rarity": "Rare",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "affinity": "Physical",
    "unlocks": ""
  },
  "quadSlice": {
    "name": "Quadslice",
    "description": "Slice 4x",
    "power": 6,
    "color": "White",
    "rarity": "Rare",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "affinity": "Physical",
    "unlocks": ""
  },
  "lance": {
    "name": "Lance",
    "description": "Attack with a lance",
    "power": 2,
    "color": "White",
    "rarity": "Common",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "affinity": "Physical",
    "unlocks": ""
  },
  "aerialAssault": {
    "name": "Aerial Assault",
    "description": "Use the lance and attack from above.",
    "power": 5,
    "color": "White",
    "rarity": "Uncommon",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "affinity": "Air",
    "unlocks": ""
  },
  "barrelRoll": {
    "name": "Barrel Roll",
    "description": "Prevents damage this turn.",
    "power": 0,
    "color": "White",
    "rarity": "Rare",
    "specialEffect": "Gaurd",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "affinity": "Air",
    "unlocks": ""
  },
  "lowerDefense": {
    "name": "Lower Defense",
    "description": "Lowers defense.",
    "power": 0,
    "color": "White",
    "rarity": "Uncommon",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "3",
      "operand": "Defense:self"
    },
    "dot": {},
    "affinity": "Machine",
    "unlocks": "ultraLaser"
  },
  "ultraLaser": {
    "name": "Ultra Laser",
    "description": "Has a chance of decimating the enemy.",
    "power": 10,
    "color": "Blue",
    "rarity": "Uncommon",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "150"
    },
    "affinity": "Machine",
    "unlocks": ""
  },
  "timber": {
    "name": "Timer",
    "description": "Falls on the enemy!",
    "power": 6,
    "color": "White",
    "rarity": "Rare",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": "",
    "affinity": "Plant"
  },
  "leafShake": {
    "name": "Leaf Shake",
    "description": "Makes a 100 leaves fall on you.",
    "power": 1,
    "color": "White",
    "rarity": "Rare",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "10"
    },
    "affinity": "Plant",
    "unlocks": ""
  },
  "leafStorm": {
    "name": "Leaf Storm",
    "description": "Makes 1000 leaves fall on you.",
    "power": 3,
    "color": "White",
    "rarity": "Ultra Rare",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "25"
    },
    "affinity": "Plant",
    "unlocks": ""
  },
  "pincers": {
    "name": "Pincers",
    "description": "Attack with a pincers",
    "power": 2,
    "color": "White",
    "rarity": "Common",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "affinity": "Physical",
    "unlocks": ""
  },
  "pincers2": {
    "name": "Two Pincers",
    "description": "Attack with Both Pincers",
    "power": 5,
    "color": "White",
    "rarity": "Uncommon",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "affinity": "Physical",
    "unlocks": ""
  },
  "waterJet": {
    "name": "Water Jet",
    "description": "A shooting stream of water",
    "power": 3,
    "color": "White",
    "rarity": "Common",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "affinity": "Water",
    "unlocks": ""
  },
  "floater": {
    "name": "Floater",
    "description": "Causes the enemy to float and drop on the ground",
    "power": 6,
    "color": "White",
    "rarity": "Uncommon",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "affinity": "Air",
    "unlocks": ""
  },
  "freeze": {
    "name": "Freeze",
    "description": "Freezes the enemy and makes them cold",
    "power": 3,
    "color": "White",
    "rarity": "Common",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "5"
    },
    "affinity": "Ice",
    "unlocks": ""
  },
  "freezeJet": {
    "name": "Freeze Jet",
    "description": "Attack an enemy with a jet of freezing air",
    "power": 5,
    "color": "White",
    "rarity": "Rare",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "5"
    },
    "affinity": "Ice",
    "unlocks": ""
  },
  "icicle": {
    "name": "Icicle",
    "description": "Attack with a giant, sharp icicle.",
    "power": 7,
    "color": "White",
    "rarity": "Ultra Rare",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "affinity": "Ice",
    "unlocks": ""
  },
  "stare": {
    "name": "Stare",
    "description": "Stare the enemy down..",
    "power": 0,
    "color": "White",
    "rarity": "Common",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "affinity": "Physical",
    "unlocks": ""
  },
  "shootMusket": {
    "name": "Shoot Gun",
    "description": "Shoot your gun!",
    "power": 8,
    "color": "Blue",
    "rarity": "Rare",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": "",
    "affinity": "Machine"
  },
  "reloadMusket": {
    "name": "Reload",
    "description": "Reload your gun.",
    "power": 0,
    "color": "White",
    "rarity": "Uncommon",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": "shootMusket",
    "affinity": "Machine"
  },
  "bayonette": {
    "name": "Bayonette",
    "description": "Stab the enemy with the bayonette of your musket.",
    "power": 4,
    "color": "White",
    "rarity": "Rare",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": "",
    "affinity": "Physical"
  },
  "rush": {
    "name": "Rush",
    "description": "Rush the enemy with a thousand strikes.",
    "power": 8,
    "color": "White",
    "rarity": "Ultra Rare",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": "",
    "affinity": "Physical"
  },
  "block": {
    "name": "Block",
    "description": "Block the next attack with your staff.",
    "power": 0,
    "color": "White",
    "rarity": "Uncommon",
    "specialEffect": "Gaurd",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": "",
    "affinity": "Physical"
  },
  "wildernessSong": {
    "name": "Wilderness Song",
    "description": "A song that causes a lot of pain for the hearer.",
    "power": 1,
    "color": "White",
    "rarity": "Rare",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "25"
    },
    "unlocks": "",
    "affinity": "Plant"
  },
  "absorb": {
    "name": "Absorb",
    "description": "Take damage and absorb it instead",
    "power": 0,
    "color": "White",
    "rarity": "Rare",
    "specialEffect": "Absorb",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    },
    "dot": {},
    "unlocks": "",
    "affinity": "Physical"
  },
  "entCall": {
    "name": "Call Ent",
    "description": "Attempts to call an ent to attack for you.",
    "power": 10,
    "color": "White",
    "rarity": "Ultra Rare",
    "specialEffect": "Absorb",
    "effect": {
      "action": "",
      "constant": "",
      "operand": ""
    },
    "dot": {},
    "unlocks": "",
    "affinity": "Plant"
  },
  "butt": {
    "name": "Butt",
    "description": "Take the butt of the gun and hit the enemy",
    "power": 4,
    "color": "White",
    "rarity": "Uncommon",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": "",
    "affinity": "Machine"
  },
  "swing": {
    "name": "Swing Gun",
    "description": "Swing the gun and hit the enemy with it.",
    "power": 6,
    "color": "White",
    "rarity": "Rare",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": "",
    "affinity": "Machine"
  },
  "hiltProtect": {
    "name": "Deflect With Hilt",
    "description": "Absorbs damage using the magic hilt.",
    "power": 0,
    "color": "White",
    "rarity": "Rare",
    "specialEffect": "Absorb",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": "",
    "affinity": "Physical"
  },
  "read": {
    "name": "Read Blasphemous Book",
    "description": "Read a passage from the blasphemous book.",
    "power": 0,
    "color": "Red",
    "rarity": "Common",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": "curse",
    "affinity": "Dark"
  },
  "curse": {
    "name": "Curse",
    "description": "Curse the enemy.",
    "power": 2,
    "color": "Blue",
    "rarity": "Rare",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "50"
    },
    "unlocks": "",
    "affinity": "Dark"
  },
  "gauntBlock": {
    "name": "Gaunlet Block",
    "description": "Block with your gauntlet",
    "power": 0,
    "color": "White",
    "rarity": "Uncommon",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": "",
    "affinity": "Physical"
  },
  "kneeThrust": {
    "name": "Knee Thrust",
    "description": "Attack with your knees",
    "power": 2,
    "color": "White",
    "rarity": "Common",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": "",
    "affinity": "Physical"
  },
  "cleave": {
    "name": "Cleave",
    "description": "A massive damage axe attack that causes massive bleeding.",
    "power": 8,
    "color": "White",
    "rarity": "Ultra Rare",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "1"
    },
    "unlocks": "",
    "affinity": "Physical"
  },
  "washAway": {
    "name": "Wash Away",
    "description": "A powerful water attack caused by the mystical Mop.",
    "power": 7,
    "color": "White",
    "rarity": "Rare",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "10"
    },
    "unlocks": "",
    "affinity": "Water"
  },
  "throwHarpoon": {
    "name": "Throw Harpoon",
    "description": "Throws a harpoon rather than using the gun.",
    "power": 5,
    "color": "White",
    "rarity": "Uncommon",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": "",
    "affinity": "Machine"
  },
  "blast": {
    "name": "Blast",
    "description": "A non elemental magic attack.",
    "power": 5,
    "color": "White",
    "rarity": "Uncommon",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": "",
    "affinity": "Light"
  },
  "volcanicMemory": {
    "name": "Volcanic Memory",
    "description": "A fire based physical strike.",
    "power": 6,
    "color": "White",
    "rarity": "Rare",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "12"
    },
    "unlocks": "",
    "affinity": "Fire"
  },
  "throwBlade": {
    "name": "Throw Blade",
    "description": "Throw the knife blade for damage.",
    "power": 5,
    "color": "White",
    "rarity": "Common",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": "",
    "affinity": "Machine"
  },
  "attackMace": {
    "name": "Attack with Mace",
    "description": "A mace's basic attack.",
    "power": 4,
    "color": "White",
    "rarity": "Common",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": "",
    "affinity": "Physical"
  },
  "suffocate": {
    "name": "Suffocate with Chain",
    "description": "Suffocate the enemy with the chain.",
    "power": 8,
    "color": "White",
    "rarity": "Rare",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": "",
    "affinity": "Physical"
  },
  "smileShine": {
    "name": "Smile",
    "description": "Give a creepy smile!  Makes enemy feel uncomfortable.",
    "power": 0,
    "color": "White",
    "rarity": "Uncommon",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "12"
    },
    "unlocks": "",
    "affinity": "Dark"
  },
  "grapple": {
    "name": "Grapple",
    "description": "Grapple and throw the enemy.",
    "power": 7,
    "color": "White",
    "rarity": "Rare",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": "",
    "affinity": "Physical"
  },
  "choke": {
    "name": "Choke",
    "description": "Choke the enemy with your bare hands.  Causes a dot.",
    "power": 8,
    "color": "White",
    "rarity": "Ultra Rare",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "5"
    },
    "unlocks": "",
    "affinity": "Physical"
  },
  "stomp": {
    "name": "Stomp",
    "description": "Stomp on the enemy's head.  Causes a DOT.",
    "power": 9,
    "color": "White",
    "rarity": "Ultra Rare",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "8"
    },
    "unlocks": "",
    "affinity": "Physical"
  },
  "powerCleave": {
    "name": "Power Cleave",
    "description": "Does massive hemorraging",
    "power": 10,
    "color": "White",
    "rarity": "Ultra Rare",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "18"
    },
    "unlocks": "",
    "affinity": "Physical"
  },
  "powerSlice": {
    "name": "Power Slice",
    "description": "A powerful slice attack that causes hemorraging.",
    "power": 7,
    "color": "White",
    "rarity": "Rare",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "28"
    },
    "unlocks": "",
    "affinity": "Physical"
  },
  "fire": {
    "name": "Fire",
    "description": "A basic fire attack.",
    "power": 2,
    "color": "White",
    "rarity": "Common",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": "",
    "affinity": "Fire",
    "ice": {
      "name": "Ice",
      "description": "A basic ice attack.",
      "power": 2,
      "color": "White",
      "rarity": "Common",
      "specialEffect": "",
      "effect": {
        "action": "-",
        "constant": "X",
        "operand": "HP"
      },
      "dot": {},
      "unlocks": "",
      "affinity": "Ice"
    }
  },
  "lightning": {
    "name": "Lightning",
    "description": "A basic lightning attack.",
    "power": 2,
    "color": "White",
    "rarity": "Common",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": "",
    "affinity": "Electric"
  },
  "poison": {
    "name": "Poison",
    "description": "A basic poison attack.",
    "power": 2,
    "color": "White",
    "rarity": "Common",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "5"
    },
    "unlocks": "",
    "affinity": "Poison"
  },
  "earth": {
    "name": "Earth",
    "description": "A basic earth attack.",
    "power": 2,
    "color": "White",
    "rarity": "Common",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": "",
    "affinity": "Earth"
  },
  "vineSlap": {
    "name": "Vine Slap",
    "description": "Causes a vine to slap the enemy across the face",
    "power": 3,
    "color": "White",
    "rarity": "Uncommon",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": "",
    "affinity": "Plant"
  },
  "vineSqueeze": {
    "name": "Vine Squeeze",
    "description": "Causes a vine to squeeze the enemy.",
    "power": 1,
    "color": "White",
    "rarity": "Uncommon",
    "specialEffect": "",
    "effect": {
      "action": "-",
      "constant": "X",
      "operand": "HP"
    },
    "dot": {
      "ord": "enabled",
      "constant": "4"
    },
    "unlocks": "",
    "affinity": "Plant"
  },
  "convince": {
    "name": "Convince",
    "description": "Convince enemy to run away.",
    "power": 0,
    "color": "White",
    "rarity": "Common",
    "specialEffect": "Fear",
    "effect": {
      "action": "-",
      "constant": "0",
      "operand": "HP"
    },
    "dot": {},
    "unlocks": "",
    "affinity": "Dark"
  }

}
`;