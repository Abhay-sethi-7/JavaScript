const myArr = [0,1,2,3,4,5]
//JS array can be resized , can be of different type array inside array ispossible, zero based indexing , it creates shaloow copy => copy who shares same refrence point changes in original array.

console.log(myArr[2]);
const myHeros = ["ironman" ,"batman" , "shaktiman" ,"caption america" ,"Hulk" , "thor"]
const arr  = new Array(1,2,3,4,5,6,7)
myArr.push(6)
myArr.push(7)
console.log(myArr);
myArr.pop()
console.log(myArr);
myArr.unshift(0)//adds value to sarting.
console.log(myArr);
myArr.shift( )//remove value to sarting.
console.log(myArr);
console.log(myArr.includes(10));
console.log(myArr.indexOf(3));
const newArr = myArr.join()
console.log(newArr);
console.log(typeof(newArr));

//slice , splice
console.log("A " , myArr);
const mynArr = myArr.slice(1,3)
console.log(mynArr);
console.log("B " , myArr);
const mynArr2 = myArr.splice(1,3) //portion is removed  eg 1 2, 3 will be removed in case of splice.
console.log(mynArr2);
//node 01_Array.js