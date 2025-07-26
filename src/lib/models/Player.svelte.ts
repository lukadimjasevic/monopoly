import { Tile } from "./Tile.svelte";
import { boardTiles } from "$lib/data/boardData";
import { GridUtil } from "$lib/utils/grid";
import type { GridPosition } from "$lib/utils/grid";


export class Player {
    id: number;
    name: string;
    money: number;
    position: number;
    properties: number[];
    inJail: boolean;
    mapPosition: GridPosition;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.money = 1500;
        this.position = 0;
        this.properties = [];
        this.inJail = false;
        this.mapPosition = $state({ col: 1, row: 11 });
    }

    move(steps: number): Tile {
        this.position = (this.position + steps) % 40;
        const newTile = this.getTile();
        this.mapPosition = GridUtil.getPlayerPosition(newTile);
        console.log(`Player position updated: (${this.mapPosition.col}, ${this.mapPosition.row})`);
        return newTile;
    }

    pay(amount: number) {
        this.money -= amount;
    }

    receive(amount: number) {
        this.money += amount;
    }

    buyProperty(tileId: number) {
        this.properties.push(tileId);
    }

    getTile(): Tile {
        return boardTiles.find(tile => tile.id == this.position)!;
    }
}
