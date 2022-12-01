let div = document.querySelector('div')
document.body.onclick = MoveBlock;
function MoveBlock(even){
    div.style.top = even.clientY+'px';
    div.style.left = even.clientX+'px';
}
