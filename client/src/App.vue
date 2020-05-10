<template>
    <div class="main-layout">
        <Navbar
            @logout="logout"
            @login="showLogin"
            @register="showRegister"
            :page="page"
            :class="{'fixed-nav': flow}"
        ></Navbar>
        <Jumbotron 
            v-if="page === 'landing'"
            :registered="registered"
            @loginSuccess="showMainPage"
            @showLogin="showLogin"
        >
        </Jumbotron>
        <Main
            v-if="page === 'main'"
        >
        </Main>
    </div>
</template>

<script>
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Main from './components/Main';

export default {
    name: 'App',
    components: {
        Navbar, Jumbotron, Main
    },
    data() {
        return {
            page: 'landing',
            registered: false,
            flow: true,
            googleSignInParams: {
                client_id: '918429363028-t708n868tkcf9v957b1kn8ql9gr3n0uq.apps.googleusercontent.com'
            }
        };
    },
    methods: {
        init() {
            let client_id = this.googleSignInParams.client_id
            gapi.load('auth2', function() {
                auth2 = gapi.auth2.init({
                    client_id: client_id,
                    fetch_basic_profile: false,
                    scope: 'profile'
                });
            })
        },
        logout() {
            this.init();
            this.page = 'landing';
            this.registered = false;
            localStorage.removeItem('access_token');
            this.flow = true;
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
                console.log('User signed out.');
            });
        },
        showLogin() {
            this.registered = true;
        },
        showRegister() {
            this.registered = false;
        },
        showMainPage() {
            this.page = 'main';
            this.flow = false;
        }
    },
    created() {
        if(localStorage.access_token) {
            this.page = 'main';
            this.flow = false;
        }
    }
};
</script>

<style>
    body {
        background-color: #EEEEEE;
    }

    .fixed-nav {
        position: fixed;
        width: 100%;
    }
</style>