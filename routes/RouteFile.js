const express=require("express");
const app=express();
const router=express.Router();
const {create}=require("../controllers/create")
const {deletes}=require("../controllers/delete")
const {retrieve}=require("../controllers/retrieve");
const {update}=require("../controllers/update");
app.use("/create",create);
app.use("/delete/:id",deletes);
app.use("/retrieve/:id",retrieve);
app.use("/update/:id",update);
app.use(" ",router);
module.exports=app;