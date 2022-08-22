const buttons = document.querySelectorAll('button')
const h1s = document.querySelectorAll('h1')

for (let button of buttons) {
    button.addEventListener('click', colorize)
}
for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
}

function randomRGB() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

function colorize() {
    this.style.backgroundColor = randomRGB()
    this.style.color = randomRGB()
}
