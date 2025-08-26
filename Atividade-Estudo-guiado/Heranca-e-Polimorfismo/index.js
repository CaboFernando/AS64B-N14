var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1. Criar uma classe Veiculo e duas subclasses Carro e Moto
var Veiculo = /** @class */ (function () {
    function Veiculo(nome) {
        this.nome = nome;
    }
    return Veiculo;
}());
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // sobrescrevendo mover()
    Carro.prototype.mover = function () {
        console.log("".concat(this.nome, " est\u00E1 andando sobre quatro rodas \uD83D\uDE97"));
    };
    return Carro;
}(Veiculo));
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // sobrescrevendo mover()
    Moto.prototype.mover = function () {
        console.log("".concat(this.nome, " est\u00E1 andando sobre duas rodas \uD83C\uDFCD\uFE0F"));
    };
    return Moto;
}(Veiculo));
// 3. Criar uma lista de Veiculo[] e percorrer chamando mover()
var veiculos = [
    new Carro("Fusca"),
    new Moto("Honda CG"),
    new Carro("Tesla"),
    new Moto("Yamaha")
];
for (var _i = 0, veiculos_1 = veiculos; _i < veiculos_1.length; _i++) {
    var v = veiculos_1[_i];
    v.mover(); // polimorfismo: cada um executa seu mover()
}
