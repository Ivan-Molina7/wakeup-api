import express from "express";
import "dotenv/config";
import cors from "cors";
import { conectarDB } from "./database/conexion.js";

import { manejadorErrores } from "./middlewares/manejadorErrores.js";
import { mostrarDatosRequest } from "./middlewares/mostrarDatosRequest.js";

import { getProyectos } from "./controllers/getProyectos.js";
import { getProyectoById } from "./controllers/getProyectoById.js";
import { postProyecto } from "./controllers/postProyecto.js";
import { putProyecto } from "./controllers/putProyecto.js";
import { deleteProyecto } from "./controllers/deleteProyecto.js";
import { postUsuario } from "./controllers/postUsuario.js";
import { loginUsuario } from "./controllers/loginUsuario.js";
import { getIndex } from "./controllers/getIndex.js";
import { controlarSesion } from "./middlewares/controlarSesion.js";
import { logoutUsuario } from "./controllers/logoutUsuario.js";


// creamos la app de express
const app = express();
// definimos el puerto donde correrá el servidor
const port = 3000;
// usamos express.json para poder leer el body de las peticiones
app.use(express.json());
// habilitamos cors para poder hacer peticiones desde el frontend
app.use(cors());
// conectamos a la base de datos
await conectarDB();

//middleware -> mostrar data requests
app.use(mostrarDatosRequest);

app.post("/registrar", postUsuario)
app.post("/login", loginUsuario)


//este middleware sirve para controlar la sesion de los usuarios y que no se pueda acceder sin iniciar sesion a los endpoints
app.use(controlarSesion)


//este endpoint sirve para cerrar la sesion 
app.post("/logout", logoutUsuario)
// Este endpoint te dirije a la pagina principal
app.get("/", getIndex)
// Este endpoint obtiene todos los proyectos de la base de datos
app.get("/proyectos", getProyectos); 
// Este endpoint obtiene un proyecto de la base de datos por su id
app.get("/proyecto/:id", getProyectoById);
// Este endpoint crea un nuevo proyecto en la base de datos 
app.post("/proyectos", postProyecto);
// Este endpoint actualiza un proyecto de la base de datos
app.put("/proyecto/:id", putProyecto);
// Este endpoint elimina un proyecto de la base de datos
app.delete("/proyecto/:id", deleteProyecto);

// middleware manejador de errores
app.use(manejadorErrores);


// levantamos el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en puerto http://localhost:${port}`);
  });
  
  