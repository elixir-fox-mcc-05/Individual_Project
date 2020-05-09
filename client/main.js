new Vue({
    el: "#App",
    data: {
        currentPage: 'login',
        restaurants: [],
        email: '',
        password: '',
        access_token: ''
    },
    methods: {
        auth(){
            if(localStorage.getItem('access_token')){
                this.currentPage = 'dashboard'
                this.fetchData()
            }
        },

        login(){ 
            axios({
                method: 'post',
                url: `http://localhost:3000/login`,
                data: {
                    email: this.email,
                    password: this.password
                }
            })
                .then(data => {
                    this.access_token = data.data.access_token
                    localStorage.setItem('access_token', this.access_token)
                    this.auth()

                })
                .catch(err => {
                    console.log(err)
                })
        },

        fetchData(){
            axios({
                method: 'get',
                url: `http://localhost:3000/`,
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
                .then(data => {
                    console.log(data)
                    this.restaurants= data.data.restaurants
                })
                .catch(err => {
                    console.log(err.responseJson)
                })
        },

        logout(){
            localStorage.clear()
            this.currentPage = 'login'
            this.email = '',
            this.password = ''
        }
    },
    created(){
        console.log('created')
        if(localStorage.getItem('access_token')){
            this.currentPage = 'dashboard'
            this.fetchData()
        } else {
            this.currentPage = 'login'
        }
    }
})