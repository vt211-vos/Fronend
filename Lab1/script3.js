let date1
let text = document.querySelector('.str2')
let btnT = document.querySelector('.btnTomorrow')
let btnY = document.querySelector('.btnYesterday')
let DayT, MonthT, YearT
function GetDateNow() {
   DayT = document.querySelector('.day').value
   MonthT = document.querySelector('.month').value
   YearT = document.querySelector('.year').value
   date1 = new Date(YearT, MonthT, DayT)
}
btnY.addEventListener('click', function () {
   GetDateNow()
   const yesterday = new Date(date1)
   yesterday.setDate(yesterday.getDate() - 1)
   var month = yesterday.getUTCMonth()
   var day = yesterday.getUTCDate() + 1
   var year = yesterday.getUTCFullYear()

   text.innerHTML = year + ". " + month + ". " + day
})

btnT.addEventListener('click', function () {
   GetDateNow()
   const tomorrow = new Date(date1)
   tomorrow.setDate(tomorrow.getDate() + 1)
   var month = tomorrow.getUTCMonth()
   var day = tomorrow.getUTCDate() + 1
   var year = tomorrow.getUTCFullYear()

   text.innerHTML = year + ". " + month + ". " + day

})

