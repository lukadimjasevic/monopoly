<script lang="ts">
    import Board from '$lib/components/Board/Board.svelte';
    /*import PlayerInfo from '$lib/components/Player/PlayerInfo.svelte';*/
</script>

<main class="container">
    <Board />

    <section class="sidebar">
        <!--PlayerInfo /-->
    </section>
</main>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .sidebar {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>
