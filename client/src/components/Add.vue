<template>
    <div class="container">
        <form id="add-form" @submit.prevent="addNewTeam">
            <div class="form-group">
                <input type="text" class="form-control" v-model="teamName" placeholder="Team Name">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block">Add New Team</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AddForm',
    props: ['myteam'],
    data() {
        return {
            teamName: ''
        }
    },
    methods: {
        addNewTeam() {
            const { access_token } = localStorage;
            axios.post('http://localhost:4000/teams', {
                name: this.teamName
            }, {
                headers: {
                    access_token
                }
            })
                .then(res => {
                    this.teamName = '';
                    if (this.myteam) {
                        this.$emit('showMine');
                    } else {
                        this.$emit('showAll');
                    }
                })
                .catch(err => {
                    this.errorDetected = true;
                    if(Array.isArray(err.response.data.error)) {
                        let errors = '';
                        err.response.data.error.forEach(e =>  {
                            errors += `${e}, `
                        })
                        this.alertMessage = errors.substring(0, errors.length-2);
                    } else {
                        this.alertMessage = err.response.data.error;
                    }
                })
        }
    }
}
</script>

<style scoped>
    .container {
        width: 90%;
        margin-bottom: 10px;
    }
</style>