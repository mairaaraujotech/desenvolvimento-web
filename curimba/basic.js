function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
// cabeçalho
exibirTexto('#cabecalho__titulo', 'caderno de');
exibirTexto('#cabecalho__subtitulo', 'pontos');
// botão de voltar
exibirTexto('#botao-voltar', '❰❰❰');
// rodapé
exibirTexto('.desenvolvedor', 'Desenvolvido por ');
exibirTexto('#autor', 'Maira Araújo');
exibirTexto('.local-ano', 'Rio de Janeiro | 2026');
exibirTexto('.hospedagem', 'Hospedado gratuitamente no ');
exibirTexto('#github', 'GitHub');