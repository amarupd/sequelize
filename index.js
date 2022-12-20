const sequelize = require("./database/database");
const Customer = require("./models/customer");
const Order = require("./models/order");

Customer.hasMany(Order);
sequelize
    .sync({force:true})
    .then((result) => {
        return Customer.create({name:"chandler bing",email:"cb@gmail.com"})
        console.log(result);
    })
    .then(customer=>{
        console.log("first customer created",customer);
        return Order.create({total:7780})
    })
    .then(order=>{
        console.log("order is:", order);
    })
    .catch((err) => {
        console.log(err);
    })