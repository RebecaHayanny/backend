//Este model representa uma pasta da aplicação
const mongoose = require('mongoose');

//declaração de variável box e schema(tabela no banco relacional):
const File = new mongoose.Schema({
    //declaração de quais campos serão armazenados dentro dele:
    title: {
        type: String,
        required: true,
    },
    path: { //nome do arquivo físico armazenado na aplicação, guarda o caminho
        type: String,
        required: true

    },
},
    {
        timestamps: true, //cria campos de registro de criação e edição
        toObject: { virtuals: true },
        toJSON: { virtuals: true }

    });

File.virtual('url').get(function () {
    return `http://localhost:3333/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model("File", File);