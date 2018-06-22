import {ITEMS_JSON} from '../data/items';
import {ItemTransformer} from '../transformers/item-transformer';
import {Item} from '../objects/item';
export class ItemImporter {
	itemTransformer = new ItemTransformer();

	import():Map<string, Item> {
		let jsonObj = JSON.parse(ITEMS_JSON);
		let map = new Map();
		for(let key in jsonObj) {
			map.set(key, this.itemTransformer.transform(jsonObj[key]));
		}

		return map;
	}

}