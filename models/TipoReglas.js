import {DataTypes} from 'sequelize';
import db from '../config/db.js';

const TipoReglas = db.define('tiporegla',{
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },

    nombre_gs: {
        type: DataTypes.STRING,
        allowNull: false
    },

   jsondata: {
    type: DataTypes.TEXT, // O DataTypes.TEXT si prefieres almacenar el JSON como texto
    allowNull: false,
  },

})

export default TipoReglas;