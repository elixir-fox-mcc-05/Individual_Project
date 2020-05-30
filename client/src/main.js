"use strict";
import Vue from "vue";
import App from "./App.vue";
import bootstrapvue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VModal from 'vue-js-modal';
Vue.use(bootstrapvue);
Vue.use(VModal);

new Vue ({
    render : h => h(App),
}).$mount("#app");