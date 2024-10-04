function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTexto('.cabecalho__titulo', 'FFteam');
exibirTexto('.cabecalho__subtitulo', 'Consultoria Esportiva');
exibirTexto('.desenvolvedor', 'Desenvolvido por ');
exibirTexto('.rodape__link', 'Maira Araújo');
exibirTexto('.local-ano', 'Rio de Janeiro | 2024');