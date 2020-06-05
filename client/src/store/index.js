import Vue from "vue";
import Vuex from "vuex";
import server from "../api/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    currentPage: "Home",
    myNotif: "",
    myError: "",
    userLogin: {
      name: "",
      id: ""
    },
    popularMovie: [],
    upcomingMovie: [],
    toprateMovie: []
  },
  mutations: {
    SET_LOGIN(state, payload) {
      state.isLogin = payload;
    },
    CHANGE_CURRENT_PAGE(state, payload) {
      state.currentPage = payload;
    },
    SET_POPULAR_MOVIE(state, payload) {
      state.popularMovie = payload;
    },
    SET_UPCOMING_MOVIE(state, payload) {
      state.upcomingMovie = payload;
    },
    SET_TOPRATE_MOVIE(state, payload) {
      state.toprateMovie = payload;
    },
    CHANGE_MYNOTIF(state, payload) {
      state.myNotif = payload;
    },
    CHANGE_MYERROR(state, payload) {
      state.myError = payload;
    },
    CHANGE_USERLOGIN(state, payload) {
      state.userLogin = payload;
    }
  },
  actions: {
    fetchPopularMovie(context) {
      server({
        method: "get",
        url: "/movie/popular",
        headers: {
          token: localStorage.token
        }
      })
        .then((response) => {
          context.commit("SET_POPULAR_MOVIE", response.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchUpcomingMovie(context) {
      server({
        method: "get",
        url: "/movie/upcoming",
        headers: {
          token: localStorage.token
        }
      })
        .then((response) => {
          context.commit("SET_UPCOMING_MOVIE", response.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchToprateMovie(context) {
      server({
        method: "get",
        url: "/movie/toprate",
        headers: {
          token: localStorage.token
        }
      })
        .then((response) => {
          context.commit("SET_TOPRATE_MOVIE", response.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  modules: {}
});
