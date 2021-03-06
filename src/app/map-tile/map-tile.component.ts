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
  	if(this.mapSquare.event == null) {
  		return "";
  	}
  	else if(this.mapSquare.hasPlayer) {
  		return this.generatePlayer();
  	}
    else {
          return `assets/events/${this.mapSquare.event.sprite}.png`;
    }
  }

  generateId() {
  	if(this.mapSquare.hasPlayer) {
  		return "player";
  	} else {
  		return "";
  	}
  }

  generatePlayer() {
  	return 'assets/player/front_2.png';
  }

}
