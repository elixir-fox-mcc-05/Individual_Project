require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000
const controllerUser = require('./controllers/user')
const googleverify = require('./middlewares/googleVerify')

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.get('/',controllerUser.viewrandom)
app.get('/findall/:name',controllerUser.viewall)
app.post('/register',controllerUser.register)
app.post('/login',controllerUser.login)
app.post('/gmaillogin',googleverify,controllerUser.loginGmail)



app.listen(PORT,()=>{
    console.log('listen:' + PORT);
    
})