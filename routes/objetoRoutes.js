import express from 'express';
import {formularioCrear,formularioEditar,formularioListar  ,formularioValidacion,validarObjeto,insertaObjeto,validaArchivo} from '../controllers/objetoController.js'


const router = express.Router();

//router.get('/objeto/crear', function(req,res){res.send('estas en crear objeto')});
router.get('/objeto/crear', formularioCrear);
router.post('/objeto/crear', insertaObjeto);
router.get('/objeto/editar', formularioEditar);
router.get('/objeto/listar', formularioListar);
router.get('/objeto/validacion', formularioValidacion);
router.post('/objeto/validacion', validarObjeto);
router.post('/objeto/validaarchivo', validaArchivo);

export default router
