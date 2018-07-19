import { DeltaStatus, Perk, PerkKey} from '../player-information.service';

export class Character {
	name:string;
	description:string;
	stats:DeltaStatus;
	perks:Perk[];
}