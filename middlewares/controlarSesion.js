import { ModeloUsuario } from "../database/models/ModeloUsuario.js";

export const controlarSesion = async (req, res, next) => {
  try {
    // obtengo el auth header de los encabezados de la consulta
    const authHeader = req.headers["authorization"];

    // si no hay auth header, devuelvo error
    if (!authHeader) {
        throw {
            statusCode: 401,
            message: "No autorizado - No se envio token de sesion",
          };
    }
    // busco usuario que tenga el session token en la base de datos
    const usuario = await ModeloUsuario.findOne({
      session: req.headers["authorization"],
    });

    // si hay usuario con ese session token, lo guardo en req.usuario y paso al siguiente middleware
    if (usuario) {
      req.usuario = usuario;
      next();
    } else {
      // si no hay usaurio con ese session token, devuelvo error
      throw { statusCode: 401, message: "No autorizado - sesion no valida" };
        }
  } catch (error) {
    next(error);
  }
};
