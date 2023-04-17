import jsPDF from "jspdf";

/**
 * Gera um nome de arquivo a partir do texto utilizado.
 * @param text - Texto utilizado para gerar o nome do arquivo.
 * @returns string
 */
function generateFilename(text){
    // Checa se o texto recebido é "null" ou "undefined", ou se está vazio.
    if (text == undefined || text.length === 0){
        // Gera uma string única aleatória.
        return Math.random().toString(36)
    }

    if (text.length > 20){
        return text.trim().substring(0, 20)
    }
    else {
        return text
    }
}

/**
 * Converte o formulário em um PDF válido.
 * @param formData - Objeto FormData com os dados do formulário.
 * @returns void
 */
export default function convertAndSave(formData){
    // Cria um objeto jsPDF, responsável pela conversão dos textos.
    const doc = new jsPDF();
    // O texto que será convertido. Pode estar vazio (gerando um PDF vazio)
    const text = formData.get("convert-text")
    // Adiciona o texto ao PDF.
    doc.text(text, 10, 10)
    // Salva o PDF.
    doc.save(`${generateFilename(text)}.pdf`)
}