import { BuyOffer } from "./BuyOffer.svelte"
import type { ModalManager } from "./ModalManager.svelte";
import type { Player } from "$lib/models/Player.svelte";
import type { PropertyTile } from "$lib/models/PropertyTile.svelte";


class BuyOfferManager implements ModalManager<[Player, PropertyTile]> {
    offer = $state<BuyOffer | null>(null);

    show(player: Player, property: PropertyTile) {
        this.offer = new BuyOffer(player, property);
    }

    hide() {
        this.offer = null;
    }

    isActive(): this is { offer: BuyOffer } {
        return this.offer ? true : false;
    }
}

export const buyOfferManager = new BuyOfferManager();
