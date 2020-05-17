<template>
<div class="container w-25 bg-white">
    <p>Are you sure want to get rid of this team?</p>
    <div>
        <button class="btn btn-primary btn-sm" @click="$emit('cancel')">no, take me back</button>
        <button class="btn btn-danger btn-sm" @click="deleteTeam(deleted)">yes, its a bad team</button>
    </div>

</div>
</template>

<script>
import axios from'axios'

export default {
    name: 'Warn',
    props: ['deleted'],
    methods: {
        deleteTeam(id) {
            const { access_token } = localStorage;
            axios.delete(`https://infinite-caverns-50726.herokuapp.com/teams/${id}`, {
                headers: {
                    access_token
                }
            })
                .then(res => {
                    this.$emit('reset');
                    this.$emit('clear');
                })
                .catch(err => {
                    this.$emit('error', err);
                    this.$emit('reset');
                })
        }
    }
}
</script>

<style scoped>
    .container {
        width: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 5px;
    }
</style>