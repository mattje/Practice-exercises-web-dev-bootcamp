const jokes = document.querySelector('#jokes')
const button = document.querySelector('button')

const getNewJoke = async () => {
    const jokeText = await requestDadJoke()
    jokes.innerText = jokeText
}

const requestDadJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json" } };
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke
    } catch (e) {
        return 'No Jokes for you! Sorry :('
        console.log(e)
    }
}

button.addEventListener('click', getNewJoke)