// 1. Criar um objeto Aluno com nome, idade e curso
var aluno = {
    nome: "Carlos",
    idade: 30,
    curso: "Análise e Desenvolvimento de Sistemas"
};
console.log("Aluno:", aluno);
var pessoa1 = {
    nome: "Fabíola",
    idade: 28
};
console.log("Pessoa:", pessoa1);
// 3. Criar uma função que recebe um objeto do tipo Pessoa e retorna uma saudação
function saudar(p) {
    return "Ol\u00E1, ".concat(p.nome, "! Voc\u00EA tem ").concat(p.idade, " anos.");
}
console.log(saudar(pessoa1));
var produto1 = {
    nome: "Notebook",
    preco: 3500
};
var produto2 = {
    nome: "Celular",
    preco: 2500
};
console.log("Produto (type):", produto1);
console.log("Produto (interface):", produto2);
