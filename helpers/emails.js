import nodemailer from "nodemailer";

const emailRegistro = async (datos) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const { email, nombre, token } = datos;

  // Enviar el email  (es interno de nodemailer)
  await transport.sendMail({
    from: "mypaw.com",
    to: email,
    subject: "Confirma tu Cuenta en CalidadDatos.com",
    text: "Confirma tu Cuenta en CalidadDatos.com",
    html: `
            <p>Hola ${nombre}, comprueba tu cuenta en validadata.com </p>

            <p>Tu cuenta ya esta lista, solo debes de confirmarla en el siguiente enlace:
            <a href="${process.env.BACKEND_URL}:${
      process.env.PORT ?? 3000
    }/auth/confirmar/${token}">Confirmar Cuenta</a></p>

            <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
            `,
  });
};

const emailOlvidePassword = async (datos) => {
    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  
    const { email, nombre, token } = datos;
  
    // Enviar el email  (es interno de nodemailer)
    await transport.sendMail({
      from: "mypaw.com",
      to: email,
      subject: "Restablece tu password en mypaw.com",
      text: "Restablece tu password en mypaw.com",
      html: `
              <p>Hola ${nombre}, has solicitado reestablece tu password en mypaw.com </p>
  
              <p>Sigue en el siguiente enlace para generar un password nuevo:
              <a href="${process.env.BACKEND_URL}:${ process.env.PORT ?? 3000}/auth/olvide-password/${token}">Restablecer password</a></p>

              <p>Si tu no solicitaste el cambio de password, puedes ignorar el mensaje</p>
              `,
    });
  };

export { 
    emailRegistro,
    emailOlvidePassword
 };
