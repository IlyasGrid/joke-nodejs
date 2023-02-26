const user = require("../models/user")


const isConnected = async (req, res, next) => {
    if (!req.session.isConnected) {
        console.log("user isn't connected")
        res.redirect('/user/login')
    }
    else {
        let getUser = await user.findById(req.session.userId)
        console.log("user" + getUser.username + " isconnected")
        next()
    }
}
module.exports = { isConnected }