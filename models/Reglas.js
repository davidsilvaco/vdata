import {DataTypes} from 'sequelize';
import db from '../config/db.js';


const Reglas = db.define('reglas',{
     
  jsondata: {
    type: DataTypes.TEXT, // O DataTypes.TEXT si prefieres almacenar el JSON como texto
    allowNull: false,
  },

})


export default Reglas;