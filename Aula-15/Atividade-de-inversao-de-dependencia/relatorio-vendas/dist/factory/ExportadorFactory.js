"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportadorFactory = void 0;
const ExportadorPDF_1 = require("../exportadores/ExportadorPDF");
const ExportadorCSV_1 = require("../exportadores/ExportadorCSV");
const ExportadorJSON_1 = require("../exportadores/ExportadorJSON");
class ExportadorFactory {
    // Factory Method
    static criar(tipo) {
        switch (tipo) {
            case "pdf":
                return new ExportadorPDF_1.ExportadorPDF();
            case "csv":
                return new ExportadorCSV_1.ExportadorCSV();
            case "json":
                return new ExportadorJSON_1.ExportadorJSON();
            default:
                throw new Error(`Tipo de exportação não suportado: ${tipo}`);
        }
    }
}
exports.ExportadorFactory = ExportadorFactory;
