const express=require("express");
const app=express();

const cors=require("cors");
app.use(express.json());
app.use(cors());
require("./middlewares/database");
const routes=require("./routes/RouteFile");
app.use("",routes);
app.listen(3002,()=>{
    console.log("hello world");
})
