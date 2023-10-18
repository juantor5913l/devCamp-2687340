const express = require('express');

// Rutas
const bootcampRoutes = require('./rutas/bootcamps');

// Crear el objeto principal de la API
const app = express();

// Vincular rutas al objeto app
app.use('/api/v1/devcamp/bootcamps', bootcampRoutes);
app.use('/api/v1/devcamp/course', courseRoutes);



// Crear el servidor de la aplicación
app.listen(5000, () => console.log('Servidor ejecutando en puerto 6000'));
