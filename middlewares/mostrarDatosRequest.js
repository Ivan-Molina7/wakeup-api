// middlewares para mostrar los datos de la peticion en consola
export const mostrarDatosRequest = (req, res, next) => {
  // muestro los datos de la peticion en consola
  console.log("\x1b[32m", "metodo:", req.method);
  console.log("\x1b[32m", "url:", req.url);

  console.log("\x1b[32m", "body:", req.body);

  next();
};
