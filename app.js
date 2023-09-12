const path = require('path')

const express = require('express')

const app = express()

const homeRoute = require('./routes/home')
const usersRoute = require('./routes/users')
app.use(homeRoute)
app.use(usersRoute)
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000)