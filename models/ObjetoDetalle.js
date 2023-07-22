import {DataTypes} from 'sequelize';
import db from '../config/db.js';

const ObjetoDetalle = db.define('objetodetalle',{
  
    nombrecampo: {
        type: DataTypes.STRING(100),
        allowNull:false
    },
    descripcion:{
        type: DataTypes.STRING(50),
        allowNull: false
    },

})

// Establecer la relación uno a muchos entre Usuario y Tarea
Objeto.hasMany(ObjetoDetalle, { foreignKey: 'objetoId', as: 'objetodetalle' });
ObjetoDetalle.belongsTo(Objeto, { foreignKey: 'objetoId', as: 'objeto' });

export default ObjetoDetalle;