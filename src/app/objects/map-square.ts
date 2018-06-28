import {Tile} from './tile';
import {Event} from './event';

export class MapSquare {
	tile:Tile;
	event:Event;
	hasPlayer:boolean = false; //note: event cannot be not-null && hasPlayer unless passive!
}