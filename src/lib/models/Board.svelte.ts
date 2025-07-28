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
        const currentTile = player.tile;
        player.move(steps);
        currentTile.removePlayer(player);
        player.tile.addPlayer(player);
        return player.tile;
    }
}
