import type { Player } from "./Player.svelte";
import { Tile } from "./Tile.svelte";


export class JailTile extends Tile {

    constructor(id: number, name: string) {
        super(id, name, "jail");
    }

    actionOnLand(player: Player): void {
        // TODO Implement
        return;
    }
}
