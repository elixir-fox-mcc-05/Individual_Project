if(process.env.NODE_ENV == 'development'){
    require('dotenv').config()
}
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const router = require('./router/index.js')
const error = require('./middleware/errorHandler.js')



app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(router)
app.use(error)



app.listen(port, ()=> {console.log(`listening to http://localhost:${port}`)})