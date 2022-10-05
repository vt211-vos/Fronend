let time = {
   hours: 10,
   minutes: 30,
   seconds: 15,

}
function AddHours(sum, time) {
   if (sum > 0) {
      if (time.hours + sum < 24) {
         time.hours += sum
      }
      else {
         time.hours = (time.hours + sum) % 24
      }
   }
   else {
      if (Math.abs(sum) < time.hours)
         time.hours += sum
      else {
         time.hours += 24
         time.hours += sum
      }
   }
}
function AddMin(sum, time) {
   if (sum > 0) {
      if (time.minutes + sum < 60) {
         time.minutes += sum
      }
      else {
         AddHours(Math.trunc((time.minutes + sum) / 60), time)
         time.minutes = (time.minutes + sum) % 60
      }
   }
   else {
      if (Math.abs(sum) <= time.minutes)
         time.minutes += sum
      else {
         time.minutes += 60
         time.minutes += sum % 60
         AddHours(Math.trunc(sum / 60) - 1, time)
      }
   }
}
function AddSec(sum, time) {
   if (sum > 0) {
      if (time.seconds + sum < 60) {
         time.seconds += sum
      }
      else {
         AddMin(Math.trunc((time.seconds + sum) / 60), time)
         time.seconds = (time.seconds + sum) % 60
      }
   }
   else {
      if (Math.abs(sum) <= time.seconds)
         time.seconds += sum
      else {
         time.seconds += 60
         time.seconds += sum % 60
         AddMin(Math.trunc(sum / 60) - 1, time)
      }
   }
}
function Show(time) {
   return time.hours + "/" +
      + time.minutes + "/" + time.seconds
}
let H = document.querySelector('#H')
let M = document.querySelector('#M')
let S = document.querySelector('#S')
document.querySelector('#date').innerHTML = Show(time)

H.addEventListener('click', () => {
   AddHours(Nunber(document.querySelector('#inp').value), time)
   document.querySelector('#date').innerHTML = Show(time)
})
M.addEventListener('click', () => {
   AddMin(Number(document.querySelector('#inp').value), time)
   document.querySelector('#date').innerHTML = Show(time)
})
S.addEventListener('click', () => {
   AddSec(Number(document.querySelector('#inp').value), time)
   document.querySelector('#date').innerHTML = Show(time)
})



