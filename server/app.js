if(process.env.NODE_ENV == 'development'){
    require('dotenv').config()
}
const express = require('express')
const cors = require('cors')
const router = require('./router')
const app = express()
const port = 3000

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log('listening on port', port)
})