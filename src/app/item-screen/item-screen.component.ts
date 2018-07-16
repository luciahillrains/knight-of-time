import { Component, OnInit } from '@angular/core';
import {PlayerInformationService} from '../player-information.service'
import { DataService} from '../data.service';
import {ItemType, Item} from '../objects/item';
import {EffectAction, Operand, SpecialEffect} from '../objects/card';
import { Card } from '../objects/card';
@Component({
  selector: 'app-item-screen',
  templateUrl: './item-screen.component.html',
  styleUrls: ['./item-screen.component.scss']
})
export class ItemScreenComponent implements OnInit {
	exposedItem:Item = new Item();
	ItemType = ItemType;
	EffectAction = EffectAction;
	Operand = Operand;
	SpecialEffect = SpecialEffect;
  constructor(private data:DataService, private player:PlayerInformationService) { }

  ngOnInit() {
  }

  getItem(itemKey) {
  	return this.data.items.get(itemKey);
  }

  selectItem(key) {
  	this.exposedItem = this.getItem(key);
  	console.log("selected", this.exposedItem);
  }

  cards() {
  	let cards:Card[] = [];
  	for(let c of this.exposedItem.cards) {
  		if(c === "") {
  			continue;
  		}
  		cards.push(this.data.cards.get(c));
  	}
  	console.log(cards);
  	return cards;
  }

}
