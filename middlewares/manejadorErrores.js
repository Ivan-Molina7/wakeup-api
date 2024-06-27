// middleware para manejar errores en la aplicación
export const manejadorErrores = (error, req, res, next) => {
  // extraigo el statusCode y el mensaje de error, si no existen, les asigno valores por defecto
  const statusCode = error.statusCode || 500;
  const errorMessage = error.message || "Ha ocurrido un error inesperado!";

  // muestro el error en consola
  console.error("\x1b[31m", `Error: (${statusCode}):`, error.stack);

  // devuelvo el error al cliente
  return res.status(statusCode).json({ error: errorMessage });
};
