// document.getElementById("lknl").style.filter = "blur(5px)"
let divs = document.querySelectorAll('div')



divs.forEach(element => {
   element.querySelector("span").innerHTML = Math.floor(Math.random() * 10)
   element.addEventListener("click", () => {
      let numb = element.querySelector("span")
      numb.innerHTML = Math.pow(Number(numb.textContent), 2)
   })
})


