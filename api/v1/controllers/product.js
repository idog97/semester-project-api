//ייצוא אובייקט עם 5 פונקציות עבטר כל אחת מהפעולות,המטרה שכל הלוגיקה תשב בקובץ הנוכחי

module.exports ={
    
    GetAllProducts:(req,res)=>
    {   const ProductModel = require('../models/product') //קישור למודל של אוסף המוצרים
        ProductModel.find().then((products)=>{
        console.log(products);
        return res.status(200).json(products)
       });
    },
       

    GetProductbyID:(req,res)=>
    {  const ProductModel = require('../models/product') //קישור למודל של אוסף המוצרים
        ProductModel.findOne({Pid:req.params.id}).then((product)=>{
        console.log(product);
        return res.status(200).json(product)
       });
    },

    AddProduct:(req,res)=>
    {
        
        const ProductModel = require('../models/product') //קישור למודל של אוסף המוצרים
        ProductModel.insertMany(req.body).then((result)=>{
        console.log(result);
        return res.status(200).json(result)
       });
        
    },

        //return res.status(200).json({MSG:"add new product"})},

    DeleteProduct:(req,res)=>
    {   
        const ProductModel = require('../models/product');
        ProductModel.deleteOne({Pid:req.params.id},req.body).then((product)=>{
            console.log("item deleted",product);
            return res.status(200).json({product});
        });
    },
    
        //return res.status(200).json({MSG:"delete product" + req.params.id})},

    UpdateProduct:(req,res)=>
    {
        
        var pname = req.params.pname;
        var price = req.params.price;
        var pdesc = req.params.pdesc;
        var picname = req.params.picname;
        const ProductModel = require('../models/product')
        ProductModel.updateOne({Pid:req.params.id},req.body).then((products)=>{
            console.log(products);
            return res.status(200).json({products});
        });
    },
};