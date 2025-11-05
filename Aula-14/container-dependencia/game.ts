import Batalha from "./batalha";
import Combatente from "./combatente";
import { LoggerService } from "./servico";

class Game {
    batalha: Batalha;
    logger: LoggerService;

    constructor(batalha : Batalha, logger : LoggerService) {
      this.batalha = batalha;
      this.logger = logger;
    }
  
    iniciar() {
      const heroi = new Combatente("Herói");
      const monstro = new Combatente("Monstro");
  
      this.logger.log("Batalha Iniciada!");
  
      while (heroi.estaVivo() && monstro.estaVivo()) {
        this.batalha.lutar(heroi, monstro);
      }
  
      const vencedor = heroi.estaVivo() ? heroi.nome : monstro.nome;
      this.logger.log(`🏆 ${vencedor} venceu!`);
    }
  }

export default Game