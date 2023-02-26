import { $ } from "./config.js";

const afficherForm = () => { $('form').classList.remove('hidden') }
const hideForm = () => { $('form').classList.add('hidden') }

export { afficherForm, hideForm }