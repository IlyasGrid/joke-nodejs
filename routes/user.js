const express = require('express');
const { register, login } = require('../controllers/userHandler');
const route = express.Router();




route.post("/login", login)
route.post("/register", register)
route.get("/logout", (req, res) => {
    req.session.destroy();
    res.send();
})
route.get("/home", (req, res) => {
    res.redirect("/joke/")
})
module.exports = route 