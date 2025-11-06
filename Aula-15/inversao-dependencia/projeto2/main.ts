import Pedido from './negocio/pedido'
import Notificador from './notificador/sms'
 
const pedido = new Pedido(123, new Notificador())
pedido.fecharPedido()