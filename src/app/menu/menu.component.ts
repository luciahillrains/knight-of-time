import { Component, OnInit, HostListener } from '@angular/core';
import {AppConfig} from '../../environments/environment';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
	visible:boolean = false;
  constructor() { }

  @HostListener('document:keydown', ['$event']) 
  keypress(event:KeyboardEvent) {
  	if(event.key === 'Escape') {
  		this.visible = !this.visible;
  	}
  }

  ngOnInit() {
  }

  getClass() {
  	return this.visible?"visible":"hidden";
  }

  getDebugClass() {
  	return AppConfig.production?"hidden":"visible";
  }

}
