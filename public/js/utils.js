import { $ } from "./config.js";
import { postJoke } from "./fetch.js";

const createCards = (data) => {
    const div = document.createElement('div')
    const h2 = document.createElement('h2')
    const p = document.createElement('p');
    div.classList.add("card");
    const { author, joke } = data;
    h2.innerText = author + "";
    p.innerText = joke + "";

    div.appendChild(h2)
    div.appendChild(p)
    $("container").appendChild(div)
}

const getJoke = () => {
    const authorInput = $('authorInput').value;
    const jokeInput = $('jokeInput').value;

    const joke = {
        author: authorInput,
        joke: jokeInput,
    }

    return joke;
}

const createJoke = () => {
    postJoke(getJoke())
}
export { createCards, getJoke, createJoke };