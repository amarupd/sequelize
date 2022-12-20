const sequelize = require("./database/database");
const Customer = require("./models/customer");
const Order = require("./models/order");

Customer.hasMany(Order);
sequelize
    .sync()
    .then((result) => {
        return Customer.create({name:"chandler bing",email:"cb@gmail.com"})
        console.log(result);
    }).then(customer=>{
        console.log("first customer created",customer);
    })
    .catch((err) => {
        console.log(err);
    })