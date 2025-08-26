// 1. Criar uma classe Veiculo e duas subclasses Carro e Moto
abstract class Veiculo {
    constructor(public nome: string) {}

    // 2. Implementar o método mover() em Veiculo (como abstrato)
    abstract mover(): void;
}

class Carro extends Veiculo {
    // sobrescrevendo mover()
    mover(): void {
        console.log(`${this.nome} está andando sobre quatro rodas 🚗`);
    }
}

class Moto extends Veiculo {
    // sobrescrevendo mover()
    mover(): void {
        console.log(`${this.nome} está andando sobre duas rodas 🏍️`);
    }
}

// 3. Criar uma lista de Veiculo[] e percorrer chamando mover()
let veiculos: Veiculo[] = [
    new Carro("Fusca"),
    new Moto("Honda CG"),
    new Carro("Tesla"),
    new Moto("Yamaha")
];

for (let v of veiculos) {
    v.mover(); // polimorfismo: cada um executa seu mover()
}
