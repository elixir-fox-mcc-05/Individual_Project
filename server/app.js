if(process.env.NODE_ENV == 'development') {
    require('dotenv').config()
}

let express = require('express')
let app = express()
let port =  process.env.PORT || 3000
let cors = require('cors')
let router = require('./routers/index')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(router)


app.listen( port ,()=> {
    console.log('tis on port', port);
})