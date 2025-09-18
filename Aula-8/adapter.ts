/**
 * Especifica a interface que será utilizada pelo cliente.
 */
class Target {
    public request(): string {
        return 'Target: The default target\'s behavior.';
    }
}

/**
 * Contém a parte que é incompatível com o código do cliente existente. 
 * O Adaptee precisa de alguma adaptação antes que o código do cliente possa usá-lo.
 */
class Adaptee {
    public specificRequest(): string {
        return '.eetpadA eht fo roivaheb laicepS';
    }
}

/**
 * O Adapter torna a interface do Adaptee compatível com a interface do Target.
 */
class Adapter extends Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = this.adaptee.specificRequest().split('').reverse().join('');
        return `Adapter: (TRANSLATED) ${result}`;
    }
}

/**
 * O código do cliente suporta todas as classes que seguem a interface Target.
 */
function clientCode(target: Target) {
    console.log(target.request());
}

console.log('Cliente: Eu posso trabalhar com os objetos Target:');
const target = new Target();
clientCode(target);

console.log('');

const adaptee = new Adaptee();
console.log('Cliente: A classe Adaptee tem uma interface estranha. Veja, eu não a entendo:');
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log('');

console.log('Cliente: Mas eu posso trabalhar com isso através do Adapter:');
const adapter = new Adapter(adaptee);
clientCode(adapter);