// Desenvolva um script que leia um arquivo dados.json, processe as 
// informações e gere um novo arquivo relatorio.txt formatado. 
// Utilize leitura e escrita assíncrona com fs/promises.

import fs from 'fs/promises';

async function lerJSON(){
    try{
        const json = await fs.readFile('./dados.json', 'utf-8');
        const jsonParse = JSON.parse(json);
        const textoFormatado = JSON.stringify(jsonParse, null, 2);
        await fs.writeFile('jsonFormatado.txt', textoFormatado);
    } catch(error){
        console.log('Erro ao converter o JSON para .txt');
    }
};

lerJSON();