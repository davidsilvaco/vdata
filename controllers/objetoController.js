import Objeto from "../models/Objeto.js";
import { check, validationResult } from "express-validator";

const formularioCrear = (req, res) => {
    res.render('objeto/crear',{
        pagina: 'Creacion de Objeto',
        csrfToken : req.csrfToken()
        
    })
}

const insertaObjeto = async (req, res) => {
    //Validacion
    await check("nombretabla")
    .notEmpty()
    .withMessage("El campo Tabla es Obligatorio")
    .run(req);    
    await check("nombrearchivo")
    .notEmpty()
    .withMessage("El campo Archivo es obligatorio")
    .run(req);
    await check("extension")
    .notEmpty()
    .withMessage("El campo Extension es obligatorio")
    .run(req);
    await check("frecuencia")
    .notEmpty()
    .withMessage("El campo Frecuencia es obligatorio")
    .run(req);

    let resultado = validationResult(req);

    // Verificar que el resultado este vacío
    if (!resultado.isEmpty()) {
        //Hay Errores
        return res.render("objeto/crear", {
        pagina: "Creacion de Objeto",
        csrfToken: req.csrfToken(),        
        errores: resultado.array(),
        objeto: {
            nombretabla: req.body.nombretabla,
            nombrearchivo: req.body.nombrearchivo,
            extension: req.body.extension,
            frecuencia: req.body.frecuencia,
        
        }
        });
    }

    // Extraer los datos
    const { nombretabla,nombrearchivo,extension,frecuencia } = req.body;

    // Verificar que el usurio no este duplicado
    const existeObjeto = await Objeto.findOne({ where: { nombretabla: nombretabla } });

    if (existeObjeto) {
        return res.render("objeto/crear", {
        pagina: "Creacion de Objeto",
        csrfToken: req.csrfToken(),
        errores: [{ msg: "La tabla ya esta registrada" }],
        objeto: {
            nombretabla: req.body.nombretabla,
            nombrearchivo: req.body.nombrearchivo,
            extension: req.body.extension,
            frecuencia: req.body.frecuencia,
        },
        });
    }

    //Almacenar un usuario
    const objeto = await Objeto.create({
        nombretabla,
        nombrearchivo,
        extension,
        frecuencia,
    });

    // Mostrar mensaje de confirmación
    res.render("templates/mensaje", {
        pagina: "Tabla creada correctamente",
        mensaje: "Realice la carga necesaria",
    });
};


const formularioEditar = (req, res) => {
    res.render('objeto/editar',{
        pagina: 'Editar Objetos',
        csrfToken : req.csrfToken()
    })
}

const formularioListar = async (req, res) => {
    const data = await Objeto.findAll();
    res.render('objeto/listar',{
        pagina: 'Listar Objetos',
        csrfToken : req.csrfToken(),
        data
    })
}
const formularioValidacion = (req, res) => {
    
    res.render('objeto/validacion',{
        pagina: 'Validar Objetos',
        csrfToken : req.csrfToken(),
        idTabla : req.id,
        nombreTabla : req.nombreTabla
    })
}

const validarObjeto = (req, res) => {
    res.render('objeto/validacion',{
        pagina: 'Listar Objetos y Su Validacion',
        csrfToken : req.csrfToken()
    })
}

const creaObjetoDetalle = (req, res) => {
    res.render('objeto/detalle',{
        pagina: 'Listar Objetos y Su Validacion',
        csrfToken : req.csrfToken()

    


    })
}
const obtenerObjetoDetalle = (req, res) => {
    res.render('objeto/detalle',{
        pagina: 'Listar Objetos y Su Validacion',
        csrfToken : req.csrfToken()
    })
}

export {
    formularioCrear,
    insertaObjeto,
    formularioEditar,
    formularioListar,
    formularioValidacion,
    validarObjeto
    
}