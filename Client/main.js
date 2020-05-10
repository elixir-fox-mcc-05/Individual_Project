import Vue from 'vue';
import App from './App.vue';
import GoogleSignInButton from 'vue-google-signin-button-directive'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Toasted from 'vue-toasted'
Vue.use(Toasted)
Vue.use(VueYouTubeEmbed)
// var firebaseConfig = {
//   apiKey: "AIzaSyCqrOOmVd_ew7uroS93pcEe2m6e6brcrUg",
//   authDomain: "g-kan-ban.firebaseapp.com",
//   databaseURL: "https://g-kan-ban.firebaseio.com",
//   projectId: "g-kan-ban",
//   storageBucket: "g-kan-ban.appspot.com",
//   messagingSenderId: "113359193326",
//   appId: "1:113359193326:web:4d45556d681710d9b71fff"
  
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

const firebaseConfig = {
    apiKey: "AIzaSyB-cpbSSro9yKlQOPxt9KIpI8UM8J0zCwI",
    authDomain: "g-meals.firebaseapp.com",
    databaseURL: "https://g-meals.firebaseio.com",
    projectId: "g-meals",
    storageBucket: "g-meals.appspot.com",
    messagingSenderId: "153391692602",
    appId: "1:153391692602:web:fac8fce3f94b29cd842e03"
  };
  
new Vue({    
    GoogleSignInButton,
    render: h => h(App)
}).$mount('#App');