//const is used to declare variables that are block-scoped, much like variables declared using let. The difference is that variables declared with const are read-only and cannot be reassigned after their initial assignment.Eg:pi=3.14 is constant.
const accountId = 2932;

//let is used to declare a block-scoped local variable, optionally initializing it to a value. Unlike var, variables declared with let are not hoisted to the top of the block, and they have a block scope instead of a function scope.
let accountEmail="abhaysethi@gmail.com";

//var is used to declare variables that are function-scoped or globally scoped, depending on where the variable is declared. Unlike let and const, var declarations are hoisted to the top of their scope, which can sometimes lead to unexpected behavior.
var accountPassward = "129Ab";
/*Prefer not to use var becouse of block scope and functional scope*/

// In JavaScript, if you assign a value to a variable without declaring it with let, const, or var, it implicitly creates a global variable. This is generally considered bad practice because it can lead to unintended side effects, especially in larger codebases.
accountCity = "Hamirpur";

//Displaying values

console.log("Values before re-assignment");
console.table([accountId,accountEmail , accountPassward, accountCity]);


console.log("Values after re-assignment");
accountEmail="sethiabhay@gmail.com";
accountPassward="passward"
accountCity = "Hamirpur,Himachal Pradesh";
console.table([accountEmail , accountPassward, accountCity]);
console.log("constant values can not be changed");


/*variables declared but not defined or assigned are undefined in js */