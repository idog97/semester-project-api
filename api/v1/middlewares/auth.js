function Auth(req,res,next)
{
    console.log(req.url);
    next();
}