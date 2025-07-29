import { PayTax } from "./PayTax.svelte";
import type { ModalManager } from "./ModalManager.svelte";
import type { Player } from "$lib/models/Player.svelte";
import type { TaxTile } from "$lib/models/TaxTile.svelte";


class PayTaxManager implements ModalManager<[Player, TaxTile]> {
    tax = $state<PayTax | null>(null);

    show(player: Player, tax: TaxTile): void {
        this.tax = new PayTax(player, tax);
    }

    hide(): void {
        this.tax = null;
    }

    isActive(): this is { tax: PayTax } {
        return this.tax ? true : false;
    }
}

export const payTaxManager = new PayTaxManager();
