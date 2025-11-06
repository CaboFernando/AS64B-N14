import Combatente from "./combatente";
import { LoggerService, RandomService } from "./servico";

class Batalha {
    random: RandomService;
    logger: LoggerService;

    constructor(logger : LoggerService, random : RandomService) {
      this.logger = logger;
      this.random = random;
    }

    lutar(combatente1 : Combatente, combatente2 : Combatente) {
      const dano1 = this.random.getAleatorio(5, 15);
      const dano2 = this.random.getAleatorio(5, 15);
  
      combatente1.receberDano(dano2);
      combatente2.receberDano(dano1);
  
      this.logger.log(`${combatente1.nome} recebeu ${dano2} de dano`);
      this.logger.log(`${combatente2.nome} recebeu ${dano1} de dano`);
    }
}

export default Batalha