//-------------------DOM Selector------------
//get element by id
const title = document.getElementById("title") // getting element by id 
document.getElementById("title").className // getting class name  by id
document.getElementById("title").getAttribute('id'); // getting attribute by id.
document.getElementById("title").setAttribute('class','test,heading'); // setting attribute by using id. //always over writes.

//style 
title.style.backgroundColor = 'green';
title.style.padding = '15px';

// ways to get content of the element 
title.textContent; //display the content that is visbile and the content that is hidden
title.innerHTML;//display the content that is visbile.and the hidden html.
title.innerText; //display the content that is visbile.





//get element by classname
const heading = document.getElementsByClassName("heading") // getting element by class
document.getElementsByClassName("heading").className // getting class name  by class
document.getElementsByClassName("heading").getAttribute('class'); // getting attribute by class.
document.getElementsByClassName("heading").setAttribute('id','test,title'); // setting attribute by using class. //always over writes.

//style 
heading.style.backgroundColor = 'green';
heading.style.padding = '15px';

// ways to get content of the element 
heading.textContent; //display the content that is visbile and the content that is hidden
heading.innerHTML;//display the content that is visbile.and the hidden html.
heading.innerText; //display the content that is visbile.




//Querry selector :- first element.
document.querySelector("#title")// selcting by using id.
document.querySelector(".heading")// selcting by using class.
document.querySelector("h1")// selcting by using id.
document.querySelector("input[type='passward']")// selcting by using attributes.



//Querry selectorAll :- all element.
document.querySelectorAll("#title")// selcting by using id.
document.querySelectorAll(".heading")// selcting by using class.
document.querySelectorAll("h1")// selcting by using id.
document.querySelectorAll("input[type='passward']")// selcting by using attributes.