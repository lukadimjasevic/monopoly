import type { Player } from "./Player.svelte";
import { Tile } from "./Tile.svelte";


export class GoToJailTile extends Tile {

    constructor(id: number, name: string) {
        super(id, name, "goToJail");
    }

    actionOnLand(player: Player): void {
        // TODO Implement
        return;
    }
}
