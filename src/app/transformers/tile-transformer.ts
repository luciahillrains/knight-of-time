import {Tile} from '../objects/tile';

export class TileTransformer {
	
	transform(jsonObj):Tile {
		let tile = new Tile();
		tile.sprite = jsonObj.sprite;
		tile.layer = jsonObj.number;
		tile.solid = jsonObj.solid;
		return tile;
	}
}