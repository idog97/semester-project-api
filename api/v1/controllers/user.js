
const bcrypt= require('bcrypt');
module.exports ={

    Register:(req,res)=>
    {   //רישום משתמש חדש במערכת
        let connection = global.db; // שמירת החיבור לבסיס הנתונים בתוך משתנה
        const uname = req.body.uname;// שמירת שם המתמש שנשלח בתוך גוף הבקשה 
        const pass = req.body.pass;// שמירת הסיסמה שנשלחה בתוך גוף הבקשה 
        const fullname = req.body.fullname;// שמירת השם המלא שנשלח בתוך גוף הבקשה
        // כעת נצפין את הסיסמה ונשמור את הנתונים בבסיס הנתונים 
        bcrypt.hash(pass,saltRounds,(err,hashPass)=>
        { 
            if(err) 
            {
                console.log(err.message); 
                return res.status(500).json(err)
            }
            
            else
            {
                console.log(hashPass); 
                let sql =`INSERT INTO t_users (uname,pass,fullname) VALUES ('${uname}','${hashPass}','${fullname}')`;
                console.log(sql);
                //הפעלת השאילתה והחזרת התשובה למשתמש
                connection.query(sql,function(err,rows,fields)
                {
                    if(err)
                    {
                        console.log(err.message);
                        return res.status(500).json(err.message);
                    }
                    else
                    {
                        console.log("ok");
                        return res.status(200).json(rows);
                    }
                })
            }
            
        });

    },

    Login:(req,res)=>
    {   let connection = global.db;
        const uname = req.body.pname;
        const pass = req.body.price;
        const fullname = req.body.pdesc;
        let sql ="INSERT INTO t_users (pname,price,pdesc,picname) VALUES ('"+uname+"','"+pass+"','"+fullname+"')";
        console.log(sql);
        connection.query(sql,function(err,rows,fields)
        {
            if(err)
            {
                console.log(err.message);
                return res.status(500).json(err.message);
            }
            else
            {
                console.log("ok");
                return res.status(200).json(rows);
            }
        })
    }

    
};