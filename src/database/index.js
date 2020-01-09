const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Clientes = require('../models/Clientes')
const Pagamentos = require('../models/Pagamentos')
const Pedidos = require('../models/Pedidos')
const Vendedores = require('../models/Vendedores')

const connection = new Sequelize(dbConfig)

Clientes.init(connection)
Pagamentos.init(connection)
Pedidos.init(connection)
Vendedores.init(connection)

Pedidos.associate(connection.models)
Clientes.associate(connection.models)

module.exports = connection