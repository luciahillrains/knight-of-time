import {Card, CardColor, Affliction, Rarity} from '../objects/card';
import {SpecialEffectsTransformer} from './special-effects-transformer';
import {ElementTransformer} from './element-transformer';
import {EffectTransformer} from './effect-transformer';

export class CardTransformer {
	cardColorMap:Map<string, CardColor>;
	rarityMap:Map<string, Rarity>;

	constructor() {
		this.cardColorMap = new Map();
		this.rarityMap = new Map();
		this.cardColorMap.set("Red", CardColor.RED);
		this.cardColorMap.set("Blue", CardColor.BLUE);
		this.cardColorMap.set("White", CardColor.WHITE);

		this.rarityMap.set("DEBUGONLY", Rarity.DEV_COMMON);
		this.rarityMap.set("DEV_COMMON", Rarity.DEV_COMMON);
		this.rarityMap.set("Common", Rarity.COMMON);
		this.rarityMap.set("Uncommon", Rarity.UNCOMMON);
		this.rarityMap.set("Rare", Rarity.RARE);
		this.rarityMap.set("Ultra Rare", Rarity.ULTRA_RARE);
	}

	transformAffliction(cardObj, jsonObj) {
		let affliction = new Affliction();
		if(typeof jsonObj !== 'undefined' && jsonObj.constant) {
			affliction.name = cardObj.name;
			affliction.constant = jsonObj.constant * 1;
		} else {
			affliction.name = "";
			affliction.constant = 0;
		}

		return affliction;
	}

	transform(jsonObj):Card {
		let card = new Card();
		let specialEffectsTransformer = new SpecialEffectsTransformer();
		let elementTransformer = new ElementTransformer();
		let effectTransformer = new EffectTransformer();

		card.name = jsonObj.name;
		card.description = jsonObj.description;
		card.power = jsonObj.power;
		card.color = this.cardColorMap.get(jsonObj.color);
		card.specialEffect = specialEffectsTransformer.transform(jsonObj.specialEffect);
		card.element = elementTransformer.transform(jsonObj.element);
		card.affliction = this.transformAffliction(jsonObj, jsonObj.dot);
		card.unlocks = jsonObj.unlocks;
		card.rarity = this.rarityMap.get(jsonObj.rarity);
		card.effect = effectTransformer.transform(jsonObj.effect);

		if(card.rarity == null) {
			card.rarity = Rarity.COMMON;
		}

		if(jsonObj.accuracy) {
			card.accuracy = jsonObj.accuracy;
		} else {
			card.accuracy = 9;
		}

		return card;
	}
}