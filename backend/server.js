const express = require('express')
const goalRoutes = require('./routes/goalRoutes')
const dotenv = require('dotenv').config()
const port  = process.env.PORT||5000
const app = express()


app.use('/api/goals/', goalRoutes);


app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})