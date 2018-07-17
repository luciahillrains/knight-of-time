import { Component, OnInit } from '@angular/core';
import { PlayerInformationService } from '../player-information.service';
import { DataService } from '../data.service';
import { Card } from '../objects/card';
@Component({
  selector: 'app-card-screen',
  templateUrl: './card-screen.component.html',
  styleUrls: ['./card-screen.component.scss']
})
export class CardScreenComponent implements OnInit {

  constructor(private player:PlayerInformationService, private data:DataService) { }

  ngOnInit() {
  }

  weaponCards() {
  	return this.getCards(this.player.equipment.weapon.cards);
  }

  armorCards() {
  	return this.getCards(this.player.equipment.armor.cards);
  }

  accessoryCards() {
  	return this.getCards(this.player.equipment.accessory.cards);
  }

  baseCards() {
  	return this.getCards(this.player.cards);
  }

  private getCards(keyArray:string[]) {
  	let cards:Card[] = [];

  	for(let k of keyArray) {
  		if(k !== "") {
  			 cards.push(this.data.cards.get(k));
  		}
  	}
  	return cards;
  }

}
