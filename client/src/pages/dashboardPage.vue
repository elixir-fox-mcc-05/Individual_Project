<template>
    <div class="grey darken-4 white-text">
        <NavbarSection
            @logoutUser="logoutUser"
            :currentPage="currentPage"
        ></NavbarSection>

        <!-- Main Section -->
        <div v-if="currentSection == 'mainSection'" class="center">
            <div class="row">
                <div class="slider" id="sliderDashboardPage">
                    <ul class="slides">
                        <li><img src="https://image.tmdb.org/t/p/original/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg"></li>
                        <li><img src="https://image.tmdb.org/t/p/original/AbRYlvwAKHs0YuyNO6NX9ofq4l6.jpg"></li>
                        <li><img src="https://image.tmdb.org/t/p/original/nRXO2SnOA75OsWhNhXstHB8ZmI3.jpg"></li>
                        <li><img src="https://image.tmdb.org/t/p/original/cfT29Im5VDvjE0RpyKOSdCKZal7.jpg"></li>
                        <li><img src="https://image.tmdb.org/t/p/original/1JkIE4CjscsV5BEmTqWIJ4goKVe.jpg"></li>
                        <li><img src="https://image.tmdb.org/t/p/original/5gPPx16QWx071VAI1M0RAVKJ6tc.jpg"></li>
                    </ul>
                </div>

                <h3>Movies</h3>
                <div class="col m4 s12">
                    <button class="btn" @click.prevent="changeSection('listSection', 'popularMovie')">Popular Movies</button>
                </div>
                <div class="col m4 s12">
                    <button class="btn" @click.prevent="changeSection('listSection', 'topRatedMovie')">Top Rated Movies</button>
                </div>
                <div class="col m4 s12">
                    <button class="btn" @click.prevent="changeSection('listSection', 'nowPlayingMovie')">Now Playing</button>
                </div>
            </div>
            <div class="row">
                <div class="slider" id="sliderDashboardPage">
                    <ul class="slides">
                        <li><img src="https://image.tmdb.org/t/p/original/suopoADq0k8YZr4dQXcU6pToj6s.jpg"></li>
                        <li><img src="https://image.tmdb.org/t/p/original/jC1KqsFx8ZyqJyQa2Ohi7xgL7XC.jpg"></li>
                        <li><img src="https://image.tmdb.org/t/p/original/iWopHyAvuIDjGX10Yc3nn6UEebW.jpg"></li>
                        <li><img src="https://image.tmdb.org/t/p/original/qjUqBVLUPX1Pc4cyYljZfAJHf8N.jpg"></li>
                        <li><img src="https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg"></li>
                        <li><img src="https://image.tmdb.org/t/p/original/dTFnU3EQB79aDM4HnUj06Y9Xbq1.jpg"></li>
                    </ul>
                </div>
                <h3>TV Series</h3>
                <div class="col m4 s12">
                    <button class="btn" @click.prevent="changeSection('listSection', 'popularTv')">Popular TV Series</button>
                </div>
                <div class="col m4 s12">
                    <button class="btn" @click.prevent="changeSection('listSection', 'topRatedTv')">Top Rated TV Series</button>
                </div>
                <div class="col m4 s12">
                    <button class="btn" @click.prevent="changeSection('listSection', 'nowPlayingTv')">Now Playing</button>
                </div>
            </div>
        </div>

        <!-- See-Detail -->
        <div v-if="detail">
            <movieDetail v-if="code == 'movie'" :detail="detail"></movieDetail>
            <tvDetail v-else-if="code == 'tv'" :detail="detail"></tvDetail>
        </div>

        <!-- ListSection -->
        <div v-else-if="listSection == 'popularMovie'">
            <h2 class="center">Popular Movies</h2>
            <div class="container">
                <div class="row">
                    <movieCard v-for="list in moviePopular.data"
                        :key="list.id"
                        :list="list"
                        :code="code"
                        :baseUrl='baseUrl'
                        @seeDetail="seeDetail"
                    ></movieCard>
                </div>
            </div>
        </div>
        <div v-else-if="listSection == 'topRatedMovie'">
            <h2 class="center">Top Rated Movies</h2>
            <div class="container">
                <div class="row">
                    <movieCard v-for="list in movieTopRated.data"
                        :key="list.id"
                        :list="list"
                        :code="code"
                        :baseUrl='baseUrl'
                        @seeDetail="seeDetail"
                    ></movieCard>
                </div>
            </div>
        </div>
        <div v-else-if="listSection == 'nowPlayingMovie'">
            <h2 class="center">Now Playing Movies</h2>
            <div class="container">
                <div class="row">
                    <movieCard v-for="list in movieNowPlaying.data"
                        :key="list.id"
                        :list="list"
                        :code="code"
                        :baseUrl='baseUrl'
                        @seeDetail="seeDetail"
                    ></movieCard>
                </div>
            </div>
        </div>
        <div v-else-if="listSection == 'popularTv'">
            <h2 class="center">Popular TV Series</h2>
            <div class="container">
                <div class="row">
                    <movieCard v-for="list in tvPopular.data"
                        :key="list.id"
                        :list="list"
                        :code="code"
                        :baseUrl='baseUrl'
                        @seeDetail="seeDetail"
                    ></movieCard>
                </div>
            </div>
        </div>
        <div v-else-if="listSection == 'topRatedTv'">
            <h2 class="center">Top Rated TV Series</h2>
            <div class="container">
                <div class="row">
                    <movieCard v-for="list in tvTopRated.data"
                        :key="list.id"
                        :list="list"
                        :code="code"
                        :baseUrl='baseUrl'
                        @seeDetail="seeDetail"
                    ></movieCard>
                </div>
            </div>
        </div>
        <div v-else-if="listSection == 'nowPlayingTv'">
            <h2 class="center">Now Playing TV Series</h2>
            <div class="container">
                <div class="row">
                    <movieCard v-for="list in tvNowPlaying.data"
                        :key="list.id"
                        :list="list"
                        :code="code"
                        :baseUrl='baseUrl'
                        @seeDetail="seeDetail"
                    ></movieCard>
                </div>
            </div>
        </div>
        
        <FooterSection>

        </FooterSection>
    </div>
