//const express = require("express")
import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'
import serviciosRoutes from './routes/serviciosRoutes.js';
import appRoutes from './routes/appRoutes.js';
import db from './config/db.js';

//crear el nombre de variable de la aplicacion
const app = express()

//Conexion a la base de datos
try {
    await db.authenticate();
    //Genere las tablas sync()
    db.sync()
    console.log("Conexion correcta");
} catch (error) {
    console.log(error);
}
//habilitar pug
app.set('view engine','pug')
app.set('views','./views')

//Carpeta Publica
app.use(express.static('public'))


//Rutas
/*app.get('/', function(req,res){
    res.send('hola muddndo')
});*/

// Routing
app.use('/', appRoutes)
// Use busca todo lo que inicia con una diagonal
app.use('/auth', usuarioRoutes);
app.use('/', serviciosRoutes);

//Definir un puero y arrancar app
const port = 3000;
app.listen(port,() =>{
    console.log(`El servidor corre en ${port}`)
});

