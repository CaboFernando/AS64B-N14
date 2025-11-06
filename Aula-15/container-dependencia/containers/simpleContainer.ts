import Container from "./container";

class SimpleContainer implements Container {
    registry: Map<any, any>;

    constructor() {
      this.registry = new Map();
    }
  
    registrar(nome : string, criador : any) {
      this.registry.set(nome, criador);
    }
  
    resolver(nome : string) : any {
      const criador = this.registry.get(nome);
      if (!criador) {
        throw new Error(`Dependência '${nome}' não registrada`);
      }
      return criador(this);
    }
  }

  export default SimpleContainer