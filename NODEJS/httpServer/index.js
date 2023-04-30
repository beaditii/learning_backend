// the http.createServer() method includes request and response parameters which is supplied by node.js

//the request object can be used to get information about the current http reuest
//e.g.,url,request,header, and data

//the response object can be used to send a response for a current http request

//if the response from the http server is supposed to be displayed as HTML,
//you should incllude an http header with the correct content type:

const http=require('http');
const fs=require('fs');

//no need to require url
const server=http.createServer((req,res) => {
   //console.log(req.url);
  const data=fs.readFileSync(`${__dirname}/userApi/userapi.json`,"utf-8");
  const objData=JSON.parse(data);
   //res.end() gives you signal that yes your request has been accepted
   if(req.url=="/"){
   res.end("hello from the home sides");
   }else if(req.url=="/about")
    {res.end('hello from the about side');
}
else if(req.url=="/contactus"){
    //res.write(''contact us");
    //res.end()
    res.end("contact us");
}
else if(req.url=="/userapi"){
    res.end(objData[0].name);
    res.writeHead(200,{"content-type":"application/json"})
    console.log(data);
   
     

}
else{
    res.writeHead(404,{"Content-type":"text/html"});
    res.end("<h1>404 error pages.page doesn't exist</h1>");
}
});

//you need to listen request ,so you have to give port 
//number and localhost name where you want to listen
server.listen(7000,"127.0.0.1",()=>{
    console.log("listening to the port number 7000")
});

//1.xampp p jaake apache and mysql run kra lena h fir yha p file node index.js krna h or fir localhost:8000 p msg aa jayega you can check