const multer = require('multer');
const path = require('path'); //módulo do node instalado por padrão
const crypto = require('crypto'); //módulo do node instalado por padrão para criar caracteres

//para o envio de arquivos
module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp'),//serve para evitar problemas de caminho padronizando-os
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp'));
        },

        //filename serve para dar nome único, evitando sobrescrever arquivos
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);

                file.key = `${hash.toString('hex')}-${file.originalname}`;

                cb(null, file.key);
            })
        }
    })
};