function ShowList(list, div) {
   let sum = 0
   for (let item of list) {
      sum += item.Price * item.Amount
      div.innerHTML += `${item.Name} ${item.Amount}шт.` +
         ` ${item.Price}грн/(шт, кг) ${item.Price * item.Amount}грн<br>`
   }
   div.innerHTML += `До сплати: ${sum}`
}

function MostExpensive(list, div) {
   let MostExp = list[0]
   for (let item = 0; item < list.length; item++) {
      if (list[item].Amount * list[item].Price >
         MostExp.Amount * MostExp.Price) {
         MostExp = list[item]
      }
   }

   div.innerHTML += `<br>Найдорожчий товар: ${MostExp.Name} ${MostExp.Amount}шт.` +
      ` ${MostExp.Price}грн/(шт, кг) ${MostExp.Price * MostExp.Amount}грн<br>`
}

function Average(list, div) {
   let sum = 0
   for (let item of list) {
      sum += item.Price * item.Amount
   }
   div.innerHTML += `<br>Cередньоя вартость одного товару у чеку: ${Math.round(sum / list.length)}`
}
class Food {
   Name;
   Amount;
   Price;
   constructor(name, amount, price) {
      this.Name = name
      this.Amount = amount
      this.Price = price
   }
}

function ShowList2() {
   ShowList(list, document.querySelector('#text'))
}

let list = [new Food("Apples", 16, 50), new Food("Banana", 17, 30),
new Food("Tomato", 60, 30)]
ShowList2()
MostExpensive(list, document.querySelector('#text'))
Average(list, document.querySelector('#text'))