// src/index.ts
import readline from 'readline';
import { QueueManager } from './services/QueueManager';

const queueManager = new QueueManager();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menu = `
========= MENU =========
1. Adicionar à fila
2. Chamar próximo
3. Ver fila
0. Sair
========================
Escolha uma opção: `;

function mainMenu() {
  rl.question(menu, (answer) => {
    switch (answer.trim()) {
      case '1':
        rl.question('Informe o identificador (CPF, celular, e-mail...): ', (id) => {
          queueManager.addPerson(id.trim());
          mainMenu();
        });
        break;
      case '2':
        queueManager.callNext();
        mainMenu();
        break;
      case '3':
        queueManager.listQueue();
        mainMenu();
        break;
      case '0':
        rl.close();
        break;
      default:
        console.log('❌ Opção inválida.');
        mainMenu();
    }
  });
}

mainMenu();
