const express = require('express')
const router = express.Router()
const sequelize = require('../models').sequelize
const Monitoramento = require('../models').Monitoramento


router.get('/', (req, res, next) =>{
    console.log('Recuperando a Tabela Monitoramento')
    Monitoramento.findAndCountAll().then(result =>{
        console.log(`${result.count} registros`)
        res.json(result.rows)
    }).catch(erro =>{
        console.error(erro)
        res.status(500).send(erro.message)
    })
});



//Pegando o ultimo status de Monitoramento
router.get('/status/:id', function (req, res, next) {
    console.log('Dashboard Disco');    

    let idTotem = req.params.id

    const instrucaoSql = `SELECT TOP 3 statusMonitoramento FROM MONITORAMENTO as m, TOTEM as t,CINEMAS as c where t.fkCinemas = c.idCinemas AND m.fkTotem = ${idTotem}`;
    
    //Ele inicia a lib do sequelize para fazer a query
    sequelize.query(instrucaoSql, {
            // Aqui é passado o que essa query estara fazendo
            type: sequelize.QueryTypes.SELECT
        })
        .then(result => {
            res.json(result);
        }).catch(erro => {
            console.error(erro);
            res.status(500).send(erro.message);
        });
});


//Pegando o ultimo status de Monitoramento Line
router.get('/statusLine/:id', function (req, res, next) {
    console.log('Dashboard Disco');    

    let idTotem = req.params.id


    const instrucaoSql = `SELECT TOP 7 statusMonitoramento FROM MONITORAMENTO as m, TOTEM as t,CINEMAS as c where t.fkCinemas = c.idCinemas AND m.fkTotem = ${idTotem}`;
    
    //Ele inicia a lib do sequelize para fazer a query
    sequelize.query(instrucaoSql, {
            // Aqui é passado o que essa query estara fazendo
            type: sequelize.QueryTypes.SELECT
        })
        .then(result => {
            res.json(result);
        }).catch(erro => {
            console.error(erro);
            res.status(500).send(erro.message);
        });
});
module.exports = router