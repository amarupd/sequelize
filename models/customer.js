const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Customer = sequelize.define("customer", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {

        type: Sequelize.STRING,
        allowNull: false,

    },
    email: {

        type: Sequelize.STRING,
        allowNull: false,
        
    }
});

module.exports = Customer;