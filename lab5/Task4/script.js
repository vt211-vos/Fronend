let div = document.querySelector('div')
document.body.onclick = Color;
function Color(even){
    div.style.backgroundColor ="white"
    if(even.ctrlKey)
        div.style.backgroundColor ="red"
    if(even.altKey)
        div.style.backgroundColor ="green"
    if(even.shiftKey)
        div.style.backgroundColor ="blue"
}
