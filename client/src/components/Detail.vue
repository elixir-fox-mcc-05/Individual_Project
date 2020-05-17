<template>
    <div class="bg-light details">
        <div class="team-name">
            <h3>{{ teamName }}</h3>
        </div>
        <div class="starter">
            <h3>Start</h3>
            <MiniCard
             v-for='player in starter' :key="player.id" :player="player"
            >
            </MiniCard>
        </div>
        <div class="bench">
            <h3>Sit</h3>
            <MiniCard
             v-for='player in bench' :key="player.id" :player="player"
            >
            </MiniCard>
        </div>
        <div class="enough-seen">
            <button class="btn btn-primary btn-sm" @click="$emit('cancel')">Close</button>
        </div>
    </div>
</template>

<script>
import MiniCard from './PlayerMiniCard';
export default {
    name: 'Detail',
    components: {
        MiniCard
    },
    props: ['starter', 'bench', 'teamName']
}
</script>

<style scoped>
    .details {
        display: grid;
        padding: 15px;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, minmax(30px, auto));
        background-color: grey;
        width: 75%;
    }

    .team-name {
        grid-column: 1/3;
        grid-row: 1/2;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .starter {
        grid-column: 1/2;
        grid-row: 2/3;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .bench {
        grid-column: 2/3;
        grid-row: 2/3;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .enough-seen {
        grid-column: 1/3;
        grid-row: 3/4;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>