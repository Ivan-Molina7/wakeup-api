import { ModeloProyecto } from "../database/models/ModeloProyecto.js";

// controlador para eliminar un proyecto

export const deleteProyecto = async (req, res, next) => {
  // obtengo el id del proyecto a eliminar desde los parametros de la consulta
    const idProyecto = req.params.id;


    // elimino el proyecto con el id proporcionado
    ModeloProyecto.deleteOne({id: idProyecto})
    .then((data) => {
        if (data.deletedCount !== 1) {
            throw new Error(`No existe el proyecto con el id: ${idProyecto}`);
    }else{
        res.json({
            message: `Proyecto con id ${idProyecto} eliminado con exito`,
        });
    }
    })
    .catch((error) => {
        next(error);
    }
)
}