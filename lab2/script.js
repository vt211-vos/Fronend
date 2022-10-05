function Compare(str1, str2) {
   if (str1.length > str2.length)
      return '1';
   if (str1.length < str2.length)
      return '-1';
   if (str1.length == str2.length)
      return '0';

}
let btn1 = document.querySelector('#btn1')
btn1.addEventListener('click', () => {
   let x = Compare(document.querySelector('#Task1Inp1').value,
      document.querySelector('#Task1Inp2').value)
   document.querySelector('.text1').innerHTML = x;
})


//////////////////////////

function Upper(str) {
   return str[0].toUpperCase() + str.substring(1);
}
let btn2 = document.querySelector('#btn2')
btn2.addEventListener('click', () => {
   let x = Upper(document.querySelector('#Task2Inp').value)
   document.querySelector('.text2').innerHTML = x;
})

////////////////
let list = ['e', 'y', 'u', 'i', 'o', 'a']
function CountOfVawels(str) {
   let count = 0;
   for (let char of str) {
      if (list.includes(char))
         count++
   }
   return count;
}
let btn3 = document.querySelector('#btn3')
btn3.addEventListener('click', () => {
   let x = CountOfVawels(document.querySelector('#Task3Inp').value)
   document.querySelector('#text3').innerHTML = x;
})


//////////////////////
let spam = ["100%", "безкоштовно",
   "збільшення продажів", "тільки сьогодні", "не видаляйте, ххх"]
function CheckSpam(str) {
   for (let x of spam) {
      if (str.indexOf(x) != -1)
         return "spam"
      break
   }
   return "not spam"
}
let btn4 = document.querySelector('#btn4')
btn4.addEventListener('click', () => {
   let x = CheckSpam(document.querySelector('#Task4Inp').value)
   document.querySelector('#text4').innerHTML = x;
})



//////////////////////
function truncat(str, len) {
   return str.substring(0, len) + "..."
}
let btn5 = document.querySelector('#btn5')
btn5.addEventListener('click', () => {
   let x = truncat(document.querySelector('#Task5InpStr').value,
      document.querySelector('#Task5InpLen').value)
   document.querySelector('#text5').innerHTML = x;
})




////////////
function SearchChar(str, c, text) {
   var count = 0;
   text.innerHTML = "Індекси: "
   for (let x = 0; x < str.length; x++) {
      if (str[x] == c) {
         text.innerHTML += x + " "
         count++;
      }
   }
   text.innerHTML += "<br>Кількість: " + count
}

let btn6 = document.querySelector('#btn6')
btn6.addEventListener('click', () => {

   SearchChar(document.querySelector('#Task6InpStr').value,
      document.querySelector('#Task6InpChar').value,
      document.querySelector('#text6'))
})

