import ServicoDeNotificacao from '../negocio/ServicoNotificacao'

class SMSService implements ServicoDeNotificacao {
    enviar(mensagem : string) : void {
      console.log(`Enviando SMS: ${mensagem}`);
    }
}

export default SMSService