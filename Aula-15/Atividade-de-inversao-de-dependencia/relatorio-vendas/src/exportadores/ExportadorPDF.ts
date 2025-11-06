import { IExportadorRelatorio } from "./IExportadorRelatorio";

export class ExportadorPDF implements IExportadorRelatorio {
  exportar(dados: any): void {
    // Simulação de exportação para PDF
    console.log("Exportando relatório em PDF...");
    console.log(JSON.stringify(dados, null, 2));
  }
}
