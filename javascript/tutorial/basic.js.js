let idade = 35; // definindo variável que pode ter o valor reatribuído
const nascimento = 1990; // definindo variável que não pode ter o valor reatribuído
const nome = 'Maira Araújo Barbosa'; // definindo variável que contém texto

console.log(nome) //exibir texto, número ou resultado de função
console.log(nascimento);
console.log(idade);

console.log(typeof nome); // exibe o tipo da variável e não seu valor

//INCLUIR: OPERADORES ARITMÉTICOS, OPERADORES DE COMPARAÇÃO, OPERADORES UNÁRIOS PREFIX E POSFIX, 


const notaDoAluno = 6;

if (notaDoAluno >= 9) {
    console.log('Nota excelente');
} else if (notaDoAluno >= 7) {
    console.log('Nota boa');
} else {
    console.log('Outra nota');
}