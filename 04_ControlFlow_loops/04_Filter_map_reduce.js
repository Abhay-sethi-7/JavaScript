//const programming =["js","rb","py","java"]
// const values = programming.forEach(element => {
//     console.log(element);
//     return element;
// });
//for each doesnot return any value 
//console.log(values);

//filter
console.log("------------filter--------");
let myNums=[1,2,3,4,5,6,7,8,9,0]
const newNums=myNums.filter((num)=>num>5)
console.log(newNums)

console.log("------------returning values with for each loop --------");
const myNewNums=[];
myNums.forEach(element => {
    if(element >5) myNewNums.push(element)
});
console.log(myNewNums)
console.log("------------filter--------");
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
//whenever we open a scope { } we need to add return keyword otherwise it will show either empty array or error.

  console.log(userBooks);


  console.log("------------map----------");
   myNums=[1,2,3,4,5,6,7,8,9,10,11,12]
   
  // const letNewNums = myNums.map((num)=>{ return num +10});
  //map chaining
  const letNewNums = myNums
                            .map((num)=>{ return num *10}) //10,20,30,40....
                            .map((num)=>num+num)//20,40,60.....
                            .filter((num)=> num>=200)//200,220,240
   console.log(letNewNums);

//reduce 
console.log("-------------------Reduce/Reducer-------------");
const myConstNums = [1, 2, 3]

 const myTotal = myConstNums .reduce(function (acc, currval) {
  console.log(`acc: ${acc} and currval: ${currval}`);
return acc + currval
}, 0)

const myNewTotal = myConstNums .reduce( (acc, curr) => acc+curr, 0)

console.log(myNewTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
//node 04_Filter_map_reduce.js