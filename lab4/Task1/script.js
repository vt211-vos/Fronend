// document.getElementById("lknl").style.filter = "blur(5px)"
let path = document.querySelectorAll('.path')
let img = document.querySelectorAll("img")
let block = document.querySelectorAll('.boxContent')
for (let i = 0; i < block.length; i++) {
   path[i].innerHTML = img[i].src
   block[i].addEventListener("mouseover", () => {
      path[i].style.display = "block"
      img[i].style.filter = "blur(5px)"
   })
   block[i].addEventListener("mouseout", () => {
      path[i].style.display = "none"
      img[i].style.filter = "blur(0px)"
   })
}