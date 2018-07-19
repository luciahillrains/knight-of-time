import {Character} from '../objects/character';
import {CharacterTransformer} from '../transformers/character-transformer';
import {CHARACTERS_JSON} from '../data/characters';

export class CharacterImporter {
	characterTransformer:CharacterTransformer = new CharacterTransformer();

	constructor() {

	}

	import():Character[] {
		let cs:Character[] = [];
		let json = JSON.parse(CHARACTERS_JSON);
		for(let j of json) {
			let char = this.characterTransformer.transform(j);
			cs.push(char);
		}
		return cs;
	}
}