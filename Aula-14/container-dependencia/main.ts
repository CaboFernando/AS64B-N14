import RecursiveContainer from './containers/recursiveContainer'
import SimpleContainer from './containers/simpleContainer'
import Container from './containers/container'

import Batalha from './batalha'
import {LoggerService, RandomService} from './servico'
import Game from './game'

console.log("=== Usando RecursiveContainer ===")
const container1 = new RecursiveContainer();
container1.registrar("LoggerService", LoggerService);
container1.registrar("RandomService", RandomService);
container1.registrar("Batalha", {
  useClass: Batalha,
  deps: ["LoggerService", "RandomService"]
});
container1.registrar("Game", {
  useClass: Game,
  deps: ["Batalha", "LoggerService"]
});
const jogo1 = container1.resolver("Game");
jogo1.iniciar();


console.log("\n\n=== Usando SimpleContainer ===")
const container2 = new SimpleContainer();
container2.registrar("LoggerService", () => new LoggerService());
container2.registrar("RandomService", () => new RandomService());
container2.registrar("Batalha", (c : Container) => new Batalha(c.resolver("LoggerService"), c.resolver("RandomService")));
container2.registrar("Game", (c : Container) => new Game(c.resolver("Batalha"), c.resolver("LoggerService")));
const jogo2 = container2.resolver("Game");
jogo2.iniciar();