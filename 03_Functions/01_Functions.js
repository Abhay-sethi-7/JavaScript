//node 01_functions.js
function sayMyName(){
    console.log("my name is abhay kumar sethi");
}
sayMyName()
//function with parameters.
function addTwoNumber(num1,num2){
    console.log(num1+num2);
}
addTwoNumber(3,3) //arguments
function subTwoNumber(num1,num2){
  let result = (num1-num2);
  return result;
}
const result = subTwoNumber(3,3) //arguments
console.log("result:",result)
