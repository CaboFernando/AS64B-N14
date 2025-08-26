// 1. Declarar variáveis tipadas
let nome: string = "Carlos";
let idade: number = 30;
let ativo: boolean = true;

// 2. Criar um array de números e uma tupla com nome e idade
let numeros: number[] = [10, 20, 30, 40, 50];
let pessoa: [string, number] = ["Carlos", 30];

// 3. Usar enum para representar dias da semana
enum DiasDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}

// Exemplo de uso do enum
let hoje: DiasDaSemana = DiasDaSemana.Terca;
console.log("Hoje é:", DiasDaSemana[hoje]);

// 4. Criar uma função que recebe dois números e retorna a soma
function somar(a: number, b: number): number {
    return a + b;
}

// Testando a função
console.log("Soma:", somar(5, 7));
