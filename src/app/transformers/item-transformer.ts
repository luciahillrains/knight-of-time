import {SpecialEffectsTransformer} from './special-effects-transformer';
import {EffectTransformer} from './effect-transformer';
import {Item,ItemType} from '../objects/item';

export class ItemTransformer {
	itemTypeMap:Map<string, ItemType> = new Map();
	effectTransformer:EffectTransformer = new EffectTransformer();
	specialEffectsTransformer = new SpecialEffectsTransformer();
	constructor() {
		this.itemTypeMap.set("", ItemType.CONSUMEABLE);
		this.itemTypeMap.set("key", ItemType.KEY );
		this.itemTypeMap.set("weapon", ItemType.WEAPON);
		this.itemTypeMap.set("armor", ItemType.ARMOR);
		this.itemTypeMap.set("acc", ItemType.ACC);
	}
	transform(jsonObj):Item {
		let item = new Item();
		item.name = jsonObj.name;
		item.description = jsonObj.description;
		item.effect = this.effectTransformer.transform(jsonObj.effect);
		console.log("effect after transformation", item.effect);
		item.type = this.itemTypeMap.get(jsonObj.type);
		if(item.type == null) {
			item.type = ItemType.KEY;
		}

		let jsonCards = jsonObj.cards.split(",");
		for(let card in jsonCards) {
			item.cards.push(card);
		}
		if(jsonObj.specialEffect) {
			let jsonSEs = jsonObj.specialEffect.split(",");
			for(let se in jsonSEs) {
				item.specialEffect.push(this.specialEffectsTransformer.transform(se));
			}
		}


		return item;
	}
}