import {Room} from '../objects/room';
import {RoomTransformer} from '../transformers/room-transformer';
import {ROOMS_JSON} from '../data/rooms';
export class RoomImporter {
	roomTransformer:RoomTransformer = new RoomTransformer();

	import():Map<string, Room> {
		let map = new Map();
		let json = JSON.parse(ROOMS_JSON);
		for(let key in json) {
			map.set(key, this.roomTransformer.transform(json[key]));
		}
		return map;
	}
}