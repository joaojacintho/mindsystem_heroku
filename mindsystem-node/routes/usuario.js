const express = require('express')
const router = express.Router()
const sequelize = require('../models').sequelize
var Usuario = require('../models').Usuario

let sessoes = [];

router.get('/', (req, res, next) =>{
    console.log('Recuperando os Cinemas')
    Usuario.findAndCountAll().then(result =>{
        console.log(`${result.count} registros`)
        res.json(result.rows)
    }).catch(erro =>{
        console.error(erro)
        res.status(500).send(erro.message)
    })
});

//Pegando o nome do cinema
router.get('/cinemanome/:idUsuario', (req, res, next) =>{
	console.log(`Recuperando a quantidade por categoria`);

	let idUsuario = req.params.idUsuario;

	const instrucaoSql = `SELECT nome_cinema FROM USUARIO, CINEMAS where fkCinemas = idCinemas AND idUsuario = '${idUsuario}'`;

	sequelize.query(instrucaoSql, {
			type: sequelize.QueryTypes.SELECT,
			
		})
		.then(resultado => {
			res.json(resultado);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
});



/* Recuperar usuário por login e senha */
router.post('/autenticar', function (req, res, next) {
	console.log('Recuperando usuário por login e senha');

	var loginUser = req.body.userName; // depois de .body, use o nome (name) do campo em seu formulário de login
	var senhaUser = req.body.senha; // depois de .body, use o nome (name) do campo em seu formulário de login	

	let instrucaoSql = `select * from USUARIO where loginUser = '${loginUser}' and senhaUser='${senhaUser}'`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
		model: Usuario
	}).then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);

		if (resultado.length == 1) {
			sessoes.push(resultado[0].dataValues.loginUser);
			console.log('sessoes: ', sessoes);
			res.json(resultado[0]);
		} else if (resultado.length == 0) {
			res.status(403).send('Login e/ou senha inválido(s)');
		} else {
			res.status(403).send('Mais de um usuário com o mesmo login e senha!');
		}

	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

router.get('/sessao/:login', function (req, res, next) {
	let login = req.params.login;
	console.log(`Verificando se o usuário ${login} tem sessão`);

	let tem_sessao = false;
	for (let u = 0; u < sessoes.length; u++) {
		if (sessoes[u] == login) {
			tem_sessao = true;
			break;
		}
	}

	if (tem_sessao) {
		let mensagem = `Usuário ${login} possui sessão ativa!`;
		console.log(mensagem);
		res.send(mensagem);
	} else {
		res.sendStatus(403);
	}

});


module.exports = router