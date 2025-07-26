<script lang="ts">
    import { game } from "$lib/models/Game.svelte";
</script>

<button on:click="{() => game.takeTurn()}">
    Roll
</button>
