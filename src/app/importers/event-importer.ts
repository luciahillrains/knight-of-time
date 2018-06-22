import {Event} from '../objects/event';
import {EventTransformer} from '../transformers/event-transformer';
import {EVENTS_JSON} from '../data/events';

export class EventImporter {
	eventTransformer:EventTransformer = new EventTransformer();

	import():Map<string, Event>{
		let map:Map<string, Event> = new Map();
		let json = JSON.parse(EVENTS_JSON);
		for(let key in json) {
			map.set(key, this.eventTransformer.transform(json[key]));
		}
		return map;
	}
}