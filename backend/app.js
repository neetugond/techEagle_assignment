const express = require('express')
require('dotenv').config();
const app = express();
const cors = require('cors')
const connectDB = require('./src/db/connect')
const PORT = process.env.PORT || 5000;
const cookieParser = require('cookie-parser')
const userRouter = require('./src/routes/userRoute');
const productRouter = require('./src/routes/productRoute')
const cartRouter = require('./src/routes/cartRoute')
const orderRouter = require('./src/routes/orderRoute')

app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use('/user', userRouter)
app.use('/product', productRouter)
app.use('/cart', cartRouter)
app.use('/order', orderRouter)

const start = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`server is runing on ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()