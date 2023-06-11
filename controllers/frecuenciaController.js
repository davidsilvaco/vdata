import Frecuencia from "../models/Frecuencia.js";

const formularioFreuencia = (req, res)=>{
    res.render('frecuencia/registro',{
        pagina: 'Crear Registro de Frecuencia'
    })
}

const registroFrecuencia = (req, res)=>{
    console.log('registrando Frecuencia..')
    
}

export {
    formularioFreuencia,
    registroFrecuencia
}