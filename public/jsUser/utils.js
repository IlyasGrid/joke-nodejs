import { FormElement } from "./config.js"

const formToJson = (idForm) => {
    let form = document.getElementById(idForm)
    let formData = new FormData(form)
    let datas = {}
    formData.forEach((element, key) => datas[key] = element)
    return datas;
}
const initialForm = (formName) => {

    const form = FormElement(formName)
    for (let i = 0; i < form.length; i++) {
        form[i].value = '';
    }

}
export { initialForm, formToJson }