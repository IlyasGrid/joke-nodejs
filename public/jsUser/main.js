import { $ } from "./config.js"
import { hideLoginForm, hideRegisterForm, } from "./display.js"
import { login, register } from "./fetch.js"
import { formToJson } from "./utils.js"




$('registerBtn').addEventListener('click', () => { hideLoginForm() })
$('loginBtn').addEventListener('click', () => { hideRegisterForm() })

$('loginForm').addEventListener('submit', async() => {

    console.log(" login submit : "+ formToJson('loginForm'));
    const user = formToJson('loginForm')
    console.log("user "+user);
    await login(user);
})
$('registerForm').addEventListener('submit',async () => {
    console.log(" register submit : "+formToJson('registerForm'));
    await register(  formToJson('registerForm'));
})