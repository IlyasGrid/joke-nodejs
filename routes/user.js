const express = require('express');
const { register, login } = require('../controllers/userHandler');
const route = express.Router();




route.post("/login", login)
route.post("/register", register)
route.get("/logout", (req, res) => {
    req.session.destroy();
    res.send();
})
route.get("/isConnected",async (req,res)=>{
    if(!req.session.isConnected)
        res.json({isConnected:false})
    else
        {
          let user =   await User.findById(req.session.userId)
          res.json({isConnected:true,name:user.login})
        }
})
route.get("/home", (req, res) => {
    res.redirect("/joke/")
})
module.exports = route 