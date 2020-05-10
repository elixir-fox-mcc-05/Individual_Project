<template>
    <div class="col-3 mb-3">
        <div class="card">
            <div class="card-header text-white  text-center">
                {{ movie.original_name? movie.original_name : movie.title }}
            </div>
            <div class="card-body">
                <img :src="url" alt="">
                <div class="mini-body ml-4">
                    <p>Rating: <i class="fas fa-star mr-2"></i>{{ movie.vote_average }}</p>
                    <p>Released Year: {{ getYear() }}</p>
                    <button @click.prevent="showDetails" class="btn bg-secondary text-white">Read More </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['movie', 'title'],
    data() {
        return {
            url: `http://image.tmdb.org/t/p/w185${this.movie.poster_path}`,
            year: ''
        }
    },
    methods: {
        getYear() {
            if (this.movie.release_date) {
                const tahun = this.movie.release_date.split('-');
                this.year = tahun[0];
                return this.year
            } else {
                const tahun = this.movie.first_air_date.split('-');
                this.year = tahun[0];
                return this.year
            }
        },
        showDetails() {
            const Swal = require('sweetalert2');
            Swal.fire({
            title: 'Overview',
            text: this.movie.overview,
            imageUrl: `http://image.tmdb.org/t/p/w185${this.movie.poster_path}`,
            imageWidth: 200,
            imageHeight: 250,
            imageAlt: 'Custom image',
        })
        }
    }
}
</script>

<style>
    .card {
        background-color: #1E2133 !important;
    }
    .card-body {
        display: flex;
        background-color: #1e1c25;
    }

    .card-body img {
        width: 100px;
        height: 140px;
    }

    .card-body div p {
        color: white;
    }
    .mini-body {
        display: flex;
        flex-direction: column;
        align-content: center;
    }
</style>