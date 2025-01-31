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
    email: {
        type: DataTypes.STRING(100),
        allowNull: true,//permite saber si el valor puede llegar  a ser nullo o llenarse vacio
        unique: true,
        // allowNull por defecto esta en true
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