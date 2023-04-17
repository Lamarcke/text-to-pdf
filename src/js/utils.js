/**
 * Um algoritmo simples para dividir um texto em partes.
 * Funcional, mas o método splitTextToSize do jsPDF é preferível.
 * @param text
 * @returns []
 */
export function splitText(text) {
    const result = []
    const words = text.split(" ");
    const lineSize = 70

    // Caso o texto seja vazio, retorna um array com o texto vazio.
    if (text.length === 0) {
        return [text]
    }

    // Utilizamos a variavel "current" para armazenar a string atual.
    // Representa uma linha do PDF.
    let currentLine = ""
    // Iteramos sob a lista "words".
    console.log(words.length)
    for (let i = 0; i < words.length; i++) {
        // Caso "currentLine" (linha atual) seja menor que o tamanho máximo,
        // adicionamos uma palavra a string.
        if (currentLine.length < lineSize) {
            currentLine += words[i] + " "

            // Caso a iteração acabe com uma linha incompleta.
            if (i === words.length - 1) {
                result.push(currentLine)
            }
        }

            // Caso contrário, adicionamos a linha atual ao resultado final e
        // criamos uma nova linha.
        else {
            result.push(currentLine)
            currentLine = words[i] + " "
        }

    }

    return result

}

/**
 * Gera um nome de arquivo a partir do texto utilizado.
 * @param text - Texto utilizado para gerar o nome do arquivo.
 * @returns string
 */
export function generateFilename(text) {
    // Checa se o texto recebido é "null" ou "undefined", ou se está vazio.
    if (text == undefined || text.length === 0) {
        // Gera uma string única aleatória.
        return Math.random().toString(36)
    }

    if (text.length > 20) {
        return text.trim().substring(0, 20)
    } else {
        return text
    }
}