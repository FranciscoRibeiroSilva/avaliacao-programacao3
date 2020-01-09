'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('pedidos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_vendedor:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'vendedores', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_cliente:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'clientes', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_pagamento:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'pagamentos', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      data_pedido: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      valor: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });

  },

  down: (queryInterface, Sequelize) => {

    //return queryInterface.dropTable('pedidos');

  }
};
