export default function validarUsuario(req, res, next) {
    const { nombre, edad } = req.body;
  
    if (!nombre || typeof nombre !== 'string') {
      return next(new Error('Nombre inválido'));
    }
    if (!edad || typeof edad !== 'number') {
      return next(new Error('Edad inválida'));
    }
  
    next(); // Pasa si todo está ok
  }