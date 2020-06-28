const express = require('express')
const router = express.Router()
const sequelize = require('../models').sequelize
const Registro = require('../models').Registro

router.get('/', (req, res, next) => {
    console.log('Recuperando os Registros')
    Registro.findAndCountAll().then(result => {
        console.log(`${result.count} registros`)
        res.json(result.rows)
    }).catch(erro => {
        console.error(erro)
        res.status(500).send(erro.message)
    })
});

router.get('/totem/table/:id', (req, res, next) => {
    console.log('Recuperando os Registros')

    let idTotem = req.params.id

    const instrucaoSql = `SELECT idTotem, dataRegistro, tipo, metricas FROM CINEMAS as c
    inner join TOTEM as t on t.fkCinemas = c.idCinemas
    inner join MONITORAMENTO as m on m.fkTotem = t.idTotem
    inner join REGISTRO as r on r.fkMonitoramento = m.idMonitoramento
    where idCinemas = 1  AND t.idTotem = ${idTotem} order 
    by idRegistro DESC OFFSET 0 ROWS 
FETCH NEXT 18 ROWS ONLY ;
;`;

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

//Pegando os ultimos registros do totem no bd
router.get('/graficoDashCPU/:id', function (req, res, next) {
    console.log('Dashboard CPU/MEMORIA/DISCO');

    let idTotem = req.params.id

    const instrucaoSql = `SELECT TOP 3 r.metricas, r.idRegistro,m.tipo, t.idTotem FROM CINEMAS as c
    inner join TOTEM as t on t.fkCinemas = c.idCinemas
    inner join MONITORAMENTO as m on m.fkTotem = t.idTotem
    inner join REGISTRO as r on r.fkMonitoramento = m.idMonitoramento
    where idCinemas = 1  AND t.idTotem = ${idTotem} AND
    DATEPART(Day, r.dataRegistro) = DATEPART(DAY, getdate())  AND
    DATEPART(MONTH, r.dataRegistro) = DATEPART(MONTH, getdate()) AND
    DATEPART(YEAR, r.dataRegistro) = DATEPART(YEAR, getdate());`;

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


//Pegando os registros MEMORIA
router.get('/graficoDashCPU/chart/memoria/:id', function (req, res, next) {
    console.log('Dashboard CPU/MEMORIA/DISCO para os graficos');

    let idTotem = req.params.id

    const instrucaoSql = ` SELECT distinct metricas as filter, dataRegistro,memoriaTotal FROM CINEMAS as c
    inner join TOTEM as t on t.fkCinemas = c.idCinemas
    inner join MONITORAMENTO as m on m.fkTotem = t.idTotem
    inner join REGISTRO as r on r.fkMonitoramento = m.idMonitoramento
    where idCinemas = 1  AND m.tipo = 'MEMORIA' AND t.idTotem = ${idTotem} AND
    DATEPART(Day, r.dataRegistro) = DATEPART(DAY, getdate() - 1)  AND
    DATEPART(MONTH, r.dataRegistro) = DATEPART(MONTH, getdate()) AND
    DATEPART(YEAR, r.dataRegistro) = DATEPART(YEAR, getdate()) order by r.metricas desc`;

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



//Pegando os registros CPU
router.get('/graficoDashCPU/chart/cpu/:id', function (req, res, next) {
    console.log('Dashboard CPU/MEMORIA/DISCO para os graficos');

    let idTotem = req.params.id

    const instrucaoSql = `SELECT distinct metricas as filter, dataRegistro,cpuMaxFrequency FROM CINEMAS as c
    inner join TOTEM as t on t.fkCinemas = c.idCinemas
    inner join MONITORAMENTO as m on m.fkTotem = t.idTotem
    inner join REGISTRO as r on r.fkMonitoramento = m.idMonitoramento
    where idCinemas = 1  AND m.tipo = 'CPU' AND t.idTotem = ${idTotem} AND
    DATEPART(Day, r.dataRegistro) = DATEPART(DAY, getdate() - 1)  AND
    DATEPART(MONTH, r.dataRegistro) = DATEPART(MONTH, getdate()) AND
    DATEPART(YEAR, r.dataRegistro) = DATEPART(YEAR, getdate()) order by r.metricas desc`;

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


//Pegando os registros do HD
router.get('/graficoDashCPU/chart/hd/:id', function (req, res, next) {
    console.log('Dashboard CPU/MEMORIA/DISCO para os graficos');

    let idTotem = req.params.id

    const instrucaoSql = `SELECT distinct metricas as filter, dataRegistro,discoTotal FROM CINEMAS as c
    inner join TOTEM as t on t.fkCinemas = c.idCinemas
    inner join MONITORAMENTO as m on m.fkTotem = t.idTotem
    inner join REGISTRO as r on r.fkMonitoramento = m.idMonitoramento
    where idCinemas = 1  AND m.tipo = 'DISCO' AND t.idTotem = ${idTotem} AND
    DATEPART(Day, r.dataRegistro) = DATEPART(DAY, getdate() - 1)  AND
    DATEPART(MONTH, r.dataRegistro) = DATEPART(MONTH, getdate()) AND
    DATEPART(YEAR, r.dataRegistro) = DATEPART(YEAR, getdate()) order by r.metricas desc`;

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

module.exports = router;