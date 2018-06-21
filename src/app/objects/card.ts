export enum CardColor {
	RED,
	BLUE,
	WHITE
}

export enum SpecialEffect {
	FEAR,
	RESIST_FIRE,
	HURT_FIRE,
	RESIST_WATER,
	HURT_WATER,
	RESIST_ICE,
	HURT_ICE,
	RESIST_EARTH,
	HURT_EARTH,
	RESIST_LIGHT,
	HURT_LIGHT,
	RESIST_AIR,
	HURT_AIR,
	RESIST_DARK,
	HURT_DARK,
	RESIST_MACHINE,
	HURT_MACHINE,
	RESIST_PHYSICAL,
	HURT_PHYSICAL,
	RESIST_POISON,
	HURT_POISON,
	RESIST_ELECTRIC,
	HURT_ELECTRIC,
	RESIST_HUMAN,
	HURT_HUMAN,
	RESIST_PLANT,
	HURT_PLANT,
	RESIST_UNDEAD,
	HURT_UNDEAD,
	ONE_MORE_TURN,
	ESCAPE,
	GAURD,
	USE_ITEM,
	REPEL_1000,
	REPEL_5000,
	FORCE_RUN,
	HEAL_ONE,
	HEAL_ALL,
	ABSORB,
	AUTO_REZ,
	EMPOWER,
	WEAKEN,
	WALK_HEAL,
	PROTECT_ALL,
	DOUBLE_RARES,
	MASTER_KEY,
	PROTECT_ALL_PREVENT_DOTS,
	PREVENT_DOTS
}

export enum Element {
	FIRE,
	WATER,
	ICE,
	EARTH,
	LIGHT,
	AIR,
	DARK,
	MACHINE,
	PHYSICAL,
	POISON,
	ELECTRIC,
	HUMAN,
	PLANT,
	UNDEAD
}

export enum EffectAction {
	RECOVERY,
	DAMAGE
}

export enum Operand {
	HP,
	CARDS,
	ATTACK,
	DEFENSE,
	HIT_RATE,
	INTELLIGENCE,
	LUCK,
	POISE,
	ACCURACY
}

export class Effect {
	action:EffectAction;
	constant: number;
	operand: Operand;
}

export class Affliction {
	name: string;
	constant: number;
}

export enum Rarity {
	DEV_COMMON,
	COMMON,
	UNCOMMON,
	RARE,
	ULTRA_RARE
}
export class Card {
	name:string;
	description:string;
	power:number;
	color: CardColor;
	specialEffect: SpecialEffect;
	affinity: Element;
	affliction: Affliction;
	accuracy: number;
	unlocks: string;
	rarity: Rarity;
}