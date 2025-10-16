// Interface que define o contrato dos estados
interface PlayerState {
  play(): void;
  pause(): void;
  stop(): void;
}

// Contexto: mantém uma referência para o estado atual
class MusicPlayer {
  private state: PlayerState;

  constructor() {
    this.state = new IdleState(this); // Estado inicial
  }

  public setState(state: PlayerState): void {
    this.state = state;
  }

  public play(): void {
    this.state.play();
  }

  public pause(): void {
    this.state.pause();
  }

  public stop(): void {
    this.state.stop();
  }

  public showStatus(status: string): void {
    console.log(`[Player] ${status}`);
  }
}

// Estado concreto: parado (idle)
class IdleState implements PlayerState {
  private player: MusicPlayer;

  constructor(player: MusicPlayer) {
    this.player = player;
  }

  play(): void {
    this.player.showStatus("Iniciando reprodução...");
    this.player.setState(new PlayingState(this.player));
  }

  pause(): void {
    this.player.showStatus("Não é possível pausar. O player está parado.");
  }

  stop(): void {
    this.player.showStatus("O player já está parado.");
  }
}

// Estado concreto: tocando
class PlayingState implements PlayerState {
  private player: MusicPlayer;

  constructor(player: MusicPlayer) {
    this.player = player;
  }

  play(): void {
    this.player.showStatus("Já está tocando.");
  }

  pause(): void {
    this.player.showStatus("Pausando música...");
    this.player.setState(new PausedState(this.player));
  }

  stop(): void {
    this.player.showStatus("Parando reprodução...");
    this.player.setState(new IdleState(this.player));
  }
}

// Estado concreto: pausado
class PausedState implements PlayerState {
  private player: MusicPlayer;

  constructor(player: MusicPlayer) {
    this.player = player;
  }

  play(): void {
    this.player.showStatus("Retomando reprodução...");
    this.player.setState(new PlayingState(this.player));
  }

  pause(): void {
    this.player.showStatus("O player já está pausado.");
  }

  stop(): void {
    this.player.showStatus("Parando reprodução...");
    this.player.setState(new IdleState(this.player));
  }
}

const player = new MusicPlayer();

player.play();   // Idle → Playing
player.pause();  // Playing → Paused
player.play();   // Paused → Playing
player.stop();   // Playing → Idle
player.pause();  // Idle → erro lógico

//TODO Adicionar um novo estado Disabled onde o player não poderá ser controlado, o estado será ativado em caso de erro lógico