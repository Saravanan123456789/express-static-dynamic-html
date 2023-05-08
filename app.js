const express = require('express');
const app = express()


const user=require('./users')

const service=require('./services')
const about=require('./about')
const contact=require('./contact')
const home=require('./home')
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.get('/',(request,response)=>{
    response.send("Index Page")
})
app.use("/user",user)
app.use("/service",service)
app.use('/home',home)
app.use('/contact',contact)
app.use('/about',about)
app.listen(4500)