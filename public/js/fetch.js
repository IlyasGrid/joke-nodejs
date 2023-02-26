import { urlApi } from "./config.js"
import { createCards } from "./utils.js";


const showAlljokes = async () => {
    const data = await (await fetch(urlApi + "joke/"))
    const jokes = await data.json();

    jokes.forEach(element => {
        createCards(element)
    });
}

const generateJoke = async () => {
    const data = await fetch(("https://api.chucknorris.io/jokes/random"), {
        method: "get",
        headers: {
            "Content-Type": "application/json"
        }
    })
    const joke = await data.json();
    const { id, value } = joke;
    console.log("id: " + id + "   \n joke: " + value);

    return joke;
}

const showAuthorjokes = async (author) => {
    const data = await (await fetch(urlApi + "joke/:" + author))
    const jokes = await data.json();

    jokes.forEach(element => {
        createCards(element)
    });
}
const postJoke = async (joke) => {

    const data = await fetch('/joke', {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(joke),
    });
    console.log(response.json())
    return response.json();
}

export { showAlljokes, showAuthorjokes, postJoke, generateJoke }