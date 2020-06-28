module.exports = (sequelize, DataTypes) => {
    let Monitoramento = sequelize.define('Monitoramento', {
        idMonitoramento: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fkTotem: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fkRegistro: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: 'MONITORAMENTO',
        freezeTableName: true,
        underscored: false,
        timestamps: false,
    });
    return Monitoramento
}