const Pedidos = require('../models/Pedidos')
const Cliente = require('../models/Clientes')

module.exports = {
    async createPedido(req, res){
        const {id_cliente, id_vendedor, id_pagamento} = req.params

        const {data_pedido, valor} = req.body
        console.log(data_pedido)

        const pedido = await Pedidos.create({id_cliente, id_vendedor, id_pagamento, data_pedido, valor})

        res.json(pedido)
    },
    async listaPedido(req, res){
        const {id_cliente} = req.params

        const cliente = await Cliente.findByPk(id_cliente, {include:{association: 'seus_pedidos'}})

        res.json(cliente)
    },
    async deletePedido(req, res){
        const {id} = req.params

        await Pedidos.destroy({where:{id}}).then(()=>{
            res.send('ok')
        }).catch(()=>{
            res.send('falha')
        })
    }
}