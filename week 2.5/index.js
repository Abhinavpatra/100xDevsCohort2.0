const express= require("express");
const app=express();

app.get(`/` ,(req,res)=>{
    const a= req.query.n;
    


    res.send(`Chondi ${a}`);
    
})

app.listen(3001);
//localhost:3001/