import { Component, OnInit } from '@angular/core';
import {PlayerInformationService} from '../player-information.service';
import {SpecialEffect} from '../objects/card';
@Component({
  selector: 'app-status-screen',
  templateUrl: './status-screen.component.html',
  styleUrls: ['./status-screen.component.scss']
})
export class StatusScreenComponent implements OnInit {
	SpecialEffect = SpecialEffect;
  constructor(private player:PlayerInformationService) { }

  ngOnInit() {
  }

}
