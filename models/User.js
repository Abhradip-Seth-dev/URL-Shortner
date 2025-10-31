const mongoose = require('mongoose');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true,
    },
    email:{
        type:Number,
        required:true,
        unique:true,
    }
})