import { Player } from "./Player.svelte";
import { Tile } from "./Tile.svelte";


export class Board {
    tiles: Tile[];

    constructor(tiles: Tile[]) {
        this.tiles = tiles;
    }

    getTile(position: number): Tile {
        return this.tiles[position];
    }

    movePlayerToTile(player: Player, steps: number): Tile {
        const currentTile = player.getTile();
        const newTile = player.move(steps);
        currentTile.removePlayer(player);
        newTile.addPlayer(player);
        return newTile;
    }
}
