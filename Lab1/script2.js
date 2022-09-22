let text = document.querySelector('.str')
let btn = document.querySelector('.btn')
btn.addEventListener('click', function () {
   let input = document.querySelector('.input').value
   let list = []
   for (let i = 0; i < input.length; i++) {
      list.push(input[i])
   }
   let temp = list[0]
   list[0] = list[list.length - 1]
   list[list.length - 1] = temp
   text.innerHTML = ''
   for (let i = 0; i < input.length; i++) {
      text.innerHTML += list[i]
   }

})
