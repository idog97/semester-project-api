const router = require('express').Router();

const {GetAllProducts,GetProductbyID,AddProduct,DeleteProduct,UpdateProduct, NotFound} = require("../controllers/product");

router.get("/",GetAllProducts);

router.get("/:id",GetProductbyID);

router.patch("/:id",UpdateProduct);

router.post("/",AddProduct);

router.delete("/:id",DeleteProduct);

//router.get("/" ,NotFound);

module.exports = router;