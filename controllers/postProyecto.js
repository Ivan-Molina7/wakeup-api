import { ModeloProyecto } from "../database/models/ModeloProyecto.js";
import { obtenerProximoId } from "../utils/functions.js";

export const postProyecto = async (req, res, next) => { 
    const {titulo, descripcion, prioridad, estado, usuario, categoria} = req.body;
    const nuevoProyecto = new ModeloProyecto()

    nuevoProyecto.id =  await obtenerProximoId(ModeloProyecto)
    nuevoProyecto.titulo = titulo
    nuevoProyecto.descripcion = descripcion
    nuevoProyecto.prioridad = prioridad
    nuevoProyecto.estado = estado
    nuevoProyecto.usuario = usuario
    nuevoProyecto.categoria = categoria

    nuevoProyecto.save()
    .then((data) => {
        res.json(data)
    })
    .catch(error => {
     
        next(error)
    
    })
}