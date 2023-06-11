import { Sequelize } from 'sequelize'
import {Precio, Servicios} from '../models/index.js'


const inicio = async (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio',
        csrfToken: req.csrfToken()

    })

}

const noEncontrado = (req, res) => {

    res.render('404', {
        pagina: 'No encontrada',
        csrfToken: req.csrfToken()
    })


}


const buscador = async (req, res) => {

    const {termino} = req.body

    // Validar que termino no este vacío
    if(!termino.trim()){
        return res.redirect('back')
    }

    // Consultar los servicios
    const servicios = await Servicios.findAll({

        where: {
            titulo: {
                [Sequelize.Op.like] : '%' + termino + '%'
            }
        },
        include:[
            {model: Precio, as: 'precio'}
        ]
    })

  res.render('busqueda', {
    pagina: 'Resultados de la búsqueda',
    servicios,
    csrfToken: req.csrfToken()

  })
}


export {
    inicio,
    noEncontrado,
    buscador
}