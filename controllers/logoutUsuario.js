
import { ModeloUsuario } from "../database/models/ModeloUsuario.js";


export const logoutUsuario = async (req, res, next) => {
   
      // obtenemos el token de sesion desde los encabezados de la consulta
    const token = req.headers["authorization"];

      // buscamos el usuario que tenga ese token como session
    const usuario = await ModeloUsuario.findOne({ session: token });

      // si encontramos el usuario, cerramos la sesion
    if(usuario){
        usuario.session = null;
        await usuario.save();
            // devolvemos un mensaje de exito
        res.json({message: "Sesion cerrada con exito"});
   
    }else{
            // si no encontramos el usuario, devolvemos un error
        next(new Error("No se pudo cerrar la sesion, intente nuevamente"));
    }
}