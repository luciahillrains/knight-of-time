import { Component, OnInit, HostListener} from '@angular/core';
import {UiService} from '../ui.service';

@Component({
  selector: 'app-event-host',
  templateUrl: './event-host.component.html',
  styleUrls: ['./event-host.component.scss']
})
export class EventHostComponent implements OnInit {

  constructor(private ui:UiService) { }

  ngOnInit() {
  }
  
  @HostListener('document:keydown', ['$event']) 
  keypress(event:KeyboardEvent) {
  		if(event.key === 'Escape') {
			this.ui.displayMenu = !this.ui.displayMenu;
		}
	}

}
