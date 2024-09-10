const newHero = ["Hulk","spiderman"]
// java script has prototypal behaviour. 
function multiply_5(num) {
    return num*5;
}
multiply_5.power = 3;
console.log(multiply_5(5));
console.log(multiply_5.power);
console.log(multiply_5.prototype);


// array -> object -> null
// string -> object -> null
// function -> object -> null
// anything -> object -> null
function createUser(username , score) {
   this.username=username,
   this.score=score
}
createUser.prototype.increment =  function(){
    this.score++;
}
createUser.prototype.printMe =  function(){
console.log(`score is ${this.score}`);
}
const abhay = new createUser("abhay",30)
const sethi = createUser("sethi",43)
abhay.increment()
abhay.printMe()
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

//----------------Prototype--------------------------------
// let myName = "   a b h a y   ";
// console.log(myName.length);
// console.log(myName.trueLength());
let myHero = ["Thor","spiderman","shaktiman"];
let heroPower={
    Thor:'hammer',
    spiderman:'web',
    shaktiman:'gangadhar hi shaktiman hai',
    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);    
    }
}
Object.prototype.abhay=function(){
    console.log(`abhay is present everywhere`);
    
}
Array.prototype.newAbhay = function(){
    console.log(`inside the array`);
    
}
heroPower.abhay()
myHero.abhay()
myHero.newAbhay()

//------------------------------INHERITANCE------------------
const User ={
   name:"user-Abhay",
   email:"Abhay@GOOGLE.COM"
}
const Teacher ={
    makeVideo:true
}
const TeachingSupport ={
    isAvailable: false
}
const TASupport  ={
    makeAssignment:'JS asignment',
    fullTime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__=User
Object.setPrototypeOf(TeachingSupport,Teacher)
let anotherUsername="Sethi Abhay"
String.prototype.truelength= function(){
    console.log(`${this}`);
    
      console.log(`True length is ${this.trim().length}`);
}
anotherUsername.truelength()
"A B H A Y S E T H I".truelength()