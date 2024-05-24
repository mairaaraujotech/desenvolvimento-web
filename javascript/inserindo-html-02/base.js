function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTexto('.cabecalho__titulo', 'Portal de Notícias');
exibirTexto('.cabecalho__subtitulo', 'Fique por dentro do que acontece no mundo');
exibirTexto('.desenvolvedor', 'Desenvolvido por ');
exibirTexto('.rodape__link', 'Maira Araújo');
exibirTexto('.local-ano', 'Rio de Janeiro | 2024');
