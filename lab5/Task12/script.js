let screen = document.querySelector('.screen')
let Numbers = document.querySelectorAll('.numb')
let btn = document.querySelector('.btn')
let a, b
let x, rezInt
let checkRez = false
Numbers.forEach(elem => {
   elem.addEventListener('click', () => {
      screen.innerHTML += elem.textContent;
   })
})
let myEvent = document.querySelectorAll('.item')
myEvent.forEach(elem => {
   elem.addEventListener('click', () => {
      if (checkRez == false) {
         a = parseInt(screen.textContent)
         screen.innerHTML = ''
         x = parseInt(elem.ariaValueNow)
      }
   })
})
let rez = document.querySelector('.rez')
rez.addEventListener('click', function () {
   b = parseInt(screen.textContent)
   if (x == 1) {
      rezInt = a + b
   }
   if (x == 2) {
      rezInt = a - b
   }
   if (x == 3) {
      rezInt = a / b
   }
   if (x == 4) {
      rezInt = a * b
   }
   screen.innerHTML = rezInt
})
let reset = document.querySelector('.reset')
reset.addEventListener('click', function () {
   screen.innerHTML = ''
})
