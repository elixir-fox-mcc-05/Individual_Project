<template>
    <div class="col s12 m3">
        <div class="card hoverable blue darken-3 white-text">
            <div class="card-image">
                <img :src="imgUrl">
            </div>
                <div class="card-content center">
                <button class="btn" @click.prevent="seeDetail(list)">See Detail</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'movieCard',
    props: ['list', 'code', 'baseUrl'],
    data() {
        return {
            imgUrl: `https://image.tmdb.org/t/p/w500${this.list.poster_path}`,
            detail: '',
        }
    },
    methods: {
        seeDetail(list) {
            this.$emit('seeDetail', list)
        }
    }
}
</script>

<style>

</style>