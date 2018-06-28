export enum Action {
	NOTHING,
	DISPLAY,
	REMOVE,
	GIVE,
	KILL,
	SWITCH,
	TELEPORT,
	SHOP,
	BATTLE,
	MUSICTEST
}

export class EventStep {
	action: Action;
	operand: string;
}

export class Event {
	name: string;
	sprite: string = "blank";
	passive: boolean; //what does this do?
	default: EventStep[] = [];
	events: Map<string, EventStep[]> = new Map();
}