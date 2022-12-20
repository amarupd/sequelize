const Sequelize=require("sequelize");
const Order=Sequelize.define("order",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    total:{
        type: Sequelize.FLOAT,
        allowNull: false,
    }
})
module.exports=Order;