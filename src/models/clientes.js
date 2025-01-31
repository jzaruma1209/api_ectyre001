const { DataTypes, DatabaseError } = require('sequelize');
const sequelize = require('../utils/connection');
// En Mayúsculas y singular      // en minúsculas y singular
const Cliente = sequelize.define('cliente', {
    // Definimos las columnas aquí
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    buys: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numberPhone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }

});

module.exports = Cliente;