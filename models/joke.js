const mongoose = require('mongoose')

const jokeSchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    joke: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports =  mongoose.model("joke",jokeSchema);