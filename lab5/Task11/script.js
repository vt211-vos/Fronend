

document.body.onkeydown = (e) =>{
    if (e.key === "e" && e.ctrlKey) {
        e.preventDefault()
        let text = document.querySelector('.text').textContent
        document.querySelector('textarea').value = text
        document.querySelector('.text').style.display = "none"
        document.querySelector('textarea').style.display = "block"
        document.body.style.backgroundColor = "black"
    }
    if (e.key === "s" && e.ctrlKey) {
        e.preventDefault()
        let text = document.querySelector('textarea').value
        document.querySelector('.text').innerHTML = text
        document.querySelector('.text').style.display = "block"
        document.querySelector('textarea').style.display = "none"
        document.body.style.backgroundColor = "white"
    }
}

