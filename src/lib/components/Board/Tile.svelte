<script lang="ts">
    import type { Tile } from "$lib/models/Tile.svelte";
    import { GridUtil } from "$lib/utils/GridUtil";
    import { TypeGuardUtil } from "$lib/utils/TypeGuardUtil";
    import PlayerPiece from "./PlayerPiece.svelte";
    let { tile } : { tile: Tile } = $props();
  
    const { col, row } = GridUtil.getGridPosition(tile);
    let players = $derived(tile.players);
</script>


<div class="tile" style="grid-row: {row}; grid-column: {col};">
    <div class="tile-info">
        <div>
            <strong>{tile.name}</strong>
        </div>
        {#if TypeGuardUtil.isChargeableTile(tile)}
            <div>
                <span>{tile.price}€</span>
            </div>
        {/if}
    </div>
    <div class="player-container">
        {#each players as player}
            <PlayerPiece {player} />
        {/each}
    </div>
</div>

<style>
    .tile {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #999;
        background: #eee;
        overflow: hidden;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        position: relative;
    }

    .tile-info {
        position: absolute;   
        top: 0;
        text-align: center;
        z-index: 15;
    }

    .player-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 1px;
        justify-content: center;
        align-items: center;
    }
</style>
