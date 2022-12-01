let topic = document.querySelectorAll('.topic')
let text = document.querySelectorAll('.text')
text.forEach(t =>{
    t.style.display = 'none'
})
topic.forEach(e =>{
    e.addEventListener('click', () =>{
        text.forEach(t =>{
            t.style.display = 'none'
        })
        text[Number(e.getAttribute('data-value'))].style.display = "block"
    })
})