const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema =  new Schema({
    username:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

});

mongoose.model('messages',MessageSchema);
