//just put export whatever value you want to import and make object for it in import
export function linearsearch(arr,x){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==x)return i;
    }
    return NaN;
}

/*module.exports = {
    linear:linearsearch
}*/
//this module.export is not working in ES module

export default function fun(){
    console.log("default function");
}

