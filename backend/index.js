const express = require('express')
const connectToMongo = require('./db')
const cors = require('cors')

const app = express()
const port = 5000

connectToMongo()

//Middleware
app.use(cors())
app.use(express.json({ extended: true}))

//Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/movies', require('./routes/movies'))

//Start server
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})