//Este model representa uma pasta da aplicação
const mongoose = require('mongoose');

//declaração de variável box e schema(tabela no banco relacional):
const Box = new mongoose.Schema({
    //declaração de quais campos serão armazenados dentro dele:
    title: {
        type: String,
        required: true,
    },
    //files será um vetor de outro model(File)
    files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }]//armazena o ID de outros arquivos 
}, {
        timestamps: true //cria campos de registro de criação e edição
    });

module.exports = mongoose.model('Box', Box);