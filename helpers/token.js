import  jwt  from "jsonwebtoken";


//const generarJWT = datos => jwt.sign({id: datos.id, nombre: datos.nombre }, 'supersecreta',{ expiresIn: '1d'  })
const generarJWT = datos => jwt.sign({id: datos.id, nombre: datos.nombre }, process.env.JWT_SECRET,{ expiresIn: '1d'  })

// GenerarID unicos
const generarId  = () =>  Math.random().toString(32).substring(2) + Date.now().toString(32);

export {
    generarId,
    generarJWT
}