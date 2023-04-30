const path=require('path');
console.log(path.dirname('C:/Users/HP/Documents/learningnodejs/pathmodule/path.js'));
console.log(path.extname('C:/Users/HP/Documents/learningnodejs/pathmodule/path.js'));
console.log(path.basename('C:/Users/HP/Documents/learningnodejs/pathmodule/path.js'));
console.log(path.parse('C:/Users/HP/Documents/learningnodejs/pathmodule/path.js'));
//parse returned you dir,root,base,name,ext
const mypath=path.parse('C:/Users/HP/Documents/learningnodejs/pathmodule/path.js');
console.log(mypath.name);
console.log(mypath.root);

console.log(__dirname);
