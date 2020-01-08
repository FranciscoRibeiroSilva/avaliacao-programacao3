const express = require("express")
const router = express.Router()
const ControllerVendedor = require('../controllers/controllerVendedor')
const ControllerCliente = require('../controllers/controllerCliente')
const ControllerPagamento = require('../controllers/controllerPagamento')
const ControllerPedido = require('../controllers/controllerPedido')

router.post('/vendedor', ControllerVendedor.createVendedor)
router.get('/vendedor/', ControllerVendedor.listarVendedor)
router.get('/vendedor/:id_vendedor', ControllerVendedor.pesquisarVendedor)


router.post('/cliente', ControllerCliente.createCliente)
router.get('/cliente/', ControllerCliente.listarCliente)
router.get('/cliente/:id_cliente', ControllerCliente.pesquisarCliente)

router.delete('/cliente/:id_cliente', (req, res) => {
    res.send('Cliente apagado')
})


router.post('/pagamento', ControllerPagamento.createPagamento)
router.get('/pagamento/', ControllerPagamento.listarPagamentos)
router.get('/pagamento/:id_pagamento', ControllerPagamento.pesquisaPagamento)


router.delete('/pedido/:id_pedido', (req,res)=>{
    res.send('Pedido apagado')
})


router.post('/cliente/:id_cliente/vendedor/:id_vendedor/pagamento/:id_pagamento', ControllerPedido.createPedido)

module.exports = router
