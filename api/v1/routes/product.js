const router = require('express').Router();

const {GetAllProducts,GetProductbyID,AddProduct,DeleteProduct,UpdateProduct} = require("../controllers/product");

router.get("/",GetAllProducts);

router.get("/:id",GetProductbyID);

router.put("/:id",UpdateProduct);

router.post("/",AddProduct);

router.delete("/:id",DeleteProduct);

module.exports = router;