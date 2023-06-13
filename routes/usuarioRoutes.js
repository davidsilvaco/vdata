import express from 'express';
import {formularioLogin,registrar,formularioRegistro} from '../controllers/usuarioController.js'


const router = express.Router();

router.get('/login', formularioLogin);
router.get('/registro', formularioRegistro);
router.post('/registro', registrar);

export default router
