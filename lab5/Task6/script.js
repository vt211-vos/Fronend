let table = document.querySelector('table')

function Add(){
    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    td1.appendChild(document.createTextNode(document.querySelector('.Value1').value))
    td2.appendChild(document.createTextNode(document.querySelector('.Value2').value))
    tr.appendChild(td1)
    tr.appendChild(td2)
    table.appendChild(tr)
    td1.addEventListener("click", ()=>{
        td1.innerHTML = prompt()
    })
    td2.addEventListener("click", ()=>{
        td2.innerHTML = prompt()
    })

}
