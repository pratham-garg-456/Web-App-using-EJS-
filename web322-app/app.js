/********************************************************************************* 
*  WEB322 – Assignment 1 
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.   
*  No part of this assignment has been copied manually or electronically from any other source 
*  (including web sites) or distributed to other students. 
*  
*  Name: ____Pratham Garg___ Student ID: ___117900217__ Date: ___1-09-2022________
********************************************************************************/
const router = require('./routes/routes.js')
const express = require('express')
const ejs = require('ejs')
const app = express()
app.use('/', router)
app.use(express.static('public'))
app.set('view engine', ejs)
app.listen(3000, (req, res) => {
    console.log("The App is Listening at port 3000")
})