import {DataTypes} from 'sequelize';
import db from '../config/db.js';

const Objeto = db.define('objetos',{
  
    nombretabla: {
        type: DataTypes.STRING(100),
        allowNull:false
    },
    nombrearchivo:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    extension:{
        type: DataTypes.STRING(5),
        allowNull: false
    },
    frecuencia:{
        type: DataTypes.STRING(10),
        allowNull: false
    }

})

export default Objeto;