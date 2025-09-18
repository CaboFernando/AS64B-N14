// --- Interface comum ---
interface Repository {
  getData(key: string, userRole?: string): string;
}

// --- Objeto real ---
class RealRepository implements Repository {
  private database: Record<string, string> = {
    "1": "Alice",
    "2": "Bob",
    "3": "Charlie"
  };

  getData(key: string): string {
    console.log(`Consultando banco de dados para a chave ${key}`);
    return this.database[key] || "Not Found";
  }
}

// --- Proxy de logging ---
class LoggingProxy implements Repository {
  constructor(private wrappee: Repository) {}

  getData(key: string, userRole?: string): string {
    console.log(`[LOG] Acessando chave: ${key}`);
    const result = this.wrappee.getData(key, userRole);
    console.log(`[LOG] Resultado: ${result}`);
    return result;
  }
}

// --- Proxy de cache ---
class CacheProxy implements Repository {
  private cache: Map<string, string> = new Map();

  constructor(private wrappee: Repository) {}

  getData(key: string, userRole?: string): string {
    if (this.cache.has(key)) {
      console.log(`[CACHE] Retornando chave ${key} do cache`);
      return this.cache.get(key)!;
    }
    const result = this.wrappee.getData(key, userRole);
    this.cache.set(key, result);
    return result;
  }
}

// --- Proxy de controle de acesso ---
class AccessControlProxy implements Repository {
  constructor(private wrappee: Repository, private allowedRoles: string[]) {}

  getData(key: string, userRole?: string): string {
    if (!userRole || !this.allowedRoles.includes(userRole)) {
      return "Acesso negado!";
    }
    return this.wrappee.getData(key, userRole);
  }
}

// --- Cliente ---
function main() {
  const realRepo = new RealRepository();

  // Encadeando proxies: AccessControl -> Cache -> Logging -> RealRepository
  const repo: Repository = new AccessControlProxy(
    new CacheProxy(new LoggingProxy(realRepo)),
    ["admin", "manager"]
  );

  console.log(repo.getData("1", "admin"));    // permitido, passa por cache e logging
  console.log(repo.getData("2", "guest"));    // negado pelo AccessControl
  console.log(repo.getData("1", "admin"));    // retorna do cache
  console.log(repo.getData("3", "manager"));  // permitido, consulta
}

main();
