import Vue from 'vue';
import App from './App.vue';
import GoogleSignInButton from 'vue-google-signin-button-directive'
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


new Vue({    
    GoogleSignInButton,
    render: h => h(App)
}).$mount('#App');