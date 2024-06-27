import { ModeloUsuario } from "../database/models/ModeloUsuario.js";
import { obtenerProximoId } from "../utils/functions.js";



export const postUsuario = async (req, res, next) => {
    const {nombre, apellido, email, password} = req.body;

  try{
    //validar si el usuario ya existe en la base de datos por email
    const usuarioExistente = await ModeloUsuario.findOne({email: email});

    //si el usuario ya existe, lanza un error
    if (usuarioExistente) {
        throw new Error("El usuario ya existe");
    }

    const nuevoUsuario = new ModeloUsuario()

    nuevoUsuario.id = await obtenerProximoId(ModeloUsuario);
    nuevoUsuario.nombre = nombre;
    nuevoUsuario.apellido = apellido;
    nuevoUsuario.email = email;
    nuevoUsuario.password = password;

    nuevoUsuario.save()
    .then((data) => {
       message: `Nuevo usuario con id ${data.id} creado con exito`
    })
    .catch(error => {
        next(error)
    })
  }catch(error){
    next(error)
  }
}