</template>

<script>
import NavbarSection from '../components/navbar'
import FooterSection from '../components/footer'
import movieCard from '../components/movieCard'
import movieDetail from '../components/movieDetail'
import tvDetail from '../components/tvDetail'
import axios from 'axios'

export default {
    name: 'dashboardPage',
    components: {
        NavbarSection, FooterSection, movieCard, movieDetail, tvDetail
    },
    props: [
        'moviePopular',
        'movieTopRated',
        'movieNowPlaying',
        'tvPopular',
        'tvTopRated',
        'tvNowPlaying',
        'baseUrl',
        'currentPage'
    ],
    data() {
        return {
            currentSection: 'mainSection',
            listSection: '',
            code: '',
            detail: ''
        }
    },
    methods: {
        changeSection(section, listSection) {
            this.currentSection = section
            this.listSection = listSection
            if(listSection == 'popularMovie' || listSection == 'topRatedMovie' || listSection == 'nowPlayingMovie') {
                this.code = 'movie'
            } else {
                this.code = 'tv'
            }
        },
        seeDetail(list) {
            console.log(this.baseUrl)
            console.log(this.code)
            console.log(list)
            axios({
                method: 'get',
                url: `${this.baseUrl}/dashboard/${this.code}/${list.id}`,
                headers: {
                    token: localStorage.token
                }
            })
                .then(response => {
                    console.log(response.data.Detail)
                    this.detail = response.data.Detail
                })
                .catch(err => {
                    console.log(err)
                })
        },
        logoutUser() {
            this.$emit('logoutUser')
        }
    }
}
</script>

<style>

</style>