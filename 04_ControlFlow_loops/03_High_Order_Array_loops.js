// node 03_High_Order_Array_loops.js

//for of loop 
console.log("------------for of loop --------");
console.log("------------for of loop for array--------");
const arr = [1,2,3,4,5,6,7,8,9,0]
for (const i of arr) {
    console.log(i);
    
}
console.log("------------for of loop for string--------");
const greeting = " A b h a y S e t h i ";
for (const greet of greeting) {
    if (greet==" ") {
        continue;
    }   
    console.log(`Each character of the string greeting is ${greet}`);
    
}
//Maps : map object holds key value pairs and remembers the original insertion order of the keys . any value may be used as either a key or a value 
console.log("------------for of loop for map---------");
const newMap = new Map()
newMap.set('IN',"India")
newMap.set('Pk',"Pakistan")
newMap.set('USA',"united states of america")
newMap.set('FR',"France")
console.log(newMap);
for (const [key,value] of newMap) {
    console.log(key,':-',value);
}
//console.log("------------for of loop for 0bject--------");
const myObject={
    js:'javascript',
    cpp:'C++',
    py:'python',
    c:'C',
    rb:'ruby',
    swift:'swift by apple'
}
// for (const [key,value] of myObject) {
//     console.log(key,':-',value);
// }
//my object is not iteratable with for off loop




//for in loop 
console.log("------------for in loop  --------");
console.log("------------for in loop for object --------");
for (const key in myObject) {
    console.log(`${key} is file extension for ${myObject[key]}`);
}
console.log("------------for in loop for string --------");
const programming =["js","rb","py","java"]
for (const key in programming) {
   console.log(programming[key]);
}
//iteration on map is not possible with for in loop 
//objects :-for in loop
//arrays :- for of loop

//for each loop
console.log("------------for each loop --------");
programming.forEach(element => {
    console.log(element);
});
console.log("------------for each loop for objects in arrays --------");
const codingLanguage =[
{
    language:"javascript",
    extension:"js"
},
{
    language:"java",
    extension:"java"
},
{
    language:"python",
    extension:"py"
}]
codingLanguage.forEach((item)=>{
    console.log(item.language);
})
// node 03_High_Order_Array_loops.js