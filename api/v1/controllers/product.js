

module.exports ={
    GetAllProducts:(req,res)=>
    {   let connection = global.db;
        connection.query('SELECT * FROM t_product', function(err,rows,fields){
        if(err)
        {
           console.log(err.message);
           return res.status(500).json({MSG:err.message});
        }
        else
        {
           console.log("ok")
           return res.status(200).json({rows});
        }
    });
    },
       

    GetProductbyID:(req,res)=>
    {   let connection = global.db;
        connection.query("select * from t_product where pid =" + req.params.id,function (err,rows,fields)
        {
            if(err)
            {
                console.log(err.message);
                return res.status(500).json({MSG:err.message});
            }
            else
            {
                console.log("ok");
                return res.status(200).json(rows);
            }
        });
    },

    AddProduct:(req,res)=>
    {   let connection = global.db;
        var pname = req.params.pname;
        var price = req.params.price;
        var pdesc = req.params.pdesc;
        var picname = req.params.picname;
        var sql ='INSERT INTO t_product(pname,price,pdesc,picname) VALUES (pname,price,pdesc,picname)';
        connection.query(sql,(err,rows,fields)=>{
            if(err)
            {
                console.log(err.message);
                return res.status(500).json(er.message);
            }
            else
            {
                console.log("ok");
                return res.status(200).json(rows);
            }
        })
    },

        //return res.status(200).json({MSG:"add new product"})},

    DeleteProduct:(req,res)=>
    {   let connection = global.db;
        connection.query('DELETE from t_product WHERE pid = '+req.params.id,
        (err,rows,fields)=>
        {
        {
            if(err)
            {
                console.log(err.message);
                return res.status(500).json(err.message);
            }
            else
            {
                console.log("ok");
                return res.status(200).json(rows);
            }
        }   
        }
    )},
    
        //return res.status(200).json({MSG:"delete product" + req.params.id})},

    UpdateProduct:(req,res)=>
    {
        let connection = global.db;
        var pname = req.params.pname;
        var price = req.params.price;
        var pdesc = req.params.pdesc;
        var picname = req.params.picname;
        var sql = 'UPDATE t_product SET pname = pname, price = price,pdesc=pdesc,picname=picname WHERE pid ='+ req.params.id;
        connection.query(sql,function(err,rows,fields)
        {
            if(err)
            {
                console.log(err.message);
                return res.status(500).json(err.message);
            }
            else
            {
                console.log("ok");
                return res.status(200).json(rows);
            }
        }
        //return res.status(200).json({MSG:"update product by id" + req.params.id
    )},

    //NotFound:()=>
    //{return res.status(404).json({MSG:"Not Found 404"})},
};