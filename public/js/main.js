import { displayForm, hideForm } from './displayHandler.js';
import { generateJoke, showAlljokes } from './fetch.js';
import { $ } from './config.js';
import { changeBtnColorErr, createJoke } from './utils.js';


showAlljokes();


$("addBtn").addEventListener('click', () => {
    if ($('form').classList.contains('hidden')) {
        displayForm();
        $("addBtn").innerHTML = "close form"
    }
    else if (!$('form').classList.contains('hidden')) {

        hideForm();
        $("addBtn").innerHTML = "add joke"
    }
})
$("submitBtn").addEventListener('click', () => {
    if ($("authorInput").value == "" || $("jokeInput").value == "") {
        changeBtnColorErr();
    }
    createJoke();
    hideForm();
})
$("generateBtn").addEventListener('click', async () => {
    $("authorInput").value = ""
    $("jokeInput").value = ""
    const joke = await generateJoke();
    $("authorInput").value = "api joke"
    $("jokeInput").value = joke.value
})