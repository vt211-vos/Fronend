let div = document.querySelector('div')
div.onmousemove = MouseMove;
div.oncontextmenu = RightClick;
div.onclick = LeftClick;
function MouseMove(even){
    div.innerHTML = `X=${even.clientX}<br> y=${even.clientY}`
}
function RightClick(even){
    div.innerHTML = `X=${even.clientX}<br> y=${even.clientY}<br>Правий клік`
}
function LeftClick(even){
    div.innerHTML = `X=${even.clientX}<br> y=${even.clientY}<br>Лівий  клік`
}