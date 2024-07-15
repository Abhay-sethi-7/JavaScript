
//---------------------Loops----------------------------
//For loop
console.log("---------for loop-------------");
const array = [1,2,3,4,5,6,7,8,9,0]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}
console.log("---------nested for loop-------------");
for (let i = 0; i < 3; i++) {
    console.log("-----------------------");
    console.log(`outer loop value : ${i}`);
    console.log("-----------------------");
   for (let j = 0; j  < 3; j++) {
    console.log(`inner loop value : ${j}`);
     }
}
console.log("----------break-------------");
// break and continue 
//break
for (let i = 0; i < 5; i++) {
    if (i==3) {
        console.log("detected 3")
        break;
    }   
    console.log(`value of i is : ${i}`);
}
console.log("----------continue-------------");
//continue
for (let i = 0; i < 5; i++) {
    if (i==3) {
        console.log("detected 3")
        continue;
    }   
    console.log(`value of i is : ${i}`);
}

console.log("-----------while loop------------");
//while
let index =0 
while (index<=5) {
    console.log(`value of i is : ${index}`);
    index=index+2;
}
console.log("-----------while loop in array------------");
let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}
console.log("-----------do while loop------------");
let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);

// node 02_Loops.js

