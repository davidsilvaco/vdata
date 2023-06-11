import {DataTypes} from 'sequelize';
import db from '../config/db.js';

const Objeto = db.define('objeto',{
    idObjeto: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    nombreObjeto: {
        type: DataTypes.STRING(100),
        allowNull:false
    },
    nombreTabla:{
        type: DataTypes.STRING(50),
        allowNull: false,
    }
    ,
    idFrecuencia:{
        type: DataTypes.STRING(50),
        allowNull: false,
    }


})

export default Objeto;