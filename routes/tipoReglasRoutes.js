import express from 'express';
import {formCreaTipoRegla,insertaTipoRegla} from '../controllers/tipoReglasController.js'


const router = express.Router();

//router.get('/objeto/crear', function(req,res){res.send('estas en crear objeto')});
router.get('/tiporegla/crear', formCreaTipoRegla);
router.post('/tiporegla/crear', insertaTipoRegla);

export default router