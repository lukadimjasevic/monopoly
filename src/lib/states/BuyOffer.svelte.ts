import type { Player } from "$lib/models/Player.svelte";
import type { PropertyTile } from "$lib/models/PropertyTile.svelte"


class BuyOffer {
    player: Player | null = $state(null);
    tile: PropertyTile | null = $state(null);

    constructor() {};

    set(player: Player, tile: PropertyTile) {
        this.player = player;
        this.tile = tile;
    }

    clear() {
        this.player = null;
        this.tile = null;
    }

    isActive(): this is { player: Player; tile: PropertyTile } {
        return this.player !== null && this.tile !== null;
    }
}

export const buyOffer = new BuyOffer();
