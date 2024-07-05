import { Schema, model } from "mongoose";

// Definir el esquema de la colección proyectos
const schemaProyecto = new Schema({
  id: { type: Number, required: true, unique: true },
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  prioridad: {
    type: String,
    enum: ["Baja", "Media", "Alta"],
    default: "Media"
  },
  estado: {
    type: String,
    enum: ["Sin empezar", "En progreso", "Finalizado"],
    default: "Sin empezar"
  },
  usuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true }, // Referencia al modelo Usuario
  categoria: {
    type: String,
    enum: ["Estudios", "Trabajo", "Personal", "Otra"],
    default: "Otra"
  },
});

// Exportar el modelo
export const ModeloProyecto = model("Proyecto", schemaProyecto);