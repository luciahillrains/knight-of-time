import { Component, OnInit, Input } from '@angular/core';
import {Tile} from '../objects/tile';
import {Event} from '../objects/event';

@Component({
  selector: 'app-map-tile',
  templateUrl: './map-tile.component.html',
  styleUrls: ['./map-tile.component.scss']
})
export class MapTileComponent implements OnInit {
	@Input()
	tile:Tile;

	@Input()
	event:Event = new Event();

  constructor() { }

  ngOnInit() {
  }

  generateWrapperStyle() {
  	return {
  		"background-image": `url("assets/objects/${this.tile.sprite}.png")`
  	}
  }

  generateObjectSrc() {
  	if(typeof this.event === 'undefined') {
  		return "";
  	}
  	return `assets/events/${this.event.sprite}.png`;
  }

}
