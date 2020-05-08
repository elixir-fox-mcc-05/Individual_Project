require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000
const controllerUser = require('./controllers/user')

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.get('/',controllerUser.viewall)
app.get('/register',controllerUser.register)
app.get('/login',controllerUser.login)
app.get('/gmaillogin',controllerUser.loginGmail)



app.listen(PORT,()=>{
    console.log('listen:' + PORT);
    
})