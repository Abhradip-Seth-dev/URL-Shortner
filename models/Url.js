const mongoose = require('mongoose');

const urlSchema= new mongoose.Schema({
    urlCode:{
        type:String,
        required:true,
    },
    longUrl:{
        type:String,
        required:true,
    },
    shortUrl:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    clicks:{
        type:Number,
        required:true,
        default:0,
    }
})

module.exports = mongoose.model('Url',urlSchema);