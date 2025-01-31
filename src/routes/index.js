const express = require('express');
const clienteRouter = require('./cliente.router');

const router = express.Router();


// colocar las rutas aquí
router.use('/clientes', clienteRouter)
module.exports = router;