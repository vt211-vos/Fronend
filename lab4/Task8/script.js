let list = document.querySelector('ul')
let numbLi = list.querySelectorAll('li')
function add(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16)
    var li = document.createElement("li")
    li.style.backgroundColor = '#' + randomColor
    numbLi = list.querySelectorAll('li')
    if(numbLi.length < 9)
     list.appendChild(li)
    li.addEventListener('click', ()=>{
        list.removeChild(li)
    })
}
