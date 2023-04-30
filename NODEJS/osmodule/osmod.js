const os=require("os");

console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());

const freeMemory=os.freemem();
//memory will be in bytes
console.log(freeMemory);

console.log(`${freeMemory/1024/1024/1024}`);

const totalMemory=os.totalmem();

console.log(`${totalMemory/1024/1024/1024}`);
console.log(os.tmpdir());
console.log(os.type());
//ctrl+shift+escape==taskmanager
//windows+r==Run
