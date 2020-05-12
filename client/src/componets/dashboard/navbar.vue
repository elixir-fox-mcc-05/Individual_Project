<template>
  <div>
        <nav class="navbar" id="topNav">
            <a class="navbar-brand" href="/">
                <img src="../../css/assets/navLogo.png" width="40" height="40" alt="">
            </a>
            <button class="btn btn-outline-danger my-2 my-sm-0" type="button" @click.prevent="logoutBtn">Logout</button>
        </nav>
  </div>
</template>

<script>
export default {
    name : "navbar",
    methods : {
        logoutBtn() {
            localStorage.clear()
            location.reload()
        }
    }
}
</script>

<style>

#topNav {
    border-bottom: 0.1px solid gray ;
}

</style>