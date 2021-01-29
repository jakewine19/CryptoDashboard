function addChar(str){

let lastThree = str.slice(str.length - 3, str.length);
let newStr = lastThree + str + lastThree;

if(str.length < 3){
    return str;
}

return newStr;

}

console.log(addChar('AAA'));