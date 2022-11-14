const express = require('express')
const drinks = require('./models/drinks')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send(`Welcome to the Gitpub App!`)
})

// Index Route
app.get('/drinks/', (req, res) => {
    res.render("drinks_index.ejs", {
        allDrinks: drinks,
    })
})

// Show Route
app.get('/drinks/:id', (req, res) => {
    res.send(req.params.id)
})

app.listen(PORT, () => {
    console.log(`Currently listening to Port ${PORT}`)
})