const baseUrl = 'http://localhost:3000'

var app = new Vue({
    el: '#app',
    data: {
        msg: 'ABC News',
        msgMain: 'THIS IS ABC NEWS',
        title: '',
        urlToImage:'',
        url:'',
        userData: {
            email: '',
            password: ''
        },
        isLogin: false,
        globalNews: [],
        covid:'',
        googleSignInParams: {
            client_id: '1060706521076-juov4ohnrue7nuq23e07guj031eok3gb.apps.googleusercontent.com'
        }
        
    },
    methods: {

        login(){
            let email = this.userData.email
            let password = this.userData.password

            axios({
                method: 'POST',
                url: baseUrl + '/users/login',
                data: {
                    email,
                    password
                }
            })
                .then(({data}) => {                   
                    const access_token = data.access_token
                    localStorage.setItem('access_token', access_token)
                    this.isLogin=true
                    this.readGlobalNews()
                    this.readCovid()
                    this.readIndoNews()
                })

                .catch(err => {
                    swal("Sorry", err.response.data.errors[0].message, "error");
                    console.log(err.response.data.errors[0].message);
                })
        },

        logout(){
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function() {
                swal('You have logged out.'); 
            });
            localStorage.clear()
            this.isLogin = false
        },

        readGlobalNews(){
            axios({
                method: 'GET',
                url: baseUrl + '/news/global',
                headers: {
                    access_token: localStorage.access_token
                }
            })

                .then(({data})=> {
                    this.globalNews = data.result
                    
                })
                .catch(err => {
                    console.log(err);
                })
        },

        readCovid(){
            axios({
                method: 'GET',
                url: baseUrl + '/news/covid',
                headers: {
                    access_token: localStorage.access_token
                }
            })

                .then(({data})=> {
                    this.covid = data.result
                    
                })
                .catch(err => {
                    console.log(err);
                })
        },

        logout(){
            localStorage.clear()
            this.isLogin = false
        },

        onSignIn(googleUser) {
            var id_token = googleUser.getAuthResponse().id_token; 
            console.log(id_token);
               
            axios({
                method: 'POST',
                url: baseUrl + '/users/googleSign',
                data: {
                    'id_token' : id_token,
                }
            })
                .then(data => {
                    localStorage.setItem('access_token', data.token)
                    console.log(data);
                    this.isLogin=true
                    this.readGlobalNews()
                    this.readCovid()
                    this.readIndoNews()
                })
                .catch(err => {
                    swal("Upss", err.responseJSON, "error");
                })
        }

    },
    beforeCreate(){
        console.log('beforeCreate')
    },
    created(){
        console.log('created')
        if(localStorage.access_token){
            this.isLogin = true
            this.readGlobalNews()
            this.readCovid()
        }
    },
    beforeMount(){
        console.log('beforeMount')
    },
    mounted(){
        console.log('mounted')
    },
    beforeUpdate(){
        console.log('beforeUpdate')
    },
    updated(){
        console.log('updated')
    },
    beforeDestroy(){
        console.log('beforeDestroy')
    },
    destroyed(){
        console.log('destroyed')
    }
})