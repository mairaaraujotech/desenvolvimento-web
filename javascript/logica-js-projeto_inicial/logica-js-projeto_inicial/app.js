alert('Seja bem-vindo ao jogo do número secreto');

let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 1 e 10');

if (chute == numeroSecreto) {
    alert(`Você descobriu o número secreto: ${numeroSecreto}`);
} else {
    alert('Você errou, tente outra vez...')
}