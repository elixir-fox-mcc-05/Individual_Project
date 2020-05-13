if (process.send.NODE_ENV === 'development') {
    require('dotenv').config()
}
const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(router)


app.listen(PORT, () => { console.log(`Connecting to Port ${PORT}`) })