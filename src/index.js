const express = require('express')
require('dotenv').config()
require('./db/mongoose')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())

const userRoute = require('./routes/user')
app.use(userRoute)

app.get('/', (req, res) => {
    res.send('hello')
})

app.get('/new', (req, res) => {
    res.send('new test')
})

app.get('/test1', (req, res) => {
    res.send('new test')
})

app.listen(PORT, () => {
    console.log(`server up on port ${PORT}`)
})