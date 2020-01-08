const Pedidos = require('../models/Pedidos')

module.exports = {
    async createPedido(req, res){
        const {id_cliente, id_vendedor, id_pagamento} = req.params

        const {data_pedido, valor} = req.body
        console.log(data_pedido)

        const pedido = await Pedidos.create({id_cliente, id_vendedor, id_pagamento, data_pedido, valor})

        res.json(pedido)
    }
}