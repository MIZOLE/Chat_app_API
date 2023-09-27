const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const  url  =  "mongodb://127.0.0.1:27017/Appchat";
const  connect  =  mongoose.connect(url).then(() => {
    console.log('Connected to the database');
  });
module.exports  =  connect;
