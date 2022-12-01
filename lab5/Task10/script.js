let list = document.querySelector('ol')
for(i of list.children) {
    i.setAttribute("isClicked", "false")
}
list.onclick = clickCtrl
let previous, firstClick = true
let positionY, firstClickShift = false
function clickCtrl (e){
    if(e.target.hasAttribute('isClicked') && !e.shiftKey)
    {
        console.log(e.target.children)
        let check = e.target.getAttribute("isClicked")
        if (e.ctrlKey) {
            console.log("click" + check)
            console.log(typeof check)
            if (check == "false") {
                console.log("in if")
                e.target.setAttribute("isClicked", "true")
                e.target.style.backgroundColor = "orange"
            } else {
                e.target.setAttribute("isClicked", "false")
                e.target.style.backgroundColor = "transparent"
            }
        } else {
            if (!firstClick) {
                previous.style.backgroundColor = "transparent"
                e.target.setAttribute("isClicked", "false")
                previous = e.target
                e.target.style.backgroundColor = "orange"
            } else {
                previous = e.target
                e.target.style.backgroundColor = "orange"
                firstClick = false
                e.target.setAttribute("isClicked", "true")
            }
        }
    }
    if(e.shiftKey) {
        let check = firstClickShift
        if(!check){
            positionY = e.clientY
            firstClickShift = true
            console.log("posY=>" + positionY)
        }
        else {
            console.log("last=>"+e.clientY)
            firstClick = false
            for(i of list.children){

                if(i.offsetTop + i.offsetHeight < e.clientY && i.offsetTop > positionY){
                    i.style.backgroundColor = "orange"
                }
            }
        }

    }

}