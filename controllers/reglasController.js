import { check, validationResult } from "express-validator";
import { Reglas, TipoReglas,Objeto } from "../models/index.js";

const formCreaRegla = async (req, res) => {
    // Modelo de objeto y tiporegla
    const [tiporeglas, objetos] = await Promise.all([
        TipoReglas.findAll(),
        Objeto.findAll(),
      ]);

    res.render('regla/crear',{
        pagina: 'Creacion de Reglas',
        csrfToken : req.csrfToken(),
        tiporeglas: tiporeglas,
        objetos: objetos,
        datos: {},
        
    })
}

const insertaRegla = async (req, res) => {
    //Validacion
    await check("tiporeglaid")
    .notEmpty()
    .withMessage("El campo Tipo Regla es Obligatorio")
    .run(req);    
    await check("objetoid")
    .notEmpty()
    .withMessage("El campo Nombre tabla es obligatorio")
    .run(req);
    await check("jsondata")
    .notEmpty()
    .withMessage("El campo Json Validacion es obligatorio")
    .run(req);
   

    let resultado = validationResult(req);

    // Verificar que el resultado este vacío
    if (!resultado.isEmpty()) {
        const [tiporeglas, objetos] = await Promise.all([
            TipoReglas.findAll(),
            Objeto.findAll(),
          ]);
        //Hay Errores
        return res.render("regla/crear", {
        pagina: 'Creacion de Reglas',
        csrfToken: req.csrfToken(),        
        errores: resultado.array(),
        tiporeglas: tiporeglas,
        objetos: objetos,
        datos: {
            tiporeglaid: req.body.tiporeglaid,
            objetoid: req.body.objetoid,
            jsondata: req.body.jsondata,
        
        }
        });
    }

    // Extraer los datos
    const { tiporeglaid,objetoid,jsondata } = req.body;

    // Verificar que el usurio no este duplicado
    const existeObjeto = await Reglas.findOne({ where: { tiporeglaid:tiporeglaid, objetoid: objetoid } });

    if (existeObjeto) {
        const [tiporeglas, objetos] = await Promise.all([
            TipoReglas.findAll(),
            Objeto.findAll(),
          ]);
        return res.render("regla/crear", {
        pagina: 'Creacion de Reglas',
        csrfToken: req.csrfToken(),
        errores: [{ msg: "La Regla esta registrada" }],
        tiporeglas: tiporeglas,
        objetos: objetos,
        datos: {
            tiporeglaid: req.body.tiporeglaid,
            objetoid: req.body.objetoid,
            jsondata: req.body.jsondata,
        },
        });
    }

    //Almacenar un regla
    const reglas = await Reglas.create({
        tiporeglaid,
        objetoid,
        jsondata,
    });

    // Mostrar mensaje de confirmación
    res.render("templates/mensaje", {
        pagina: "Tabla creada correctamente",
        mensaje: "Realice la carga necesaria",
    });
};


export {
    formCreaRegla,
    insertaRegla,
    
}