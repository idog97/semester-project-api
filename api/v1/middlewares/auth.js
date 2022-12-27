module.exports=((req,res,next)=>{
    const myIP = req.socket.remoteAddress;
    const arr=[192.168,123.55,43.44,123.44,myIP];
    let count =0;
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]==myIP)
        {
            count++;
            next();
        }
    }

    if(count>0)
    {
        return res.status(200).json({msg:"my ip address is: " + myIP + " is found"});
    }
    else
    {
        return res.status(404).json({msg:"your ip is not found"});
    }
});