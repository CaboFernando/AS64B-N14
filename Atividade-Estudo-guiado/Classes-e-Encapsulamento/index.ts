// 1. Criar uma classe ContaBancaria com atributos saldo e métodos depositar e sacar
class ContaBancaria {
    // 2. Usar modificadores de acesso
    private _saldo: number;

    constructor(saldoInicial: number = 0) {
        this._saldo = saldoInicial;
    }

    // Método público para depositar
    public depositar(valor: number): void {
        if (valor > 0) {
            this._saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso!`);
        } else {
            console.log("O valor do depósito deve ser maior que zero.");
        }
    }

    // Método público para sacar
    public sacar(valor: number): void {
        if (valor > 0 && valor <= this._saldo) {
            this._saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso!`);
        } else {
            console.log("Saldo insuficiente ou valor inválido para saque.");
        }
    }

    // 3. Getters e Setters para acessar saldo
    public get saldo(): number {
        return this._saldo;
    }

    protected set saldo(valor: number) {
        this._saldo = valor;
    }
}

// --- Testando a classe ---
let conta = new ContaBancaria(1000);
console.log("Saldo inicial:", conta.saldo);

conta.depositar(500);
console.log("Saldo após depósito:", conta.saldo);

conta.sacar(300);
console.log("Saldo após saque:", conta.saldo);

// tentativa de acessar saldo direto -> não permitido porque é private
// conta._saldo = 999; // ❌ Erro
