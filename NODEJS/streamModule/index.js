//Streams are objects that let you read data from a source or write data to a destination in continous fashion.
//in node.js there are four types of streams-

//streaming means listening to music or watching video in `real time` instead of downloading a file to your computer and watching it later

//Readable- stream which is used for read operation
//writable-stream which is used for write operation
//duplex-stream which can be used for both read and write operstion
//transform-a type of duplex stream where the output is computed based on input stream

//Each type of stream is an EventEmitter instance and throws several events at different instance of times.
//For example some of the commonly used events are-

//data-this event is fired when there is data available to read 
//end-this event is fired when there is no more data to read
//error-fired when there is any error receiving or writing data
//finish-fired when all data has been flushed to underlying system socket

//2nd way
//reading from a stream
//create a readable stream
//handle stream events-> data,end and error

const fs=require("fs");
const http=require("http");

const server=http.createServer();
//general way to read not streaming
/*server.on('request',(req,res)=>{
    var fs=require("fs");
    fs.readFile("input.txt",(err,data)=>{
        if(err) return console.error(err);
        res.end(data.toString());
    });
});*/

//stream
/*server.on('request',(req,res)=>{
const rstream=fs.createReadStream("input.txt");
rstream.on('data',(chunkdata)=>{
res.write(chunkdata);

});

rstream.on("end",()=>{
    res.end();
});

rstream.on('error',(err)=>{
console.log(err);
res.end("file not found");
});
});
*/
//stream.pipe()-the method used to take a readable stream and connect it to a writeable stream

//3rd way
server.on('request',(req,res)=>{
    const rstream=fs.createReadStream("input.txt");
    rstream.pipe(res);
});


server.listen(8000,"127.0.0.1");
