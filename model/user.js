const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userShema = new Schema(
    {
     username: { type: String },
    password: {  type: String},
    image:{type:String, default: "https://i.postimg.cc/sXQ14Hf4/no-image.webp"},
    number:{type:Number},
    email:{type:String}
     },
            

);
let User= mongoose.model("User", userShema);

module.exports= User;