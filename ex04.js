// Crie um script que leia um arquivo texto.txt 
// e exiba no console o número total de linhas, palavras e caracteres. Utilize fs/promises com async/await.

import fs from 'fs/promises';

async function lerTexto(){
    
    try{
        const texto = await fs.readFile('./textos/texto.txt', 'utf-8');

        const caracteres = texto.length;

        const linhas = texto.split('\n').length;

        const palavras = texto.trim().split(/\s+/).filter(p => p.length > 0).length;

        console.table({caracteres, linhas, palavras})
    } catch(error){
        console.log(error);
        
    }
}

lerTexto();


