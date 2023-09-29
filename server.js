const express = require("express");
const app = express()
const http = require('http').Server(app);
//const { join } = require('path'); 
const io = require('socket.io')(http, {
    cors: { origin: '*' }
});

const cors = require("cors")
app.use(cors())
app.use(express.json())

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

    var stored_messages = []

    console.log('a user connected', socket.id);

    socket.on('chat message', (msg) => {
        console.log("message", msg)
        io.emit('chat message', `${socket.id}  ${msg}`)
        console.log(msg)
        //    stored_messages.push(msg, socket.id)
        //     console.log(stored_messages)
    })
}
)

//wire up the server to listen to our port 500
http.listen(3000, () => {
    console.log(`server running at port ${3000}`);
});






{/* <ul>
  <li *ngFor="let message of messageList">{{ message }}</li>
</ul>

<input [(ngModel)]="newMessage" (keyup.enter)="sendMessage()" />
<button (click)="sendMessage()">Send Message</button> */}
