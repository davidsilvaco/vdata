import Sequelize from 'sequelize'
import dotenv from 'dotenv'

//Donde se encuentra el archivo de configuración
dotenv.config({path: '.env'})


//Conexion de base de datos
const db = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASS ?? '', {

    //
    host: process.env.BD_HOST,
    port: 3306,
    dialect: 'mysql',
    define: {
        timestamps: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;