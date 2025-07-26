<script lang="ts">
    import Tile from './Tile.svelte';
    import PlayerPiece from './PlayerPiece.svelte';
    import { boardTiles } from '$lib/data/boardData';
    import { game } from '$lib/models/Game.svelte';
</script>

<div class="board">
    {#each boardTiles as tile (tile.id)}
        <Tile {tile} />
    {/each}

    <!-- Centar ploče -->
    <div class="center">
        
    </div>

    {#each game.players as player (player.id)}
        <PlayerPiece {player} />
    {/each}
</div>

<style>
    .board {
        display: grid;
        grid-template-columns: repeat(11, 1fr);
        grid-template-rows: repeat(11, 1fr);
        width: 100%;
        aspect-ratio: 1;
        border: 2px solid #000;
        position: relative;
    }

    .center {
        grid-column: 2 / 11;
        grid-row: 2 / 11;
        background: #fff;
    }
</style>
