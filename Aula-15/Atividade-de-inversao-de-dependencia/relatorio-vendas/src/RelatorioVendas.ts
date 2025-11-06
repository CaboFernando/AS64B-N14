import { IExportadorRelatorio } from "./exportadores/IExportadorRelatorio";

export class RelatorioVendas {
  private dados: any;
  private exportador: IExportadorRelatorio;

  constructor(exportador: IExportadorRelatorio) {
    this.exportador = exportador;
    this.dados = {
      data: "2025-10-23",
      total: 12000,
      itens: 230,
    };
  }

  gerarRelatorio(): void {
    console.log("Gerando relatório de vendas...");
    this.exportador.exportar(this.dados);
  }
}
