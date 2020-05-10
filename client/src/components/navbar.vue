<template>
    <div>
        <div class="navbar-fixed">
            <nav class="blue darken-3">
                <div class="container">
                    <div class="nav-wrapper">
                        <a href="#!" class="brand-logo">Muvi</a>
                        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                        <ul class="right hide-on-med-and-down" v-if="currentPage == 'dashboardPage'">
                            <li><a href="">Dashboard</a></li>
                            <li><a @click.prevent="logoutUser">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <ul class="sidenav" id="mobile-demo" v-if="currentPage == 'dashboardPage'">
                <li><a href="">Dashboard</a></li>
                <li><a href="">Logout</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navbar',
    props: ['currentPage'],
    methods: {
        logoutUser() {
            this.$emit('logoutUser')
        }
    }
}
</script>

<style>

</style>