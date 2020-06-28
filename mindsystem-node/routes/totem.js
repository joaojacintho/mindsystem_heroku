const express = require('express');
const router = express.Router()
const sequelize = require('../models').sequelize
const Totem = require('../models').Totem

router.get('/', (req, res, next) => {
	console.log('Recuperando os Cinemas')
	Totem.findAndCountAll().then(result => {
		console.log(`${result.count} registros`)
		res.json(result.rows)
	}).catch(erro => {
		console.error(erro)
		res.status(500).send(erro.message)
	})
});

// Deve deletar o totem de acordo com o Id passado
router.delete('/delete/:idTotem', (req, res) => {
	console.log('Excluir totem')
	let id = req.params.idTotem;

	Totem.destroy({
		where: {
			idTotem: id
		}
	});
})

// Deve cadastrar o totem 
router.post('/cadastrar', (req, res) => {
	console.log('Cadastrar Totem')
	Totem.create({
        //Aqui ele ira criar um metodo create do sequelize com os dados abaixo
        //Não precisa passar o id pois no model/cinemas foi passado q ele é autoincrement
        posicaoTotem: req.body.nome_cinema,
        fkCinemas: 1

    }).then(result => {
        console.log(`Registro criado: ${result}`)
        res.send(result);
    }).catch(erro => {
        console.error(erro);
        res.status(500).send(erro.message);
    });
})


//Listando todos os totens
router.get('/todostotens/listagem/:idUsuario', function (req, res, next) {
	console.log(`Recuperando totem para listagem`);

	let id = req.params.idUsuario;
	const instrucaoSql = `select count(idTotem) as qtd from USUARIO as u 
    inner join CINEMAS as c on u.fkCinemas = c.idCinemas
    inner join TOTEM as t on t.fkCinemas = c.idCinemas 
    where u.idUsuario = ${id}
    `;

	sequelize.query(instrucaoSql, {
			type: sequelize.QueryTypes.SELECT
		})
		.then(resultado => {
			res.json(resultado);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
});


router.get('/todostotens/listagem/card/:idTotem', function (req, res, next) {
	console.log(`Recuperando totem para listagem`);

	let id = req.params.idTotem;

	const instrucaoSql = `SELECT TOP 3 *  FROM MONITORAMENTO as m join TOTEM as t on 
	t.idTotem = m.fkTotem
	join REGISTRO r on m.idMonitoramento = r.fkMonitoramento WHERE 
	t.idTotem = ${id} ORDER BY r.idRegistro
    `;

	sequelize.query(instrucaoSql, {
			type: sequelize.QueryTypes.SELECT
		})
		.then(resultado => {
			res.json(resultado);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
});


//Listando todos os totems
router.get('/todostotens/fortable/listagem/:idUsuario', function (req, res, next) {
	console.log(`Recuperando totem para listagem`);

	let id = req.params.idUsuario;

	const instrucaoSql = `select distinct idTotem, posicaoTotem, nome_cinema, statusMonitoramento from USUARIO as u 
	inner join CINEMAS as c on u.fkCinemas = c.idCinemas
    inner join TOTEM as t on t.fkCinemas = c.idCinemas 
	left join MONITORAMENTO as m on m.fkTotem = t.idTotem
    where u.idUsuario = ${id}
    `;

	sequelize.query(instrucaoSql, {
			type: sequelize.QueryTypes.SELECT
		})
		.then(resultado => {
			res.json(resultado);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
});

module.exports = router