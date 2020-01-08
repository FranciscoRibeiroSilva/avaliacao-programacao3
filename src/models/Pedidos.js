const {Model, DataTypes} = require('sequelize')

class Pedidos extends Model{
    static init(connection){
        super.init({
            data_pedido: DataTypes.DATE,
            valor: DataTypes.FLOAT,
        },{
            sequelize: connection
        })
    }
    static associate(models){
        this.belongsTo(models.Vendedores,{foreignKey:'id_vendedor', as:'pertence_vendedor'})
        this.belongsTo(models.Clientes,{foreignKey: 'id_cliente', as:'pertence_cliente'})
    }
}

module.exports = Pedidos