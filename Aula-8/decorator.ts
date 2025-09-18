// --- Component ---
interface Notifier {
  send(message: string): void;
}

// --- Concrete Component (base) ---
class EmailNotifier implements Notifier {
  send(message: string): void {
    console.log(`Enviando EMAIL: ${message}`);
  }
}

// --- Base Decorator ---
abstract class NotifierDecorator implements Notifier {
  constructor(protected wrappee: Notifier) {}

  send(message: string): void {
    this.wrappee.send(message);
  }
}

// --- Concrete Decorators ---
class SMSNotifier extends NotifierDecorator {
  send(message: string): void {
    super.send(message);
    console.log(`Enviando SMS: ${message}`);
  }
}

class PushNotifier extends NotifierDecorator {
  send(message: string): void {
    super.send(message);
    console.log(`Enviando PUSH: ${message}`);
  }
}

class WhatsAppNotifier extends NotifierDecorator {
  send(message: string): void {
    super.send(message);
    console.log(`Enviando WhatsApp: ${message}`);
  }
}

// --- Cliente ---
function main() {
  // Notificação simples por e-mail
  let notifier: Notifier = new EmailNotifier();
  notifier.send("Bem-vindo ao sistema!");

  console.log("\n--- Notificação com múltiplos canais ---");
  
  // Decorar com SMS e Push
  notifier = new PushNotifier(new SMSNotifier(new EmailNotifier()));
  notifier.send("Sua senha foi alterada.");

  console.log("\n--- Notificação com WhatsApp ---");
  
  // Decorar com WhatsApp + Email
  notifier = new WhatsAppNotifier(new EmailNotifier());
  notifier.send("Você recebeu uma nova mensagem.");
}

main();