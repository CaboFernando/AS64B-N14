// --- Flyweight ---
class TreeType {
  constructor(
    public name: string,
    public color: string,
    public texture: string
  ) {}

  draw(x: number, y: number): void {
    console.log(
      `Desenhando '${this.name}' [cor=${this.color}, textura=${this.texture}] na posição (${x}, ${y})`
    );
  }
}

// --- FlyweightFactory como Singleton ---
class TreeFactory {
  private static instance: TreeFactory;
  private treeTypes: Map<string, TreeType> = new Map();

  private constructor() {}

  static getInstance(): TreeFactory {
    if (!TreeFactory.instance) {
      TreeFactory.instance = new TreeFactory();
    }
    return TreeFactory.instance;
  }

  getTreeType(name: string, color: string, texture: string): TreeType {
    const key = `${name}_${color}_${texture}`;

    if (!this.treeTypes.has(key)) {
      console.log(`Criando novo tipo de árvore: ${key}`);
      this.treeTypes.set(key, new TreeType(name, color, texture));
    }

    return this.treeTypes.get(key)!;
  }
}

// --- Contexto que usa o Flyweight ---
class Tree {
  private type: TreeType;

  constructor(
    private x: number,
    private y: number,
    name: string,
    color: string,
    texture: string
  ) {
    // Agora a própria árvore pede o tipo ao factory
    this.type = TreeFactory.getInstance().getTreeType(name, color, texture);
  }

  draw(): void {
    this.type.draw(this.x, this.y);
  }
}

// --- Cliente ---
function main() {
  const trees: Tree[] = [
    new Tree(10, 20, "Carvalho", "Verde", "Rugosa"),
    new Tree(15, 25, "Carvalho", "Verde", "Rugosa"),
    new Tree(50, 60, "Pinheiro", "Verde-escuro", "Lisa"),
    new Tree(70, 80, "Pinheiro", "Verde-escuro", "Lisa")
  ];

  trees.forEach(tree => tree.draw());

  // Testando reutilização
  const oak1 = new Tree(5, 5, "Carvalho", "Verde", "Rugosa");
  const oak2 = new Tree(6, 6, "Carvalho", "Verde", "Rugosa");
  console.log("Mesmo objeto reutilizado?", oak1, oak2);
}

main();