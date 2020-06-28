module.exports = (sequelize, DataTypes) =>{
    let Registro = sequelize.define('Registro',{
        idRegistro: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dataRegistro: {
            type: DataTypes.DATE,
            allowNull: false
        },
        metricas: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        tableName: 'REGISTRO',
        freezeTableName: true,
		underscored: false,
		timestamps: false,
    });

    return Registro
}