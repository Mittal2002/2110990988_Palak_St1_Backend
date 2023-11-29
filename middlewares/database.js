const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://palak0988be21:0987@cluster0.i1moen2.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("connection successfull");
}).catch((err)=>{
    console.log("not successfull");
})