const express = require('express')
require('dotenv').config()
require('./db/mongoose')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())

const userRoute = require('./routes/user')
app.use(userRoute)

app.get('/', (req, res) => {
    res.send('hjjgkhvh')
})

app.listen(PORT, () => {
    console.log(`server up on port ${PORT}`)
})
