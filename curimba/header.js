function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
// cabeçalho
exibirTexto('.cabecalho__titulo', 'Curimba');
exibirTexto('.cabecalho__subtitulo', 'bate tambor');
// botão de voltar
exibirTexto('.botao-voltar', 'Voltar');
// rodapé
exibirTexto('.desenvolvedor', 'Desenvolvido por ');
exibirTexto('.rodape__link', 'Maira Araújo');
exibirTexto('.local-ano', 'Rio de Janeiro | 2026');
exibirTexto('.hospedagem', 'Hospedado gratuitamente no ');
exibirTexto('.git-hub__link', 'GitHub');