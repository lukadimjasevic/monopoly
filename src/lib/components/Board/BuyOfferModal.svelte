<script lang="ts">
    import { buyOfferManager } from "$lib/states/BuyOfferManager.svelte";

    const offer = $derived(buyOfferManager.isActive() ? buyOfferManager.offer : null);
</script>

{#if offer}
<div class="modal">
    <div class="modal-title">
        <h4>Offer to player <b>{offer.player.name}</b></h4>
    </div>
    <div class="modal-content">
        <h2>{offer.property.name}</h2>
        <p>Price: {offer.price}</p>
        <button onclick={() => offer.property.acceptOffer()}>Buy</button>
        <button onclick={() => offer.property.cancelOffer()}>Skip</button>
    </div>
</div>
{/if}
