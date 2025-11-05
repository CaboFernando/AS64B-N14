import ServicoDeNotificacao from './ServicoNotificacao'

class Pedido {
    id: number
    notificador: ServicoDeNotificacao

    constructor(id : number, notificador : ServicoDeNotificacao) {
      this.id = id
      this.notificador = notificador
    }
  
    _finalizarPedido() {
        //TODO logica de negocio de pedido
    }

    fecharPedido() {
        this._finalizarPedido()
        
        let msg = "Pedido " + this.id + " realizado com sucesso!"
        this.notificador.enviar(msg);
    }
  }

  export default Pedido