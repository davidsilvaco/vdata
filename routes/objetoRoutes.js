import express from 'express';
import {formularioCrear,formularioEditar,formularioListar,formularioValidacion} from '../controllers/objetoController.js'


const router = express.Router();

//router.get('/objeto/crear', function(req,res){res.send('estas en crear objeto')});
router.get('/objeto/crear', formularioCrear);
router.get('/objeto/editar', formularioEditar);
router.get('/objeto/listar', formularioListar);
router.get('/objeto/validacion', formularioValidacion);

export default router
