// 1. Criar um objeto Aluno com nome, idade e curso
let aluno = {
    nome: "Carlos",
    idade: 30,
    curso: "Análise e Desenvolvimento de Sistemas"
};

console.log("Aluno:", aluno);

// 2. Definir uma interface Pessoa e criar um objeto que a implementa
interface Pessoa {
    nome: string;
    idade: number;
}

let pessoa1: Pessoa = {
    nome: "Fabíola",
    idade: 28
};

console.log("Pessoa:", pessoa1);

// 3. Criar uma função que recebe um objeto do tipo Pessoa e retorna uma saudação
function saudar(p: Pessoa): string {
    return `Olá, ${p.nome}! Você tem ${p.idade} anos.`;
}

console.log(saudar(pessoa1));

// 4. Usar type para definir um tipo de Produto e comparar com interface
// Usando type
type Produto = {
    nome: string;
    preco: number;
};

// Usando interface
interface IProduto {
    nome: string;
    preco: number;
}

let produto1: Produto = {
    nome: "Notebook",
    preco: 3500
};

let produto2: IProduto = {
    nome: "Celular",
    preco: 2500
};

console.log("Produto (type):", produto1);
console.log("Produto (interface):", produto2);
