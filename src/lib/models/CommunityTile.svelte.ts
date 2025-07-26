import type { Player } from "./Player.svelte";
import { Tile } from "./Tile.svelte";


export class CommunityTile extends Tile {

    constructor(id: number, name: string) {
        super(id, name, "community");
    }

    actionOnLand(player: Player): void {
        // TODO Implement
        return;
    }
}
