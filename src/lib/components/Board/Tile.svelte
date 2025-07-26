<script lang="ts">
    import type { Tile } from "$lib/models/Tile.svelte";
    import { GridUtil } from "$lib/utils/grid";
    import { TypeGuardUtil } from "$lib/utils/typeGuard";
    let { tile } : { tile: Tile } = $props();
  
    const { col, row } = GridUtil.getGridPosition(tile);
</script>

<div class="tile" style="grid-row: {row}; grid-column: {col};">
    <div>
        <strong>{tile.name}</strong><br/>
        {#if TypeGuardUtil.isBuyableTile(tile)}
            {tile.price}€
        {/if}
    </div>
</div>

<style>
    .tile {
        font-size: 0.7rem;
        text-align: center;
        border: 1px solid #555;
        background: #ddd;
    }
</style>
