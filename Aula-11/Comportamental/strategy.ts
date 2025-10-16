export interface Strategy {
  execute(data: number[]): number;
  name: string;
}

export class SumStrategy implements Strategy {
  name = 'sum';
  execute(data: number[]): number { return data.reduce((a,b)=>a+b,0); }
}

export class AverageStrategy implements Strategy {
  name = 'average';
  execute(data: number[]): number {
    if (data.length===0) return 0;
    return data.reduce((a,b)=>a+b,0)/data.length;
  }
}

export class ContextStrategy {
  constructor(private strategy: Strategy) {}

  setStrategy(s: Strategy) { 
    this.strategy = s; 
  }

  run(data: number[]): number { 
    return this.strategy.execute(data); 
  }
}

const ctx = new ContextStrategy(new SumStrategy());
console.log('Sum:', ctx.run([1,2,3,4]));

ctx.setStrategy(new AverageStrategy());
console.log('Avg:', ctx.run([1,2,3,4]));

//TODO Criar uma estrategia que retorne o maior valor de um array de números