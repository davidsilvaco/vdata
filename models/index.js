import Servicios from './Servicios.js'
import Precio from './Precio.js'
import Categoria from './Categoria.js'
import Usuario from './Usuario.js'
import Mensaje from './Mensaje.js'

import TipoReglas from './TipoReglas.js'
import Objeto from './Objeto.js'
import Reglas from './Reglas.js'
import Validaciones from './Validaciones.js'


// Uno a uno es de derecha  a izquierda
//Precio.hasOne(Servicios)
// otra forma de relaciones
Servicios.belongsTo(Precio, { foreignKey: 'precioId'})

Servicios.belongsTo(Categoria, { foreignKey: 'categoriaId'})

Servicios.belongsTo(Usuario, { foreignKey: 'usuarioId'})

Servicios.hasMany(Mensaje,{foreignKey: 'servicioId'})
Mensaje.belongsTo(Servicios, {foreignKey: 'servicioId'}) 

Mensaje.belongsTo(Usuario, {foreignKey: 'usuarioId'}) 

// Establecer la relación uno a muchos entre Usuario y Tarea
Objeto.hasMany(Reglas, { foreignKey: 'objetoid' });
Reglas.belongsTo(Objeto, { foreignKey: 'objetoid' });

// Establecer la relación uno a muchos entre Usuario y Tarea
TipoReglas.hasMany(Reglas, { foreignKey: 'tiporeglaid' });
Reglas.belongsTo(TipoReglas, { foreignKey: 'tiporeglaid' });

Validaciones.belongsTo(TipoReglas, {foreignKey: 'tiporeglaid'}) 
Validaciones.belongsTo(Objeto, {foreignKey: 'objetoid'}) 

export {
    Servicios,
    Precio,
    Categoria,
    Usuario,
    Mensaje,
    TipoReglas,
    Objeto,
    Reglas,
    Validaciones
}