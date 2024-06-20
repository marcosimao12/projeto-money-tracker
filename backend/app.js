require('dotenv').config();
const express = require('express')
const cors = require('cors');
const {db} = require('./db/db');
const app = express()
const {readdirSync} = require('fs')


const PORT = process.env.PORT

app.use(express.json())
app.use(cors());

// routes

readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))


const server = () => {
    db()
    app.listen(PORT, () => {
            console.log(`Server is running on port:`, PORT)
    })

}

server()
