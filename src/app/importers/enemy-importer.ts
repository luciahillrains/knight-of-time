import {Enemy} from '../objects/enemy';
import {EnemyTransformer} from '../transformers/enemy-transformer';
import {ENEMIES_JSON} from '../data/enemies';

export class EnemyImporter {
	enemyTransformer:EnemyTransformer = new EnemyTransformer();

	constructor() {

	}

	import():Map<string, Enemy> {
		let map:Map<string,Enemy> = new Map();
		let json = JSON.parse(ENEMIES_JSON);
		for(let key in json) {
			map.set(key, this.enemyTransformer.transform(json[key]));
		}
		return map;
	}
}