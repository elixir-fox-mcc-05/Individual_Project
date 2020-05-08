if (process.env.NODE_ENV == 'development') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler')
const router = require('./routers')
const PORT = process.env.PORT || 3000
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log('I love you ' + PORT)
})