
const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:Text,
        required:true
    }
})