//first of all we have to initialise npm using npm init for using npm 
//as you type you wil get a file package.json which will keep information of your dependencies or packages
//using npm i/npm install'nameof package' we can install that package
//package-lock json keep information of installed dependencies like version,properties...


const validator=require('validator');

const res=validator.isEmail("aditi@aditi.com");
console.log(res);