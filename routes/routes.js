const express = require("express");
const connectdb = require("../db")
const Chats = require("../model/chats")
const controller = require("../controlls/user.controller");


const router = express.Router();


router.route("/").get((req, res, next) =>{
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;

    connectdb.then(db => {
        Chats.find({}).then(chat => {
            res.json(chat)
        })
    })
})

router.route("/send").get((req,res)=>{
    res.send("hello world")
})
router.route("/signUp").post(controller.signUp)
router.route("/signIn").post(controller.signIn)

module.exports  =  router;
