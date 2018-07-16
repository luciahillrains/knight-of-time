import { Component, OnInit, HostListener } from '@angular/core';
import {AppConfig} from '../../environments/environment';
import {UiService} from '../ui.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor(private ui:UiService) { }

  ngOnInit() {
  }

  showItemScreen() {
    this.hideAllMenuScreens();
    this.ui.currentMenuMode = "item";
  }

  showStatusScreen() {
    this.hideAllMenuScreens();
    this.ui.currentMenuMode = "status";
  }

  hideAllMenuScreens() {
    this.ui.currentMenuMode = "";
  }

  getClass() {
  	return this.ui.displayMenu?"visible":"hidden";
  }

  getDebugClass() {
  	return AppConfig.production?"hidden":"visible";
  }

}
