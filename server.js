//dependencias del proyecto
const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')

//dependencia de conexion
const conectarDB = require("./config/db")

//dependencias de rutas
const bootacampsRoutes = require('./routes/bootcampRoutes')

//configurar dotenv
dotenv.config({
    path: "./config/.env"
})

//conectar a bd
conectarDB()

//crear objeto app express
const app = express()

//Habilitar express 
app.use(express.json()) 

//establecer rutas de proyecto
app.use('/api/v1/bootcamps' , bootacampsRoutes)

//crear servidore de aplicaciones express
app.listen( process.env.PUERTO, () => { console.log(` Servidor express ejecutando ${process.env.PUERTO}` .bgCyan.yellow.underline)} )