let text = document.querySelector('.str2')
let btn = document.querySelector('.btn')
let money, price, number
btn.addEventListener('click', function () {
   var input1 = document.querySelector('.info').value
   money = parseInt(input1)
   var input2 = document.querySelector('.info2').value
   price = parseInt(input2)
   number = money / price
   text.innerHTML = parseInt(number)
})



