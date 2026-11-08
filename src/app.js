const express = require('express'); 
const productoRoutes = require('./routes/producto.routes'); 
 
const app = express(); 

// Habilitar CORS para permitir peticiones desde el frontend
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Permite que Express entienda el JSON que envía el cliente 
app.use(express.json()); 
 
// Ruta de prueba 
app.get('/', (req, res) => { 
  res.json({ mensaje: 'API de productos funcionando' }); 
}); 
 
// Todas las rutas de productos comienzan con /api/productos 
app.use('/api/productos', productoRoutes); 

// Si ninguna ruta coincide, respondemos 404 
app.use((req, res) => { 
  res.status(404).json({ mensaje: 'Ruta no encontrada' }); 
}); 

module.exports = app;