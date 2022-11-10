const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send(`Welcome to the Gitpub App!`)
})

app.listen(PORT, () => {
    console.log(`Currently listening to Port ${PORT}`)
})