const express = require("express")
const app = express();
const server = require('http').Server(app);
const ejs = require('ejs');
const io = require('socket.io')(server);

server.listen(3000);

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/chatroom", (req, res) => {
    res.render("chatroom.ejs");   
});

io.sockets.on('connection', socket => {
    console.log("Connected");
})



server.listen(3000);