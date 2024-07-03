//"this is double quoted string".
//'this is single quoted string'.
//both types are allowed in JavaScript.

const name = "Abhay"
const surname = 'sethi'
// + is used for concatenation of two or more strings.
console.log(name +" "+ surname)
console.log(`my full name is ${name} ${surname}`);
const gameName = new String("Abhay-Sethi")
console.log(gameName[0]);//acessing zeroth value
console.log(gameName.__proto__);
console.log(gameName.length);//length of string.
console.log(gameName.toUpperCase());// conver to upper case
console.log(gameName.charAt(2)); //  character at given position.
console.log(gameName.indexOf('t'));//index of given character
const newString = gameName.substring(0,4)//0 will be included and 4 will be excluded.
console.log(newString);
const anotherString = gameName.slice(-8,4)//can give reverse index or negative index also.
console.log(anotherString);
const newStr = "   abhay   "
console.log(newStr.trim()); // remove stating and end spaces.
const url = "https://abhay.com/abhay%20Sethi"
console.log(url.replace('%20','+')); //%20 is replaced string and + is replacing string.
console.log(url.includes('Sethi')); //include or not
console.log(gameName.split('-'));//split basis on -
