import type { Player } from "$lib/models/Player.svelte";
import type { TaxTile } from "$lib/models/TaxTile.svelte";


export class PayTax {
    readonly player: Player;
    readonly tax: TaxTile;

    constructor(player: Player, tax: TaxTile) {
        this.player = player;
        this.tax = tax;
    }

    get price() {
        return this.tax.price;
    }
}
