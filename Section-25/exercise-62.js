const h1 = document.querySelector('h1')
const input = document.querySelector('input')

input.addEventListener('input', function (e) {
    e.preventDefault()
    h1.innerText = this.value ? `Welcome, ${this.value}` : 'Enter Your Username'
})
