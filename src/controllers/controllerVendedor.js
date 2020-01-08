const Vendedor = require('../models/Vendedores')
module.exports={
    async createVendedor(req,res){
        const{nome,email} = req.body
        const vend = await Vendedor.create({nome,email})
        if(!vend){
            res.json('erro')
        }
        res.json(vend)
    },
    async listarVendedor(req, res){
        const vendedores = await Vendedor.findAll()
        res.json(vendedores)
    },
    async pesquisarVendedor(req, res){
        const {id_vendedor} = req.params
        const vendedor = await Vendedor.findByPk(id_vendedor)
        return res.json(vendedor)
    }
}