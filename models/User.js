const mongoose = require('mongoose');
const monodb = require('monodb');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide a name"],
        
    },
    email:{
        type:String,
        required:[true,"please provide an email"],
        unique:true,
        match:[
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please Provide a valid email address"
        ]
    },
    password:{
        type:String,
        required:[true,"Please provide a password"],
        minlength:6,
        select:false,// This ensures the password is notsent back in query results by default
    }
},{timestamps:true})

module.exports = mongoose.model('User',userSchema);