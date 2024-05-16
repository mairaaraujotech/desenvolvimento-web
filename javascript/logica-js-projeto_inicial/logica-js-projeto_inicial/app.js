let numeroSecreto = 5;
let chute
let tentativas = 1;

alert('Seja bem-vindo ao jogo do número secreto');

while (chute != numeroSecreto) {
    
    chute = prompt('Escolha um número entre 1 e 10');

    if (chute == numeroSecreto) {
        alert(`Você descobriu o número secreto: ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++
    }
}