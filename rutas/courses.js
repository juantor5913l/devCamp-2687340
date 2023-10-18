const express = require('express')
const router = express.Router()


router.get('/' ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : "aqui van a mostrarse todos los bootcamps"
    })
})
router.get('/:id' ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Obteniendo curso con id ${request.params.id} `
    })
})
router.post('/' ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : "aqui se va a crear un curso"
    })
})

router.put('/:id',(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Actualizar curso con id ${request.params.id} `
    })
})
//Eliminar bootcamp
router.delete(('/:id/eliminar') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Eliminar curso con id ${request.params.id} `
    })
})
router.get('/mostrar', (request, response) => {
    response.status(200).json({
        success: true,
      msg: 'Aquí se van a mostrar todos los cursos del bootcamp',
    });
  });
router.get('/cursosGeneral', (request, response) => {
    response.status(200).json({
      success: true,
      msg: 'Aquí van a mostrarse todos los cursos en general',
    });
  });
  app.get('/:id', (request, response) => {
    response.status(200).json({
      success: true,
      msg: `Obteniendo cursos con id ${request.params.id}`,
    });
  });
  
//Exportar(common js) router 
module.exports = router
//endpoints
