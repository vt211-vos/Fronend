let comments = document.querySelector('.comments')
document.querySelector('button').addEventListener('click', () => {
    let name = document.querySelector('.name').value
    let txt = document.querySelector('.txt').value
    comments.innerHTML +=  `<div class='comment'><div class='title'>${name}</div><div class="text">${txt}</div></div></div>`
})
