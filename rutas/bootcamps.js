const express = require('express')
const router = express.Router()

//url bootcamps
//endpoints

//Obtener todos los bootcamps
router.get('/' ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : "aqui van a mostrarse todos los bootcamps"
    })
})





//Obtener bootcamp por id 
router.get('/:id' ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Obteniendo bootcamp con id ${request.params.id} `
    })
})

//Crear bootcamp
router.post('/' ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : "aqui se va a crear un bootcamp"
    })

})
//Actualizar  bootcamp
router.put('/:id',(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Actualizar bootcamp con id ${request.params.id} `
    })
})
//Eliminar bootcamp
router.delete(('/:id/eliminar') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Eliminar bootcamp con id ${request.params.id} `
    })
})

//Exportar(common js) router 
module.exports = router
//endpoints
