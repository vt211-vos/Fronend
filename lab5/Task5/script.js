let ul = document.querySelector('ul')

function Add(){
    // var li = document.createElement("li");
    // let numbLi = list.querySelectorAll('li')
    // li.appendChild(document.createTextNode("Item" + (numbLi.length + 1)));
    let x = document.createElement('li')
    x.appendChild(document.createTextNode("Elem"))
    x.onclick = () =>{
        var randomColor = Math.floor(Math.random()*16777215).toString(16)
        x.style.backgroundColor = "#"+randomColor;
    }
    ul.appendChild(x)
}
function Color(obj){
    var randomColor = Math.floor(Math.random()*16777215).toString(16)
    obj.style.backgroundColor = "#"+randomColor;
}