// Crie um programa que leia todos os arquivos de uma pasta e mova automaticamente arquivos .txt 
// para uma subpasta chamada textos. Utilize fs.readdir(), fs.rename() e manipulação de caminhos.

import fs from 'fs/promises';
import path from 'path';

async function moverArquivos(){

    try{
        const arquivos = await fs.readdir('./')
        console.log(arquivos);
        const raiz = './';
        for(let arquivo of arquivos){
            if(path.extname(arquivo) === '.txt'){
                await fs.rename(`${arquivo}`, `./textos/${arquivo}`);
            }
        }
    } catch(error){
        console.log(error);
    }

};

moverArquivos();
