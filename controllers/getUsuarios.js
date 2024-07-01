import { ModeloUsuario } from "../database/models/ModeloUsuario.js";


export const getUsuarios = async (req, res, next) => { 

    // formateo los filtros
  const filtroIdUsuario = req.query.idUsuario;

  console.log("ESTAMOS ACAAAA "+ filtroIdUsuario);
  
  // obtengo los filtros
  const filtros = {};
  //
  if (filtroIdUsuario) filtros._id = filtroIdUsuario;

    ModeloUsuario.find({_id: filtros._id})
    .then(data => {
        console.log("Get usuarios =>" ,data);
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