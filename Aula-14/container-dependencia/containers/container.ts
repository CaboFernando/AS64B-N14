interface Container {
    registrar(nome : string, definicao : any) : void;
    resolver(nome : string) : any;
}

export default Container