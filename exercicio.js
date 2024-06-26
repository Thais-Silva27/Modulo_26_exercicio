"use strict";
const anoDeNascimento = 1986;
const anoAtual = 2024;
const nome = 'Ian';
const digaOla = 'Olá';
function Oi(nome, saudacao) {
    return `${saudacao}, ${nome}!`;
}
const calcularIdade = (anoNascimento, anoAtual) => {
    return anoAtual - anoNascimento;
};
function soma(...idades) {
    const total = idades.reduce((acc, idade) => acc + idade, 0);
    console.log(`A soma das idades é: ${total}`);
}
// Testando as funções corrigidas
console.log(Oi(nome, digaOla)); // Saída: "Olá, Ian!"
console.log(calcularIdade(anoDeNascimento, anoAtual)); // Saída: 38
soma(30, 25, 42); // Saída: "A soma das idades é: 97"
