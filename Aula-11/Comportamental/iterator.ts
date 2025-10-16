// Iterator pattern - TypeScript implementation
export interface IIterator<T> {
  hasNext(): boolean;
  next(): T | null;
}

export interface IIterableCollection<T> {
  createIterator(type?: string): IIterator<T>;
}

export class TreeNode<T> {
  public children: TreeNode<T>[] = [];
  constructor(public value: T) {}
  addChild(node: TreeNode<T>) { 
    this.children.push(node); 
  }
}

class ProfundidadeIterator<T> implements IIterator<T> {
  private stack: TreeNode<T>[] = [];
  
  constructor(root?: TreeNode<T>) { 
    if (root) this.stack.push(root); 
  }

  hasNext(): boolean { 
    return this.stack.length > 0; 
  }

  next(): T | null {
    if (!this.hasNext()) return null;

    const node = this.stack.pop()!;
    for (let i = node.children.length - 1; i >= 0; i--) 
      this.stack.push(node.children[i]);

    return node.value;
  }
}

class LarguraIterator<T> implements IIterator<T> {
  private queue: TreeNode<T>[] = [];

  constructor(root: TreeNode<T>) {
    this.queue = [root];
  }

  hasNext(): boolean {
    return this.queue.length > 0;
  }

  next(): T | null {
    if (!this.hasNext()) {
      return null;
    }

    const node = this.queue.shift();
    if (node) {
      for (let child of node.children) {
        this.queue.push(child);
      }
      return node.value;
    }
    return null;
  }
}

export class TreeCollection<T> implements IIterableCollection<T> {
  constructor(public root: TreeNode<T>) {}

  createIterator(type?: 'profundidade' | 'largura'): IIterator<T> {
    if (type === 'largura') {
        return new LarguraIterator(this.root);
    }
    return new ProfundidadeIterator(this.root);
  }
}

const root = new TreeNode<string>('root');
const a = new TreeNode('a'); 
const b = new TreeNode('b');
const c = new TreeNode('c'); 
const d = new TreeNode('d');
root.addChild(a); 
root.addChild(b);
a.addChild(c); 
a.addChild(d);

const coll = new TreeCollection(root);

console.log('Iterator:');
const it = coll.createIterator('largura');
while (it.hasNext()) {
  console.log(it.next());
}

//TODO gerar um iterador personalizado que itere apenas sobre os nós folhas em ordem crescente