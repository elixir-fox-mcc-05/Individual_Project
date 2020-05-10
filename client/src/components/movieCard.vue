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
        // getDetail() {
        //     axios({
        //         method: 'get',
        //         url: `${this.baseUrl}/dashboard/${code}/${this.list.id}`,
        //         headers: {
        //             token: localStorage.token
        //         }
        //     })
        //         .then(response => {
        //             console.log(response.data.Detail)
        //             this.detail = response.data.Detail
        //         })
        //         .catch(err => {
        //             console.log(err)
        //         })
        // }
        seeDetail(list) {
            this.$emit('seeDetail', list)
        }
    },
    created() {
        // this.getDetail()
    }
}
</script>

<style>

</style>