<template>
        <nav class="navbar navbar-expand-sm navbar-dark  mb-3">
            <div class="container">
                <a @click.prevent="nothing" class="navbar-brand" href="">Moviz<i class="fas fa-play-circle ml-2"></i> </a>
                <ul class="navbar-nav">
                    <!-- <li v-show="isLogin" class="nav-item">
                        <a @click.prevent="$emit('showTvPopular')" class="nav-link" href="">TV Popular</a>
                    </li>
                    <li v-show="isLogin" class="nav-item">
                        <a @click.prevent="$emit('showTvTopRated')" class="nav-link" href="">TV Top Rated</a>
                    </li> -->
                    <!-- <li v-show="isLogin" class="nav-item">
                        <a @click.prevent="$emit('showMoviePopular')" class="nav-link" href="">Movie Popular</a>
                    </li>
                    <li v-show="isLogin" class="nav-item">
                        <a @click.prevent="$emit('showMovieTopRated')" class="nav-link" href="">Movie Top Rated</a>
                    </li> -->
                    <li v-show="!isLogin" class="nav-item">
                        <a @click.prevent="$emit('showRegister')" class="nav-link" href="">Register</a>
                    </li>
                    <li v-show="!isLogin" class="nav-item">
                        <a @click.prevent="$emit('showLogin')" class="nav-link" href="">Login</a>
                    </li>
                    <li v-show="isLogin" class="nav-item dropdown">
                        <a href="" class="nav-link dropdown-toggle" data-toggle="dropdown">TV Series</a>
                        <div class="dropdown-menu bg-dark">
                            <a @click.prevent="$emit('showTvPopular')" class="nav-link" href="">TV Popular</a>
                            <a @click.prevent="$emit('showTvTopRated')" class="nav-link" href="">TV Top Rated</a>
                        </div>
                    </li>
                    <li v-show="isLogin" class="nav-item dropdown">
                        <a href="" class="nav-link dropdown-toggle" data-toggle="dropdown">Movies</a>
                        <div class="dropdown-menu bg-dark">
                            <a @click.prevent="$emit('showMovieTopRated')" class="nav-link" href="">Movie Top Rated</a>
                            <a @click.prevent="$emit('showMoviePopular')" class="nav-link" href="">Movie Popular</a>
                        </div>
                    </li>
                    <li v-show="isLogin" class="nav-item">
                        <a @click.prevent="$emit('logout')" class="nav-link" href="">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
</template>

<script>
export default {
    name: "Navbar",
    props: ['isLogin'],
    methods: {
        nothing() {}
    }
}
</script>

<style>
    .navbar {
        background-color: rgba(30, 32, 40, 0.8) !important;
    }
    .main-header {
        display: flex;
    }
</style>