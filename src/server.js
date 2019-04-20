const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on("connection", socket => {
    socket.on('connectRoom', box => {
        socket.join(box);
    })
})

mongoose.connect(
    "mongodb+srv://omnistack:omnistack@cluster0-azixw.mongodb.net/test?retryWrites=true", {
        useNewUrlParser: true
    }
);


app.use((req, res, next) => {
    req.io = io;

    return next();
});


//app.use: cadastra um módulo dentro do express
//express.json ajuda o servidor a entender o formato json (js object notation)
app.use(express.json());//permite o envio de dados
app.use(express.urlencoded({ extended: true })); //permite o envio de arquivos nas requisições
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

//para usar um arquivo de rotas separado importando do routes.js: 
app.use(require("./routes")) //o ponto significa pasta atual, sem o ponto o arquivo tentará importar algo do node modules



server.listen(3333);