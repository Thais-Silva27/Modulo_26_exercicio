const anoDeNascimento: number = 1986;
const anoAtual: number = 2024;
const nome: string = 'Ian';
const digaOla: string = 'Olá';

function Oi(nome: string, saudacao: string): string {
    return `${saudacao}, ${nome}!`;
}

const calcularIdade = (anoNascimento: number, anoAtual: number): number => {
    return anoAtual - anoNascimento;
};

function soma(...idades: number[]): void {
    const total = idades.reduce((acc, idade) => acc + idade, 0);
    console.log(`A soma das idades é: ${total}`);
}


console.log(Oi(nome, digaOla));  
console.log(calcularIdade(anoDeNascimento, anoAtual)); 
soma(2024-1986); 


 
