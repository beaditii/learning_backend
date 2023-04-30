const add=(a,b) => {
    return a+b;
};

const sub=(a,b) => {
    return a-b;
};

const mul=(a,b) => {
    return a*b;
};



//module.exports =add;//here you will put original name of that module you want to export
//module.exports.add=add;

module.exports={add,sub,mul};

