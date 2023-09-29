const express = require("express");
//create a new app with express
const app = express()

const cors = require("cors")
//require the http module
const userRouter = require("./routes/routes")

app.use(cors())
const http = require("http").Server(app)
//require the socket.io module
const io = require("socket.io")
const port = 3300;
const socket = io(http);
app.use(express.json())



app.get("/", (req, res)=>{
    res.send("hello")
})

//Connect with the database
const Chat = require("./model/chats");
const connect = require("./db")
const  router  =  express.Router();

app.use('/chat', userRouter);
//setup event listener
socket.on("connection", (socket=>{
    console.log("user connected")

    socket.on("disconnect", ()=>{
        console.log("Disconnected")
    });

    socket.on("chat message", function(msg){
    console.log("message" + msg);
        //broadcast message to everyone in port 5000 except yourself
    socket.broadcast.emit('recieved', {message: msg});

    //save chat on mongoDB
    connect.then(db => {
        //create a new chat and store it
        let chatMessage = new Chat({message: msg, sender: "Anonymous"});
        chatMessage.save()
    })
})
}))

//wire up the server to listen to our port 500
http.listen(port, ()=>{
    console.log("connected to port:"+port)
})





