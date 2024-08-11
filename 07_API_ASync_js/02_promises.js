
// const promise_1 = new Promise(function(resolve,reject){
//     //do an async task;
//     //db calls,cryptography,network
//     setTimeout(function(){
//         console.log('async task is completed');
//         resolve()
//     },2000)
// })
// promise_1.then(function(){
//     console.log("promise consumed")
// })
// const promise_2 = new Promise(function(resolve,reject){

//     setTimeout(function(){
//         console.log('2 async task is completed');
//         resolve({username:'Abhay',email:'abhay@sethi.com'})
//     },3000)
// })
// promise_2.then(function(user){
//     console.log(user)
// })
// const promise_3 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//       let error  = true 
// if(!error)
//     resolve({username:'Abhay',email:'abhay@sethi.com'})
// else
// reject('error:: something went wrong')
// })  
//     },1000)

// promise_3.then(function(user){
//     console.log(user)
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{console.log(error)})
// .finally(()=>{console.log("the promise ios either resolved or rejected")})

// const promise_4 = new Promise (function(resolve,reject){
//     setTimeout(function(){
//         let error  = true
//   if(!error)
//       resolve({username:'javaScript',password:'abhay@sethi123'})
//   else
//   reject('error:: javaScript went wrong')
   
//       },1000)}) 
// async function consume_Promise_4() {
//    try{ 
//     const response =  await promise_4;
//    console.log(response)
//    }
//    catch(error){
//     console.log(error);
    
//    }
// }
// consume_Promise_4()


//  async function getAllUSers ()  {
//  try { const response =  await fetch('https://api.github.com/users/abhay-sethi-7')
//   const data = await response.json()
//  console.log(data)
 
//  } catch (error) {
//     console.log("errr::",error);
//  }
// }
// getAllUSers()



console.log("-----------------------");
fetch('https://api.github.com/users/abhay-sethi-7')
.then((response)=>{return response.json()})
.then((data)=>{console.log(data)})
.catch((e)=>{console.log(e)})
