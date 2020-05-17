<template>
    <div class="team-list-container">
        <TeamCard 
            v-for="team in teams" 
            :key="team.id" 
            :team="team" 
            @delete="triggerDeletion" 
            @details="details"
        >
        </TeamCard>
    </div>
</template>

<script>
import TeamCard from'./TeamCard';

export default {
    name: 'TeamList',
    components: {
        TeamCard
    },
    props: ['teams'],
    methods: {
        triggerDeletion(id) {
            this.$emit('delete', id);
        },
        details(team, name) {
            this.$emit('details', team, name);
        }
    }
}
</script>

<style>
    .team-list-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        align-content: flex-start;
        padding: 10px;
    } 
</style>