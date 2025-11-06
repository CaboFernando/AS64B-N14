class LoggerService {
    log(msg : string) {
      console.log("LOG:", msg);
    }
}
  
class RandomService {
    getAleatorio(min : number, max : number) : number{
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export { LoggerService, RandomService }