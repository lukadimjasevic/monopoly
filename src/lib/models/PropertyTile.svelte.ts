import type { Player } from "./Player.svelte";
import { Tile } from "./Tile.svelte";
import type { TileBoughtableBehavior } from "./Tile.svelte";


export class PropertyTile extends Tile implements TileBoughtableBehavior {
    price: number;
    owner: Player | null;

    constructor(id: number, name: string, price: number) {
        super(id, name, "property");
        this.price = price;
        this.owner = null;
    }

    isBuyable(): this is PropertyTile {
        return true;
    }

    buy(player: Player): void {
        // TODO Implement
        return;
    }
    
    actionOnLand(player: Player): void {
        // TODO Implement
        return;
    }
} 
