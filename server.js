const express = require("express");
const { createServer } = require('http'); // Corrected import for createServer
const { join } = require('path'); // Corrected import for join
const { Server } = require('socket.io');
//create a new app with express
const app = express()
const server = createServer(app);
const io = new Server(server);


// //Connect with the database

const cors = require("cors")
//require the http module
const userRouter = require("./routes/routes")

app.use(cors())
const http = require("http").Server(app)
//require the socket.io module
const io = require("socket.io")
const port = 500;
const socket = io(http);
app.use(express.json())



app.get("/", (req, res)=>{
    res.send("hello")
})

//Connect with the database
const Chat = require("./model/chats");
const connect = require("./db");
const { error } = require("console");
const router = express.Router();

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, "index.html"))
})

//load a scoket io anc connect
io.on('connection', (socket) => {
    console.log('a user connected', socket.id);

    // Handle incoming chat messages
    socket.on('chat message', async (msg) => {
        console.log('Received message:', msg);
        const newmsg = msg

        // Save messages to MongoDB
        try {
            const message = new Chat({ user: newmsg});
            console.log(message)
            
            const result = await message.save();
            console.log(result);

            // Broadcast the message to all connected clients
            io.emit('chat message', msg);
        } catch (err) {
            console.error(err);
        }
    });

    // Listen to user disconnection
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

//wire up the server to listen to our port 500
server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});




