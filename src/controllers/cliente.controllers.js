const catchError = require('../utils/catchError');
const Cliente = require('../models/clientes');
const clienteRouter = require('../routes/cliente.router');

const getAll = catchError(async (req, res) => {
    // Operaciones...
    const result = await Cliente.findAll();
    //select * from users
    return res.status(200).json(result);
});

const create = catchError(async (req, res) => {

    const result = await Cliente.create(req.body)
    return res.status(201).json(result);
});


const destroy = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Cliente.destroy({ where: { id } });
    if (!result) return res.status(404).json({ message: "User not found" });
    return res.sendStatus(204);
});


const update = catchError(async (req, res) => {
    const { id } = req.params;

    const result = await Cliente.update(
        req.body,
        { where: { id }, returning: true }
    );
    if (result[0] == 0) return res.status(404).json({ message: "no hay nada papi, aun no has modificado  mi son " });
    return res.status(201).json(result[0][1]);

});



module.exports = {
    getAll,
    create,
    destroy,
    update,


} 