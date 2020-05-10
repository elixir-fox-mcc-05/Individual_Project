<template>
  <nav class="navbar navbar-expand-lg navbar-light" id="navbar-ghibli">
    <a class="navbar-brand" href>
      <img src="../../img/ghibli.png" width="200" height="40" alt="Ghibli Studio" />
    </a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href @click.prevent="showDashboard">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href @showMyList="showMyList">My List</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0" @submit.prevent="searchAnime">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="localSearch.search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      <button class="btn btn-danger my-2 my-sm-0 ml-1" @click.prevent="logout">Logout</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    search: String
  },
  methods: {
    logout() {
      this.$emit("logout");
    },
    searchAnime() {
      this.$emit("searchAnime", this.localSearch.search);
    },
    showDashboard() {
      this.$emit("showDashboard");
    },
    showMyList() {
      this.$emit("showMyList");
    }
  },
  computed: {
    localSearch() {
      return { ...this.search };
    }
  }
};
</script>

<style>
#navbar-ghibli {
  background-color: #e3f2fd;
}
</style>
