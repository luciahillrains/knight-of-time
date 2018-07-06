import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {
	displayMenu: boolean = false;
	currentMenuMode:string = "";
  constructor() { }
}
