<template>
    <div class="grey darken-4 grey-text text-lighten-4">
        <NavbarSection>

        </NavbarSection>

        <div class="center">
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
                    <h5><a>Popular Movies</a></h5>
                </div>
                <div class="col m4 s12">
                    <h5><a>Top Rated Movies</a></h5>
                </div>
                <div class="col m4 s12">
                    <h5><a>Now Playing</a></h5>
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
                    <h5><a>Popular TV Series</a></h5>
                </div>
                <div class="col m4 s12">
                    <h5><a>Top Rated TV Series</a></h5>
                </div>
                <div class="col m4 s12">
                    <h5><a>Now Playing<a></h5>
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

export default {
    name: 'dashboardPage',
    components: {
        NavbarSection, FooterSection
    }
}
</script>

<style>

</style>