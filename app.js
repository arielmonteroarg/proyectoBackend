import express from 'express';
import logger from './src/middlewares/logger.js';
import errorHandler from './src/middlewares/errorHandler.js';
import usuariosRouter from './src/routes/usuarios.js';

import conectarDB  from './src/db.js'; // importar la función




import dotenv from 'dotenv';
dotenv.config();


const app = express();
const PORT = process.env.PUERTO || 3000;

app.use(express.json());        // Middleware nativo
app.use(logger);                // Logging
app.use('/usuarios', usuariosRouter); // Rutas
app.use(errorHandler);         // Debe ir al final


// Ruta
app.get('/', (req, res) => {
  res.send('Hola mundo desde Express!');
});


// Conectar a Mongo antes de iniciar el servidor
conectarDB().then(() => {
  app.listen(PORT, () => console.log(` 🚀 Servidor en http://localhost:${PORT}`));
});