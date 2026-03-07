function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirImagem(tag, imagem){
    let campo = document.querySelector(seletor);
    elemento.innerHTML = `<img src="${caminho}" alt="${descricao}">`;
}
exibirImagem('.imagem-home', 'home.jpg', 'Logo FFteam');
exibirTexto('.cabecalho__subtitulo', 'Consultoria Esportiva');
exibirTexto('.botao-voltar', '❰❰❰');
exibirTexto('.desenvolvedor', 'Desenvolvido por ');
exibirTexto('.rodape__link', 'Maira Araújo');
exibirTexto('.hospedagem', 'Hospedado gratuitamente no ');
exibirTexto('.git-hub__link', 'GitHub');
exibirTexto('.local-ano', 'Rio de Janeiro | 2024');

function exibirImagem(seletor, caminho, descricao) {
    let elemento = document.querySelector(seletor);
    elemento.innerHTML = `<img src="${caminho}" alt="${descricao}">`;
}

// Como usar: