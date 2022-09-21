const CadastroNutricionista = require('./CadastroNutricionista')
import MapeadorFabricaInst from "./FabricaRepositorio/MapeadorFabrica"
require('dotenv').config()

const fabricaConcreta : FabricaRepositorioAbstrata = MapeadorFabricaInst.mapearFabrica( process.env.TIPO_FABRICA );

class Fachada {

    // //////////////// Auth //////////////// //
    static register(cpf: string, senha: string) {

        let cadastroNutricionista = new CadastroNutricionista(fabricaConcreta);
        cadastroNutricionista.register(cpf, senha);

    }

    static async login(cpf: string, senha: string) {

        let cadastroNutricionista = new CadastroNutricionista(fabricaConcreta);
        return await cadastroNutricionista.login(cpf, senha);

    }

}

export default Fachada;