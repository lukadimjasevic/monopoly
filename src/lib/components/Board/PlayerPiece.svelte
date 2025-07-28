<script lang="ts">
    import { Player } from "$lib/models/Player.svelte";
    let { player } : {player: Player } = $props();
</script>

<div class="piece" title={player.name}>
    {player.name.charAt(0)}
</div>

<style>
    .piece {
        width: 35px;
        height: 35px;
        box-sizing: border-box;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.6rem;
        padding: 2px;
        border: 2px solid #000;
        border-radius: 50%;
        background: blue;
        color: white;
        z-index: 20;
    }
</style>
