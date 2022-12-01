let list = document.querySelector('ol')
function add(){
    var li = document.createElement("li");
    let numbLi = list.querySelectorAll('li')
    li.appendChild(document.createTextNode("Item" + (numbLi.length + 1)));
    list.appendChild(li) 
}
function remove(){
    list.removeChild(list.lastChild)
}