"use strict"; //treat all JS code as newer version.
/*In JavaScript, a datatype is a classification that specifies which type of value a variable has and what type of operations can be performed on it. JavaScript supports several different data types, which can be broadly divided into two categories: primitive types and object types*/

//Primitive Types
//1 Number: Represents both integer and floating-point numbers.
let num = 42;
const pi = 3.14;
//2 String: Represents a sequence of characters.
let str = "Hello, World!";
//3 Boolean: Represents a logical entity and can have two values: true or false.
let isTrue = true;
//4 Null: Represents the intentional absence of any object value. It is a special keyword.
let emptyValue = null;
//5 Undefined: Represents an uninitialized variable. A variable that has been declared but not assigned a value has the value undefined.
let notAssigned;
//6 Symbol (introduced in ECMAScript 6): Represents a unique and immutable identifier.
let sym = Symbol('unique');
//7 BigInt (introduced in ECMAScript 2020): Represents integers with arbitrary precision.
let bigInt = 1234567890123456789012349;

console.log("Printing Premitive Datatypes:")
console.table([num,pi,str,isTrue,emptyValue,notAssigned,sym,bigInt]);


//Object Types
/*Objects are collections of properties, and a property is an association between a name (or key) and a value. The value of a property can be a function, which is then known as a method. Objects are more complex and can be created using various methods, including object literals, constructor functions, and classes.*/

//1 Object: Basic building block for more complex data structures.
let obj = { key: 'value', anotherKey: 42 };
//2 Array: A special type of object for storing ordered collections of values.
let arr = [1, 2, 3, 4, 5];
//3 Function: A special type of object for defining reusable blocks of code.
function greet() {
    console.log("Hello!");
}
//4 Date: A built-in object for handling dates and times.
let date =  new Date();
//5 RegExp: A built-in object for handling regular expressions.
let regex = /ab+c/;
//6 Map: A collection of keyed data items, like an object. However, the keys can be of any type, not just strings.
let map = new Map();
map.set('key', 'value');
//7 Set: A collection of values where each value must be unique.
let set = new Set([1, 2, 3, 4, 5]);

console.log("Printing Objective Datatypes:")
console.log(obj);
console.log(arr);
console.log(greet());
console.log(date);
console.log(regex);
console.log(map);
console.log(set);


//type of null is object.
//we can use typeof to know the type of datatype
console.log(typeof null);
console.log(typeof "Abhay");
console.log(typeof arr);
console.log(typeof pi);

