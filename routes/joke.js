const express = require('express');
const path = require('path');
const { addJoke, authorJoke, allJokes,deleteJoke } = require('../controllers/jokeHandler');
const route = express.Router();



route.get("/",allJokes)
route.get("/:author",authorJoke)
route.post("/",addJoke)
route.delete("/:id", deleteJoke)
module.exports = route 