let ball = document.querySelector('img')
let pole = document.querySelector('.pole')
let lastX =0, lastY = 0;
pole.onclick = ev => {
    if (ev.clientX + 50 < pole.offsetWidth && ev.clientX - 50 > 0) {
        if (ev.clientY + 50 < pole.offsetHeight && ev.clientY - 50 > 0) {
            ball.style.top = (ev.clientY - 50) + 'px'
            ball.style.left = (ev.clientX - 50) + 'px'
        }
    }
}

