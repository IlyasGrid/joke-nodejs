const user = require("../models/user")
const bcrypt = require("bcrypt")
const saltRounds = 10


const register = async (req, res) => {

    const { username, pwd } = req.body;

    const checkUser = await user.findOne({ username: username });

    if (checkUser) {
        return res.status(404).json({ "message": "username: " + username + " already exists" })
    }

    const newPwd = await bcrypt.hash(pwd, saltRounds)
        .then((hash) => {
            console.log("hash " + hash);
            return hash
        }).catch((err) => {
            console.error(err);
        })
    console.log("pwd " + newPwd);
    const newUser = new user({
        username: username,
        pwd: newPwd
    })

    newUser.save();
    res.json('added to users')
}

const login = async (req, res) => {

    const { username, pwd } = req.body;

    if (!username || !pwd)
        return res.status(400).send({ message: "username and pwd are required" })

    const checkUser = await user.findOne({ username: username });

    if (!checkUser) {
        return res.status(404).json({ "message": "username: " + username + " nor found" })
    }

    const validPassword = await bcrypt.compare(pwd, checkUser.pwd);
    if (!validPassword) return res.status(400).send('Invalid Password.')

    req.session.isConnected = true;
    req.session.userId = checkUser.id

    return res.json({ message: "success login " })

}




module.exports = { login, register }