// Instale axios antes: npm install axios
import axios from "axios";

// --- Subsistemas (API REST) ---
class CountryAPI {
  private baseUrl = "https://restcountries.com/v3.1";

  async getCountryByName(name: string) {
    const response = await axios.get(`${this.baseUrl}/name/${name}`);
    return response.data;
  }

}

// --- Facade ---
class CountryServiceFacade {
  private api: CountryAPI;

  constructor() {
    this.api = new CountryAPI();
  }

  // Simplifica a resposta bruta da API
  async getCountryInfo(name: string) {
    const data = await this.api.getCountryByName(name);

    const country = data[0]; // pega o primeiro resultado
    return {
      name: country.name.common,
      capital: country.capital?.[0] || "N/A",
      region: country.region,
      population: country.population,
      flag: country.flags.svg
    };
  }
}

// --- Cliente ---
async function main() {
  const service = new CountryServiceFacade();

  console.log("=== Informações do Brasil ===");
  const brasil = await service.getCountryInfo("Brazil");
  console.log(brasil);
}

main();
