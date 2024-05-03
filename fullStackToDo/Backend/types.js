const { describe } = require('node:test');
const { title } = require('process');



const zod =require('zod');
const createToDo=zod.object(
{
   title:zod.string(), 
   description: zod.string() 
})

const updateToDo=zod.object({
    id:zod .string()
})

// we create diiferent files to have a structured project which do different things, 
//to make it clear 

// this is me exporting the data
module.exports={
    createToDo: createToDo,
    updateToDo: updateToDo
}