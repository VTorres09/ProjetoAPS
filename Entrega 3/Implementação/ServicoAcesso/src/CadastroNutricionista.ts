import Nutricionista from "./models/entities/Nutricionista";
import NutricionistaBDR from "./models/repositorio/NutricionistaBDR";

class CadastroNutricionista {

    fabrica : FabricaRepositorioAbstrata;

    constructor (fabricaConcreta : FabricaRepositorioAbstrata) {
        this.fabrica = fabricaConcreta
    }
    
    // //////////////// Auth //////////////// //
    async register(cpf: string, senha: string) {

        const nutricionista = new Nutricionista(cpf, senha);
        const nutricionistaBDR : any = this.fabrica.criarRepositorioNutricionista();

        const res = await nutricionistaBDR.storeUser(nutricionista)
        
        return res

    }

    async login(cpf: string, senha: string) {

        const nutricionista = new Nutricionista(cpf, senha);
        const nutricionistaBDR : any = this.fabrica.criarRepositorioNutricionista();

        const res = await nutricionistaBDR.authenticateUser(nutricionista);
        return res === "found user" // success or not XD

    }

}

module.exports = CadastroNutricionista;