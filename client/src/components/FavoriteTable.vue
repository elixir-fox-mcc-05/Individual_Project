<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10 offset-md-0">
                <h5 class="text-center">Welcome back {{loginName}}</h5>
                <div v-if="favoriteList.length !== 0" class="mb-2">
                    <h5 >Your Favorite Musician</h5>
                    <table class="table table-striped table-dark">
                        <tbody class="text-center" v-for="(favorite, i) in favoriteList" :key="i">
                            <tr>
                                <th scope="row">{{ i+1 }}.</th>
                                <td><strong>{{ favorite.name }}<strong></td>
                                <td>
                                    <button class="btn btn-secondary btn-sm" type="button" @click.prevent="deleteFavorite(favorite.id)">
                                        REMOVE
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-else class="mb-2">
                   <h5 class="text-center">You Don't Have Favorite Musician</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'FavoriteTable',
    props: ['favoriteList'],
    data() {
        return {
            loginName: localStorage.name,
        }
    },
    methods: {
        deleteFavorite (favoriteId) {
            this.$emit('deleteFavorite', favoriteId)
        }
    }
}
</script>

<style>
</style>