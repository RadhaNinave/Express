const fs = require('fs')
const path=require('path')
const products=[]

const getProductsFromFile = (cb)=>{

    const p = path.join(
        path.dirname(process.mainModule.filename),
        'data',
        'product.json'

    );
    fs.readFile(p,(err,data)=>{
        if(err)
        {
          return cb([]);
        }
         cb(JSON.parse(data));
    })
}
module.exports = class Product {
    constructor(title)
    {
        this.title=title;
    }
    save()
    {
       getProductsFromFile(products =>{
        products.push(this);
        fs.writeFile(p,JSON.stringify(products),(err)=>{
            console.log(err)
        })
    })
       
}
     static fetchAll(cb)
     {
        getProductsFromFile(cb)
     
     }

}