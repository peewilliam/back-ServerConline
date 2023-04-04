// Import packages
const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const path = require("path");
const sockets = require('./routes/sockets');
const index = require('./routes/index');


// Middlewares
const app = express();
const server = http.createServer(app);
const io = new Server(server);
app.use(express.urlencoded({extended: true}));
app.use(express.json());



// Statics
// app.use('/', express.static(path.join(__dirname, 'public')))

// Views EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
sockets(io)
// app.use('/home', home);
app.use('/', index);

// connection
const port = 9001
server.listen(port, () =>
  console.log(`Listening to port http://localhost:${port} Node.js v${process.versions.node}!`)
);
