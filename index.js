const express = require("express");
const app = express();
const ejs = require('ejs');
const io = require('socket.io');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/chatroom", (req, res) => {
    res.render("chatroom.ejs");
});

app.listen(3000);