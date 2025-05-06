


// src/models/Usuario.js
import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true , index: true},
  edad: { type: Number, required: true },
  sexo: { type: String, enum: ['M', 'F'], required: true },
});

const Usuario = mongoose.model('Usuario', usuarioSchema);
export default Usuario;



/* import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  edad: { type: Number, required: true },
  sexo: { type: String, enum: ['m', 'f', 'otro'] }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);
export default Usuario; */

