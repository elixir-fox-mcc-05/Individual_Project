<template>
    <div class="text-center fetched">
        <h1>Add New Player</h1>
        <div class="container">
            <form class="form-inline">
                <select name="team" id="team" v-model="team" class="form-control mb-2 mr-sm-2">
                    <option value="" selected disabled>---Choose Team---</option>
                    <option v-for="team in teams" :key="team.code" :value="team.code">{{ team.fullName }}</option>
                </select>
                <select name="position" id="position" v-model="position" class="form-control mb-2 mr-sm-2" v-if="team">
                    <option value="" selected disabled>---Choose Position---</option>
                    <option value="QB">Quarterback</option>
                    <option value="RB">Running Back</option>
                    <option value="WR">Wide Receiver</option>
                    <option value="TE">Tight End</option>
                    <option value="K">Kicker</option>
                    <option value="DEF">Defensive Team</option>
                </select>
                <select name="status" id="status" v-model="status" class="form-control mb-2 mr-sm-2" v-if="position">
                    <option value="" selected disabled>--Choose Status---</option>
                    <option value="Starter">Starter</option>
                    <option value="Bench">Bench</option>
                </select>
            </form>
        </div>
        <div class="player-list-container">
            <PlayerCard
                v-for="player in players"
                :key="player.id"
                :player="player"
                @create="create"
            >
            </PlayerCard>
        </div>
    </div>
</template>

<script>
import PlayerCard from './PlayerCard';
import axios from 'axios';

export default {
    name: 'FetchedPlayer',
    components: {
        PlayerCard
    },
    data() {
        return {
            team: '',
            position: '',
            teams: [],
            players: [],
            status: ''
        }
    },
    methods: {
        getAllTeam() {
            const { access_token } = localStorage;
            axios.get('http://localhost:4000/teams/nfl', {
                headers: {
                    access_token
                }
            })
                .then(res => {
                    this.teams = [];
                    res.data.teams.NFLTeams.forEach(team => {
                        this.teams.push(team);
                    })
                })
                .catch(err => {
                    console.log(err);
                })
        },
        getNFLPlayer(team, position) {
            const { access_token } = localStorage;
            axios.get(`http://localhost:4000/players/${position}/${team}`, {
                headers: {
                    access_token
                }
            })
                .then(res => {
                    console.log(res);
                    this.players = [];
                    res.data.player.forEach(player => {
                        this.players.push(player);
                    })
                })
                .catch(err => {
                    console.log(err);
                })
        },
        create(newPlayer) {
            newPlayer.status = this.status;
            this.$emit('create', newPlayer)
        }
    },
    watch: {
        team(team) {
            if(this.position) {
                this.getNFLPlayer(team, this.position);
            }
        },
        position(position) {
            this.getNFLPlayer(this.team, position);
        }
    }
}
</script>

<style scoped>
    .fecthed {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
        align-content: flex-start;
        padding: 10px;
        margin-bottom: 20px;
    }

    .player-list-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        align-content: flex-start;
        padding: 10px;
    }
</style>