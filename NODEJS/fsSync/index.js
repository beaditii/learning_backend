//const name="aditi";
//console.log(name);
//use node index.js in terminal to run this file

const fs=require("fs");
//we have acquired fs module ,now we can use it here
//1.SYNCHRONOUS VERSION
//fs.writeFileSync('read.txt',"welcome to this file");

//first argument should be file then add on data...if file already exist then it will update//override data 
//otherwise it first create file and then add data
//run index.js in terminal a file name read.txt will create

//fs.writeFileSync('read.txt',"welcome to this folder");

fs.appendFileSync('read.txt','how are you');
//with this your data will not override it will just add this data in read.txt

//const buf_data=fs.readFileSync('read.txt');
//console.log(bf_data);
//nodejs contain an additional data type called buffer(JS doesn't contain)
//buffer is mainly used to store binary data,while reading from a file or receiving packets over a network
//<Buffer 77 65 6c 63 6f 6d 65 20 74 6f 20 74 68 69 73 20 66 6f 6c 64 65 72 68 6f 77 20 61 72 65 20 79 6f 75>

//org_data=buf_data.toString();

//console.log(org_data);

//to rename the file 

//fs.renameSync("read.txt","readfirst.txt");
//fs.renameSync("readfirst.txt","read.txt");
