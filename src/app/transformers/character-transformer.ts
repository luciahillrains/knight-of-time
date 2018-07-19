import {Character} from '../objects/character';
import {Perk, PerkKey, DeltaStatus} from '../player-information.service';
import {SpecialEffectsTransformer} from './special-effects-transformer';

export class CharacterTransformer {
	perkKeyMap:Map<string, PerkKey>;


	constructor() {
		this.perkKeyMap = new Map();

		this.perkKeyMap.set("ACTIVISM", PerkKey.ACTIVISM);
		this.perkKeyMap.set("AVERAGE", PerkKey.AVERAGE);
		this.perkKeyMap.set("BRAVERY", PerkKey.BRAVERY);
		this.perkKeyMap.set("HIGH_MIND", PerkKey.HIGH_MIND);
		this.perkKeyMap.set("HIGHER_RUN_AWAY", PerkKey.HIGHER_RUN_AWAY);
		this.perkKeyMap.set("INCREASE_INT", PerkKey.INCREASE_INT);
		this.perkKeyMap.set("INCREASE_PIETY", PerkKey.INCREASE_PIETY);
		this.perkKeyMap.set("NONE", PerkKey.NONE);
	}

	transform(jsonObj):Character {
		let char = new Character();

		char.name = jsonObj.name;
		char.description = jsonObj.description;
		char.stats = this.transformStats(jsonObj);
		char.perks = this.transformPerks(jsonObj);
		return char;
	}

	private transformStats(jsonObj):DeltaStatus {
		let ds = new DeltaStatus();
		ds.hp = jsonObj.stats.hp;
		ds.attack = jsonObj.stats.attack;
		ds.defense = jsonObj.stats.defense;
		ds.hitRate = jsonObj.stats.hitRate;
		ds.accuracy = jsonObj.stats.accuracy;
		ds.intelligence = jsonObj.stats.intelligence;
		ds.piety = jsonObj.stats.piety;
		return ds;		
	}

	private transformPerks(jsonObj):Perk[] {
		let ps:Perk[] = [];

		for(let a of jsonObj.perks) {
			ps.push(this.transformPerk(a));
		}

		return ps;
	}

	private transformPerk(jsonObj):Perk {
		let perk = new Perk();
		let specialEffectTransformer = new SpecialEffectsTransformer();
		perk.name = jsonObj.name;
		perk.description = jsonObj.description;
		perk.key = this.perkKeyMap.get(jsonObj.key);
		perk.effect = specialEffectTransformer.transform(jsonObj.effect);
		return perk;
	}


}