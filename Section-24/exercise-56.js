const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'] //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:

const spans = document.querySelectorAll('span')
console.log(spans)

for (let i = 0; i < colors.length; i++) {
    spans[i].style.color = colors[i]
}
