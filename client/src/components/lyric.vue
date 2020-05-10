<template>
  <div>
    <nav>
      <button @click="change_page" class="btn-sm btn btn-secondary">Sign Out</button>
      <button @click="dashboard" class="btn-sm btn btn-primary">Dashboard</button>
    </nav><br><br>
    <h2>{{ song.toUpperCase() }}</h2>
    <p>{{ lyrics }}</p>
  </div>
</template>

<script>
export default {
  name: 'lyric',
  props: ['lyrics', 'song'],
  methods: {
    change_page() {
      localStorage.removeItem('access_token')
      console.log('sign out success')
      this.$emit('change_page', 'home')
    },
    dashboard() { 
      this.$emit('change_page', 'dashboard') 
    }
  }
}
</script>

<style scoped>
nav {
  margin-top: 2vw;
}
p {
  margin-top: 4vw;
  margin-left: 22vw;
  margin-right: 22vw;
}
</style>