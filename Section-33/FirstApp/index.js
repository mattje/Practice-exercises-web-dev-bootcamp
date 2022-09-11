const express = require('express')
const app = express()
// console.dir(app)
// app.use((req, res) => {
//     console.log('We got a new request!')
//     // res.send('<h1>This is my webpage!</h1>')
// })

// /cats => 'meow'
// /dogs => 'woof'
// '/'

app.get('/', (req, res) => {
    res.send('This is the home page!!!!')
})
app.get('/cats', (req, res) => {
    res.send('meow')
})
app.post('/cats', (req, res) => {
    res.send('Post request to /cats!!!')
})
app.get('/dogs', (req, res) => {
    res.send('woof')
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params
    res.send(`<h1>Viewing Post ID: ${postId} on ${subreddit} subreddit`)
})

app.get('/search', (req, res) => {
    const { q } = req.query
    if (!q) {
        res.send('Nothing found if nothing searched!')
    }
    res.send(`<h1>Search results for ${q}</h1>`)
})

app.get('*', (req, res) => {
    res.send("I don't know that route!")
})

app.listen(3000, () => {
    console.log('Listening on port 3000!')
})
