function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTexto('#cabecalho-titulo', 'Desenvolvimento Web');
exibirTexto('#cabecalho-subtitulo', 'guia prático');
exibirTexto('#botao-voltar', '❰❰❰');
exibirTexto('#desenvolvedor', 'Desenvolvido por ');
exibirTexto('#desenvolvedor-link', 'Maira Araújo');
exibirTexto('#hospedagem', 'Hospedado gratuitamente no ');
exibirTexto('#github-link', 'GitHub');
exibirTexto('#local-ano', 'Rio de Janeiro | 2024');