<script lang="ts">
    import { game } from "$lib/models/Game.svelte";

    const getWaitingPlayer = () => {
        if (game.currentPlayer.status === "waiting")
            return game.currentPlayer;
        return game.nextPlayer;
    }
</script>

{#if game.currentPlayer.status === "waiting" || game.currentPlayer.status === "done"}
<div>
    <h2>Waiting {getWaitingPlayer().name} to roll dice...</h2>
</div>
{/if}
