import type { Player } from "./Player.svelte";

export type TileType = 'start' | 'property' | 'tax' | 'chance' | 'community' |'jail' | 'goToJail' | 'parking';

export interface ITile {
    id: number;
    name: string;
    type: TileType;
}

export interface TileChargeable extends ITile {
    price: number;
}

export interface TileOwnable extends TileChargeable {
    owner: Player | null;
}

export abstract class Tile implements ITile {
    id: number;
    name: string;
    type: TileType;
    players: Player[]; // Players on this Tile

    constructor(id: number, name: string, type: TileType) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.players = $state([]);
    }

    abstract actionOnLand(player: Player): void;

    addPlayer(player: Player): Player[] {
        this.players = [...this.players, player];
        return this.players;
    }

    removePlayer(player: Player): Player[] {
        this.players = this.players.filter(p => p.id != player.id);
        return this.players;
    }
}
