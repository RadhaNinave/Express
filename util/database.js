const Sequelize =require('sequelize')
const sequelize =new Sequelize('nodejs','root','root12345',{
    dialect:'mysql',
    host:'localhost'
})
module.exports=sequelize;