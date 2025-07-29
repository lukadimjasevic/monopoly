import type { Player } from "./Player.svelte";
import { Tile } from "./Tile.svelte";
import type { TileOwnable } from "./Tile.svelte";
import { buyOfferManager } from "$lib/states/BuyOfferManager.svelte";


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
            buyOfferManager.show(player, this);
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

    acceptOffer(): void {
        if (buyOfferManager.isActive()) {
            const { player } = buyOfferManager.offer;
            if (this.buy(player)) {
                console.log(`${player.name} purchased property '${this.name}'`);
            } else {
                console.log(`${player.name} has't enough money to buy '${this.name}'`);
            }
            player.finishTurn();
            buyOfferManager.hide();
        }
    }

    cancelOffer(): void {
        if (buyOfferManager.isActive()) {
            buyOfferManager.offer.player.finishTurn();  
            buyOfferManager.hide();
        }
    }

    buy(player: Player): boolean {
        if (player.pay(this.price)) {
            this.owner = player;
            return true;
        }
        return false;
    }

    private canBeBought(): boolean {
        return this.owner ? false : true;
    }

    private isOwnedBy(player: Player): boolean {
        return this.owner && this.owner.id === player.id ? true : false;
    }
} 
