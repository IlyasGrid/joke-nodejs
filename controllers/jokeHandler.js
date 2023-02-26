const joke = require("../models/joke");
const Joke = require("../models/joke")

const allJokes = async (req, res) => {
    const jokes = await Joke.find();
    return res.send(jokes);
}
const authorJoke = async (req, res) => {

    const { author } = req.params;

    console.log("specifiq");
    let jokes = await Joke.find()

    jokes = jokes.filter((element) => element.author == author)
    if (jokes.length == 0)
        return res.status(404).json({ "message": "no jokes for " + author })
    return res.json(jokes)

}

const addJoke = (req, res) => {
    const { author, joke } = req.body;
    if (author == "" || joke == "") {
        return res.status(400).json({ "message": "invalid inputs" })
    }

    const newJoke = new Joke({
        author: author,
        joke: joke
    })

    newJoke.save();
    console.log("joke saved");
    return res.status(200).json({ "message": "hahahaha good one" })
}


module.exports = { addJoke, allJokes, authorJoke }