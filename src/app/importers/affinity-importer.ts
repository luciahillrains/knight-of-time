import {AffinityTransformer} from '../transformers/affinity-transformer';
import {Affinity} from '../objects/affinity';
import {AFFINITY_JSON} from '../data/affinities';

export class AffinityImporter {
	affinityTransformer:AffinityTransformer;

	constructor() {
		this.affinityTransformer = new AffinityTransformer();
	}

	import():Map<string, Affinity> {
		let json = JSON.parse(AFFINITY_JSON);
		let retMap:Map<string, Affinity> = new Map();
		for(let key in json) {
			let aff = this.affinityTransformer.transform(json[key]);
			retMap.set(key, aff);
		}
		return retMap;
	}
}