const Pagamento = require('../models/Pagamentos')

module.exports ={
    async createPagamento(req, res){
        const {tipo_pagamento} = req.body

        const pagamento = await Pagamento.create({tipo_pagamento})

        if(!pagamento){
            res.send('erro')
        }

        res.json(pagamento)
    },
    async listarPagamentos(req, res){
        const pagamentos = await Pagamento.findAll()

        res.json(pagamentos)
    },
    async pesquisaPagamento(req, res){
        const {id_pagamento} = req.params

        const pagamento = await Pagamento.findByPk(id_pagamento)

        res.json(pagamento)
    }
}