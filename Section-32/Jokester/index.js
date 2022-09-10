const jokes = require('give-me-a-joke')
const colors = require('colors')
// console.dir(jokes)
// console.log('hello!'.rainbow)

jokes.getRandomDadJoke(function (joke) {
    console.log(joke.inverse)
    console.log(joke.zebra)
    console.log(joke.america)
    console.log(joke.trap)
    console.log(joke.random)
})
