const express = require('express');
const { connectDb } = require('./db/connection');
const app = express();
const bodyParser = require('body-parser')
require('dotenv').config();
const jokeRouter = require("./routes/joke")
const userRouter = require("./routes/user")
const cors = require("cors");
const path = require('path');
const session = require('express-');
const { isConnected } = require('./middlewares/checkConnected');

const port = process.env.PORT || 9090;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true
    }
}))

app.use((req, res, next) => {
    if (!req.session.count)
        req.session.count = 1
    else
        req.session.count++
    console.log(req.session)
    next()
})



app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname, './index.html'))
})

app.use("/user", userRouter)
app.use("/joke", isConnected, jokeRouter)


const start = async () => {
    await connectDb(process.env.MONGO_URI).then(() => {
        console.log("connect seccessfuly to database");
    }).catch((err) => {
        console.error(err);
    })
    app.listen(port, () => {
        console.log("listenning on port :" + port);
    })
}
start();
