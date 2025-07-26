<script lang="ts">
    import { game } from "$lib/models/Game.svelte";
</script>

<button class="roll-button" on:click="{() => game.takeTurn()}">
    Roll
</button>

<style>
    .roll-button {
        width: 5rem;
        height: 2.5rem;
    }
</style>
