import type { Player } from "./Player.svelte";
import { Tile } from "./Tile.svelte";
import type { TileChargeable } from "./Tile.svelte";
import { payTaxManager } from "$lib/states/PayTaxManager.svelte";


export class TaxTile extends Tile implements TileChargeable {
    price: number;

    constructor(id: number, name: string, price: number) {
        super(id, name, "tax");
        this.price = price;
    }

    actionOnLand(player: Player): void {
        console.log("Stayed on Tax Tile");
        payTaxManager.show(player, this);
        return;
    }

    payTax(): void {
        if (payTaxManager.isActive()) {
            const { player, tax } = payTaxManager.tax;
            if (player.pay(tax.price)) {
                console.log(`${player.name} paid tax '${tax.price}'`);
            } else {
                console.log(`${player.name} has't enough money to pay tax '${tax.name}'`);
            }
            player.finishTurn();
            payTaxManager.hide();
        }
    }
}
