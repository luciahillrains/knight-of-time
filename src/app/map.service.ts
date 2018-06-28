import { Injectable } from '@angular/core';
import { DataService} from './data.service';
import {MapSquare} from './objects/map-square';
import {Room} from './objects/room';
import {Tile} from './objects/tile';
import {Event} from './objects/event';

export const MAP_TILE_SIZE = 64;

@Injectable({
  providedIn: 'root'
})
export class MapService {
	currentRoomName:string;
    map:MapSquare[];
    room:Room;
  constructor(private data:DataService) { }

  loadMap(newRoomName) {
	this.currentRoomName = newRoomName;
	this.translate();
  }

  private translate() {
  	let room:Room = this.data.rooms.get(this.currentRoomName);
  	let map:MapSquare[] = [];
    this.room = room;
     for(let i = 0; i < room.layer1.length; i++) {
       let mq:MapSquare = new MapSquare();
       let tileNum = room.layer1[i];
       let eventKey = room.layer2[i];
       let tile = new Tile();
       let event = new Event();
       if(tileNum !== -1) {
         tile = this.data.tiles[tileNum];
       }
       if(eventKey !== "") {
         event = this.data.events.get(eventKey);
       }
       mq.tile = tile;
       mq.event = event;
       map.push(mq);
     }
  	this.map = map;
    if(room.playerStart.length == 2) {
      this.startPlayer(room);
    }
  }

  private startPlayer(room:Room) {
    let z = this.convertXYtoZ(room.playerStart, room.x);
      let proposedPlayerStart = this.map[z];
      if(proposedPlayerStart.event.sprite !== "blank") {
        console.log("ERROR: Cannot start player on space with event");
        return;
      }
      proposedPlayerStart.hasPlayer = true;
  }

  private convertXYtoZ(playerStart:number[], roomWidth:number) {
    let x = playerStart[0];
    let y = playerStart[1];

    return y * roomWidth + x;
  }
}
