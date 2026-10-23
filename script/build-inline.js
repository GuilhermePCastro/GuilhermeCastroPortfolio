const fs = require('fs');
const path = require('path');

// Caminhos ajustados considerando que o script está dentro da pasta 'script/'
const htmlPath = path.join(__dirname, '..', 'index.html'); // Sobe um nível para achar o index.html na raiz
const cssPath = path.join(__dirname, '..', 'dist', 'output.css'); // Sobe um nível e entra na pasta dist

try {
    // 1. Ler o conteúdo do HTML e do CSS compilado
    let htmlContent = fs.readFileSync(htmlPath, 'utf8');
    const cssContent = fs.readFileSync(cssPath, 'utf8');

    // 2. Localizar a tag <link> do Tailwind no HTML
    const linkRegex = /<link rel="stylesheet"[^>]*href="[^"]*output\.css"[^>]*>/i;

    if (linkRegex.test(htmlContent)) {
        // 3. Substituir a tag link pelo bloco <style> com o CSS minificado dentro
        htmlContent = htmlContent.replace(linkRegex, `<style>\n${cssContent}\n</style>`);
        
        // 4. Salvar o index.html atualizado na raiz
        fs.writeFileSync(htmlPath, htmlContent, 'utf8');
        console.log('Sucesso: CSS injetado de forma inline no HTML!');
    } else {
        console.log('Aviso: Tag do link CSS não encontrada no HTML.');
    }
} catch (error) {
    console.error('Erro ao automatizar o CSS inline:', error);
}