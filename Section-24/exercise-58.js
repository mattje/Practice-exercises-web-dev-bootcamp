const div = document.querySelector('div')

for (let i = 0; i < 100; i++) {
    const newButton = document.createElement('button')
    newButton.innerText = 'Hey!'
    div.appendChild(newButton)
}
