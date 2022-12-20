const sequelize = require("./database/database");
const Customer = require("./models/customer");
const Order = require("./models/order");

Customer.hasMany(Order);
let customerId=null;
sequelize
    .sync({force:true})
    .then((result) => {
        return Customer.create({name:"chandler bing",email:"cb@gmail.com"})
        console.log(result);
    })
    .then(customer=>{
        customerId=customer.id;
        console.log("first customer created",customer);
        return customer.createOrder({total:7780});
    })
    .then(order=>{
        console.log("order is:", order);
        return Order.findAll({where:customerId});
    })
    .then(orders=>{
        console.log("order belong to customer",orders);
    })
    .catch((err) => {
        console.log(err);
    })