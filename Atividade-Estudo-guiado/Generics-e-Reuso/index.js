// Classe auxiliar Aluno
var Aluno = /** @class */ (function () {
    function Aluno(id, nome, idade) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }
    return Aluno;
}());
// 2. Implementar Repositorio<Aluno>
// 3. Criar uma classe RepositorioMemoria<T> que implementa essa interface
var RepositorioMemoria = /** @class */ (function () {
    function RepositorioMemoria() {
        this.itens = [];
    }
    RepositorioMemoria.prototype.adicionar = function (item) {
        this.itens.push(item);
        console.log("Adicionado:", item);
    };
    RepositorioMemoria.prototype.remover = function (id) {
        this.itens = this.itens.filter(function (item) { return item.id !== id; });
        console.log("Item com id=".concat(id, " removido."));
    };
    RepositorioMemoria.prototype.listar = function () {
        return this.itens;
    };
    return RepositorioMemoria;
}());
// --- Testando com Aluno ---
var repoAlunos = new RepositorioMemoria();
repoAlunos.adicionar(new Aluno(1, "Carlos", 22));
repoAlunos.adicionar(new Aluno(2, "Ana", 25));
console.log("Lista de alunos:", repoAlunos.listar());
repoAlunos.remover(1);
console.log("Após remover:", repoAlunos.listar());
