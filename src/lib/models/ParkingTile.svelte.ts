import type { Player } from "./Player.svelte";
import { Tile } from "./Tile.svelte";


export class ParkingTile extends Tile {

    constructor(id: number, name: string) {
        super(id, name, "parking");
    }

    actionOnLand(player: Player): void {
        // TODO Implement
        return;
    }
}
