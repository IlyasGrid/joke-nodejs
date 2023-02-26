import { $, FormElement } from "./config.js";
import { initialForm } from "./utils.js";

$('loginBtn').addEventListener('click', () => {

    console.log("befor " + FormElement("registerForm")[0].value)
    initialForm('registerForm');
    console.log("after " + FormElement("registerForm")[0].value)

    $('registerContainer').classList.add('hidden')
    $('loginContainer').classList.remove('hidden')

})
$('registerBtn').addEventListener('click', () => {

    console.log("befor " + FormElement("loginForm")[0].value)
    initialForm('loginForm')
    console.log("after " + FormElement("loginForm")[0].value)

    $('registerContainer').classList.remove('hidden')
    $('loginContainer').classList.add('hidden')
})
