import type { Tile } from "./Tile.svelte";
import { boardTiles } from "$lib/data/boardData";
import type { PropertyTile } from "./PropertyTile.svelte";
import { buyOffer } from "$lib/states/BuyOffer.svelte";

export type PlayerStatus = "waiting" | "moving" | "done";


export class Player {
    id: number;
    name: string;
    money: number = 1500;
    position: number = 0;
    inJail: boolean = false;
    status: PlayerStatus = $state("waiting");

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    get waitingToMove(): boolean {
        return this.status === "waiting";
    }

    get hasFinishedTurn(): boolean {
        return this.status === "done";
    }

    get tile(): Tile {
        return boardTiles.find(tile => tile.id == this.position)!;
    }

    actionMoving() {
        this.status = "moving";
    }

    actionWaiting() {
        this.status = "waiting";
    }

    actionMakeOffer(tile: PropertyTile): void {
        buyOffer.set(this, tile);
    }

    actionAcceptOffer(): void {
        const property = buyOffer.tile;
        if (property) {
            if (this.buy(property)) {
                console.log(`${this.name} purchased property '${property.name}'`);
            } else {
                console.log(`${this.name} has't enough money to buy '${property.name}'`);
            }
        }
        buyOffer.clear();
        this.finishTurn();
    }

    actionCancelOffer(): void {
        buyOffer.clear();
        this.finishTurn();
    }

    move(steps: number): Tile {
        this.position = (this.position + steps) % 40;
        return this.tile;
    }

    private buy(property: PropertyTile): boolean {
        if (this.money >= property.price) {
            this.money -= property.price;
            property.owner = this;
            return true;
        }
        return false;
    }

    private finishTurn() {
        this.status = "done";
    }
}
