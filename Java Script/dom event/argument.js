function getFullName(){
    let fullName="";
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        fullName = fullName +" "+ element;
    }
    return fullName;
}


let result =getFullName('md','asibur','rahman','khan');
console.log(result);





