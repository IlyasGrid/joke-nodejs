import { $,urlApi } from "./config.js";
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
    const divCard = document.createElement('div');
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const a = document.createElement('a');
    const button = document.createElement('button');

    divCard.classList.add("card");

    const { author, joke ,_id } = data;

    h2.innerText = author + "";
    p.innerText = joke + "";
    button.innerText = "delete"


    a.appendChild(h2)
    a.setAttribute('href', '/joke/' + author);
    div.appendChild(a)
    div.appendChild(p)
    divCard.appendChild(div)
    divCard.appendChild(button)

    button.addEventListener('click', async () => {
        const response = await fetch(urlApi + "joke/" + _id, { method: "DELETE" })
        if (response.ok)
            return divCard.remove();
        alert("can't delete todo")
    })

    $("container").appendChild(divCard)

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