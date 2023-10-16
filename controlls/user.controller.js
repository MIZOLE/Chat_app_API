const config = require("../db/config")
const User =require("../model/user")
const bcrypt =require("bcrypt")
const jwt = require("jsonwebtoken")
exports.signUp = (req,res)=>{
    const user = new User({
        username: req.body.username,
        image: req.body.image,
        password: bcrypt.hashSync(req.body.password, 8),
      });

       user.save()
       res.send({ message: "User was registered successfully!" });  
}
exports.signIn =(req,res) =>{
  const username= req.body.username
  User.findOne({username:username})
  .then((user)=>{
    if(!user){
      res.send("Username not found") 
    }
    var passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res.status(401).send({ message: "Invalid Password!" });
    }
    const token = jwt.sign({ id: user.id },config.secret,{expiresIn: 86400})
    res.send({
      id: user._id  ,
      username: user.username,
      image: user.image,
      accesstoken:token 
    })
  })
 
  
    
}

exports.getAllUser = (req, res)=>{
  User.find()
  .then(data=>{
      res.status(200).send(data)
  })
  .catch(error=>{
      res.status(500).send("Could not find book")
      console.log("Could not find book,error")
  })
}

exports.findAll = (req, res) => {
    const username = req.params.id
    User.find({username})
    .then(data=>{
        res.status(200).send(data)
    })
    .catch(error=>{
        res.status(500).send("Could not find User")
        console.log("Could not find book,error")
    })

};
