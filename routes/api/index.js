var express = require('express');
var router = express.Router();


//rutas de cada identidad
var condominiosApiRoutes = require('./condominios/index');
//localhost:3000/api/con/
router.use('/con', condominiosApiRoutes);

module.exports = router;