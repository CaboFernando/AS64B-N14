"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportadorCSV = void 0;
class ExportadorCSV {
    exportar(dados) {
        console.log("Exportando relatório em CSV...");
        const linhas = [];
        const headers = Object.keys(dados);
        linhas.push(headers.join(","));
        const valores = headers.map((h) => {
            const v = dados[h];
            if (Array.isArray(v))
                return `"${v.join(";")}"`;
            if (typeof v === "string")
                return `"${v.replace(/"/g, '""')}"`;
            return String(v);
        });
        linhas.push(valores.join(","));
        console.log(linhas.join("\n"));
    }
}
exports.ExportadorCSV = ExportadorCSV;
