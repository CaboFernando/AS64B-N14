// Command pattern - TypeScript implementation
export interface Command {
  execute(): void;
  undo(): void;
  name: string;
}

export class TextList {
  private items: string[] = [];
  add(text: string){ this.items.push(text); }
  removeLast(){ return this.items.pop(); }
  list(){ return [...this.items]; }
}

export class AddTextCommand implements Command {
  name = 'AddText';
  private removed?: string;
  constructor(private receiver: TextList, private text: string) {}
  execute(): void { this.receiver.add(this.text); }
  undo(): void { this.removed = this.receiver.removeLast(); }
}

export class CommandManager {
  private undoStack: Command[] = [];
  private redoStack: Command[] = [];
  execute(cmd: Command) { 
    cmd.execute(); 
    this.undoStack.push(cmd); 
    this.redoStack = []; 
  }
  undo() { 
    const c = this.undoStack.pop(); 
    if (c){ 
      c.undo(); 
      this.redoStack.push(c); 
    } 
  }
  redo() {
    const c = this.redoStack.pop(); 
    if (c){ 
      c.execute(); 
      this.undoStack.push(c); 
    }
  }
}

const list = new TextList();
const mgr = new CommandManager();
const c1 = new AddTextCommand(list, 'Hello');
mgr.execute(c1);
console.log(list.list());
mgr.undo();
console.log(list.list());

//TODO Adicionar um comando para limpar a lista
//TODO Adicionar um comando para adicionar X itens de uma vez