<script lang="ts">
    import { buyOffer } from "$lib/states/BuyOffer.svelte";
    import { game } from "$lib/models/Game.svelte";
</script>

{#if buyOffer.isActive()}
<div class="modal">
    <div class="modal-title">
        <h4>Offer to player <b>{buyOffer.player.name}</b></h4>
    </div>
    <div class="modal-content">
        <h2>{buyOffer.tile.name}</h2>
        <p>Price: {buyOffer.tile.price}</p>
        <button on:click={() => game.currentPlayer.actionAcceptOffer()}>Buy</button>
        <button on:click={() => game.currentPlayer.actionCancelOffer()}>Skip</button>
    </div>
</div>
{/if}
