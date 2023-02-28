const express = require ('express'); //חיבור לספריית אקספרס
const app = express(); // יצירת אובייקט של אקספרס
const morgan = require('morgan'); // חיבור לספריית מורגן שמבצעת יומן
const Productrouter = require('./api/v1/routes/product'); //קישור לראוטר של מוצרים שהוגדר בקובץ בנפרד
app.use(express.json()) //מתורגמן,מידלוור שקורא אובייקטים מסוג ג׳ייסון
app.use('/static',express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev')); //הוספת שכבת מורגן שמבצעת יומן של בקשות ומציגה בקונסול
//הוספץ שכבת ביניים שמתעדת כל פניה לשרת בקונסול
const mysql = require('mysql'); //קישור לספריית מיי אסקיואל
//יצירת אובייקט מסוג קונקשן למיי אסקיואל
//האובייקט מקבל כתובת שרת,שם משתמש,סיסמה ושם בסיס הנתונים
const connection = mysql.createConnection({
host:'localhost',
user:'ido',
password:'0546766925Idog',
database:'Ecommdb'
});

//חיבור לבסיס הנתונים , במידה והייתה שגיאה אז ייכנס למשתנה פירוט של השגיאה 
//פתיחת החיבור לבסיס הנתונים 
 connection.connect(function(err){
    if(err)
    console.log('error ' + err.message);
    else 
    console.log('connected to DataBase');
 })
 global.db = connection; // שמירת החיבור לבסיס הנתונים כגלובאלי כך שיוכר בכל מקום בתכנית



app.use("/product",Productrouter);
//סתם הערה
module.exports = app;