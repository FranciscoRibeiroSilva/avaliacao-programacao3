const Cliente = require('../models/Clientes')

module.exports ={
    async createCliente(req,res){
        const{nome,email} = req.body
        const cliet = await Cliente.create({nome,email})
        if(!cliet){
            res.json('erro')
        }
        res.json(cliet)
    },
    async listarCliente(req, res){
        const clientes = await Cliente.findAll()
        res.json(clientes)
    },
    async pesquisarCliente(req, res){
        const {id_cliente} = req.params
        const cliente = await Cliente.findByPk(id_cliente)
        return res.json(cliente)
    },
    async deleteCliente(req, res){
        const {id_cliente} = req.params

        await Cliente.destroy({where:{id: id_cliente}}).then((clie)=>{
            res.send('ok')
        }).catch((err)=>{
            res.send('erro')
        })


    }
}