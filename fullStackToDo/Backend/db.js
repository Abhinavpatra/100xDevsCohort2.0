const mongoose= require("mongoose");
mongoose.connect("mongodb+srv://abhinavpatra:NpPUuYIvQx0aRumU@cluster0.qysgmhl.mongodb.net/");

const todoSchema= mongoose.schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo= mongoose.model('todos'.todoSchema);
module.exports={
    todo
}


