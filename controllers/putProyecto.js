import { ModeloProyecto } from "../database/models/ModeloProyecto.js";

export const putProyecto = async (req, res, next) => {
    const idProyecto = req.params.id;
    const {titulo, descripcion, prioridad, estado} = req.body;
    const datosNuevos = {};

    if (titulo) datosNuevos.titulo = titulo;
    if (descripcion) datosNuevos.descripcion = descripcion;
    if (prioridad) datosNuevos.prioridad = prioridad;
    if (estado) datosNuevos.estado = estado;

    ModeloProyecto.updateOne({id: idProyecto}, datosNuevos)
    .then((data) => {
        //si no se modifico ninguna proyecto, tiro un error que sera capturado por el catch
        if (data.matchedCount === 0) {
          throw new Error(`No exite mascota con el ID ${idProyecto}`);
        }
        //si se modifico el proyecto, devuelvo un mensaje de exito
        res.json({
          message: ` Proyecto con id ${idProyecto} modificada con exito`,
        });
      })
      .catch((error) => {
        //si hay un error, lo paso al siguiente middleware
        next(error);
      });
}