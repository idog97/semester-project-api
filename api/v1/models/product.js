const mongoose = require('mongoose'); // קישור לספריית מונגוס
const ProductSchema=mongoose.Schema // יצירת אובייקט מסוג סכימה ,מבנה הנתוןנים המשקף את האוסף/טבלה
({
    _id:mongoose.Schema.Types.ObjectId,
    Pid:Number,
    Pname:String,
    Price:Number,
    Pdesc:String,
    PicName:String
    
},{versionKey:false});

//יצירת מודל - מבנה המייצג את מבנה אוסף הנתתונים
module.exports = mongoose.model('product',ProductSchema);