const fs=require('fs');
//1.create a folder
//fs.mkdirSync("filesystem");

//2. create a file in created folder
//fs.writeFileSync('filesystem/read1.txt',"i have created read1 in folder");

//3.append data into file
//fs.appendFileSync("filesystem/read1.txt","  my name is aditi kumari");

//4.read the file wihtout getting buffer
//const org_data=fs.readFileSync("filesystem/read1.txt","utf8");
//console.log(org_data);

//5.delete the file read1.txt
//fs.unlinkSync("filesystem/read1.txt");

//6.delete the folder
//fs.rmdirSync("filesystem");