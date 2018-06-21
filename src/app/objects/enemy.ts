import {Element} from './card';

export class Gifts {
	exp: number;
	gift: string;
	gold: number;
}

export class Enemy {
	name:string;
	description:string;
	sprite:string;
	hp:number;
	offense:number;
	defense:number;
	hitRate:number;
	accuracy:number;
	receive: Gifts;
	cards: string[];
	element: Element;
}