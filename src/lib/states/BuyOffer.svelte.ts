import type { Player } from "$lib/models/Player.svelte";
import type { PropertyTile } from "$lib/models/PropertyTile.svelte"


export class BuyOffer {
    readonly player: Player;
    readonly property: PropertyTile;

    constructor(player: Player, property: PropertyTile) {
        this.player = player;
        this.property = property;
    }

    get price() {
        return this.property.price;
    }
}

