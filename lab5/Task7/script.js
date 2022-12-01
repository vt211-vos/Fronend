let inp = document.querySelector('input')
const Check = e => {
    const value = e.value
    e.value = value.replace(/[1-9]|[0]/g, '')
}
