let txt = document.querySelector('.txt')
function color(elem){
    txt.style.color = elem.style.backgroundColor
}
function  Bold(){
    if(txt.style.fontWeight != "bold")
        txt.style.fontWeight = "bold"
    else
        txt.style.fontWeight = "normal"
}
function  Italic(){
    if(txt.style.fontStyle != "italic")
        txt.style.fontStyle = "italic"
    else
        txt.style.fontStyle = "normal"
}
function TextDecr(){
    if(txt.style.textDecoration != "underline")
        txt.style.textDecoration = "underline"
    else
        txt.style.textDecoration = 'none'
}
let size = document.querySelector("input")
size.addEventListener("change", () =>{
    txt.style.fontSize = size.value + "px";
})
let sel = document.querySelector("select")
sel.addEventListener("change", () =>{
    if(sel.value = 'Areal')
        txt.style.fontFamily = "arial"
    else
        txt.style.fontFamily = "times new roman"
})

