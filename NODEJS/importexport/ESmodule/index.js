//we have made a package.json file with type module so that ES module enabled
//import searching from './searching.js';

//now this module is not showing error but is not working
//if we change .js to .cjs it will work
//import searching from './searching.cjs';
import searching,{linearsearch} from './searching.js';
//first function will be default export.name will be same in named export and will always be a object

console.log(searching,linearsearch);