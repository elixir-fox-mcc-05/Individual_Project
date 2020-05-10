<template>
    <div class="navbar">
        <div class="logo">
            <!-- <img src="../../assets/gridiron.jpg" alt="gridiron ball"> -->
        </div>
        <div class="button">
            <button class="btn btn-danger" v-if="page === 'main'" @click="$emit('logout')">Logout</button>
            <button class="btn btn-easygreen" v-if="page === 'landing'" @click="$emit('register')">Register</button>
            <button class="btn btn-blueish" v-if="page === 'landing'" @click="$emit('login')">Login</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    props: ['page']
}
</script>

<style scoped>
    .navbar {
        /* position: fixed; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #013369;
        /* width: 100%; */
    }

    .btn-easygreen {
        background-color: chartreuse;
        color: white;
    }

    .btn-blueish {
        background-color: rgb(125, 125, 241);
        color: white;
    }

    .btn-easygreen:hover {
        background-color: rgb(94, 160, 28);
    }

    .btn-blueish:hover {
        background-color: rgb(65, 65, 175);
    }
</style>