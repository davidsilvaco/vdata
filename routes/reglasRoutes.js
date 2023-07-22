import express from 'express';
import {formCreaRegla,insertaRegla} from '../controllers/reglasController.js'


const router = express.Router();

//router.get('/objeto/crear', function(req,res){res.send('estas en crear objeto')});
router.get('/regla/crear', formCreaRegla);
router.post('/regla/crear', insertaRegla);

export default router