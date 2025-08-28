// src/models/Person.ts
export class Person {
  constructor(public identifier: string, public timestamp: number = Date.now()) {}
}
