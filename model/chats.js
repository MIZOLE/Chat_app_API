const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chatShema = new Schema(
    {
        messages: {
        type: String
        },
        sender: {
        type: String
            }
        },
            {
        timestamps: true
    });


let Chat = mongoose.model("Messages", chatShema);

module.exports= Chat;