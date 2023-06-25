import express from 'express'
import csrf from 'csurf';
import cookieParser from 'cookie-parser';

import usuarioRoutes from './routes/usuarioRoutes.js'
import serviciosRoutes from './routes/serviciosRoutes.js';
import appRoutes from './routes/appRoutes.js';
import objetoRoutes from './routes/objetoRoutes.js';
import db from './config/db.js';

//crear el nombre de variable de la aplicacion
const app = express()

//Habilitar lectura de datos del formulario si son tipo texto email etc
app.use( express.urlencoded({extended: true }))

//Habilitar cookieParser
app.use( cookieParser())

// Habilitar CSRF
app.use(csrf({ cookie: true}))

//Conexion a la base de datos
try {
    await db.authenticate();
    //Genere las tablas sync() si no existen
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


// Routing
app.use('/', appRoutes)
// Use busca todo lo que inicia con una diagonal
app.use('/auth', usuarioRoutes);
app.use('/', serviciosRoutes);
app.use('/', objetoRoutes);
//app.use('/api', apiRoutes)

//Definir un puero y arrancar app
// Definir un puerto y arrancar el proyecto
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});
