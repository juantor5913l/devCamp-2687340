const express = require('express')

//Crear el objeto principal de la api

const app = express()


//url de prueba
app.get(('/prueba') ,function(request, response){
    response.send("xd")
})

app.get(('/prueba2') ,(request, response)=>{
    response.status(200)
    json({
        "succes": true
    })
})

//Obtener todos los bootcamps
app.get(('/api/v1/devcamp/bootcamps') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : "aqui van a mostrarse todos los bootcamps"
    })
})
//Obtener bootcamp por id 
app.get(('/api/v1/devcamp/bootcamps/:id') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Obteniendo bootcamp con id ${request.params.id} `
    })
})
//Crear bootcamp
app.post(('/api/v1/devcamp/bootcamps') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : "aqui se va a crear un bootcamp"
    })
})
//Actualizar  bootcamp
app.put(('/api/v1/devcamp/bootcamps/:id') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Actualizar bootcamp con id ${request.params.id} `
    })
})
//Eliminar bootcamp
app.delete(('/api/v1/devcamp/bootcamps/:id') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Eliminar bootcamp con id ${request.params.id} `
    })
})

//Obtener todos los usuarios
app.get(('/api/v1/devcamp/usuarios') ,(request, response)=>{
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
app.get(('/api/v1/devcamp/cursos') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : "aqui van a mostrarse todos los cursos del bootcamp"
    })
})
app.get(('/api/v1/devcamp/cursosGeneral') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : "aqui van a mostrarse todos los cursos en general"
    })
})

app.get(('/api/v1/devcamp/cursos/:id') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Obteniendo cursos con id ${request.params.id} `
    })
})

app.post(('/api/v1/devcamp/cursos') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : "aqui se va a crear un curso"
    })
})

app.put(('/api/v1/devcamp/cursos/:id') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Actualizar cursos con id ${request.params.id} `
    })
})

app.delete(('/api/v1/devcamp/cursos/:id') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Eliminar curso con id ${request.params.id} `
    })
})

app.get(('/api/v1/devcamp/rewiewsBootcamp') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : "aqui van a mostrarse todos las reseñas del bootcamp"
    })
})
app.get(('/api/v1/devcamp/rewiews') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : "aqui van a mostrarse todos las reseñas en general"
    })
})

app.get(('/api/v1/devcamp/rewiews/:id') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Obteniendo reseña con id ${request.params.id} `
    })
})

app.post(('/api/v1/devcamp/rewiews') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : "aqui se va a crear una reseña"
    })
})

app.put(('/api/v1/devcamp/rewiews/:id') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Actualizar reseñas con id ${request.params.id} `
    })
})

app.delete(('/api/v1/devcamp/rewiews/:id') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Eliminar reseñas con id ${request.params.id} `
    })
})

//Crear el servidor de la aplicacion
app.listen(5000,console.log ('servidor ejecutando en puerto ' + 5000))