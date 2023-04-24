const mysql =require('mysql')

const pool=mysql.createPool(
    {
        host:'localhost',
        user:'root',
        database:'nodejs',
        password:'root12345'
    }
   
);
module.exports = pool.promise();