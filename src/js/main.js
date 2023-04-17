import "../scss/styles.scss";
import convertAndSave from "./convert.js";

const form = document.getElementById("convert-form")


// Adiciona um eventListener ao formulário principal.
// Este vai ser responsável por toda a funcionalidade do site.
form.addEventListener('submit', (evt) => {
    // Previne o comportamento padrão do evento (recarregar a página)
    evt.preventDefault()
    const target = evt.currentTarget
    // Converte o formulário em um objeto FormData para
    // facilitar a leitura dos dados.
    const formData = new FormData(target)
    // Chama a função principal do arquivo convert.js
    convertAndSave(formData)
})