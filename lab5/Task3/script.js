let div = document.querySelector('div')
let inp = document.querySelector('input')
inp.onkeypress =LastSymbol;
function LastSymbol(event){
    div.innerHTML = "Станній символ: "+String.fromCharCode(event.keyCode);
}
