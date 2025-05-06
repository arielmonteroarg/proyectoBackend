//conexion con mongodb atlas y mongoose
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Conectado a MongoDB Atlas');
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB Atlas:', error.message);
    process.exit(1);
  }
};

export default conectarDB;




/* // db.js conexion basica con mongo DB con el formato clasico basico 
import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017'; // URL de conexión local
const client = new MongoClient(uri);

let db;

export async function conectarDB() {
  try {
    await client.connect();
    db = client.db('miBaseDeDatos'); // Usamos esta base (se crea si no existe)
    console.log('🟢 Conectado a MongoDB');
  } catch (error) {
    console.error('🔴 Error al conectar a MongoDB:', error);
    process.exit(1); // Salir si falla la conexión
  }
}

export function obtenerDB() {
  return db;
} */



/* Conexion a mongodb con mongoose 

import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Conectado a MongoDB Atlas');
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB Atlas:', error.message);
    process.exit(1);
  }
};

export default conectarDB; */