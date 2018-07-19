import {SpecialEffect} from '../objects/card';

export class SpecialEffectsTransformer {
	map:Map<string, SpecialEffect>;

	constructor() {
		this.map = new Map();
		this.map.set("", SpecialEffect.NONE);
		this.map.set("NONE", SpecialEffect.NONE);
		this.map.set("Fear", SpecialEffect.FEAR);
		this.map.set("Resist Fire", SpecialEffect.RESIST_FIRE);
		this.map.set("Resist Water", SpecialEffect.RESIST_WATER);
		this.map.set("Resist Ice", SpecialEffect.RESIST_ICE);
		this.map.set("RESIST_ICE", SpecialEffect.RESIST_ICE);
		this.map.set("Resist Light", SpecialEffect.RESIST_LIGHT);
		this.map.set("Resist Earth", SpecialEffect.RESIST_EARTH);
		this.map.set("Resist Air", SpecialEffect.RESIST_AIR);
		this.map.set("Resist Dark", SpecialEffect.RESIST_DARK);
		this.map.set("Resist Machine", SpecialEffect.RESIST_MACHINE);
		this.map.set("Resist Physical", SpecialEffect.RESIST_PHYSICAL);
		this.map.set("Resist Poison", SpecialEffect.RESIST_POISON);
		this.map.set("Resist Electric", SpecialEffect.RESIST_ELECTRIC);
		this.map.set("Resist Human", SpecialEffect.RESIST_HUMAN);
		this.map.set("Resist Plant", SpecialEffect.RESIST_PLANT);
		this.map.set("Resist Undead", SpecialEffect.RESIST_UNDEAD);
		this.map.set("Hurt Fire", SpecialEffect.HURT_FIRE);
		this.map.set("Hurt Water", SpecialEffect.HURT_WATER);
		this.map.set("Hurt Ice", SpecialEffect.HURT_ICE);
		this.map.set("Hurt Light", SpecialEffect.HURT_LIGHT);
		this.map.set("Hurt Earth", SpecialEffect.HURT_EARTH);
		this.map.set("Hurt Air", SpecialEffect.HURT_AIR);
		this.map.set("Hurt Dark", SpecialEffect.HURT_DARK);
		this.map.set("Hurt Machine", SpecialEffect.HURT_MACHINE);
		this.map.set("Hurt Physical", SpecialEffect.HURT_PHYSICAL);
		this.map.set("Hurt Poison", SpecialEffect.HURT_POISON);
		this.map.set("Hurt Electric", SpecialEffect.HURT_ELECTRIC);
		this.map.set("Hurt Human", SpecialEffect.HURT_HUMAN);
		this.map.set("Hurt Plant", SpecialEffect.HURT_PLANT);
		this.map.set("Hurt Undead", SpecialEffect.HURT_UNDEAD);
		this.map.set("+1 Turn", SpecialEffect.ONE_MORE_TURN);
		this.map.set("Escape", SpecialEffect.ESCAPE);
		this.map.set("Gaurd", SpecialEffect.GAURD);
		this.map.set("Use Item", SpecialEffect.USE_ITEM);
		this.map.set("Repel 1000", SpecialEffect.REPEL_SHORT);
		this.map.set("Repel 5000", SpecialEffect.REPEL_LONG);
		this.map.set("Force Run", SpecialEffect.FORCE_RUN);
		this.map.set("Heal One", SpecialEffect.HEAL_ONE);
		this.map.set("Heal All", SpecialEffect.HEAL_ALL);
		this.map.set("Absorb", SpecialEffect.ABSORB);
		this.map.set("Auto Rez", SpecialEffect.AUTO_REZ);
		this.map.set("Empower", SpecialEffect.EMPOWER);
		this.map.set("Weaken", SpecialEffect.WEAKEN);
		this.map.set("Walk Heal", SpecialEffect.WALK_HEAL);
		this.map.set("Protect All", SpecialEffect.PROTECT_ALL);
		this.map.set("Double Rare Cards", SpecialEffect.DOUBLE_RARES);
		this.map.set("Master Key", SpecialEffect.MASTER_KEY);
		this.map.set("Protect All + prevent Dots", SpecialEffect.PROTECT_ALL_PREVENT_DOTS);
		this.map.set("Prevent Dots", SpecialEffect.PREVENT_DOTS);

	}
	
	transform(str):SpecialEffect {
		let se = this.map.get(str);
		if(str === null) {
			return SpecialEffect.NONE;
		}
		return se;
	}
}