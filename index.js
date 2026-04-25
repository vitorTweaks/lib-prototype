export function contarPalavras(texto) {
    const paragrafos = extraiParagrafos(texto);
    const contagem = paragrafos.flatMap((paragrafo) => {
        if (!paragrafo) return [];
        return verificaPalavrasDuplicadas(paragrafo);
        // })

        //     .filter((paragrafo) => paragrafo)
        //     .map((paragrafo) => {
    })
    return contagem;
}

function extraiParagrafos(texto) {
    return texto.toLowerCase().split('\n');
}

//criar um array com as palavras 
//contar as ocorrencias
// montar um objeto com o resultado
// {
//     'web': 5,
//     'computador': 4
// }
// [1, 2, [3, 4]]
//[1, 2, 3, 4]   flatMap(); -> essa é a funçao e o resultado

function limpaPalavras(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}


function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ');
    const resultado = {};
    //objeto[propriedade] = valor;
    listaPalavras.forEach(palavra => {
        if (palavra.length >= 3) {
            const palavraLimpa = limpaPalavras(palavra);
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1
        }
    })
    return resultado;
}