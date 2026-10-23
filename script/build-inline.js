//<link rel="stylesheet" href="./dist/output.css" id="tailwind-css">
const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'index.html');
const cssPath = path.join(__dirname, '..', 'dist', 'output.css');

try {
    let htmlContent = fs.readFileSync(htmlPath, 'utf8');
    let cssContent = fs.readFileSync(cssPath, 'utf8');

    // Corrige automaticamente o caminho das imagens para o contexto da raiz do HTML
    // Se no CSS estava '../images/', ele ajusta para './images/' no build final
    cssContent = cssContent.replace(/url\(\s*['"]?..\//g, "url('./");

    const linkRegex = /<link rel="stylesheet"[^>]*href="[^"]*output\.css"[^>]*>/i;

    if (linkRegex.test(htmlContent)) {
        htmlContent = htmlContent.replace(linkRegex, `<style>\n${cssContent}\n</style>`);
        
        fs.writeFileSync(htmlPath, htmlContent, 'utf8');
        console.log('Sucesso: CSS injetado e caminhos de imagem corrigidos!');
    } else {
        console.log('Aviso: Tag do link CSS não encontrada no HTML.');
    }
} catch (error) {
    console.error('Erro ao automatizar o CSS inline:', error);
}