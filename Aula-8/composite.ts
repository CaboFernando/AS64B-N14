// --- Componente ---
interface FileSystemItem {
  getName(): string;
  getSize(): number; // tamanho em KB, por exemplo
  print(indent?: string): void;
}

// --- Folha (Arquivo) ---
class File implements FileSystemItem {
  constructor(private name: string, private size: number) {}

  getName(): string {
    return this.name;
  }

  getSize(): number {
    return this.size;
  }

  print(indent: string = ""): void {
    console.log(`${indent}- ${this.getName()} (${this.getSize()} KB)`);
  }
}

// --- Composite (Diretório) ---
class Directory implements FileSystemItem {
  private items: FileSystemItem[] = [];

  constructor(private name: string) {}

  add(item: FileSystemItem): void {
    this.items.push(item);
  }

  getName(): string {
    return this.name;
  }

  getSize(): number {
    return this.items.reduce((total, item) => total + item.getSize(), 0);
  }

  print(indent: string = ""): void {
    console.log(`${indent}+ ${this.getName()} (${this.getSize()} KB)`);
    this.items.forEach(item => item.print(indent + "   "));
  }
}

// --- Cliente ---
function main() {
  const file1 = new File("documento.txt", 10);
  const file2 = new File("foto.jpg", 200);
  const file3 = new File("apresentacao.ppt", 500);

  const dir1 = new Directory("Trabalho");
  dir1.add(file1);
  dir1.add(file3);

  const dir2 = new Directory("Imagens");
  dir2.add(file2);

  const root = new Directory("Meu Computador");
  root.add(dir1);
  root.add(dir2);

  root.print();
}

main();
