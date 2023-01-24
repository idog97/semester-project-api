require('dotenv').config(); //טעינת קובץ ההגדרות של דוט אי אנ וי
const jwt=require('jsonwebtoken');
const PrivateKey = process.env.PRIVATEKEY;
const token=jwt.sign({Uid:23,Email:"idoga@gmail.com"},PrivateKey,{expiresIn:'1h'});
console.log(token);

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVaWQiOjIzLCJFbWFpbCI6InlsYXBpZG90QGdtYWlsLmNvbSIsImlhdCI6MTY3Mjc3MDE3OSwiZXhwIjoxNjcyNzczNzc5fQ.zMhJ_PkDSVL-L5v6qfWt_N0RHe3e_tz0kxdw3aW_xZk

try{
    const pelet = jwt.verify(token,PrivateKey);
    console.log("ID:"+pelet.Uid,"email:"+pelet.Email);
}
catch(err){
    console.log(err.message);
}

//פרוסס . אי אנ וי זהו אובייקט מובנה בסביבת נוד ג׳יי אס המכיל משתני סביבה של המערכת = process.env is a built in object in node.js enviroment that contains enviroment system variables;
