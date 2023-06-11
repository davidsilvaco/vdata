import Objeto from "../models/Objeto.js";

const formularioCrear = (req, res) => {
    res.render('objeto/crear',{
        pagina: 'Creacion de Objeto',
        csrfToken : req.csrfToken()
        
    })
}

const formularioEditar = (req, res) => {
    res.render('objeto/editar',{
        pagina: 'Editar Objetos',
        csrfToken : req.csrfToken()
    })
}

const formularioListar = (req, res) => {
    res.render('objeto/listar',{
        pagina: 'Listar Objetos',
        csrfToken : req.csrfToken()
    })
}

const formularioValidacion = (req, res) => {
    res.render('objeto/validacion',{
        pagina: 'Listar Objetos y Su Validacion',
        csrfToken : req.csrfToken()
    })
}

export {
    formularioCrear,
    formularioEditar,
    formularioListar,
    formularioValidacion
    
}