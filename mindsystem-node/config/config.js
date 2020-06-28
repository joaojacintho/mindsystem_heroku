//Configuração dos ambientes do banco de dados
module.exports = {
    development: {
      dialect: "sqlite",
      storage: "./db.development.sqlite"
    },
    test: {
      dialect: "sqlite",
      storage: ":memory:"
    },
    production: {
      username: 'localadmin',
      password: '#Gfgrupo3',
      database: 'bd2adsa',
      host: 'svralunos2adsa.database.windows.net',
      dialect: 'mssql',
      xuse_env_variable: 'DATABASE_URL',
      dialectOptions: {
        options: {
          encrypt: true
        }
      },
      pool: { 
        max: 5,
        min: 1,
        acquire: 5000,
        idle: 30000,
        connectTimeout: 5000
      }
    }
  };
   
  