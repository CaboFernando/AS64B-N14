export interface IMediator {
  send(message: string, from: Colleague): void;
}

export abstract class Colleague {
  constructor(protected mediator: IMediator, public name: string) {}

  send(message: string) {
    this.mediator.send(message, this);
 }
  abstract receive(message: string, from: Colleague): void;
}

export class ChatRoomMediator implements IMediator {
  private colleagues: Set<Colleague> = new Set();

  register(col: Colleague) { 
    this.colleagues.add(col); 
  }

  send(message: string, from: Colleague): void {
    for (const c of this.colleagues) {
      if (c !== from) c.receive(message, from);
    }
  }
}

export class User extends Colleague {
  receive(message: string, from: Colleague): void {
    console.log(`[${this.name}] received from [${from.name}]: ${message}`);
  }
}

const mediator = new ChatRoomMediator();

const alice = new User(mediator, 'Alice');
mediator.register(alice); 

const bob = new User(mediator, 'Bob');
mediator.register(bob);

const charlie = new User(mediator, 'Charlie');
mediator.register(charlie);

alice.send('Ola a todes!');
bob.send('Ola ola!');

//TODO Adicionar um uma forma de enviar mensagem para uma pessoa específica