import {Enemy, Gifts} from '../objects/enemy';
import {ElementTransformer} from './element-transformer';
export class EnemyTransformer {
		constructor() { }

		transformGifts(jsonObj):Gifts {
			let gifts = new Gifts();
			gifts.exp = jsonObj.expReceived * 1;
			gifts.gift = jsonObj.giftReceived;
			gifts.gold = jsonObj.goldReceived * 1;
			return gifts;
		}

		transform(jsonObj):Enemy {
			let enemy = new Enemy();
			enemy.name = jsonObj.name;
			enemy.description = jsonObj.description;
			enemy.sprite = jsonObj.sprite;
			enemy.hp = jsonObj.hp * 1;
			enemy.offense = jsonObj.offense * 1;
			enemy.defense = jsonObj.defense * 1;
			enemy.reward = this.transformGifts(jsonObj);
			enemy.element = new ElementTransformer().transform(jsonObj.affinity);
			if(jsonObj.hitRate) {
				enemy.hitRate = jsonObj.hitRate;
			} else {
				enemy.hitRate = 1;
			}

			if(jsonObj.accuracy) {
				enemy.accuracy = jsonObj.accuracy;
			} else {
				enemy.accuracy = 9;
			}

			let cardsSplit = jsonObj.cards.split(",");
			for(let str of cardsSplit) {
				enemy.cards.push(str);
			}

			return enemy;
		}
}