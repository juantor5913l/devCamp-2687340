const express = require('express')
const bootcampModel = require('../models/bootcampModel')

//definir ruteador
const router = express.Router()

//Trae todos los bootcamps
router.get('/', async (req, res) => {
//seleccionar todos los bootcamps en la coleccion
const bootcamps = await bootcampModel.find()
    res.json({
        success: true,
        result: bootcamps
    })
})

//Seleccionar bootcamp por id 
router.get('/:id', async (req, res) => {
    //Recoger el parametro id de la url
    bootcampid = req.params.id
    //seleccionar el bootcamp por id
    selected_bootcamp = await bootcampModel.findById(bootcampid) 
    res.json({
        success:true,
        result: selected_bootcamp
    })
})

//Crear bootcamp
router.post('/', async (req, res) => {
    //seleccionar el bootcamp por id
    const new_bootcamp =await bootcampModel.create(req.body) 
    res.json({
        success:true,
        result: new_bootcamp
    })
})

//exportar ruteador
module.exports = router                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    