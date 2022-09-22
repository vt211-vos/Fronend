
let btn = document.querySelector('.btn')
let text = document.querySelector('.str')
btn.addEventListener('click', function () {
   // rez = Math.pow(Sin.value, parseInt(Kin))
   // text.innerHTML = rez
   let Kin = document.querySelector('.info2').value
   let Sin = document.querySelector('.info').value
   text.innerHTML = Math.pow(parseInt(Sin), parseInt(Kin))
})