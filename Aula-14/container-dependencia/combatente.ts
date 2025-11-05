class Combatente {
  nome: string;
  vida: number;

  constructor(nome : string, vida : number = 100 ) {
    this.nome = nome;
    this.vida = vida;
  }

  receberDano(valor: number) {
    this.vida -= valor;
    if (this.vida < 0) this.vida = 0;
  }

  estaVivo() {
    return this.vida > 0;
  }
}

export default Combatente