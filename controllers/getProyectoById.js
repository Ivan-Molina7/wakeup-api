import { ModeloProyecto } from "../database/models/ModeloProyecto.js";

export const getProyectoById = async (req, res, next) => {
    const idProyecto = req.params.id;
    ModeloProyecto.findOne({ id: idProyecto })
        .then(data => {
            if (!data) {
               throw new Error("No existe el proyecto con el id: " + idProyecto); 
            } else {
                res.json(data);            }
        })
        .catch(error => {
            next(error)
        })
}