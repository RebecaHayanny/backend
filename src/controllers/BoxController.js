const Box = require('../models/Box');

class BoxController {
    async store(req, res) {



        const box = await Box.create(req.body); //pega o parâmetro colocado no json do insomnia
        return res.json(box);
    }

    async show(req, res) {
        const box = await Box.findById(req.params.id).populate({
            path: 'files',
            options: { sort: { createdAt: -1 } }
        });

        return res.json(box);
    }
}

module.exports = new BoxController(); //o new é necessário para retornar a instância da classe

