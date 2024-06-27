import { ModeloProyecto } from "../database/models/ModeloProyecto.js";

// funcion para formatear los filtros de busqueda para la base de datos
export const formatearFiltrosDB = (valor) =>
    valor ? new RegExp(valor, "gi") : undefined;
  
  // funcion para obtener el proximo id de un modelo, recibe el modelo como parametro,
  // busca el ultimo id y retorna el siguiente
  export const obtenerProximoId = async (modelo) => {
    const ultimoId = await modelo.findOne().sort("-id").exec();
    return ultimoId ? ultimoId.id + 1 : 1;
  };
  