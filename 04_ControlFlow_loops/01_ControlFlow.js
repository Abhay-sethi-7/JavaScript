//-----------------Control Flow--------------------------------------

// if 
const a =2;
if(a%2==0){
console.log("a is even");
}

//if else
const b =3;
if(b%2==0){
    console.log("b is even");
    }
else{
    console.log("b is odd");
}

//else if
const balance = 1000
if (balance<500) console.log("less than 500")
else if (balance <750) console.log("less than 750")
else console.log("balance is 1000")

// switch statement 
const day =3 
switch (day) {
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("monday");
        break;
    case 3:
        console.log("tuesday");
        break;
    case 4:
        console.log("wednesday");
        break;
    case 5:
        console.log("thursday");
        break;
    case 6:
        console.log("friday");
        break;
    case 7:
        console.log("saturday");
        break;
    default:
        console.log("no day");
        break;
}

//if no break statement is present then all the upcoming xcases will execute except default case 

//truthy falsy values
const userEmail = "abhay@ai"
if (userEmail) {
    console.log("got the user email")
} else {
    console.log("failed to get the user email")
}

//falsy values
//[false,0,-0,BigInt 0n,"",null,undefined,Nan]
//truthy values
//[true,1,"0","false"," ",[],function(){},]

if (userEmail.length === 0) {
   console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
//--------------------------
false==0 //true
false==""//true
0==''//true
//--------------------------
 
// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
//node 01_ControlFlow.js