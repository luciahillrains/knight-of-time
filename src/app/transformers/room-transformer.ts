import {Room} from '../objects/room';

export class RoomTransformer {

	transform(jsonObj):Room {
		let room = new Room();
		room.x = jsonObj.x;
		room.y = jsonObj.y;
		room.music = jsonObj.music;
		room.playerStart = jsonObj.playerStart;
		
		if(jsonObj.layer1) {
			for(let tile of jsonObj.layer1) {
				if(tile == null) {
					room.layer1.push(-1);
				} else {
					room.layer1.push(tile);
				}
			}
		}
		if(jsonObj.layer2) {
			for(let event of jsonObj.layer2) {
				if(event == null) {
					room.layer2.push("");
				} else {
					room.layer2.push(event);
				}
			}
		}
		
		if(jsonObj.enemies) {
			let enemies = jsonObj.enemies.split(",");
			for(let enemy of enemies) {
				room.enemies.push(enemy);
			}
		}


		return room;
	}

}