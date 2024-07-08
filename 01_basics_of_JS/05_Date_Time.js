//Dates  node 05_Date_time.js
let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);
//let myCreatedDate = new Date(2024,0,23) //month starts from 0;
//let myCreatedDate = new Date(2024,0,23,5,3) 
//let myCreatedDate = new Date("2024-07-07") 
let myCreatedDate = new Date("07-07-2024") 
console.log(myCreatedDate.toDateString());
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
newDate.toLocaleString('default',{
    weekday: "long"
})