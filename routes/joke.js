const express = require('express');
const path = require('path');
const { addJoke, authorJoke, allJokes } = require('../controllers/jokeHandler');
const route = express.Router();



route.get("/",allJokes)
route.get("/:author",authorJoke)
route.post("/",addJoke)

module.exports = route 