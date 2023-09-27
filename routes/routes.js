const express = require("express");
const connectdb = require("../db")
const Chats = require("../model/chats")

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

router.route("/send").post 

module.exports  =  router;
