import mongoose from "mongoose";

// obtener la url de conexión desde las variables de entorno
const urlDb = process.env.MONGODB_URL;

// función para conectar a la base de datos
export const conectarDB = () => {
  return mongoose
    .connect(urlDb)
    .then(() => {
      // si la conexión es exitosa, muestro un mensaje en consola
      console.log("Conectado a la DB!");
    })
    .catch((error) => {
      // si hay un error, muestro un mensaje en consola
      console.log("Error conectando a la base de datos", error);
    });
};
