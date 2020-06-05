<template>
    <div>
        <b-jumbotron class="jumbotron bg-custome-text" fluid border-variant="dark">
            <template v-slot:header>Music Fan Library</template>
            <template v-slot:lead>
                Get information about your favorite international musician here !!!
            </template>
        </b-jumbotron>
    </div>
</template>

<script>
export default {
    name: 'Jumbotron',
}
</script>

<style>
    .jumbotron {
        background-image: url(../../assets/black-vinyl-player-145707.jpg);
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    }
    
    .bg-custome-text {
        color: white;
        text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000; 
    }
</style>