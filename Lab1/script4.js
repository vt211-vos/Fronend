
let text = document.querySelector('.str2')
let btn = document.querySelector('.btn')
mass1 = ['', 'один', 'два', 'три', 'чотири', "п'ять", 'шість', 'сім', 'вісім', 'девять']
mass2 = ['десять', 'одинадцять', 'дванадцять', 'тринадцять', 'чотирнадцять', "п'ятнадцять", 'шіснадцять', 'сімнадцять', 'вісімнадцять', "дев'ятнадцять"]
mass3 = ['двадцять', 'тридцять', 'сорок', "п'ядесат", 'сісдесят']
mass4 = ['років', 'рік', 'роки', 'років']
btn.addEventListener('click', function () {
   var yo = document.querySelector('.yo').value
   if (yo.length == 1) {
      text.innerHTML = mass1[yo]
   }
   else {
      if (yo[0] == 1) {
         text.innerHTML = mass2[yo[1]]
      }
      else {
         text.innerHTML = mass3[yo[0] - 2] + ' ' + mass1[yo[1]]
      }
   }
   if (yo[yo.length - 1] == 0) {
      text.innerHTML += ' ' + mass4[0]
   }
   if (yo[yo.length - 1] == 1) {
      text.innerHTML += ' ' + mass4[1]
   }
   if (yo[yo.length - 1] >= 2 && yo[yo.length - 1] <= 4) {
      text.innerHTML += ' ' + mass4[2]
   }
   if (yo[yo.length - 1] >= 5 && yo[yo.length - 1] <= 9) {
      text.innerHTML += ' ' + mass4[3]
   }
})



