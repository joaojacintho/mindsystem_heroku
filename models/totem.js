module.exports = (sequelize, DataTypes) =>{
    let Totem = sequelize.define('Totem',{
        idTotem: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        posicaoTotem: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fkCinemas: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fkMonitoramento: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },{
        tableName: 'TOTEM',
        freezeTableName: true,
		underscored: false,
		timestamps: false,
    });

    return Totem
}