// src/services/QueueManager.ts
import { Person } from '../models/Person';

export class QueueManager {
  private queue: Person[] = [];

  addPerson(identifier: string): void {
    const exists = this.queue.find(p => p.identifier === identifier);
    if (exists) {
      console.log(`⚠️ Pessoa com identificador "${identifier}" já está na fila.`);
      return;
    }
    this.queue.push(new Person(identifier));
    console.log(`✅ Pessoa "${identifier}" adicionada à fila.`);
  }

  callNext(): void {
    if (this.queue.length === 0) {
      console.log('📭 A fila está vazia.');
      return;
    }
    const next = this.queue.shift();
    console.log(`🎉 Chamando: ${next?.identifier}`);
  }

  listQueue(): void {
    if (this.queue.length === 0) {
      console.log('📭 A fila está vazia.');
      return;
    }

    console.log('\n📋 Fila atual:');
    this.queue.forEach((person, index) => {
      console.log(`${index + 1}. ${person.identifier}`);
    });
    console.log();
  }
}
