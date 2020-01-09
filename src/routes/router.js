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
router.delete('/cliente/:id_cliente', ControllerCliente.deleteCliente)

router.post('/pagamento', ControllerPagamento.createPagamento)
router.get('/pagamento/', ControllerPagamento.listarPagamentos)
router.get('/pagamento/:id_pagamento', ControllerPagamento.pesquisaPagamento)

router.post('/cliente/:id_cliente/vendedor/:id_vendedor/pagamento/:id_pagamento', ControllerPedido.createPedido)
router.get('/cliente/:id_cliente/pedido/', ControllerPedido.listaPedido)
router.delete('/pedido/:id', ControllerPedido.deletePedido)

module.exports = router
