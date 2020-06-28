//Schema do banco de daos deve vir aqui
//Ela segue a mesma ordem das tabelas

module.exports = (sequelize, DataTypes) =>{
    let Cinemas = sequelize.define('Cinemas',{
        idcinemas: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_cinema: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cnpj_cinema: {
            type: DataTypes.STRING,
            allowNull: false
        },
        endereco: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        tableName: 'CINEMAS',
        freezeTableName: true,
        //Caso a tabela esteja da seguinte forma idCinemas
        //Ele convertera para id_Cinemas
        //por conta desse underscored se ele estiver true deixe dessa forma idcinemas
        //ele intendera que no banco o correto é idCinemas
        //caso vc altere a forma como id_Cinemas ele fara o inverso do que foi passado acima        
		underscored: true,
		timestamps: false,
    });

    return Cinemas;
}