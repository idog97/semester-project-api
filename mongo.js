const mongoose = require('mongoose'); //קישור לספריית מונגוס
const conn_str = "mongodb+srv://ido:ido@cluster0.mywkouy.mongodb.net/ecomdb"; //הגדרת מחרוזת התחברות לשרת של מונגו
mongoose.connect(conn_str); //פתיחת החיבור לבסיס הנתונים
//הגדרת סכימה/מבנה של אוסף/טבלה של מוצרים
const ProductSchema=mongoose.Schema
({
    _id:mongoose.Schema.Types.ObjectId,
    Pid:Number,
    Pname:String,
    Price:Number,
    Pdesc:String,
    PicName:String
    
},{versionKey:false});

//יצירת מודל - מבנה המייצג את מבנה אוסף הנתתונים
const ProductModel=mongoose.model('product',ProductSchema);
//הפעלת השיטה find על המודל והדפסה ללוג את תוצאת השאילתה
ProductModel.find().then((products)=>{
 console.log(products);
});

//ProductModel.insertMany({Pid:44,Pname:'Cheese',Price:66,Pdesc:'best Cheese',PicName:'Cheese.jpg'}).then((data=>{
    console.log(data);
//}))