const express = require('express')
const router = express.Router()


router.get('/', (request, response) => {
    response.status(200).json({
      success: true,
      msg: 'Aquí van a mostrarse todos las reseñas del bootcamp',
    });
  });
  
router.get('/', (request, response) => {
    response.status(200).json({
      success: true,
      msg: 'Aquí van a mostrarse todos las reseñas en general',
    });
  });
  
router.get(':id', (request, response) => {
    response.status(200).json({
      success: true,
      msg: `Obteniendo reseña con id ${request.params.id}`,
    });
  });
  
router.post('/api/v1/devcamp/rewiews', (request, response) => {
    response.status(200).json({
      success: true,
      msg: 'Aquí se va a crear una reseña',
    });
  });
  
router.put('/api/v1/devcamp/rewiews/:id', (request, response) => {
    response.status(200).json({
      success: true,
      msg: `Actualizar reseñas con id ${request.params.id}`,
    });
  });
  
router.delete('/api/v1/devcamp/rewiews/:id', (request, response) => {
    response.status(200).json({
    success: true,
    msg: `Eliminar reseñas con id ${request.params.id}`,
    });
});
  