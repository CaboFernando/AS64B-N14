class RecursiveContainer {
    registry: Map<any, any>;

    constructor() {
      this.registry = new Map();
    }
  
    registrar(nome : string, definicao : any) {
      this.registry.set(nome, definicao);
    }
  
    resolver(nome : string) : any {
      const def = this.registry.get(nome);
  
      if (typeof def === 'function') {
        return new def();
      }
  
      if (typeof def === 'object' && def.useClass) {
        const deps = (def.deps || []).map((dep: string) => this.resolver(dep));
        return new def.useClass(...deps);
      }
  
      throw new Error(`Serviço '${nome}' inválido.`);
    }
}

export default RecursiveContainer