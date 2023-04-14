//import statemet - config -app init - app middleware - app routes -app start
/********************************************* */
//import statements
const express = require("express");
const dotenv= require("dotenv")
//config
dotenv.config()
const  port = process.env.PORT || 8000;

//app init
const server = express();
//app middleware

// app routes(api/services)
// four type of http methods-
//GET- READ THE DATA - 200 ok(default)
//POST- CREATE THE DATE -201 ok, created 
//PUT||PATCH-UPDATE THE DATE -200 0k (default)
//DELETE- DELETE THE DATA
// status code
// 200 -ok (default)
//201 - ok created
//304 -ok not modified(default)
//400 -bad request (when your api or server requied some data from FE but  it was not sent)
//401-unauthorised(default)
//404- not found(default)
//500 -internal server error(when some part of code broken)
server.get("/",(req,res)=>{
res.status(201).send("hey welcome to our server.....sdfdsfds..............");
})
//app start
server.listen(port, ()=>console.log("server started " + port));