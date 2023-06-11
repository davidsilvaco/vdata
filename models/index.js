import Servicios from './Servicios.js'
import Precio from './Precio.js'
import Categoria from './Categoria.js'
import Usuario from './Usuario.js'
import Mensaje from './Mensaje.js'

// Uno a uno es de derecha  a izquierda
//Precio.hasOne(Servicios)
// otra forma de relaciones
Servicios.belongsTo(Precio, { foreignKey: 'precioId'})

Servicios.belongsTo(Categoria, { foreignKey: 'categoriaId'})

Servicios.belongsTo(Usuario, { foreignKey: 'usuarioId'})

Servicios.hasMany(Mensaje,{foreignKey: 'servicioId'})


Mensaje.belongsTo(Servicios, {foreignKey: 'servicioId'}) 
Mensaje.belongsTo(Usuario, {foreignKey: 'usuarioId'}) 


export {
    Servicios,
    Precio,
    Categoria,
    Usuario,
    Mensaje
}