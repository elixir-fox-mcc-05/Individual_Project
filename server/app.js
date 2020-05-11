if (process.env.NODE_ENV=="development") {
    require('dotenv').config()
}
let express = require('express')
let cors = require('cors')
let app = express()
let port = process.env.NODE_ENV.PORT || 3000
let router = require('./router')
app.use(express.urlencoded({ extended:false }))
app.use(express.json())
app.use(cors())



app.use(router)


app.listen(port,_=>{
    console.log('app listen on port',port)
})