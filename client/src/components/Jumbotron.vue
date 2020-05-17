<template>
    <div class="jumbotron">
        <Register 
            :registered="registered"
            @showLogin="$emit('showLogin')"
            @login="$emit('loginSuccess')"
        ></Register>
        <Login 
            :registered="registered"
            @loginSuccess="$emit('loginSuccess')"
        ></Login>
    </div>
</template>

<script>
import Register from './Register';
import Login from './Login';

export default {
    name: 'Jumbotron',
    components: {
        Register, Login
    },
    props: ['registered']
}
</script>

<style>
    .jumbotron {
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>