import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../../environments/environment';

@Component({
  selector: 'app-title-screen',
  templateUrl: './title-screen.component.html',
  styleUrls: ['./title-screen.component.scss']
})
export class TitleScreenComponent implements OnInit {
	build:string = '0';
  constructor() {
  	this.build = AppConfig.build;
   }

  ngOnInit() {
  }



}
