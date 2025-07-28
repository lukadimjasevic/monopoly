<script lang="ts">
    import Tile from './Tile.svelte';
    import RollButton from '../Controls/RollButton.svelte';
    import WaitingModal from './WaitingModal.svelte';
    import BuyOfferModal from './BuyOfferModal.svelte';
    import { boardTiles } from '$lib/data/boardData';
</script>

<div class="board">
    {#each boardTiles as tile (tile.id)}
        <Tile {tile}/>
    {/each}

    <div class="center">
        <WaitingModal />
        <BuyOfferModal />
        <RollButton />
    </div>
</div>

<style>
    .board {
        display: grid;
        grid-template-columns: repeat(11, 1fr);
        grid-template-rows: repeat(11, 1fr);
        width: auto;
        height: 100vh;
        aspect-ratio: 1;
        position: relative;
    }

    .center {
        grid-column: 2 / 11;
        grid-row: 2 / 11;
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
</style>
