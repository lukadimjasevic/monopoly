import type { Player } from "./Player.svelte";
import { Tile } from "./Tile.svelte";
import type { TileChargeable } from "./Tile.svelte";


export class TaxTile extends Tile implements TileChargeable {
    price: number;

    constructor(id: number, name: string, price: number) {
        super(id, name, "tax");
        this.price = price;
    }

    actionOnLand(player: Player): void {
        // TODO Implement
        return;
    }
}
