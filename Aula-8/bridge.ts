// --- Implementação (formato de saída) ---
interface ReportFormatter {
  format(title: string, content: string): string;
}

// --- Implementação concreta ---
class JSONFormatter implements ReportFormatter {
  format(title: string, content: string): string {
    return JSON.stringify({ title, content }, null, 2);
  }
}

class HTMLFormatter implements ReportFormatter {
  format(title: string, content: string): string {
    return `<html>
  <head><title>${title}</title></head>
  <body><h1>${title}</h1><p>${content}</p></body>
</html>`;
  }
}

// --- Abstração (Relatório) ---
abstract class Report {
    protected formatter: ReportFormatter;

  constructor(formatter: ReportFormatter) {
    this.formatter = formatter;
  }

  abstract generate(): string;
}

// --- Abstrações refinadas ---
class CompleteReport extends Report {
  generate(): string {
    const title = "Relatório Completo";
    const content = "Este é o relatório completo com todos os detalhes.";
    return this.formatter.format(title, content);
  }
}

class SummaryReport extends Report {
  generate(): string {
    const title = "Relatório Resumido";
    const content = "Este é um resumo do relatório.";
    return this.formatter.format(title, content);
  }
}

// --- Cliente ---
function main() {
  const reports: Report[] = [
    new CompleteReport(new JSONFormatter()),
    new CompleteReport(new HTMLFormatter()),
    new SummaryReport(new JSONFormatter()),
    new SummaryReport(new HTMLFormatter())
  ];

  reports.forEach((report, i) => {
    console.log(`--- Relatório ${i + 1} ---`);
    console.log(report.generate());
    console.log("\n");
  });
}

main();
