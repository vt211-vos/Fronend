function ShowList(list, div) {
   document.querySelector('#formBuy').style.display = 'none'
   document.querySelector('#form').style.display = "none"
   document.querySelector('#list').style.display = "block"
   div.innerHTML = ""
   for (let x = 0; x < list.length; x++) {
      for (let y = x; y < list.length - 1; y++) {
         if (list[y].Bought == true && list[y + 1].Bought == false) {
            let temp = list[y]
            list[y] = list[y + 1]
            list[y + 1] = temp
         }
      }
   }
   for (let item of list) {
      let x
      if (item.Bought == false)
         x = "Некуплено"
      else
         x = "Куплено"
      div.innerHTML += `${item.Name}(кількість:${item.RequiredAmount}, ${x})<br>`

   }
}

class Food {
   Name;
   RequiredAmount;
   Bought;
   constructor(name, requiredAmount, bought) {
      this.Name = name
      this.RequiredAmount = requiredAmount
      this.Bought = bought
   }
}

function ShowList2() {
   ShowList(list, document.querySelector('#list'))
}

document.querySelector('#list').style.display = 'none'
document.querySelector('#form').style.display = 'none'
document.querySelector('#formBuy').style.display = 'none'
let list = [new Food("Apples", 4, false), new Food("Banana", 6, true)]


list.push(new Food("Potato", 8, false))
ShowList2()
let show = document.querySelector('#show')
show.addEventListener('click', () => {
   ShowList2()
})

let add = document.querySelector('#Add')
add.addEventListener('click', () => {
   document.querySelector('#formBuy').style.display = 'none'
   document.querySelector('#list').style.display = 'none'
   document.querySelector('#form').style.display = 'block'
})

let save = document.querySelector('#save')
save.addEventListener('click', () => {

   let check = 0
   let inp1 = document.querySelector('#inp1').value
   for (let x of list) {
      if (x.Name == inp1) {
         x.RequiredAmount += Number(document.querySelector('#inp2').value)
         check = 1
         break
      }
   }
   if (check != 1) {
      list.push(new Food(
         document.querySelector('#inp1').value,
         Number(document.querySelector('#inp2').value),
         false
      ))
   }
   ShowList2();
})

let buy = document.querySelector('#buy')

buy.addEventListener('click', () => {
   document.querySelector('#list').style.display = 'none'
   document.querySelector('#form').style.display = 'none'
   document.querySelector('#formBuy').style.display = 'block'
})

let saveB = document.querySelector('#saveB')
saveB.addEventListener('click', () => {

   let name = document.querySelector('#inpB').value
   for (let x of list) {
      if (x.Name == name) {
         x.Bought = true
         break
      }
   }
   ShowList2();
})




