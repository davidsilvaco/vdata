import {DataTypes} from 'sequelize';
import db from '../config/db.js';

const Frecuencia = db.define('frecuencia',{
    idFrecuencia: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    nombreFrecuencia: {
        type: DataTypes.STRING(100),
        allowNull:false
    }

})

export default Frecuencia;