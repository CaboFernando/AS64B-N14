import ServicoDeNotificacao from '../negocio/ServicoNotificacao'

class EmailService implements ServicoDeNotificacao {
    enviar(mensagem : string) : void {
      console.log(`Enviando e-mail: ${mensagem}`);
    }
}

export default EmailService