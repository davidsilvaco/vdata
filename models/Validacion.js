import {DataTypes} from 'sequelize';
import db from '../config/db.js';

const Validacion = db.define('validacion',{
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
   jsonrespuesta: {
    type: DataTypes.TEXT, // O DataTypes.TEXT si prefieres almacenar el JSON como texto
    allowNull: false,
  },

})

export default Validacion;