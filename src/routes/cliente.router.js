const { getAll, create, destroy, update } = require('../controllers/cliente.controllers');
const express = require('express');

const clienteRouter = express.Router();

clienteRouter.route("/")
    .get(getAll)
    .post(create);

clienteRouter.route("/:id")
    .delete(destroy)
    .put(update);

module.exports = clienteRouter;
