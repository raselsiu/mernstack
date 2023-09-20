const express = require('express')
const color = require('colors')
const goalRoutes = require('./routes/goalRoutes')
const userRoutes = require('./routes/userRoutes')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const port  = process.env.PORT||5000
const app = express()



app.use(express.json())
app.use(express.urlencoded({extended: false}))

connectDB()

app.use('/api/goals/', goalRoutes);
app.use('/api/users/', userRoutes);

app.use(errorHandler)


app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})