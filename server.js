require('dotenv').config()

const connectDB = require('./config/db')
const express = require('express');
const app= express()
const PORT = process.env.PORT || 5000;
connectDB()

app.use(express.json())
const urlRoutes = require('./routes/urls');
app.use('/api',url)

app.get('/',(req,res)=>{
    res.send("API is running...")
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})