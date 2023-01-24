const bcrypt=require('bcrypt'); 
const pass="abc123"; 
const saltRounds=10; 
bcrypt.hash(pass,saltRounds,(err,hashPass)=>{ 
 if(err) 
 console.log(err.message); 
 else
 console.log(hashPass); 
});

