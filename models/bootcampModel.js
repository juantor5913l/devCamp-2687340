const mongoose = require('mongoose')

//definir el schema, plano gral de todo bootcamp
const bootacampSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [ true, "Nombre requerido" ],
        unique: [ true , "Nombre repetido" ]
    } ,
    phone: {
        type: Number,
        require: [ true, "Telefono requerido" ],
        maxlength: [ 10 , "Telefono muy largo" ]
    },
    address: {
        type: String,
        require: [ true, "Direccion requerido" ],
        maxlength: [ 50 , "Direccion muy larga" ],
        minlength: [ 10 , "Direccion muy corta" ]
    },
    topics:{
        type:[ String ],
        enum: [ "AI" , "Backend","Frontend" , "Devops" ]
    },
    createdAt: Date
})

//exportar el modelo
const bootcampModel = mongoose.model("Bootcamp" , bootacampSchema)
module.exports = bootcampModel