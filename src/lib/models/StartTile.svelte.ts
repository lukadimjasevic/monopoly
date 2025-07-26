import type { Player } from "./Player.svelte";
import { Tile } from "./Tile.svelte";


export class StartTile extends Tile {
    
    constructor(id: number, name: string) {
        super(id, name, "start");
    }

    actionOnLand(player: Player): void {
        // TODO Implement
        return;
    }

}
