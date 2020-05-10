<template>
    <div>
        <div v-if="currentPage == 'landingPage'">
            <landingPage
                @loginUser="loginUser"
                :currentPage="currentPage"
            >

            </landingPage>
        </div>
        <div v-else-if="currentPage == 'dashboardPage'">
            <dashboardPage
                :moviePopular="moviePopular"
                :movieTopRated="movieTopRated"
                :movieNowPlaying="movieNowPlaying"
                :tvPopular="tvPopular"
                :tvTopRated="tvTopRated"
                :tvNowPlaying="tvNowPlaying"
                :baseUrl='baseUrl'
                :currentPage="currentPage"
                @logoutUser="logoutUser"
            >

            </dashboardPage>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import landingPage from './pages/landingPage'
import dashboardPage from './pages/dashboardPage'

export default {
    name: 'App',
    components: {
        landingPage, dashboardPage
    },
    data() {
        return {
            baseUrl: 'http://localhost:3000',
            currentPage: 'landingPage',
            moviePopular: {
                page: '1',
                data: []
            },
            movieTopRated: {
                page: '1',
                data: []
            },
            movieNowPlaying: {
                page: '1',
                data: []
            },
            tvPopular: {
                page: '1',
                data: []
            },
            tvTopRated: {
                page: '1',
                data: []
            },
            tvNowPlaying: {
                page: '1',
                data: []
            },
            movieDetail: [],
            tvSeriesDetail: []

        }
    },
    methods: {
        loginUser(user) {
            let {email, password} = user
            axios({
                method: 'post',
                url: `${this.baseUrl}/users/login`,
                data: {
                    email,
                    password
                }
            })
                .then(response => {
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('currentUserId', response.data.user.id)
                    localStorage.setItem('currentUserName', response.data.user.name)
                    this.currentPage = "dashboardPage"
                })
                .catch(err => {
                    console.log(err)
                })
        },
        fetchPopularMovie() {
            axios({
                method: 'post',
                url: `${this.baseUrl}/dashboard/movie/popular`,
                data: {
                    page: this.moviePopular.page
                },
                headers: {
                    token: localStorage.token
                }
            })
                .then(response => {
                    this.moviePopular.data = response.data.PopularMovieList.results
                })
                .catch(err => {
                    console.log(err)
                })
        },
        fetchTopRatedMovie() {
            axios({
                method: 'post',
                url: `${this.baseUrl}/dashboard/movie/top_rated`,
                data: {
                    page: this.movieTopRated.page
                },
                headers: {
                    token: localStorage.token
                }
            })
                .then(response => {
                    this.movieTopRated.data = response.data.TopRatedMovieList.results
                })
                .catch(err => {
                    console.log(err)
                })
        },
        fetchNowPlayingMovie() {
            axios({
                method: 'post',
                url: `${this.baseUrl}/dashboard/movie/now_playing`,
                data: {
                    page: this.movieNowPlaying.page
                },
                headers: {
                    token: localStorage.token
                }
            })
                .then(response => {
                    this.movieNowPlaying.data = response.data.NowPlayingMovieList.results
                })
                .catch(err => {
                    console.log(err)
                })
        },
        getMovieDetail(id) {
            axios({
                method: 'get',
                url: `${this.baseUrl}/dashboard/movie/${id}`,
                headers: {
                    token: localStorage.token
                }
            })
                .then(response => {
                    this.movieDetail = response.data.MovieDetail
                })
                .catch(err => {
                    console.log(err)
                })
        },
        fetchPopularTvSeries() {
            axios({
                method: 'post',
                url: `${this.baseUrl}/dashboard/tv/popular`,
                data: {
                    page: this.tvPopular.page
                },
                headers: {
                    token: localStorage.token
                }
            })
                .then(response => {
                    this.tvPopular.data = response.data.PopularTvSeriesList.results
                })
                .catch(err => {
                    console.log(err)
                })
        },
        fetchTopRatedTvSeries() {
            axios({
                method: 'post',
                url: `${this.baseUrl}/dashboard/tv/top_rated`,
                data: {
                    page: this.tvTopRated.page
                },
                headers: {
                    token: localStorage.token
                }
            })
                .then(response => {
                    this.tvTopRated.data = response.data.TopRatedTvSeriesList.results
                })
                .catch(err => {
                    console.log(err)
                })
        },
        fetchNowPlayingTvSeries() {
            axios({
                method: 'post',
                url: `${this.baseUrl}/dashboard/tv/now_playing`,
                data: {
                    page: this.tvNowPlaying.page
                },
                headers: {
                    token: localStorage.token
                }
            })
                .then(response => {
                    this.tvNowPlaying.data = response.data.NowPlayingTvSeriesList.results
                })
                .catch(err => {
                    console.log(err)
                })
        },
        getTvSeriesDetail(id) {
            axios({
                method: 'get',
                url: `${this.baseUrl}/dashboard/tv/${id}`,
                headers: {
                    token: localStorage.token
                }
            })
                .then(response => {
                    this.tvSeriesDetail = response.data.TvSeriesDetail
                })
                .catch(err => {
                    console.log(err)
                })
        },
        logoutUser() {
            localStorage.clear()
            this.currentPage = 'landingPage'
        }
    },
    created() {
        if(localStorage.token) {
            this.currentPage = 'dashboardPage'
        } else {
            this.currentPage = 'landingPage'
        }
        this.fetchPopularMovie()
        this.fetchTopRatedMovie()
        this.fetchNowPlayingMovie()
        this.fetchPopularTvSeries()
        this.fetchTopRatedTvSeries()
        this.fetchNowPlayingTvSeries()
    }
}
</script>

<style>

</style>