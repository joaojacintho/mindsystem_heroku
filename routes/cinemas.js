//Chamada atraves do require do express
const express = require('express')
const router = express.Router()

//Passando o models e requisitando o sequelize desse model
const sequelize = require('../models').sequelize
const Cinemas = require('../models').Cinemas

//Criando a rota no browser deve colocar localhost:300/cinemas para visualizar o retorno que são os dados do bd
router.get('/', (req, res, next) =>{
    console.log('Recuperando os Cinemas')
    //Ele irá dar um select em toda a tabela que foi passada no model/cinemas
    Cinemas.findAndCountAll().then(result =>{
        console.log(`${result.count} registros`)

        //Será jogado o resultado na tela
        res.json(result.rows)
    }).catch(erro =>{
        console.error(erro)
        res.status(500).send(erro.message)
    })
}); 


//Para cadastrar um cinema novo deve ser passado atraves de um json os dados, logo deve ser usado uma ferramenta de requisicao como insomnia
//Claro que isso deve ser somente para o ambiente de teste
router.post('/cadastrar', function (req, res, next) {
    console.log('Criando um novo cinema');
    Cinemas.create({
        //Aqui ele ira criar um metodo create do sequelize com os dados abaixo
        //Não precisa passar o id pois no model/cinemas foi passado q ele é autoincrement
        nome_cinema: req.body.nome_cinema,
        cnpj_cinema: req.body.cnpj_cinema,
        endereco: req.body.endereco,

    }).then(result => {
        console.log(`Registro criado: ${result}`)
        res.send(result);
    }).catch(erro => {
        console.error(erro);
        res.status(500).send(erro.message);
    });
});

// Aqui funciona parecido com o anterior
router.post('/alterarcinema', function (req, res, next) {
    console.log('Alterando Cinema');
    console.log(req.body);
    
    // a mudança se da aqui criamos uma var local para armazenar os dados para facilitar a manipulação do mesmo 
    let idcinemas = req.body.idcinemas;
    let nomeCinema = req.body.nome_cinema;
    let cnpj_cinema = req.body.cnpj_cinema;

    //Porem podiamos fazer somente  essa query que tambem daria certo
    //const instrucaoSql = `update CINEMAS set nome_cinema = '${req.body.nome_cinema}', cnpj_cinema = '${req.body.cnpj_cinema}' where idCinemas = ${req.body.idcinemas}`;
    const instrucaoSql = `update CINEMAS set nome_cinema = '${nomeCinema}', cnpj_cinema = '${cnpj_cinema}' where idCinemas = ${idcinemas}`;
    
    //Ele inicia a lib do sequelize para fazer a query
    sequelize.query(instrucaoSql, {
            // Aqui é passado o que essa query estara fazendo
            type: sequelize.QueryTypes.UPDATE
        })
        .then(result => {
            res.json(result);
        }).catch(erro => {
            console.error(erro);
            res.status(500).send(erro.message);
        });
});



//Estamos exportando essas rotas para que o resto da api possa usalas
module.exports = router