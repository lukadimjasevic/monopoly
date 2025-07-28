import type { Player } from "./Player.svelte";
import { Tile } from "./Tile.svelte";
import type { TileOwnable } from "./Tile.svelte";


export class PropertyTile extends Tile implements TileOwnable {
    price: number;
    owner: Player | null;

    constructor(id: number, name: string, price: number) {
        super(id, name, "property");
        this.price = price;
        this.owner = null;
    }
    
    actionOnLand(player: Player): void {
        console.log("Stayed on Property Tile");
        if (this.canBeBought()) {
            // Offer player to buy property
            player.actionMakeOffer(this);
            return;
        }
        if (this.isOwnedBy(player)) {
            // Player lands on their tile
            return;
        } else {
            // Player needs to pay rent
            return;
        }
    }

    private canBeBought(): boolean {
        return this.owner ? false : true;
    }

    private isOwnedBy(player: Player): boolean {
        return this.owner && this.owner.id === player.id ? true : false;
    }
} 
