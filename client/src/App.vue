<template>
    <div>
        <div v-if="currentPage == 'landingPage'">
            <landingPage>

            </landingPage>
        </div>
        <div v-else-if="currentPage == 'dashboardPage'">
            <dashboardPage>

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
            currentPage: 'landingPage',
        }
    },
    created() {
        if(localStorage.token) {
            this.currentPage = 'dashboardPage'
        } else {
            this.currentPage = 'landingPage'
        }
    }
}
</script>

<style>

</style>