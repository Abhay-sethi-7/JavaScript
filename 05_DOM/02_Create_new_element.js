const parent = document.querySelector('.parent')
console.log(parent);
console.log(parent.children);//children of parent element.
console.log(parent.children[1].innerHTML);//html collection and selecting [1] element.
console.log("------------------------------")
for (let i = 0; i < parent.children.length; i++) {
    const element = parent.children[i].innerHTML;
    console.log(element)
}//traversing each element.
parent.children[1].style.color='yellow'//styling child element using parent element
parent.children[1].style.fontSize='100px'
console.log("------------------------------")
console.log(parent.firstElementChild); //first child of parent element 
console.log(parent.lastElementChild);//last child of parent element 
const dayOne = document.querySelector('.day');
console.log(dayOne);
console.log(dayOne.parentElement);//finding parent element from children.
console.log(dayOne.nextElementSibling);//finding next sibling of child element.
console.log("NODES :",parent.childNodes)


//-----------------------CREATE ELEMENT------------------\\
const div = document.createElement('div')//creating a div element 
console.log(div);
div.className="main"; //adding class mto div element 
div.id=Math.round(Math.random()*10+1);//generating random id using math library
div.setAttribute("namkeen","aalu bhujia")//setting custom attribute.
div.style.backgroundColor='green'//styling background color
div.style.padding="15px";
//div.innerText="jai ho!" // adding or changing inner text to "jai ho!"
const addText= document.createTextNode("abhay sethi")//creating a text node.
div.appendChild(addText)//adding text node to div element.
document.body.appendChild(div)




//---------------EDIT AND REMOVE DOM ELEMENT------------\\
function addLanguage(langName){
const li = document.createElement('li')
li.innerHTML=`${langName}` //traversal in all the elements.
console.log(li)
document.querySelector('.language').appendChild(li)
}

function addOptiLanguage (langName){
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(langName))
    console.log(li)
    document.querySelector('.language').appendChild(li)
    }
addOptiLanguage("bhai lang")
//edit values.
const secondLang= document.querySelector("li:nth-child(2)")
//secondLang.innerHTML ="C++"
const newLi = document.createElement('li')
newLi.textContent = "c++"
secondLang.replaceWith  (newLi)

const firstLang= document.querySelector("li:first-child")
//firstLang.innerHTML ="C++"
firstLang.outerHTML ='<li>swift by apple</li>'//replace first child : javascript with swift by apple.


//remove values.
const removeLastLang= document.querySelector("li:last-child")
removeLastLang.remove() // bhai lang removed
