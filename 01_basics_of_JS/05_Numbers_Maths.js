const balance = new Number (20000)
console.log(balance);
const score = 30
console.log(score);
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(3));
const otherNumber = 38.5485
console.log(otherNumber.toPrecision(2));
const hundreds = 1000000000;
console.log(hundreds.toLocaleString('en-IN'));


//==========================================================================================================MATH==============================================================
console.log(Math);
console.log(Math.abs(-4)); // + = + , -= +
console.log(Math.round(4.6));
console.log(Math.random());
console.log(Math.floor((Math.random()*10) +1 ));
console.log(Math.ceil(3.4));
console.log(Math.sqrt(2));
console.log(Math.min(2,4,3,5));
console.log(Math.max(2,4,3,5));
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min);


//node 05_Numbers_Maths.js    cd 01_basics_of_JS