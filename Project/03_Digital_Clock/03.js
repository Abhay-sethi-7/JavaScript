const clock = document.querySelector('#clock')

setInterval(function(){
    let datee = new Date()
console.log(datee.toLocaleString());
clock.innerHTML = datee.toLocaleTimeString();
},1000)