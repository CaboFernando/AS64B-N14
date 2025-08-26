// 1. Declarar variáveis tipadas
var nome = "Carlos";
var idade = 30;
var ativo = true;
// 2. Criar um array de números e uma tupla com nome e idade
var numeros = [10, 20, 30, 40, 50];
var pessoa = ["Carlos", 30];
// 3. Usar enum para representar dias da semana
var DiasDaSemana;
(function (DiasDaSemana) {
    DiasDaSemana[DiasDaSemana["Domingo"] = 0] = "Domingo";
    DiasDaSemana[DiasDaSemana["Segunda"] = 1] = "Segunda";
    DiasDaSemana[DiasDaSemana["Terca"] = 2] = "Terca";
    DiasDaSemana[DiasDaSemana["Quarta"] = 3] = "Quarta";
    DiasDaSemana[DiasDaSemana["Quinta"] = 4] = "Quinta";
    DiasDaSemana[DiasDaSemana["Sexta"] = 5] = "Sexta";
    DiasDaSemana[DiasDaSemana["Sabado"] = 6] = "Sabado";
})(DiasDaSemana || (DiasDaSemana = {}));
// Exemplo de uso do enum
var hoje = DiasDaSemana.Terca;
console.log("Hoje é:", DiasDaSemana[hoje]);
// 4. Criar uma função que recebe dois números e retorna a soma
function somar(a, b) {
    return a + b;
}
// Testando a função
console.log("Soma:", somar(5, 7));
