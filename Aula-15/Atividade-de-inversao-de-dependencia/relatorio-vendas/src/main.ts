import { RelatorioVendas } from "./RelatorioVendas";
import { ExportadorFactory, TipoExportacao } from "./factory/ExportadorFactory";

function main() {
  const tipoArg = (process.argv[2] || "pdf").toLowerCase() as TipoExportacao;

  try {
    const exportador = ExportadorFactory.criar(tipoArg);
    const relatorio = new RelatorioVendas(exportador);
    relatorio.gerarRelatorio();
  } catch (e: any) {
    console.error(e.message);
    console.log("Uso: npm run dev -- <pdf|csv|json>");
    process.exit(1);
  }
}

main();
