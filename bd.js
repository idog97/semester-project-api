const bcrypt=require('bcrypt'); 
const pass="abc123"; 
const saltRounds=10; 
const
hashFromDb="$2b$10$$2b$10$LwpwAwgnIQ1OlkYhE6Uk4eUlwQg07RibbQc4cOlx9Hr2F/PMtzrpS"; 
bcrypt.compare(pass,hashFromDb,(err,status)=>{ 
 if(err) 
 console.log(err.message); 
 else
 console.log(status); 
});