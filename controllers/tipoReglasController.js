import TipoReglas from "../models/TipoReglas.js";
import { check, validationResult } from "express-validator";

const formCreaTipoRegla = (req, res) => {
    res.render('tipoReglas/crear',{
        pagina: 'Creacion Tipo de Reglas',
        csrfToken : req.csrfToken()
        
    })
}


const insertaTipoRegla = async (req, res) => {
    //Validacion
    await check("nombre")
    .notEmpty()
    .withMessage("El campo Nombre Tipo Regla es Obligatorio")
    .run(req);    
    await check("nombre_gs")
    .notEmpty()
    .withMessage("El campo Nombre Great Expectation es obligatorio")
    .run(req);
    await check("jsondata")
    .notEmpty()
    .withMessage("El campo Json Base es obligatorio")
    .run(req);   

    let resultado = validationResult(req);

    // Verificar que el resultado este vacío
    if (!resultado.isEmpty()) {
        //Hay Errores
        console.log("entre a validacion");
        return res.render("tipoReglas/crear", {
        pagina: "Creacion Tipo de Reglas",
        csrfToken: req.csrfToken(),        
        errores: resultado.array(),
        tipoReglas: {
            nombre: req.body.nombre,
            nombre_gs: req.body.nombre_gs,
            jsondata: '{}',        
        }
        });
    }

    // Extraer los datos
    const { nombre,nombre_gs,jsondata } = req.body;

    // Verificar que el usurio no este duplicado
    const existeTipoRegla = await TipoReglas.findOne({ where: { nombre_gs: nombre_gs } });

    if (existeTipoRegla) {
        console.log("entre a validacion existe regla");
        return res.render("tipoReglas/crear", {
        pagina: "Creacion Tipo de Reglas",
        csrfToken: req.csrfToken(),
        errores: [{ msg: "El tipo de Regla esta registrada" }],
        tipoReglas: {
            nombre: req.body.nombre,
            nombre_gs: req.body.nombre_gs,
            jsondata: req.body.jsondata, 
        },
        });
    }

    //Almacenar una regla
    const tipoReglas = await TipoReglas.create({
        nombre,
        nombre_gs,
        jsondata
    });

    // Mostrar mensaje de confirmación
    res.render("templates/mensaje", {
        pagina: "Tabla creada correctamente",
        mensaje: "Realice la carga necesaria",
    });
};




export {
    formCreaTipoRegla,
    insertaTipoRegla
    
}