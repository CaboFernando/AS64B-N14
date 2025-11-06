"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportadorJSON = void 0;
class ExportadorJSON {
    exportar(dados) {
        console.log("Exportando relatório em JSON...");
        console.log(JSON.stringify(dados));
    }
}
exports.ExportadorJSON = ExportadorJSON;
