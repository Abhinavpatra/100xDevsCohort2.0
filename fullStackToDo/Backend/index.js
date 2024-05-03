const express = require("express");
const app = express();
const jwt= require("jsonwebtoken");
const z= require ("zod");
// thos cpmes here automatically
const { createToDo, updateToDo } = require("./types");
// installzod, create a file and then write the zod schema for it 

app.use(express.json());
//allows the working if it gets json data






app.get('/todo',(req,res)=>{

})



app.post('/todos',(req,res)=>{
    const createPayload = req.body;
    const parsedPayLoad= createToDo.safeParse(createPayload);
    if(!parsedPayLoad){
        //if schema validation fails i.e. then give error else go on with your day
        res.status(411).json({
            msg:"wrong kind of input"
        })
     }
    async()=>{ await todo.create({
        title:createPayload.title,
        description: createPayload.description,
        completed: false
     })
    }
})



app.put('/completed',async (req,res)=>{
    const updatePayload=req.body;
    const parsedPayLoad= updateToDo.safeParse(updatePayload);
    if(!parsedPayLoad){
        //if schema validation fails i.e. then give error else go on with your day
        res.status(411).json({
            msg:"wrong kind of input"
        })
     }
     await todo.update({
        _id:req.body.id,

     },{
        completed:true,
     })
     res.json({msg:"Td do markdes as completed"})



})
app.listen(3000);