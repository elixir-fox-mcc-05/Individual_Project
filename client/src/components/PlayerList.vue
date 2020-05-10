<template>
    <div class="player-list-container">
        <OwnedPlayer
            ref="owned"
            :teams="teams"
            @team="getId"
            @reset="$emit('reset')"
            @error="error"
        >
        </OwnedPlayer>
        <FetchedPlayer
            ref="fetch"
            @create="addPlayer"
            @error="error"
            @reset="$emit('reset')"
        >
        </FetchedPlayer>
        
    </div>
</template>

<script>
import PlayerCard from './PlayerCard';
import OwnedPlayer from './OwnedPlayer';
import FetchedPlayer from './FetchedPlayer';
import axios from'axios';

export default {
    name: 'PlayerList',
    props: ['teams'],
    components: {
        PlayerCard, OwnedPlayer, FetchedPlayer
    },
    data() {
        return {
            players: [],
            selectPlayer: '',
            position: '',
            teamId: ''
        }
    },
    methods: {
        triggerGetTeam() {
            this.$refs.fetch.getAllTeam();
        },
        getId(id) {
            this.teamId = id;
        },
        addPlayer(newPlayer) {
            const { name, position, team, status } = newPlayer;
            const { access_token } = localStorage;
            axios.post(`http://localhost:4000/players/${this.teamId}`, {
                name,
                position,
                team,
                status
            }, {
                headers: {
                    access_token
                }
            })
                .then(res => {
                    this.$refs.owned.getPlayer(this.teamId);
                    this.$emit('reset');
                })
                .catch(err => {
                    this.$emit('error', err);
                })
        },
        resetList() {
            this.$refs.owned.resetMyTeam();
        },
        error(err) {
            this.$emit('error', err);
        }
    } 
}


</script>

<style scoped>
    /* .player-list-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
    } */
</style>