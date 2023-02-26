import { $ } from "./config.js";
import { postJoke } from "./fetch.js";


const changeBtnColorErr = () => {
    $("submitBtn").style.backgroundColor = "red";
    console.log("empty inputs");
    setTimeout(() => {
        $("submitBtn").style.backgroundColor = "#fff";
    }, 3000)
    return
};

const createCards = (data) => {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const a = document.createElement('a');
    div.classList.add("card");
    const { author, joke } = data;
    h2.innerText = author + "";

    p.innerText = joke + "";

    a.appendChild(h2)
    a.setAttribute('href', '/joke/' + author);
    div.appendChild(a)
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
    postJoke(getJoke());
}


export { createCards, getJoke, createJoke, changeBtnColorErr };