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
        const currentTile = player.getCurrentTile();
        player.move(steps);
        const newTile = player.getCurrentTile();
        currentTile.players = currentTile.players.filter(p => p.id != player.id);
        newTile.players.push(player);
        return newTile;
    }
}
