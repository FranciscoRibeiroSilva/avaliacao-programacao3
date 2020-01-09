const {Model, DataTypes} = require('sequelize')

class Clientes extends Model{
    static init(connection){
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
        },{
            sequelize: connection
        })
    }
    static associate(models){
        this.hasMany(models.Pedidos, {foreignKey: 'id_cliente', as: 'seus_pedidos'})
    }
}

module.exports = Clientes