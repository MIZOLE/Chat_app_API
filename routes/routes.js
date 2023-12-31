const express = require("express");
const connectdb = require("../db")
const Chats = require("../model/chats")
const controller = require("../controlls/user.controller");
const chatController = require("../controlls/chat.controller");


const router = express.Router();


router.route("/get").get((req, res, next) =>{
    res.setHeader("Content-Type", "application/json");
    res.send('hello world')

})



// router.route("/send").get((req,res)=>{
//     res.send("hello world")
// })
router.route("/signUp").post(controller.signUp)
router.route("/signIn").post(controller.signIn)
router.route("/getAllUser").get(controller.getAllUser)
router.route("/getSearch/:id").get(controller.findAll)
router.route("/getSearch").get(controller.findAll)
router.route("/updateUser/:id").put(controller.update)






//chatRoutes
router.route("/send").post(chatController.addMessage)
router.route("/getMessage").get(chatController.getMessage)
router.delete('/delete/:id', chatController.deleteOne)



module.exports  =  router;
