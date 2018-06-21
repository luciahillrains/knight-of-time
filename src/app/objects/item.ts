import {SpecialEffect, Effect} from './card';

export enum ItemType {
	CONSUMEABLE,
	KEY,
	WEAPON,
	ARMOR,
	ACC
}

export class Item {
	name: string;
	description: string;
	type: ItemType;
	cards: string[];
	effect: Effect;
}