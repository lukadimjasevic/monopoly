<script lang="ts">
    import { Player } from "$lib/models/Player.svelte";
    let { player } : {player: Player } = $props();
</script>

<div class="piece" style="grid-row: {player.mapPosition.row}; grid-column: {player.mapPosition.col}" title={player.name}>
    <div>{player.name}</div>
    <div>({player.mapPosition.col}, {player.mapPosition.row})</div>
</div>

<style>
    .piece {
        display: flex;
        align-items: center;
        justify-content: center;
        background: blue;
        color: white;
        border: 2px solid #000;
        border-radius: 50%;
        font-size: 0.75rem;
        padding: 0.5em;
    }
</style>
