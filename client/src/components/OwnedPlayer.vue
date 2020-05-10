<template>
    <div class="container">
        <select name="team" id="team" v-model="myTeam" class="form-control">
            <option value="" selected disabled>---CHOOSE YOUR TEAM---</option>
            <option :value="team.id" v-for="team in teams" :key="team.id">{{ team.name }}</option>
        </select>
        <div class="owned">
            <PlayerCard
                v-for="player in players" 
                :key="player.id" 
                :player="player" 
                :owned="owned" 
                @refresh="refresh"
                @error="error"
            ></PlayerCard>
        </div>
    </div>
</template>

<script>
import PlayerCard from './PlayerCard'
import axios from 'axios'

export default {
    name: 'OwnedPlayer',
    props: ['teams'],
    components: {
        PlayerCard
    },
    data() {
        return {
            myTeam: '',
            players: [],
            owned: true
        }
    },
    methods: {
        getPlayer(id) {
            const { access_token } = localStorage;
            axios.get(`http://localhost:4000/teams/${id}`, {
                headers: {
                    access_token
                }
            })
            .then(res => {
                this.players = [];
                res.data.team.Players.forEach(player => {
                    this.players.push(player);
                })
            })
            .catch(err => {
                this.$emit('error', err);
            })
        },
        refresh() {
            console.log('refresh');
            this.getPlayer(this.myTeam);
            this.$emit('reset');
        },
        resetMyTeam() {
            this.myTeam = '';
        },
        error(err) {
            this.$emit('error', err);
        }
    },
    watch: {
        myTeam(id) {
            this.getPlayer(id);
            this.$emit('team', id);
        }
    }
}
</script>

<style>
    .owned {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: flex-start;
        margin-top: 8px;
        margin-bottom: 40px;
    }
</style>