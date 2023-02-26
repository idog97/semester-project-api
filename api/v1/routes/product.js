//אובייקט מסוג ראוטר לצורך  ניתוב
const router = require('express').Router();

//קישור לקובץ קוד המוצרים
const {GetAllProducts,GetProductbyID,AddProduct,DeleteProduct,UpdateProduct} = require("../controllers/product-mysql"); 

//ניתוב נקודת קצה בשיטת גט לנתיב של כל המוצרים
router.get("/",GetAllProducts);

//ניתןב נקודת קצה בשיטת גט למוצר ספציפי
router.get("/:id",GetProductbyID);

//עדכון מוצר לפי קוד מוצר
router.put("/:id",UpdateProduct);

//הוספת מוצר חדש
router.post("/",AddProduct);

//מחיקת מוצר לפי קוד מוצר
router.delete("/:id",DeleteProduct);

//ייצוא אובייקט הניתוב המכיל את כל פונקציות הניתוב
module.exports = router;