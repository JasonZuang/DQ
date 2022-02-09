const mongoose = require('mongoose');

const formTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    height:{
        type:Number,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    penisLength:{
        type:Number,
        required:true
    },
    gifts:{
        type:Boolean,
        required:true
    },
    bodyFat:{
        type:Number,
        required:true
    }

})

module.exports = mongoose.model('table',formTemplate);