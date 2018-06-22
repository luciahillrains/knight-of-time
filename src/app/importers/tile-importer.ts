import {Tile} from '../objects/tile';
import {TileTransformer} from '../transformers/tile-transformer';
import {TILES_JSON} from '../data/tiles';
export class TileImporter {
	tileTransformer = new TileTransformer;

	import():Tile[] {
		let tiles = [];
		let json = JSON.parse(TILES_JSON);
		for(let tile of json) {
			tiles.push(this.tileTransformer.transform(tile));
		}
		return tiles;
	}
}