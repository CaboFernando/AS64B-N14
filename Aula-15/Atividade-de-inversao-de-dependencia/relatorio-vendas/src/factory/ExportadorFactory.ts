import { IExportadorRelatorio } from "../exportadores/IExportadorRelatorio";
import { ExportadorPDF } from "../exportadores/ExportadorPDF";
import { ExportadorCSV } from "../exportadores/ExportadorCSV";
import { ExportadorJSON } from "../exportadores/ExportadorJSON";

export type TipoExportacao = "pdf" | "csv" | "json";

export abstract class ExportadorFactory {
  // Factory Method
  public static criar(tipo: TipoExportacao): IExportadorRelatorio {
    switch (tipo) {
      case "pdf":
        return new ExportadorPDF();
      case "csv":
        return new ExportadorCSV();
      case "json":
        return new ExportadorJSON();
      default:
        throw new Error(`Tipo de exportação não suportado: ${tipo}`);
    }
  }
}
