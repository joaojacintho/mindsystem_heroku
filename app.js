//Passando que queremos usar o ambiente de produção assim como foi definido no config.js
process.env.NODE_ENV = 'production'

//Requisitando libs
const express = require('express');
const path = require('path')
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser')


//Criando a rotas,as quais o usuario deve digitar para acessar
const rotaIndex = require('./routes/index')
const rotaCinemas = require('./routes/cinemas')
const rotaMonitoramento = require('./routes/monitoramento')
const rotaTotem = require('./routes/totem')
const rotaRegistro = require('./routes/registro')
const rotaUsuario = require('./routes/usuario')


//Toda api com express usa mas eu n entendi então segue o barco
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
//Esse eu sei, estamos falando que nossa apliccação usara o json para ter e exportar os dados
//Precisamos desse para que seja reconhecido pelo browser
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));
//num sei
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization' )

    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).send({})
    }
    next()
})


//Pedindo para usar as rotas que foram criadas anteriormente
app.use('/', rotaIndex)
app.use('/cinemas', rotaCinemas)
app.use('/monitoramento', rotaMonitoramento)
app.use('/totem', rotaTotem)
app.use('/registro', rotaRegistro)
app.use('/usuario', rotaUsuario)

//Caso a rota não seja encontrada
app.use((req, res, next) =>{
    const erro = new Error('Pagina não encontrada')
    erro.status(404)
    next(erro)
})
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro:{
            message: error.message
        }
    })
})

module.exports = app;