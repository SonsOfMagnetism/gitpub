const express = require('express')
const drinks = require('./models/drinks')
const food = require('./models/food')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send(`Welcome to the Gitpub App!`)
})

// Drink Index Route
app.get('/drinks/', (req, res) => {
    res.render("drinks_index.ejs", {
        allDrinks: drinks,
    })
})

// Drink Show Route
app.get('/drinks/:id', (req, res) => {
    res.render("drinks_show.ejs", {
        drink: drinks[req.params.id],
        id: req.params.id,
    })
})

// Food Index Route
app.get('/food/', (req, res) => {
    res.render("food_index.ejs", {
        allFood: food,
    })
})

// Food Show Route
app.get('/food/:id', (req, res) => {
    res.render("food_show.ejs", {
        food: food[req.params.id],
        id: req.params.id,
    })
})

app.listen(PORT, () => {
    console.log(`Currently listening to Port ${PORT}`)
})