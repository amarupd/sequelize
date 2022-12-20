const sequelize = require("./database/database");
const Customer = require("./models/customer");
const Order = require("./models/order");

Customer.hasMany(Order);
sequelize
    .sync()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })