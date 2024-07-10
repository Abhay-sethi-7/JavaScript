//node 03_This_Arrow_Function.js
function one(){
    const username = "abhay"
    function two(){
        const webstite="youtube";
        console.log(username)
    }
    two()
}
one()
console.log(addone(3))
function addone(val){
    return val+1;
}

const addTwo = function(num){
    return num+2
}
console.log(addTwo(3))
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/--/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
const User ={
    username:"abhay",
    price:999,
    welcomeMsg: function(){
        console.log(`${this.username} ,Welcome to website`)
        console.log(this)
    }
    //this keyword reffer to the current context 
}
User.welcomeMsg()
User.username="radhemohan"
User.welcomeMsg()
console.log(this); //in node environment current global context of this is empty {}
// in browser global object is window object.
function  mango(){
    console.log(this); 
}
const costOfFruits = (fruit1,fruit2)=>{
return fruit1+fruit2; //explicit return
}
    console.log(costOfFruits(32,34)); 
const costOfPen = (Pen1,Pen2)=>( Pen1+Pen2 ) //implicit return
    console.log(costOfPen(30,35)); 
const costOfBooks = (book1,book2)=> book1+book2;
    console.log(costOfBooks(239,234)); 
    //in normal function this is used becouse of global object.
///-/-/-/-/-/-/-/-/-/-/-/--/-//-/-/-/--/-/-/-/-//--/--/-/-/-/-/-/-/-/-/-/-/-//-/-/-/-/-/-/-/-/-/-/-/-/-/
//Imediately invoked function expression (IIFE)
(function database(){
    //named IIFE
    console.log("db connected")
})(); //semicolen is neede to end the exectution.
//due to problem in pollution with global scope to remove pollution iife is used 
(()=>{
    //unnamed IIFE
    console.log("db disconnected")
})(); 
