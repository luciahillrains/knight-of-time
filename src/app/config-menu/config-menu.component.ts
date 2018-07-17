import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
@Component({
  selector: 'app-config-menu',
  templateUrl: './config-menu.component.html',
  styleUrls: ['./config-menu.component.scss']
})
export class ConfigMenuComponent implements OnInit {

  constructor(private config:ConfigService) { }

  ngOnInit() {
  }

}
