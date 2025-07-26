import type { Player } from "./Player.svelte";

export type TileType = 'start' | 'property' | 'tax' | 'chance' | 'community' |'jail' | 'goToJail' | 'parking';

export interface ITile {
    id: number;
    name: string;
    type: TileType;
}

export interface TileBoughtableBehavior extends ITile {
    price: number;
    owner: Player | null;

    buy(player: Player): void;
}

export abstract class Tile implements ITile {
    id: number;
    name: string;
    type: TileType;

    constructor(id: number, name: string, type: TileType) {
        this.id = id;
        this.name = name;
        this.type = type;
    }

    abstract actionOnLand(player: Player): void;
}
