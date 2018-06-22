import {Action, EventStep, Event} from '../objects/event'

export class EventTransformer {
	actionMap:Map<string, Action>;

	constructor() {
		this.actionMap = new Map();
		this.actionMap.set("nothing", Action.NOTHING);
		this.actionMap.set("display", Action.DISPLAY);
		this.actionMap.set("remove", Action.REMOVE);
		this.actionMap.set("give", Action.GIVE);
		this.actionMap.set("kill", Action.KILL);
		this.actionMap.set("switch", Action.SWITCH);
		this.actionMap.set("teleport", Action.TELEPORT);
		this.actionMap.set("shop", Action.SHOP);
		this.actionMap.set("battle", Action.BATTLE);
		this.actionMap.set("musictest", Action.MUSICTEST);
	}

	transformEventStep(stepObj):EventStep {
		let step = new EventStep();
		step.action = this.actionMap.get(stepObj.action);
		if(step.action === null) {
			step.action = Action.NOTHING;
		}
		step.operand = stepObj.text;

		return step;
	}
	transform(jsonObj):Event {
		let event = new Event();
		event.name = jsonObj.name;
		event.sprite = jsonObj.sprite;
		event.passive = jsonObj.passive;
		for(let obj of jsonObj.default) {
			event.default.push(this.transformEventStep(obj));
		}

		for(let acts of jsonObj.events) {
			let actArr:EventStep[] = [];
			let switchName:string = acts.switch;
			for(let act of acts.actions) {
				actArr.push(this.transformEventStep(act));
			}
			event.events.set(switchName, actArr);
		}


		return event;
	}
}