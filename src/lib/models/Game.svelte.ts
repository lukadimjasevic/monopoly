import { Board } from "./Board.svelte";
import { Player } from "./Player.svelte";
import { Tile } from "./Tile.svelte";
import { boardTiles } from "$lib/data/boardData";


export class Game {
    board: Board;
    players: Player[];
    currentPlayerIndex: number = 0;

    constructor(board: Board, players: Player[]) {
        this.board = board;
        this.players = players;
    }

    get currentPlayer(): Player {
        return this.players[this.currentPlayerIndex];
    }

    private rollDice(): [number, number] {
        const die1 = Math.ceil(Math.random() * 6);
        const die2 = Math.ceil(Math.random() * 6);
        return [die1, die2];
    }

    takeTurn(): Tile {
        // Get new position 
        const [die1, die2] = this.rollDice();
        console.log(`${this.currentPlayer.name} je bacio kocke i dobio je ${die1 + die2}`)

        // Move player to new position
        const tile = this.board.movePlayerToTile(this.currentPlayer, die1 + die2);
        console.log(`${this.currentPlayer.name} staje na "${tile.name}"`)

        // Complete the action on current land
        tile.actionOnLand(this.currentPlayer);

        // Switch to new player
        this.nextPlayer();

        return tile;
    }

    private nextPlayer() {
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    }
}

const board = new Board(boardTiles);

const player1 = new Player(1, "John");
const player2 = new Player(2, "Rick");
const players = [player1, player2]


export const game = new Game(board, players);
