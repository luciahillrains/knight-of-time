import {Affinity} from '../objects/affinity';
import {Element} from '../objects/card';
import {ElementTransformer} from './element-transformer';

export class AffinityTransformer {

	transform(jsonObj):Affinity {
		let affinity = new Affinity();
		let elementTransformer = new ElementTransformer();
		for(let i =0 ; i < jsonObj.weak.length; i++) {
			affinity.weak.push(elementTransformer.transform(jsonObj.weak[i]));
		}

		for(let i = 0; i < jsonObj.strong.length; i++) {
			affinity.strong.push(elementTransformer.transform(jsonObj.strong[i]));
		}

		return affinity;
	}
}