import Vue from 'vue';
import App from './App.vue';

// Import Bootstrap
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);

// Import Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch()
Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(faStar, faPlayCircle);
Vue.config.productionTip = false;


new Vue({
    render: h => h(App),
}).$mount('#app');