"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatorioVendas = void 0;
class RelatorioVendas {
    constructor(exportador) {
        this.exportador = exportador;
        this.dados = {
            data: "2025-10-23",
            total: 12000,
            itens: 230,
        };
    }
    gerarRelatorio() {
        console.log("Gerando relatório de vendas...");
        this.exportador.exportar(this.dados);
    }
}
exports.RelatorioVendas = RelatorioVendas;
