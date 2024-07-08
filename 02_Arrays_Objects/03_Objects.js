// singleton - constructor object. Object.create
// object literals  node 03_Objects.js
const mysym = Symbol("key1")
const user = {
    name: "Abhay",
    surName:"Sethi",
    "age":20,
    location:"Hamirpur",
    email:"abhay@gmail.com",
    isLoggedIn:false,
   [mysym]:"myKey1",
    lastLoginDays:["monday","Saturday"]
}
console.log(user);
console.log(user.email);
console.log(user["email"]);
console.log(user["age"]);
console.log(user[mysym]);
user.email="abhay@yahoo.com"
Object.freeze(user) //after freeze all changes are invalid.
console.log(user.email);
user.email="abhay@yahoo.com"
console.log(user.email);


const tinderUser = {
}
tinderUser.id="123bcf"
tinderUser.name="abhay"
tinderUser.isLoggedIn=false
//console.log(tinderUser);
const regularUser = {
    email:"abhay@microsoft.com",
    fullname:{
        userfullname:{
            firstname:"Abhay",
            lastname:" Sethi"
        }},
}
console.log(regularUser.fullname.userfullname.firstname);
const obj1={
    1:'a',
    2:'b'
}
const obj2={
    3:'c',
    4:'d'
}

const obj3= Object.assign({},obj1,obj2)
const obj4 = {...obj1,...obj2}
console.log(obj4);


console.log(Object.keys(tinderUser));//returns an array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));