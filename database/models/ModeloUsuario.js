import { Schema, model } from "mongoose";

// Definir el esquema de la colección usuarios
const schemaUsuario = new Schema({
    id: { type: Number, required: true, unique: true },
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    session: String
});

// Exportar el modelo
export const ModeloUsuario = model("Usuario", schemaUsuario);