const express = require('express')
require('dotenv').config();
const app = express();
const cors = require('cors')

const connectDB = require('./src/db/connect')

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Hello i am live")
});

const start = async () => {
    try {
        await connectDB();

        app.listen(PORT,() => {
            console.log(`server is runing on ${PORT}`)
        }) 
    } catch (error) {
    console.log(error)
    }
}

start()