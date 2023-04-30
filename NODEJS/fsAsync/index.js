const fs=require('fs');

//ASYNCHRONOUS VERSION


//fs.writeFile("read.txt","hello to the world",(err)=>{
   // console.log("completed")
   // console.log(err);
//});

//we pass them a function as an argument - a callback-
//that gets called when task completes.
//the callback has an argumnet that tells you whether
//the operation completed successfully.
//Now we need to say what to do when fs.writeFile
//has completed(even if it's nothing), and start
//checking for errors 

/*fs.appendFile("read.txt", "  have a good day",(err)=>{
    console.log("task completed");
})*/

/*fs.readFile("read.txt","utf-8",(err,data)=>{
    console.log(data);
});*/

