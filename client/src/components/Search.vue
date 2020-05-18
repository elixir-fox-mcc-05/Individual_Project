<template>
        <div class="card search-container">
            <div class="card-header text-white  text-center">
                {{ movie.Title }}
            </div>
            <div class="card-body">
                <img :src="this.movie.Poster" alt="">
                <div class="mini-body ml-4">
                    <p>Rating: <i class="fas fa-star mr-2"></i>{{ movie.Ratings[0].Value }}</p>
                    <p>Released Year: {{ movie.Year }}</p>
                    <button @click.prevent="showDetails" class="btn bg-secondary text-white">Read More </button>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: "Search",
    props: ['movie'],
    methods: {
        showDetails() {
            const Swal = require('sweetalert2');
            Swal.fire({
            title: 'Overview',
            text: this.movie.Plot,
            imageUrl: this.movie.Poster,
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

    .search-container {
        width: 350px;
        margin: auto;
    }
</style>