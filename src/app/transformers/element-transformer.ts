import { Element } from '../objects/card';

export class ElementTransformer {
	map:Map<string, Element>;
	constructor() {
		this.map = new Map();
		this.map.set("Air", Element.AIR);
		this.map.set("Dark", Element.DARK);
		this.map.set("Earth", Element.EARTH);
		this.map.set("Electric", Element.ELECTRIC);
		this.map.set("Fire", Element.FIRE);
		this.map.set("Human", Element.HUMAN);
		this.map.set("Ice", Element.ICE);
		this.map.set("Light", Element.LIGHT);
		this.map.set("Machine", Element.MACHINE);
		this.map.set("Physical", Element.PHYSICAL);
		this.map.set("Plant", Element.PLANT);
		this.map.set("Poison", Element.POISON);
		this.map.set("Undead", Element.UNDEAD);
	}

	transform(str):Element {
		let elem = this.map.get(str);
		if(elem === null) {
			return Element.PHYSICAL;
		}
		return elem;
	}
}