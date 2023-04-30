//json stands for javascript object notation
//json is a lightweight format for storing and transporting data.
//json is often used when data is sent from a server to a webpage
const fs=require('fs');
const bioData={
    name:"Aditi",
    age:"22",
    job:"student"

};
//console.log(bioData.job);

//to convert object into json format
//1. JSON.stringify(object name), stringify==object to jSON
//2.JSON.parse(object name) ,parse==JSON to object
//if you want to convert object into json format use stringify
//const jsonData=JSON.stringify(bioData); 
//console.log(jsonData);
//{"name":"Aditi","age":"22","job":"student"}
//here we can't call json data directly using object.property

//const objData=JSON.parse(jsonData);

//console.log(objData);
//{ name: 'Aditi', age: '22', job: 'student' }



//Tasks
/*
1:convert to JSON
2:add this to another file
3:readfile
4:convert back to js obj 
5:console.log
*/

/*const jsonData=JSON.stringify(bioData);
fs.writeFile("json1.json",jsonData,(err)=>{
   console.log("done"); 
});
fs.readFile("json1.json","utf-8",(err,data)=>{
//console.log(data);
const origData=JSON.parse(data);
console.log(origData);
});*/
