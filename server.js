require('dotenv').config()

const connectDB = require('./config/db')
const express = require('express');
const app= express()
const PORT = process.env.PORT || 5050;
connectDB()

app.use(express.json())
const urlRoutes = require('./routes/urls');
app.use('/api',urlRoutes)

app.get('/',(req,res)=>{
    res.send("API is running...")
})

app.listen(PORT,'0.0.0.0',()=>{
    console.log(`Server is running on port ${PORT}`)
})