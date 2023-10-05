const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chatShema = new Schema(
    {
        sender:{type: String},  
        text: {type: String },  
        users:Array,

        
        },
            {
        timestamps: true
    });


let Chat = mongoose.model("Messages", chatShema);

module.exports= Chat;