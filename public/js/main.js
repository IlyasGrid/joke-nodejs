import { afficherForm, hideForm } from './affichage.js';
import { generateJoke, showAlljokes } from './fetch.js';
import { $ } from './config.js';
import { createJoke } from './utils.js';


showAlljokes();


$("addBtn").addEventListener('click', () => {
    afficherForm();
})
$("submitBtn").addEventListener('click', () => {
    createJoke();
    hideForm();
})
$("generateBtn").addEventListener('click', async () => {
    const joke = await generateJoke();
    $("authorInput").value = "user" + joke.id
    $("jokeInput").value = joke.value
})