import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../../environments/environment';

import {DataService} from '../data.service';
import {AffinityImporter} from '../importers/affinity-importer';

@Component({
  selector: 'app-title-screen',
  templateUrl: './title-screen.component.html',
  styleUrls: ['./title-screen.component.scss']
})
export class TitleScreenComponent implements OnInit {
	build:string = '0';

  constructor(private dataService:DataService) {
  	this.build = AppConfig.build;

  	
   }

  ngOnInit() {
  }


}
