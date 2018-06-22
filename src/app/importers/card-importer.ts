import {Card} from '../objects/card';
import {CardTransformer} from '../transformers/card-transformer';
import {CARDS_JSON} from '../data/cards';
export class CardImporter {
	cardTransformer:CardTransformer = new CardTransformer();

	constructor() {

	}

	import():Map<string, Card> {
		let map:Map<string, Card> = new Map();
		let json = JSON.parse(CARDS_JSON);
		for(let key in json) {
			let card = this.cardTransformer.transform(json[key]);
			map.set(key, card);
		}
		return map;
	}
}