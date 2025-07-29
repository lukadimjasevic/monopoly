import type { Tile } from "./Tile.svelte";
import { boardTiles } from "$lib/data/boardData";
import type { PropertyTile } from "./PropertyTile.svelte";

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

    move(steps: number): Tile {
        this.position = (this.position + steps) % 40;
        return this.tile;
    }

    pay(amount: number): boolean {
        if (this.money >= amount) {
            this.money -= amount;
            return true;
        }
        return false;
    }

    actionMoving(): void {
        this.status = "moving";
    }

    actionWaiting(): void {
        this.status = "waiting";
    }

    finishTurn(): void {
        this.status = "done";
    }
}
