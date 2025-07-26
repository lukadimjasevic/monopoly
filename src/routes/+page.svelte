<script lang="ts">
    import Board from '$lib/components/Board/Board.svelte';
    import RollButton from '$lib/components/Controls/RollButton.svelte';
    /*import PlayerInfo from '$lib/components/Player/PlayerInfo.svelte';*/
</script>

<main class="container">
    <h1>Monopoly</h1>

    <Board />

    <section class="sidebar">
        <!--PlayerInfo /-->
        <RollButton />
    </section>
</main>

<style>
    .container {
        display: flex;
        gap: 2rem;
    }

    .sidebar {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>
