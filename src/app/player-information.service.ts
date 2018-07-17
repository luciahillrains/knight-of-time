import { Injectable } from '@angular/core';
import { Item } from './objects/item';
import {SpecialEffect} from './objects/card';

export enum PerkKey {
	INCREASE_PIETY,
	INCREASE_HIT_RATE,
	NONE
}
export class Perk {
	name:string = "";
	description:string = "";
	effect:SpecialEffect = SpecialEffect.NONE;
	key:PerkKey = PerkKey.NONE
}

export class DeltaStatus {
	hp:number = 0;
	attack:number = 0;
	defense:number = 0;
	hitRate: number = 0;
	accuracy: number = 0;
	intelligence:number = 0;
	piety:number = 0;
}

export class Status {
	hp: number = 100;
	maxHp:number = 100;
	attack:number = 3;
	defense:number = 3;
	hitRate:number = 1;
	accuracy:number = 90;
	intelligence:number = 3;
	piety:number = 3;
}

export class Equipment {
	weapon:Item = new Item();
	armor:Item = new Item();
	accessory:Item = new Item();
}
@Injectable({
  providedIn: 'root'
})
export class PlayerInformationService {
	inventory:string[] = ["tonic", "blackSigil","handAxe"];
	name:string = "Joan";
	status:Status = new Status();
	delta:DeltaStatus = new DeltaStatus();
	equipment:Equipment = new Equipment();
	perks:Perk[] = [];
	furthestFloor:number=0;
	furthestFloorAllTime:number = 0;
	currentFloor:number = 0;
	
  constructor() {
  	this.generateTemporaryPerks();
  	this.generateTemporaryEquipment();
   }

   private generateTemporaryPerks() {
   		let perk1 = new Perk();
   		perk1.name = "Voice of God";
   		perk1.description = "You hear the voice of god. Your piety is higher than the common man.";
   		this.perks.push(perk1);
   		let perk2 = new Perk();
   		perk2.name = "Military Skill";
   		perk2.description = "You are an accomplished military leader.  You can fell many foes with one swing from your blade.";
   		this.perks.push(perk2);
   }

   private generateTemporaryEquipment() {
   		let w = new Item();
   		w.name = "Marshal's Sword";
   		this.equipment.weapon = w;
   		let a = new Item();
   		a.name = "General's Uniform";
   		this.equipment.armor = a;
   		let c = new Item();
   		c.name = "Dark Amulet";
   		c.specialEffect.push(SpecialEffect.HURT_DARK);
   		this.equipment.accessory = c;
   }
}
