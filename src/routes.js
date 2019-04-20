const express = require("express");
const multer = require("multer");
const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

//aqui o routes funciona como o app
/*routes.get('/teste', (req, res) => {
    return res.send('Hello World 4');
})*/

routes.post("/boxes", BoxController.store);
routes.get("/boxes/:id", BoxController.show);


//obs: o caminho :id informa ao express um parâmetro de rotas
routes.post("/boxes/:id/files", multer(multerConfig).single('file'), FileController.store); //configuração para o envio de um arquivo por vez

module.exports = routes; //exporta a variável routes