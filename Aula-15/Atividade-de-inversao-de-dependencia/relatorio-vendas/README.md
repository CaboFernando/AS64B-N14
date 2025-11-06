# Relatório de Vendas — DIP + Strategy + Factory Method

Este exemplo refatora um módulo de relatórios inicialmente acoplado ao exportador PDF para aplicar:

- DIP (Princípio da Inversão de Dependência)
- Strategy (múltiplas estratégias de exportação)
- Factory Method (criação dinâmica da estratégia)

## Estrutura

- `src/exportadores/IExportadorRelatorio.ts`: contrato da estratégia (DIP)
- `src/exportadores/ExportadorPDF.ts|CSV.ts|JSON.ts`: estratégias concretas (Strategy)
- `src/factory/ExportadorFactory.ts`: seleciona/instancia a estratégia (Factory Method)
- `src/RelatorioVendas.ts`: gera dados e delega a exportação via interface
- `src/main.ts`: CLI simples para escolher o formato

## Como executar

Instale e rode os exemplos a partir desta pasta:

```bash
npm install
npm run dev -- pdf   # ou csv | json
```

Para compilar e executar o build:

```bash
npm run build
npm start -- pdf
```

## Exemplo de saída

```bash
Gerando relatório de vendas...
Exportando relatório em CSV...
data,total,itens
"2025-10-23",12000,230
```

## Como o DIP foi aplicado

- `RelatorioVendas` depende da abstração `IExportadorRelatorio`, e não de implementações concretas.
- A escolha da implementação ocorre fora de `RelatorioVendas` via `ExportadorFactory`.

## Observações

- Os exportadores simulam a saída no console. Em um projeto real, você conectaria bibliotecas de PDF/CSV/JSON conforme necessário.
