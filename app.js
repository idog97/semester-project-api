const express = require ('express'); //חיבור לספריית אקספרס
const app = express(); // יצירת אובייקט של אקספרס
const auth = require('./api/v1/middlewares/auth'); // חיבור לשכבת האבטחה שכתבנו
const morgan = require('morgan'); // חיבור לספריית מורגן שמבצעת יומן
const Productrouter = require('./api/v1/routes/product'); //קישור לראוטר של מוצרים שהוגדר בקובץ בנפרד
const UserRouter = require('./api/v1/routes/user')
const cors = require('cors') // ספריית מנגנון קורס לאימות בקשות על פי כתובת דומיין ופרמטרים נוספים
app.use(express.json()) //מתורגמן,מידלוור שקורא אובייקטים מסוטג ג׳ייסון
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev')); //הוספת שכבת מורגן שמבצעת יומן של בקשות ומציגה בקונסול
//הוספץ שכבת ביניים שמתעדת כל פניה לשרת בקונסול
//app.use(cors({origin:'https://www.zap.co.il'})); 
//app.use(cors()); //הוספת שכבת קורס שמאפשרת גישה לכל העולם
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
// connection.connect(function(err){
//    if(err)
//    console.log('error ' + err.message);
//    else // במידה ולא הייתה שגיאה מדפיסים למסך הודעה כללית
//    console.log('connected to DataBase');
// })
// global.db = connection; // שמירת החיבור לבסיס הנתונים כגלובאלי כך שיוכר בכל מקום בתכנית

const mongoose = require('mongoose'); //קישור לספריית מונגוס
const conn_str = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.mywkouy.mongodb.net/ecomdb`; //הגדרת מחרוזת התחברות לשרת של מונגו
//mongoose.set('strictQuery',True);
mongoose.connect(conn_str); //פתיחת החיבור לבסיס הנתונים



//  app.use(function(req,res,next){
//     console.log("connection from ip "+ req.socket.remoteAddress);
//     next();
//  });

//app.use(auth); // הוספת שכבת האותנטיקציה

//app.use("/product",auth,Productrouter); //הוספת שכבה של ניתוב עבור מוצרים,תהיה גישה לניתובים רק לאחר אותנטיקציה
app.use("/product",Productrouter);
app.use("/user",UserRouter);

//סתם הערה
module.exports = app;