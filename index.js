const sequelize = require("./database/database");
const Customer = require("./models/customer");
const Order = require("./models/order");

Customer.hasMany(Order);
let customerId = null;
sequelize
    .sync()

    //inserting the value inside the table

    .then((result) => {
        return Customer.create({ name: "amar dutt upadhyay", email: "amarduttupadhyay@gmail.com" })
        console.log(result);
    })
    .then(customer => {
        customerId = customer.id;
        console.log("first customer created", customer);
        return customer.createOrder({ total: 48 });
    })

    //joining two table to create relation between the table
    .then(order => {
        console.log("order is:", order);
        return Order.findAll({ where: customerId });
    })
    .then(orders => {
        console.log("order belong to customer", orders);
    })
    .catch((err) => {
        console.log(err);
    })