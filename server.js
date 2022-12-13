//הפעלת פוקנציה מתוך ספריית אי אן וי שטוענת את ההגדרות מקובץ אי אן וי
require('dotenv').config();
function SendEmail(u,p)
{
    console.log("sent Email to "+ u);
    //procss = אובייקט שמייצג את האפליקציה שלי
    //קרא לגוגל והתחבר באמצעות השם והסיסמה
}
SendEmail(process.env.USER_EMAIL,process.env.EMAIL_PASS);
const http = require('http');
const app = require('./app');
const port  = 5005;

const server = http.createServer(app);
server.listen(port,()=>{console.log("server online")});