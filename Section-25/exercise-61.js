const form = document.querySelector('form')
const list = document.querySelector('#list')
const product = document.querySelector('#product')
const qty = document.querySelector('#qty')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const newLi = document.createElement('li')
    newLi.innerText = `${qty.value} ${product.value}`
    list.appendChild(newLi)
    qty.value = ''
    product.value = ''
})
