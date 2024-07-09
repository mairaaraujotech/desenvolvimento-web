function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTexto('.cabecalho__titulo', 'JavaScript');
exibirTexto('.cabecalho__subtitulo', 'Coleção de Desafios');
exibirTexto('.rodape__desenvolvedor', 'Desenvolvido por ');
exibirTexto('.rodape__link', 'Maira Araújo');
exibirTexto('.rodape__local-ano', 'Rio de Janeiro | 2024');