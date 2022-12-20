const Sequelize=require("sequelize");


const sequelize=new Sequelize("sequelize_node","root","amar",{
    dialect:"mysql",
    host:"localhost",
});
module.exports=sequelize;