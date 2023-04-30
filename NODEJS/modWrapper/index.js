//const name="Aditi";
//console.log(name);

//these are always wrapped in ananymous function

//behind the scenes ...we have access to these and we can acquire them
//ModuleWrapper Function
(function(exports,require,module,__filename,__dirname){
    const name="Aditi";
    console.log(name);
    console.log(__dirname);
console.log(__filename);

})();
console.log(__dirname);
console.log(__filename);

