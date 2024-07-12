let totalGeral = 0;
let listaProdutos = document.getElementById('lista-produtos');
let valorTotal = document.getElementById('valor-total');

listaProdutos.innerHTML = '';
valorTotal.textContent = 'R$ 0';

function adicionar() {
  let produto = document.getElementById('produto').value;
  let nomeProduto = produto.split('-')[0];
  let valorUnitario = produto.split('R$')[1];
  let quantidade = document.getElementById('quantidade').value;

  preco = quantidade * valorUnitario;
  listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
  <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;
  totalGeral = totalGeral + preco;
  let campoTotal = valorTotal;
  campoTotal.textContent = `R$ ${totalGeral}`;
  document.getElementById('quantidade').value = '';
}
  
function limpar() {
    totalGeral = 0;
    listaProdutos.innerHTML = '';
    valorTotal.textContent = 'R$ 0';
}