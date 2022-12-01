let menu = document.querySelector('ul')
menu.onclick = Tree
function Tree (e){
    if(e.target.children[0].style.display != "none"){
        for(i of e.target.children){
            i.style.display = "none"
        }
    }
    else {
        for(i of e.target.children){
            i.style.display = "block"
        }
    }
}


