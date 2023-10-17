const express = require("express");
const  Messages = require("./model/chats")
const app = express()
const chatRoutes = require("./routes/routes")
const http = require('http').Server(app);
//const { join } = require('path'); 
const io = require('socket.io')(http, {
    cors: { origin: '*' }
});

const cors = require("cors")
app.use(cors())
// const http = require("http").Server(app)
//require the socket.io module
const port = 3300;
// const socket = io(http);
app.use(express.json())
app.use("/chat", chatRoutes)

// app.use(express.static('public'))

//require the http module
//const userRouter = require("./routes/routes")
// app.get("/", (req, res)=>{
//     res.send("hello")
// })

//Connect with the database
const Chat = require("./model/chats");
const connect = require("./db");
// const { error } = require("console");
// const router = express.Router();

// app.get('/', (req, res) => {
//     res.sendFile(join(__dirname, "index.html"))
// })

io.on('connection', (socket) => {
  console.log("a userconneted", socket.id)   

    socket.on('chat message',  async (msg) => {
          
            io.emit('chat message', `${msg}`)
            console.log(`message: ${msg}`)


         socket.on('disconnect', () => {
         console.log('user disconnected');
        });
        
        socket.on('disconnect', () => {
            console.log('user disconnected');
          });
    })
}
)

//wire up the server to listen to our port 500
http.listen(port, () => {
    console.log(`server running at port ${port}`);
});







