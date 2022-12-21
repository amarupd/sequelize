//requiring the sequelize

const Sequelize = require("sequelize");

//requiring the database

const sequelize = require("../database/database");

// creating the order model to get the data

const Order = sequelize.define("order", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    total: {

        type: Sequelize.FLOAT,
        allowNull: false,

    }
})
module.exports = Order;