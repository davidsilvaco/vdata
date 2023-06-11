import { check, validationResult } from "express-validator";
//import bcryptjs from 'bcryptjs';

import Usuario from "../models/Usuario.js";
import {generarJWT, generarId } from "../helpers/token.js";
import { emailRegistro, emailOlvidePassword } from "../helpers/emails.js";

const formularioLogin = (req, res) => {
    res.render('auth/login',{
        pagina: 'Inicia Login'
        
    })
}

const formularioRegistro = (req, res) => {
    res.render('auth/registro',{
        pagina: 'Crear Cuenta'
    })
}

export {
    formularioLogin,
    formularioRegistro
    
}