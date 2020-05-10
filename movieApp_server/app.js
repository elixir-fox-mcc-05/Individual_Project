// require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const cors = require('cors')
const router = require("./routes/index.js")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use(router)
// app.get('/', (req, res) => res.send('Hello World!'))

// app.use(errorHandler)


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))