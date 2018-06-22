import {CONVERSATIONS_JSON} from '../data/conversations';
export class ConversationImporter {

	constructor() { }

	import():Map<string, string> {
		let map:Map<string, string> = new Map();
		let json = JSON.parse(CONVERSATIONS_JSON);
		for(let key in json) {
			map.set(key, json[key]);
		}

		return map;
	}
}