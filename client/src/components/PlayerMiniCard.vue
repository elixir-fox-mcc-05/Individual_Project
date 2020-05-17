<template>
    <div class="player-card">
        <div class="player-name">
            <h5>{{ player.name }}</h5>
        </div>
        <div class="player-position">
            <h6>{{ player.position }}</h6>
        </div>
        <div class="player-team">
            <h6>{{ player.team }}</h6>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MiniCard',
    props: ['player']
}
</script>

<style scoped>
    .player-card {
        display: grid;
        padding: 3px;
        width: 250px;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 20px);
        background-color: rgba(204, 204, 204, 0.986);
        margin: 3px 0;
        border-radius: 7px;
    }

    .player-name {
        grid-column: 1/3;
        grid-row: 1/2;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .player-position {
        grid-column: 1/2;
        grid-row: 2/3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .player-team {
        grid-column: 2/3;
        grid-row: 2/3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>