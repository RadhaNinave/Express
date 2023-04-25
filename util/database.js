const mysql =require('mysql2')
const promise =require('promise')
const pool=mysql.createPool(
    {
        host:'localhost',
        user:'root',
        database:'nodejs',
        password:'root12345',
       

        
    }
   
);
module.exports=pool.promise();