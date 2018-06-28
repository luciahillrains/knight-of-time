import { Component, OnInit, Input } from '@angular/core';
import {MapSquare} from '../objects/map-square';

@Component({
  selector: 'app-map-tile',
  templateUrl: './map-tile.component.html',
  styleUrls: ['./map-tile.component.scss']
})
export class MapTileComponent implements OnInit {
	@Input()
	mapSquare:MapSquare;

  constructor() { }

  ngOnInit() {
  }

  generateWrapperStyle() {
  	return {
  		"background-image": `url("assets/objects/${this.mapSquare.tile.sprite}.png")`
  	}
  }

  generateObjectSrc() {
  	if(typeof this.mapSquare.event === 'undefined') {
  		return "";
  	}
  	if(this.mapSquare.hasPlayer) {
  		return this.generatePlayer();
  	}
  	return `assets/events/${this.mapSquare.event.sprite}.png`;
  }

  generatePlayer() {
  	return 'assets/player/front_2.png';
  }

}
