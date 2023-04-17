import jsPDF from "jspdf";
import {generateFilename} from "./utils.js";

/**
 * Converte o formulário em um PDF válido.
 * @param formData - Objeto FormData com os dados do formulário.
 * @returns void
 */
export default function convertAndSave(formData){
    // Cria um objeto jsPDF, responsável pela conversão dos textos.
    const doc = new jsPDF();
    // O texto que será convertido. Pode estar vazio (gerando um PDF vazio)
    const textToConvert = formData.get("convert-text")
    // Divide o texto em partes para melhor visualização do PDF.
    const usableText = doc.splitTextToSize(textToConvert, 180)
    // Adiciona o texto ao PDF.
    doc.text(usableText, 15, 10)
    // Salva o PDF.
    doc.save(`${generateFilename(textToConvert)}.pdf`)
}