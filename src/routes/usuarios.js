import express from 'express';
import validarUsuario from '../middlewares/validarUsuario.js';
import Usuario from '../models/Usuarios.js';


const router = express.Router();



router.post('/agregar', validarUsuario, async (req, res) => {
  const { nombre, edad, sexo } = req.body;

  try {
    const resultado = await Usuario.create({ nombre, edad, sexo }); // <- usando el modelo Mongoose
    res.json({ mensaje: 'Usuario guardado', id: resultado._id });
  } catch (error) {
    console.error('❌ Error al guardar el usuario:', error); // <- Esto mostrará el error real
    res.status(500).json({ error: 'Error al guardar el usuario' });
  }
});

router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});


// Obtener un usuario por ID
router.get('/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar el usuario' });
  }
});

// Actualizar usuario
router.put('/:id', async (req, res) => {
  try {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!usuarioActualizado) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json({ mensaje: 'Usuario actualizado', usuario: usuarioActualizado });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
});

// Eliminar usuario
router.delete('/:id', async (req, res) => {
  try {
    const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuarioEliminado) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json({ mensaje: 'Usuario eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
});

export default router;


/* router.post('/agregar',  async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.json({ mensaje: 'Usuario creado', id: nuevoUsuario._id });
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar el usuario' });
  }
});
 */

//en esta pàrte solo esta simple como utilizar la validacion sin desestructuracion y sin el consolo log
/* 
router.post('/', validarUsuario, (req, res) => {
  res.json({ mensaje: 'Usuario creado exitosamente', datos: req.body });
});
 */


// este codigfo es sin la conexion a la base de datos en mongo db
/* router.post('/', validarUsuario, (req, res) => {
    const { nombre, edad } = req.body;
    console.log('🔵 Usuario recibido:', nombre, edad);
    res.json({ mensaje: 'Usuario creado', usuario: { nombre, edad } });
  });
   */


  /* 
  agrega usuarario con la forma tradicional de conexion a mongodb local
  
  
  router.post('/agregar',validarUsuario, async (req, res) => {
    const { nombre, edad ,sexo } = req.body;
    const db = obtenerDB();
  
    try {
      const resultado = await db.collection('usuarios').insertOne({ nombre, edad , sexo});
      res.json({ mensaje: 'Usuario guardado', id: resultado.insertedId });
    } catch (error) {
      res.status(500).json({ error: 'Error al guardar el usuario' });
    }
  });


  router.get('/', async (req, res) => {
    const db = obtenerDB();
  
    try {
      const usuarios = await db.collection('usuarios').find().toArray();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
  }); */
