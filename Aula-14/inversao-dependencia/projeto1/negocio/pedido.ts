import SMSService from '../notificador/sms'

class Pedido {
    id: number;

    constructor(id : number) {
      this.id = id
    }
  
    _finalizarPedido() : void{
        //TODO logica de negocio de pedido
    }

    fecharPedido() : boolean{
        this._finalizarPedido()
        
        let notificador = new SMSService();
        let msg = "Pedido " + this.id + " realizado com sucesso!"
        notificador.enviar(msg);
        
        return true
    }
  }

  export default Pedido