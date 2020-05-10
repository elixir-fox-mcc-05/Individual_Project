<template>
    <div class="team-card">
        <div class="team-name">
            <h3>{{ team.name }}</h3>
        </div>
        <div class="team-del">
            <i class="fas fa-trash-alt" @click="triggerDeletion(team.id)"></i>
        </div>
        <div class="team-owner">
            Manager: {{ team.User.name }}
        </div>
        <div class="team-size">
            <p>Team Size: {{ team.number_of_player }} of 14</p>
        </div>
        <div class="team-detail">
            <button class="btn btn-primary btn-sm" @click="details">Show Detail</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TeamCard',
    props: ['team'],
    methods: {
        triggerDeletion(id) {
            this.$emit('delete', id);
        },
        details() {
            this.$emit('details', this.team.Players, this.team.name);
        }
    }
}
</script>

<style scoped>
    .team-card {
        width: 350px;
        background-color: rgb(215, 217, 240);
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, minmax(30px, auto));
        margin: 5px;
        padding: 5px;
        border-radius: 5px;
    }

    .team-name {
        grid-column: 1/4;
        grid-row: 1/2;
        display: flex;
        justify-content: flex-start;
        align-content: center;
    }

    .team-del {
        grid-column: 4/5;
        grid-row: 1/2;
        display: flex;
        justify-content: flex-end;
        align-content: flex-start;
        padding: 5px;
    }
    .team-owner {
        grid-column: 1/5;
        grid-row: 2/3;
        display: flex;
        justify-content: flex-start;
        align-content: center;
    }

    .team-size {
        grid-column: 1/3;
        grid-row: 3/4;
        display: flex;
        justify-content: flex-start;
        align-content: center;
    }

    .team-detail {
        grid-column: 3/5;
        grid-row: 3/4;
        display: flex;
        justify-content: flex-end;
        align-content: center;
    }

    .btn {
        padding: 1px;
    }

    .fa-trash-alt {
        color: red;
        opacity: 0.5;
    }

    .fa-trash-alt:hover {
        opacity: 1;
        cursor: pointer;
    }
</style>