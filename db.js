const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
  
const  url  =  'mongodb+srv://mfekethothulane:mongo@mfekethothulane021.plal87j.mongodb.net/mychat';
const  connect  =  mongoose.connect(url).then(() => {
    console.log('Connected to the database');
  });
module.exports  =  connect;




