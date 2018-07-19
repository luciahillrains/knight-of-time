export const CHARACTERS_JSON = `
	[
		{
			"name": "Joan",
			"description": "Joan of Arc is considered a heroine of France due to her role in the Hundred Years' War.",
			"stats": {
				"hp": 120,
				"attack": 5,
				"defense": 3,
				"hitRate": 1,
				"accuracy": 90,
				"intelligence": 2,
				"piety": 5
			},
			"perks": [
				{
					"name": "Voice of God",
					"description": "You can hear the voice of God.  Your piety is higher than most men.",
					"key": "INCREASE_PIETY",
					"effect": "NONE"
				},
				{
					"name": "Supreme Bravery",
					"description": "Add Bravery card - if you are attacked by an attack that puts you below or at 0, you'll have 10 HP.",
					"key": "BRAVERY",
					"effect": "NONE"
				}
			]
		},
		{
			"name": "Susan",
			"description": "Susan B Anthony was an American social reformer and women's rights activist.",
			"stats": {
				"hp": 100,
				"attack": 3,
				"defense": 3,
				"hitRate": 1,
				"accuracy": 85,
				"intelligence": 5,
				"piety": 3
			}, 
			"perks": [
				{
					"name": "Temperance",
					"description": "Staying away from drugs and alcohol has made your mind more alert.",
					"key": "INCREASE_INT",
					"effect": "NONE"
				},
				{
					"name": "Rogue",
					"description": "Add with Protest card - raises everything by 10 for one turn.",
					"key": "ACTIVISM",
					"effect": "NONE"
				}
			]

		},
		{
			"name": "Napolean",
			"description": "Napolean Bonaparte was a French statesman and military leader who led several successful campaigns during the French Revolutionary Wars.",
			"stats": {
				"hp": 100,
				"attack": 4,
				"defense": 4,
				"hitRate": 1,
				"accuracy": 90,
				"intelligence": 4,
				"piety": 4
			},
			"perks": [
				{
					"name": "Average Height",
					"description": "Napolean was average height and build, so all of his stats are average.",
					"key": "AVERAGE",
					"effect": "NONE"
				},
				{
					"name": "Never Fight A War In Russia in the Winter",
					"description": "Napolean learned his lesson the first time around.  Has resistance to cold.",
					"key": "RESIST_ICE",
					"effect": "RESIST_ICE"
				}
			]
		},
		{
			"name": "George",
			"description": "George Washington was the first president of the United States and an esteemed military leader.",
			"stats": {
				"hp": 130,
				"attack": 4,
				"defense": 5,
				"hitRate": 1,
				"accuracy": 95,
				"intelligence": 3,
				"piety": 3 
			},
			"perks": [
				{
					"name": "Neutrality Policy",
					"description": "You have a higher chance of running from battles.",
					"key": "HIGHER_RUN_AWAY",
					"effect": "NONE"
				},
				{
					"name": "Revolution!",
					"description": "Adds the Revolution card - swap Dots with opponent.",
					"key": "REVOLUTION",
					"effect": "NONE"
				}

			]
		},
		{
			"name": "Frank",
			"description": "Franklin Delano Roosevelt was the president of the United States during World War 2 and was in office for an impressive 16 years.",
			"stats": {
				"hp": 90,
				"attack": 1,
				"defense": 2,
				"hitRate": 1,
				"accuracy": 100,
				"intelligence": 6,
				"piety": 4
			},
			"perks": [
				{
					"name": "Polio",
					"description": "You are physically weak, but your mind is sharp.",
					"key": "HIGH_MIND",
					"effect": "NONE"
				},
				{
					"name": "Smoker",
					"description": "You're a smoker, leaving a trail of smoke behind wherever you goes, which decreases enemy accuracy.",
					"key": "SMOKER",
					"effect": "NONE"
				}
			]
		}
	]
`;