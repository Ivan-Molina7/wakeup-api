import { ModeloProyecto } from "../database/models/ModeloProyecto.js";
import { formatearFiltrosDB } from "../utils/functions.js";

export const getProyectos = async (req, res, next) => { 

    // formateo los filtros
  const filtroTitulo = formatearFiltrosDB(req.query.titulo);
  const filtroPrioridad = formatearFiltrosDB(req.query.prioridad);
  const filtroEstado = formatearFiltrosDB(req.query.estado);
  const filtroIdUsuario = req.query.idUsuario
  
  // obtengo los filtros
  const filtros = {};
  //
  if (filtroTitulo) filtros.titulo = filtroTitulo;
  if (filtroPrioridad) filtros.prioridad = filtroPrioridad;
  if (filtroEstado) filtros.estado = filtroEstado;
  if (filtroIdUsuario) filtros.usuario = filtroIdUsuario;

    ModeloProyecto.find(filtros)
    .then(data => {
        console.log("Get mascotas =>" ,data);
        if(data.length === 0){
            res.json([]);
        }else{
            res.json(data)
        }
    })
    .catch(error => {
        next(error)
    })
}