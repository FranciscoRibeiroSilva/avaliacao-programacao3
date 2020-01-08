const express = require("express")
const routers = require('./routes/router')
require('./database')
const app = express()

app.use(express.json())

app.use('/', routers)

const PORT = 3001
app.listen(PORT,()=>{
    console.log("Servidor rodando na URL http://localhost:3001")
})