let input = document.querySelector('.input')
let btn = document.querySelector('.btn')
let text = document.querySelector('.text')
let array = [], rez = 0
btn.addEventListener('click', function () {
   if (input.value != 0) {
      array.push(parseInt(input.value))
      input.value = ''
   }
   else {
      text.innerHTML = ''
      array.push(parseInt(input.value))
      for (let i = 0; i < array.length; i++)
         rez += array[i]
      for (let i = 0; i < array.length - 1; i++)
         text.innerHTML += array[i] + ' + '

      text.innerHTML += array[array.length - 1] + ' = ' + rez
      array.splice(0, array.length);
      rez = 0
   }
})