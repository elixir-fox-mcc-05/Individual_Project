<template>
    <div class="container-fluid">
        <navbar
        ></navbar>
        <mainBody :songs="songs"></mainBody> 
    </div>
</template>

<script>
import navbar from './navbar'
import mainBody from './mainBody'
import axios from 'axios'
export default {
    name : "dashboard",
    components : {
        navbar,
        mainBody,
    },
    props : ['songs'],
    methods : {
    },
    created(){
    }
}
</script>

<style>

</style>