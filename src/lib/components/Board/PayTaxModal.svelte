<script lang="ts">
    import { payTaxManager } from "$lib/states/PayTaxManager.svelte";

    const tax = $derived(payTaxManager.isActive() ? payTaxManager.tax : null);
</script>

{#if tax}
    <div class="modal">
        <div class="modal-title">
            <h4>Tax to player <b>{tax.player.name}</b></h4>
        </div>
        <div class="modal-content">
            <h2>{tax.tax.name}</h2>
            <p>Tax price: {tax.price}</p>
            <button onclick={() => tax.tax.payTax()}>Pay</button>
        </div>
    </div>
{/if}
