// Crie um módulo que leia um arquivo log.txt utilizando fs/promises. 
// O programa deve contar quantas linhas existem no arquivo e exibir o total no console. 
// Utilize import ao invés de require.

import fs from 'fs/promises';

async function lerArquivo(){
    try{
        const texto = await fs.readFile('./texto.txt', 'utf-8');
        const totalDeLinhas = texto.split(/\r?\n/).length;
        console.log(totalDeLinhas);              
    } catch(erro){
        console.log('Erro na leitura do arquivo', erro);
    };
}

lerArquivo();