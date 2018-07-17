import { Component, OnInit } from '@angular/core';
import {PlayerInformationService} from '../player-information.service';

@Component({
  selector: 'app-status-screen',
  templateUrl: './status-screen.component.html',
  styleUrls: ['./status-screen.component.scss']
})
export class StatusScreenComponent implements OnInit {

  constructor(private player:PlayerInformationService) { }

  ngOnInit() {
  }

}
