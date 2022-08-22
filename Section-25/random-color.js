const label = document.querySelector('h1')
const button = document.querySelector('button')

function randomRGB() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    if (r + b + g < 200) {
        makeLabelWhite()
    } else {
        makeLabelBlack()
    }
    return `rgb(${r}, ${g}, ${b})`
}

function makeLabelWhite() {
    label.style.color = 'white'
}
function makeLabelBlack() {
    label.style.color = 'black'
}

button.addEventListener('click', function () {
    console.log('clicked')
    let newColor = randomRGB()
    document.body.style.backgroundColor = newColor
    label.innerText = newColor
})
