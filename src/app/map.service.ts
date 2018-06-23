import { Injectable } from '@angular/core';
import { DataService} from './data.service';
import {MapSquare} from './objects/map-square';
import {Room} from './objects/room';
import {Tile} from './objects/tile';
import {Event} from './objects/event';
@Injectable({
  providedIn: 'root'
})
export class MapService {
	currentRoomName:string;
    map:MapSquare[];
  constructor(private data:DataService) { }

  loadMap(newRoomName) {
	this.currentRoomName = newRoomName;
	this.translate();
  }

  private translate() {
  	let room:Room = this.data.rooms.get(this.currentRoomName);
  	let map:MapSquare[] = [];

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
  }
}
