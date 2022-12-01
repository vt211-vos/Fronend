let elems = document.querySelectorAll('input')
elems.forEach(elem => {
    elem.addEventListener("blur", ()=>{
        if(elem.value.length == Number(elem.getAttribute('data-price')))
            elem.style.border = "3px solid green"
        else
            elem.style.border = "3px solid red"
    })
})







