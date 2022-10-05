//document.getElementById('we').style.background = './img/chicago.jpg'
let btn1 = document.querySelector('#tk1btn')
btn1.addEventListener('click', () => {
   let inp = document.querySelector('#tk1inp')
   let name = inp.value
   inp.value = 'Hello, ' + name
})


let btn2 = document.querySelector('#tk2btn')
btn2.addEventListener('click', () => {
   let temp = document.querySelector('#tk2inp1').value
   document.querySelector('#tk2inp1').value = document.querySelector('#tk2inp2').value
   document.querySelector('#tk2inp2').value = temp
})

let btn3 = document.querySelector('#tk3btn')
btn3.addEventListener('click', () => {

   let a = Number(document.querySelector('#tk3inp1').value)
   let b = Number(document.querySelector('#tk3inp2').value)
   let text = document.querySelector('#text3')
   text.innerHTML = ''
   text.innerHTML += `Периметер прямокутника <br>` +
      `${a * 2 + b * 2} cm <br> Площа прямокутника <br> ${a * b}cm^2`
})

let btn4 = document.querySelector('#tk4btn')
btn4.addEventListener('click', () => {

   let a = Number(document.querySelector('#tk4inp1').value) / 3600
   let b = Number(document.querySelector('#tk4inp2').value) / 1000
   let text = document.querySelector('#text4')
   text.innerHTML = ''
   text.innerHTML += `Швидкість руху <br>` +
      `${b / a} км/год`
})


let place = document.querySelector('#place5')
let btn5 = document.querySelector('#tk5inp')
btn5.addEventListener('change', () => {
   place.style.background = btn5.value
   place.innerHTML = btn5.value

})


let place6 = document.querySelector('#place6')
place6.style.backgroundImage = "url('img/los-angeles.jpg')"
let btn6 = document.querySelector('#tk5Select')
btn6.addEventListener('change', () => {
   if (btn6.value == 'Los - Angeles')
      place6.style.backgroundImage = "url('img/los-angeles.jpg')"
   if (btn6.value == 'Chicago')
      place6.style.backgroundImage = "url('img/chicago.jpg')"
   if (btn6.value == 'New-York')
      place6.style.backgroundImage = "url('img/new-york.jpg')"

})


let form2 = document.querySelector('#form2')
form2.style.display = 'none'
let radioValue
let radio = document.querySelectorAll('#radio')
radio.forEach(elem => {
   elem.addEventListener('change', () => {
      form2.style.display = 'block'
      radioValue = Number(elem.value)
      if (elem.value == 2)
         document.querySelector('#floor').style.display = 'none'
      else
         document.querySelector('#floor').style.display = 'block'
   })
})
let btn7 = document.querySelector('#tk7btn')
btn7.addEventListener('click', () => {
   if (radioValue != 2) {
      let price = Number(document.querySelector('#tk7inp1').value)
      let floot = Number(document.querySelector('#tk7inp2').value)
      if (price < 600000 && floot >= 2 && floot <= 6)
         console.log('Interested')
      else
         console.log('Not interested')
   }
   else {
      let price = Number(document.querySelector('#tk7inp1').value)
      if (price < 600000)
         console.log('Interested')
      else
         console.log('Not interested')
   }

})


function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}
let btn8 = document.querySelector('#randBtn')
btn8.addEventListener('click', () => {
   let r = getRandomInt(100)
   document.querySelector('#rand').innerHTML = r

})


let btn9 = document.querySelector('#tk9btn')
let check = true
btn9.addEventListener('click', () => {
   let ck = check
   if (ck) {
      check = false
      document.querySelector('#tk9txt').style.display = 'none'
   }
   else {
      check = true
      document.querySelector('#tk9txt').style.display = 'block'
   }
})


let btnHTML = document.querySelector('#item1')
let btnCSS = document.querySelector('#item2')
let btnJS = document.querySelector('#item3')

document.querySelector('#textt2').style.display = 'none'
document.querySelector('#textt3').style.display = 'none'

btnHTML.addEventListener('click', () => {
   document.querySelector('#textt1').style.display = 'block'
   document.querySelector('#textt2').style.display = 'none'
   document.querySelector('#textt3').style.display = 'none'
})
btnCSS.addEventListener('click', () => {
   document.querySelector('#textt1').style.display = 'none'
   document.querySelector('#textt2').style.display = 'block'
   document.querySelector('#textt3').style.display = 'none'
})
btnJS.addEventListener('click', () => {
   document.querySelector('#textt1').style.display = 'none'
   document.querySelector('#textt2').style.display = 'none'
   document.querySelector('#textt3').style.display = 'block'
})



let btn11 = document.querySelector('#tk11btn')
btn11.addEventListener('click', () => {
   document.querySelector('#progr').value += 5
})


let count = 12
function Task12(obj) {
   count++
   obj.innerHTML = 'like ' + count
}