import { ModeloUsuario } from "../database/models/ModeloUsuario.js";

export const loginUsuario = async (req, res, next) => {
  //obtengo el email y password del body de la peticion
  const { email, password } = req.body;

  //validar si el usuario existe en la base de datos
  const usuario = await ModeloUsuario.findOne({
    email: email,
    password: password,
  });

  // si hay un usuario con ese email y password
  if (usuario) {
    // genero un token de sesion
    usuario.session =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    // guardo el token en la base de datos
    usuario
      .save()
      // si todo sale bien
      .then(() => {
        // devuelvo el token
        res.json({ session: usuario.session, user: usuario._id, nombre: usuario.nombre, apellido: usuario.apellido });
      })
      .catch((error) => {
        // si hay un error, lo paso al middleware de manejo de errores
        next(error);
      });
  } else {
    next(new Error("El usuario o contraseña son incorrectos"));
  }
};
