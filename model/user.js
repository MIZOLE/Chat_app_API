const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userShema = new Schema(
    {
     username: { type: String },
    password: {  type: String},
    image:{type:String}
     },
            

);
let User= mongoose.model("User", userShema);

module.exports= User;