import { Component, OnInit, HostListener} from '@angular/core';
import {UiService} from '../ui.service';
import {MapService} from '../map.service';

@Component({
  selector: 'app-event-host',
  templateUrl: './event-host.component.html',
  styleUrls: ['./event-host.component.scss']
})
export class EventHostComponent implements OnInit {

  constructor(private ui:UiService, private map:MapService) { }

  ngOnInit() {
  }
  
  @HostListener('document:keydown', ['$event']) 
  keypress(event:KeyboardEvent) {
  		if(event.key === 'Escape') {
			this.ui.displayMenu = !this.ui.displayMenu;
		}

		if(event.key === 'w') {
			this.map.movePlayerUp();
		}
		if(event.key === 's') {
			this.map.movePlayerDown();
		}
		if(event.key === 'a') {
			this.map.movePlayerLeft();
		}
		if(event.key === 'd') {
			this.map.movePlayerRight();
		}
	}

}
