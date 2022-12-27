const express = require ('express');
const app = express();
const morgan = require('morgan');
const Productrouter = require('./api/v1/routes/product');
app.use(morgan('dev'));
//הוספץ שכבת ביניים שמתעדת כל פניה לשרת בקונסול

const mysql = require('mysql');
const connection = mysql.createConnection({
host:'localhost',
user:'ido',
password:'0546766925Idog',
database:'Ecommdb'
});

//חיבור לבסיס הנתונים , במידה והייתה שגיאה אז ייכנס למשתנה פירוט של השגיאה 
connection.connect(function(err){
   if(err)
   console.log('error ' + err.message);
   else // במידה ולא הייתה שגיאה מדפיסים למסך הודעה כללית
   console.log('connected to DataBase');
})
global.db = connection; // שמירת החיבור לבסיס הנתונים כגלובאלי כך שיוכר בכל מקום בתכנית



 app.use(function(req,res,next){
    console.log("connection from ip "+ req.socket.remoteAddress);
    next();
 });
 
app.use("/product",Productrouter);
//סתם הערה
module.exports = app;