"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RelatorioVendas_1 = require("./RelatorioVendas");
const ExportadorFactory_1 = require("./factory/ExportadorFactory");
function main() {
    const tipoArg = (process.argv[2] || "pdf").toLowerCase();
    try {
        const exportador = ExportadorFactory_1.ExportadorFactory.criar(tipoArg);
        const relatorio = new RelatorioVendas_1.RelatorioVendas(exportador);
        relatorio.gerarRelatorio();
    }
    catch (e) {
        console.error(e.message);
        console.log("Uso: npm run dev -- <pdf|csv|json>");
        process.exit(1);
    }
}
main();
