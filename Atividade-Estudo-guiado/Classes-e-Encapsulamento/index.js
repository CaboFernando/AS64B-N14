// 1. Criar uma classe ContaBancaria com atributos saldo e métodos depositar e sacar
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(saldoInicial) {
        if (saldoInicial === void 0) { saldoInicial = 0; }
        this._saldo = saldoInicial;
    }
    // Método público para depositar
    ContaBancaria.prototype.depositar = function (valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log("Dep\u00F3sito de R$".concat(valor, " realizado com sucesso!"));
        }
        else {
            console.log("O valor do depósito deve ser maior que zero.");
        }
    };
    // Método público para sacar
    ContaBancaria.prototype.sacar = function (valor) {
        if (valor > 0 && valor <= this._saldo) {
            this._saldo -= valor;
            console.log("Saque de R$".concat(valor, " realizado com sucesso!"));
        }
        else {
            console.log("Saldo insuficiente ou valor inválido para saque.");
        }
    };
    Object.defineProperty(ContaBancaria.prototype, "saldo", {
        // 3. Getters e Setters para acessar saldo
        get: function () {
            return this._saldo;
        },
        set: function (valor) {
            this._saldo = valor;
        },
        enumerable: false,
        configurable: true
    });
    return ContaBancaria;
}());
// --- Testando a classe ---
var conta = new ContaBancaria(1000);
console.log("Saldo inicial:", conta.saldo);
conta.depositar(500);
console.log("Saldo após depósito:", conta.saldo);
conta.sacar(300);
console.log("Saldo após saque:", conta.saldo);
// tentativa de acessar saldo direto -> não permitido porque é private
// conta._saldo = 999; // ❌ Erro
