const {Model, DataTypes} = require('sequelize')

class Pagamentos extends Model{
    static init(connection){
        super.init({
            tipo_pagamento: DataTypes.STRING,
            
        },{
            sequelize: connection
        })
    }
}

module.exports = Pagamentos