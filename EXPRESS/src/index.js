/*Express.js is a node.js framework.
it is a web application framework that provides you with a simple API to build websites,webapps and backends
e.g.single page websites,dynamic website,hybrid website
*/

//Why do we actually need Express.js? How it is useful for us to use with Node.js?
//Ans-try to write a small REST API server in plain Node.js(that is,using only core modules)
//and then in Express.js.The latter will take you 5-10x less time and lines of code.
const path=require('path');
const express=require('express');
const app=express();

//console.log(path.join(__dirname,"../public"));
const staticPath=path.join(__dirname,"../public");
//builtin middleware
app.use(express.static(staticPath));

//API
//get-read
//post-create
//put-update
//delete-delete
//app.get(route,callback)
app.get("/",(req,res)=>{
res.write("hello from other side express");
res.write("write msg using write then end");
res.send();
})
app.get("/about",(req,res)=>{
    res.status(200).send("hello from about side express");

    })
    //On using status(), we are actually checking it's status first than sending some response which is a good practice , 
    //and  on using  send() ,we r  sending response directly i.e. what to show on the page ,So in case of an error we can 
    //send a message as response on using status () which is the benefit of this

 app.get("/contact",(req,res)=>{
    res.set("Content-Type", "text/html"); 
        res.send("<h1>hello from contact side express</h1>");})
 /*app.get("/temp",(req,res)=>{
            res.send({
                id:1,
                name:"aditi"
            });
            })*/
            app.get("/temp",(req,res)=>{
                res.json({
                    id:1,
                    name:"aditi"
                });
                })
    
//the methods are identical when an object or array is passed
//but res.json() will also convert non-objects,
//such as null and undefined,which are not valid JSON
app.listen(8000,()=>{
    console.log("listening at port 8000");
})
//the callback function has 2 parameters,request(req) and response(res)
//The request object(req) represents the HTTP request and the response object(res)
//has properties for the request query string,parameters,body,
//HTTP headers,etc.

//Similarly,the response object represents the HTTP response
//thta the Express app sends when it receives an http request
