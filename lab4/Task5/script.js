let elem = document.querySelector("#elem")
elem.classList.remove('class2')
if(elem.classList.contains("class2"))
    alert("Класу 2 не має")
function Class1(){
    if(elem.classList.contains("class1"))
        elem.classList.remove("class1")
    else
        elem.classList.add("class1")
}
let info = document.querySelector(".info")
function  Info(){
    info.innerHTML = ""
    info.innerHTML += elem.classList.length + "<br>"
    elem.classList.forEach(e => {
        info.innerHTML += e + "<br>"
    })

}