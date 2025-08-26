// 1. Criar uma interface genérica Repositorio<T>
interface Repositorio<T> {
    adicionar(item: T): void;
    remover(id: number): void;
    listar(): T[];
}

// Classe auxiliar Aluno
class Aluno {
    constructor(public id: number, public nome: string, public idade: number) {}
}

// 2. Implementar Repositorio<Aluno>
// 3. Criar uma classe RepositorioMemoria<T> que implementa essa interface
class RepositorioMemoria<T extends { id: number }> implements Repositorio<T> {
    private itens: T[] = [];

    adicionar(item: T): void {
        this.itens.push(item);
        console.log("Adicionado:", item);
    }

    remover(id: number): void {
        this.itens = this.itens.filter(item => item.id !== id);
        console.log(`Item com id=${id} removido.`);
    }

    listar(): T[] {
        return this.itens;
    }
}

// --- Testando com Aluno ---
let repoAlunos = new RepositorioMemoria<Aluno>();

repoAlunos.adicionar(new Aluno(1, "Carlos", 22));
repoAlunos.adicionar(new Aluno(2, "Ana", 25));

console.log("Lista de alunos:", repoAlunos.listar());

repoAlunos.remover(1);
console.log("Após remover:", repoAlunos.listar());
