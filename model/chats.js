const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chatShema = new Schema(
    {
        message: {
        type: String
        },
        sender: {
        type: String
            }
        },
            {
        timestamps: true
    });


let Chat = mongoose.model("Chat", chatShema);

module.exports= Chat;