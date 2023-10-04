const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chatShema = new Schema(
    {
        users:{type: String},  
        text: {type: String },  
        to:{type:String}
        // tousers:Array

    
        
        },
            {
        timestamps: true
    });


let Chat = mongoose.model("Messages", chatShema);

module.exports= Chat;