import {Effect, EffectAction, Operand} from '../objects/card';

export class EffectTransformer {
	effectActionMap:Map<string, EffectAction>;
	operandMap:Map<string, Operand>;

	constructor() {
		this.effectActionMap = new Map();
		this.operandMap = new Map();

		this.effectActionMap.set("+", EffectAction.ADD);
		this.effectActionMap.set("-", EffectAction.SUBTRACT);
		this.effectActionMap.set("", EffectAction.NONE);

		this.operandMap.set("", Operand.NONE);
		this.operandMap.set("HP", Operand.HP);
		this.operandMap.set("Max HP", Operand.MAX_HP);
		this.operandMap.set("Offense", Operand.ATTACK);
		this.operandMap.set("Defense", Operand.DEFENSE);
		this.operandMap.set("Number of Cards", Operand.CARDS);
		this.operandMap.set("Card Power", Operand.CARD_POWER);
		this.operandMap.set("Hit Rate", Operand.HIT_RATE);
		this.operandMap.set("Luck", Operand.LUCK);
		this.operandMap.set("Intelligence", Operand.INTELLIGENCE);
		this.operandMap.set("Poise", Operand.POISE);
		this.operandMap.set("Accuracy", Operand.ACCURACY);

	}

	transform(jsonObj):Effect {
		let effect = new Effect();
		effect.action = this.effectActionMap.get(jsonObj.action);
		if(effect.action == null) {
			effect.action = EffectAction.NONE;
		}

		if(jsonObj.constant === "X") {
			effect.constant = -1;
		} else {
			effect.constant = jsonObj.constant * 1;
		}

		effect.operand = this.operandMap.get(jsonObj.operand);
		if(effect.operand == null) {
			effect.operand = Operand.NONE;
		}

		return effect;
	}
}