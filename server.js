const express = require('express')
const nunjucks = require('nunjucks')
const data = require('./data')
const { map } = require('./data')

const server = express()
const cardRecipes = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server
})

server.get("/", function(req, res){
    return res.render("home")
})

server.get("/about", function(req, res){
    return res.render("about")
})

server.get("/recipes", function(req, res){
    return res.render("recipes", {items: cardRecipes})
})

server.get("/recipes/:index", function (req, res) {
    const recipes = data; // Array de receitas carregadas do data.js
    const recipeIndex = req.params.index;
  
    return res.render("recipe", {item: recipes[recipeIndex]})
  })

server.listen(5000, function(){
    console.log("server is running")
})
