import { Component, OnInit } from '@angular/core';
import {MapService, MAP_TILE_SIZE} from '../map.service';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.scss']
})
export class GameScreenComponent implements OnInit {

  constructor(private mapService:MapService) { }

  ngOnInit() {
  }

  calculateDimensions() {
  	return {
  		"height": (this.mapService.room.y * MAP_TILE_SIZE)+"px",
  		"width": (this.mapService.room.x * MAP_TILE_SIZE) + "px"
  	}
  }

}
