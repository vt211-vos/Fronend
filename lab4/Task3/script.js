// document.getElementById("lknl").style.filter = "blur(5px)"
let divs = document.querySelectorAll('a')



divs.forEach(element => {

   element.addEventListener("mouseover", () => {
      href = element.href.split("/").slice(-1)
      element.innerHTML = element.textContent + " " + href
   })
   element.addEventListener("mouseout", () => {
      element.innerHTML = element.textContent.split(" ")[0]
   })
})


