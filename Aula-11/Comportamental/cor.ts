// Chain of Responsibility - TypeScript implementation
export interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: any): any;
  name?: string;
}

export abstract class BaseHandler implements Handler {
  protected nextHandler?: Handler;

  constructor(public name?: string) {}

  setNext(handler: Handler): Handler { 
    this.nextHandler = handler; 
    return handler; 
  }

  handle(request: any): any {
    if (this.nextHandler) return this.nextHandler.handle(request);
    return null;
  }
}

export class FileExistsHandler extends BaseHandler {
  handle(request: {path:string}): any {
    const fs = require('fs');
    if (!fs.existsSync(request.path)) {
      return { ok:false, reason: 'not exists', handler: this.name };
    }
    return super.handle(request);
  }
}

export class FileExtensionHandler extends BaseHandler {
  constructor(public allowed: string[], name?: string){ super(name); }
  handle(request: {path:string}): any {
    const ext = require('path').extname(request.path).replace('.','');
    if (!this.allowed.includes(ext)) 
      return { ok:false, reason: 'bad extension', ext, handler: this.name };
    return super.handle(request);
  }
}

export class FileReadHandler extends BaseHandler {
  handle(request: {path:string}): any {
    const fs = require('fs');
    try {
      const text = fs.readFileSync(request.path, 'utf8');
      return super.handle({ ok:true, content: text });
    } catch(e){ 
      return { ok:false, reason: 'read error', error: e }; 
    }
  }
}

export class FormatCSVHandler extends BaseHandler {
  constructor(public separator: string, name?: string){ 
    super(name);
    this.separator = separator;
 }

  handle(request: {content:string}): any {
    const lines = request.content.split('\n');
    const content0 = lines.map((line:string) => line.trim()).filter((line:string) => line.length > 0);
    const content = content0.map((line:string) => line.split(this.separator));
    return { ok:true, content };
  }
}

const path = require('path');
const testFile = path.join(__dirname, 'dados.csv');
const h1 = new FileExistsHandler('exists');
const h2 = new FileExtensionHandler(['csv'], 'ext');
const h3 = new FileReadHandler('read');
const h4 = new FormatCSVHandler(',', 'format');

h1.setNext(h2).setNext(h3).setNext(h4);
console.log('Handling', testFile);
console.log(h1.handle({path: testFile}));

// TODO Gerar um handler para JSON e ajustar o main para testar