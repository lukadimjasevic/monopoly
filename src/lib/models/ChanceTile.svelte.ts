import type { Player } from "./Player.svelte";
import { Tile } from "./Tile.svelte";


export class ChanceTile extends Tile {

    constructor(id: number, name: string) {
        super(id, name, "chance");
    }

    actionOnLand(player: Player): void {
        // TODO Implement
        return;
    }
}
