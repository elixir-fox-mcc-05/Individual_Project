<template>
    <div class="container-fluid">
        <navbar></navbar>
        <mainBody></mainBody> 
    </div>
</template>

<script>
import navbar from './navbar'
import mainBody from './mainBody'
export default {
    name : "dashboard",
    components : {
        navbar,
        mainBody,
    }
}
</script>

<style>

</style>