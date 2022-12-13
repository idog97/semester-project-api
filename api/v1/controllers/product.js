module.exports ={
    GetAllProducts:()=>(req,res)=>
    {return res.status(200).json({MSG:"All Products"})},

    GetProductbyID:()=>(req,res)=>
    {return res.status(200).json({MSG:"product by id" + req.params.id})},

    AddProduct:()=>(req,res)=>
    {return res.status(200).json({MSG:"add new product"})},

    DeleteProduct:()=>(req,res)=>(req,res)=>
    {return res.status(200).json({MSG:"delete product" + req.params.id})},

    UpdateProduct:()=>
    {return res.status(200).json({MSg:"update product by id" + req.params.id})}
};