import { Board } from "$lib/models/Board.svelte";
import { boardTiles } from "$lib/data/boardData";
import { Player } from "$lib/models/Player.svelte";
import { Game } from "$lib/models/Game.svelte";


const runTestGame = () => {
    console.log("--- Pokretanje testne igre ---");

    const p1 = new Player(1, "Luka");
    const p2 = new Player(2, "Dora");
    const players = [p1, p2];

    const board = new Board(boardTiles);
    const game = new Game(board, players);
  
    game.takeTurn();
    console.log("------------------------------");
    game.takeTurn();
    console.log("------------------------------");
    game.takeTurn();
    console.log("------------------------------");
    game.takeTurn();
}

runTestGame();
