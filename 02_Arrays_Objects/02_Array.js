//node 02_Array.js
const marvel_heros = ["thor","hulk","spiderman"]
const dc_heros = ["flash","superman","batman"]
//marvel_heros.push(dc_heros);
//console.log(marvel_heros);
//console.log(marvel_heros[3][2]);
//const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);
const all_new_Heros =[...marvel_heros,...dc_heros]
console.log(all_new_Heros);
const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_array = another_array.flat(Infinity)
console.log(real_array);
console.log(Array.from("AbhaySethi"))
console.log(Array.from({name:"AbhaySethi"}))
console.log(Array.isArray("abhay"))
let score1 = 10
let score2 = 20
let score3 = 30
console.log(Array.of(score1,score2,score3));