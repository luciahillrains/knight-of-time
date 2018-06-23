import { Component, OnInit } from '@angular/core';
import {MapService} from '../map.service';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.scss']
})
export class GameScreenComponent implements OnInit {

  constructor(private mapService:MapService) { }

  ngOnInit() {
  }

}
