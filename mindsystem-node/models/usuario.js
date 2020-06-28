module.exports = (sequelize, DataTypes) =>{
    let Usuario = sequelize.define('Usuario',{
        idUsuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        loginUser: {
            type: DataTypes.STRING,
            allowNull: false
        },
        senhaUser: {
            type: DataTypes.STRING,
            allowNull: false
        },
        chatID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fkCinemas: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        edited_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
    },{
        tableName: 'USUARIO',
        freezeTableName: true,
		underscored: false,
		timestamps: false,
    });

    return Usuario
}