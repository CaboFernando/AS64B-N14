import { IExportadorRelatorio } from "./IExportadorRelatorio";

export class ExportadorCSV implements IExportadorRelatorio {
  exportar(dados: any): void {
    console.log("Exportando relatório em CSV...");
    const linhas: string[] = [];
    const headers = Object.keys(dados);
    linhas.push(headers.join(","));

    const valores = headers.map((h) => {
      const v = (dados as any)[h];
      if (Array.isArray(v)) return `"${v.join(";")}"`;
      if (typeof v === "string") return `"${v.replace(/"/g, '""')}"`;
      return String(v);
    });

    linhas.push(valores.join(","));
    console.log(linhas.join("\n"));
  }
}
