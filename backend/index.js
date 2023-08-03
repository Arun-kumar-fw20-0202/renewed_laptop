const express = require('express');
const userRouter = require('./Routes/User.Router');
const { connection } = require('./Middleware/config');
require('dotenv').config();
const app = express();

app.use('/user', userRouter)

app.listen(process.env.port, async () => {
    try {
        await connection
        console.log('server connected succesfyll')
    }
    catch (err) {
        console.log("something went wrong")
        console.log(err)
    }
})