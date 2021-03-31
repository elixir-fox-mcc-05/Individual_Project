import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Missing from "../components/Missing.vue";
import Dashboard from "../views/Dashboard.vue";
import DetailMovie from "../components/DetailMovie.vue";
import Popular from "../components/Popular.vue";
import Upcoming from "../components/Upcoming.vue";
import Toprate from "../components/Toprate.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "popular",
        name: "Popular",
        component: Popular
      },
      {
        path: "toprate",
        name: "Toprate",
        component: Toprate
      },
      {
        path: "upcoming",
        name: "Upcoming",
        component: Upcoming
      }
    ]
  },
  {
    path: "/detail/:id",
    name: "DetailMovie",
    component: DetailMovie
  },
  {
    path: "*",
    component: Missing
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
