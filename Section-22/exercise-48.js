// arrow function expression
const greet = (name) => {
    return `Hey ${name}!`
}

// implicit return
const greet = (name) => `Hey ${name}!`

// implicit return one line
const greet = (name) => `Hey ${name}!`

// loop back to using the map method with arrow function syntax
movies.map(function (movie) {
    return `${movie.title} - ${movie.score}/10`
})

const newMovies = movies.map((movie) => `${movie.title} - ${movie.score}/10`)

// setTimeout()
console.log('HI')
setTimeout(() => {
    console.log('are you still there?')
}, 3000)

// setInterval()
setInterval(() => {
    console.log(Math.random())
}, 2000)
