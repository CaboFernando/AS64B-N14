import { IExportadorRelatorio } from "./IExportadorRelatorio";

export class ExportadorJSON implements IExportadorRelatorio {
  exportar(dados: any): void {
    console.log("Exportando relatório em JSON...");
    console.log(JSON.stringify(dados));
  }
}
