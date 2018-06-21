
export const AFFINITY_JSON = `
	{
  "Fire": {
    "strong": [ "Fire", "Ice" ],
    "weak": [ "Water", "Air", "Earth" ]
  },
  "Water": {
    "strong": [ "Water", "Ice", "Poison" ],
    "weak": [ "Electric" ]
  },
  "Ice": {
    "strong": [ "Ice" ],
    "weak": [ "Earth", "Fire" ]
  },
  "Earth": {
    "strong": [ "Earth", "Air", "Fire", "Electric" ],
    "weak": [ "Water" ]
  },
  "Air": {
    "strong": [ "Air", "Earth", "Poison" ],
    "weak": [ "Electric" ]
  },
  "Light": {
    "strong": [ "Light" ],
    "weak": [ "Dark" ]
  },
  "Dark": {
    "strong": [ "Dark" ],
    "weak": [ "Light" ]
  },
  "Machine": {
    "strong": [ "Machine", "Earth", "Poison", "Light", "Dark" ],
    "weak": [ "Electric" ]
  },
  "Physical": {
    "strong": [],
    "weak": []
  },
  "Human": {
    "strong": [],
    "weak": [ "Fire", "Ice", "Dark" ]
  },
  "Plant": {
    "strong": [ "Poison", "Earth", "Water" ],
    "weak":  ["Fire", "Electric", "Ice"]
  },
  "Poison": {
    "strong": [ "Poison", "Earth", "Fire" ],
    "weak": [ "Water", "Ice", "Air" ]
  },
  "Electric": {
    "strong": [ "Electric", "Air", "Machine", "Water", "Ice" ],
    "weak": [ "Earth" ]
  },
  "Undead": {
    "strong": [ "Dark", "Ice" ],
    "weak":  ["Fire", "Light"]
  }
} 
`;