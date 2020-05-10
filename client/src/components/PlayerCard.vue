<template>
    <div class="player-card">
        <div class="player-name">
            <h4 v-if="player.displayName">{{ player.displayName }}</h4>
            <h4 v-if="player.name">{{ player.name }}</h4>
        </div>
        <div class="player-del" v-if="owned">
            <i class="fas fa-trash-alt" @click="releasePlayer(player.id)"></i>
        </div>
        <div class="player-position">
            <h5>{{ player.position }}</h5>
        </div>
        <div class="player-team">
            <h5>{{ player.team }}</h5>
        </div>
        <div class="player-add">
            <button v-if="!owned" class="btn btn-primary btn-sm" @click="create">Add to My Team</button>
            <h5 v-if="owned">{{ player.status }}</h5>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'PlayerCard',
    props: ['player', 'owned'],
    methods: {
        create() {
            let newPlayer = {
                name: this.player.displayName,
                position: this.player.position,
                team: this.player.team
            };
            this.$emit('create', newPlayer);
        },
        releasePlayer(id) {
            const { access_token } = localStorage;
            axios.delete(`https://infinite-caverns-50726.herokuapp.com/players/${id}` , {
                headers: {
                    access_token
                }
            })
                .then(res => {
                    this.$emit('refresh');
                })
                .catch(err => {
                    this.$emit('error', err);
                })
        }
    }
}
</script>

<style>
    .player-card {
        width: 260px;
        background-color: rgb(215, 217, 240);
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, minmax(15px, 32px));
        margin: 5px;
        padding: 5px;
        border-radius: 5px;
        -webkit-box-shadow: -2px 10px 23px -8px rgba(0,0,0,0.75);
        -moz-box-shadow: -2px 10px 23px -8px rgba(0,0,0,0.75);
        box-shadow: -2px 10px 23px -8px rgba(0,0,0,0.75);
    }

    .player-position {
        grid-column: 1/4;
        grid-row: 1/2;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .player-del {
        grid-column: 4/5;
        grid-row: 1/2;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        padding: 3px;
    }

    .player-name {
        grid-column: 1/5;
        grid-row: 2/3;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .player-team {
        grid-column: 1/3;
        grid-row: 3/4;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .player-add {
        grid-column: 3/5;
        grid-row: 3/4;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 1px;
    }

    .fa-trash-alt {
        color: red;
        opacity: 0.5;
    }

    .fa-trash-alt:hover {
        cursor: pointer;
        opacity: 1;
    }
</style>