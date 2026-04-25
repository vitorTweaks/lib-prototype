import fs from 'fs';
import path from 'path';
import trataErros from './erros/funcoesErro.js';
import { contarPalavras } from './index.js';
import { montaSaidaArquivo } from './helpers.js';
import { Command } from 'commander';
import chalk from 'chalk';
// const fs = require('fs'); fs = file system | mesma função do código acima (commented)

const program = new Command();

program
    .version('0.0.1')
    .option('-t, --texto <string>', 'caminho do texto à ser processado')
    .option('-d, --destino <string>', 'caminho da pasta onde salvar o arquivo de resultados')
    .action((options) => {
        const { texto, destino } = options;

        if (!texto || !destino) {
            console.error(chalk.red('Erro, favor inserir caminho de origem e destino.'));
            program.help();
            return;
        }

        const caminhoTexto = path.resolve(texto);
        const caminhoDestino = path.resolve(destino);

        try {

            processaArquivo(caminhoTexto, caminhoDestino);
            console.log(chalk.green('Texto processado com sucesso !'))
        } catch (erro) {
            console.log('Ocorreu um erro no processamento', erro);
        }
    })

program.parse();

// const caminhoArquivo = process.argv;
// const link = caminhoArquivo[2];
// const endereco = caminhoArquivo[3];


function processaArquivo(texto, destino) {
    fs.readFile(texto, 'utf-8', (erro, texto) => {
        try {
            if (erro) throw erro
            const resultado = contarPalavras(texto);
            criaESalvaArquivo(resultado, destino);
        } catch (erro) {
            trataErros(erro);
            // if (erro.code === 'ENOENT') { (commented)
            // console.log('ERRO QUE ESPERAVA'); (commented)
            // } else { (commented)
            // console.log('OUTRO ERRO'); (commented)
            // } (commented)
        }
    })
}


// async function criaESalvaArquivo(listaPalavras, endereco) {
// const arquivoNovo = `${endereco}/resultado.txt`;
// const textoPalavras = JSON.stringify(listaPalavras);
// try {
// await fs.promises.writeFile(arquivoNovo, textoPalavras);
// console.log('Arquivo Criado');
// } catch (erro) {
// throw erro;
// }
// }

// (função then)
function criaESalvaArquivo(listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = montaSaidaArquivo(listaPalavras);//JSON.stringify(listaPalavras)

    fs.promises.writeFile(arquivoNovo, textoPalavras)
        .then(() => {
            console.log('Arquivo Criado');
            // processamento feito com o resultado da promessa
        })
        .catch((erro) => {
            throw erro
        })
        .finally(() => {
            console.log('Operação Finalizada');
        })
}