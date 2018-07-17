import { Component, OnInit } from '@angular/core';
import {MapService, MAP_TILE_SIZE} from '../map.service';
import {UiService} from '../ui.service';
@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.scss']
})
export class GameScreenComponent implements OnInit {

  constructor(private mapService:MapService, private ui:UiService) { }

  ngOnInit() {
  }

  calculateDimensions() {
  	return {
  		"height": (this.mapService.room.y * MAP_TILE_SIZE)+"px",
  		"width": (this.mapService.room.x * MAP_TILE_SIZE) + "px"
  	}
  }

  calculateItemScreenStyle() {
  	return this.calculateMenuScreenStyle("item");
  }

  calculateStatusScreenStyle() {
    return this.calculateMenuScreenStyle("status");
  }

  calculateCardScreenStyle() {
    return this.calculateMenuScreenStyle("cards");
  }

  calculateConfigScreenStyle() {
    return this.calculateMenuScreenStyle("config");
  }
  calculateMenuScreenStyle(screenMode) {
  	if(this.ui.currentMenuMode === screenMode) {
  		return {
  			"display": "block"
  		};
  	} else {
  		return {
  			"display": "none"
  		};
  	}
  }

}
