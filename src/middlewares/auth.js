const authMiddleware = (req, res, next) => {
    const token = req.query.token || req.headers['authorization'];
   

    if (token === 'secreto123') {
      console.log('🟡 Autenticado correctamente');
      next(); // Continúa hacia la ruta
    } else {
      res.status(401).json({ error: 'No autorizado' });
    }
  };
  
  export default authMiddleware;