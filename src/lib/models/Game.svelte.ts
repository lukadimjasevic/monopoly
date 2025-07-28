import { Board } from "./Board.svelte";
import { Player } from "./Player.svelte";
import { boardTiles } from "$lib/data/boardData";

export type GameStatus = "notStarted" | "inProgress" | "waitingForPlayer" | "finished";


export class Game {
    board: Board;
    players: Player[];
    currentPlayerIndex: number = 0;
    status: GameStatus = "notStarted";

    constructor(board: Board, players: Player[]) {
        this.board = board;
        this.players = players;
        this.movePlayersToStart();
        this.setStartingPlayer();
        this.start();
    }

    get currentPlayer(): Player {
        return this.players[this.currentPlayerIndex];
    }

    get nextPlayer(): Player {
        const pos = (this.currentPlayerIndex + 1) % this.numOfPlayers;
        return this.players[pos];
    }

    get numOfPlayers(): number {
        return this.players.length;
    }

    rollDice(): [number, number] {
        const die1 = Math.ceil(Math.random() * 6);
        const die2 = Math.ceil(Math.random() * 6);
        return [die1, die2];
    }

    nextTurn() {
        if (this.currentPlayer.waitingToMove) {
            this.currentPlayer.actionMoving();

            // Get new position 
            const [die1, die2] = this.rollDice();

            // Move player to new position
            const tile = this.board.movePlayerToTile(this.currentPlayer, die1 + die2);

            // Complete the action on current land
            tile.actionOnLand(this.currentPlayer);
            return;
        }

        if (this.currentPlayer.hasFinishedTurn) {
            this.currentPlayer.actionWaiting();
            this.setNextPlayer();
            this.nextTurn();
            return;
        }

        console.log(`Player '${this.currentPlayer.name}' is still on move.`);
        return;
    }

    setNextPlayer() {
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.numOfPlayers;
    }

    private movePlayersToStart(): void {
        if (this.status !== "notStarted") return;
        const startTile = this.board.tiles.find(t => t.type === "start");
        if (startTile) {
            startTile.players = this.players;
        }
        return;
    }

    private setStartingPlayer(): void {
        if (this.status !== "notStarted") return;
        const randomPlayerPos = Math.floor(Math.random() * this.numOfPlayers);
        this.currentPlayerIndex = randomPlayerPos;
        return;
    }

    private start(): void {
        if (this.status !== "notStarted") return;
        this.status = "inProgress";
    }
}

const board = new Board(boardTiles);

const player1 = new Player(1, "John");
const player2 = new Player(2, "Rick");
const player3 = new Player(3, "Mark");
const players = [player1, player2, player3];


export const game = new Game(board, players);
