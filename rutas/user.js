//Obtener todos los usuarios
router.get(('/api/v1/devcamp/usuarios') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : "aqui van a mostrarse todos los usuarios"
    })
})

app.get(('/api/v1/devcamp/usuarios/:id') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Obteniendo usuarios con id ${request.params.id} `
    })
})

app.post(('/api/v1/devcamp/usuarios') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : "aqui se va a crear un usuario"
    })
})

app.put(('/api/v1/devcamp/usuarios/:id') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Actualizar usuario con id ${request.params.id} `
    })
})

app.delete(('/api/v1/devcamp/usuarios/:id') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Eliminar usuario con id ${request.params.id} `
    })
})